
var productID = sessionStorage.getItem('detail-product');
var product=getProductById(productID);

$('.list-img .img1 img').attr('src', product.img);
$('.spotlight .img img').attr('src', product.img);
$('.content .product-name h2').text(product.name)
$('.to-link').text(product.name)
$('.price .original-price > p').text(price(product.price*2))
$('.price .current-price p').text(price(product.price))

function chooseColor(ID) {
    if ($('#' + ID).is(':checked')) {
        $('.option').removeClass('option-checked');
      $('.' + ID).addClass('option-checked');
    }
}

function toSpotLight(ID) {
  var imgSrc = $('#' + ID).attr('src');
  $('.spotlight .img img').attr('src', imgSrc);
}

function setProduct(region , obj){
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
                        <p onclick="goToDetailProduct(${obj.id})">Xem chi tiết</p>
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
    $('.'+region).append(view);
}


for(var i=0;i<spotLightProduct.length;i++){
  setProduct('suggest-products',getProductById(spotLightProduct[i]))
  if(i<viewedProducts.length){
    setProduct('viewed-products',getProductById(viewedProducts[i]))
  }else{
    continue;
  }
  
}

function openDetailMobile(ID){
    if($('#'+ID).is(':checked')){
        $('#detail .head .'+ID).removeClass('d-none')
    }else{
        $('#detail .head .'+ID).addClass('d-none')
    }
    
}

function openDetailLaptop(ID){
    if ($('#' + ID).is(':checked')) {
        $('#detail .body .view').addClass('d-none');
        $('#detail .head p').removeClass('detail-checked');

        $('#detail .body .'+ID).removeClass('d-none');
        $('#detail .head .head-'+ID).addClass('detail-checked');
    }
}

if(viewedProducts.length==0){
    $('#viewedProducts').addClass('d-none');
}else{
    $('#viewedProducts').removeClass('d-none');
}
