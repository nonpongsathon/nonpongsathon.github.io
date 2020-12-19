const currency1 = document.querySelector('#currency1');
const currency2 = document.querySelector('#currency2');
const amount1 = document.querySelector('#amount1');
const amount2 = document.querySelector('#amount2');
const rateText = document.querySelector('#rate');
const btn = document.querySelector('#btn');

currency1.addEventListener('change', calculateMoney);
currency2.addEventListener('change', calculateMoney);
amount1.addEventListener('input', calculateMoney);
amount2.addEventListener('input', calculateMoney);
btn.addEventListener('click', swapCurrency);

function calculateMoney() {
    const one = currency1.value;
    const two = currency2.value;
    let url = `https://api.exchangerate-api.com/v4/latest/${one}`;
    fetch(url).then(response => response.json()).then(data => {
        let rate = data.rates[two];
        amount2.value = (amount1.value * rate).toFixed(2);
        rateText.innerText = `1 ${one} = ${rate}${two}`;

    })
}

function swapCurrency() {
    let temp = currency1.value;
    currency1.value = currency2.value;
    currency2.value = temp;
    calculateMoney();
}
