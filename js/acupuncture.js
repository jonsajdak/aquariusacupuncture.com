var acu_data = [
  {'name':'Acupuncture',
   'desc':'Acupuncture is a modality of Traditional Chinese Medicine (TCM) that has been in healthcare for thousands of years in China.',
    'filename':'background_acupuncture.jpg'},
  {'name':'Acupuncture ',
   'desc':'Acupuncture involves the insertion of very thin needles into specific points of focalized energy (qi), muscle fascia, and nerve endings.',
    'filename':'acupuncture1.jpg'},
  {'name':'Acupuncture',
   'desc':'Acupuncture Points are connected by meridians that run throughout the body. The effects of these needles bring balance and harmony to the entire body.',
    'filename':'acupuncture2.jpg'},
  {'name':'Acupuncture',
   'desc':'Acupuncture is helpful for a wide variety of disorders, such as pain, reproduction disorders, neurological dysfunctions, musculoskeletal disorders, and more.',
   'filename':'acupuncture3.jpg'},
  {'name':'Acupuncture',
   'desc':'',
   'filename':'acupuncture4.jpg'}
];



$(function() {
  $('div.acu_thumb').bind('click',acu_thumb_click);
});


function acu_thumb_click(e) {
  var isMobile = $('#menuButtonTop').is(':visible');

  $('div.acu_thumb').removeClass('active');
  $(this).addClass('active');

  var idx = $(this).index();  // 0-5

  $('#content').css('background-image','url(' + '/image2/' + acu_data[idx]['filename'] + ')'); //acu_' + (isMobile ? 'mobile' : 'full' ) + '/' + acu_data[idx]['filename'] + ')');
  $('#rightsquare .title').html(acu_data[idx]['name']);
  $('#rightsquare .content').html(acu_data[idx]['desc'].replace(acu_data[idx]['name'],'<i>'+acu_data[idx]['name']+'</i>'));

 
  var path = document.location.pathname.replace(/^\//,'');
  if(path == ''){  path = 'home'; }
  mixpanel.track('Thumbnail Click: ' + path + ', ' + acu_data[idx]['name'],{'page':path,'name':acu_data[idx]['name']});
}

