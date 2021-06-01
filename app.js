// Getting all the elements
const priceInput = document.querySelector('[name=price]');
const quantityInput = document.querySelector('[name=quantity]');
const result = document.querySelector('.result');
const rangeInput = document.querySelector('.range-input');

// creating functions
function calPrice() {
	const price = priceInput.value;
	const quantity = quantityInput.value;

	const total = price * quantity;
	result.innerText = '$' + total.toFixed(2);
}

function rangeOutput() {
	const quantity = quantityInput.value;
	rangeInput.innerText = quantity;
}
// adding event listener
priceInput.addEventListener('input', calPrice);
quantityInput.addEventListener('input', calPrice);
quantityInput.addEventListener('input', rangeOutput);

// execute the function on load

calPrice();
