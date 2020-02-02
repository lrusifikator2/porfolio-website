//=include jquery.js
//=include slider.js
//=include start.js

var main_inner = $(".main__inner");
main_inner.css("left",  "-" + main_inner.width() + "px");
main_inner.css("top", "-" + main_inner.height() + "px");

$(".main__inner").animate( {"left": "-" + main_inner.width() / 7, "top" : "-" + main_inner.height() / 4.9}, 10);
$(".main__item").toggleClass('main__item_scale');
$(".menu").css("top", "0");

setTimeout(function() {
	$(".main__item_r").css("transform", "translateX(1px) scale(1)");
	$(".main__item_l").css("transform", "translateX(-1px) scale(1)");

}, 100);

setTimeout(function() {	
	$(".main__item").toggleClass("main__ycursor");
	$(".main__item").toggleClass("main__yhover");
	$(".main__cont_profile").removeClass("main__ycursor");
}, 805);

function animate_open(element, url, open_type) {
	$(element).addClass("animation_1");
	$(".main").addClass("animation_whitefade");
	$(element).find(".main__cont").addClass("animation_cont");
	
	setTimeout(function(){
		window.open(url, open_type);
	}, 1450);
}

function animate_open_about(url, open_type, underlying_el){
	$(".main__item_about").addClass("animation_about");
	$(".main").addClass("animation_whitefade");
	$(".main__item_about").find(".main__cont").addClass("animation_cont");

	setTimeout(function(){
		window.open(url, open_type);
	}, 1450);
}

function animate_link(url, open_type) {
	$(".main").addClass("animation_whitefade_s");

	setTimeout(function(){
		window.open(url, open_type);
	}, 500);
}
