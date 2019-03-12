var office_data = [
  {'name':'',
   'desc':'Acupuncture is a modality of Traditional Chinese Medicine (TCM) that has been in healthcare for thousands of years in China. It is helpful for a wide variety of disorders, such as pain, reproduction disorders, neurological dysfunctions, musculoskeletal disorders, and more.',
    'filename':'background_office.jpg'},
  {'name':'',
   'desc':'Acupuncture works by releasing the body\'s natural endorphins and anti-inflammatory hormones. It regulates the parasympathetic system, bringing balance to the entire body and benefiting internal organs. Furthermore, acupuncture increases blood flow and reduces muscle tension.',
   'filename':'office1.jpg'},
  {'name':'',
   'desc':'Traditional Chinese Medicine (TCM) takes root in over 2000 years of history. Its presence has integrated into mainstream healthcare here in the U.S., allowing millions of people to take part in its benefits. TCM is not only a medicine, but a lifestyle that creates optimal health.',
   'filename':'office2.jpg'}
];


$(function() {
  $('div.office_thumb').bind('click',office_thumb_click);
});


function office_thumb_click(e) {
  var isMobile = $('#menuButtonTop').is(':visible');

  $('div.office_thumb').removeClass('active');
  $(this).addClass('active');

  var idx = $(this).index();  // 0-5

  $('#content').css('background-image','url(' + '/image2/' + office_data[idx]['filename'].replace(/ /g,'%20') + ')'); //  office_' + (isMobile ? 'mobile' : 'full' ) + '/' + office_data[idx]['filename'].replace(/ /g,'%20') + ')');
  $('#rightsquare .title').html(office_data[idx]['name']);
  $('#rightsquare .content').html(office_data[idx]['desc'].replace(office_data[idx]['name'],'<i>'+office_data[idx]['name']+'</i>'));

  var path = document.location.pathname.replace(/^\//,'');
  if(path == ''){  path = 'home'; }
  mixpanel.track('Thumbnail Click: ' + path + ', ' + office_data[idx]['name'],{'page':path,'name':office_data[idx]['name']});

}

