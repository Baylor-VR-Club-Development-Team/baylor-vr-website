var list = ["VR", "a Team", "the future"];
var index = 0;

setInterval(function(){
  if(index >= list.length) {
    index = 0;
  }
   $('#rotate').html(list[index]);
   index++;
}, 3000);
