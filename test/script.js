$(document).ready(function() {
	
	$("#colorChanger").hide();
	
	$("#colorChanger").mouseenter(function() {
		$(this).css("opacity","1.0")
	});
	
	$("#Options").click(function() {
		$("#colorChanger").slideToggle(100)
		$(this).slideUp(100);
	});
	
	$("p#hide").click(function() {
		$("#colorChanger").slideToggle(100);
		$("#Options").slideDown(100);
	});
	
	$("#colorChanger").mouseleave(function() {
	$(this).css("opacity","0.1")
	});
	
	//Blue Theme	
	$("#blue").click(function() {
		$(this).css("border","1px solid white");
		$("#green").css("border","0");
		$("#red").css("border","0");
		$("#wrapper").css("background-color","#7ca1fa");
		$("body").css("background-color","#3597FA");
		$("#colorChanger").css("background-color","#0D2640");
		$("#footer").css("background-color","#0D2640");
	});
	
	//Default Theme
	$("#green").click(function() {
		$(this).css("border","1px solid white");
		$("#blue").css("border","0");
		$("#red").css("border","0");
		$("#wrapper").css("background-color","#78ad00");
		$("body").css("background-color","#b1ff00");
	    $("#colorChanger").css("background-color","#0f4a1d");
		$("#footer").css("background-color","#0f4a1d");
	});
	
	//Red Theme
		$("#red").click(function() {
		$(this).css("border","1px solid white");
		$("#blue").css("border","0");
		$("#green").css("border","0");
		$("#wrapper").css("background-color","#BF3F40");
		$("body").css("background-color","#FF5455");
		$("#colorChanger").css("background-color","#401515");
		$("#footer").css("background-color","#401515");
	});
	
		//Random Theme
		$("#red").click(function() {
		$(this).css("border","1px solid white");
		$("#blue").css("border","0");
		$("#green").css("border","0");
		$("#wrapper").css("background-color","#BF3F40");
		$("body").css("background-color","#FF5455");
		$("#colorChanger").css("background-color","#401515");
		$("#footer").css("background-color","#401515");
	});
});