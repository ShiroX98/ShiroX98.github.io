// Hitung Luas Segitiga
function calculateAreaTriangle() {
	const pedestal = parseFloat(document.getElementById('triangular-base-value').value);
	const height = parseFloat(document.getElementById('triangular-height').value);

	if (
		document.getElementById('triangular-base-value').value != '' &&
		document.getElementById('triangular-height').value != ''
	) {
		const result = 1 / 2 * pedestal * height;

		document.getElementById('show-triangle-area-formula').textContent = 'L = 1/2 x a x t';
		document.getElementById('show-triangle-area-count').textContent = 'L = 1/2 x ' + pedestal + ' x ' + height;
		document.getElementById('show-triangle-area-result').textContent = 'L = ' + result;
	} else {
		alert('Nilai Alas dan Tinggi Segitiga harus di isi!');
	}
}

function resetFormAreaTriangle() {
	document.getElementById('triangular-base-value').value = '';
	document.getElementById('triangular-height').value = '';
	document.getElementById('show-triangle-area-formula').textContent = '';
	document.getElementById('show-triangle-area-count').textContent = '';
	document.getElementById('show-triangle-area-result').textContent = '';
}

// Hitung Keliling Segitiga
function calculatePerimeterTriangle() {
	const sideA = parseFloat(document.getElementById('side-a-triangle').value);
	const sideB = parseFloat(document.getElementById('side-b-triangle').value);
	const sideC = parseFloat(document.getElementById('side-c-triangle').value);

	const result = sideA + sideB + sideC;

	document.getElementById('show-triangle-perimeter-formula').textContent = 'K = SA + SB + SC';
	document.getElementById('show-triangle-perimeter-count').textContent = 'K = ' + sideA + ' + ' + sideB + ' + ' + sideC;
	document.getElementById('show-triangle-perimeter-result').textContent = 'K = ' + result;
}

function resetFormPerimeterTriangle() {
	document.getElementById('side-a-triangle').value = '';
	document.getElementById('side-b-triangle').value = '';
	document.getElementById('side-c-triangle').value = '';
	document.getElementById('show-triangle-perimeter-formula').textContent = '';
	document.getElementById('show-triangle-perimeter-count').textContent = '';
	document.getElementById('show-triangle-perimeter-result').textContent = '';
}

// Hitung Luas Jajar Genjang
function calculateAreaParallelogram() {
	const pedestal = parseFloat(document.getElementById('parallelogram-base-value').value);
	const height = parseFloat(document.getElementById('parallelogram-height').value);

	const result = pedestal * height;

	document.getElementById('show-parallelogram-area-formula').textContent = 'L = a x t';
	document.getElementById('show-parallelogram-area-count').textContent = 'L = ' + pedestal + ' x ' + height;
	document.getElementById('show-parallelogram-area-result').textContent = 'L = ' + result;
}

function resetFormAreaParallelogram() {
	document.getElementById('parallelogram-base-value').value = '';
	document.getElementById('parallelogram-height').value = '';
	document.getElementById('show-parallelogram-area-formula').textContent = '';
	document.getElementById('show-parallelogram-area-count').textContent = '';
	document.getElementById('show-parallelogram-area-result').textContent = '';
}

// Hitung Keliling Jajar Genjang
function calculatePerimeterParallelogram() {
	const sideA = parseFloat(document.getElementById('side-a-parallelogram').value);
	const sideB = parseFloat(document.getElementById('side-b-parallelogram').value);

	const result = 2 * (sideA + sideB);

	document.getElementById('show-parallelogram-perimeter-formula').textContent = 'K = 2 x (a+b)';
	document.getElementById('show-parallelogram-perimeter-count').textContent = 'K = 2 x (' + sideA + ' + ' + sideB + ')';
	document.getElementById('show-parallelogram-perimeter-result').textContent = 'K = ' + result;
}

function resetFormPerimeterParallelogram() {
	document.getElementById('side-a-parallelogram').value = '';
	document.getElementById('side-b-parallelogram').value = '';
	document.getElementById('show-parallelogram-perimeter-formula').textContent = '';
	document.getElementById('show-parallelogram-perimeter-count').textContent = '';
	document.getElementById('show-parallelogram-perimeter-result').textContent = '';
}
