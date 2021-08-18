'use strict';

const form = document.querySelector('.tip-calc__form');
const billValueInput = document.querySelector('#bill-value');
const tipPercentInput = document.querySelector('#tip-value');
const resultElements = [...document.querySelectorAll('.result')];
const tipSpan = document.querySelector('.tip-calc__tip');
const totalSpan = document.querySelector('.tip-calc__total');

const calculateTip = function (billValue, tipPercent) {
  return billValue * tipPercent;
};

const calculateTotal = function (billValue, tipValue) {
  return billValue + tipValue;
};

const removeHiddenClass = function () {
  resultElements.forEach((element) => element.classList.remove('hidden'));
};

const displayResults = function (tip, total) {
  tipSpan.textContent = `$${tip}`;
  totalSpan.textContent = `$${total}`;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const billValue = +billValueInput.value;
  const tipPercent = +tipPercentInput.value / 100;

  const tip = calculateTip(billValue, tipPercent);
  const total = calculateTotal(billValue, tip);

  displayResults(tip, total);
  removeHiddenClass();
});
