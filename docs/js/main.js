$(document).ready(function(){

/*...................Form-login...................*/

	$(".button-login").click(function(){
		$(".form-login").css({'top': $(window).scrollTop() +80}).fadeIn();
		$(".background-pop-up").fadeIn();
	});

	$(".background-pop-up, .button-close").click(function(){
		$(".form-login").fadeOut();
		$(".background-pop-up").fadeOut();
	});

/*................Form-registration................*/

	$(".button-registration").click(function(){
		$(".form-registration").css({'top': $(window).scrollTop() +80}).fadeIn();
		$(".background-pop-up").fadeIn();
	});

	$(".background-pop-up, .button-close").click(function(){
		$(".form-registration").fadeOut();
		$(".background-pop-up").fadeOut();
	});

/*....................Burger-menu..................*/
	
	$(".mobile-burger-button").click(function(){
		$(".inner-page-sidebar").addClass("active");
		$(".menu-dark-background").fadeIn();
	});

	$(".menu-dark-background, .link-mobile-nav").click(function(){
		$(".inner-page-sidebar").removeClass("active");
		$(".menu-dark-background").fadeOut();
	});

/*.....................User-list...................*/

	$(".user-avatar-block").click(function(){
		$(".user-profile-list").toggleClass("active");	
	});

	$(".user-profile-list, .inner-page-content").click(function(){
		$(".user-profile-list").toggleClass("active");
	});

	$(".inner-page-content").click(function(){
		$(".user-profile-list").removeClass("active");
	});

/*.............Sidebar-statistic-list.............*/

	var statisticList = function(){	
		var data = $(".sidebar-main-statistic-item").attr("data-statistic-list");
		$(".statistic-list-head").on("click", function(e){
			e.preventDefault();
			if(data === "close"){
				$(".sidebar-statistic-body-item").slideUp();
				if($(this).hasClass("active")){
					$(this).toggleClass("active");
				}
				else{
					$(".statistic-list-head").removeClass("active");
					$(this).toggleClass("active");
				}
			}
			else{
				$(this).toggleClass("active");
			}
			$(this).next(".sidebar-statistic-body-item").not(".animated").slideToggle();
		});
	}

statisticList();

/*..................News-item-slide................*/

	$('.block-news-content-item .block-news-text').collapser({
	    mode: 'lines',
	    truncate: 2,
	    showText: 'Подробнее'
	});

/*..................Faq-question-accordeon................*/

var questionFaq = function(){
		var data = $(".faq-block-question-item").attr("data-question");

		$(".faq-block-question-item-head").on("click", function(){
			if(data === "close"){
				$(".faq-block-question-item-body").slideUp();
				if($(this).hasClass("active")){
					$(this).toggleClass("active");
				}
				else{
					$(".faq-block-question-item-head").removeClass("active");
					$(this).toggleClass("active");
				}
			}
			else{
				$(this).toggleClass("active");
			}
			$(this).next(".faq-block-question-item-body").not(".animated").slideToggle();
		});
	}

questionFaq();

/*...................Form-My-site...................*/

	$(".add-site-create-site-button").click(function(){
		$(".block-form-my-site").fadeIn();
		$(".my-site-dark-background").fadeIn();
	});

	$(".my-site-dark-background, .my-site-button-close").click(function(){
		$(".block-form-my-site").fadeOut();
		$(".my-site-dark-background").fadeOut();
	});

/*...................Form-Support...................*/

	$(".support-button-create-appeal").click(function(){
		$(".block-form-support").fadeIn();
		$(".support-dark-background").fadeIn();
	});

	$(".support-dark-background, .support-button-close").click(function(){
		$(".block-form-support").fadeOut();
		$(".support-dark-background").fadeOut();
	});

/*...................Form-HTTPS...................*/

	$(".sites-link-get-code").click(function(){
		$(".sites-block-https").fadeIn();
		$(".sites-pop-up-bg-dark").fadeIn();
	});

	$(".sites-pop-up-bg-dark, .block-protocol-button-close").click(function(){
		$(".sites-block-https").fadeOut();
		$(".sites-pop-up-bg-dark").fadeOut();
	});

/*...................Date-Range-Picker...................*/

	$('#dom-id').dateRangePicker({
		autoClose: true,
		format: 'YY.MM.DD',
		separator: ' - ',
		language: 'auto',
		startOfWeek: 'sunday',// or monday

		getValue: function(){
			return $(this).val();
		},

		setValue: function(s){
			if(!$(this).attr('readonly') && !$(this).is(':disabled') && s != $(this).val())
			{
				$(this).val(s);
			}
		},

		startDate: false,
		endDate: false,
		time: {
			enabled: false
		},
		minDays: 0,
		maxDays: 0,
		showShortcuts: false,
		customShortcuts : [],
		inline:false,
		container:'body',
		alwaysOpen:false,
		singleDate:false,
		lookBehind: false,
		batchMode: false,
		duration: 200,
		stickyMonths: false,
		dayDivAttrs: [],
		dayTdAttrs: [],
		applyBtnClass: '',
		singleMonth: 'auto',

		hoveringTooltip: function(days, startTime, hoveringTime){
			return days > 1 ? days + ' ' + lang('days') : '';
		},

		showTopbar: true,
		swapTime: false,
		selectForward: false,
		selectBackward: false,
		showWeekNumbers: false,

		getWeekNumber: function(date){ //date will be the first day of a week
			return moment(date).format('w');
		},

		monthSelect: true,
		yearSelect: true
	});

});