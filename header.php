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
      <div id="navLogoTop"></div>
      <div id="navButtonTop">
        <input type="button" id="bookNowBtnTop" value="Book&#x00ANow!"/>
      </div>
    </div>
    <div id="mobilemenu">
      <div class="menuitem <?= $_SERVER['REQUEST_URI'] == '/' ? 'active' : '' ?>">
        <a href="/">acupuncture</a>
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
    </div>
  
    <div id="leftnav" class="">
      <div id="navLogo"></div>
      <div id="navLinks">
        <div class="navItem {if $active=='home'}active{/if}" id="menuAcupuncture">
          <a href="/">
            <div class="label">acupuncture</div>
          </a>
        </div>
        <div class="navItem {if $active=='herbs'}active{/if}" id="menuHerbs">
          <a href="/herbs">
            <div class="label">herbs</div>
          </a>
        </div>
        <div class="navItem {if $active=='photo'}active{/if}" id="menuPhotos">
          <a href="/photo">
            <div class="label">photo gallery</div>
          </a>
        </div>
        <div class="navItem {if $active=='about'}active{/if}" id="menuAbout">
          <a href="/about">
            <div class="label">about Sarah</div>
          </a>
        </div>
      </div>
      <div id="navButton">
        <input type="button" id="bookNowBtn" value="Book Now!"/>      
      </div>
      <div id="navAddress">
80 E 11th Street, Suite 309
<br/>New York, NY 10003
<br/>(917) 496-5481
      </div>
      <div id="navSocialIcons">
          <img src="image/email.png"/>
          <img src="image/facebook.png"/>
          <img src="image/twitter.png"/>
          <img src="image/instagram.png"/>
      </div>
      <div id="navCopyright">
   &copy; 2015 Aquarius Acupuncture 
      </div>
    </div>

