function startNewGame() {
    if(player[0].name === '' || player[1].name === ''){
        alert("Please set custom player names for both player!");
        return
    }
    gameAreaElement.style.display = "block";
}