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
	var mail = document.getElementById("email").value;
	var link = document.getElementById("url").value;
	var bd = document.getElementById("birth").value;
	var tlph = document.getElementById("telephone").value;
	alert("Имя: " + name + '\n' + 
				"Почта " + mail + '\n' + 
				"Сайт: " + link + '\n' + 
				"Дата рождения: " + bd + '\n' + 
				"Номер телефона: " + tlph + '\n' + 
				"Вы любите: " )
}