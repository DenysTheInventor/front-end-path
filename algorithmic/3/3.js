const sum = (num) => {
   let arr = num.toString().split('')
   return arr.map((i) => Number(i)).reduce((a, i) => a + i, 0)
} 

console.log(sum(123))
console.log(sum(4635))