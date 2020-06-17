<html>
  <head>
    <title>Aquarius Acupuncture</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <link rel="icon" href="/favicon.ico" type="image/x-icon">

    <script type="text/javascript" src="/js/jquery-2.1.0.js"></script>
    <script type="text/javascript" src="/js/core.js"></script>

    <link rel="stylesheet" href="/css/core.css?v=1.1">
    <link rel="stylesheet" href="/css/mobile.css?v=1.1">

    <link href='//fonts.googleapis.com/css?family=Lato:300,400' rel='stylesheet' type='text/css'>

   <!-- start Mixpanel --><script type="text/javascript">(function(e,b){if(!b.__SV){var a,f,i,g;window.mixpanel=b;b._i=[];b.init=function(a,e,d){function f(b,h){var a=h.split(".");2==a.length&&(b=b[a[0]],h=a[1]);b[h]=function(){b.push([h].concat(Array.prototype.slice.call(arguments,0)))}}var c=b;"undefined"!==typeof d?c=b[d]=[]:d="mixpanel";c.people=c.people||[];c.toString=function(b){var a="mixpanel";"mixpanel"!==d&&(a+="."+d);b||(a+=" (stub)");return a};c.people.toString=function(){return c.toString(1)+".people (stub)"};i="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");
																		 for(g=0;g<i.length;g++)f(c,i[g]);b._i.push([a,e,d])};b.__SV=1.2;a=e.createElement("script");a.type="text/javascript";a.async=!0;a.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===e.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";f=e.getElementsByTagName("script")[0];f.parentNode.insertBefore(a,f)}})(document,window.mixpanel||[]);
mixpanel.init("e2ed76531266dfb38fcd7b8bf25ee504");</script><!-- end Mixpanel -->

    <script type="text/javascript">
      $(function(){
	  var userId = localStorage.getItem('userId');
	  if (!userId){
	    userId = 'anonymous' + Math.round(Math.random() * 1000000000)
	      userId = userId.toString()
	      localStorage.setItem('userId', userId)
	      }
	  mixpanel.identify(userId);
	  mixpanel.people.set_once('$first_name', userId);

          var path = document.location.pathname.replace(/^\//,'');
          if(path == ''){  path = 'home'; }
          mixpanel.track('Page View: ' + path,{});

	/*      mixpanel.track_links("#navLinks a", "click nav link", function(ele) {
                                   return { name: $(ele).text() }
                                 })
	*/
      });
    </script>

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
        <a id="book_button_mobile" class2="up-green-btn btn-small" href="https://aquariusacupuncture.janeapp.com/" target="_blank"><input type="button" id="bookNowBtnTop" value="Book&#x00A;Now!"/></a>
      </div>
    </div>
    <div id="mobilemenu">
      <div class="menuitem <?= $_SERVER['REQUEST_URI'] == '/acupuncture' ? 'active' : '' ?>">
        <a href="/acupuncture">acupuncture</a>
      </div>
      <div class="menuitem <?= $_SERVER['REQUEST_URI'] == '/cupping' ? 'active' : '' ?>">
        <a href="/cupping">cupping</a>
      </div>
      <div class="menuitem <?= $_SERVER['REQUEST_URI'] == '/herbs' ? 'active' : '' ?>">
        <a href="/herbs">herbs</a>
      </div>
      <div class="menuitem <?= $_SERVER['REQUEST_URI'] == '/office' ? 'active' : '' ?>">
        <a href="/office">office</a>
      </div>
      <div class="menuitem <?= $_SERVER['REQUEST_URI'] == '/about' ? 'active' : '' ?>">
        <a href="/about">about Sarah</a>
      </div>
      <div class="menuitem <?= $_SERVER['REQUEST_URI'] == '/blog' ? 'active' : '' ?>">
        <a href="http://aquariusacupuncture.wordpress.com">blog</a>
      </div>
      <div class="menuitem <?= $_SERVER['REQUEST_URI'] == '/beauty' ? 'active' : '' ?>">
        <a href="/beauty">beauty acupuncture</a>
      </div>
      <div class="menuitem <?= $_SERVER['REQUEST_URI'] == '/safety' ? 'active' : '' ?>">
        <a href="/safety">COVID-19 Safety</a>
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
        <div class="navItem <?= $_SERVER['REQUEST_URI'] == '/cupping' ? 'active' : '' ?>" id="menuCupping">
          <a href="/cupping">
            <div class="label">cupping</div>
          </a>
        </div>
        <div class="navItem <?= $_SERVER['REQUEST_URI'] == '/herbs' ? 'active' : '' ?>" id="menuHerbs">
          <a href="/herbs">
            <div class="label">herbs</div>
          </a>
        </div>
        <div class="navItem <?= $_SERVER['REQUEST_URI'] == '/office' ? 'active' : '' ?>" id="menuPhotos">
          <a href="/office">
            <div class="label">office</div>
          </a>
        </div>
        <div class="navItem <?= $_SERVER['REQUEST_URI'] == '/about' ? 'active' : '' ?>" id="menuAbout">
          <a href="/about">
            <div class="label">about Sarah</div>
          </a>
        </div>
        <div class="navItem" id="menuBlog">
          <a href="http://aquariusacupuncture.wordpress.com" target="_blank">
            <div class="label">blog</div>
          </a>
        </div>
        <div class="navItem <?= $_SERVER['REQUEST_URI'] == '/beauty' ? 'active' : '' ?>" id="menuBeauty">
          <a href="/beauty">
            <div class="label">beauty acupuncture</div>
          </a>
        </div>
        <div class="navItem <?= $_SERVER['REQUEST_URI'] == '/safety' ? 'active' : '' ?>" id="menuSafety">
          <a href="/safety">
            <div class="label">COVID-19 Safety</div>
          </a>
        </div>
      </div>
      <div id="navButton">
        <a id="book_button" class="btn btn-small" href="https://aquariusacupuncture.janeapp.com/" target="_blank">Book&nbsp;Now</a>
				<span class="check-insurance">
					<a id="ins_button" class="btn btn-small" href="https://docs.google.com/forms/d/e/1FAIpQLSe5jD7yNfD1c7_cMhmfylIIecFa2ndUM2pzDQSu0J-nsbS9vQ/viewform?usp=sf_link" target="_blank">Check Insurance</a>
				</span>
      </div>

      <div id="navEmailSignup">

<!-- Begin MailChimp Signup Form -->
<div id="mc_embed_signup">
  <form action="//aquariusacupuncture.us8.list-manage.com/subscribe/post?u=302bff1d1b5391d71cf9ac600&amp;id=1c7c14c02e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
		<label for="mce-EMAIL" class="mailchimp--label">Join our mailing list</label>
		<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="you@youremail.com">
		<input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">

		<div id="mce-responses" class="clear">
			<div class="response" id="mce-error-response" style="display:none"></div>
			<div class="response" id="mce-success-response" style="display:none"></div>
		</div> <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_302bff1d1b5391d71cf9ac600_1c7c14c02e" tabindex="-1" value=""></div>
	</form>
</div>
<!--End mc_embed_signup-->
      </div>

      <div id="navAddress">
928 Broadway, Suite 703
<br/>New York, NY 10010
<br/>(917) 496-5481
      </div>
      <div id="navSocialIcons">
          <a href='m&#97;ilt&#111;&#58;aq&#117;&#97;%72&#105;u&#115;acupu&#110;&#99;%7&#52;ure&#64;gm&#97;&#105;l&#46;%63%6Fm'><img src="image/email.png"/></a>
          <a href="https://www.facebook.com/aquariusacu" target="_blank"><img src="image/facebook.png"/></a>
          <a href="https://twitter.com/aquariusacu" target="_blank"><img src="image/twitter.png"/></a>
          <a href="https://instagram.com/aquariusacupuncture/" target="_blank"><img src="image/instagram.png"/></a>
      </div>
      <div id="navCopyright">
   &copy; <?= date("Y") ?> Aquarius Acupuncture PLLC
      </div>
    </div>
