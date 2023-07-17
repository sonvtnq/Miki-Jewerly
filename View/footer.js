var footer=`<div class="footer m-0-auto mt-120px">
<div class="f-zone1 w-100 h-auto">
    <div class="col-6 h-100 d-flex flex-column justify-content-between mb-5">
        <div class="f-row mb-4">
            <h2 class="font-size-h2 font-w700">Đăng kí để nhận khuyến mãi</h2>
        </div>
        <div class="f-row">
            <form action="" method="post" class=" h-40px position-relative w-410px">
                <input type="email" name="email" id="email" class="input-email w-100 h-100 p-8px-16px" placeholder="Nhập Email">
                <div class="icon-muitenphai w-12px">
                    <img src="../Images/icon/icon-mui-ten-sang.png" alt="icon-mui-ten-sang">
                </div>
            </form>
        </div>
    </div>
    <div class="col-6 h-100 d-flex flex-column justify-content-between mb-5">
        <div class="f-row d-flex justify-content-end mb-4">
            <h2 class="font-size-h2 font-w700">Kết nối với chúng tôi tại</h2>
        </div>
        <div class="f-row text-end d-flex justify-content-end">
            <div class="social-icon d-flex justify-content-between h-40px w-330px position-relative">
                <a href="#" title="Facebook" class="icon-social h-100 d-block cursor-pointer">
                    <img src="../Images/icon/logo-facebook.png" alt="Facebook" class="h-100">
                </a>
                <a href="#" title="Twitter" class="icon-social h-100 d-block cursor-pointer">
                    <img src="../Images/icon/logo-twiter.png" alt="Twitter" class="h-100">
                </a>
                <a href="#" title="Instagram" class="icon-social h-100 d-block cursor-pointer">
                    <img src="../Images/icon/logo-instagram.png" alt="Instagram" class="h-100">
                </a>
                <a href="#" title="Tiktok" class="icon-social h-100 d-block cursor-pointer">
                    <img src="../Images/icon/logo-tiktok.png" alt="Tiktok" class="h-100">
                </a>
                <a href="#" title="Pinterest" class="icon-social h-100 d-block cursor-pointer">
                    <img src="../Images/icon/logo-pinterest.png" alt="Pinterest" class="h-100">
                </a>

            </div>
        </div>
    </div>
</div>
<div class="hr w-100 mb-5"></div>
<div class="f-zone2 w-100 d-flex justify-content-between flex-wrap">
    <div class="col1 w-35 pb-2">  
        <div>
            <p class="font-w700 font-playfair-display font-size-3rem">MIKI JEWRLRY</p>
        </div>
        <div class="address">
            Số GCNĐKDN: 2500150335 <br>
            Cấp lần đầu: Ngày 26/03/2007 <br>
            Đăng ký thay đổi lần thứ 16: Ngày 07/05/2018 <br>
            Cơ quan cấp: Sở kế hoạch và đầu tư tỉnh Vĩnh Phúc <br>
            Địa chỉ: Phường Phúc Thắng, Thành phố Phúc Yên, Tỉnh Vĩnh Phúc, Việt Nam <br>
        </div>
    </div>
    <div class="col2 d-flex justify-content-between flex-wrap w-55 pt-1rem">
        <div class="col2-col">
            <p class="font-w700 font-playfair-display font-size-1-25">Về chúng tôi</p>
            <ul>
                <li class="p-8px"><a onclick="goToAboutUs()" href="#" title="Thương hiệu">Thương hiệu</a></li>
                <li class="p-8px"><a onclick="goToAboutUs()" href="#" title="Lịch sử">Lịch sử</a></li>
                <li class="p-8px"><a onclick="goToAboutUsRecruit()" href="#" title="Tuyển dụng">Tuyển dụng</a></li>
            </ul>
        </div>
        <div class="col2-col">
            <p class="font-w700 font-playfair-display font-size-1-25">Tài khoản</p>
            <ul>
                <li class="p-8px"><a href="#" title="Lịch sử mua hàng">Lịch sử mua hàng</a></li>
                <li class="p-8px"><a onclick="goToBasket()" href="#" title="Giỏ hàng">Giỏ hàng</a></li>
                <li class="p-8px"><a href="#" title="Thông tin">Thông tin</a></li>
            </ul>
        </div>
        <div class="col2-col">
            <p class="font-w700 font-playfair-display font-size-1-25">Dịch vụ khách hàng</p>
            <ul>
                <li class="p-8px"><a href="#" title="Thanh toán">Thanh toán</a></li>
                <li class="p-8px"><a href="#" title="Cẩm nang sử dụng">Cẩm nang sử dụng</a></li>
                <li class="p-8px"><a href="#" title="Câu hỏi thường gặp">Câu hỏi thường gặp</a></li>
            </ul>
        </div>
    </div>
</div>
<div class="f-brand-name d-flex justify-content-center mt-3">
    <div>
        <p>MikiShop © 2022</p>
    </div>
</div>
</div>`

$('#footer').append(footer);