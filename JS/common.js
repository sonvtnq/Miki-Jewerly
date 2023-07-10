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
        price: 355000,
    },
    {
        id: 3,
        img:'../Images/Products/But Earrings.png',
        name: 'But Earrings',
        price: 355000,
    },
    {
        id: 4,
        img:'../Images/Products/Bright Earrings.png',
        name: 'Bright Earrings',
        price: 355000,
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
        price: 355000,
    },
    {
        id: 8,
        img:'../Images/Products/VitC Earrings.png',
        name: 'VitC Earrings',
        price: 355000,
    },
    {
        id: 9,
        img:'../Images/Products/Latfee Earrings.png',
        name: 'Latfee Earrings',
        price: 355000,
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
        price: 355000,
    },
    {
        id: 12,
        img:'../Images/Products/Egypt Earrings.png',
        name: 'Egypt Earrings',
        price: 355000,
    },
    {
        id: 13,
        img:'../Images/Products/Linkie Earrings.png',
        name: 'Linkie Earrings',
        price: 355000,
    },
    {
        id: 14,
        img:'../Images/Products/Mirror Earrings.png',
        name: 'Mirror Earrings',
        price: 355000,
    },
    {
        id: 15,
        img:'../Images/Products/River Earrings.png',
        name: 'River Earrings',
        price: 355000,
    },
    {
        id: 16,
        img:'../Images/Products/Minim Earrings.png',
        name: 'Minim Earrings',
        price: 355000,
    },
]

//Hàm tìm product bằng id
function getProductById(ID){
    for(var i=0;i<listProduct.length;i++){
        if(listProduct[i].id==ID){
            return listProduct[i];
        }
    }
} 

//Hàm hiện ra giá tiền
function price(obj){
    var itemPrice = obj.price;
    itemPrice = itemPrice.toString()
    var l= itemPrice.length;
    var price='';
    var i=0;
    while(1){
        if(price.length===0){
            price+=itemPrice[itemPrice.length-l];
            l--;
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
                </div>
                <div class="detail">
                    <p class="font-w700">${obj.name}</p>
                    <p style="color: #92715A;" class="font-w700">${price(obj)}</p>
                    <div class="button btn-black w-100">
                        <p>Thêm vào giỏ hàng </p>
                    </div>
                </div>
            </div>`
    $('.products').append(view);
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

