
$(document).ready(function() {
    $('input[name="paymentMethod"]').on('change', function() {
      $('input[name="paymentMethod"]').not(this).prop('checked', false);
    });
  });

function printCredit(){
  if($('input[id="creditCardSaved"]').is(':checked')){
    $('.creditCardSaved').removeClass('d-none');
  }else{
    $('.creditCardSaved').addClass('d-none');
  }
  if($('input[id="creditCard"]').is(':checked')){
    $('.creditCard').removeClass('d-none');
  }else{
    $('.creditCard').addClass('d-none');
  }
  if($('input[id="cash"]').is(':checked')){
    $('.creditCard').addClass('d-none');
    $('.creditCardSaved').addClass('d-none');
  }
}

function setProductInBill(obj){
  var quantityValue = sessionStorage.getItem(`quantityId${obj.id}`);
  var view=`<div class="product-${obj.id} item-product-payment d-flex justify-content-between w-100">
              <div class="img position-relative">
                  <img src="${obj.img}" alt="${obj.name}">  
              </div>
              <div class="product-detail d-flex justify-content-between w-80 ">
                  <div class="position-relative h-100">
                      <div class="name">
                          <p class="font-w700">${obj.name}</p>
                      </div>
                      <div class="item-color">
                          <p>Màu sắc: Silver</p>
                      </div>
                  </div>
                  <div class="d-flex flex-column">
                      <div class="price-item">
                          <p class="item-price-${obj.id} item-price font-w700">${price(quantityValue*obj.price)}</p>
                      </div>
                      <div class="quantity-bar d-flex">
                          <p class="font-w700">SL: ${quantityValue}</p>
                      </div>
                  </div>
                  
              </div>
            </div>`
  $('.productBought .product').append(view);
}

function setProductInPaymentPage(listID){
  $('productBought .product').html('');
  for(var i=0;i<listID.length;i++){
    setProductInBill(getProductById(listID[i]))
  }
}

printCredit();
setProductInPaymentPage(basket);
printBill(basket);
