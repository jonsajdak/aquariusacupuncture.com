var cupping_data = [
    {'name':'Cupping',
     'desc':'Cupping is technique in which cups are placed on the skin to create a suction, increasing blood flow and relieving muscle strains.',
     'filename':'background_cupping.jpg'},
    {'name':'Cupping',
     'desc':'Cupping is technique in which cups are placed on the skin to create a suction, increasing blood flow and relieving muscle strains.',
     'filename':'cupping1.jpg'},
    {'name':'Cupping',
     'desc':'Cupping is technique in which cups are placed on the skin to create a suction, increasing blood flow and relieving muscle strains.',
     'filename':'cupping2.jpg'},
    {'name':'Cupping',
     'desc':'Cupping is technique in which cups are placed on the skin to create a suction, increasing blood flow and relieving muscle strains.',
     'filename':'cupping3.jpg'},
    {'name':'Cupping',
     'desc':'Cupping is technique in which cups are placed on the skin to create a suction, increasing blood flow and relieving muscle strains.',
     'filename':'cupping4.jpg'},
];


$(function() {
  $('div.cupping_thumb').bind('click',cupping_thumb_click);
});


function cupping_thumb_click(e) {
  var isMobile = $('#menuButtonTop').is(':visible');

  $('div.cupping_thumb').removeClass('active');
  $(this).addClass('active');

  var idx = $(this).index();  // 0-15

  $('#content').css('background-image','url(' + '/image2/' + cupping_data[idx]['filename'] + ')');
  $('#rightsquare .title').html(cupping_data[idx]['name']);
  $('#rightsquare .content').html(cupping_data[idx]['desc'].replace(cupping_data[idx]['name'],'<i>'+cupping_data[idx]['name']+'</i>'));


  var path = document.location.pathname.replace(/^\//,'');
  if(path == ''){  path = 'home'; }
  mixpanel.track('Thumbnail Click: ' + path + ', ' + cupping_data[idx]['name'],{'page':path,'name':cupping_data[idx]['name']});
}
