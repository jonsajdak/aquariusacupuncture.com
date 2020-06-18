var safety_data = [
    {'name':'COVID-19 Prevention & Safety Policy',
     'desc':'At Aquarius Acupuncture PLLC, our top priority is your health and safety. We maintain the highest standards of cleanliness and have implemented procedures that will provide you with safe and comfortable care.',
     'filename':'safety1.jpg'},
    {'name':'Pre-Visit Protocol',
     'desc':'To minimize the in-person intake time, patients will email me a summary of how they are doing and what they are coming in for. This will make the in-person session around 45 minutes instead of an hour since most of the “talking” will be online. My email is HIPPA compliant (meaning that your private information is encrypted and protected).',
     'filename':'safety2.jpg'},
     {'name':'Day of Treatment',
     'desc':'All patients will fill out an online survey prior to their appointment to confirm that they are not exhibiting COVID-19 signs and symptoms and have not had contact with an infected person. Patients will wash their hands in the hall bathroom before entering the clinic and are expected to wear a face mask at all times. I will have hand sanitizer available in the clinic. In-person screening will include distance forehead temperature taking and pulse oximeter gently on the pointer finger. Anyone with a temperature over 100F or O2 level under 90% will be sent home and referred to their PCP.',
      'filename':'safety3.jpg'},
     {'name':'Cleaning and Disinfecting Procedures',
     'desc':'The clinic space is cleaned with EPA-registered disinfectants before and after each patient visit. Additionally, we run UV sanitation lights in treatment rooms between patients to sanitize the air and surfaces.',
      'filename':'safety4.jpg'},
    {'name':'Acupuncture Safety',
     'desc':'As required for all Licensed Acupuncturists, I am certified in the Clean Needle Technique (CNT) by the Colleges of Acupuncture and Oriental Medicine (CCAOM). I am trained to abide by national safety standards by maintaining a clean clinical setting and I only use sterile, single-use, disposable acupuncture needles. I will also be wearing a face mask at all times during your treatment.',
     'filename':'safety5.jpg'},
];


$(function() {
  $('div.safety_thumb').bind('click',safety_thumb_click);
});


function safety_thumb_click(e) {
  var isMobile = $('#menuButtonTop').is(':visible');

  $('div.safety_thumb').removeClass('active');
  $(this).addClass('active');

  var idx = $(this).index();  // 0-15

  $('#content').css('background-image','url(' + '/image2/' + safety_data[idx]['filename'] + ')');
  $('#rightsquare .title').html(safety_data[idx]['name']);
  $('#rightsquare .content').html(safety_data[idx]['desc'].replace(safety_data[idx]['name'],'<i>'+safety_data[idx]['name']+'</i>'));


  var path = document.location.pathname.replace(/^\//,'');
  if(path == ''){  path = 'home'; }
  mixpanel.track('Thumbnail Click: ' + path + ', ' + safety_data[idx]['name'],{'page':path,'name':safety_data[idx]['name']});
}
