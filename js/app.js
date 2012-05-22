$(function() {

	WebFontConfig = {
    	google: { families: [ 'Knewave::latin', 'Chicle::latin', 'Chau+Philomene+One::latin', 'Oleo+Script::latin', 'Lobster::latin', 'Fredoka+One::latin', 'Russo+One::latin', 'Exo::latin', 'Titan+One::latin', 'Electrolize::latin', 'Passion+One::latin' ] }
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

  	function getRGB( unit,base ) {
  		unit = (unit / base * 255);
  		return Math.round(unit); 
  	} 

    function getHex(hour,min,sec) {
      var secSinceMid = ((hour * 60 * 60) + (min * 60) + sec) * 194;
      //return secSinceMid;
      return parseInt(secSinceMid,10).toString(16).toUpperCase();
    }


  	function getTime() {
  		var d = new Date(),
  			curr_hour = d.getHours(),
  			curr_min = d.getMinutes(),
  			curr_sec = d.getSeconds();
  		if (curr_min < 10) {
  			curr_min = "0" + curr_min;
  		}
  		if (curr_sec < 10) {
  			curr_sec = "0" + curr_sec;
  		}
  		$('#clock').html(curr_hour + ":" + curr_min + ":" + curr_sec);
  		$('#rgb').html('rgb value ===> red: ' + getRGB(curr_hour,24) + ' green: ' + getRGB(curr_min,60) + ' blue: ' + getRGB(curr_sec,60));
  		$('#hex').html(getHex(curr_hour,parseInt(curr_min),parseInt(curr_sec)));
  		$('html').css('background', 'rgb(' + getRGB(curr_hour,24) + ',' + getRGB(curr_min,60) + ',' + getRGB(curr_sec,60) + ')')
      //$('html').css('background', '#' + getHex(curr_hour,parseInt(curr_min),parseInt(curr_sec)))
  	}


// icons I need
// Full Screen
// Alarm Clock
// Settings



// if (typeof(localStorage) == 'undefined' ) {
// 	alert('Your browser does not support HTML5 localStorage. Try upgrading.');
// } else {
// 	try {
// 		localStorage.setItem("name", "Hello World!"); //saves to the database, "key", "value"
// 	} catch (e) {
// 	 	 if (e == QUOTA_EXCEEDED_ERR) {
// 	 	 	 alert('Quota exceeded!'); //data wasn't successfully saved due to quota exceed so throw an error
// 		}
// 	}
//  
// 	document.write(localStorage.getItem("name")); //Hello World!
// 	localStorage.removeItem("name"); //deletes the matching item from the database
// }

	$('#font').change(function() {
  		var fontVal = $(this).find('option:selected').val();
  		if (fontVal !== 'Change Font') {
	  		$('#clock').css({
	  			'font-family': fontVal
	  		});
  		}
  	});

	$('#fullscreen').on('click', function (e) {
   		var docElm = document.documentElement;
   		e.preventDefault();
   		if (docElm.requestFullscreen) {
        	docElm.requestFullscreen();
        }
        else if (docElm.mozRequestFullScreen) {
        	docElm.mozRequestFullScreen();
       	}
        else if (docElm.webkitRequestFullScreen) {
        	docElm.webkitRequestFullScreen();
        }
	});

	getTime();

	window.setInterval(function(){
	  getTime();
	}, 1000);
		


//Hex Number Values
// 0 = 0
// 1 = 1
// 2 = 2
// ...
// 9 = 9
// A = 10
// B = 11
// C = 12
// D = 13
// E = 14
// F = 15


// convert hex to rgb eg FF0000 = red
// get each part or rgb, red is FF so 15 (x) ,15 (y)
// perform following calc: 
// ( x * 16 ) + y = 255



// convert rgb to hex eg 255,0,0 = red
// x = Reds / 16
// y = Remainder when you divide the reds by 16.
// so 255 / 16 = 15 with a remainder of 15, so you get 15 and 15, = FF


});