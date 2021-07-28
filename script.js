function validar() {
	resultado = document.getElementById('resultado');
	var cpf = parseInt(main.cpf.value);
	let divisor = 10000000000;
	let arrcpf = [parseInt(cpf / 10000000000)]; //primeiro digito
	let x = 0
	let soma1 = 0
	let soma2 = 0

	//Verificar se possui o maximo de digitos
	if (main.cpf.value.length > 11) {
		resultado.innerHTML = 'CPF possui mais de 11 digitos'
		main.cpf.focus();
		return false;
	}

	// Declaração dos outros digitos
	for (i = 1; i < 11; i++) {
		divisor = divisor / 10;
		arrcpf[i] = parseInt(cpf / divisor) % 10;
	}
	//Parte do digito de verificação 1
	for (i = 10; i > 1; i--) {
		soma1 = (soma1 + (arrcpf[x] * i))
		x = x + 1;
	}
	let x1 = soma1 % 11;
	if (x1 < 2) {
		x1 = 0;
	}
	else {
		x1 = 11 - x1;
	}
	//Parte do digito de verificação 2
	x = 0
	for (i = 11; i > 2; i--) {
		soma2 = (soma2 + (arrcpf[x] * i))
		x = x + 1;
	}
	soma2 = soma2 + (x1 * 2)
	x2 = soma2 % 11

	if (x2 < 2) {
		x2 = 0;
	}
	else {
		x2 = 11 - x2;
	}
	x = 0
	//Verificação se todos são iguais
	for (i = 1; i < 11; i++) {
		if (arrcpf[0] == arrcpf[i]) {
			x = x + 1
		}
	}
	if (x == 10) {
		resultado.innerHTML='CPF com todos os números iguais não é valido';
		main.cpf.focus();
		return false;
	}
	//Verificação do CPF
	else if (x1 == arrcpf[9] && x2 == arrcpf[10]) {
		alert('O CPF \u00e9 valido');
	} else {
		alert('O CPF n\u00e3o \u00e9 valido!');
		alert('O digito de verifica\u00e7\u00e3o correto do CPF \u00e9: ' + x1 + x2)
	}
}