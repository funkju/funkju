(function($) {


	$(document).ready(function(){
		$(window).resize(resizeEditor);
		resizeEditor();
		updateNextPrevButtons();

		$("#template_holder .next").click(nextPanel);
		$("#template_holder .prev").click(prevPanel);
	});


	var resizeEditor = function(){
		$("#template_sidebar").css("height",$(window).height());
		$("#template_editor").css("width",$(window).width()-$("#template_sidebar").width());
		$("#template_editor").css("height",$(window).height());
		
		$("#template_holder .panel").css("height", $(window).height()-50);
		

		if($("#template_editor").is(".template_type_1")){
			$("#template_holder .panel1").css("width", ($(window).height()-50)*Drupal.settings.template[1].ratio_outside);
			$("#template_holder .panel2").css("width", ($(window).height()-50)*Drupal.settings.template[1].ratio_outside);

		} else if($("#template_editor").is(".template_type_2")) {
			$("#template_holder .panel1").css("width", ($(window).height()-50)*Drupal.settings.template[2].ratio_outside);
			$("#template_holder .panel2").css("width", ($(window).height()-50)*Drupal.settings.template[2].ratio_inside);
			$("#template_holder .panel3").css("width", ($(window).height()-50)*Drupal.settings.template[2].ratio_outside);

		} else if($("#template_editor").is(".template_type_3")) {
			$("#template_holder .panel1").css("width", ($(window).height()-50)*Drupal.settings.template[3].ratio_outside);
			$("#template_holder .panel2").css("width", (($(window).height()-50)*Drupal.settings.template[3].ratio_outside)*2);
			$("#template_holder .panel3").css("width", ($(window).height()-50)*Drupal.settings.template[3].ratio_inside);
			$("#template_holder .panel4").css("width", ($(window).height()-50)*Drupal.settings.template[3].ratio_outside);
		}
	};

	var updateNextPrevButtons = function(){
		if($("#template_editor").is(".template_type_1")){
			var panels = Drupal.settings.template[1].panels;
		} else if($("#template_editor").is(".template_type_2")) {
			var panels = Drupal.settings.template[2].panels;
		} else if($("#template_editor").is(".template_type_3")) {
			var panels = Drupal.settings.template[3].panels;
		}

		if($("#template_holder .panel.active").is('.panel1')){
			if(panels.panel1.prev) $("#template_holder .prev").html(panels.panel1.prev).show();
			else $("#template_holder .prev").hide();
			if(panels.panel1.next) $("#template_holder .next").html(panels.panel1.next).show();
			else $("#template_holder .next").hide();
		} else if($("#template_holder .panel.active").is('.panel2')){
			if(panels.panel2.prev) $("#template_holder .prev").html(panels.panel2.prev).show();
			else $("#template_holder .prev").hide();
			if(panels.panel2.next) $("#template_holder .next").html(panels.panel2.next).show();
			else $("#template_holder .next").hide();
		} else if($("#template_holder .panel.active").is('.panel3')){
			if(panels.panel3.prev) $("#template_holder .prev").html(panels.panel3.prev).show();
			else $("#template_holder .prev").hide();
			if(panels.panel3.next) $("#template_holder .next").html(panels.panel3.next).show();
			else $("#template_holder .next").hide();
		} else if($("#template_holder .panel.active").is('.panel4')){
			if(panels.panel4.prev) $("#template_holder .prev").html(panels.panel4.prev).show();
			else $("#template_holder .prev").hide();
			if(panels.panel4.next) $("#template_holder .next").html(panels.panel4.next).show();
			else $("#template_holder .next").hide();
		}
	};


	var nextPanel = function(){
		if($(".panel.active").next().length && !$(".panel.active").next().is(".next")){
			$(".panel.active").hide();
			$(".panel.active").removeClass("active").next().addClass("active").show();
		}
		updateNextPrevButtons();
	}
	var prevPanel = function(){
		if($(".panel.active").prev().length && !$(".panel.active").prev().is(".prev")){
			$(".panel.active").hide();
			$(".panel.active").removeClass("active").prev().addClass("active").show();
		}
		updateNextPrevButtons();
	}





})(jQuery)
