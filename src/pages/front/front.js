$(function () {
	$(window).scrollTop(0);
	setTimeout(function () {
		$(window).scrollTop(0);
		$("h1").addClass("_animate");
	}, 300);
	var $cursor = $(".top__mouse");

	function limitNumberWithinRange(num, min, max) {
		const MIN = min || 1;
		const MAX = max || 20;
		const parsed = parseInt(num);
		return Math.min(Math.max(parsed, MIN), MAX);
	}

	function moveCursorTop(e) {
		console.log("sss");
		$cursor.addClass("is-moving");

		$cursor.css({
			left: e.pageX + 10,
			top: e.pageY + 10,
		});
		// gsap.to($cursor, 0.01, {
		// 	left: e.pageX + 10,
		// 	top: e.pageY + 10,
		// 	ease: Power4.easOut,
		// });
	}
	$("#top").on("mousemove", moveCursorTop);

	if ($(".page.page-front").length) {
		var $cursorWh = $(".about-wh__mouse");
		var $wh = $(".about-wh__mouse");
		var whTop = $("#about-wh").offset().top;
		var whLeft = $("#about-wh").offset().left;
		function moveCursorWh(e) {
			$cursorWh.css({
				left: e.pageX - whLeft + 10,
				top: e.pageY - whTop - 20,
			});
			// gsap.to($cursor, 0.01, {
			// 	left: e.pageX + 10,
			// 	top: e.pageY + 10,
			// 	ease: Power4.easOut,
			// });
		}
		$("#about-wh").on("mousemove", moveCursorWh);
		// $("#about-wh").click(function () {
		// 	$(".about-wh__link").trigger("click");
		// });
		setTimeout(function () {
			let $menuLinks = $(".header__menu a");
			function changeScroll(step = 0, href = 0) {
				// if (step) {
				// 	$("#fix-cicrle").attr("data-step", step);
				// }
				if (href) {
					$menuLinks.removeClass("_active");
					$("[href='#" + href + "']").addClass("_active");
				}
			}
			let box = document.querySelectorAll(".observer");
			observer = new IntersectionObserver((entries) => {
				let step = 0;
				let href = 0;
				entries.forEach((entry) => {
					if (entry.intersectionRatio > 0) {
						if (entry.target.dataset.step) {
							step = entry.target.dataset.step;
						}
						if (entry.target.attributes.id) {
							href = entry.target.getAttribute("id");
						}
					}
				});
				changeScroll(step, href);
			});
			box.forEach((item) => {
				observer.observe(item);
			});
			var controller = new ScrollMagic.Controller();

			var scene = new ScrollMagic.Scene({
				triggerElement: "#top",
				offset: window.innerHeight / 2,
				duration: window.innerHeight,
			})
				// animate color and top border in relation to scroll position
				.setTween(".fix-cicrle-wrap", {
					top: 0,
				}) // the tween durtion can be omitted and defaults to 1
				.addTo(controller);

			let top;
			let about;
			let solutions;
			let freeConsultation;
			let circleWrapHeight;
			function resize(solutionss = 0) {
				console.log("");
				let fch = $("#free-consultation").innerHeight();
				top = $("#top").innerHeight();
				about = $("#about").innerHeight();
				wh = $("#about-wh").innerHeight();
				solutions = $("#solutions").innerHeight();
				complex = $("#complex").innerHeight();
				complex = $("#complex").innerHeight();
				freeConsultationOffset =
					(fch - $("#fix-cicrle").width()) / 2 +
					$("#fix-cicrle").width() / 2;
				console.log(freeConsultationOffset);
				freeConsultation = fch + 350;
				if (solutionss) solutionss.refresh();
				circleWrapHeight =
					$("#free-consultation").offset().top +
					fch -
					(fch / 2 - $("#fix-cicrle").width() / 2);
				$("#fix-cicrle").css({
					height: circleWrapHeight,
					// right: $("h1").offset().left,
				});
				// console.log(solutions, solutionss);
			}
			resize();
			new ScrollMagic.Scene({
				triggerElement: "#top",
				duration: top,
			})
				// .addIndicators({ name: "top" })
				.on("enter ", function () {
					resize();
					$(".fix-cicrle").attr("data-step", 1);
				})
				.addTo(controller);
			new ScrollMagic.Scene({
				triggerElement: "#about-wh",
				duration: $("#about-wh").height(),
			})
				// .addIndicators({ name: "#about-wh" })
				.on("enter ", function () {
					resize();
					$("#about-wh").addClass("_anim");
				})
				.addTo(controller);

			new ScrollMagic.Scene({
				triggerElement: "#about",
				duration: about,
				offset: 0,
			})
				// .addIndicators({ name: "about" })
				.on("enter ", function () {
					resize();
					$(".fix-cicrle").attr("data-step", 2);
				})
				.addTo(controller);

			new ScrollMagic.Scene({
				triggerElement: "#complex",
				duration: complex,
			})
				// .addIndicators({ name: "complex" })
				.on("enter ", function () {
					$(".complex").addClass("_visible");
				})
				.addTo(controller);
			// new ScrollMagic.Scene({
			// 	triggerElement: "#free-consultation",
			// 	duration: 3000,
			// 	offset: freeConsultationOffset,
			// })
			// 	// .addIndicators({ name: "why" })
			// 	.on("enter ", function () {
			// 		$(".fix-cicrle").attr("data-step", 10);
			// 	})
			// 	.addTo(controller);
			new ScrollMagic.Scene({
				triggerElement: "#free-consultation",
				duration: freeConsultationOffset,
			})
				// .addIndicators({ name: "why 2" })
				.on("enter ", function () {
					$(".fix-cicrle").attr("data-step", 4);
				})
				.addTo(controller);

			var solutionsscene = new ScrollMagic.Scene({
				triggerElement: "#solutions",
				duration: solutions,
				offset: 0,
			})
				// .addIndicators({ name: "solutions " + solutions })
				.on("enter ", function () {
					resize();
					$(".fix-cicrle").attr("data-step", 3);
				})
				.addTo(controller);

			var solutionssceneAnim = new ScrollMagic.Scene({
				triggerElement: "#solutions",
				duration: solutions - 500,
				offset: 250,
			})
				// .addIndicators({ name: "solutions animate" })
				.setClassToggle(".fix-circle-3", "_animate")
				.addTo(controller);

			new ScrollMagic.Scene({
				triggerElement: "#free-consultation",
				duration: freeConsultation,
				offset: 0,
			})
				// .addIndicators({ name: "free-consultation" })
				.on("enter ", function () {
					resize();
					$(".fix-cicrle").attr("data-step", 4);
				})
				.addTo(controller);

			new ScrollMagic.Scene({
				triggerElement: "#about-wh",
				duration: wh,
				offset: 0,
			})
				// .addIndicators({ name: "about-wh" })
				.setTween(".about-wh__text-front", {
					height: 500,
				})
				.addTo(controller);

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
					1030: {
						slidesPerView: 3,
						spaceBetween: 23,
					},
				},

				navigation: {
					nextEl: document.querySelector(".why__nav-next"),
					prevEl: document.querySelector(".why__nav-prev"),
				},
			});
			setInterval(function () {
				resize(solutionsscene);
			}, 1000);
		}, 500);
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
			setTimeout(function () {
				resize();
			}, 600);
			resize();
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
			setTimeout(function () {
				resize();
				console.log("22");
			}, 600);
			resize();
			$(".solution").each(function () {
				if (filters.indexOf($(this).data("filter")) != -1) {
					$(this).slideDown();
				} else {
					$(this).slideUp(function () {});
				}
			});
		});
	}
});
