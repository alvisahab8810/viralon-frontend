 //Sticky Header
  // let header = document.querySelector('.header')
  // $(window).scroll(function(){
  //   if ($(this).scrollTop() > 120) $(header).addClass('header_fixed')
  //   else $(header).removeClass('header_fixed')
  // });


  $(document).ready(function(){
  $(".strategy-list").click(function(){
    $(".strategy-mega-menu").toggle("slow");
  });
});

  $(document).ready(function(){
  $(".digital-list").click(function(){
    $(".digital-mega-menu").toggle("slow");
  });
});

  $(document).ready(function(){
  $(".design-list").click(function(){
    $(".design-mega-menu").toggle("slow");
  });
});


$(document).ready(function() {
    $('.after-nav').hover(
      function() {
        $(this).addClass('hide-before');
      },
      function() {
        $(this).removeClass('hide-before');
      }
    );
  });


  $(".menu-show").click(function () {
    $(".navbar-nav").slideToggle("slow");
  });