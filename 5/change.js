function fontColor() {
	var color = document.getElementById("color").value;
	//alert("color " + color);
	$('*').css('color', color ,true);
}

function fontSize() {
	var size = document.getElementById("size").value;
	$('*').css({fontSize: size+'px'});
}

function hide(id) {
	var hide = $(id).prop('hidden');
	$(id).prop('hidden', !hide);
}

function submitted() {
	var name = document.getElementById("name").value; //это работает!
}