$(document).ready(function() {	
	
	$("#colorChanger").ready(function() {
	$("#colorChanger").css("opacity","0.1");
	});
	
	$("#colorChanger").mouseenter(function() {
		$(this).fadeTo("opacity","1.0");
	});
	
	$("#colorChanger").mouseleave(function() {
	$(this).fadeTo("opacity","0.1");
	});
	
	$("#colorChanger").mouseenter(function() {
	$("#filler").show();
	});
	
	$("#filler").hide(function() {
	});
	
	$("#colorChanger").mouseleave(function() {
	$("#filler").hide(100);
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
});