var borrar = false;
var punto = false;


function init() {
	borrar = false;
	punto = false;

}


function calcularResultado() {
	var input1 = document.f1.txtinput1.value;
	var result = eval(input1);
	document.f1.txtinput2.value = result;

	borrar = true;
	punto = false;
}

function limpiarVentana() {
	document.f1.txtinput1.value = "";
	document.f1.txtinput2.value = "";
	borrar = false;
	console.log("borrar");

}


function escribir(n) {
	if (borrar == true) {
		limpiarVentana();
	}

	var input1 = document.f1.txtinput1.value;
	var input2 = document.f1.txtinput2.value;



	if (input2 == "0" && n != ".") {
		inputo = input2.replace("0", "")
		document.f1.txtinput2.value = inputo + n;
		inputo1 = input1.replace("0", "")
		document.f1.txtinput1.value = inputo1 + n;
	} else if (input2.includes(".") && n == ".") {
		punto = true;
	} else {
		document.f1.txtinput2.value = input2 + n;
		document.f1.txtinput1.value = input1 + n;

	}

}




function signo(o) {

	if (borrar == true) {
		document.f1.txtinput1.value = document.f1.txtinput2.value;
		borrar = false;

	}


	var input1 = document.f1.txtinput1.value;

	if (input1.endsWith("+") || input1.endsWith("-") || input1.endsWith("*") || input1.endsWith("/")) {
		var res = input1.substring(0, input1.length - 1);
		document.f1.txtinput1.value = res + o;
	}

	else {

		document.f1.txtinput1.value = input1 + o;
		document.f1.txtinput2.value = "";
	}

}


function deletecarac() {
	var input1 = document.f1.txtinput1.value;
	var input2 = document.f1.txtinput2.value;
	if (input1.endsWith("+") || input1.endsWith("-") || input1.endsWith("*") || input1.endsWith("/")) {
		var res = input1.substring(0, input1.length - 1);
		document.f1.txtinput1.value = res;

	} else if (input2 == "" || input2 == "0") {
		document.f1.txtinput2.value = "0";

	} else if (input2.length == 1) {
		document.f1.txtinput2.value = "0";
		var res = input1.substring(0, input1.length - 1);
		document.f1.txtinput1.value = res;

	} else {
		var res = input1.substring(0, input1.length - 1);
		document.f1.txtinput1.value = res;
		var res2 = input2.substring(0, input2.length - 1);
		document.f1.txtinput2.value = res2;

	}
}

function deleteInput() {
	var input1 = document.f1.txtinput1.value;
	var input2 = document.f1.txtinput2.value;
	var res = input1.replace(input2, "");
	document.f1.txtinput1.value = res;
	document.f1.txtinput2.value = "0";

}

