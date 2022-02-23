// event pada saat link di klik
$ ('.page-scroll').on('click', function(e){
    
// Ambil isi href
var tujuan = $(this).attr('haref');
//Tangkap element ybs
var elemenTujuan = $(tujuan);

//Pindahkan scroll

$('body').animate({
    scrollTop: elemenTujuan.offset().top - 50
}, 1250, 'easeInOutExpo');

e.preventDefault();

});


// parallax
//about
$(window).on('load', function() {
    $('.pKiri').addClass('pMuncul')
    $('.pKanan').addClass('pMuncul')
});

    //jumbotron

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transfrom' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron h1').css({
            'transfrom' : 'translate(0px, '+ wScroll/2 +'%)' 
    });

    $('.jumbotron p').css({
        'transfrom' : 'translate(0px, '+ wScroll/1.2 +'%)' 
    });

    //porfolio

    if( wScroll > $('.portfolio').offset().top -250 ) {
        $('.portfolio .thumbnail').each(function(i) {
            setTimeout(function() {
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 300 * (i+1));
        });
        
    }


});