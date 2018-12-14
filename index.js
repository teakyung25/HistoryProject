$(function(){ 
  //Image
  var d = new Date();
  var seconds= d.getSeconds();
  var arrayImage = ["koreanwar1.jpg", "koreanwar2.jpg", "koreanwar3.jpg"];
  if(seconds >= 10 && seconds < 12){
    document.body.style.background = "url(" + arrayImage[0] + ")";
  } else if (seconds >= 12 && seconds < 14) {
    document.body.style.background = "url(" + arrayImage[1] + ")";
  } else if(seconds >= 14 && seconds < 16){
    document.body.style.background = "url(" + arrayImage[2] + ")";
  }


/*Turn on and off audio*/
   var clicked = true;
    $(".line-c").click( function() {
  		 if (clicked) {
    	 $(".line").addClass("stop");
   		 clicked = false;
         console.log("clicked true");
          $("#backgroundaudio").trigger("pause");
    } else {
   		 $(".line").removeClass("stop");
   		 clicked = true;
         console.log("clicked false");
         $("#backgroundaudio").trigger("play");
  		}
	});
    
 });