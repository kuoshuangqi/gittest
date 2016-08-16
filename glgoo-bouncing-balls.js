$(function() {
	var canvas = $("#c");
	var canvasHeight;
	var canvasWidth;
	var ctx;
	var dt = 0.1;
	
	var pointCollection;
	
	function init() {
		updateCanvasDimensions();
		// 	var g = [new Point(202, 78, 0.0, 9, "#ffc0cb"), new Point(348, 83, 0.0, 9, "#d44d61"), new Point(256, 69, 0.0, 9, "#4f7af2"), new Point(214, 59, 0.0, 9, "#ef9a1e"), new Point(265, 36, 0.0, 9, "#4976f3"), new Point(300, 78, 0.0, 9, "#269230"), new Point(294, 59, 0.0, 9, "#1f9e2c"), new Point(45, 88, 0.0, 9, "#1c48dd"), new Point(268, 52, 0.0, 9, "#2a56ea"), new Point(73, 83, 0.0, 9, "#3355d8"), new Point(294, 6, 0.0, 9, "#36b641"), new Point(235, 62, 0.0, 9, "#2e5def"), new Point(353, 42, 0.0, 8, "#d53747"), new Point(336, 52, 0.0, 8, "#eb676f"), new Point(208, 41, 0.0, 8, "#f9b125"), new Point(321, 70, 0.0, 8, "#de3646"), new Point(8, 60, 0.0, 8, "#2a59f0"), new Point(180, 81, 0.0, 8, "#eb9c31"), new Point(146, 65, 0.0, 8, "#c41731"), new Point(145, 49, 0.0, 8, "#d82038"), new Point(246, 34, 0.0, 8, "#5f8af8"), new Point(169, 69, 0.0, 8, "#efa11e"), new Point(273, 99, 0.0, 8, "#2e55e2"), new Point(248, 120, 0.0, 8, "#4167e4"), new Point(294, 41, 0.0, 8, "#0b991a"), new Point(267, 114, 0.0, 8, "#4869e3"), new Point(78, 67, 0.0, 8, "#3059e3"), new Point(294, 23, 0.0, 8, "#10a11d"), new Point(117, 83, 0.0, 8, "#cf4055"), new Point(137, 80, 0.0, 8, "#cd4359"), new Point(14, 71, 0.0, 8, "#2855ea"), new Point(331, 80, 0.0, 8, "#ca273c"), new Point(25, 82, 0.0, 8, "#2650e1"), new Point(233, 46, 0.0, 8, "#4a7bf9"), new Point(73, 13, 0.0, 8, "#3d65e7"), new Point(327, 35, 0.0, 6, "#f47875"), new Point(319, 46, 0.0, 6, "#f36764"), new Point(256, 81, 0.0, 6, "#1d4eeb"), new Point(244, 88, 0.0, 6, "#698bf1"), new Point(194, 32, 0.0, 6, "#fac652"), new Point(97, 56, 0.0, 6, "#ee5257"), new Point(105, 75, 0.0, 6, "#cf2a3f"), new Point(42, 4, 0.0, 6, "#5681f5"), new Point(10, 27, 0.0, 6, "#4577f6"), new Point(166, 55, 0.0, 6, "#f7b326"), new Point(266, 88, 0.0, 6, "#2b58e8"), new Point(178, 34, 0.0, 6, "#facb5e"), new Point(100, 65, 0.0, 6, "#e02e3d"), new Point(343, 32, 0.0, 6, "#f16d6f"), new Point(59, 5, 0.0, 6, "#507bf2"), new Point(27, 9, 0.0, 6, "#5683f7"), new Point(233, 116, 0.0, 6, "#3158e2"), new Point(123, 32, 0.0, 6, "#f0696c"), new Point(6, 38, 0.0, 6, "#3769f6"), new Point(63, 62, 0.0, 6, "#6084ef"), new Point(6, 49, 0.0, 6, "#2a5cf4"), new Point(108, 36, 0.0, 6, "#f4716e"), new Point(169, 43, 0.0, 6, "#f8c247"), new Point(137, 37, 0.0, 6, "#e74653"), new Point(318, 58, 0.0, 6, "#ec4147"), new Point(226, 100, 0.0, 5, "#4876f1"), new Point(101, 46, 0.0, 5, "#ef5c5c"), new Point(226, 108, 0.0, 5, "#2552ea"), new Point(17, 17, 0.0, 5, "#4779f7"), new Point(232, 93, 0.0, 5, "#4b78f1")];
		var g = [
		//b
				new Point(20,20,0.0, 6, "#ffc0cb"),
				new Point(20,40,0.0, 6, "#ffc0cb"),
				new Point(20,60,0.8, 6, "#ffc0cb"),
				new Point(20,80,0.0, 6, "#ffc0cb"),
				new Point(20,100,0.0, 6, "#ffc0cb"),
				new Point(20,120,0.0, 6, "#ffc0cb"),
				new Point(20,140,0.0, 6, "#ffc0cb"),
				new Point(20,160,0.0, 6, "#ffc0cb"),
				new Point(20,180,0.0, 6, "#ffc0cb"),
				new Point(20,200,0.0, 6, "#ffc0cb"),
				new Point(20,220,0.0, 6, "#ffc0cb"),
				new Point(20,240,0.0, 6, "#ffc0cb"),
				new Point(20,260,0.0, 6, "#ffc0cb"),
				new Point(20,280,0.8, 6, "#ffc0cb"),
				new Point(20,300,0.0, 6, "#ffc0cb"),
				new Point(20,320,0.0, 6, "#ffc0cb"),
				new Point(20,340,0.0, 6, "#ffc0cb"),
				new Point(20,360,0.0, 6, "#ffc0cb"),
				new Point(20,380,0.0, 6, "#ffc0cb"),
				new Point(40,21,0.0, 6, "#ffc0cb"),
				new Point(60,22,0.0, 6, "#ffc0cb"),
				new Point(80,27,0.0, 6, "#ffc0cb"),
				new Point(100,35,0.0, 6, "#ffc0cb"),
				new Point(120,44,0.0, 6, "#ffc0cb"),
				new Point(140,55,0.0, 6, "#ffc0cb"),
				new Point(160,72,0.0, 6, "#ffc0cb"),
				new Point(170,90,0.0, 6, "#ffc0cb"),
				new Point(175,112,0.0, 6, "#ffc0cb"),
				new Point(170,132,0.0, 6, "#ffc0cb"),
				new Point(160,150,0.0, 6, "#ffc0cb"),
				new Point(140,167,0.0, 6, "#ffc0cb"),
				new Point(120,178,0.0, 6, "#ffc0cb"),
				new Point(100,186,0.0, 6, "#ffc0cb"),
				new Point(80,191,0.0, 6, "#ffc0cb"),
				new Point(60,194,0.0, 6, "#ffc0cb"),
				new Point(40,195,0.0, 6, "#ffc0cb"),
				new Point(60,196,0.0, 6, "#ffc0cb"),
				new Point(80,201,0.0, 6, "#ffc0cb"),
				new Point(100,209,0.0, 6, "#ffc0cb"),
				new Point(120,218,0.0, 6, "#ffc0cb"),
				new Point(140,229,0.0, 6, "#ffc0cb"),
				new Point(160,246,0.0, 6, "#ffc0cb"),
				new Point(170,264,0.0, 6, "#ffc0cb"),
				new Point(175,286,0.0, 6, "#ffc0cb"),
				new Point(170,306,0.0, 6, "#ffc0cb"),
				new Point(160,324,0.0, 6, "#ffc0cb"),
				new Point(140,340,0.0, 6, "#ffc0cb"),
				new Point(120,351,0.0, 6, "#ffc0cb"),
				new Point(100,360,0.0, 6, "#ffc0cb"),
				new Point(80,365,0.0, 6, "#ffc0cb"),
				new Point(60,370,0.0, 6, "#ffc0cb"),
				new Point(40,375,0.0, 6, "#ffc0cb"),


				//e
				new Point(280,300,0.0, 6, "#ffc0cb"),
				new Point(300,300,0.0, 6, "#ffc0cb"),
				new Point(320,300,0.0, 6, "#ffc0cb"),
				new Point(340,300,0.0, 6, "#ffc0cb"),
				new Point(360,300,0.0, 6, "#ffc0cb"),
				new Point(380,300,0.0, 6, "#ffc0cb"),
				new Point(400,300,0.0, 6, "#ffc0cb"),
				new Point(420,300,0.0, 6, "#ffc0cb"),
				new Point(440,300,0.0, 6, "#ffc0cb"),
				new Point(430,280,0.0, 6, "#ffc0cb"),
				new Point(420,263,0.0, 6, "#ffc0cb"),
				new Point(405,248,0.0, 6, "#ffc0cb"),
				new Point(385,238,0.0, 6, "#ffc0cb"),
				new Point(365,230,0.0, 6, "#ffc0cb"),
				new Point(345,230,0.0, 6, "#ffc0cb"),
				new Point(325,238,0.0, 6, "#ffc0cb"),
				new Point(305,248,0.0, 6, "#ffc0cb"),
				new Point(290,263,0.0, 6, "#ffc0cb"),
				new Point(280,283,0.0, 6, "#ffc0cb"),
				new Point(280,320,0.0, 6, "#ffc0cb"),
				new Point(285,337,0.0, 6, "#ffc0cb"),
				new Point(295,355,0.0, 6, "#ffc0cb"),
				new Point(310,370,0.0, 6, "#ffc0cb"),
				new Point(330,380,0.0, 6, "#ffc0cb"),
				new Point(350,387,0.0, 6, "#ffc0cb"),
				new Point(370,385,0.0, 6, "#ffc0cb"),

				//n
				new Point(500,260,0.0, 6, "#ffc0cb"),
				new Point(500,280,0.8, 6, "#ffc0cb"),
				new Point(500,300,0.0, 6, "#ffc0cb"),
				new Point(500,320,0.0, 6, "#ffc0cb"),
				new Point(500,340,0.0, 6, "#ffc0cb"),
				new Point(500,360,0.0, 6, "#ffc0cb"),
				new Point(500,380,0.0, 6, "#ffc0cb"),
		
				new Point(630,260,0.0, 6, "#ffc0cb"),
				new Point(630,280,0.8, 6, "#ffc0cb"),
				new Point(630,300,0.0, 6, "#ffc0cb"),
				new Point(630,320,0.0, 6, "#ffc0cb"),
				new Point(630,340,0.0, 6, "#ffc0cb"),
				new Point(630,360,0.0, 6, "#ffc0cb"),
				new Point(630,380,0.0, 6, "#ffc0cb"),
			
				new Point(515,240,0.0, 6, "#ffc0cb"),
				new Point(530,228,0.0, 6, "#ffc0cb"),
				new Point(545,216,0.0, 6, "#ffc0cb"),
				new Point(560,210,0.0, 6, "#ffc0cb"),
				new Point(575,210,0.0, 6, "#ffc0cb"),
				new Point(590,216,0.0, 6, "#ffc0cb"),
				new Point(605,228,0.0, 6, "#ffc0cb"),
				new Point(620,240,0.0, 6, "#ffc0cb"),


//another
				new Point(820,20,0.0, 6, "#ffc0cb"),
				new Point(820,40,0.0, 6, "#ffc0cb"),
				new Point(820,60,0.8, 6, "#ffc0cb"),
				new Point(820,80,0.0, 6, "#ffc0cb"),
				new Point(820,100,0.0, 6, "#ffc0cb"),
				new Point(820,120,0.0, 6, "#ffc0cb"),
				new Point(820,140,0.0, 6, "#ffc0cb"),
				new Point(820,160,0.0, 6, "#ffc0cb"),
				new Point(820,180,0.0, 6, "#ffc0cb"),
				new Point(820,200,0.0, 6, "#ffc0cb"),
				new Point(820,220,0.0, 6, "#ffc0cb"),
				new Point(820,240,0.0, 6, "#ffc0cb"),
				new Point(820,260,0.0, 6, "#ffc0cb"),
				new Point(820,280,0.8, 6, "#ffc0cb"),
				new Point(820,300,0.0, 6, "#ffc0cb"),
				new Point(820,320,0.0, 6, "#ffc0cb"),
				new Point(820,340,0.0, 6, "#ffc0cb"),
				new Point(820,360,0.0, 6, "#ffc0cb"),
				new Point(820,380,0.0, 6, "#ffc0cb"),
				new Point(840,21,0.0, 6, "#ffc0cb"),
				new Point(860,22,0.0, 6, "#ffc0cb"),
				new Point(880,27,0.0, 6, "#ffc0cb"),
				new Point(900,35,0.0, 6, "#ffc0cb"),
				new Point(920,44,0.0, 6, "#ffc0cb"),
				new Point(940,55,0.0, 6, "#ffc0cb"),
				new Point(960,72,0.0, 6, "#ffc0cb"),
				new Point(970,90,0.0, 6, "#ffc0cb"),
				new Point(975,112,0.0, 6, "#ffc0cb"),
				new Point(970,132,0.0, 6, "#ffc0cb"),
				new Point(960,150,0.0, 6, "#ffc0cb"),
				new Point(940,167,0.0, 6, "#ffc0cb"),
				new Point(920,178,0.0, 6, "#ffc0cb"),
				new Point(900,186,0.0, 6, "#ffc0cb"),
				new Point(880,191,0.0, 6, "#ffc0cb"),
				new Point(860,194,0.0, 6, "#ffc0cb"),
				new Point(840,195,0.0, 6, "#ffc0cb"),
				new Point(860,196,0.0, 6, "#ffc0cb"),
				new Point(880,201,0.0, 6, "#ffc0cb"),
				new Point(900,209,0.0, 6, "#ffc0cb"),
				new Point(920,218,0.0, 6, "#ffc0cb"),
				new Point(940,229,0.0, 6, "#ffc0cb"),
				new Point(960,246,0.0, 6, "#ffc0cb"),
				new Point(970,264,0.0, 6, "#ffc0cb"),
				new Point(975,286,0.0, 6, "#ffc0cb"),
				new Point(970,306,0.0, 6, "#ffc0cb"),
				new Point(960,324,0.0, 6, "#ffc0cb"),
				new Point(940,340,0.0, 6, "#ffc0cb"),
				new Point(920,351,0.0, 6, "#ffc0cb"),
				new Point(900,360,0.0, 6, "#ffc0cb"),
				new Point(880,365,0.0, 6, "#ffc0cb"),
				new Point(860,370,0.0, 6, "#ffc0cb"),
				new Point(840,375,0.0, 6, "#ffc0cb"),


				//e
				new Point(1080,300,0.0, 6, "#ffc0cb"),
				new Point(1100,300,0.0, 6, "#ffc0cb"),
				new Point(1120,300,0.0, 6, "#ffc0cb"),
				new Point(1140,300,0.0, 6, "#ffc0cb"),
				new Point(1160,300,0.0, 6, "#ffc0cb"),
				new Point(1180,300,0.0, 6, "#ffc0cb"),
				new Point(1200,300,0.0, 6, "#ffc0cb"),
				new Point(1220,300,0.0, 6, "#ffc0cb"),
				new Point(1240,300,0.0, 6, "#ffc0cb"),
				new Point(1230,280,0.0, 6, "#ffc0cb"),
				new Point(1220,263,0.0, 6, "#ffc0cb"),
				new Point(1205,248,0.0, 6, "#ffc0cb"),
				new Point(1185,238,0.0, 6, "#ffc0cb"),
				new Point(1165,230,0.0, 6, "#ffc0cb"),
				new Point(1145,230,0.0, 6, "#ffc0cb"),
				new Point(1125,238,0.0, 6, "#ffc0cb"),
				new Point(1105,248,0.0, 6, "#ffc0cb"),
				new Point(1090,263,0.0, 6, "#ffc0cb"),
				new Point(1080,283,0.0, 6, "#ffc0cb"),
				new Point(1080,320,0.0, 6, "#ffc0cb"),
				new Point(1085,337,0.0, 6, "#ffc0cb"),
				new Point(1095,355,0.0, 6, "#ffc0cb"),
				new Point(1110,370,0.0, 6, "#ffc0cb"),
				new Point(1130,380,0.0, 6, "#ffc0cb"),
				new Point(1150,387,0.0, 6, "#ffc0cb"),
				new Point(1170,385,0.0, 6, "#ffc0cb"),

				//n
				new Point(1300,260,0.0, 6, "#ffc0cb"),
				new Point(1300,280,0.8, 6, "#ffc0cb"),
				new Point(1300,300,0.0, 6, "#ffc0cb"),
				new Point(1300,320,0.0, 6, "#ffc0cb"),
				new Point(1300,340,0.0, 6, "#ffc0cb"),
				new Point(1300,360,0.0, 6, "#ffc0cb"),
				new Point(1300,380,0.0, 6, "#ffc0cb"),
		
				new Point(1430,260,0.0, 6, "#ffc0cb"),
				new Point(1430,280,0.8, 6, "#ffc0cb"),
				new Point(1430,300,0.0, 6, "#ffc0cb"),
				new Point(1430,320,0.0, 6, "#ffc0cb"),
				new Point(1430,340,0.0, 6, "#ffc0cb"),
				new Point(1430,360,0.0, 6, "#ffc0cb"),
				new Point(1430,380,0.0, 6, "#ffc0cb"),
			
				new Point(1315,240,0.0, 6, "#ffc0cb"),
				new Point(1330,228,0.0, 6, "#ffc0cb"),
				new Point(1345,216,0.0, 6, "#ffc0cb"),
				new Point(1360,210,0.0, 6, "#ffc0cb"),
				new Point(1375,210,0.0, 6, "#ffc0cb"),
				new Point(1390,216,0.0, 6, "#ffc0cb"),
				new Point(1405,228,0.0, 6, "#ffc0cb"),
				new Point(1420,240,0.0, 6, "#ffc0cb"),
		];
/*		var g = [
				new Point(305, 78, 0.0, 9, "#ffc0cb"), 
				new Point(167, 69, 0.0, 9, "#4f7af2"), 
				new Point(317, 59, 0.0, 9, "#ef9a1e"), 
				new Point(156, 36, 0.0, 9, "#4976f3"), 
				new Point(117, 78, 0.0, 9, "#269230"), 
				new Point(111, 59, 0.0, 9, "#1f9e2c"), 
				new Point(52, 88, 0.0, 9, "#1c48dd"),
				new Point(179, 52, 0.0, 9, "#2a56ea"),
				new Point(80, 83, 0.0, 9, "#3355d8"),
				new Point(111, 6, 0.0, 9, "#36b641"),
				new Point(146, 62, 0.0, 9, "#2e5def"),
				new Point(311, 41, 0.0, 8, "#f9b125"), 
				new Point(15, 60, 0.0, 8, "#2a59f0"), 
				new Point(283, 81, 0.0, 8, "#eb9c31"), 
				new Point(249, 65, 0.0, 8, "#c41731"), 
				new Point(248, 49, 0.0, 8, "#d82038"), 
				new Point(174, 34, 0.0, 8, "#5f8af8"), 
				new Point(272, 69, 0.0, 8, "#efa11e"), 
				new Point(184, 99, 0.0, 8, "#2e55e2"), 
				new Point(159, 120, 0.0, 8, "#4167e4"), 
				new Point(111, 41, 0.0, 8, "#0b991a"), 
				new Point(178, 114, 0.0, 8, "#4869e3"), 
				new Point(85, 67, 0.0, 8, "#3059e3"),
				new Point(111, 23, 0.0, 8, "#10a11d"), 
				new Point(220, 83, 0.0, 8, "#cf4055"), 
				new Point(240, 80, 0.0, 8, "#cd4359"), 
				new Point(21, 71, 0.0, 8, "#2855ea"), 
				new Point(32, 82, 0.0, 8, "#2650e1"), 
				new Point(144, 46, 0.0, 8, "#4a7bf9"), 
				new Point(80, 13, 0.0, 8, "#3d65e7"), 
				new Point(167, 81, 0.0, 6, "#1d4eeb"), 
				new Point(155, 88, 0.0, 6, "#698bf1"), 
				new Point(297, 32, 0.0, 6, "#fac652"), 
				new Point(200, 56, 0.0, 6, "#ee5257"), 
				new Point(208, 75, 0.0, 6, "#cf2a3f"), 
				new Point(49, 4, 0.0, 6, "#5681f5"), 
				new Point(17, 27, 0.0, 6, "#4577f6"), 
				new Point(269, 55, 0.0, 6, "#f7b326"), 
				new Point(177, 88, 0.0, 6, "#2b58e8"), 
				new Point(281, 34, 0.0, 6, "#facb5e"), 
				new Point(203, 65, 0.0, 6, "#e02e3d"), 
				new Point(66, 5, 0.0, 6, "#507bf2"), 
				new Point(34, 9, 0.0, 6, "#5683f7"), 
				new Point(144, 116, 0.0, 6, "#3158e2"), 
				new Point(226, 32, 0.0, 6, "#f0696c"), 
				new Point(13, 38, 0.0, 6, "#3769f6"), 
				new Point(70, 62, 0.0, 6, "#6084ef"), 
				new Point(13, 49, 0.0, 6, "#2a5cf4"), 
				new Point(211, 36, 0.0, 6, "#f4716e"), 
				new Point(272, 43, 0.0, 6, "#f8c247"), 
				new Point(240, 37, 0.0, 6, "#e74653"), 
				new Point(137, 100, 0.0, 5, "#4876f1"), 
				new Point(204, 46, 0.0, 5, "#ef5c5c"), 
				new Point(137, 108, 0.0, 5, "#2552ea"), 
				new Point(24, 17, 0.0, 5, "#4779f7"), 
				new Point(143, 93, 0.0, 5, "#4b78f1")];
*/		
		gLength = g.length;
		for (var i = 0; i < gLength; i++) {
			g[i].curPos.x = (canvasWidth/2 - 180)  + g[i].curPos.x;
			g[i].curPos.y = (canvasHeight/2 - 65) + g[i].curPos.y;
			
			g[i].originalPos.x = (canvasWidth/2 - 180) *0.6+ g[i].originalPos.x *2/3;
			g[i].originalPos.y = (canvasHeight/2 - 65)  * 0.6 + g[i].originalPos.y *2/3;
		};
		
		pointCollection = new PointCollection();
		pointCollection.points = g;
		
		initEventListeners();
		timeout();
	};
	
	function initEventListeners() {
		$(window).bind('resize', updateCanvasDimensions).bind('mousemove', onMove);
		
		canvas.get(0).ontouchmove = function(e) {
			e.preventDefault();
			onTouchMove(e);
		};
		
		canvas.get(0).ontouchstart = function(e) {
			e.preventDefault();
		};
	};
	
	function updateCanvasDimensions() {
	//	canvas.attr({height: $(window).height(), width: $(window).width()});
		canvas.attr({height: 400, width: $(window).width()});
		canvasWidth = canvas.width();
		canvasHeight = canvas.height();

		draw();
	};
	
	function onMove(e) {
		if (pointCollection)
			pointCollection.mousePos.set(e.pageX, e.pageY);
	};
	
	function onTouchMove(e) {
		if (pointCollection)
			pointCollection.mousePos.set(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
	};
	
	function timeout() {
		draw();
		update();
		
		setTimeout(function() { timeout() }, 30);
	};
	
	function draw() {
		var tmpCanvas = canvas.get(0);

		if (tmpCanvas.getContext == null) {
			return; 
		};
		
		ctx = tmpCanvas.getContext('2d');
		ctx.clearRect(0, 0, canvasWidth, canvasHeight);
		
		if (pointCollection)
			pointCollection.draw();
	};
	
	function update() {		
		if (pointCollection)
			pointCollection.update();
	};
	
	function Vector(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
 
		this.addX = function(x) {
			this.x += x;
		};
		
		this.addY = function(y) {
			this.y += y;
		};
		
		this.addZ = function(z) {
			this.z += z;
		};
 
		this.set = function(x, y, z) {
			this.x = x; 
			this.y = y;
			this.z = z;
		};
	};
	
	function PointCollection() {
		this.mousePos = new Vector(0, 0);
		this.points = new Array();
		
		this.newPoint = function(x, y, z) {
			var point = new Point(x, y, z);
			this.points.push(point);
			return point;
		};
		
		this.update = function() {		
			var pointsLength = this.points.length;
			
			for (var i = 0; i < pointsLength; i++) {
				var point = this.points[i];
				
				if (point == null)
					continue;
				
				var dx = this.mousePos.x - point.curPos.x;
				var dy = this.mousePos.y - point.curPos.y;
				var dd = (dx * dx) + (dy * dy);
				var d = Math.sqrt(dd);
				
				if (d < 150) {
					point.targetPos.x = (this.mousePos.x < point.curPos.x) ? point.curPos.x - dx : point.curPos.x - dx;
					point.targetPos.y = (this.mousePos.y < point.curPos.y) ? point.curPos.y - dy : point.curPos.y - dy;
				} else {
					point.targetPos.x = point.originalPos.x;
					point.targetPos.y = point.originalPos.y;
				};
				
				point.update();
			};
		};
		
		this.draw = function() {
			var pointsLength = this.points.length;
			for (var i = 0; i < pointsLength; i++) {
				var point = this.points[i];
				
				if (point == null)
					continue;

				point.draw();
			};
		};
	};
	
	function Point(x, y, z, size, colour) {
		this.colour = colour;
		this.curPos = new Vector(x, y, z);
		this.friction = 0.8;
		this.originalPos = new Vector(x, y, z);
		this.radius = size;
		this.size = size;
		this.springStrength = 0.1;
		this.targetPos = new Vector(x, y, z);
		this.velocity = new Vector(0.0, 0.0, 0.0);
		
		this.update = function() {
			var dx = this.targetPos.x - this.curPos.x;
			var ax = dx * this.springStrength;
			this.velocity.x += ax;
			this.velocity.x *= this.friction;
			this.curPos.x += this.velocity.x;
			
			var dy = this.targetPos.y - this.curPos.y;
			var ay = dy * this.springStrength;
			this.velocity.y += ay;
			this.velocity.y *= this.friction;
			this.curPos.y += this.velocity.y;
			
			var dox = this.originalPos.x - this.curPos.x;
			var doy = this.originalPos.y - this.curPos.y;
			var dd = (dox * dox) + (doy * doy);
			var d = Math.sqrt(dd);
			
			this.targetPos.z = d/100 + 1;
			var dz = this.targetPos.z - this.curPos.z;
			var az = dz * this.springStrength;
			this.velocity.z += az;
			this.velocity.z *= this.friction;
			this.curPos.z += this.velocity.z;
			
			this.radius = this.size*this.curPos.z;
			if (this.radius < 1) this.radius = 1;
		};
		
		this.draw = function() {
			ctx.fillStyle = this.colour;
			ctx.beginPath();
			ctx.arc(this.curPos.x, this.curPos.y, this.radius, 0, Math.PI*2, true);
			ctx.fill();
		};
	};
	
	init();
});