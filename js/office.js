var gallery_data = [
  {'name':'',
   'desc':'Acupuncture is a modality of Traditional Chinese Medicine (TCM) that has been in healthcare for thousands of years in China. It is helpful for a wide variety of disorders, such as pain, reproduction disorders, neurological dysfunctions, musculoskeletal disorders, and more.',
    'filename':'Page 4 - Photo Gallery - Towels.jpg'},
  {'name':'',
   'desc':'Acupuncture works by releasing the body\'s natural endorphins and anti-inflammatory hormones. It regulates the parasympathetic system, bringing balance to the entire body and benefiting internal organs. Furthermore, acupuncture increases blood flow and reduces muscle tension.',
    'filename':'Page 4 - Photo Gallery - Treatment Room.jpg'},
/*  {'name':'',
   'desc':'Acupuncture works by releasing the body’s natural endorphins and anti-inflammatory hormones. It regulates the parasympathetic system, bringing balance to the entire body and benefiting internal organs. Furthermore, acupuncture increases blood flow and reduces muscle tension.',
    'filename':'Page 4 - Photo Gallery - Treatment Room 2.jpg'},*/
  {'name':'',
   'desc':'Sarah Sajdak holds a Master of Science in Traditional Oriental Medicine from Pacific College. She is also a Diplomate of Oriental Medicine. She is certified to practice in New York and California. ',
    'filename':'Page 4 - Photo Gallery - Certifications.jpg'},
  {'name':'',
   'desc':'Traditional Chinese Medicine (TCM) takes root in over 2000 years of history. Its presence has integrated into mainstream healthcare here in the U.S., allowing millions of people to take part in its benefits. TCM is not only a medicine, but a lifestyle that creates optimal health.',
    'filename':'Page 4 - Photo Gallery - Desk.jpg'},
  {'name':'',
   'desc':'Cupping is technique in which cups are placed on the skin to create a suction, increasing blood flow and relieving muscle strains. Heal yourself with take-home moxibustion, a modality in which the herb mugwort is burned to warm areas of the body and facilitate the smooth flow of qi and blood.',
    'filename':'Page 4 - Photo Gallery - Moxa _ Cupping Basket.jpg'},
  {'name':'',
   'desc':'Chinese herbal medicine uses a variety of herbs, such as gingko and ginseng, to create formulas with varying medicinal usages. These formulas help restore balance to the body and treat many disorders and illnesses.',
    'filename':'Page 4 - Photo Gallery - Granules.jpg'}
];



$(function() {
  $('div.gallery_thumb').bind('click',gallery_thumb_click);
});


function gallery_thumb_click(e) {
  var isMobile = $('#menuButtonTop').is(':visible');

  $('div.gallery_thumb').removeClass('active');
  $(this).addClass('active');

  var idx = $(this).index();  // 0-5

  $('#content').css('background-image','url(' + '/image/gallery_' + (isMobile ? 'mobile' : 'full' ) + '/' + gallery_data[idx]['filename'].replace(/ /g,'%20') + ')');
  $('#rightsquare .title').html(gallery_data[idx]['name']);
  $('#rightsquare .content').html(gallery_data[idx]['desc'].replace(gallery_data[idx]['name'],'<i>'+gallery_data[idx]['name']+'</i>'));

  var path = document.location.pathname.replace(/^\//,'');
  if(path == ''){  path = 'home'; }
  mixpanel.track('Thumbnail Click: ' + path + ', ' + gallery_data[idx]['name'],{'page':path,'name':gallery_data[idx]['name']});

}

