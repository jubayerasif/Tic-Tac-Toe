function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set custom player names for both player!");
    return;
  }
  gameAreaElement.style.display = "block";
}

function selectGameField(event) {
  event.target.textContent = players[activePlayer].symbol; // player[0]
  event.target.classList.add('disabled')
}
