const hero = {
    name: 'Batman',
    health: 100,
    heatEnemy: (enemy) => {
        enemy.health -= 10
        console.log(`${hero.name} heats ${enemy.name} with damage: 10. ${enemy.name} health now: ${enemy.health}`)
    },
 }
  
 const enemy = {
    name: 'Joker',
    health: 100,
    heatHero: (hero) => {
        hero.health -= 10
        console.log(`${enemy.name} heats ${hero.name} with damage: 10. ${hero.name} health now: ${hero.health}`)
    },
 }

const startGame = (heroPlayer, enemyPlayer) => {
    while (hero.health > 0 && enemy.health > 0) {
        let random = Math.round(Math.random())
        random === 0 ? hero.heatEnemy(enemy) : enemy.heatHero(hero)
    }
    
    let winner = enemy.health === 0 ? hero : enemy

    console.log(`${winner.name} победил! У него осталось ${winner.health} здоровья`)
}

startGame(hero, enemy)