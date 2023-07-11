var sumItemPrice=0;
function setProductInBasketPage(){
    $('.products').html('');
    for(var i=0;i<basket.length;i++){
        setProductInBasket(getProductById(basket[i]))
        sumItemPrice+=getProductById(basket[i]).price;
    }
}

function removeFromBasket(productID) {
    // Lấy giỏ hàng từ sessionStorage
    var basketJson = sessionStorage.getItem('basket');
    var basket = JSON.parse(basketJson);
  
    // Tạo một mảng mới chứa các sản phẩm cần giữ lại trong giỏ hàng
    var updatedBasket = basket.filter(function(item) {
      return item !== productID;
    });
  
    // Cập nhật giỏ hàng trong sessionStorage
    var updatedBasketJson = JSON.stringify(updatedBasket);
    sessionStorage.setItem('basket', updatedBasketJson);
    
    goToBasket();
}

if(basket.length==0){
    $('.alert-products').addClass('d-block');
}else{
    setProductInBasketPage()
}

$('.sum-item-price').text(price(sumItemPrice))

var shipPrice=30000;
$('.ship-price').text(price(shipPrice))

var giftPrice=199000;
$('.gift-price').text(price(giftPrice))

$('.sum-price').text(price(sumItemPrice+shipPrice-giftPrice))