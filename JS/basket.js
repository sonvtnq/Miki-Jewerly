//Hàm in ra các sản phẩm trong giỏ hàng được lưu bằng id trong sessionStorage
function setProductInBasketPage(listID){
    $('.products').html('');
    for(var i=0;i<listID.length;i++){
        setProductInBasket(getProductById(listID[i]))
    }
}

//Hàm tính tống giá của các sản phẩm
function sumItemPrice(listID){
    var sumItemPriceNumber=0;
    for(var i=0;i<listID.length;i++){
        var quantityValue = sessionStorage.getItem(`quantityId${listID[i]}`);
        sumItemPriceNumber+=getProductById(listID[i]).price * quantityValue;
    }
    return sumItemPriceNumber;
}


function checkGiftCode(){
    var giftCode = $('#giftCode').val();
    for(var i=0;i<listGiftCode.length;i++){
        if(giftCode==listGiftCode[i].id){
            $('.alert-gift').removeClass('d-block')
            sessionStorage.setItem('gift-code', listGiftCode[i].id);
            printBill(basket);
            return true;
        }
    }
    if (giftCode!=''){
        $('.alert-gift').addClass('d-block')
    }else{
        $('.alert-gift').removeClass('d-block')
    }
    sessionStorage.setItem('gift-code','');
    printBill(basket);
    return false;
}

//hàm xóa giftCode
function removeGift(){
    giftPrice=0
    sessionStorage.setItem('gift-code', '');
    $('.bill-temporary-detail .gift').removeClass('gift-disabled')
    $('.bill-temporary-detail .gift input').val("")
    printBill(basket);
}

//Hàm in giftcode
var giftPrice=0;
var shipPrice=30000;
function printGiftCode(){
    var giftCode = sessionStorage.getItem('gift-code');
    for(var i=0;i<listGiftCode.length;i++){
        if(giftCode==listGiftCode[i].id){
            giftPrice= listGiftCode[i].value;
            $('.alert-gift').removeClass('d-block')
            $('.gift-label >p').text(`${listGiftCode[i].id}`)
            $('.bill-temporary-detail .gift').addClass('gift-disabled')
            $('.bill-temporary-detail .gift input').val("Chỉ dùng được 1 ưu đãi")
            return;
        }
    }
    if (giftCode!=''){
        giftPrice=0;
    }
}

//Hàm in tiền trong hóa đơn tạm thời
function printBill(listID){
    printGiftCode();
    console.log(giftPrice);
    var sumItemPriceNumber= sumItemPrice(listID);
    if(basket.length==0){
        $('.products').html('');
        $('.products').text('Không có sản phẩm nào trong giỏ hàng !');
        $('.bill-temporary').html('');
    }else{
        setProductInBasketPage(listID);
    }
    $('.sum-item-price').text(price(sumItemPriceNumber))
    $('.ship-price').text(price(shipPrice))

    if(giftPrice>0 && giftPrice <1){
        giftPrice=giftPrice*sumItemPriceNumber;
    }
    if(giftPrice!=0){
        $('.bill-row-gift').removeClass('d-none')
        $('.gift-price').text("- "+price(giftPrice))
    }else{
        $('.bill-row-gift').addClass('d-none')
    }
    
    if(sumItemPriceNumber+shipPrice-giftPrice < 0){
        $('.sum-price').text(price(0))  
    }else{
        $('.sum-price').text(price(sumItemPriceNumber+shipPrice-giftPrice))
    }
    
}

//hàm xóa sản phẩm khỏi giỏ hàng (xóa id sản phẩm được lưu ở sessionStorage)
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

    numInBasKet(basket)
}
printBill(basket);





