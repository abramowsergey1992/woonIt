$(function () {
	AOS.init();

	document.addEventListener("aos:in", ({ detail }) => {
		console.log("animated in", detail);
	});
	$("._mask-phone").each(function () {
		Inputmask("+7 (999) 999-99-99").mask(this);
	});
	$("._mask-date").each(function () {
		Inputmask("99.99.9999").mask(this);
	});
	$("._mask-int").each(function () {
		Inputmask("9{1,10}").mask(this);
	});
	if ($("#popup-feedback-form").length) {
		let validContacnt = $("#popup-feedback-form").validate({
			errorPlacement: function (error, element) {},
			submitHandler: function (form) {
				$(".feedback-popup__sbmt").attr("disabled", "disabled");
				$.ajax({
					url: $(form).attr("action"),
					data: $(form).serialize(),
					method: "POST",
					headers: {
						"X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
							"content"
						),
					},
					context: document.body,
					success: function () {
						$(".feedback-popup").attr("data-state", "success");
						$(".feedback-popup__sbmt").removeAttr("disabled");
					},
					error: function () {
						$(".feedback-popup").attr("data-state", "error");
						$(".feedback-popup__sbmt").removeAttr("disabled");
					},
				});
			},
		});
	}
	if ($("#feedback-form").length) {
		let validFeedback = $("#feedback-form").validate({
			errorPlacement: function (error, element) {},
			submitHandler: function (form) {
				$(".feedbackb__form-btn").attr("disabled", "disabled");
				$.ajax({
					url: $(form).attr("action"),
					data: $(form).serialize(),
					method: "POST",
					headers: {
						"X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
							"content"
						),
					},
					context: document.body,
					success: function () {
						let popup = $("#feedback");
						popup.find("input").val("");
						popup.addClass("_display");
						setTimeout(function () {
							popup.addClass("_animate");
						}, 500);
						$(".feedback-popup").attr("data-state", "success");
						$(".feedbackb__form-btn").removeAttr("disabled");
					},
					error: function () {
						let popup = $("#feedback");
						popup.find("input").val("");
						popup.addClass("_display");
						setTimeout(function () {
							popup.addClass("_animate");
						}, 500);
						$(".feedback-popup").attr("data-state", "error");
						$("feedbackb__form-btn").removeAttr("disabled");
					},
				});
			},
		});
	}
});
