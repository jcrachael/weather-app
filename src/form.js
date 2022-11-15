import { weatherDisplay } from "./weatherDisplay";

function form() {
  // Event handler for submit button
  function submitEventHandler() {
    const WeatherDisplay = new weatherDisplay();
    const panel = document.getElementById("panel");
    if (panel) {
      WeatherDisplay.clearDisplay();
    }

    WeatherDisplay.build();
    WeatherDisplay.getWeather();

    WeatherDisplay.updateDisplay();
  }
  // Event handler for reset button
  function resetEventListener() {
    const panel = document.getElementById("panel");
    if (panel) {
      panel.classList.add("hidden");
    }
  }

  // Build the form
  function build() {
    const form = document.createElement("form");
    const formControl = document.createElement("div");
    formControl.classList.add("form-control");
    form.appendChild(formControl);
    const labelCity = document.createElement("label");
    labelCity.setAttribute("for", "city");
    labelCity.innerText = "City:";
    formControl.appendChild(labelCity);
    const inputCity = document.createElement("input");
    inputCity.setAttribute("type", "text");
    inputCity.setAttribute("name", "city");
    inputCity.setAttribute("id", "city");
    inputCity.setAttribute("placeholder", "e.g. Brussels");
    inputCity.setAttribute("required", "true");
    formControl.appendChild(inputCity);

    const formControl2 = document.createElement("div");
    formControl2.classList.add("form-control");
    form.appendChild(formControl2);

    const radioCels = document.createElement("input");
    radioCels.setAttribute("type", "radio");
    radioCels.setAttribute("name", "units");
    radioCels.setAttribute("id", "cels");
    radioCels.setAttribute("value", "Celsius");
    radioCels.setAttribute("required", "true");
    formControl2.appendChild(radioCels);
    const labelCels = document.createElement("label");
    labelCels.setAttribute("for", "cels");
    labelCels.innerText = "Celsius";
    formControl2.appendChild(labelCels);
    const radioFahr = document.createElement("input");
    radioFahr.setAttribute("type", "radio");
    radioFahr.setAttribute("name", "units");
    radioFahr.setAttribute("id", "fahr");
    radioFahr.setAttribute("value", "Fahrenheit");
    formControl2.appendChild(radioFahr);
    const labelFahr = document.createElement("label");
    labelFahr.setAttribute("for", "fahr");
    labelFahr.innerText = "Fahrenheit";
    formControl2.appendChild(labelFahr);

    const formControl3 = document.createElement("div");
    formControl3.classList.add("form-control");
    formControl3.setAttribute("id", "buttons");
    form.appendChild(formControl3);
    const submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("id", "submit");
    const reset = document.createElement("input");
    reset.setAttribute("type", "reset");
    reset.setAttribute("id", "clear");

    submit.addEventListener("click", function (e) {
      e.preventDefault();
      submitEventHandler();
    });

    reset.addEventListener("click", resetEventListener);

    formControl3.appendChild(submit);
    formControl3.appendChild(reset);

    return form;
  }

  return {
    build: build
  };
}

export { form };
