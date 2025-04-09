// Declarar variaveis
let attempts = 0;
let randomNum = Math.floor(Math.random() * 100 + 1);

const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const hint = document.getElementById("hint");
const attemptsText = document.getElementById("attempts");

// Lista de eventos
submit.addEventListener("click", checkGuess);

function checkGuess() {
    const userValue = Number(guess.value);
    attempts++;

    // Conditionais
    if(userValue === randomNum) {
        hint.textContent =
        "Parabéns, você adivinhou!";
    } else if (userValue < randomNum) {
        hint.textContent = "muito baixo! tente de novo.";
    } else {
        hint.textContent = "muito alto! tente de novo.";
    }

    attemptsText.textContent = "Tentativas:" + attempts;
}