function findOutlier(integers){
    odd = integers.filter(el => el%2 !== 0)
    even = integers.filter(el => el%2 === 0)

    return odd.length == 1 ? odd[0] : even[0]
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))