$(document).ready(function(){
//Ładowanie podstrony "galeria" po kliknięciu na hiperłącza w lewym menu (zadanie 3 oraz zadanie 2)
	$("h3#h-left").click(function(){
		$(".content_load").load("gallery.html")});
//Ładowanie podstrony "kontakt" po kliknięciu na hiperłącza w prawym menu (zadanie 4 oraz zadanie 2)
	$("h3#h-right").click(function(){
		$(".content_load").load("contact.html")});
//Walidacja formularza (zadanie 4 oraz elementy zadania 1c)
	$(".b_formular").click(function() {
		var i1=$("input[name=imie]");
		var i2=$("input[name=nazwisko]");
		var i3=$("input[name=email]");
		var i4=$("textarea")
		var email=$("input[name=email]").val()
		function email_validation(email){
			var regex= /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
			if (regex.test(email)){
				return true;}
			else{
				return false;}};
		if(i1.val().length==0){
			i1.addClass("emptyField")}
		else{
			i1.removeClass("emptyField")};
		if(i2.val().length==0){
			i2.addClass("emptyField")}
		else{
			i2.removeClass("emptyField")};
		// if(i3.val().length==0){
			// i3.addClass("emptyField")}
		// else{
			// i3.removeClass("emptyField")};
		if(i4.val().length==0){
			i4.addClass("emptyField")}
		else{
			i4.removeClass("emptyField")};
		if (!(email_validation(email))){
			i3.addClass("emptyField")}
		else{
			i3.removeClass("emptyField")};
	});
//Pokazanie się buttonów na stronie głównej (zadanie 1d)
	$(".main").click(function(){
		$(".button").fadeIn(100)});
//Podświetlenie buttonów na stronie głównej (zadanie 1d)
	$(".button").hover(function(){
		$(this).addClass("highlighted");},
		function()
		{$(this).removeClass("highlighted")}
		);
//Ukrycie części main z grafiką (zadanie 1d)
	$(".main_text").click(function(){
		$(".main").fadeOut(200)});
//Modyfikacja elemntów DOM: p, div, h, a (zadanie 1a)
	$(".change_layout").click(function() {
		$(".menu").css("background-color", "white", "color", "black", "border", "1px solid black");
		$("a").css("color", "black");
		$(".main").slideUp();
		$("h2").css("color", "black", "font-size", "12");
		$("#footer").slideUp();
		$("#header").css("background-color","white");
		$(".news").toggleClass("news_added");
		$(this).hide();
		
		});
//Dodawanie, usuwanie, modyfikacja elemntów HTML (zadanie 1b)
	$("#add_news").click(function(){
		var text=$("#news_textarea").val();
		var title=$("#input_title").val();
		$("#here").append(text);
		$("#here").before("<p class=\"news_title\">"+title+"</p>");
		$("#here").before("<p class=\"news_added\">Dodano: dzisiaj</p>");
		$("#here").before("<hr>");
		})
	$("#delete_news").click(function(){
		$(".content_load").empty()});
//Przełączanie klas CSS (zadanie 1c)
	$(".change_buttons").click(function() {
		$(".news").toggleClass("blue_font");
		$(".news_added").toggleClass("blue_font");
		$(".news_content").toggleClass("blue_font");
		$(".news_title").toggleClass("blue_font");});
//Tworzenie galerii		
		
		$('.sp').first().addClass('active');
		$('.sp').hide();    
		$('.active').show();

		$('#button-next').click(function(){
			$('.active').removeClass('active').addClass('oldActive');    
                  if ( $('.oldActive').is(':last-child')) {
						$('.sp').first().addClass('active');
							}
				else{
					$('.oldActive').next().addClass('active');
								}
			$('.oldActive').removeClass('oldActive');
			$('.sp').fadeOut();
			$('.active').fadeIn();
        });
    
       $('#button-previous').click(function(){
			$('.active').removeClass('active').addClass('oldActive');    
				if ( $('.oldActive').is(':first-child')) {
					$('.sp').last().addClass('active');
						}
				else{
					$('.oldActive').prev().addClass('active');
					}
			$('.oldActive').removeClass('oldActive');
			$('.sp').fadeOut();
			$('.active').fadeIn();
    });

	})
