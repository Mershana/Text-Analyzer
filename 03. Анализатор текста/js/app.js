"use strict";

// №1⊗jsPrStTA
// Дан textarea. Пусть в него вводится текст. Сделайте так, чтобы по потери фокуса под текстареа вывелось сообщение о том, сколько в этом тексте слов.
/* №2⊗jsPrStTA
Модифицируйте предыдущую задачу так, чтобы также вывелось сообщение о том, сколько в тексте символов. */
/* №3⊗jsPrStTA
Модифицируйте предыдущую задачу так, чтобы также вывелось сообщение о том, сколько в тексте символов за вычетом пробелов. */
/* №4⊗jsPrStTA
Модифицируйте предыдущую задачу так, чтобы также вывелось сообщение о процентном содержании каждого символа в тексте. */
// №5⊗jsPrStTA
// В предыдущих задачах мы сделали так, что для нашего текста выводятся 4 параметра. Сделайте 4 чекбокса, которые будут регулировать, какие именно параметры показывать.

let textarea = document.querySelector("textarea");
let wordСount = document.querySelector("#wordСount");
let characterNumber = document.querySelector("#characterNumber");
let characterNumberNoSpaces = document.querySelector("#characterNumberNoSpaces");
let procent = document.querySelector("#procent");

let elem1 = document.querySelector("#elem1");
let elem2 = document.querySelector("#elem2");
let elem3 = document.querySelector("#elem3");
let elem4 = document.querySelector("#elem4");

/* textarea.addEventListener('blur', function(){
	const podschet =  textarea.value.split(' ');
	wordСount.textContent = podschet.length;
	characterNumber.textContent = textarea.value.length;
	const noSpaces = textarea.value.split('').filter(c => c != ' ').length;
	characterNumberNoSpaces.textContent = noSpaces;

	//мои попытки
	let result = {};

	for (let i = 0; i < podschet.length; i++){
		let a = podschet[i];
		if (result[a] != undefined){
			++result[a];
		} else {
			result[a] = 1;
		}
	}

	for (let key in result){
		propcent.textContent = 'символ ' + key + ' == ' + result[key] + ' раз(а)'
	}
}); */

elem1.addEventListener("click", function func() {
  if (elem1.checked === true) {
    const podschet = textarea.value.split(" ");
    wordСount.textContent = "в данном тексте " + podschet.length + " слова";
  } else if (elem1.checked === false) {
    wordСount.textContent = "";
  }
});

elem2.addEventListener("click", function func() {
  if (elem2.checked === true) {
    characterNumber.textContent = "в данном тексте " + textarea.value.length + " символов";
  } else if (elem2.checked === false) {
    characterNumber.textContent = "";
  }
});

elem3.addEventListener("click", function func() {
  if (elem3.checked === true) {
    const noSpaces = textarea.value.split("").filter((c) => c != " ").length;
    characterNumberNoSpaces.textContent = "в данном тексте " + noSpaces + " символов за вычетом пробелов";
  } else if (elem3.checked === false) {
    characterNumberNoSpaces.textContent = "";
  }
});

elem4.addEventListener("click", function func() {
  if (elem4.checked === true) {
    let symbol = {};
    let res = [];

    for (let leter of textarea.value) {
      leter = leter.toLowerCase();
      if (symbol[leter]) {
        symbol[leter]++;
      } else {
        symbol[leter] = 1;
      }
    }
    for (let key in symbol) {
      res.push(key + ": " + ((100 * symbol[key]) / textarea.value.length).toFixed(3) + "%");
    }
    procent.innerHTML = res.join("<br>");
  } else if (elem4.checked === false) {
    procent.innerHTML = "";
  }
});
