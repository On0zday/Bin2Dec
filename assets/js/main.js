// selecionar o input
const input = document.querySelector("input");

// selecionar o botão

const btn = document.querySelector("button");





input.addEventListener("keypress", (event) => {

	// limitar digito

	if (String.fromCharCode(event.keyCode) != "1" && String.fromCharCode(event.keyCode) != "0") {
		alert("Digite um numero entre 0 e 1");
		event.preventDefault();
	}
});

function calcConvert (numberBin) {
	let newNumberDecimal = 0;


	for (let ind = 0, p = (numberBin.length - 1); ind < numberBin.length; ind++, p--) {
		const trans = parseInt(numberBin[ind]);
		if (trans === 1) {
			newNumberDecimal += Math.pow(2, p);
		}
	}

	return newNumberDecimal;
}


function isValue (decimal) {
	input.value = `>> ${decimal} <<`;
}


btn.addEventListener("click", (event) => {

	event.preventDefault();


	isValue(calcConvert(input.value));

});




