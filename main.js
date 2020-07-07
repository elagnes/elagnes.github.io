function readInput(){
    let foodArray = [];
    let pizzaInput = document.querySelector("input[id='value1']");
    foodArray.push(pizzaInput);
    let hamburgerInput = document.querySelector("input[id='value2']");
    foodArray.push(hamburgerInput);
    let spagettiInput = document.querySelector("input[id='value3']");
    foodArray.push(spagettiInput);
    let dessertInput = document.querySelector("input[id='value4']");
    foodArray.push(dessertInput);
    
    let amount = validateNumber(foodArray);

    let showAmount = document.querySelector("span.show-amount");    
    showAmount.innerHTML = amount;
    
    //let hamburgerAmount = parseInt(hamburgerInput.value);
    //hamburgerAmount = isNaN(hamburgerAmount) ? 0 : hamburgerAmount;
    //let spagettiAmount = parseInt(spagettiInput.value);
    //spagettiAmount = isNaN(spagettiAmount) ? 0 : spagettiAmount;
    //let dessertAmount = parseInt(dessertInput.value);
    //dessertAmount = isNaN(dessertAmount) ? 0 : dessertAmount;

    
}

function validateNumber(foodArray){
    let amount = 0;
    for (var i=0; i < foodArray.length; i++){
        amountNumber = foodArray[i];
        amountNumber = parseInt(amountNumber.value);       
        amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
        amountNumber = validateInput(amountNumber);
        amount += amountNumber;
    }
    amount = calcAmount(amount);
    return amount;
}

function validateInput(amountNumber){
    if (amountNumber > 10){
        alert("Maximum 10 db terméket vásárolhat!")
    }else if (amountNumber < 0){
        alert("Érvénytelen adat!")
    }else{
        return amountNumber;
    }
}

function calcAmount(amount){
    //return (pizzaAmount * 1200) + (hamburgerAmount * 1000) + (spagettiAmount * 1200) + (dessertAmount * 700);
    return (amount*1200);
}