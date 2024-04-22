const toggleCheckbox = document.getElementById('toggle');
const annuallyPrices = document.getElementById('annually-prices');
const monthlyPrices = document.getElementById('monthly-prices');

toggleCheckbox.addEventListener('change', function() {
    if (toggleCheckbox.checked) {
        annuallyPrices.classList.add('hidden');
        monthlyPrices.classList.remove('hidden');
    } else {
        annuallyPrices.classList.remove('hidden');
        monthlyPrices.classList.add('hidden');
    }
});
