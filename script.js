// BY KAREN GRIGORYAN

$(document).ready(function() {
  /******************************
      BOTTOM SCROLL TOP BUTTON
   ******************************/

  // declare variable
  var scrollTop = $(".scrollTop");

  $(window).scroll(function() {
    // declare variable
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");

    } else {
      $(scrollTop).css("opacity", "0");
    }

  }); // scroll END

  //Click event to scroll to top
  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;

  }); // click() scroll top EMD

  /*************************************
    LEFT MENU SMOOTH SCROLL ANIMATION
   *************************************/
  // declare variable
  var h1 = $("#h1").position();
  var h2 = $("#h2").position();
  var h3 = $("#h3").position();
  var h4 = $("#h4").position();
  var h5 = $("#h5").position();
  var h6 = $("#h6").position();
  var h7 = $("#h7").position();
  var h8 = $("#h8").position();
  var h9 = $("#h9").position();
  var h10 = $("#h10").position();
  var h11 = $("#h11").position();
  var h12 = $("#h12").position();

  $('.link1').click(function() {
    $('html, body').animate({
      scrollTop: h1.top
    }, 500);
    return false;

  }); // left menu link2 click() scroll END

  $('.link2').click(function() {
    $('html, body').animate({
      scrollTop: h2.top
    }, 500);
    return false;

  }); // left menu link2 click() scroll END

  $('.link3').click(function() {
    $('html, body').animate({
      scrollTop: h3.top
    }, 500);
    return false;

  }); // left menu link3 click() scroll END

  $('.link4').click(function() {
    $('html, body').animate({
      scrollTop: h4.top
    }, 500);
    return false;

  }); // left menu link4 click() scroll END

  $('.link5').click(function() {
    $('html, body').animate({
      scrollTop: h5.top
    }, 500);
    return false;

  }); // left menu link5 click() scroll END

  $('.link6').click(function() {
    $('html, body').animate({
      scrollTop: h6.top
    }, 500);
    return false;

  }); // left menu link6 click() scroll END

  $('.link7').click(function() {
    $('html, body').animate({
      scrollTop: h7.top
    }, 500);
    return false;

  }); // left menu link7 click() scroll END

  $('.link8').click(function() {
    $('html, body').animate({
      scrollTop: h8.top
    }, 500);
    return false;

  }); // left menu link8 click() scroll END

  $('.link9').click(function() {
    $('html, body').animate({
      scrollTop: h9.top
    }, 500);
    return false;

  }); // left menu link9 click() scroll END

  $('.link10').click(function() {
    $('html, body').animate({
      scrollTop: h10.top
    }, 500);
    return false;

  }); // left menu link10 click() scroll END

  $('.link11').click(function() {
    $('html, body').animate({
      scrollTop: h11.top
    }, 500);
    return false;

  }); // left menu link11 click() scroll END

  $('.link12').click(function() {
    $('html, body').animate({
      scrollTop: h12.top
    }, 500);
    return false;

  }); // left menu link12 click() scroll END

}); // ready() END