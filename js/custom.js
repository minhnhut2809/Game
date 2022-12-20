// JavaScript Document
$('#banner1').owlCarousel({ 
	loop:true,
	items:1,
	smartSpeed:1000, 
	autoplay:true, 
	autoplayTimeout:5000,
	nav:true, 
})

$('#banner2').owlCarousel({ 
	loop:true,
	items:1,
	smartSpeed:1000, 
	autoplay:true, 
	autoplayTimeout:5000,
	nav:true, 
})

$('#sp-men').owlCarousel({ 
	loop:true,
	margin:30,
	smartSpeed:1000, 
	autoplay:true, 
	autoplayTimeout:50000,
	 responsive:{
        0:{
            items:1,
			dots:false,	nav:true, 
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


$('#tes').owlCarousel({ 
	loop:true,
	margin:200,
	smartSpeed:1000, 
	autoplay:true, 
	autoplayTimeout:50000,
	 responsive:{
        0:{
            items:1,
			dots:false,	nav:true, 
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})




 