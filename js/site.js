// Home We Are Scroller
var list = ["VR", "a Team", "the future"];
var index = 0;

setInterval(function(){
  if(index >= list.length) {
    index = 0;
  }
   $('#rotate').html(list[index]);
   index++;
}, 3000);
// End Home Scroller
// Dev Team Card Carousel

// End Dev Team Card carousel
