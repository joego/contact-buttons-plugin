/*
 * Share Buttons Plugin Demo 0.1.0
 * https://github.com/joege/share-buttons-plugin
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
      // Some are true just for testing reasons
      var defaults = { 
        linkedin: { use: true, link: '', icon: 'linkedin', href: 'https://www.linkedin.com', type: 'company' },
        facebook: { use: true, link: '', icon: 'facebook', href: 'https://www.facebook.com', type: 'pages' },
        phone:    { use: true, link: '', icon: 'phone', href: 'tel:' },
        email:    { use: true, link: '', icon: 'envolope-o', href: 'mailto:' }
      };

      // Merge defaults and options, without modifying defaults
      var settings = $.extend( {}, defaults, options );
      
      // Define the container for the buttons
      var oContainer = $("#share-buttons-bar");

      // Check if the container is already on the page
      if ( oContainer.length === 0 ) {
        
        // Insert the container element
        $('body').append('<div id="share-buttons-bar">');
        
        // Get the just inserted element
        oContainer = $("#share-buttons-bar");
        
        var i;
        for ( i in settings ) {
          var bs = settings[i];
          var sLink = bs.href + '/' + (bs.type !== '' ? bs.type : '') + bs.link;
          var sIcon = '<span class="fa fa-' + bs.icon + '"></span>';
          var sButton = '<a href="' + sLink + '" class="share-button-link ' + bs + '">' + sIcon + '</a>';
          oContainer.append(sButton);
        }
        
        // Make the buttons visible
        setTimeout(function(){
          oContainer.addClass("active");
        }, 200);
      }
    };
  
 }( jQuery ));