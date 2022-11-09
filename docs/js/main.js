$(function(){})
$(function () {
	const mediaQuery = window.matchMedia("(max-width: 992px)");
	$(".solution__title").click(function () {
		if (mediaQuery.matches) {
			let solution = $(this).closest(".solution");
			solution.toggleClass("_open");
			solution.find("table").slideToggle();
		}
	});
	$(".solutions__category-btn").click(function () {
		$(this).toggleClass("_open");
		$(".solutions__categories").slideToggle();
	});
	$(".solution").each(function () {
		if (!$(this).hasClass("_default-view")) {
			$(this).css("display", "none");
		}
	});
	$(".solutions__search").keyup(function () {
		let val = $(this).val().toUpperCase();
		let $wrap = $(".solutions__search-view .solution");
		let i = 0;
		$wrap.html("");
		$(".solutions__row .solution").each(function () {
			let str =
				$(this).find(".solution__title").text().toUpperCase() +
				$(this).find("tbody").text().toUpperCase();
			if (str.indexOf(val) >= 0) {
				$wrap.append(
					`<div class="solution-block">${$(this).html()}</div>`
				);
				i++;
			}
		});
		console.log(i);
		if (i == 0) {
			console.log(3234);
			$wrap.append(
				`<table><thead><tr><th class="_border">Ничего не найденно</th></tr></thead></table>`
			);
		}
		if (val != 0) {
			$(".solutions__search-view").slideDown();
			$(".solutions__catygory-view").slideUp();
		} else {
			$(".solutions__search-view").slideUp();
			$(".solutions__catygory-view").slideDown();
		}
	});
	$(".solutions__more").click(function () {
		$(".solutions__category").removeClass("_active");
		$(".solutions__category-btn").removeClass("_open");
		if (!$(this).hasClass("_hidden-items")) {
			$(".solution").each(function () {
				$(this).slideDown();
			});
			$(this).addClass("_hidden-items");
		} else {
			$(this).removeClass("_hidden-items");
			$(".solution").each(function () {
				if (!$(this).hasClass("_default-view")) {
					$(this).slideUp();
				} else {
					$(this).slideDown();
				}
			});
		}
	});
	$(".solutions__category").click(function () {
		$(".solutions__search-view").slideUp();
		$(".solutions__catygory-view").slideDown();
		$(this).toggleClass("_active");
		let filters = [];
		$(".solutions__category._active").each(function () {
			filters.push($(this).data("filter"));
		});
		console.log(filters);

		$(".solution").each(function () {
			if (filters.indexOf($(this).data("filter")) != -1) {
				$(this).slideDown();
			} else {
				$(this).slideUp();
			}
		});
	});
});

