function animate_link_self(query, url) {
	document.querySelector(query).classList.add("animation_whitefade"); 

	setTimeout(function(){
		window.open(url, "_self");
	}, 400);
}

function animate_link_blank(query, url) {
	let el = document.querySelector(query);
	el.classList.add("animation_whitefade");
		
	setTimeout(function(){
		window.open(url, "_blank");
		el.classList.remove("animation_whitefade");
	}, 150);	

	document.querySelector(".main__messageme").style.color = "#202020";
}

function animate_link(query, url, open_type) {
	document.querySelector(".main__messageme").style.color = "white";	
	
	if(open_type != "_blank"){
		animate_link_self(query, url); 
	} else {
		animate_link_blank(query, url);
	}
}

function menu_func(menu){
	menu.style.top = "-1px";
}

function main_func(){
	let main_inner = document.querySelector(".main__inner");
	let items = document.querySelectorAll(".main__item");

	main_inner.style.left = "-" + main_inner.clientWidth / 7;
	main_inner.style.top  = "-" + main_inner.clientHeight / 4.9;

	for(var i = 0; i < items.length; i++){
		items[i].classList.add("main__item_scale");
	}

	setTimeout(function() {
		document.querySelector(".main__item_r").style.transform = "translateX(1px) scale(1)";
		document.querySelector(".main__item_l").style.transform = "translateX(-1px) scale(1)";
	}, 100);

	set_animate_link();
	set_animate_panel();
}


function set_animate_panel(){
	const animate_pannels = [".main__item"];
	
	for(let i = 0; i < animate_pannels.length; i++) {
		let all_el = document.querySelectorAll(animate_pannels[i]);
		
		for(let j = 0; j < all_el.length; j++) {
			if(all_el[j].classList.contains("main__item_profile"))
				continue;

			all_el[j].onclick = function () {
				let href = this.getAttribute("href");
				event.target.classList.add("animation_item");
		
				animate_link(".main", href, "_self");
			}
		}
	}
}

function set_animate_link(){
	const animate_buttons = [".main__messageme", ".social__link"];

	for(let i = 0; i < animate_buttons.length; i++) {
		let all_el = document.querySelectorAll(animate_buttons[i]);
		for(let j = 0; j < all_el.length; j++) {
			all_el[j].onclick = function () {
				let href = this.getAttribute("href");
				let target = this.getAttribute("target");
				
				animate_link(".main", href, target);
			}
		}
	}
}

function check_if_email(str) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str))
		return (true);
	return (false);
}

function submit() {
	let url = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdfogzpcJWXMB_wCdbBvIsSHNeroCzOmGkX1PoY3gDaGFGwVw/formResponse";
	let xhttp = new XMLHttpRequest();
	let mail = document.querySelector("#email").value;
	let name = document.querySelector("#name").value;
	let message = document.querySelector("#message").value;
	
	if(name === "") {
		show_error(document.querySelectorAll(".contactme__inpwrapper")[0], "This field is required");
		return -1;
	}

	if(mail === "") {
		show_error(document.querySelectorAll(".contactme__inpwrapper")[1], "This field is required");
		return -1;
	}

	if(!check_if_email(mail)) {
		show_error(document.querySelectorAll(".contactme__inpwrapper")[1], "Should be an actual email address");
		return -1;
	}

	xhttp.open("POST", url, true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("emailAddress=" + mail + "&entry.2109138769=" + name + " &entry.1400602646= " + message);
	animate_form();
}

function hide_all_errors_contactme() {
	let errors = document.querySelectorAll(".contactme__inpwrapper"); 
	
	for(let i = 0; i < errors.length; i++) {
		errors[i].querySelector(".contactme__errorwrapper").classList.remove("contactme__showerror");
	}
}

function show_error(el, error) {
	hide_all_errors_contactme();
	let subel = el.querySelector(".contactme__errorwrapper");
	subel.classList.add("contactme__showerror");
	subel.querySelector(".contactme__text").innerText = error;
}

function animate_form(){
	document.querySelector(".thankyou-note").classList.add("fadein_anim");
	document.querySelector(".contactme").classList.add("fadeout_anim");
}

(function() {
	let menu = document.querySelector(".menu");
	
	if(document.querySelector(".main") !== null)
		main_func();
	else if(menu !== null)
		menu_func(menu);

})();
