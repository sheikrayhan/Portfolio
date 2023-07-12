//Typed JS
var typed = new Typed('.banner_typed', {
   strings: ['Front-End Developer', 'Web Designer'],
   typeSpeed: 50,
   backSpeed:40,
   loop:true,
});

// Darkmode JS ...

// function addDarkmodeWidget() {
//   new Darkmode().showWidget();
// }
// window.addEventListener('load', addDarkmodeWidget);


$(function () {
   'use strict';
   $(window).on('scroll', function () {
      var navPosition = $('#nav_bar').offset().top;
      var scrollSize = $(window).scrollTop();

      // Menu Fixed ...
      if (scrollSize > 500) {
          $('nav').addClass('active');
      } else {
          $('nav').removeClass('active');
      }

      // Brand Name/Img....
      if(scrollSize > 450){
         $('#brandname').show(500);
         $('#brandimg').hide(500);
      }else{
         $('#brandname').hide(500);
         $('#brandimg').show(500);
      }

      // Back to Top...
      if (scrollSize > 1000) {
          $('#backtoTop').show(500);
      } else {
          $('#backtoTop').hide(500);
      }
   })
   $('#backtoTop').on('click', function () {
      $('html, body').animate({
         scrollTop: 0
      })
   })

   // ProgressBar JS ...

   $('#htmlprogress').LineProgressbar({
      ShowProgressCount: true,
	   fillBackgroundColor: '#25ca7f',
	   backgroundColor: '#1d1d1f',
      percentage: 95,
      radius: '5px',
	});
   $('#javaprogress').LineProgressbar({
     ShowProgressCount: true,
	  fillBackgroundColor: '#25ca7f',
	  backgroundColor: '#1d1d1f',
     percentage: 40,
     radius: '5px',
	});
   $('#bootstraprogress').LineProgressbar({
     ShowProgressCount: true,
	  fillBackgroundColor: '#25ca7f',
	  backgroundColor: '#1d1d1f',
     percentage: 90,
     radius: '5px',
	});
   $('#wordprogress').LineProgressbar({
     ShowProgressCount: true,
	  fillBackgroundColor: '#25ca7f',
	  backgroundColor: '#1d1d1f',
     percentage: 40,
     radius: '5px',
	});
   $('#cssprogress').LineProgressbar({
     ShowProgressCount: true,
	  fillBackgroundColor: '#25ca7f',
	  backgroundColor: '#1d1d1f',
     percentage: 80,
     radius: '5px',
	});
   $('#jqueryprogress').LineProgressbar({
     ShowProgressCount: true,
	  fillBackgroundColor: '#25ca7f',
	  backgroundColor: '#1d1d1f',
     percentage: 35,
     radius: '5px',
	});
   $('#sassprogress').LineProgressbar({
     ShowProgressCount: true,
	  fillBackgroundColor: '#25ca7f',
	  backgroundColor: '#1d1d1f',
     percentage: 85,
     radius: '5px',
	});
   $('#photoprogress').LineProgressbar({
     ShowProgressCount: true,
	  fillBackgroundColor: '#25ca7f',
	  backgroundColor: '#1d1d1f',
     percentage: 40,
     radius: '5px',
	});


   // Counter Up Initialize...
   $('.counter').counterUp({
      delay: 10,
      time: 1000,
   });
   
   // Portfolio Slider Initialize...
   $('.portfolio_slider').slick({
      centerMode: true,
      centerPadding: '0px',
      arrows: false,
      dots: true,
      dotsClass: 'portfolio_slider_dots',
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 1500,
   });

   // FilterZr Initialize...
   $('.portfolio_filtr').filterizr();

    $('#fl_control li').on('click', function () {
      $(this).addClass('active');
      $(this).siblings().removeClass('active')
   })


})
