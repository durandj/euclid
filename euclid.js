function Point(x, y) {
	this.x = x;
	this.y = y;
}

function drawPoint(canvas, point) {
	canvas.drawEllipse(
		{
			fillStyle: '#000',
			x: point.x,
			y: point.y,
			width: 5,
			height: 5,
		}
	);
}
