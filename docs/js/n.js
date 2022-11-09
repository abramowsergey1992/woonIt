let solution = [
	{
		w: 100,
		h: 100,
		img: "s-1.svg",
	},
	{
		w: 100,
		h: 100,
		img: "s-2.svg",
	},
	{
		w: 100,
		h: 100,
		img: "s-3.svg",
	},
	{
		w: 100,
		h: 100,
		img: "s-4.svg",
	},
	{
		w: 100,
		h: 100,
		img: "s-5.svg",
	},
	{
		w: 100,
		h: 100,
		img: "s-6.svg",
	},
	{
		w: 100,
		h: 100,
		img: "s-7.svg",
	},
	{
		w: 100,
		h: 100,
		img: "s-8.svg",
	},
	{
		w: 100,
		h: 100,
		img: "s-9.svg",
	},
	{
		w: 100,
		h: 100,
		img: "s-10.svg",
	},
	{
		w: 100,
		h: 100,
		img: "s-11.svg",
	},
	{
		w: 100,
		h: 100,
		img: "s-12.svg",
	},
	{
		w: 100,
		h: 100,
		img: "s-13.svg",
	},
	{
		w: 100,
		h: 100,
		img: "s-14.svg",
	},
	{
		w: 100,
		h: 100,
		img: "s-15.svg",
	},
	{
		w: 100,
		h: 100,
		img: "s-16.svg",
	},
];

let microsoft = [
	{
		w: 106,
		h: 100,
		img: "m-1.svg",
	},
	{
		w: 102,
		h: 100,
		img: "m-2.svg",
	},
	{
		w: 112,
		h: 100,
		img: "m-3.svg",
	},
	{
		w: 99,
		h: 100,
		img: "m-4.svg",
	},
	{
		w: 108,
		h: 100,
		img: "m-5.svg",
	},
	{
		w: 110,
		h: 100,
		img: "m-6.svg",
	},
	{
		w: 89,
		h: 100,
		img: "m-7.svg",
	},
	{
		w: 100,
		h: 100,
		img: "m-8.svg",
	},
	{
		w: 157,
		h: 100,
		img: "m-9.svg",
	},
	{
		w: 111,
		h: 100,
		img: "m-10.svg",
	},
	{
		w: 104,
		h: 100,
		img: "m-11.svg",
	},
	{
		w: 116,
		h: 100,
		img: "m-12.svg",
	},
	{
		w: 116,
		h: 100,
		img: "m-13.svg",
	},
	{
		w: 116,
		h: 100,
		img: "m-14.svg",
	},
	{
		w: 110,
		h: 100,
		img: "m-15.svg",
	},
	{
		w: 105,
		h: 100,
		img: "m-16.svg",
	},
	{
		w: 126,
		h: 100,
		img: "m-17.svg",
	},
	{
		w: 111,
		h: 100,
		img: "m-18.svg",
	},
	{
		w: 97,
		h: 100,
		img: "m-19.svg",
	},
	{
		w: 112,
		h: 100,
		img: "m-20.svg",
	},
	{
		w: 113,
		h: 100,
		img: "m-21.svg",
	},
];

Matter.use("matter-gravity", "matter-world-wrap", "matter-tools");
// module aliases

var Engine = Matter.Engine,
	Render = Matter.Render,
	Runner = Matter.Runner,
	Bodies = Matter.Bodies,
	Composite = Matter.Composite;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
	element: document.querySelector(".phisicbox"),
	engine: engine,
	options: {
		// showPerformance: true,
		wireframes: false,
		background: "transparent",
	},
});
render.canvas.width = window.innerWidth;
render.canvas.height = window.innerHeight;
let delta = 1;
const mediaQuery = window.matchMedia("(max-width: 768px)");
if (mediaQuery.matches) {
	delta = 0.5;
}
console.log("delta", delta);
var length = microsoft.length,
	element = null;
let h = 0;

for (var i = 0; i < length; i++) {
	h -= 100;
	element = microsoft[i];
	var box = Bodies.rectangle(
		Math.floor(Math.random() * (window.innerWidth / 1.5 - 100 + 1) + 100),
		h,
		microsoft[i]["w"] * delta,
		microsoft[i]["h"] * delta,
		{
			// isStatic: true,
			render: {
				sprite: {
					texture: "img/" + microsoft[i]["img"],
					// texture: "/img/freeconsultation.png",
					xScale: 1 * delta,
					yScale: 1 * delta,
				},
			},
		}
	);
	console.log("../img/" + microsoft[i]["img"]);
	Composite.add(engine.world, [box]);
}
// create two boxes and a ground

var groundBottom = Bodies.rectangle(
	window.innerWidth / 2,
	window.innerHeight + 10,
	window.innerWidth,
	10,
	{
		isStatic: true,
	}
);
var groundLeft = Bodies.rectangle(
	-5,
	window.innerHeight / 2,
	5,
	window.innerHeight,
	{
		isStatic: true,
	}
);
var groundRight = Bodies.rectangle(
	window.innerWidth,
	window.innerHeight / 2,
	1,
	window.innerHeight,
	{
		isStatic: true,
	}
);

// add all of the bodies to the world
Composite.add(engine.world, [groundBottom, groundLeft, groundRight]);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create({
	isFixed: false, // I tried both true and false, same result
});

document.querySelector(".phisicbox").addEventListener("click", function () {
	Composite.remove(engine.world, groundBottom);
	setTimeout(function () {
		Composite.add(engine.world, [groundBottom]);
		var length = solution.length,
			element = null;
		let h = 0;

		for (var i = 0; i < length; i++) {
			h -= 100;
			element = solution[i];
			var box = Bodies.rectangle(
				Math.floor(
					Math.random() * (window.innerWidth / 1.5 - 100 + 1) + 100
				),
				h,
				solution[i]["w"] * delta * delta,
				solution[i]["h"] * delta * delta,
				{
					// isStatic: true,
					render: {
						sprite: {
							texture: "img/" + solution[i]["img"],
							// texture: "/img/freeconsultation.png",
							xScale: 1 * delta,
							yScale: 1 * delta,
						},
					},
				}
			);
			Composite.add(engine.world, [box]);
		}
	}, 2000);
});
// run the engine
Runner.run(runner, engine);
