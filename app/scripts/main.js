// prefixer helper function
var pfx = ["webkit", "moz", "MS", "o", ""];
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
  $('.js-menu-button').on('click', (e) => {
    var $el = $(e.currentTarget);
    $el.toggleClass('active');
    $html.toggleClass('is-open');
  });

  var map = MapFactory('#map-canvas');
});

var destacados = document.querySelector('.destacados')

if(destacados){
  var shuffle = new shuffle(destacados, {
    itemSelector: '.destacado'
  });
}