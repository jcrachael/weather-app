import style from './style.css';
import getWeather from './getWeather'

// On form submit, display the weather
const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    let cityInput = document.getElementById('city').value;
    getWeather(cityInput);
})

// On clear, remove the previous panel
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', function() {
    const panel = document.getElementById('panel');
    if (panel) {
        panel.classList.add('hidden');
    }
})
