const display = document.getElementById("display");
const nameButton = document.getElementById("name");

function appendToDisplay(input) {
	display.value += input;
}

function clearDisplay() {
	display.value = "";
	nameButton.textContent = "";
}

function calculate() {
	let expression = display.value;

	if (!expression) {
		display.value = "Error";
		return;
	}

	expression = expression.replace(/x/g, "*").replace(/÷/g, "/");

	try {
		let result = eval(expression);

		if (!isFinite(result)) {
			display.value = "Error";
			return;
		}

		if (result === 143) {
			display.value = "miss na kita :(";
			nameButton.textContent = "chat mo na ko please";
		} else {
			display.value = result;
			nameButton.textContent = "";
		}
	} catch (error) {
		display.value = "Error";
	}
}
