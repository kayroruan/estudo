var x = true;
$('#card1').click(function() {
  if(x) {
    x = false;
    $(this).animate({
        height : "440px",
    }, 1000);
    $('#c1').css('display','block');
    $('#seta1').css('transform', 'rotate(90deg)');

  } else {
    x = true;
    $(this).animate({
      height : "188px",
    }, 1000);
    $('#c1').css('display','none')
    $('#seta1').css('transform', 'rotate(0deg)');
  }

});

var x = true;
$('#card2').click(function() {
  if(x) {
    x = false;
    $(this).animate({
        height : "440px",
    }, 1000);
    $('#c2').css('display','block');
    $('#seta2').css('transform', 'rotate(90deg)');

  } else {
    x = true;
    $(this).animate({
      height : "188px",
    }, 1000);
    $('#c2').css('display','none')
    $('#seta2').css('transform', 'rotate(0deg)');
  }

});

var x = true;
$('#card3').click(function() {
  if(x) {
    x = false;
    $(this).animate({
        height : "440px",
    }, 1000);
    $('#c3').css('display','block');
    $('#seta3').css('transform', 'rotate(90deg)');

  } else {
    x = true;
    $(this).animate({
      height : "188px",
    }, 1000);
    $('#c3').css('display','none')
    $('#seta3').css('transform', 'rotate(0deg)');
  }

});