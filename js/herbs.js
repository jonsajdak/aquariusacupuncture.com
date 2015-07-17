var herb_data = [
  {'name':'hong hua',
   'desc':'hong hua is used to regulate menstruation for those with amenorrhea and dysmenorrhea',
    'url':'/image/herb_full/HongHua__004.jpg'},
  {'name':'dang shen',
   'desc':'dang shen is used to treat fatigue, poor appetite, and nausea',
    'url':'/image/herb_full/$3.60__001.jpg'},
  {'name':'bai shao',
   'desc':'bai shao can treat abnormal menstruation and can also help alleviate headaches and migraines',
    'url':'/image/herb_full/$2.52__008.jpg'},
  {'name':'du zhong',
   'desc':'du zhong treats lower back, knee, and leg pain',
    'url':''},
  {'name':'xin yi hua',
   'desc':'xin yi hua is great for the common cold with nasal congestion',
    'url':''},
  {'name':'ji xue teng',
   'desc':'ji xue teng treats tight muscles and sore joints',
    'url':''},
  {'name':'gou qi zi',
   'desc':'gou qi zi can help improve visual acuity',
    'url':''},
  {'name':'fu ling',
   'desc':'fu ling can improve appetite, headache, dizziness, and bloating',
    'url':''},

  {'name':'huang qi',
   'desc':'huang qi treats fatigue, shortness of breath, and diarrhea',
    'url':''},
  {'name':'qing hao',
   'desc':'qing hao is used to relieve fever, headache, and congestion',
    'url':''},
  {'name':'ju hua',
   'desc':'ju hua can relieve fever, sore throat, and dry eyes',
    'url':''},
  {'name':'chuan xiong',
   'desc':'chuan xiong is popular for gynecological problems',
    'url':''},
  {'name':'sheng di huang',
   'desc':'sheng di huang relieves fever, anxiety, and night sweats',
    'url':''},
  {'name':'gan cao',
   'desc':'gan cao can help alleviate fatigue, loose stools, and low appetite',
    'url':''},
  {'name':'xu duan',
   'desc':'xu duan is commonly used for lower back and knee pain',
    'url':''},
  {'name':'lian zi',
   'desc':'lian zi helps treat low appetite, bloating, and indigestion',
    'url':''},
];


$(function() {
  $('div.herb_thumb').bind('click',herb_thumb_click);
});


function herb_thumb_click(e){
  $('div.herb_thumb').removeClass('active');
  $(this).addClass('active');
 
  var idx = $(this).index();  // 0-15

  $('#content').css('background-image','url('+herb_data[idx]['url']+')');
  $('#rightsquare .title').html(herb_data[idx]['name']);
  $('#rightsquare .content').html(herb_data[idx]['desc'].replace(herb_data[idx]['name'],'<i>'+herb_data[idx]['name']+'</i>'));
}