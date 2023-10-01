
document.addEventListener('DOMContentLoaded', function () {

    const productImages = document.querySelectorAll('.product-1-image');

   
    productImages.forEach(function (productImage) {
        productImage.addEventListener('mouseenter', function () {
            const imgSwap1 = this.querySelector('.img-swap1');
            const imgSwap2 = this.querySelector('.img-swap2');
            
            imgSwap1.style.display = 'none';
            imgSwap2.style.display = 'block';
        });

        productImage.addEventListener('mouseleave', function () {
            const imgSwap1 = this.querySelector('.img-swap1');
            const imgSwap2 = this.querySelector('.img-swap2');
            
            imgSwap1.style.display = 'block';
            imgSwap2.style.display = 'none';
        });
    });
});

function updateCountdown() {
    const daysElement = document.querySelector('.dayscount');
    const hoursElement = document.querySelector('.hourscount');
    const minutesElement = document.querySelector('.minutescount');
    const secondsElement = document.querySelector('.secondscount');

    
    const now = new Date();

   
    const targetDate = new Date(now);
    targetDate.setDate(targetDate.getDate() + 14);
    targetDate.setHours(23, 59, 59, 0);

    
    const timeRemaining = targetDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
}

setInterval(updateCountdown, 1000);

window.onload = updateCountdown;

