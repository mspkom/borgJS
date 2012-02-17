/*
/ borg.js
*/
var borgJS = (function() {
	
	var borg = 'We are Borg.';
	
	var printSlogan = function( val ) {
		console.log('val: ' + val)
		return outputStream = borg + '<br>' + val;
	}
	
	return {
		
		init: function() {
			outputStream = 'Resistance is futile!';
			document.getElementById('borg').innerHTML = printSlogan( outputStream );;
		}
		
	}
	
})();

borgJS.init();
