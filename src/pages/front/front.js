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
