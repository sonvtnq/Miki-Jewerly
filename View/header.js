var header=` <div class="header d-flex flex-column justify-content-center m-0-auto">
<div class="background-sidebar position-fixed d-none" id="sidebarMenu">
    <div class="icon-close w-40px position-absolute" onclick="closeSidebarMenu()">
        <img src="../Images/icon/icon-close.png" alt="icon-close">
    </div>
    <div class="sidebar-menu">
        <div class="sidebar-search w-80 m-0-auto">
            <form action="" method="post" class="search position-relative h-100">
                <input type="text" name="search" id="search" class=" h-100 p-8px-16px w-100" style="border-radius: 16px;" placeholder="Tìm kiếm">
                <div class="icon-search w-24px position-absolute cursor-pointer">
                    <img src="../Images/icon/icon-search.png" alt="icon-search">
                </div>
            </form>
        </div>
        <ul>
            <li><a onclick="goToHomePage()" href="#" title="Trang chủ">Trang chủ</a></li>
            <li><a href="#" title="Về chúng tôi">Về chúng tôi</a></li>
            <li><a href="#" title="Bộ sưu tập">Bộ sưu tập</a></li>
            <li class="d-flex justify-content-center position-relative">
                <a href="#" title="Sản phẩm">Sản phẩm</a>
                <div class="muitenxuong w-12px" style="margin-left: 3%;">
                    <img src="../Images/icon/icon-mui-ten-xuong.png" alt="">
                </div>
                <input type="checkbox" name="ckbMenuLV2" id="ckbMenuLV2">
            </li>
            <li class="menu-lv2"><a onclick="goToRings()" href="#" title="Nhẫn">Nhẫn</a></li>
            <li class="menu-lv2"><a onclick="goToWatch()" href="#" title="Đồng hồ">Đồng hồ</a></li>
            <li class="menu-lv2"><a onclick="goToNecklace()" href="#" title="Dây chuyền">Dây chuyền</a></li>
            <li class="menu-lv2"><a onclick="goToEarings()" href="#" title="Bông tai">Bông tai</a></li>
            <li class="menu-lv2"><a onclick="goToBracelet()" href="#" title="Lắc">Lắc</a></li>
            <li class="menu-lv2"><a onclick="goToProducts()" href="#" title="Xem tất cả">Xem tất cả</a></li>
            <li><a onclick="goToBasket()" href="#" title="Giỏ hàng">Giỏ hàng</a></li>
            <li><a onclick="goToLogin()" href="#" title="Đăng nhập">Đăng nhập</a></li>
        </ul>
    </div>
</div>
<div class="header-row w-100 d-flex justify-content-center">
    <div class="logo-miki w-40px">
        <img src="../Images/icon/logo-miki.png" alt="logo-miki">
    </div>
</div>
<div class="header-row w-100 position-relative">
    <div class="nav-bar d-flex justify-content-center">
        <div class="menu w-35 align-items-end d-flex position-absolute">
            <div class="icon-menu d-none w-40px" onclick="openSidebarMenu()">
                <img src="../Images/icon/icon-menu.png" alt="icon-menu">
            </div>
            <ul class="menu-lv-1 d-flex list-unstyled justify-content-between w-100">
                <li><a onclick="goToHomePage()" href="#" title="Trang chủ" class="home-page-title">Trang chủ</a></li>
                <li>
                    <a onclick="goToProducts()" href="#" title="Sản phẩm" class="products-title">Sản phẩm</a>
                    <div class="icon-muitenxuong w-12px">
                        <img src="../Images/icon/icon-mui-ten-xuong.png" alt="icon-mui-ten-xuong">
                    </div>
                    <ul class="menu-lv-2 d-none">
                        <li onclick="goToRings()" ><a href="#" title="Nhẫn">Nhẫn</a></li>
                        <li onclick="goToWatch()"><a href="#" title="Đồng hồ">Đồng hồ</a></li>
                        <li onclick="goToNecklace()"><a href="#" title="Dây chuyền">Dây chuyền</a></li>
                        <li onclick="goToEarings()"><a href="#" title="Bông tai">Bông tai</a></li>
                        <li onclick="goToBracelet()"><a href="#" title="Lắc">Lắc</a></li>
                    </ul>
                </li>
                <li><a href="#" title="Về chúng tôi" class="about-us-title">Về chúng tôi</a></li>
            </ul>
        </div>
        <div class="brand-name">
            <h1 class="font-size-h1 m-0 font-playfair-display text-nowrap p-0-16px cursor-pointer" onclick="goToHomePage()">MIKI JEWELRY</h1>
        </div>
        <div class="tool h-40px w-35 d-flex justify-content-between align-self-end position-absolute">
            <div class="search h-100 w-70">
                <div class="icon-close-search w-40px position-absolute d-none" onclick="blurSearch()">
                    <img src="../Images/icon/icon-close.png" alt="icon-close">
                </div>
                <form action="" method="post" class="searchBar position-relative h-100 w-100">
                    <input type="text" name="search" id="search" class="search-bar h-100 p-8px-16px w-100" placeholder="Tìm kiếm" onfocus="focusSearch()">
                    <div class="icon-search w-24px position-absolute cursor-pointer d-flex align-items-center" onclick="focusSearch()">
                        <img src="../Images/icon/icon-search.png" alt="icon-search">
                    </div>
                </form>
            </div>
            <div class="icon-basket w-32px d-flex align-items-center" onclick="goToBasket()">
                <img src="../Images/icon/icon-basket.png" alt="icon-basket" class="cursor-pointer icon-hover">
            </div>
            <div class="icon-user w-32px d-flex align-items-center" onclick="goToLogin()">
                <img src="../Images/icon/icon-user.png" alt="icon-user"  class="cursor-pointer icon-hover">
            </div>
            
        </div>
    </div>
</div>
</div>`

$('#header').append(header);
