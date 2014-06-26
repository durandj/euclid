function Point(x, y) {
	this.x = x;
	this.y = y;
}

function Shape(type, points) {
	this.type = type;

	if (points instanceof Array) {
		this.points = points;
	}
	else {
		this.points = [points];
	}
}

Shape.prototype.draw = function (canvas) {
	this.points.unshift(canvas);
	drawFunctions[this.type].apply(undefined, this.points);
	this.points.shift(canvas);
};

var drawFunctions = {};
drawFunctions.point = function (canvas, point) {
	canvas.drawEllipse(
		{
			fillStyle: '#000',
			x: point.x,
			y: point.y,
			width: 5,
			height: 5,
		}
	);
};

drawFunctions.line_point_to_point = function (canvas, point0, point1) {
	canvas.drawLine(
		{
			strokeStyle: '#000',
			strokeWidth: 1,
			x1: point0.x,
			y1: point0.y,
			x2: point1.x,
			y2: point1.y,
		}
	);
};
