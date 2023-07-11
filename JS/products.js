$('.products-title').addClass('font-w700');

for(var i=0;i<listProduct.length;i++){
    setProduct(listProduct[i]);
}

var pageSize = 8;
var numberPage = Math.ceil(listProduct.length / pageSize);
var currentPage; 

function checkList(pageNumber){
    $('.products').empty();

    var i = (pageSize * (pageNumber - 1));
    var endIndex = Math.min(i + pageSize, listProduct.length);
    for (let j = i; j < endIndex; j++){
        setProduct(listProduct[j]);
    }
    $('.number-page').removeClass('page-number-active');
    $('.number-page').eq(pageNumber).addClass('page-number-active'); 

    currentPage=pageNumber;

    if(currentPage==1){
        $('.page-prev').addClass('d-none');
    }else{
        $('.page-prev').removeClass('d-none');
    }
    if(currentPage==numberPage){
        $('.page-next').addClass('d-none');
    }else{
        $('.page-next').removeClass('d-none')
    }
}

//Render giao dien
for(var i=1;i<=numberPage;i++){
    let viewNavigation=`<div class="number-page w-40px h-40px d-flex justify-content-center align-items-center" onclick="checkList(${i})">
                            <p class="font-w700">${i}</p>
                        </div>`
    $('.page-number').append(viewNavigation);
}
checkList(1);

function pagePrev(){
    if (currentPage > 1) {
        checkList(currentPage - 1);
    }
}
function pageNext(){
    if (currentPage < numberPage) {
        checkList(currentPage + 1);
    }
}
