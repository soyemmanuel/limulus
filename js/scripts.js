$(function(){
	

	if(window.matchMedia("(max-width:600px)").matches){
	
		$('.menu__movil, .close__menu').on('click', function(e){
			$('.menu__principal').fadeToggle()
		})
		
	}
})