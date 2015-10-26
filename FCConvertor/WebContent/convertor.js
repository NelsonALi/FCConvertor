var $ = function (id) {
    return document.getElementById(id);
}

var convert_click =  function() {	    
	var f2c = $("f2c").value;
	if (f2c == "f2c") {
	    var feh = parseFloat($("feh").value);
    	$("cel").value="";	    
	    if (isNaN(feh)) 
	        alert("Invalid Feharenheit Input.");
	    else {
	    	cel = (feh - 32) * 5 / 9;
	    	$("cel").value=cel.toFixed(2);
	    }
	} else {
	    var cel = parseFloat($("cel").value);
    	$("feh").value="";	    
	    if (isNaN(cel)) 
	        alert("Invalid Celcius Input.");
	    else {
	    	feh = cel * 9 / 5 + 32;	    
    	    $("feh").value=feh.toFixed(2);
	    }
    }
}