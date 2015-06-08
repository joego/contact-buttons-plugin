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
        'facebook' : { class: 'facebook', use: false, icon: 'facebook', link: '' },
        'google' : { class: 'gplus', use: false, icon: 'google-plus', link: '' },
        'linkedin' : { class: 'linkedin', use: false, icon: 'linkedin', link: '' },
        'twitter' : { class: 'twitter', use: false, icon: 'twitter', link: '' },
        'phone' : { class: 'phone', use: false, icon: 'phone', link: '', type: 'phone' },
        'email' : { class: 'email', use: false, icon: 'envelope', link: '', type: 'email' }
      };

      // Merge defaults and options, without modifying defaults
      var settings = $.extend( {}, defaults, options );
      
      // Define the container for the buttons
      var oContainer = $("#contact-buttons-bar");

      // Check if the container is already on the page
      if ( oContainer.length === 0 ) {
        
        // Insert the container element
        $('body').append('<div id="contact-buttons-bar">');
        
        // Get the just inserted element
        oContainer = $("#contact-buttons-bar");
        
        var i;
        for ( i in settings ) {
          var bs = settings[i];
          var sLink = bs.link;
          if (bs.type === 'phone') {
            sLink = 'tel:' + bs.link;
          } else if (bs.type === 'email') {
            sLink = 'mailto:' + bs.link;
          }
          var sIcon = '<span class="fa fa-' + bs.icon + '"></span>';
          var sButton = '<a href="' + sLink + '" class="contact-button-link ' + bs.class + '">' + sIcon + '</a>';
          oContainer.append(sButton);
        }
        
        // Make the buttons visible
        setTimeout(function(){
          oContainer.animate({ left : 0 });
        }, 200);
      }
    };
  
 }( jQuery ));