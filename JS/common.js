
var earings=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var rings=[17,20,21,22,23,24]
var necklace=[19,25,26,27,28]
var bracelet=[18,29,30]
var watch=[31,32]
var all=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]
// Giỏ hàng lưu trong sessionStorage
var basket = [];

//Hàm tìm product bằng id
function getProductById(ID){
    for(var i=0;i<listProduct.length;i++){
        if(listProduct[i].id==ID){
            return listProduct[i];
        }
    }
} 

//Hàm hiện ra giá tiền
function price(itemPrice){
    itemPrice = itemPrice.toString()
    var l= itemPrice.length;
    var price='';
    while(1){
        if(price.length===0){
            price+=itemPrice[itemPrice.length-l];
            l--;
            if(l==0){
                price+="đ";
                break;
            }
            continue;
        }
        if(l%3===0){
            price+=".";
        }
        price+=itemPrice[itemPrice.length-l];
        l--;
        if(l===0){
            price+="đ";
            break;
        }
    }
    return price;
}

//Hàm hiện ra product item
function setProduct(obj){
    var display='d-block';
    var addDisplay='d-none';
    if(isInBasket(basket,obj.id)){
        display = 'd-none'
        addDisplay ='b-block'
    }else{
        display='d-block'
        addDisplay='d-none'
    }
    var view=`<div class="item-product">
                <div class="img">
                    <img src="${obj.img}" alt="${obj.name}">
                    <div>
                        <p>Xem chi tiết</p>
                    </div>
                </div>
                <div class="detail">
                    <p class="font-w700">${obj.name}</p>
                    <p style="color: #92715A;" class="font-w700">${price(obj.price)}</p>
                    <div class="btn-product-${obj.id} button btn-black w-100 ${display} " onclick="addToBasket(${obj.id})">
                        <p>Thêm vào giỏ hàng </p>
                    </div>
                    <div class="button w-100 cursor-default added added-product-${obj.id} ${addDisplay}">
                        <p>Đã trong giỏ hàng</p>
                    </div>
                </div>
            </div>`
    $('.products').append(view);
}


//hàm hiện ra product item ở trong page giỏ hàng
function setProductInBasket(obj){
    var quantityValue = sessionStorage.getItem(`quantityId${obj.id}`);
    var view=`<div class="product-${obj.id} item-product-row d-flex justify-content-between">
                <div class="img w-25 position-relative">
                    <img src="${obj.img}" alt="${obj.name}">
                </div>
                <div class="detail d-flex flex-column justify-content-between w-68">
                    <div class="position-relative">
                        <div class="name">
                            <p class="font-w700">${obj.name}</p>
                        </div>
                        <div class="item-color">
                            <p>Màu sắc: Silver</p>
                        </div>
                        <div class="icon-close-basket">
                            <div class="w-32px">
                                <img src="../Images/icon/icon-close.png" alt="icon-close" onclick="removeFromBasket(${obj.id})" >
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div class="quantity-bar d-flex">
                            <div class=" minus d-flex align-items-center" onclick="quantityDecrease('quantityId${obj.id}',${obj.id})">
                                <img src="../Images/icon/icon-minuss.jpg" alt="minus">
                            </div>
                            <input type="number" name="quantity" id="quantityId${obj.id}" step="1" value="${quantityValue}" onblur="quantityBlur('quantityId${obj.id}',${obj.id})">
                            <div class="plus w-32px d-flex align-items-center" onclick="quantityIncrease('quantityId${obj.id}',${obj.id})">
                                <img src="../Images/icon/icon-plus.png" alt="plus">
                            </div>
                        </div>
                        <div class="price-item">
                            <p class="item-price-${obj.id} item-price font-w700">${price(obj.price * quantityValue)}</p>
                        </div>
                    </div>
                    
                </div>
            </div>`
    $('.products').append(view);
    sessionStorage.setItem(`quantityId${obj.id}`, quantityValue); // lưu vào sessionStorage
}


//Kiểm tra xem sản phẩm có trong giỏ hàng hay chưa
function isInBasket(arr,productID){
    for(var i=0;i<arr.length;i++){
        if(arr[i]==productID){
            return true;
        }
    }
    return false;
}

// Kiểm tra xem giỏ hàng đã tồn tại trong sessionStorage hay chưa
if (sessionStorage.getItem('basket')) {
  var basketJson = sessionStorage.getItem('basket');
  basket = JSON.parse(basketJson);
} else {
  // Nếu chưa tồn tại, tạo một giỏ hàng mới và lưu vào sessionStorage
  var basketJson = JSON.stringify(basket);
  sessionStorage.setItem('basket', basketJson);
}

// Hàm thêm sản phẩm vào giỏ hàng
function addToBasket(productID) {
    // Lấy giỏ hàng từ sessionStorage
    var basketJson = sessionStorage.getItem('basket');
    var basket = JSON.parse(basketJson);

    // Thêm sản phẩm vào giỏ hàng
    basket.push(productID);
    sessionStorage.setItem(`quantityId${productID}`,1); // Lưu giá trị vào sessionStorage
    
    $(`.btn-product-${productID}`).addClass('d-none');
    $(`.btn-product-${productID}`).removeClass('d-block');
    $(`.added-product-${productID}`).removeClass('d-none');
    $(`.added-product-${productID}`).addClass('d-block');
    $(`.added-product-${productID} p`).text('Đã thêm vào giỏ hàng');
    $(`.added-product-${productID}`).css('background-color','rgba(0,255,0,0.6)');

    // Cập nhật giỏ hàng trong sessionStorage
    var updatedBasketJson = JSON.stringify(basket);
    sessionStorage.setItem('basket', updatedBasketJson);

    //hiện ra số sản phẩm trong giỏ hàng trên header
    // $('.number-product-in-basket p').text(`${basket.length}`)
    numInBasKet(basket)
}

