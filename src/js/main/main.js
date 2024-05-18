$('.header__mobilBtn').on('click',function(){
    $(this).attr('href','javascript:void(0)')
    $('.nav').slideDown();
    $('.header__logo svg').addClass('active');
})

$('.nav__close').on('click',function(){
    $('.nav').slideUp();
    setTimeout(() => {
        $('.header__logo svg').removeClass('active');
    }, 300);
})

$('.carousel').flickity({
    prevNextButtons: false,
    pageDots:false,
    cellAlign:'left',
    wrapAround:true,
    fade:true
  
  });

  $('.partners__slider').flickity({
    prevNextButtons: false,
    pageDots:false,
    cellAlign:'left',
    wrapAround:true,
    autoPlay:3000,
  });


  $('.count').counterUp({
    delay: 5,
    time: 1000
});
$('.select-drpdwn').niceSelect();


$(function(){
  $(window).on('scroll',function(){


    if($(window).scrollTop() >100){
      $('.header').addClass('sticky')
    }
    else{
      $('.header').removeClass('sticky')
    }
  })
})

window.addEventListener('load', AOS.refresh)
$(function () {
AOS.init({
once: true,
});
});

$('#file').change(function () {
  var i = $(this).prev('label').clone();
  var file = $('#file')[0].files[0].name;

  $('#file-upload').attr('placeholder', file);
});