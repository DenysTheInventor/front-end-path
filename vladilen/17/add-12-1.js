const attacker = {
    archer: 30,
    footSoldier: 55,
    cavalry: 10,
    artillery: 3,
    checkChancesToWin(defenderObject) {
        let chancesToWin = [0, 4]
        let keysToCompare = ['archer', 'footSoldier', 'cavalry', 'artillery']

        keysToCompare.forEach(key => {
            this[key] > defenderObject[key] ? chancesToWin[0]++ : chancesToWin[0]
        })

        return chancesToWin
    },
    improveArmy() {
        this.archer += 5
        this.footSoldier += 5
        this.cavalry += 5
        this.artillery += 5
    },
    attack(defenderObject) {
        let chances = this.checkChancesToWin(defenderObject)
        let [ourArmyChances, maximumChances] = [...chances]
        
        if (ourArmyChances/maximumChances < 0.7) {
            this.improveArmy()
            alert(`Наши шансы равны ${ourArmyChances}/${maximumChances}. Необходимо укрепление!`)
        } else {
            alert('Мы усилились! Мы несомненно победим! Наши шансы высоки!')
        } 
    } 
}
  
const defender = {
    archer: 33,
    footSoldier: 50,
    cavalry: 40,
    artillery: 10
}


attacker.attack(defender); // Наши шансы равны 1/4. Необходимо укрепление! 
attacker.attack(defender); // Наши шансы равны 2/4. Необходимо укрепление! 
attacker.attack(defender); // Мы усилились! Мы несомненно победим! Наши шансы высоки!
