var celsiusArray = [0, 13, 17, 24, 30, -5, 18];
var offerArray = ["forró csoki", "meleg tea", "finom süti", "fagyi", "jéghideg limonádé"];
var maxCelsiusArray = [0, 15, 20, 25, 60];



function readWeatherInput() {
    let day = document.getElementById("weatherSelect").value;
    let celsius = findCelsius(day, celsiusArray);
    let showWheather = document.querySelector("span.show-weather");
    showWheather.innerHTML = celsius;
    let offerNumber = findOfferNumber(celsius, maxCelsiusArray);
    let showOffer = document.querySelector("span.show-offer");
    showOffer.innerHTML = findOffer(offerNumber, offerArray);
    let showMinTemperature = document.querySelector("span.show-min-temperature");
    showMinTemperature.innerHTML = calculateMinTemperature(celsiusArray);
    let showMaxTemperature = document.querySelector("span.show-max-temperature");
    showMaxTemperature.innerHTML = calculateMaxTemperature(celsiusArray);
    let showAverageTemperature = document.querySelector("span.show-average-temperature");
    showAverageTemperature.innerHTML = calculateAverageTemperature(celsiusArray);
}

function findCelsius(day, celsiusArray) {
    for (let i = 0; i < day; i++) {
        celsius = celsiusArray[i];
    }
    return celsius;
}

function findOfferNumber(celsius, maxCelsiusArray) {
    for (let i = 0; i < maxCelsiusArray.length; i++) {
      if (celsius < maxCelsiusArray[i]){
        offerNumber = i;
        break;
      }      
    }
    return offerNumber;
    
}

function findOffer(offerNumber, offerArray){
    offer = offerArray[offerNumber];
    return offer;
}

function calculateMinTemperature(celsiusArray){
    let minTemperature = celsiusArray[0];
    for (let i = 0; i < celsiusArray.length; i++){
        let nextDegree = celsiusArray[i];
        if (nextDegree < minTemperature){
            minTemperature = nextDegree;
        }
    }
    return minTemperature;
}

function calculateMaxTemperature(celsiusArray){
    let maxTemperature = celsiusArray[0];
    for (let i = 0; i < celsiusArray.length; i++){
        let nextDegree = celsiusArray[i];
        if (nextDegree > maxTemperature){
            maxTemperature = nextDegree;
        }
    }
    return maxTemperature;
}

function calculateAverageTemperature(celsiusArray){
    let total = 0;
    for (let i=0; i < celsiusArray.length; i++){
        let nextDegree = celsiusArray[i];
        total += nextDegree;
    }
    let averageTemperature = total / 7;
    return averageTemperature.toFixed();
}