function setProductInBasketPage(listID){
    $('.products').html('');
    for(var i=0;i<listID.length;i++){
        setProductInBasket(getProductById(listID[i]))
    }
}

function sumItemPrice(listID){
    var sumItemPriceNumber=0;
    for(var i=0;i<listID.length;i++){
        var quantityValue = sessionStorage.getItem(`quantityId${listID[i]}`);
        sumItemPriceNumber+=getProductById(listID[i]).price * quantityValue;
    }
    return sumItemPriceNumber;
}


var shipPrice=30000;
var giftPrice=199000;

function printBill(listID){
    debugger;
    var sumItemPriceNumber= sumItemPrice(listID);
    if(basket.length==0){
        $('.products').html('');
        $('.products').text('Không có sản phẩm nào trong giỏ hàng !');
        shipPrice=0;
        giftPrice=0;
    }else{
        setProductInBasketPage(listID);
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
    // Lấy giỏ hàng từ sessionStorage
    var basketJson = sessionStorage.getItem('basket');
    var listID = JSON.parse(basketJson);
  
    // Tạo một mảng mới chứa các sản phẩm cần giữ lại trong giỏ hàng
    var updatedBasket = listID.filter(function(item) {
      return item !== productID;
    });
  
    // Cập nhật giỏ hàng trong sessionStorage
    var updatedBasketJson = JSON.stringify(updatedBasket);
    sessionStorage.setItem('basket', updatedBasketJson);
    
    basket=updatedBasket;
    printBill(basket);

}
printBill(basket);





