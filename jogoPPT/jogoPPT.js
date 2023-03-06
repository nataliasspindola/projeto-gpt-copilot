let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let result = document.getElementById("result");
let wins = 0;
let losses = 0;
let ties = 0;

rock.addEventListener("click", function() {
     play("rock");
});

paper.addEventListener("click", function() {
    play("paper");
});

scissors.addEventListener("click", function() {
    play("scissors");
});

// Play the game
function play(playerChoice) {
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Determine the winner
    if (playerChoice == computerChoice) {
        result.innerHTML = "Empate!";
        ties++;
        document.getElementById("ties").innerHTML = ties;
    } else if ((playerChoice == "rock" && computerChoice == "scissors") || 
            (playerChoice == "paper" && computerChoice == "rock") ||
            (playerChoice == "scissors" && computerChoice == "paper")) {
        result.innerHTML = "Você ganhou!";
        wins++;
        document.getElementById("wins").innerHTML = wins;
    } else {
        result.innerHTML = "Você perdeu!";
        losses++;
        document.getElementById("losses").innerHTML = losses;
    }

    // Show images
    let playerImg = document.createElement("img");
    playerImg.src = getImgSrc(playerChoice);
    let computerImg = document.createElement("img");
    computerImg.src = getImgSrc(computerChoice);
    let imagesDiv = document.querySelector("div");
    imagesDiv.innerHTML = "";
    imagesDiv.appendChild(playerImg);
    imagesDiv.appendChild(computerImg);
}

function reiniciarJogo() {
    wins = 0;
    losses = 0;
    ties = 0;
    document.getElementById("wins").innerHTML = wins;
    window.location.reload();
}

function getImgSrc(choice) {
    if (choice == "rock") {
        return "/jogoPPT/imgPPT/pedra.png";
    } else if (choice == "paper") {
        return "/jogoPPT/imgPPT/papel.png";
    } else if (choice == "scissors") {
        return "/jogoPPT/imgPPT/tesoura.png";
    }
}