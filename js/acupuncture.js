var acu_data = [
  {'name':'Acupuncture',
   'desc':'Acupuncture is a modality of Traditional Chinese Medicine (TCM) that has been in healthcare for thousands of years in China.',
    'filename':'RM-0514-SSadjak-144Final.jpg'},
  {'name':'Acupuncture ',
   'desc':'Acupuncture involves the insertion of very thin needles into specific points of focalized energy (qi), muscle fascia, and nerve endings.',
    'filename':'RM-0514-SSadjak-121.jpg'},
  {'name':'Acupuncture',
   'desc':'Acupuncture Points are connected by meridians that run throughout the body. The effects of these needles bring balance and harmony to the entire body.',
    'filename':'RM-0514-SSadjak-277.jpg'},
  {'name':'Acupuncture',
   'desc':'Acupuncture is helpful for a wide variety of disorders, such as pain, reproduction disorders, neurological dysfunctions, musculoskeletal disorders, and more.',
    'filename':'RM-0514-SSadjak-101.jpg'}
];



$(function() {
  $('div.acu_thumb').bind('click',acu_thumb_click);
});


function acu_thumb_click(e) {
  var isMobile = $('#menuButtonTop').is(':visible');

  $('div.acu_thumb').removeClass('active');
  $(this).addClass('active');

  var idx = $(this).index();  // 0-5

  $('#content').css('background-image','url(' + '/image/acu_' + (isMobile ? 'mobile' : 'full' ) + '/' + acu_data[idx]['filename'] + ')');
  $('#rightsquare .title').html(acu_data[idx]['name']);
  $('#rightsquare .content').html(acu_data[idx]['desc'].replace(acu_data[idx]['name'],'<i>'+acu_data[idx]['name']+'</i>'));
}

