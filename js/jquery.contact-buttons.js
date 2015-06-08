/*!
 * Contact Buttons Plugin Demo 0.1.0
 * https://github.com/joege/contact-buttons-plugin
 *
 * Copyright 2015, José Gonçalves
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
 
(function ($) {
    'use strict';

    $.shareButtons = function( options ){
      
      // Define the defaults
      var defaults = { 
        facebook : { class: 'facebook', use: false, icon: 'facebook',    link: '', title: 'Follow on Facebook' },
        google :   { class: 'gplus',    use: false, icon: 'google-plus', link: '', title: 'Visit on Google Plus' },
        linkedin : { class: 'linkedin', use: false, icon: 'linkedin',    link: '', title: 'Visit on LinkedIn' },
        twitter :  { class: 'twitter',  use: false, icon: 'twitter',     link: '', title: 'Follow on Twitter' },
        phone :    { class: 'phone',    use: false, icon: 'phone',       link: '', title: 'Call us', type: 'phone' },
        email :    { class: 'email',    use: false, icon: 'envelope',    link: '', title: 'Send us an email', type: 'email' }
      };

      // Merge defaults and options, without modifying defaults
      var s,
          settings = options;
      for (s in defaults) {
        if (options[s]) {
          settings[s] = $.extend( defaults[s], options[s] );
        }
      }
      
      // Define the container for the buttons
      var oContainer = $("#contact-buttons-bar");

      // Check if the container is already on the page
      if ( oContainer.length === 0 ) {
        
        // Insert the container element
        $('body').append('<div id="contact-buttons-bar">');
        
        // Get the just inserted element
        oContainer = $("#contact-buttons-bar");
        
        // Add show/hide button
        var sShowHideBtn = '<button class="contact-button-link show-hide-contact-bar"><span class="fa fa-angle-left"></span></button>';
        oContainer.append(sShowHideBtn);
        
        var i;
        for ( i in settings ) {
          var bs = settings[i],
              sLink = bs.link,
              active = bs.use;
          
          // Check if element is active
          if (bs.use === true) {
            
            // Change the link for phone and email when needed
            if (bs.type === 'phone') {
              sLink = 'tel:' + bs.link;
            } else if (bs.type === 'email') {
              sLink = 'mailto:' + bs.link;
            }
            
            // Insert the links
            var sIcon = '<span class="fa fa-' + bs.icon + '"></span>',
                sButton = '<a href="' + sLink + 
                            '"class="contact-button-link cb-ancor ' + bs.class + '" ' + 
                            (bs.title ? 'title="' + bs.title + '"' : '') + 
                            (bs.extras ? bs.extras : '') + 
                            '>' + sIcon + '</a>';
            oContainer.append(sButton);
          }
        }
        
        // Make the buttons visible
        setTimeout(function(){
          oContainer.animate({ left : 0 });
        }, 200);
        
        // Show/hide buttons
        $('body').on('click', '.show-hide-contact-bar', function(e){
          e.preventDefault();
          e.stopImmediatePropagation();
          $('.show-hide-contact-bar').find('.fa').toggleClass('fa-angle-right fa-angle-left');
          oContainer.find('.cb-ancor').toggleClass('cb-hidden');
        });
      }
    };
  
 }( jQuery ));