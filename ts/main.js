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

	document.querySelector(".profile-block__messageme").style.color = "#202020";
}

function animate_link(query, url, open_type) {
	document.querySelector(".profile-block__messageme").style.color = "white";	
	
	if(open_type != "_blank"){
		animate_link_self(query, url); 
	} else {
		animate_link_blank(query, url);
	}
}

let burger_active = 0;
function add_burger() {
	document.querySelector('.menu__burger').onclick = function() {
		if(burger_active) {
			burger_active = 0;
			document.querySelector('.side-menu').style.left = "-300px";
		} else {
			burger_active = 1;
			document.querySelector('.side-menu').style.left = "0";
			
		}
	};
}

function menu_func(){
	add_burger();
	document.querySelector('.side-menu').style.opacity = "1";
	

	setTimeout(function() {
		document.querySelector(".menu").style.top = "-1px";
	}, 10);
}

function main_func(){
	let items = document.querySelectorAll(".main-block");

	setTimeout(function() {

		for(var i = 0; i < items.length; i++){
			items[i].classList.add("scale__dest");
		}
		document.querySelector(".profile-block").classList.add("scale__dest");
	}, 10);

	setTimeout(function() {
		document.querySelector(".profile-block_r").classList.add(".emmet-trftx__right");
		document.querySelector(".profile-block_l").classList.add(".emmet-trftx__left");
	}, 100);

	set_animate_link();
	set_animate_panel();
}


function set_animate_panel(){
	const animate_pannels = [".main-block"];
	
	for(let i = 0; i < animate_pannels.length; i++) {
		let all_el = document.querySelectorAll(animate_pannels[i]);
		
		for(let j = 0; j < all_el.length; j++) {
			all_el[j].onclick = function () {
				let href = this.getAttribute("href");
				event.target.classList.add("animation_item");
		
				animate_link(".main__inner", href, "_self");
			}
		}
	}
}

function set_animate_link(){
	const animate_buttons = [".profile-block__messageme", ".social__link"];

	for(let i = 0; i < animate_buttons.length; i++) {
		let all_el = document.querySelectorAll(animate_buttons[i]);
		for(let j = 0; j < all_el.length; j++) {
			all_el[j].onclick = function () {
				let href = this.getAttribute("href");
				let target = this.getAttribute("target");
				
				animate_link(".main__inner", href, target);
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
	document.querySelector(".contactme__cont").classList.add("fadeout_anim");
}

(function() {
	let menu = document.querySelector(".menu");

	if(menu !== null)
		menu_func();
	else
		main_func();
		
})();
