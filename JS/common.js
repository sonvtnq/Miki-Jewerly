function openSidebarMenu(){
    $("#sidebarMenu").addClass("append");
    $('body').addClass('overflow-hide');    
}
function closeSidebarMenu(){
    $("#sidebarMenu").removeClass("append");
    $('body').removeClass('overflow-hide');
}

function focusSearch(){
    $('.search').addClass('search-focus');
    $('.searchBar').addClass('h-40px');
    $(".search-bar").addClass("display-block");
    $('.icon-close-search').removeClass('d-none');
    $('.icon-search').addClass('translate-search-focus');

}
function blurSearch(){
    $('.search').removeClass('search-focus');
    $('.icon-close-search').addClass('d-none');
    $(".search-bar").removeClass("display-block");
    $('.icon-search').removeClass('translate-search-focus');
}