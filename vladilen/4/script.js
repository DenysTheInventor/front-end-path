// task1

const userAge = 28
const userName = 'Denys'
const userIsStudent = false
const userIsDrunk = null
const userStory = undefined
const user = {
    age: 28,
    name: 'Denys',
    isStudent: false
}
const userID = Symbol('id')
const userFails = BigInt(10)

const userInfo = [userAge, userName, userIsStudent, userIsDrunk, userStory, user, userID, userFails]

userInfo.forEach(element => {
    if (typeof element == 'symbol') {
        console.log('Symbol нельзя преобразовать к number', Boolean(element), String(element))
    }
    else {
        console.log(Number(element), Boolean(element), String(element))
    }
})

// task2

console.log(Number('10'), typeof Number('10')); // явное
//1
console.log(+'50');
console.log(Number('50'), typeof Number('50'))
//2            
console.log(Number('100'), typeof Number('100')); // явное
//3
console.log('' + 1); 
console.log(String(1), typeof String(1))
//4
console.log(String(1), typeof String(1)); // явное
//5
console.log(Boolean(0), typeof Boolean(1)); // явное
//6
console.log(+'001');
console.log(Number('001'), typeof Number('001'));
//7
console.log(1 + ''); 
console.log(String(1), typeof String(1));
//8
console.log(Boolean(1), typeof Boolean(1)); // явное
//9
console.log(String(001), typeof String(001)); // явное
//10
console.log(Number('Hello World'), typeof Number('Hello World')); // явное

// task3

const changingValues = [console.log, { name: 'Maxim' }, Symbol('key'), Number, '', 0, -10, '-105']

changingValues.forEach(element => {
    if (typeof element == 'symbol') {
        console.log('Symbol нельзя преобразовать к number', Boolean(element), String(element))
    }
    else {
        console.log(Number(element), Boolean(element), String(element))
    }
})

// task4

// 1 - NaN
console.log(Number(' 1 2 3 4 5'));
// 2 - NaN
console.log(Number('1234 5'));
// 3 - 12345
console.log(Number('12345'));
// 4 - 'false'
console.log(String(false));
// 5 - false
console.log(Boolean(0000000));
// 6 - true
console.log(Boolean(0.0000001));
// 7 - 'undefined'
console.log(String(undefined));
// 8 - NaN
console.log(Number('100f'));
// 9 - 100
console.log(Number('100'));
// 10 - 1
console.log(Number('000001'));