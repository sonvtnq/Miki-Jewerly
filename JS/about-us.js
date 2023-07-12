$('.about-us-title').addClass('font-w700');

var aboutUs = sessionStorage.getItem('about-us');
if (aboutUs === 'brand&history') {
    brandAndHistory()
} 
else if (aboutUs === 'recruit') {
    recruit()
}

function brandAndHistory(){
    $('.to-link').text('Thương hiệu và lịch sử');
    $('#zone1').removeClass('d-none');
    $('#zone2').removeClass('d-none');
    $('#zone3').addClass('d-none');
}

function recruit(){
    $('.to-link').text('Tuyển dụng');
    $('#zone1').addClass('d-none');
    $('#zone2').addClass('d-none');
    $('#zone3').removeClass('d-none');
}