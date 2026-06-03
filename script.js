// selezione degli elementi
const pl1 = document.querySelector("#player1");
const pl2 = document.querySelector("#player2");
const winner = document.querySelector("#startText")
const btn = document.querySelector("#btnDadi");
const dice1 = document.querySelector(".dice1");
const dice2 = document.querySelector(".dice2");

// creazione variabile globale dalla quale si cercheranno i numeri
const numeriDadi = [1, 2, 3, 4, 5, 6];



// eventListener per il bottone
btn.addEventListener("click", function(e) {

    // ricerca del numero random tra quelli presenti nell'array
    const numeroRandom1 = Math.floor(Math.random() * numeriDadi.length);
    const numeroRandom2 = Math.floor(Math.random() * numeriDadi.length);

    // assegnazione dei valori random ai giocatori commentato cosi non si aggiorna il counter numerico visibile
    // pl1.textContent = numeriDadi[numeroRandom1];
    // pl2.textContent = numeriDadi[numeroRandom2];
    
    // cambio immagini sulla base del numero casuale dell'array
    dice1.src = `./img/dice${numeriDadi[numeroRandom1]}.png`;
    dice2.src = `./img/dice${numeriDadi[numeroRandom2]}.png`;

    // richiamo condizione di verifica
    verifica(numeroRandom1, numeroRandom2);
});


// condizione di verifica
function verifica(numeroRandom1, numeroRandom2){
    if (numeroRandom1 > numeroRandom2){
        winner.textContent = "Vince il primo giocatore";
    } else if (numeroRandom1 < numeroRandom2){
        winner.textContent = "Vince il secondo giocatore";
    } else {
        winner.textContent = "Pareggio";
    }
}