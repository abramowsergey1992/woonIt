$(function () {
	// let $menuLinks = $(".header__menu a");
	// function changeScroll(step = 0, href = 0) {
	// 	// if (step) {
	// 	// 	$("#fix-cicrle").attr("data-step", step);
	// 	// }
	// 	if (href) {
	// 		$menuLinks.removeClass("_active");
	// 		$("[href='#" + href + "']").addClass("_active");
	// 	}
	// }
	// let box = document.querySelectorAll(".observer");
	// observer = new IntersectionObserver((entries) => {
	// 	let step = 0;
	// 	let href = 0;
	// 	entries.forEach((entry) => {
	// 		if (entry.intersectionRatio > 0) {
	// 			if (entry.target.dataset.step) {
	// 				step = entry.target.dataset.step;
	// 			}
	// 			if (entry.target.attributes.id) {
	// 				href = entry.target.getAttribute("id");
	// 			}
	// 		}
	// 	});
	// 	changeScroll(step, href);
	// });
	// box.forEach((item) => {
	// 	observer.observe(item);
	// });
	// var controller = new ScrollMagic.Controller();
	// var scene = new ScrollMagic.Scene({
	// 	triggerElement: "#top",
	// 	offset: window.innerHeight / 2,
	// 	duration: window.innerHeight,
	// })
	// 	// animate color and top border in relation to scroll position
	// 	.setTween("#fix-cicrle-wrap", {
	// 		top: 0,
	// 	}) // the tween durtion can be omitted and defaults to 1
	// 	.addTo(controller);
	// let top;
	// function resize() {
	// 	top = $("#top").innerHeight();
	// 	about = $("#about").innerHeight();
	// 	solutions = $("#solutions").innerHeight();
	// 	freeConsultation = $("#free-consultation").innerHeight();
	// }
	// resize();
	// new ScrollMagic.Scene({
	// 	triggerElement: "#top",
	// 	duration: top,
	// })
	// 	.addIndicators({ name: "top" })
	// 	.on("enter ", function () {
	// 		$(".fix-cicrle").attr("data-step", 1);
	// 	})
	// 	.addTo(controller);
	// new ScrollMagic.Scene({
	// 	triggerElement: "#about",
	// 	duration: about,
	// 	offset: 0,
	// })
	// 	.addIndicators({ name: "about" })
	// 	.on("enter ", function () {
	// 		$(".fix-cicrle").attr("data-step", 2);
	// 	})
	// 	.addTo(controller);
	// new ScrollMagic.Scene({
	// 	triggerElement: "#solutions",
	// 	duration: solutions,
	// 	offset: 0,
	// })
	// 	.addIndicators({ name: "solutions" })
	// 	.on("enter ", function () {
	// 		$(".fix-cicrle").attr("data-step", 3);
	// 	})
	// 	.addTo(controller);
	// new ScrollMagic.Scene({
	// 	triggerElement: "#free-consultation",
	// 	duration: freeConsultation,
	// 	offset: 0,
	// })
	// 	.addIndicators({ name: "free-consultation" })
	// 	.on("enter ", function () {
	// 		$(".fix-cicrle").attr("data-step", 4);
	// 	})
	// 	.addTo(controller);
	// ScrollTrigger.create({
	// 	trigger: ".complex",
	// 	start: "top center",
	// 	onEnter: ({ progress, direction, isActive }) =>
	// 		$(".complex").addClass("_visible"),
	// });
	// gsap.to(".about-wh__text-front", {
	// 	scrollTrigger: {
	// 		trigger: ".about-wh__text-front",
	// 		start: "top center",
	// 		end: "top 100px",
	// 		scrub: true,
	// 		// markers: true,
	// 	},
	// 	height: 600,
	// });
	// setTimeout(function () {
	// 	let smoother = ScrollSmoother.create({
	// 		smooth: 1,
	// 		effects: true,
	// 		onUpdate: function () {
	// 			if (this.scrollY >= 50) {
	// 				header.classList.add("_scroll");
	// 			} else {
	// 				header.classList.remove("_scroll");
	// 			}
	// 		},
	// 	});
	// 	new ScrollMagic.Scene({
	// 		triggerElement: ".top",
	// 		duration: window.innerHeight + 200,
	// 	})
	// 		// .addIndicators({ name: "1 (duration: 300)" })
	// 		.on("enter ", function () {
	// 			$(".fix-cicrle").attr("data-position", "bottom");
	// 			$(".fix-cicrle").attr("data-step", 1);
	// 		})
	// 		.on("leave ", function () {
	// 			$(".fix-cicrle").attr("data-position", "center");
	// 		})
	// 		// .addIndicators()
	// 		.addTo(controller);
	// 	new ScrollMagic.Scene({
	// 		triggerElement: ".about",
	// 		duration: $(".about").innerHeight(),
	// 	})
	// 		// .addIndicators({ name: "1 (duration: 300)" })
	// 		.on("enter ", function () {
	// 			$(".fix-cicrle").attr("data-step", 2);
	// 		})
	// 		.addTo(controller);
	// 	new ScrollMagic.Scene({
	// 		triggerElement: ".about-wh",
	// 		offset: "400",
	// 		duration: $(".about-wh").innerHeight() - 400,
	// 	})
	// 		// .addIndicators({ name: "1 (duration: 300)" })
	// 		.on("enter ", function () {
	// 			$(".fix-cicrle").attr("data-step", 3);
	// 		})
	// 		.addTo(controller);
	// 	new ScrollMagic.Scene({
	// 		triggerElement: ".free-consultation",
	// 		duration: $(".free-consultation").innerHeight() + 300,
	// 	})
	// 		// .addIndicators({ name: "1 (2222: 300)" })
	// 		.on("enter ", function () {
	// 			$(".fix-cicrle").attr("data-step", 4);
	// 		})
	// 		.addTo(controller);
	// 	new ScrollMagic.Scene({
	// 		triggerElement: ".solutions",
	// 		duration: $(".solutions").innerHeight() - 300,
	// 	})
	// 		.setClassToggle(".fix-circle-3", "_animate") // add class toggle
	// 		.addIndicators() // add indicators (requires plugin)
	// 		.addTo(controller);
	// 	new ScrollMagic.Scene({
	// 		triggerElement: ".solutions",
	// 		duration: "100%",
	// 	})
	// 		.addIndicators({
	// 			name: "!!!! (" + $(".solutions").innerHeight() + ")",
	// 		})
	// 		.on("enter ", function () {
	// 			$(".fix-cicrle").attr("data-step", 3);
	// 		})
	// 		.addTo(controller);
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
	// 	let st = ScrollTrigger.create({
	// 		trigger: ".page",
	// 		pin: ".fix-cicrle",
	// 		start: "top center",
	// 		end: "bottom+=100vh bottom",
	// 		pinType: "fixed",
	// 		markers: true,
	// 	});
	// }, 300);
});
