<html>
  <head>
    <title>Aquarius Acupuncture</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script type="text/javascript" src="/js/jquery-2.1.0.js"></script>
    <script type="text/javascript" src="/js/core.js"></script>

    <link rel="stylesheet" href="/css/core.css">
    <link rel="stylesheet" href="/css/mobile.css">

    <link href='http://fonts.googleapis.com/css?family=Lato:300,400' rel='stylesheet' type='text/css'>
  </head>
  <body>
    <div id="topnav" class="">
      <div id="menuButtonTop">
        menu
      </div>
      <div id="navLogoTop">
        <a href="/"><img src="/image/logo.png"></a>
      </div>
      <div id="navButtonTop">
   <!-- begin UnifiedPractice booking button -->
<a id="book_button_mobile" class2="up-green-btn btn-small" href="https://ehr.unifiedpractice.com/Public/OnlineBooking/Home?ClinicUid=917388c8-2211-4d79-9c1a-b914c135281d" target="_blank"><input type="button" id="bookNowBtnTop" value="Book&#x00A;Now!"/></a>
<!-- end UnifiedPractice booking button -->
      </div>
    </div>
    <div id="mobilemenu">
      <div class="menuitem <?= $_SERVER['REQUEST_URI'] == '/acupuncture' ? 'active' : '' ?>">
        <a href="/acupuncture">acupuncture</a>
      </div>
      <div class="menuitem <?= $_SERVER['REQUEST_URI'] == '/herbs' ? 'active' : '' ?>">
        <a href="/herbs">herbs</a>
      </div>
      <div class="menuitem <?= $_SERVER['REQUEST_URI'] == '/photo' ? 'active' : '' ?>">
        <a href="/photo">photo gallery</a>
      </div>
      <div class="menuitem <?= $_SERVER['REQUEST_URI'] == '/about' ? 'active' : '' ?>">
        <a href="/about">about Sarah</a>
      </div>
      <div class="menuitem <?= $_SERVER['REQUEST_URI'] == '/blog' ? 'active' : '' ?>">
        <a href="http://blog.aquariusacupuncture.com">blog</a>
      </div>
    </div>
  
    <div id="leftnav" class="">
      <div id="navLogo">
        <a href="/"><img src="/image/logo.png"></a>
      </div>
      <div id="navLinks">
        <div class="navItem <?= $_SERVER['REQUEST_URI'] == '/acupuncture' ? 'active' : '' ?>" id="menuAcupuncture">
          <a href="/acupuncture">
            <div class="label">acupuncture</div>
          </a>
        </div>
        <div class="navItem <?= $_SERVER['REQUEST_URI'] == '/herbs' ? 'active' : '' ?>" id="menuHerbs">
          <a href="/herbs">
            <div class="label">herbs</div>
          </a>
        </div>
        <div class="navItem <?= $_SERVER['REQUEST_URI'] == '/photo' ? 'active' : '' ?>" id="menuPhotos">
          <a href="/photo">
            <div class="label">photo gallery</div>
          </a>
        </div>
        <div class="navItem <?= $_SERVER['REQUEST_URI'] == '/about' ? 'active' : '' ?>" id="menuAbout">
          <a href="/about">
            <div class="label">about Sarah</div>
          </a>
        </div>
        <div class="navItem" id="menuBlog">
          <a href="http://blog.aquariusacupuncture.com" target="_blank">
            <div class="label">blog</div>
          </a>
        </div>
      </div>
      <div id="navButton">
        <!-- begin UnifiedPractice booking button -->
<a id="book_button" class="up-green-btn btn-small" href="https://ehr.unifiedpractice.com/Public/OnlineBooking/Home?ClinicUid=917388c8-2211-4d79-9c1a-b914c135281d" target="_blank">Book&nbsp;Now!</a>
<script type="text/javascript" src="http://www.unifiedpractice.com/shared/js/up_button.js"></script><!-- end UnifiedPractice booking button -->
      </div>
      <div id="navAddress">
80 E 11th Street, Suite 309
<br/>New York, NY 10003
<br/>(917) 496-5481
      </div>
      <div id="navSocialIcons">
          <a href='m&#97;ilt&#111;&#58;aq&#117;&#97;%72&#105;u&#115;acupu&#110;&#99;%7&#52;ure&#64;gm&#97;&#105;l&#46;%63%6Fm'><img src="image/email.png"/></a>
          <a href="https://www.facebook.com/aquariusacu" target="_blank"><img src="image/facebook.png"/></a>
          <a href="https://twitter.com/aquariusacu" target="_blank"><img src="image/twitter.png"/></a>
          <a href="https://instagram.com/aquariusacupuncture/" target="_blank"><img src="image/instagram.png"/></a>
      </div>
      <div id="navCopyright">
   &copy; 2015 Aquarius Acupuncture PLLC
      </div>
    </div>

