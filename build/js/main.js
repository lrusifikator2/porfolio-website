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

//# sourceMappingURL=../maps/main.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFuaW1hdGVfbGlua19zZWxmKHF1ZXJ5LCB1cmwpIHtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeSkuY2xhc3NMaXN0LmFkZChcImFuaW1hdGlvbl93aGl0ZWZhZGVcIik7IFxuXG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHR3aW5kb3cub3Blbih1cmwsIFwiX3NlbGZcIik7XG5cdH0sIDQwMCk7XG59XG5cbmZ1bmN0aW9uIGFuaW1hdGVfbGlua19ibGFuayhxdWVyeSwgdXJsKSB7XG5cdGxldCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnkpO1xuXHRlbC5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0aW9uX3doaXRlZmFkZVwiKTtcblx0XHRcblx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdHdpbmRvdy5vcGVuKHVybCwgXCJfYmxhbmtcIik7XG5cdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZShcImFuaW1hdGlvbl93aGl0ZWZhZGVcIik7XG5cdH0sIDE1MCk7XHRcblxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5fX21lc3NhZ2VtZVwiKS5zdHlsZS5jb2xvciA9IFwiIzIwMjAyMFwiO1xufVxuXG5mdW5jdGlvbiBhbmltYXRlX2xpbmsocXVlcnksIHVybCwgb3Blbl90eXBlKSB7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9fbWVzc2FnZW1lXCIpLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1x0XG5cdFxuXHRpZihvcGVuX3R5cGUgIT0gXCJfYmxhbmtcIil7XG5cdFx0YW5pbWF0ZV9saW5rX3NlbGYocXVlcnksIHVybCk7IFxuXHR9IGVsc2Uge1xuXHRcdGFuaW1hdGVfbGlua19ibGFuayhxdWVyeSwgdXJsKTtcblx0fVxufVxuXG5mdW5jdGlvbiBtZW51X2Z1bmMobWVudSl7XG5cdG1lbnUuc3R5bGUudG9wID0gXCItMXB4XCI7XG59XG5cbmZ1bmN0aW9uIG1haW5fZnVuYygpe1xuXHRsZXQgbWFpbl9pbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9faW5uZXJcIik7XG5cdGxldCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpbl9faXRlbVwiKTtcblxuXHRtYWluX2lubmVyLnN0eWxlLmxlZnQgPSBcIi1cIiArIG1haW5faW5uZXIuY2xpZW50V2lkdGggLyA3O1xuXHRtYWluX2lubmVyLnN0eWxlLnRvcCAgPSBcIi1cIiArIG1haW5faW5uZXIuY2xpZW50SGVpZ2h0IC8gNC45O1xuXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKyl7XG5cdFx0aXRlbXNbaV0uY2xhc3NMaXN0LmFkZChcIm1haW5fX2l0ZW1fc2NhbGVcIik7XG5cdH1cblxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9faXRlbV9yXCIpLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgxcHgpIHNjYWxlKDEpXCI7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluX19pdGVtX2xcIikuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKC0xcHgpIHNjYWxlKDEpXCI7XG5cdH0sIDEwMCk7XG5cblx0c2V0X2FuaW1hdGVfbGluaygpO1xuXHRzZXRfYW5pbWF0ZV9wYW5lbCgpO1xufVxuXG5cbmZ1bmN0aW9uIHNldF9hbmltYXRlX3BhbmVsKCl7XG5cdGNvbnN0IGFuaW1hdGVfcGFubmVscyA9IFtcIi5tYWluX19pdGVtXCJdO1xuXHRcblx0Zm9yKGxldCBpID0gMDsgaSA8IGFuaW1hdGVfcGFubmVscy5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBhbGxfZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGFuaW1hdGVfcGFubmVsc1tpXSk7XG5cdFx0XG5cdFx0Zm9yKGxldCBqID0gMDsgaiA8IGFsbF9lbC5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYoYWxsX2VsW2pdLmNsYXNzTGlzdC5jb250YWlucyhcIm1haW5fX2l0ZW1fcHJvZmlsZVwiKSlcblx0XHRcdFx0Y29udGludWU7XG5cblx0XHRcdGFsbF9lbFtqXS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRsZXQgaHJlZiA9IHRoaXMuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcblx0XHRcdFx0ZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhbmltYXRpb25faXRlbVwiKTtcblx0XHRcblx0XHRcdFx0YW5pbWF0ZV9saW5rKFwiLm1haW5cIiwgaHJlZiwgXCJfc2VsZlwiKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gc2V0X2FuaW1hdGVfbGluaygpe1xuXHRjb25zdCBhbmltYXRlX2J1dHRvbnMgPSBbXCIubWFpbl9fbWVzc2FnZW1lXCIsIFwiLnNvY2lhbF9fbGlua1wiXTtcblxuXHRmb3IobGV0IGkgPSAwOyBpIDwgYW5pbWF0ZV9idXR0b25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGFsbF9lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYW5pbWF0ZV9idXR0b25zW2ldKTtcblx0XHRmb3IobGV0IGogPSAwOyBqIDwgYWxsX2VsLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRhbGxfZWxbal0ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0bGV0IGhyZWYgPSB0aGlzLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG5cdFx0XHRcdGxldCB0YXJnZXQgPSB0aGlzLmdldEF0dHJpYnV0ZShcInRhcmdldFwiKTtcblx0XHRcdFx0XG5cdFx0XHRcdGFuaW1hdGVfbGluayhcIi5tYWluXCIsIGhyZWYsIHRhcmdldCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGNoZWNrX2lmX2VtYWlsKHN0cikge1xuXHRpZiAoL15cXHcrKFtcXC4tXT9cXHcrKSpAXFx3KyhbXFwuLV0/XFx3KykqKFxcLlxcd3syLDN9KSskLy50ZXN0KHN0cikpXG5cdFx0cmV0dXJuICh0cnVlKTtcblx0cmV0dXJuIChmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdCgpIHtcblx0bGV0IHVybCA9IFwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZm9ybXMvdS8wL2QvZS8xRkFJcFFMU2Rmb2d6cGNKV1hNQl93Q2RiQnZJc1NITmVyb0N6T21Ha1gxUG9ZM2dEYUdGR3dWdy9mb3JtUmVzcG9uc2VcIjtcblx0bGV0IHhodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cdGxldCBtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbWFpbFwiKS52YWx1ZTtcblx0bGV0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hbWVcIikudmFsdWU7XG5cdGxldCBtZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZXNzYWdlXCIpLnZhbHVlO1xuXHRcblx0aWYobmFtZSA9PT0gXCJcIikge1xuXHRcdHNob3dfZXJyb3IoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb250YWN0bWVfX2lucHdyYXBwZXJcIilbMF0sIFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZFwiKTtcblx0XHRyZXR1cm4gLTE7XG5cdH1cblxuXHRpZihtYWlsID09PSBcIlwiKSB7XG5cdFx0c2hvd19lcnJvcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbnRhY3RtZV9faW5wd3JhcHBlclwiKVsxXSwgXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkXCIpO1xuXHRcdHJldHVybiAtMTtcblx0fVxuXG5cdGlmKCFjaGVja19pZl9lbWFpbChtYWlsKSkge1xuXHRcdHNob3dfZXJyb3IoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb250YWN0bWVfX2lucHdyYXBwZXJcIilbMV0sIFwiU2hvdWxkIGJlIGFuIGFjdHVhbCBlbWFpbCBhZGRyZXNzXCIpO1xuXHRcdHJldHVybiAtMTtcblx0fVxuXG5cdHhodHRwLm9wZW4oXCJQT1NUXCIsIHVybCwgdHJ1ZSk7XG5cdHhodHRwLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG5cdHhodHRwLnNlbmQoXCJlbWFpbEFkZHJlc3M9XCIgKyBtYWlsICsgXCImZW50cnkuMjEwOTEzODc2OT1cIiArIG5hbWUgKyBcIiAmZW50cnkuMTQwMDYwMjY0Nj0gXCIgKyBtZXNzYWdlKTtcblx0YW5pbWF0ZV9mb3JtKCk7XG59XG5cbmZ1bmN0aW9uIGhpZGVfYWxsX2Vycm9yc19jb250YWN0bWUoKSB7XG5cdGxldCBlcnJvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbnRhY3RtZV9faW5wd3JhcHBlclwiKTsgXG5cdFxuXHRmb3IobGV0IGkgPSAwOyBpIDwgZXJyb3JzLmxlbmd0aDsgaSsrKSB7XG5cdFx0ZXJyb3JzW2ldLnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdG1lX19lcnJvcndyYXBwZXJcIikuY2xhc3NMaXN0LnJlbW92ZShcImNvbnRhY3RtZV9fc2hvd2Vycm9yXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHNob3dfZXJyb3IoZWwsIGVycm9yKSB7XG5cdGhpZGVfYWxsX2Vycm9yc19jb250YWN0bWUoKTtcblx0bGV0IHN1YmVsID0gZWwucXVlcnlTZWxlY3RvcihcIi5jb250YWN0bWVfX2Vycm9yd3JhcHBlclwiKTtcblx0c3ViZWwuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RtZV9fc2hvd2Vycm9yXCIpO1xuXHRzdWJlbC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3RtZV9fdGV4dFwiKS5pbm5lclRleHQgPSBlcnJvcjtcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZV9mb3JtKCl7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGhhbmt5b3Utbm90ZVwiKS5jbGFzc0xpc3QuYWRkKFwiZmFkZWluX2FuaW1cIik7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdG1lXCIpLmNsYXNzTGlzdC5hZGQoXCJmYWRlb3V0X2FuaW1cIik7XG59XG5cbihmdW5jdGlvbigpIHtcblx0bGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIik7XG5cdFxuXHRpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIikgIT09IG51bGwpXG5cdFx0bWFpbl9mdW5jKCk7XG5cdGVsc2UgaWYobWVudSAhPT0gbnVsbClcblx0XHRtZW51X2Z1bmMobWVudSk7XG5cbn0pKCk7XG4iXSwiZmlsZSI6Ii4uL2pzL21haW4uanMifQ==
