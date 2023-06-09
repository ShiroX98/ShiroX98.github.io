// Hitung Luas Segitiga
function calculateAreaTriangle(event) {
	event.preventDefault();

	try {
		const pedestal = parseFloat(document.getElementById('triangular-base-value').value);
		const height = parseFloat(document.getElementById('triangular-height').value);
		if (isNaN(pedestal) || isNaN(height)) {
			throw new Error('Inputan berupa angka!');
		}
		const result = 1 / 2 * pedestal * height;

		document.getElementById('show-triangle-area-formula').textContent = 'L = 1/2 x a x t';
		document.getElementById('show-triangle-area-count').textContent = 'L = 1/2 x ' + pedestal + ' x ' + height;
		document.getElementById('show-triangle-area-result').textContent = 'L = ' + result;
	} catch (error) {
		console.error(error);
		alert('Error: ' + error.message);
	}
}

function resetFormAreaTriangle() {
	document.getElementById('form-area-triangle').reset();
	document.getElementById('show-triangle-area-formula').textContent = '';
	document.getElementById('show-triangle-area-count').textContent = '';
	document.getElementById('show-triangle-area-result').textContent = '';
}

// Hitung Keliling Segitiga
function calculatePerimeterTriangle(event) {
	event.preventDefault();

	try {
		const sideA = parseFloat(document.getElementById('side-a-triangle').value);
		const sideB = parseFloat(document.getElementById('side-b-triangle').value);
		const sideC = parseFloat(document.getElementById('side-c-triangle').value);
		if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
			throw new Error('Inputan berupa angka!');
		}
		const result = sideA + sideB + sideC;

		document.getElementById('show-triangle-perimeter-formula').textContent = 'K = SA + SB + SC';
		document.getElementById('show-triangle-perimeter-count').textContent =
			'K = ' + sideA + ' + ' + sideB + ' + ' + sideC;
		document.getElementById('show-triangle-perimeter-result').textContent = 'K = ' + result;
	} catch (error) {
		console.error(error);
		alert('Error: ' + error.message);
	}
}

function resetFormPerimeterTriangle() {
	document.getElementById('form-perimeter-triangle').reset();
	document.getElementById('show-triangle-perimeter-formula').textContent = '';
	document.getElementById('show-triangle-perimeter-count').textContent = '';
	document.getElementById('show-triangle-perimeter-result').textContent = '';
}

// Hitung Luas Jajar Genjang
function calculateAreaParallelogram(event) {
	event.preventDefault();

	try {
		const pedestal = parseFloat(document.getElementById('parallelogram-base-value').value);
		const height = parseFloat(document.getElementById('parallelogram-height').value);
		if (isNaN(pedestal) || isNaN(height)) {
			throw new Error('Inputan berupa angka!');
		}
		const result = pedestal * height;

		document.getElementById('show-parallelogram-area-formula').textContent = 'L = a x t';
		document.getElementById('show-parallelogram-area-count').textContent = 'L = ' + pedestal + ' x ' + height;
		document.getElementById('show-parallelogram-area-result').textContent = 'L = ' + result;
	} catch (error) {
		console.error(error);
		alert('Error: ' + error.message);
	}
}

function resetFormAreaParallelogram() {
	document.getElementById('form-area-parallelogram').reset();
	document.getElementById('show-parallelogram-area-formula').textContent = '';
	document.getElementById('show-parallelogram-area-count').textContent = '';
	document.getElementById('show-parallelogram-area-result').textContent = '';
}

// Hitung Keliling Jajar Genjang
function calculatePerimeterParallelogram(event) {
	event.preventDefault();

	try {
		const sideA = parseFloat(document.getElementById('side-a-parallelogram').value);
		const sideB = parseFloat(document.getElementById('side-b-parallelogram').value);
		if (isNaN(sideA) || isNaN(sideB)) {
			throw new Error('Inputan berupa angka!');
		}
		const result = 2 * (sideA + sideB);

		document.getElementById('show-parallelogram-perimeter-formula').textContent = 'K = 2 x (a+b)';
		document.getElementById('show-parallelogram-perimeter-count').textContent =
			'K = 2 x (' + sideA + ' + ' + sideB + ')';
		document.getElementById('show-parallelogram-perimeter-result').textContent = 'K = ' + result;
	} catch (error) {
		console.error(error);
		alert('Error: ' + error.message);
	}
}

function resetFormPerimeterParallelogram() {
	document.getElementById('form-perimeter-parallelogram').reset();
	document.getElementById('show-parallelogram-perimeter-formula').textContent = '';
	document.getElementById('show-parallelogram-perimeter-count').textContent = '';
	document.getElementById('show-parallelogram-perimeter-result').textContent = '';
}
