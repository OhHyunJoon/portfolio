window.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY >= 100) {
        header.classList.add('on');
        $('.top_button').css('opacity','1')
    } else {
        header.classList.remove('on'); 
        $('.top_button').css('opacity','0')
    }
});
$('header nav ul li a').click(function (e) {
    e.preventDefault();

    let idx = $(this).parent().index();
    let targetSection = $('.section' + (idx + 1));
    let offsetTop = targetSection.offset().top;

    $('html, body').animate({
        scrollTop: offsetTop
    }, 1000);
});
$('.top_button').click(function(e){
    e.preventDefault();
    $('html,body').animate({
        scrollTop:0
    }, 600)
})



