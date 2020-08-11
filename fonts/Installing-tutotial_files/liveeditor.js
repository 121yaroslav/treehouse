$(document).ready(function() {
	$("#idpre").click(function() {
		demoUpdate();
	});
	$("#gar_sel-menu, #fz_sel-menu, #nu_sel-menu").click(function() {
		demoUpdate();
	});
	function demoUpdate() {
		$("#idpre").addClass("active");
		$("iframe").slideDown();
		var editor = ace.edit("idpre");
		editor.session.setMode("ace/mode/html");
		var editor_html = ace.edit("idpre");
		editor_html.focus();
		editor_html.setTheme("ace/theme/monokai");
		editor_html.setOption("enableEmmet", true);
		editor_html.session.setMode("ace/mode/html");
		editor_html.session.setUseSoftTabs(false);
		editor_html.session.setUseWrapMode(true);
		editor_html.setFontSize(16);
		$('.output').contents().find('.body').html(editor_html.getSession().getValue());
		$('.output').contents().find('.styles style').html($(".fontcode").text());
		$('.output').contents().find('.stylefont style').html(".body{font-family:" + $("input[name=hidden]").val() + $("#gar_sel").val() + ";font-size: " + $("#fz_sel").val() + "px;text-transform: " + $("#nu_sel").val() + ";}");
		$("body").on("keyup", "#idpre", function() {
			var code = editor_html.getSession().getValue();
			$('.output').contents().find('.body').html(code);
		});
		function pullHtml() {
			var $el_html = $("#idpre .ace_text-input"),
			txt = $(".input_html").html(),
			txtLen = txt.length,
			timeOut,
			char = 0;
			var editor_html = ace.edit("idpre");
			editor_html.focus();
			(function typeIt() {
				var humanize = Math.round(Math.random() * (200 - 30)) + 30;
				timeOut = setTimeout(function() {
					char++;
					var type = txt.substring(0, char);
					$el_html.html(type);
					typeIt();
					editor_html.setValue($("#idpre .ace_text-input").text());
					var code = editor_html.getSession().getValue();
					$('.output').contents().find('.body').html(code);
					$('.output').contents().find('.styles style').html($(".fontcode").text());
					$('.output').contents().find('.stylefont style').html("body{font-family:" + $("input[name=hidden]").val() + "Regular;font-size:16px;}");
					editor_html.session.selection.clearSelection();
					if (char == txtLen) {
						clearTimeout(timeOut);
						pullCSS();
					}
				}, humanize);
			}());
		};
	};
});