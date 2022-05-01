'use strict';

class ModalContainer {
	constructor() {}
	printModal(strModalText) {
		console.log('for Test');
		const divModalContainer = document.createElement(`div`);
		divModalContainer.setAttribute('class', 'divModalContainer');
		const buttonCloseButton = document.createElement('button');
		buttonCloseButton.setAttribute('class', 'buttonCloseButton');
		const iconCloseButton = document.createElement('i');
		iconCloseButton.setAttribute('class', 'xi-close-min');
		iconCloseButton.classList.add('iconCloseButton');
		iconCloseButton.classList.add('xi-3x');
		const spanModalText = document.createElement('span');
		spanModalText.classList.add('spanModalText');
		document.querySelector('body').appendChild(divModalContainer);
		divModalContainer.appendChild(buttonCloseButton);
		buttonCloseButton.appendChild(iconCloseButton);
		divModalContainer.appendChild(spanModalText);
		spanModalText.innerHTML = strModalText;
		this.deleteModal();
	}
	deleteModal() {
		document.querySelector('.buttonCloseButton').addEventListener('click', () => {
			document.querySelector('body').removeChild(document.querySelector('.divModalContainer'));
		});
	}
}

class ObjDecimalConverter extends ModalContainer {
	constructor() {
		super();
	}
	// start binaryToDecimal //
	convertingBinaryToDecimal(inputGetDecimal) {
		const arrBinary = inputGetDecimal.split('').reverse();
		let i = 0;
		let numResult = 0;
		while (i < arrBinary.length) {
			numResult += parseInt(arrBinary[i] * Math.pow(2, i));
			i++;
		}
		return numResult;
	}
	// *** end binaryToDecimal *** //

	// start octalToDecimal //
	convertingOctalToDecimal(inputGetDecimal) {
		const arrOctal = inputGetDecimal.split('').reverse();
		let i = 0;
		let numResult = 0;
		while (i < arrOctal.length) {
			numResult += arrOctal[i] * Math.pow(8, i);
			i++;
		}
		return numResult;
	}
	// *** end octalToDecimal *** //

	// start HexaDecimalToDecimal //
	convertingHexaDecimalToDecimal(inputGetDecimal) {
		const arrHexaDecimal = inputGetDecimal.split('').reverse();
		let i = 0;
		let numResult = 0;
		let convertedNumber = 0;
		const regEx = /[0-9]/;
		while (i < arrHexaDecimal.length) {
			convertedNumber = 0;
			if (!regEx.test(arrHexaDecimal[i])) {
				switch (arrHexaDecimal[i]) {
					case 'A':
						convertedNumber = 10;
						break;
					case 'B':
						convertedNumber = 11;
						break;
					case 'C':
						convertedNumber = 12;
						break;
					case 'D':
						convertedNumber = 13;
						break;
					case 'E':
						convertedNumber = 14;
						break;
					case 'F':
						convertedNumber = 15;
					case 'a':
						convertedNumber = 10;
						break;
					case 'b':
						convertedNumber = 11;
						break;
					case 'c':
						convertedNumber = 12;
						break;
					case 'd':
						convertedNumber = 13;
						break;
					case 'e':
						convertedNumber = 14;
						break;
					case 'f':
						convertedNumber = 15;
						break;
				}
			} else {
				convertedNumber = parseInt(arrHexaDecimal[i]);
			}
			numResult += convertedNumber * Math.pow(16, i);
			i++;
		}
		return numResult;
	}
	// *** end HexaDecimalToDecimal *** //

	// start DecimalToBinary //
	convertingDecimalToBinary(inputGetDecimal) {
		let strResult = '';
		while (Number(inputGetDecimal) !== 0) {
			strResult = (inputGetDecimal % 2) + strResult;
			inputGetDecimal = Math.floor(inputGetDecimal / 2);
		}
		return strResult;
	}
	// *** end DecimalToBinary *** //

