skrollr.init();

$(".logocon").click(function() {
  $("html, body").animate({ scrollTop: 100 });
});


function counter() {
    var counter = setInterval(function() {
        var c = parseInt($('.counter').text());
        $('.counter').text((++c).toString());
        if(c == 100) {
            clearInterval(counter);
            $('.counter').addClass('hide');
            $('.preloader').addClass('active');
        }
    },10);
}
counter();