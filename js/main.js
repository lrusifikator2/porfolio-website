//=include jquery.js
//=include slider.js
//=include start.js
(function() {
    
	function controls() {
		els = document.getElementsByClassName("slider__button");
		for(var i = 0; i < els.length; i++){els[i].classList = "slider__button";}

		$(this).addClass('slider__button_selected');
		$('.slider__inner').animate({
			top: -$('.slider').height() * $(this).index()
		}, 450);
	}
  
	const runCode = () => {
		const button = document.querySelectorAll('.slider__button');
			if ( button ) {
				for ( var i = 0; i < button.length; i++ ) {
					button[i].addEventListener('click', controls, false);
				}
			}
		}
	runCode();
  
})();

var main_inner = $(".main__inner");
main_inner.css("left",  "-" + main_inner.width() + "px");
main_inner.css("top", "-" + main_inner.height() + "px");

$(".main__inner").animate( {"left": "-" + main_inner.width() / 7, "top" : "-" + main_inner.height() / 4.9}, 1400);

$(".main__item").toggleClass('main__item_scale');

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