	// start DecimalToOctal //
	convertingDecimalToOctal(inputGetDecimal) {
		let strResult = '';
		while (Number(inputGetDecimal) != 0) {
			strResult = (inputGetDecimal % 8) + strResult;
			inputGetDecimal = Math.floor(inputGetDecimal / 8);
		}
		return strResult;
	}
	// *** end DecimalToOctal *** //

	// start DecimalToHexaDecimal //
	convertingDecimalToHexaDecimal(inputGetDecimal) {
		const arrDecimal = [];
		while (Number(inputGetDecimal) !== 0) {
			arrDecimal.unshift(inputGetDecimal % 16);
			inputGetDecimal = Math.floor(inputGetDecimal / 16);
		}
		// if (Number(this.inputGetDecimalContainer.value) == 0) {
		// }

		let i = 0;
		let strResult = '';
		let convertedNumber = '';
		while (i < arrDecimal.length) {
			convertedNumber = '';
			if (arrDecimal[i] > 9) {
				switch (arrDecimal[i]) {
					case 10:
						convertedNumber = 'A';
						break;
					case 11:
						convertedNumber = 'B';
						break;
					case 12:
						convertedNumber = 'C';
						break;
					case 13:
						convertedNumber = 'D';
						break;
					case 14:
						convertedNumber = 'E';
						break;
					case 15:
						convertedNumber = 'F';
						break;
				}
			} else {
				convertedNumber = arrDecimal[i];
			}
			strResult += convertedNumber;
			i++;
		}
		return strResult;
	}
	// *** end DecimalToHexaDecimal *** //

	// start BinaryToOctal //
	convertingBinaryToOctal(paraMethod) {
		return paraMethod;
	}
	// *** end BinaryToOctal *** //

	// start BinaryToHexaDecimal //
	convertingBinaryToHexaDecimal(parMethod) {
		return parMethod;
	}
	// *** end BinaryToHexaDecimal *** //

	// start octalToBinary //
	convertingOctalToBinary(paraMethod) {
		return paraMethod;
	}
	// *** end octalToBinary *** //

	// start octalToHexaDecimal //
	convertingOctalToHexaDecimal(paraMethod) {
		return paraMethod;
	}
	// *** end octalToHexaDecimal *** //

	// start HexaDecimalToBinary //
	convertingHexaDecimalToBinary(paraMethod) {
		return paraMethod;
	}
	// *** end HexaDecimalToBinary *** //

