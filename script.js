document.addEventListener("DOMContentLoaded", function() {
  let userName = '';
  let userWins = 0;
  let computerWins = 0;
  let roundsPlayed = 0;
  let maxRounds = 5;
  
  
  
  
  const usernameSection = document.getElementById("usernameSection");
  const gameSection = document.getElementById("gameSection");
  const userChoiceDisplay = document.getElementById("userChoice");
  const aiChoiceDisplay = document.getElementById("aiChoice");
  const roundResultDisplay = document.getElementById("roundResult");
  const userWinsDisplay = document.getElementById("userWins");
  const computerWinsDisplay = document.getElementById("computerWins");
  const finalResultDisplay = document.getElementById("finalResult");
  const overallWinnerDisplay = document.getElementById("overallWinner");
  const congratsMessageDisplay = document.getElementById("congratsMessage");
  const resetGameButton = document.getElementById("resetGameButton");
  
  
  function startGame() {
      userName = document.getElementById("usernameInput").value;
      if (!userName.trim()) return alert("Please enter a name.");
  
  
      usernameSection.classList.add("d-none");
      gameSection.classList.remove("d-none");
      roundCount = 0;
      userWins = 0;
      computerWins = 0;
      updateScore();
  }
  
  
  // Randomly generate computer's choice
  function getComputerChoice() {
      const choices = ['Rock', 'Paper', 'Scissors'];
      return choices[Math.floor(Math.random() * 3)];
  }
  
  
  // Check who won the round
  function getRoundWinner(userChoice, computerChoice) {
      if (userChoice === computerChoice) return "It's a tie!";
      if (
          (userChoice === 'Rock' && computerChoice === 'Scissors') ||
          (userChoice === 'Paper' && computerChoice === 'Rock') ||
          (userChoice === 'Scissors' && computerChoice === 'Paper')
      ) {
          userWins++;
          return "You win this round!";
      } else {
          computerWins++;
          return "Computer wins this round!";
      }
  }
  
  
  // Update scores on the screen
  function updateScore() {
      userWinsDisplay.textContent = userWins;
      computerWinsDisplay.textContent = computerWins;
  }
  
  
  // Check if the game is over after 5 rounds
  function checkGameOver() {
      if (roundCount >= 5) {
          const winnerMessage = userWins > computerWins ? `${userName} wins the game!` : userWins < computerWins ? "Computer wins the game!" : "It's a tie game!";
          const congratsMessage = userWins > computerWins ? "Congratulations, you won!" : "Better luck next time!";
          overallWinnerDisplay.textContent = winnerMessage;
          congratsMessageDisplay.textContent = congratsMessage;
          finalResultDisplay.classList.remove("d-none");
      }
  }
  
  
  // Reset the game
  function resetGame() {
      userName = '';
      userWins = 0;
      computerWins = 0;
      roundCount = 0;
      userChoiceDisplay.textContent = '';
      aiChoiceDisplay.textContent = '';
      roundResultDisplay.textContent = '';
      updateScore();
      finalResultDisplay.classList.add("d-none");
      usernameSection.classList.remove("d-none");
      gameSection.classList.add("d-none");
  }
  
  
  // Play a round
  function playRound(userChoice) {
      if (roundCount < 5) {
          roundCount++;
          const computerChoice = getComputerChoice();
          const result = getRoundWinner(userChoice, computerChoice);
          userChoiceDisplay.textContent = `Your choice: ${userChoice}`;
          aiChoiceDisplay.textContent = `Computer's choice: ${computerChoice}`;
          roundResultDisplay.textContent = result;
          updateScore();
          checkGameOver();
      }
  }
  
  
  // Event Listeners
  document.getElementById("startGameButton").addEventListener("click", startGame);
  document.getElementById("rock").addEventListener("click", () => playRound('Rock'));
  document.getElementById("paper").addEventListener("click", () => playRound('Paper'));
  document.getElementById("scissors").addEventListener("click", () => playRound('Scissors'));
  resetGameButton.addEventListener("click", resetGame);
  });
  
  