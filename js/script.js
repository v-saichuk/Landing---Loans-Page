$('.header__mob-menu-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('header__mob-menu-btn_active');
  });

  $(function($){
    $(".call__num-block-input").mask("+7 (999) 999-9999");
    $(".modal-call").mask("+7 (999) 999-9999");
 });

 $('.trust__footer-link').on('click', function(e) {
    e.preventDefault;
    $('.trust__footer-description').toggleClass('trust__footer-description--open');
  });
  
  $('.get-money__modal-block-text').on('click', function(e) {
      e.preventDefault;
      $(this).toggleClass('get-money__modal-block-text--vis');
    });

//  top menu
$("#about").click(function() {$('html, body').animate({scrollTop: $(".trust").offset().top}, 1000);});
$("#how-get").click(function() {$('html, body').animate({scrollTop: $(".fast").offset().top}, 1000);});
$("#how-invest").click(function() {$('html, body').animate({scrollTop: $(".cooperation").offset().top}, 1000);});
$("#feedback").click(function() {$('html, body').animate({scrollTop: $(".feedback").offset().top}, 1000);});
$("#how-invest-btn").click(function() {$('html, body').animate({scrollTop: $(".cooperation").offset().top}, 1000);});
$("#get-money").click(function() {$('html, body').animate({scrollTop: $(".get-money").offset().top}, 1000);});
$(".get-money__block-wrap").click(function() {$('html, body').animate({scrollTop: $(".get-money").offset().top}, 500);});
// mob menu
$("#about_mob").click(function() {$('html, body').animate({scrollTop: $(".trust").offset().top}, 1000);});
$("#how-get_mob").click(function() {$('html, body').animate({scrollTop: $(".fast").offset().top}, 1000);});
$("#how-invest_mob").click(function() {$('html, body').animate({scrollTop: $(".cooperation").offset().top}, 1000);});
$("#feedback_mob").click(function() {$('html, body').animate({scrollTop: $(".feedback").offset().top}, 1000);});
// footer menu
$("#about_footer").click(function() {$('html, body').animate({scrollTop: $(".trust").offset().top}, 1000);});
$("#how-get_footer").click(function() {$('html, body').animate({scrollTop: $(".fast").offset().top}, 1000);});
$("#how-invest_footer").click(function() {$('html, body').animate({scrollTop: $(".cooperation").offset().top}, 1000);});
$("#feedback_footer").click(function() {$('html, body').animate({scrollTop: $(".feedback").offset().top}, 1000);});


$(function() {
	var link = $('.header__mob-menu-block-link');
    var menu = $('.header__mob-menu-block');
	link.on('click', function(event) {
		event.preventDefault();
        menu.toggleClass('header__mob-menu-block_activ');
    });
});

$(".header__mob-menu-link").click(function(e) {
  e.preventDefault();
  $('.header__mob-menu-block-link').trigger('click');
});


$(document).ready(function(){
  $('.feedback__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:'.feedback__slider-btn-left',
    nextArrow:'.feedback__slider-btn-right',
    responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	      }
      },
      {
	      breakpoint: 700,
	      settings: {
	        slidesToShow: 1,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
    ]
  });
});

// input
if(typeof cFM_classError === 'undefined')
	var cFM_classError='cFM_wrong';
var cFM_checkedGroups=',';

function cFM_checkFullness(handle)
{
	var error = true;
	var attribute = $(handle).attr('cFM_check');
	
	var required = true;
	if(attribute.indexOf('Y')===-1)
		required=false;
	var format=attribute;
	if(required)
		format=attribute.substr(2);
	switch($(handle).attr('type'))
	{
		case 'checkbox': 
			if(!$(handle).prop('checked'))
				error=false;
			break;
		case 'radio': 
			if(!$(handle).prop('checked') && $('[name="'+$(handle).attr('name')+'"]:checked').length==0)
				error=false;
			else
				error=true;
			break;
		default: 
			if(($(handle).val().trim().length==0 || $(handle).val()=='0')&&required)
				error=false;
			else
			{
				if(format==='text-none')
				{
					var regCheck = new RegExp("^[а-яА-ЯёЁa-zA-Z0-9]+$");
					if(!regCheck.test($(handle).val()))
						error='wrong';
				}
				if(format==='email')
				{
					var regCheck = new RegExp("^([0-9a-zA-Z]+[-._+&amp;])*[0-9a-zA-Z]+@([-0-9a-zA-Z]+[.])+[a-zA-Z]{2,6}$");
					if(!regCheck.test($(handle).val()))
						error='wrong';
				}
				if(format==='calls')
				{
					var regCheck = new RegExp('[^0-9\s-]+');
					if(!regCheck.test($(handle).val()))
						error='calll';
				}
				if(format==='calls_text_none')
				{
					var regCheck = new RegExp('[^0-9\s-]+');
					if(!regCheck.test($(handle).val()))
						error='wrong';
				}
			}
		break;
	}
	return error;
}

function cFM_prepareChecking(handle)
{
	var error=true;
	var placeholder = " значение поля";
	if(typeof $(handle).attr('placeholder') !== 'undefined' && $(handle).attr('placeholder').length>0)
		placeholder=$(handle).attr('placeholder');
	var after = handle;
	var attribute = $(handle).attr('cFM_check');
	if(typeof $(handle).attr('cFM_function') !== 'undefined')
		var chkFunk=$(handle).attr('cFM_function');
		
	if(typeof chkFunk !== 'undefined')
		error=window[chkFunk]($(handle));
	else
		error=cFM_checkFullness(handle);
	if(error!==true)
	{
		if(typeof $(handle).attr('cFM_confirmInfo') !== 'undefined')
		{
			after=$(handle).attr('cFM_confirmInfo');
			if(after.indexOf('self')===0)
				after=after.substr(4);
		}
		
		if(error==='wrong')
			$(after).after("");
		else{
			if(error===false)
                $(after).after("<div class='"+cFM_classError+"'> "+placeholder+"</div>");
			else
			if(error==='calll')
				$(after).after("<div class='"+cFM_classError+"'> "+placeholder+"</div>");
			else
				$(after).after("<div class='"+cFM_classError+"'>"+error+"</div>");
		}
		$(handle).addClass(cFM_classError);
		if($(handle).attr('type')=='radio')
			$('[name="'+$(handle).attr('name')+'"]').addClass(cFM_classError);
		
		error=false;
	}
	return error;
}

function cFM_checktrueAttr(parent)
{
	var error=true;
	cFM_checkedGroups=',';
	
	$('div.'+cFM_classError).remove();
	$('.'+cFM_classError).each(function(){
		$(this).removeClass(cFM_classError);
	});	
	
	var inputsToHandle=false;

	if(typeof parent !== 'undefined')
		inputsToHandle=parent.find('[cFM_check]');
	else
		inputsToHandle=$('[cFM_check]');
	inputsToHandle.each(function(){
		if(error) error=cFM_prepareChecking(this);
		else cFM_prepareChecking(this);
	}); 

	return error;
}