$(document).ready(function(){

	$('.products-slider').bxSlider({
		auto: true,
		slideWidth: 262.5,
		slideMargin: 30,
		minSlides: 1,
		maxSlides: 6,
		moveSlides: 1,
		pager: false
	});

	$('[data-href]').each(function (element) {
		$(this).click(function () {
			var modal = $(this).attr('data-href');
            $('#fader').find('[data-modal="'+modal+'"]').show();
			$('#fader').fadeIn(300, function () {
                ("click keyup".split(" ")).forEach(function(e){
                    document.addEventListener(e,closeModal,false);
                });
            });
        })
    });

    function closeModal(event) {
        if (event.keyCode === 27 || (event.type == 'click' && !$(event.target).closest('.modal').length)) {
            $('#fader').fadeOut(300);
            setTimeout(function () {
                $('#fader .modal').hide();
                ("click keyup".split(" ")).forEach(function(e){
                    document.removeEventListener(e,closeModal,false);
                });
            }, 300);
        }
    }

});

function navbarToggle(element) {
	$(element).slideToggle(300);
}
