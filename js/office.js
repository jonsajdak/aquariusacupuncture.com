var office_data = [
  {'name':'',
   'desc':'Office 1',
    'filename':'background_office.jpg'},
  {'name':'',
   'desc':'Office 2',
   'filename':'office1.jpg'},
  {'name':'',
   'desc':'Office 3',
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

