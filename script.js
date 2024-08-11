function convert() {
    var temperature = parseFloat(document.getElementById("inputTemp").value);
    var conversionType = document.getElementById("conversionType").value;
    var resultElement = document.getElementById("result");

    if (conversionType === "celsiusToFahrenheit") {
        var result = (temperature * 9 / 5) + 32;
        resultElement.textContent = temperature + "°C is equal to " + result + "°F";
    } else if (conversionType === "fahrenheitToCelsius") {
        var result = (temperature - 32) * 5 / 9;
        resultElement.textContent = temperature + "°F is equal to " + result + "°C";
    }
}


