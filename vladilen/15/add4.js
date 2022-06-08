function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const getWinner = (applicants, winnerObject) => {
    let luckyNumbers = Object.keys(applicants)
    let winnerKey = luckyNumbers[getRandomNumberInRange(0, luckyNumbers.length)]

    const winner = {
        number: winnerKey,
        ...applicants[winnerKey],
        ...winnerObject,
    }

    return winner
}

const todaysWinner = {
    prize: '10 000$',
 }
  
 const winnerApplicants = {
    '001': {
       name: 'Максим',
       age: 25,
    },
    '201': {
       name: 'Светлана',
       age: 20,
    },
    '304': {
       name: 'Екатерина',
       age: 35,
    },
 }
  
 const resultWinner = getWinner(winnerApplicants, todaysWinner);
 console.log('Winner: ', resultWinner); 