(function($) {
    'use strict';

    // Main Navigation
    $( '.hamburger-menu' ).on( 'click', function() {
        $(this).toggleClass('close');
        $('.site-branding').toggleClass('hide');
        $('.site-navigation').toggleClass('show');
        $('.site-header').toggleClass('no-shadow');
    });
})(jQuery);

function openLinks() {
  var links = document.getElementsByClassName("to-open");
  for (var i = 0; i < links.length; i++) {
    window.open(links[i].href);
  }
}
