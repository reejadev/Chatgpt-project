var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

context.fillStyle = 'green';
context.fillRect(50, 50, 100, 100);

function draw(data) {
	context.clearRect(0, 0, canvas.width, canvas.height);

	for (var i = 0; i < data.length; i++) {
		var x = i * 50 + 50;
		var y = canvas.height - data[i];
		context.fillRect(x, y, 40, data[i]);
	}
}

function animate() {
	fetch('data.php')
		.then(response => response.json())
		.then(data => draw(data))
		.catch(error => console.error(error));

	requestAnimationFrame(animate);
}

animate();


