const mode = document.querySelector('#mode');
const icon = document.querySelector('.fa-sun');
const switchToggle = document.querySelector(".mode-switch");
const imageCurrencyExchange = document.querySelector('#image-currency-exchange');
const imageIncomeExpense = document.querySelector('#image-income-expense');

switchToggle.addEventListener('change', swapMode);

function swapMode(e) {
    if (e.target.checked) {
        darkMode('dark');
    } else {
        lightMode('light');
    }
}

function darkMode(mode) {
    document.documentElement.setAttribute('theme', 'dark');
    mode.innerText = 'โหมดกลางคืน';
    icon.classList.replace('fa-sun', 'fa-moon');
    imageCurrencyExchange.src = `/image/undraw_Bitcoin_P2P_${mode}.svg`;
    imageIncomeExpense.src = `/image/undraw_Payments_${mode}.svg`;

}

function lightMode(mode) {
    document.documentElement.setAttribute('theme', 'light');
    mode.innerText = 'โหมดกลางวัน';
    icon.classList.replace('fa-moon', 'fa-sun');
    imageCurrencyExchange.src = `/image/undraw_Bitcoin_P2P_${mode}.svg`;
    imageIncomeExpense.src = `/image/undraw_Payments_${mode}.svg`;

}
