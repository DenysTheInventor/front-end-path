const messageBox = document.querySelector('.message-field')
const playerField = document.querySelector('.player')
const startBTN = document.querySelector('.start-game')

let mark = 0
let gameStatus = false
const messages = ['', 'Choose another box', 'Player 1 wins', 'Player 2 wins', 'Draw', 'Start another game in 2 seconds', 'Press button to start the game']

const handleMessages = (message = 0) => {
    messageBox.innerHTML = messages[message]
}

const endGame = (cells) => {
    gameStatus = false

    setTimeout(() => {
        cells.forEach(cell => {
            cell.innerHTML = ''
        });
        startBTN.disabled = false
        handleMessages()
    }, 2000);
}

const setPlayer = (player) => {
    playerField.innerHTML = `Player ${player}`
} 

const checkAnswer = () => {
    let cells = document.querySelectorAll('.box')
    
    const answers = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]     
    ]

    for (let index = 0; index < cells.length - 1; index++) {
       if ( cells[answers[index][0]].innerHTML == 'X' && cells[answers[index][1]].innerHTML == 'X' && cells[answers[index][2]].innerHTML == 'X' ) {
            handleMessages(2)
            endGame(cells) 
       }
       else if ( cells[answers[index][0]].innerHTML == 'O' && cells[answers[index][1]].innerHTML == 'O' && cells[answers[index][2]].innerHTML == 'O' ) {
            handleMessages(3)
            endGame(cells) 
       }
       else if ( mark > 8) {
            handleMessages(4)
            endGame(cells) 
       }
    }
}

document.body.addEventListener('click', (e) => {
   if ( e.target.className == 'box' && gameStatus == true) {
       if ( e.target.innerHTML == '' ) {
           if ( mark % 2 == 0 ) {
                e.target.innerHTML = 'X'
                setPlayer(2)
           }
           else {
                e.target.innerHTML = 'O'
                setPlayer(1)
           }
            mark++
            handleMessages()
       }
       else {
           handleMessages(1)
       }
       checkAnswer()
   }
})

startBTN.addEventListener('click', () => {
    mark = 0
    gameStatus = true
    startBTN.disabled = true
    setPlayer(1)
    handleMessages(0)
})
