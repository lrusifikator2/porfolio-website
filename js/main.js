function animate_menu_item(obj, url){
	obj.classList.add("animation_item"); 
	animate_link_self(".main", url);
}

function animate_link_self(query, url) {
	document.querySelector(query).classList.add("animation_whitefade"); 

	setTimeout(function(){
		window.open(url, "_self");
	}, 400);
}

function animate_link_blank(query, url) {
	var el = document.querySelector(query);
	el.classList.add("animation_whitefade");
	
	setTimeout(function(){
		window.open(url, "_blank");
		el.classList.remove("animation_whitefade");
	}, 150);	
}

function animate_link(query, url, open_type) {	
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
	var main_inner = document.querySelector(".main__inner");
	var items = document.querySelectorAll(".main__item");

	main_inner.style.left = "-" + main_inner.clientWidth / 7;
	main_inner.style.top  = "-" + main_inner.clientHeight / 4.9;

	for(var i = 0; i < items.length; i++){
		items[i].classList.add("main__item_scale");
	}

	setTimeout(function() {
		document.querySelector(".main__item_r").style.transform = "translateX(1px) scale(1)";
		document.querySelector(".main__item_l").style.transform = "translateX(-1px) scale(1)";
	}, 100);
}

(function() {
	var menu = document.querySelector(".menu");
	
	if(document.querySelector(".main") !== null)
		main_func();
	else if(menu !== null)
		menu_func(menu);

})();