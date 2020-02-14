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


(function() {
	let menu = document.querySelector(".menu");
	
	if(document.querySelector(".main") !== null)
		main_func();
	else if(menu !== null)
		menu_func(menu);

})();

//# sourceMappingURL=../maps/main.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFuaW1hdGVfbGlua19zZWxmKHF1ZXJ5LCB1cmwpIHtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeSkuY2xhc3NMaXN0LmFkZChcImFuaW1hdGlvbl93aGl0ZWZhZGVcIik7IFxuXG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHR3aW5kb3cub3Blbih1cmwsIFwiX3NlbGZcIik7XG5cdH0sIDQwMCk7XG59XG5cbmZ1bmN0aW9uIGFuaW1hdGVfbGlua19ibGFuayhxdWVyeSwgdXJsKSB7XG5cdGxldCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnkpO1xuXHRlbC5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0aW9uX3doaXRlZmFkZVwiKTtcblx0XHRcblx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdHdpbmRvdy5vcGVuKHVybCwgXCJfYmxhbmtcIik7XG5cdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZShcImFuaW1hdGlvbl93aGl0ZWZhZGVcIik7XG5cdH0sIDE1MCk7XHRcblxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5fX21lc3NhZ2VtZVwiKS5zdHlsZS5jb2xvciA9IFwiIzIwMjAyMFwiO1xufVxuXG5mdW5jdGlvbiBhbmltYXRlX2xpbmsocXVlcnksIHVybCwgb3Blbl90eXBlKSB7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9fbWVzc2FnZW1lXCIpLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1x0XG5cdFxuXHRpZihvcGVuX3R5cGUgIT0gXCJfYmxhbmtcIil7XG5cdFx0YW5pbWF0ZV9saW5rX3NlbGYocXVlcnksIHVybCk7IFxuXHR9IGVsc2Uge1xuXHRcdGFuaW1hdGVfbGlua19ibGFuayhxdWVyeSwgdXJsKTtcblx0fVxufVxuXG5mdW5jdGlvbiBtZW51X2Z1bmMobWVudSl7XG5cdG1lbnUuc3R5bGUudG9wID0gXCItMXB4XCI7XG59XG5cbmZ1bmN0aW9uIG1haW5fZnVuYygpe1xuXHRsZXQgbWFpbl9pbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9faW5uZXJcIik7XG5cdGxldCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpbl9faXRlbVwiKTtcblxuXHRtYWluX2lubmVyLnN0eWxlLmxlZnQgPSBcIi1cIiArIG1haW5faW5uZXIuY2xpZW50V2lkdGggLyA3O1xuXHRtYWluX2lubmVyLnN0eWxlLnRvcCAgPSBcIi1cIiArIG1haW5faW5uZXIuY2xpZW50SGVpZ2h0IC8gNC45O1xuXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKyl7XG5cdFx0aXRlbXNbaV0uY2xhc3NMaXN0LmFkZChcIm1haW5fX2l0ZW1fc2NhbGVcIik7XG5cdH1cblxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9faXRlbV9yXCIpLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgxcHgpIHNjYWxlKDEpXCI7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluX19pdGVtX2xcIikuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKC0xcHgpIHNjYWxlKDEpXCI7XG5cdH0sIDEwMCk7XG5cblx0c2V0X2FuaW1hdGVfbGluaygpO1xuXHRzZXRfYW5pbWF0ZV9wYW5lbCgpO1xufVxuXG5cbmZ1bmN0aW9uIHNldF9hbmltYXRlX3BhbmVsKCl7XG5cdGNvbnN0IGFuaW1hdGVfcGFubmVscyA9IFtcIi5tYWluX19pdGVtXCJdO1xuXHRcblx0Zm9yKGxldCBpID0gMDsgaSA8IGFuaW1hdGVfcGFubmVscy5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBhbGxfZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGFuaW1hdGVfcGFubmVsc1tpXSk7XG5cdFx0XG5cdFx0Zm9yKGxldCBqID0gMDsgaiA8IGFsbF9lbC5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYoYWxsX2VsW2pdLmNsYXNzTGlzdC5jb250YWlucyhcIm1haW5fX2l0ZW1fcHJvZmlsZVwiKSlcblx0XHRcdFx0Y29udGludWU7XG5cblx0XHRcdGFsbF9lbFtqXS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRsZXQgaHJlZiA9IHRoaXMuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcblx0XHRcdFx0ZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhbmltYXRpb25faXRlbVwiKTtcblx0XHRcblx0XHRcdFx0YW5pbWF0ZV9saW5rKFwiLm1haW5cIiwgaHJlZiwgXCJfc2VsZlwiKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gc2V0X2FuaW1hdGVfbGluaygpe1xuXHRjb25zdCBhbmltYXRlX2J1dHRvbnMgPSBbXCIubWFpbl9fbWVzc2FnZW1lXCIsIFwiLnNvY2lhbF9fbGlua1wiXTtcblxuXHRmb3IobGV0IGkgPSAwOyBpIDwgYW5pbWF0ZV9idXR0b25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGFsbF9lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYW5pbWF0ZV9idXR0b25zW2ldKTtcblx0XHRmb3IobGV0IGogPSAwOyBqIDwgYWxsX2VsLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRhbGxfZWxbal0ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0bGV0IGhyZWYgPSB0aGlzLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG5cdFx0XHRcdGxldCB0YXJnZXQgPSB0aGlzLmdldEF0dHJpYnV0ZShcInRhcmdldFwiKTtcblx0XHRcdFx0XG5cdFx0XHRcdGFuaW1hdGVfbGluayhcIi5tYWluXCIsIGhyZWYsIHRhcmdldCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cblxuKGZ1bmN0aW9uKCkge1xuXHRsZXQgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKTtcblx0XG5cdGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKSAhPT0gbnVsbClcblx0XHRtYWluX2Z1bmMoKTtcblx0ZWxzZSBpZihtZW51ICE9PSBudWxsKVxuXHRcdG1lbnVfZnVuYyhtZW51KTtcblxufSkoKTtcbiJdLCJmaWxlIjoiLi4vanMvbWFpbi5qcyJ9
