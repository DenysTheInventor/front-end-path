function sum(...values) {
	return values.reduce((acc, current) => acc + current, 0)
}

console.log(sum(1, 2, 3)) // 6
console.log(sum(2, 2)) // 4
console.log(sum(10, 15, 249, 653, 846)) // 1773