$(function () {
	$("._mask-phone").each(function () {
		Inputmask("+7 (999) 999-99-99").mask(this);
	});
	$("._mask-date").each(function () {
		Inputmask("99.99.9999").mask(this);
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
});

$(function () {
	$(".header__mob-menu").click(function () {
		$(".header-mob").fadeIn();
	});
	$(".header__mob-menu-close").click(function () {
		$(".header-mob").fadeOut();
	});
	scroll = 0;
	let $menuLinks = $(".header__menu a");
	let $circle = $("#fix-cicrle");
	let $circle3 = $(".fix-circle-3");
	let $top = $("#top");
	let $about = $("#about");
	let $solutions = $("#solutions");
	let $freeConsultation = $("#free-consultation");
	let $complex = $("#complex");
	let $why = $("#why");
	let $award = $("#awards");
	let $header = $(".header");
	$(window).scroll(function () {
		if ($(this).scrollTop() <= 300) {
			$header.addClass("_nt");
		} else {
			$header.removeClass("_nt");
		}
		if ($(this).scrollTop() >= 200) {
			$header.addClass("_fixed");
		} else {
			$header.removeClass("_fixed");
		}
		if (scroll > $(this).scrollTop() && $(this).scrollTop() > 300) {
			$header.addClass("_fixed-visible");
		} else {
			$header.removeClass("_fixed-visible");
		}
		scroll = $(this).scrollTop();
		let link = "";

		let st = window.innerHeight + scroll;
		// console.log(st, " <=", $top.offset().top + window.innerHeight + 200);
		if (scroll <= $top.offset().top + window.innerHeight + 400) {
			$circle.attr("data-position", "bottom");
			$circle.attr("data-step", 1);
			console.log("step-1");
		}

		if (st >= $award.offset().top) {
			link = "awards";
		} else if (st >= $why.offset().top) {
			link = "why";

			if (st >= $why.offset().top + window.innerHeight / 2 + 220) {
				console.log("step-10");
				$circle.attr("data-step", 10);
			}
		}
		// console.log(st, " >=", $solutions.offset().top - 0);
		else if (st >= $freeConsultation.offset().top + 300) {
			console.log("step-4");
			$circle.attr("data-step", 4);
		} // console.log(st, " >=", $solutions.offset().top - 0);
		else if (st >= $solutions.offset().top - 0) {
			console.log("step-3");
			$circle.attr("data-step", 3);
			link = "solutions";

			// console.log(st, " >=", $solutions.offset().top + 500);
			// console.log(
			// 	st,
			// 	" <=",
			// 	$solutions.offset().top + $solutions.height() - 500
			// );
			if (
				st >= $solutions.offset().top + 500 &&
				st <= $solutions.offset().top + $solutions.height()
			) {
				$circle3.addClass("_animate");
			} else {
				$circle3.removeClass("_animate");
			}
		} // console.log(st, " >=", $about.offset().top + 400);
		else if (st >= $about.offset().top + 400) {
			$circle.attr("data-position", "center");
			$circle.attr("data-step", 2);
			console.log("step-2");
			link = "about";
		}
		$menuLinks.removeClass("_active");
		console.log(link);
		$("[href='#" + link + "']").addClass("_active");
	});
});

$(function(){})
$(function () {
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
	setTimeout(function () {
		// let smoother = ScrollSmoother.create({
		// 	smooth: 1,
		// 	effects: true,
		// 	onUpdate: function () {
		// 		if (this.scrollY >= 50) {
		// 			header.classList.add("_scroll");
		// 		} else {
		// 			header.classList.remove("_scroll");
		// 		}
		// 	},
		// });

		var controller = new ScrollMagic.Controller();

		// new ScrollMagic.Scene({
		// 	triggerElement: ".top",
		// 	duration: window.innerHeight + 200,
		// })
		// 	// .addIndicators({ name: "1 (duration: 300)" })
		// 	.on("enter ", function () {
		// 		$(".fix-cicrle").attr("data-position", "bottom");
		// 		$(".fix-cicrle").attr("data-step", 1);
		// 	})
		// 	.on("leave ", function () {
		// 		$(".fix-cicrle").attr("data-position", "center");
		// 	})
		// 	// .addIndicators()
		// 	.addTo(controller);

		// new ScrollMagic.Scene({
		// 	triggerElement: ".about",
		// 	duration: $(".about").innerHeight(),
		// })
		// 	// .addIndicators({ name: "1 (duration: 300)" })
		// 	.on("enter ", function () {
		// 		$(".fix-cicrle").attr("data-step", 2);
		// 	})
		// 	.addTo(controller);

		// new ScrollMagic.Scene({
		// 	triggerElement: ".about-wh",
		// 	offset: "400",
		// 	duration: $(".about-wh").innerHeight() - 400,
		// })
		// 	// .addIndicators({ name: "1 (duration: 300)" })
		// 	.on("enter ", function () {
		// 		$(".fix-cicrle").attr("data-step", 3);
		// 	})
		// 	.addTo(controller);
		// new ScrollMagic.Scene({
		// 	triggerElement: ".free-consultation",
		// 	duration: $(".free-consultation").innerHeight() + 300,
		// })
		// 	// .addIndicators({ name: "1 (2222: 300)" })
		// 	.on("enter ", function () {
		// 		$(".fix-cicrle").attr("data-step", 4);
		// 	})
		// 	.addTo(controller);

		new ScrollMagic.Scene({
			triggerElement: ".why-slider-back",
			duration: 10,
			offset: -240,
		})
			// .addIndicators({ name: "1 (xxx:x300)" })
			.on("enter ", function () {
				$(".fix-cicrle").attr("data-step", 10);
			})
			.addTo(controller);

		ScrollTrigger.create({
			trigger: ".complex",
			start: "top center",
			onEnter: ({ progress, direction, isActive }) =>
				$(".complex").addClass("_visible"),
		});

		// new ScrollMagic.Scene({
		// 	triggerElement: ".solutions",
		// 	duration: $(".solutions").innerHeight() - 300,
		// })
		// 	.setClassToggle(".fix-circle-3", "_animate") // add class toggle
		// 	.addIndicators() // add indicators (requires plugin)
		// 	.addTo(controller);

		// new ScrollMagic.Scene({
		// 	triggerElement: ".solutions",
		// 	duration: "100%",
		// })
		// 	.addIndicators({
		// 		name: "!!!! (" + $(".solutions").innerHeight() + ")",
		// 	})
		// 	.on("enter ", function () {
		// 		$(".fix-cicrle").attr("data-step", 3);
		// 	})
		// 	.addTo(controller);

		// ScrollTrigger.create({
		// 	trigger: ".solutions",
		// 	start: "top  center",
		// 	end: "bottom  center",
		// 	markers: true,
		// 	onEnter: function () {
		// 		$(".fix-cicrle").attr("data-step", 3);
		// 	},
		// 	onExit: function () {},
		// });
		// ScrollTrigger.create({
		// 	trigger: ".top",
		// 	start:
		// 		window.innerHeight / 2 -
		// 		200 +
		// 		"px " +
		// 		(window.innerHeight / 2 + 200) +
		// 		"px",
		// 	end: window.innerHeight + "px " + (window.innerHeight / 2 + 200) + "px",
		// 	markers: true,
		// 	onEnter: function () {
		// 		console.log("enter");
		// 		$(".fix-cicrle").attr("data-position", "bottom");
		// 		$(".fix-cicrle").attr("data-step", 1);
		// 	},
		// 	onExit: function () {
		// 		console.log("exit");
		// 	},
		// });
		// ScrollTrigger.create({
		// 	trigger: ".about",
		// 	start: "top " + (window.innerHeight / 2 - 200) + "px",
		// 	// markers: true,
		// 	onEnter: function () {
		// 		$(".fix-cicrle").attr("data-position", "center");
		// 		$(".fix-cicrle").attr("data-step", 2);
		// 	},
		// 	onExit: function () {},
		// });
		// let st = ScrollTrigger.create({
		// 	trigger: ".page",
		// 	pin: ".fix-cicrle",
		// 	start: "top center",
		// 	end: "bottom+=100vh bottom",
		// 	pinType: "fixed",
		// 	markers: true,
		// });
		gsap.to(".about-wh__text-front", {
			scrollTrigger: {
				trigger: ".about-wh__text-front",
				start: "top center",
				end: "top 100px",
				scrub: true,
				// markers: true,
			},
			height: 600,
		});

		const why = new Swiper(".why-slider", {
			slidesPerView: 1.2,
			spaceBetween: 10,

			breakpoints: {
				480: {
					slidesPerView: 1.5,
					spaceBetween: 10,
				},
				640: {
					slidesPerView: 2,
					spaceBetween: 23,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 23,
				},
			},

			navigation: {
				nextEl: document.querySelector(".why__nav-next"),
				prevEl: document.querySelector(".why__nav-prev"),
			},
		});
	}, 300);
});

$(function () {
	$(".popup__close,.popup__overlay").click(function () {
		let popup = $(this).closest(".popup");
		popup.removeClass("_animate");
		setTimeout(function () {
			popup.removeClass("_display");
		}, 500);
	});
	$("[data-popup]").click(function () {
		let popup = $($(this).data("popup"));
		popup.attr("data-state", "");
		popup.find("input").val("");
		popup.addClass("_display");
		setTimeout(function () {
			popup.addClass("_animate");
		}, 500);
	});
});

$(function(){})