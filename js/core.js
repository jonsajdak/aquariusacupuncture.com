$(function() {
  $('#menuButtonTop').bind('click',menu_click);
});


function menu_click(e){
  if($('#mobilemenu').is(':visible')){
    $('#mobilemenu').removeClass('active');
  } else {
    $('#mobilemenu').addClass('active');
  } 
}

