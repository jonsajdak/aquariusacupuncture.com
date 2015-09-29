$(function() {
  display_random_review();
});

function display_random_review(){
  var rand = Math.floor(Math.random() * $('#content.home .review').length);
  $('#content.home .review').hide().eq(rand).show();
}