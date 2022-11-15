import { weatherDisplay } from "./weatherDisplay";

function form() {
  // Event handler for submit button
  function submitEventHandler() {
    if (isValid() === true) {
      const WeatherDisplay = new weatherDisplay();
      const panel = document.getElementById("panel");
      if (panel) {
        WeatherDisplay.clearDisplay();
      }
      WeatherDisplay.getWeather();
    } else {
      return;
    }
  }
  // Event handler for reset button
  function resetEventListener() {
    const main = document.querySelector("main");
    const panel = document.querySelector("section");
    const error = document.getElementById("error-container");
    if (panel) {
      main.removeChild(panel);
    }
    if (error) {
      main.removeChild(error);
    }
  }

  // Build the form
  function build() {
    const form = document.createElement("form");
    const header = document.createElement("h4");
    header.innerText = "Get weather";
    form.appendChild(header);
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
    inputCity.required = true;
    formControl.appendChild(inputCity);

    const formControl2 = document.createElement("div");
    formControl2.classList.add("form-control");
    form.appendChild(formControl2);

    const radioCels = document.createElement("input");
    radioCels.setAttribute("type", "radio");
    radioCels.setAttribute("name", "units");
    radioCels.setAttribute("id", "cels");
    radioCels.setAttribute("value", "Celsius");
    radioCels.required = true;
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

  // Validates the form input
  function isValid() {
    let cityValue = document.getElementById("city").value;
    let unitValue;
    let radioCels = document.getElementById("cels");
    let fahrCels = document.getElementById("fahr");
    const regex = /^([^0-9]*)$/g;

    if (radioCels.checked) {
      unitValue = "c";
    } else if (fahrCels.checked) {
      unitValue = "f";
    }
    if (cityValue == "" || unitValue == undefined) {
      let errorMsg = "Please fill in all fields";
      console.error(errorMsg);
      return errorMsg;
    }
    if (!regex.test(cityValue)) {
      let errorMsg = "City names cannot contain numbers";
      console.error(errorMsg);
      return errorMsg;
    }
    return true;
  }

  return {
    build: build
  };
}

export { form };