	// start HexaDecimalToOctal //
	convertingHexaDecimalToOctal(paraMethod) {
		return paraMethod;
	}
	// *** end HexaDecimalToOctal *** //
	// start clickEvent //
	clickConvertEvent() {
		document.querySelector('.buttonConvert').addEventListener('click', () => {
			const inputPrintDecimalContainer = document.querySelector('.inputPrintDecimalContainer');
			const inputGetDecimalContainer = document.querySelector('.inputGetDecimalContainer');
			let strFirstSelectValue = document.querySelector('.selectFirstDecimalConverterContainer').value;
			let strSecondSelectValue = document.querySelector('.selectSecondDecimalConverterContainer').value;
			switch (strFirstSelectValue) {
				case '2진수':
					try {
						const regEx01 = /[0-1]+/g;
						if (inputGetDecimalContainer.value.match(regEx01)[0] == inputGetDecimalContainer.value) {
							switch (strSecondSelectValue) {
								case '2진수':
									inputPrintDecimalContainer.value = inputGetDecimalContainer.value;
									break;
								case '8진수':
									inputPrintDecimalContainer.value = this.convertingBinaryToOctal(this.convertingDecimalToOctal(this.convertingBinaryToDecimal(inputGetDecimalContainer.value)));
									break;
								case '10진수':
									inputPrintDecimalContainer.value = this.convertingBinaryToDecimal(inputGetDecimalContainer.value);
									break;
								case '16진수':
									inputPrintDecimalContainer.value = this.convertingBinaryToHexaDecimal(this.convertingDecimalToHexaDecimal(this.convertingBinaryToDecimal(inputGetDecimalContainer.value)));
									break;
							}
						} else {
							console.log('hello');
							super.printModal('2진수 값을 넣어주세요.');
						}
					} catch (error) {
						inputGetDecimalContainer.value = '';
						super.printModal('2진수 값을 넣어주세요.');
						console.log(error);
					}
					break;
				case '8진수':
					try {
						const regEx02 = /[0-7]+/g;
						if (inputGetDecimalContainer.value.match(regEx02)[0] == inputGetDecimalContainer.value) {
							switch (strSecondSelectValue) {
								case '2진수':
									inputPrintDecimalContainer.value = this.convertingOctalToBinary(this.convertingDecimalToBinary(this.convertingOctalToDecimal(inputGetDecimalContainer.value)));
									break;
								case '8진수':
									inputPrintDecimalContainer.value = inputGetDecimalContainer.value;
									break;
								case '10진수':
									inputPrintDecimalContainer.value = this.convertingOctalToDecimal(inputGetDecimalContainer.value);
									break;
								case '16진수':
									inputPrintDecimalContainer.value = this.convertingOctalToHexaDecimal(this.convertingDecimalToHexaDecimal(this.convertingOctalToDecimal(inputGetDecimalContainer.value)));
									break;
							}
						} else {
							super.printModal('8진수 값을 넣어주세요.');
						}
					} catch (error) {
						inputGetDecimalContainer.value = '';
						super.printModal('8진수 값을 넣어주세요.');
						console.log(error);
					}
					break;
				case '10진수':
					try {
						const regEx03 = /^[\d]+$/gi;
						if (inputGetDecimalContainer.value.match(regEx03)[0] == inputGetDecimalContainer.value) {
							switch (strSecondSelectValue) {
								case '2진수':
									inputPrintDecimalContainer.value = this.convertingDecimalToBinary(inputGetDecimalContainer.value);
									break;
								case '8진수':
									inputPrintDecimalContainer.value = this.convertingDecimalToOctal(inputGetDecimalContainer.value);
									break;
								case '10진수':
									inputPrintDecimalContainer.value = inputGetDecimalContainer.value;
									break;
								case '16진수':
									inputPrintDecimalContainer.value = this.convertingDecimalToHexaDecimal(inputGetDecimalContainer.value);
									break;
							}
						} else {
							super.printModal('10진수 값을 넣어주세요.');
						}
					} catch (error) {
						inputGetDecimalContainer.value = '';
						super.printModal('10진수 값을 넣어주세요.');
						console.log(error);
					}
					break;
				case '16진수':
					try {
						const regEx04 = /[0-9a-fA-F]+/gi;
						if (inputGetDecimalContainer.value.match(regEx04)[0] == inputGetDecimalContainer.value) {
							switch (strSecondSelectValue) {
								case '2진수':
									inputPrintDecimalContainer.value = this.convertingHexaDecimalToBinary(this.convertingDecimalToBinary(this.convertingHexaDecimalToDecimal(inputGetDecimalContainer.value)));
									break;
								case '8진수':
									inputPrintDecimalContainer.value = this.convertingHexaDecimalToOctal(this.convertingDecimalToOctal(this.convertingHexaDecimalToDecimal(inputGetDecimalContainer.value)));
									break;
								case '10진수':
									inputPrintDecimalContainer.value = this.convertingHexaDecimalToDecimal(inputGetDecimalContainer.value);
									break;
								case '16진수':
									inputPrintDecimalContainer.value = inputGetDecimalContainer.value;
									break;
							}
						} else {
							super.printModal('16진수 값을 넣어주세요.');
						}
					} catch (error) {
						inputGetDecimalContainer.value = '';
						super.printModal('16진수 값을 넣어주세요.');
						console.log(error);
					}
					break;
			}
		});
	}
	// *** end clickEvent *** //
	main() {
		this.clickConvertEvent();
	}
}
const objDecimalConverter = new ObjDecimalConverter();
objDecimalConverter.main();
