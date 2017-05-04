$(document).ready(function(){
	var menu = $("#head").html();
	$("#menu").html(menu);
	$("#menu").hide();
	$("#left div").click(function(){
		$("#menu").slideToggle(300);
	});
});