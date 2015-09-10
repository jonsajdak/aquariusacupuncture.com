var herb_data = [
  {'name':'hong hua',
   'desc':'hong hua is used to regulate menstruation for those with amenorrhea and dysmenorrhea',
    'filename':'HongHua__004.jpg'},
  {'name':'dang shen',
   'desc':'dang shen is used to treat fatigue, poor appetite, and nausea',
    'filename':'$3.60__001.jpg'},
  {'name':'bai shao',
   'desc':'bai shao can treat abnormal menstruation and can also help alleviate headaches and migraines',
    'filename':'$2.52__008.jpg'},
  {'name':'du zhong',
   'desc':'du zhong treats lower back, knee, and leg pain',
    'filename':''},
  {'name':'xin yi hua',
   'desc':'xin yi hua is great for the common cold with nasal congestion',
    'filename':''},
  {'name':'ji xue teng',
   'desc':'ji xue teng treats tight muscles and sore joints',
    'filename':''},
  {'name':'gou qi zi',
   'desc':'gou qi zi can help improve visual acuity',
    'filename':''},
  {'name':'fu ling',
   'desc':'fu ling can improve appetite, headache, dizziness, and bloating',
    'filename':''},

  {'name':'huang qi',
   'desc':'huang qi treats fatigue, shortness of breath, and diarrhea',
    'filename':''},
  {'name':'qing hao',
   'desc':'qing hao is used to relieve fever, headache, and congestion',
    'filename':''},
  {'name':'ju hua',
   'desc':'ju hua can relieve fever, sore throat, and dry eyes',
    'filename':''},
  {'name':'chuan xiong',
   'desc':'chuan xiong is popular for gynecological problems',
    'filename':''},
  {'name':'sheng di huang',
   'desc':'sheng di huang relieves fever, anxiety, and night sweats',
    'filename':''},
  {'name':'gan cao',
   'desc':'gan cao can help alleviate fatigue, loose stools, and low appetite',
    'filename':''},
  {'name':'xu duan',
   'desc':'xu duan is commonly used for lower back and knee pain',
    'filename':''},
  {'name':'lian zi',
   'desc':'lian zi helps treat low appetite, bloating, and indigestion',
    'filename':''},
];


$(function() {
  $('div.herb_thumb').bind('click',herb_thumb_click);
});


function herb_thumb_click(e) {
  var isMobile = $('#menuButtonTop').is(':visible');

  $('div.herb_thumb').removeClass('active');
  $(this).addClass('active');

  var idx = $(this).index();  // 0-15

  $('#content').css('background-image','url(' + '/image/herb_' + (isMobile ? 'mobile' : 'full' ) + '/' + herb_data[idx]['filename'] + ')');
  $('#rightsquare .title').html(herb_data[idx]['name']);
  $('#rightsquare .content').html(herb_data[idx]['desc'].replace(herb_data[idx]['name'],'<i>'+herb_data[idx]['name']+'</i>'));
}
