$(document).ready(function(){
// Set Options
var speed = 500; // fadespeed
var autoSwitch = true; // auto slider Options

var autoSwitchSpeed = 4000; //4000ms auto Slider speed

//Add initial active class

$('.slide').first().addClass('active');

//Hide all slides
$('.slide').hide();
//Show first slide
$('.active').show();

$('#next').on('click', nextSlide);
  $('#prev').on('click',prevSlide);

    if(autoSwitch==true){
      setInterval(function(){
        $('.active').removeClass('active').addClass('oldActive');
          if($('.oldActive').is(':last-child')){
            $('.slide').first().addClass('active');
          } else{
            $('.oldActive').next().addClass('active');
          }
          $('.oldActive').removeClass('oldActive');
          $('.slide').fadeOut(speed);
          $('.active').fadeIn(speed);

      },autoSwitchSpeed);
    }
//Switch to next slide-slide
function nextSlide() {
  $('.active').removeClass('active').addClass('oldActive');
    if($('.oldActive').is(':last-child')){
      $('.slide').first().addClass('active');
    } else{
      $('.oldActive').next().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.slide').fadeOut(speed);
    $('.active').fadeIn(speed);
}

function prevSlide(){
  $('.active').removeClass('active').addClass('oldActive');
    if($('.oldActive').is(':first-child')){
      $('.slide').last().addClass('active');
    } else{
      $('.oldActive').prev().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.slide').fadeOut(speed);
    $('.active').fadeIn(speed);
}
});
