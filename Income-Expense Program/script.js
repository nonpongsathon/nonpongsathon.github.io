const balance = document.querySelector('#balance');
const moneyPlus = document.querySelector('#money-plus');
const moneyMinus = document.querySelector('#money-minus');
const list = document.querySelector('#list');
const form = document.querySelector('#form');
const text = document.querySelector('#text');
const amount = document.querySelector('#amount');

let transaction = [];

function init() {
    list.innerHTML = '';
    transaction.forEach(addDataToList);
    calculateBalance();

}

function addDataToList(data) {
    const sign = data.amount > 0 ? '+' : '-';
    const status = data.amount > 0 ? 'plus' : 'minus';
    let item = document.createElement('li');
    item.classList.add(status);
    item.innerHTML = `<p>${data.text}</p>
    <p>${sign} ${Math.abs(data.amount)}</p>
    <button onclick = 'removeData(${data.id})'>X</button>`
    list.appendChild(item);
}

function calculateBalance() {
    const amountOnly = transaction.map(data => data.amount);

    const total = amountOnly.reduce((result, item) => (result += item), 0).toFixed(2);

    const positiveNumber = amountOnly.filter(item => item > 0);
    const income = positiveNumber.reduce((result, item) => (result += item), 0).toFixed(2);

    const negativeNumber = amountOnly.filter(item => item < 0);
    const expense = (negativeNumber.reduce((result, item) => (result += item), 0) * -1).toFixed(2);

    balance.innerText = '฿ ' + formatNumber(total);
    moneyPlus.innerText = '฿ ' + formatNumber(income);
    moneyMinus.innerText = '฿ ' + formatNumber(expense);
}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function assignId() {
    return Math.floor(Math.random() * 1000000000);
}

form.addEventListener('submit', addTransaction);

function addTransaction(e) {
    e.preventDefault();
    if (text.value.trim() === '' || amount.value.trim() === '') {
        alert('กรุณาระบุชื่อธุรกรรมและจำนวนเงินให้ถูกต้อง');
    } else {
        const newTransaction = {
            id: assignId(),
            text: text.value,
            amount: +amount.value
        }
        transaction.push(newTransaction);
        addDataToList(newTransaction);
        calculateBalance();
        text.value = '';
        amount.value = '';
    }
}

function removeData(id) {
    transaction = transaction.filter(data => data.id !== id);
    init();
}


init();