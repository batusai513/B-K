// prefixer helper function
'use strict';
var pfx = ['webkit', 'moz', 'MS', 'o', ''];
function prefixedEventListener(element, type, callback) {
  for (var p = 0; p < pfx.length; p++) {
    if (!pfx[p]) type = type.toLowerCase();
    element.addEventListener(pfx[p]+type, callback, false);
  }
}

// new event listener function
/*var monkey = document.querySelector("#monkey");
prefixedEventListener(monkey,"AnimationStart",function(e){
    console.log("log at beginning of monkey animation");
});*/
var $html = $('html');

$(() => {

  var $readmore = $('.readmore');

  if($readmore.length){
    $readmore.each(function(index, el){
      var $el = $(el);
      var $firstParagraph = $el.children('p').first();
      var paragraphText = $firstParagraph.text().trim();
      var wordCount = paragraphText.length + 1 ||  180;
      $el.expander({
        slicePoint: wordCount,
        expandText: 'Leer más',
        expandPrefix: '&hellip;',
        userCollapseText: 'Leer menos'
      });
    });
  }

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $('.js-menu-button').on('click', (e) => {
    var $el = $(e.currentTarget);
    $el.toggleClass('active');
    $html.toggleClass('is-open');
  });

  var map = MapFactory('#map-canvas');
  var $stikyNav = $('#sticky-container');
  var $navItems = $stikyNav.find('.horizontal-nav__item');
  var $projects = $('.inview-project');

  if($stikyNav.length){
    var sticky = new Waypoint.Sticky({
      element: $stikyNav[0]
    });
  }

  if($projects.length){
    $projects.each(function(item, el){
      var inview = new Waypoint.Inview({
        element: el,
        enter: function(direction) {
          var $el = $(el);
          var id = $el.attr('id');
          var $currentNavItem = $navItems.find(`[href="#${id}"]`).parent();
          $navItems.removeClass('is-active');
          $currentNavItem.addClass('is-active');
        }
      });
    });
  }

  var $zoomGalery = $('.zoom-gallery');
  if($zoomGalery.length){
    $('.zoom-gallery').each((index, item) => {
      $(item).magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
          verticalFit: true
          // titleSrc: function(item) {
          //   return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
          // }
        },
        gallery: {
          enabled: true
        },
        zoom: {
          enabled: true,
          duration: 300, // don't foget to change the duration also in CSS
          opener: function(element) {
            return element.find('img');
          }
        }
      });
    });
  }

  $('.main-slider').slick({
    autoplay: true,
    dots: true,
    arrows: false,
    fade: true
  });

});

var destacados = document.querySelector('.destacados')

if(destacados){
  var shuffle = new shuffle(destacados, {
    itemSelector: '.destacado'
  });
}
