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
