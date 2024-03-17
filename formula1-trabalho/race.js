function init() {
    var walletAmount = 100;
    const car = document.querySelectorAll(".car");
    car.forEach(function(car) {
        car.style.transform = "translate(" + 20 + "px, " + 20 + "px)"
    })
    document.getElementById("walletValue").innerHTML = "Valor da carteira: R$" + walletAmount;
} 

function startRace() {
    const cars = document.querySelectorAll(".car");
    cars.forEach(function(car) {
        moveCars(car);
    })
    var betAmountInput = document.getElementById("amountInput");
    var betAmount = betAmountInput.value

    
    bet(betAmount);
}

function moveCars(car) {
    const myInterval = setInterval(myTimer, 100);
    const raceTrackLimit = document.querySelector(".race-track").offsetWidth - car.offsetWidth
    let posX = 20;

    function myTimer() {
        if (posX >= raceTrackLimit) {
            myStop(myInterval);
            defineWinner(car.id);
        }
        posX += Math.ceil(Math.random() * 10);
        car.style.transform = "translate(" + posX + "px, " + 20 + "px)"
    }
}

function myStop(raceInteval) {
    clearInterval(raceInteval);
}

function defineWinner(carId) {
    let podium = [];
    podium.push(carId);
    podium.forEach(function(element) {
        console.log(element);
    });
}

function bet(betAmount, driver) {
    walletAmount = walletAmount - betAmount;
}
