var x = true;
$('#card1').click(function() {
  if ($(window).width() > 768)
  if(x) {
    x = false;
    $(this).animate({
        height : "440px",
    }, 500);
    $('#c1').css('display','block');
    $('#seta1').css('transform', 'rotate(90deg)');

  } else {
    x = true;
    $(this).animate({
      height : "188px",
    }, 500);
    $('#c1').css('display','none')
    $('#seta1').css('transform', 'rotate(0deg)');
  }

});

var x = true;
$('#card2').click(function() {
  if ($(window).width() > 768)
  if(x) {
    x = false;
    $(this).animate({
        height : "440px",
    }, 500);
    $('#c2').css('display','block');
    $('#seta2').css('transform', 'rotate(90deg)');

  } else {
    x = true;
    $(this).animate({
      height : "188px",
    }, 500);
    $('#c2').css('display','none')
    $('#seta2').css('transform', 'rotate(0deg)');
  }

});

var x = true;
$('#card3').click(function() {
  if ($(window).width() > 768)
  if(x) {
    x = false;
    $(this).animate({
        height : "440px",
    },500);
    $('#c3').css('display','block');
    $('#seta3').css('transform', 'rotate(90deg)');

  } else {
    x = true;
    $(this).animate({
      height : "188px",
    }, 500);
    $('#c3').css('display','none')
    $('#seta3').css('transform', 'rotate(0deg)');
  }

});

$('#card1').click(function() {
  if ($(window).width() < 768)
  if(x) {
    x = false;
    $(this).animate({
        height : "173px",
    }, 500);
    $('#c1').css('display','block');
    $('#seta1').css('transform', 'rotate(90deg)');

  } else {
    x = true;
    $(this).animate({
      height : "69px",
    }, 500);
    $('#c1').css('display','none')
    $('#seta1').css('transform', 'rotate(0deg)');
  }

});

var x = true;
$('#card2').click(function() {
  if ($(window).width() < 768)
  if(x) {
    x = false;
    $(this).animate({
        height : "173px",
    }, 500);
    $('#c2').css('display','block');
    $('#seta2').css('transform', 'rotate(90deg)');

  } else {
    x = true;
    $(this).animate({
      height : "69px",
    }, 500);
    $('#c2').css('display','none')
    $('#seta2').css('transform', 'rotate(0deg)');
  }

});

var x = true;
$('#card3').click(function() {
  if ($(window).width() < 768)
  if(x) {
    x = false;
    $(this).animate({
        height : "173px",
    },500);
    $('#c3').css('display','block');
    $('#seta3').css('transform', 'rotate(90deg)');

  } else {
    x = true;
    $(this).animate({
      height : "69px",
    }, 500);
    $('#c3').css('display','none')
    $('#seta3').css('transform', 'rotate(0deg)');
  }

});