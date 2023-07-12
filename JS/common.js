var listProduct=[
    {
        id: 1,
        img:'../Images/Products/Lira Earrings.png',
        name: 'Lira Earings',
        price: 355000,
    },
    {
        id: 2,
        img:'../Images/Products/Ocean Earrings.png',
        name: 'Ocean Earrings',
        price: 155000,
    },
    {
        id: 3,
        img:'../Images/Products/But Earrings.png',
        name: 'But Earrings',
        price: 149000,
    },
    {
        id: 4,
        img:'../Images/Products/Bright Earrings.png',
        name: 'Bright Earrings',
        price: 799000,
    },
    {
        id: 5,
        img:'../Images/Products/Eggs Earrings.png',
        name: 'Eggs Earrings',
        price: 355000,
    },
    {
        id: 6,
        img:'../Images/Products/Mee Earrings.png',
        name: 'Mee Earrings',
        price: 355000,
    },
    {
        id: 7,
        img:'../Images/Products/Lisa Earrings.png',
        name: 'Lisa Earrings',
        price: 1299000,
    },
    {
        id: 8,
        img:'../Images/Products/VitC Earrings.png',
        name: 'VitC Earrings',
        price: 899000,
    },
    {
        id: 9,
        img:'../Images/Products/Latfee Earrings.png',
        name: 'Latfee Earrings',
        price: 359000,
    },
    {
        id: 10,
        img:'../Images/Products/Rose Earrings.png',
        name: 'Rose Earrings',
        price: 355000,
    },
    {
        id: 11,
        img:'../Images/Products/Boho Earrings.png',
        name: 'Boho Earrings',
        price: 359000,
    },
    {
        id: 12,
        img:'../Images/Products/Egypt Earrings.png',
        name: 'Egypt Earrings',
        price: 379000,
    },
    {
        id: 13,
        img:'../Images/Products/Linkie Earrings.png',
        name: 'Linkie Earrings',
        price: 799000,
    },
    {
        id: 14,
        img:'../Images/Products/Mirror Earrings.png',
        name: 'Mirror Earrings',
        price: 499000,
    },
    {
        id: 15,
        img:'../Images/Products/River Earrings.png',
        name: 'River Earrings',
        price: 1199000,
    },
    {
        id: 16,
        img:'../Images/Products/Minim Earrings.png',
        name: 'Minim Earrings',
        price: 999000,
    },
    {
        id: 17,
        img:'../Images/Products/Emme-Rings.png',
        name: 'Emme Rings',
        price: 529000,
    },
    {
        id: 18,
        img:'../Images/Products/Era-Bracelet.png',
        name: 'Era Bracelet',
        price: 399000,
    },
    {
        id: 19,
        img:'../Images/Products/Ocean-Necklace.png',
        name: 'Ocean Necklace',
        price: 375000,
    },
    {
        id: 20,
        img:'../Images/Products/Emme-Rings.png',
        name: 'Rings',
        price: 739000,
    },
    {
        id: 21,
        img:'../Images/Products/Emme-Rings.png',
        name: 'Rings',
        price: 999000,
    },
    {
        id: 22,
        img:'../Images/Products/Emme-Rings.png',
        name: 'Rings',
        price: 899000,
    },
    {
        id: 23,
        img:'../Images/Products/Emme-Rings.png',
        name: 'Rings',
        price: 699000,
    },
    {
        id: 24,
        img:'../Images/Products/Emme-Rings.png',
        name: 'Rings',
        price: 799000,
    },
    {
        id: 25,
        img:'../Images/Products/Ocean-Necklace.png',
        name: 'Necklace',
        price: 1375000,
    },
    {
        id: 26,
        img:'../Images/Products/Ocean-Necklace.png',
        name: 'Necklace',
        price: 175000,
    },
    {
        id: 27,
        img:'../Images/Products/Ocean-Necklace.png',
        name: 'Necklace',
        price: 137000,
    },
    {
        id: 28,
        img:'../Images/Products/Ocean-Necklace.png',
        name: 'Necklace',
        price: 135000,
    },
    {
        id: 29,
        img:'../Images/Products/Era-Bracelet.png',
        name: 'Lắc tay',
        price: 599000,
    },
    {
        id: 30,
        img:'../Images/Products/Era-Bracelet.png',
        name: 'Lắc chân',
        price: 299000,
    },
    {
        id: 31,
        img:'../Images/dong-ho.png',
        name: 'Đồng hồ',
        price: 1299000,
    },
    {
        id: 32,
        img:'../Images/dong-ho.png',
        name: 'Đồng hồ',
        price: 2999000,
    },

];

var earings=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var rings=[17,20,21,22,23,24]
var necklace=[19,25,26,27,28]
var bracelet=[18,29,30]
var watch=[31,32]
var all=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]

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
                    <div class="button btn-black w-100" onclick="addToBasket(${obj.id})">
                        <p>Thêm vào giỏ hàng </p>
                    </div>
                </div>
            </div>`
    $('.products').append(view);
}

//hàm hiện ra product item ở trong giỏ hàng
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
                            <p>Màu sắc: Sliver</p>
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
                            <input type="number" name="quantity" id="quantityId${obj.id}" step="1" value="${quantityValue}">
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

// Giỏ hàng lưu trong sessionStorage
var basket = [];

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

  if(isInBasket(basket,productID)){
    alert("Sản phẩm đã tồn tại trong giỏ hàng rồi !");
  }
  else{
    // Thêm sản phẩm vào giỏ hàng
    basket.push(productID);
    sessionStorage.setItem(`quantityId${productID}`,1); // Lưu giá trị vào sessionStorage
    alert("Đã thêm sản phẩm vào giỏ hàng !");
  }
  

  // Cập nhật giỏ hàng trong sessionStorage
  var updatedBasketJson = JSON.stringify(basket);
  sessionStorage.setItem('basket', updatedBasketJson);
}
  

//Hàm mở menu con
function openSidebarMenu(){
    $("#sidebarMenu").addClass("append");
    $('body').addClass('overflow-hide');    
}
function closeSidebarMenu(){
    $("#sidebarMenu").removeClass("append");
    $('body').removeClass('overflow-hide');
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
    if(quantityValue>0){
        quantityCurrent.val(quantityValue - 1);
        sessionStorage.setItem(quantityId, quantityValue -   1); // Lưu giá trị vào sessionStorage
    }else{
        quantityCurent.value=0;
    }

    quantityValue = parseInt(quantityCurrent.val());
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

function goToBasket(){
    window.location.href = './basket.html'
}

