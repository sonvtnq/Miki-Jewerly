$('.products-title').addClass('font-w700');

for(var i=0;i<listProduct.length;i++){
    debugger;
    setProduct(listProduct[i]);
}

var listProductIdToPrint

var category = sessionStorage.getItem('category');
if (category === 'all') {
    $('.to-link').text('Tất cả sản phẩm');
    listProductIdToPrint=all;
} 
else if (category === 'rings') {
    $('.to-link').text('Nhẫn');
    listProductIdToPrint=rings;
}
else if (category === 'watch') {
    $('.to-link').text('Đồng hồ');
    listProductIdToPrint=watch
}
else if (category === 'necklace') {
    $('.to-link').text('Dây chuyền');
    listProductIdToPrint=necklace
}
else if (category === 'earings') {
    $('.to-link').text('Bông tai');
    listProductIdToPrint=earings
}
else if (category === 'bracelet') {
    $('.to-link').text('Lắc');
    listProductIdToPrint=bracelet
}

var pageSize = 8;
var numberPage = Math.ceil(listProductIdToPrint.length / pageSize);
var currentPage;

function checkList(pageNumber){
    $('.products').empty();

    var i = (pageSize * (pageNumber - 1));
    var endIndex = Math.min(i + pageSize, listProductIdToPrint.length);
    for (let j = i; j < endIndex; j++){
        setProduct(getProductById(listProductIdToPrint[j]));
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
