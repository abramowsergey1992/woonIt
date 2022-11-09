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
