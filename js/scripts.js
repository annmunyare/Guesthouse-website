function accomodation(){
	$("#accomodation").slideDown(2000);
	$("#welcome").slideUp(2000);
	$("#contacts").hide(2000)
}
function home(){
	$("#accomodation").hide(2000);
	$("#welcome").show(2000);
	$("#contacts").hide(2000)
}
function contacts(){
	$("#accomodation").hide(2000);
	$("#welcome").hide(2000);
	$("#contacts").show(2000)
}
$(function () {
	$('.tlt').textillate({ 
		in: { effect: 'fadeInDown' }, 
		out: {effect: 'hinge', reverse:true},
		loop: true
	});
})
//user interface
$(document).ready(function(){
	var roomType;
	var name;
	$("#rooms").click(function(event){
		event.preventDefault();
		roomType = parseInt($("#rooms").val());
	});
	$(".button").click(function(event){
		event.preventDefault();
		name = $("input#fname").val();
		if(roomType===1){
			alert(name + " You selected room the Presidential Suite" );

		}else{
			alert("Try again");
		}
	});
});

/*event.preventDefault();
		var roomType = parseInt($("select#rooms").val());
		alert("You selected" + roomType);*/