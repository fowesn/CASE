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
	
	if(bd == "") bd = "не указана";
	if(tlph == "") tlph = "не указан";
	
	var music = document.getElementById("mus");
	var book = document.getElementById("books");
	var interests = "К сожалению, вы не любите ни музыку, ни книги :(";
	if(music.checked && book.checked) {	
		interests = "Вы любите музыку"; //b книги 
		var radio = document.getElementsByName("music");
		if(radio[0].checked) interests += " (инди)";
		else if(radio[1].checked) interests += " (фолк)";
		interests += " и книги ";
		radio = document.getElementsByName("book");
		if(radio[0].checked) interests += "(поэзия)";
		else if(radio[1].checked) interests += "(проза)";
	}
	else if (music.checked) {
		interests = "Вы любите музыку ";
		var radio = document.getElementsByName("music");
		if(radio[0].checked) interests += "(инди)";
		else if(radio[1].checked) interests += "(фолк)";
	}
	else if (book.checked) {
		interests = "Вы любите книги ";
		var radio = document.getElementsByName("book");
		if(radio[0].checked) interests += "(поэзия)";
		else if(radio[1].checked) interests += "(проза)";
	}
	alert("Имя: " + name + '\n' + 
				"Почта: " + mail + '\n' + 
				"Сайт: " + link + '\n' + 
				"Дата рождения: " + bd+ '\n' + 
				"Номер телефона: " + tlph + '\n' + 
				interests)
}