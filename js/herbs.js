var herb_data = [
  {'name':'hong hua',
   'desc':'hong hua is used to regulate menstruation for those with amenorrhea and dysmenorrhea',
    'filename':'HongHua__004.jpg'},
  {'name':'ba ji tian',
   'desc':'ba ji tian is a major herb for reproductive health, such as infertility',
    'filename':'$3.60__001.jpg'},
  {'name':'bai shao',
   'desc':'bai shao can treat abnormal menstruation and can also help alleviate headaches and migraines',
    'filename':'$2.52__008.jpg'},
  {'name':'du zhong',
   'desc':'du zhong treats lower back, knee, and leg pain',
    'filename':'$4.20__006.jpg'},
  {'name':'xin yi hua',
   'desc':'xin yi hua is great for the common cold with nasal congestion',
    'filename':'XinYiHua__015.jpg'},
  {'name':'ji xue teng',
   'desc':'ji xue teng treats tight muscles and sore joints',
    'filename':'JiXueTeng__001.jpg'},
  {'name':'gou qi zi',
   'desc':'gou qi zi can help improve visual acuity',
    'filename':'RedBerry__008.jpg'},
  {'name':'fu ling',
   'desc':'fu ling can improve appetite, headache, dizziness, and bloating',
    'filename':'Fuhag003.jpg'},

  {'name':'huang qi',
   'desc':'huang qi treats fatigue, shortness of breath, and diarrhea',
    'filename':'$8Sticks_025.jpg'},
  {'name':'qing hao',
   'desc':'qing hao is used to relieve fever, headache, and congestion',
    'filename':'BaiHua_022.jpg'},
  {'name':'ju hua',
   'desc':'ju hua can relieve fever, sore throat, and dry eyes',
    'filename':'DriedFlowers_001.jpg'},
  {'name':'chuan xiong',
   'desc':'chuan xiong is popular for gynecological problems',
    'filename':'LaeShouWu__011.jpg'},
  {'name':'sheng di huang',
   'desc':'sheng di huang relieves fever, anxiety, and night sweats',
    'filename':'ShuDiHuang__010.jpg'},
  {'name':'gan cao',
   'desc':'gan cao can help alleviate fatigue, loose stools, and low appetite',
    'filename':'$2.52__013.jpg'},
  {'name':'xu duan',
   'desc':'xu duan is commonly used for lower back and knee pain',
    'filename':'ZhuRu_024.jpg'},
  {'name':'lian zi',
   'desc':'lian zi helps treat low appetite, bloating, and indigestion',
    'filename':'2.76__004.jpg'},
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
