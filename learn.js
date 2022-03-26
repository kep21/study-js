// 1 Задача

const num = [1,3,8]

const numFilter = arr => {
	return arr.map(item=> item*4)
}
console.log(numFilter(num))



// 2 Задача

const chislo = [2,3,5,9,14]

const chisloFilter = arr => {
	return arr.filter(item=> item<=5)
}
console.log(chisloFilter(chislo))



// Задача 3

function isEqualTo3 (element) {
 return element === 3
}

console.log([0,2,3,7].some(isEqualTo3))
console.log([1,4,8,9].some(isEqualTo3))
