var walletAmount = 100;
let driverWinner = "";

function init() {
    const car = document.querySelectorAll(".car");
    car.forEach(function(car) {
        car.style.transform = "translate(" + 20 + "px, " + 20 + "px)"
    })
    document.getElementById("walletValue").innerHTML = "Valor da carteira: R$" + walletAmount;
} 

function startRace() {
    const cars = document.querySelectorAll(".car");
    driverWinner = "";
    cars.forEach(function(car) {
        moveCars(car);
    })
}

function moveCars(car) {
    const myInterval = setInterval(myTimer, 100);
    const raceTrackLimit = document.querySelector(".race-track").offsetWidth - car.offsetWidth
    let posX = 20;
    var podium = [];

    function myTimer() {
        if (posX >= raceTrackLimit) {
            myStop(myInterval);
            podium.push(car.id)
            if (!driverWinner) {
                driverWinner = podium[0];
                alert('O vencedor da corrida é ' + driverWinner);

                var betAmountInput = document.getElementById("amountInput");
                var betAmount = betAmountInput.value;

                var select = document.getElementById("drivers-list");
                var driverSelected = select.options[select.selectedIndex].value;

                console.log(driverWinner);
                console.log(driverSelected);
                console.log(betAmount);
                if (driverWinner == driverSelected) {
                    var betProfit = betAmount * 2;
                    walletAmount += betProfit;
                    updateWalletAmount();
                    console.log("Retorno da aposta: " + betProfit)
                    return betProfit;
                } else {
                    console.log("Errou aposta")
                }
            }
        }
        posX += Math.ceil(Math.random() * 10);
        car.style.transform = "translate(" + posX + "px, " + 20 + "px)"

    }
}

function myStop(raceInteval) {
    clearInterval(raceInteval);
}

function bet() {
    var betAmountInput = document.getElementById("amountInput");
    var betAmount = betAmountInput.value;
    
    
    if (isNaN(betAmount) || betAmount <= 0 || betAmount > walletAmount) {
        alert('Aposta inválida!');
        return;
    }

    walletAmount -= betAmount;
    updateWalletAmount();
    
    startRace();
}

function updateWalletAmount() {
    document.getElementById("walletValue").innerHTML = "Valor da carteira: R$" + walletAmount;
}
