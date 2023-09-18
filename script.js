const errorContainer = document.getElementById('errorContainer');
const adviceParent = document.querySelector('.advice');
const adviceHeader = document.querySelector('.advice-header');
const dice = document.querySelector('.dice');

const showAdvice = async () => {
    try {
        // Clears any previous error message
        errorContainer.textContent = '';
        errorContainer.style.paddingBottom = '0';

        const url = 'https://api.adviceslip.com/advice';
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error('Failed to fetch advice');
        }

        const data = await res.json(); 
        const advice = data.slip.advice;
        const adviceId = data.slip.id;

        adviceParent.innerHTML = `&ldquo;${advice}&rdquo;`;
        adviceHeader.textContent = `ADVICE #${adviceId}`;
    } catch (error) {
        // Displays error message
        errorContainer.innerHTML = `An error occurred: ${error.message}`;
        errorContainer.style.paddingBottom = '3rem';
    }
};

dice.addEventListener('click', showAdvice);
document.addEventListener('DOMContentLoaded', showAdvice); 