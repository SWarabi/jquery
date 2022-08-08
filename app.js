$(function(){
  $('.box1').mouseover(function(){
    $('.box1').css({'background-color': 'blue'});
  });
  $('.box1').mouseout(function(){
    $('.box1').css({'background-color': 'red'});
  });
});