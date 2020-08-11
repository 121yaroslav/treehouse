$(document).ready(function() {

	var mode = (window.opera) ? ((document.compatMode == "CSS1Compat") ? $('html') : $('body')) : $('html,body');
	
	$(".select").click(function() {
		var e = document.getElementById("fcode");
		if (window.getSelection) {
			var s = window.getSelection();
			if (s.setBaseAndExtent) {
				s.setBaseAndExtent(e, 0, e, e.innerText.length-1);
			} else {
				var r = document.createRange();
				r.selectNodeContents(e);
				s.removeAllRanges();
				s.addRange(r);
			};
		} else if (document.getSelection) {
			var s = document.getSelection();
			var r = document.createRange();
			r.selectNodeContents(e);
			s.removeAllRanges();
			s.addRange(r);
		} else if (document.selection) {
			var r = document.body.createTextRange();
			r.moveToElementText(e);
			r.select();
		};
		return false;
	});

	$(".pagedemo").click(function() {
		$(this).toggleClass("active");
		$("body").toggleClass("bodydemo");
	});
	
	$(".font_down_button").on("click", (function() {
		ga("send", "event", "downloads", "download");
		yaCounter26774220.reachGoal('DOWNLOAD');
		return true;
	}));
	$(".demo_url button").click(function() {
		yaCounter26774220.reachGoal('URL');
	});

	$(".s_search .button.red").click(function() {
		$(this).toggleClass("active");
		$(".tags").slideToggle();
	});

	$(".fonts_list").css({
		"min-height" : $(window).height()
	});
	
	$(".tags li").click(function() {
		$(".search input").val("");
		$(".tags li").removeClass("active");
		$(this).addClass("active");
		var down = $(this).attr("data-fontname").toLowerCase().replace(/\s+/g, '');
		$(".list_item").hide().filter(function () {
			return $(this).children("h5").attr("data-tag").toLowerCase().replace(/\s+/g, '').indexOf(down) >= 0;
		}).show();
		$(".img_cont img").lazyload();
		mode.animate({scrollTop: 280}, 400);
		countFonts();
	});
	$(".tags li:first-child").click(function() {
		$(".list_item").show();
		countFonts();
	});

	$("#f_sel").load("/foptions.txt").append("<option selected>" + $("h1").text().replace(/Шрифт /g, '') + "</option>");

	if($(".selects > select").length) {
		$(".selects > select").selectmenu();
	};
	$("#f_sel-button").click(function() {
		$("#f_sel-menu li").each(function() {
			var ths = $(this);
			$(this).tooltipster({
				content: $("<img width=\"600\" height=\"114\" src=\"" + $("#f_sel option:eq(" + $(ths).index() +")").attr("data-image") + "\" />")
			});
		});
		$("#f_sel-button .ui-selectmenu-text").html($("h1").text().replace(/Шрифт /g, ''));
		$(".list_search input").focus();
	});

	$("body").on("click", "#f_sel-menu .ui-menu-item", function() {
		$("body").fadeOut(200);
		var furl = $("#f_sel option:eq(" + $(this).index() +")").attr("data-image").replace(/fonts/g, '').replace(/.png/g, '.html#test');
		location.href = furl;
		return false;
	});


	function getSelect() {
		$("#f_sel-menu").parent().css({
			"border-top" : "2px solid #d8d8d8",
			"max-width" : "1000px",
			"width" : $(document).width(),
			"background-color" : "#fff"
		});
		$("#f_sel-menu").css({
			"background-color" : "#fff",
			"max-width" : "1000px",
			"width" : $(document).width(),
		});
	};
	getSelect();
	$(window).resize(function() {
		getSelect();
	});
	$("#f_sel-menu").before("<div class='list_search'><input type='text' placeholder='Быстрый поиск...' /></div>");

	if($(".img_cont img").length) {
		$(".img_cont img").lazyload();
	};
	$(".back").fancybox();

	$(".list_types").each(function() {
		var str = $(this).html();
		$(this).html(str.substring(0, str.length - 2));
	});
	if($(".font_type").length) {
		$(".font_type").html($(".font_type").html().substring(0, $(".font_type").html().length - 2));
	};

	$("span.download").click(function() {
		location.href = "/fonts/" + $(this).parent().next().html().replace(/\s+/g, '') + ".zip";
		return false;
	});

	$("#callback").submit(function() {
		if($("#callback input[name=fname]").val() == "" && $("#callback input[name=furl]").val() == "" && $("#callback textarea[name=fcom]").val() == "") {
			alert("Заполните хотя-бы одно из полей формы");
			return false;
		} else {
			$.ajax({
				type: "GET",
				url: "mail.php",
				data: $("#callback").serialize()
			}).done(function() {
				alert("Данные отправлены. \nСпасибо за помощь проекту!");
				setTimeout(function() {
					$.fancybox.close();
				}, 200);
			});
			return false;
		};
	});

	$(".search input[type=text]").keyup(function () {
		$(".tags li").removeClass("active");
		$(".tags").slideUp();
		$(".s_search .button.red").removeClass("active");
		var down = $(".search input[type=text]").val().toLowerCase().replace(/\s+/g, '');
		if (down === "") {
			$(".list_item").show();
		} else {
			$(".list_item").hide().filter(function () {
				return $(this).text().toLowerCase().replace(/\s+/g, '').indexOf(down) >= 0;
			}).show();
		};
		$(".img_cont img").lazyload();
		mode.animate({scrollTop: 185}, 400);
		countFonts();
		$(".count_fonts").attr("title", "Количество найденных шрифтов")
	});

	function countFonts() {
		var c = $(".list_item:visible").length;
		$(".count_fonts").html("(" + c + ")");
	};
	countFonts();

	$(".list_search input").keyup(function () {
		var down = $(".list_search input").val().toLowerCase().replace(/\s+/g, '');
		if (down === "") {
			$("#f_sel-menu li").show();
		} else {
			$("#f_sel-menu li").hide().filter(function () {
				return $(this).text().toLowerCase().replace(/\s+/g, '').indexOf(down) >= 0;
			}).show();
		};
	});

	$("form.search button").click(function() {
		return false;
	});

	$(window).scroll(function() {
		var off = $("header").height() + $(".s_search").height() + 68;
		var top = $(document).scrollTop();
		if (top > 265) {
			$(".tags").addClass("fixed");
			$(".tags:visible").parent().addClass("list_top");
		} else {
			$(".tags").removeClass("fixed");
			$(".tags:visible").parent().removeClass("list_top");
		}
	});

	var sec = 10
	var timer = setInterval(function() { 
		$(".counter strong").text(sec--);
		if (sec == -1) {
			$(".counter, .down_page .container p").hide();
			$(".container a").fadeIn();
			clearInterval(timer);
		} 
	}, 1000);

	$(".down_page article").css({
		"min-height" : $(window).height() - 300
	});

});