function setProductInBasketPage(){
    $('.products').html('');
    for(var i=0;i<basket.length;i++){
        setProductInBasket(getProductById(basket[i]))
        sumItemPrice+=getProductById(basket[i]).price;
    }
}

function sumItemPrice(){
    var sumItemPriceNumber=0;
    for(var i=0;i<basket.length;i++){
        var quantityValue = sessionStorage.getItem(`quantityId${basket[i]}`);
        sumItemPriceNumber+=getProductById(basket[i]).price * quantityValue;
    }
    return sumItemPriceNumber;
}


var shipPrice=30000;
var giftPrice=199000;

function printBill(){
    var sumItemPriceNumber= sumItemPrice();
    if(basket.length==0){
        $('.alert-products').addClass('d-block');
        shipPrice=0;
        giftPrice=0;
    }else{
        setProductInBasketPage();
    }
    $('.sum-item-price').text(price(sumItemPriceNumber))
    $('.ship-price').text(price(shipPrice))
    $('.gift-price').text("- "+price(giftPrice))
    if(sumItemPriceNumber+shipPrice-giftPrice < 0){
        $('.sum-price').text(price(0))
    }else{
        $('.sum-price').text(price(sumItemPriceNumber+shipPrice-giftPrice))
    }
    
}

function removeFromBasket(productID) {
    // debugger;
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
    
    $(`.item-product-${productID}`).addClass('d-none');
}
printBill();





