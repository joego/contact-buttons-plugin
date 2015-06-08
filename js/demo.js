/*!
 * Contact Buttons Plugin Demo 0.1.0
 * https://github.com/joege/contact-buttons-plugin
 *
 * Copyright 2015, José Gonçalves
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
 
// Google Fonts
WebFontConfig = {
  google: { families: [ 'Lato:400,700,300:latin' ] }
};
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();

// Initialize Share-Buttons
$.shareButtons({
  facebook : { use: true, link: 'https://www.facebook.com/pages/mycompany', extras: 'target="_blank"' },
  linkedin : { use: true, link: 'https://www.linkedin.com/company/mycompany' },
  google :   { use: true, link: 'https://plus.google.com/myidongoogle' },
  mybutton : { use: true, link: 'http://github.com', icon: 'github', class: 'git', title: 'My title for the button' },
  phone :    { use: true, link: '+000' },
  email :    { use: true, link: 'test@web.com' }
});