//Hàm hiện số sản phẩm trong giỏ hàng trên header
function numInBasKet(basket){
    if(basket.length >0){
        $('.number-product-in-basket').addClass('d-block')
        $('.number-product-in-basket p').text(`${basket.length}`)
    }else{
        $('.number-product-in-basket').removeClass('d-block')
    }
}
numInBasKet(basket)

//Hàm mở menu con
function openSidebarMenu(){
    $("#sidebarMenu").addClass("append");
    $('body').addClass('overflow-hide'); 
    $('footer').addClass('position-static')   
}
function closeSidebarMenu(){
    $("#sidebarMenu").removeClass("append");
    $('body').removeClass('overflow-hide');
    $('footer').removeClass('position-static')  
}

//Hàm mở side bar menu - sản phẩm
$(document).ready(
    function(){
    $('#ckbMenuLV2').change(function() {
      if ($(this).is(':checked')) {
        $('.menu-lv2').addClass('d-block');
      } else {
        $('.menu-lv2').removeClass('d-block');
      }
    });
  });


//Hàm mở search
function focusSearch(){
    $('.search').addClass('search-focus');
    $('.searchBar').addClass('h-40px');
    $(".search-bar").addClass("display-block");
    $('.icon-close-search').removeClass('d-none');
    $('.icon-search').addClass('translate-search-focus');
    $('body').addClass('overflow-hide'); 

}
function blurSearch(){
    $('.search').removeClass('search-focus');
    $('.icon-close-search').addClass('d-none');
    $(".search-bar").removeClass("display-block");
    $('.icon-search').removeClass('translate-search-focus');
    $('body').removeClass('overflow-hide');
}

//Hàm tăng giảm số lượng
function quantityIncrease(quantityId,productID) {
    var quantityCurrent = $("#" + quantityId);
    var quantityValue = parseInt(quantityCurrent.val());
    quantityCurrent.val(quantityValue + 1);
    sessionStorage.setItem(quantityId, quantityValue + 1); // Lưu giá trị vào sessionStorage

    quantityValue = parseInt(quantityCurrent.val());
    var pri=quantityValue*getProductById(productID).price;
    console.log(price);
    var lastPrice=price(pri);
    $(`.item-price-${productID}`).text(lastPrice);
    
    printBill(basket)

}
function quantityDecrease(quantityId,productID){
    var quantityCurrent = $("#" + quantityId);
    var quantityValue = parseInt(quantityCurrent.val());
    if(quantityValue>1){
        quantityCurrent.val(quantityValue - 1);
        sessionStorage.setItem(quantityId, quantityValue -   1); // Lưu giá trị vào sessionStorage
    }else{
        quantityCurent.value=1;
    }

    quantityValue = parseInt(quantityCurrent.val());
    var pri=quantityValue*getProductById(productID).price;
    console.log(price);
    var lastPrice=price(pri);
    $(`.item-price-${productID}`).text(lastPrice);
    
    printBill(basket)
}
function quantityBlur(quantityId,productID){
    var quantityCurrent = $("#" + quantityId);
    var quantityValue = parseInt(quantityCurrent.val());

    if(quantityValue>0){
        quantityCurrent.val(quantityValue);
        sessionStorage.setItem(quantityId, quantityValue); // Lưu giá trị vào sessionStorage
    }
    else{
        quantityCurrent.val(1);
        sessionStorage.setItem(quantityId, 1);
    }

    // quantityValue = parseInt(quantityCurrent.val());
    var pri=quantityValue*getProductById(productID).price;
    console.log(price);
    var lastPrice=price(pri);
    $(`.item-price-${productID}`).text(lastPrice);
    
    printBill(basket)
}


//Các hàm di chuyển trang
function goToHomePage(){
    // Kiểm tra trang hiện tại
    if (!window.location.href.includes('home-page.html')) {
        // Nếu sai, di chuyển đến trang khác
        window.location.href = './home-page.html'
    }
}
function goToLogin(){
    if (!window.location.href.includes('login.html')) {
        window.location.href = './login.html'
    }
}

function goToProducts() {
    sessionStorage.setItem('category', 'all');
        window.location.href = './products.html'
}
  
function goToRings() {
    sessionStorage.setItem('category', 'rings');
        window.location.href = './products.html'
}
function goToWatch() {
    sessionStorage.setItem('category', 'watch');
        window.location.href = './products.html'
}
function goToNecklace() {
    sessionStorage.setItem('category', 'necklace');
        window.location.href = './products.html'
}
function goToEarings() {
    sessionStorage.setItem('category', 'earings');
        window.location.href = './products.html'
}
function goToBracelet() {
    sessionStorage.setItem('category', 'bracelet');
    window.location.href = './products.html'
}

function goToAboutUs(){
    sessionStorage.setItem('about-us', 'brand&history');
    window.location.href = './about-us.html'
}
function goToAboutUsRecruit(){
    sessionStorage.setItem('about-us', 'recruit');
    window.location.href = './about-us.html'
}

function goToBasket(){
    window.location.href = './basket.html'
}

function goToPaymentPage(){
    window.location.href = './payment.html'
}

