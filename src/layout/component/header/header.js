$(function () {
	$(".header__mob-menu").click(function () {
		$(".header-mob").fadeIn();
	});
	$(".header__mob-menu-close").click(function () {
		$(".header-mob").fadeOut();
	});
	scroll = 0;
	let actualstep = 1;
	let headerTop = true;

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
		if ($(this).scrollTop() >= 200 && headerTop) {
			headerTop = false;
			$header.addClass("_fill");
		} else if ($(this).scrollTop() <= 200 && !headerTop) {
			headerTop = true;
			$header.removeClass("_fill");
		}

		// scroll = $(this).scrollTop();
		// let link = "";

		// let st = window.innerHeight + scroll;
		// // console.log(st, " <=", $top.offset().top + window.innerHeight + 200);
		// if (
		// 	actualstep != 1 &&
		// 	scroll <= $top.offset().top + window.innerHeight + 400
		// ) {
		// 	$circle.attr("data-position", "bottom");
		// 	$circle.attr("data-step", 1);
		// 	actualstep = 1;
		// 	console.log("step-1");
		// }

		// if (st >= $award.offset().top) {
		// 	link = "awards";
		// } else if (st >= $why.offset().top) {
		// 	link = "why";

		// 	if (
		// 		actualstep != 10 &&
		// 		st >= $why.offset().top + window.innerHeight / 2 + 220
		// 	) {
		// 		actualstep = 10;
		// 		console.log("step-10");
		// 		$circle.attr("data-step", 10);
		// 	}
		// }
		// // console.log(st, " >=", $solutions.offset().top - 0);
		// else if (
		// 	actualstep != 4 &&
		// 	st >= $freeConsultation.offset().top + 300
		// ) {
		// 	// console.log("step-4");
		// 	actualstep = 4;
		// 	$circle.attr("data-step", 4);
		// } // console.log(st, " >=", $solutions.offset().top - 0);
		// else if (actualstep != 3 && st >= $solutions.offset().top - 0) {
		// 	// console.log("step-3");
		// 	$circle.attr("data-step", 3);
		// 	link = "solutions";
		// 	actualstep = 3;
		// 	// console.log(st, " >=", $solutions.offset().top + 500);
		// 	// console.log(
		// 	// 	st,
		// 	// 	" <=",
		// 	// 	$solutions.offset().top + $solutions.height() - 500
		// 	// );
		// 	if (
		// 		st >= $solutions.offset().top + 500 &&
		// 		st <= $solutions.offset().top + $solutions.height()
		// 	) {
		// 		$circle3.addClass("_animate");
		// 	} else {
		// 		$circle3.removeClass("_animate");
		// 	}
		// } // console.log(st, " >=", $about.offset().top + 400);
		// else if (actualstep != 2 && st >= $about.offset().top + 400) {
		// 	$circle.attr("data-position", "center");
		// 	$circle.attr("data-step", 2);
		// 	actualstep = 2;
		// 	// console.log("step-2");
		// 	link = "about";
		// }
		// console.log("step", actualstep);
		// $menuLinks.removeClass("_active");
		// console.log(link);
		// $("[href='#" + link + "']").addClass("_active");
	});
});
