// 1 Задача

const num = [1,3,8]

const numFilter = (arr,x=5) => {
	return arr.map(item=> item*x)
}

console.log(numFilter(num))



// 2 Задача

const number = [2,3,5,9,14]

const numberFilter = (arr,x=7) => {
	return arr.filter(item=> item<=x)
}
console.log(numberFilter(number,x=7))



// Задача 3

function isEqualTo3 (element) {
 return element === 3
}

console.log([0,2,3,7].some(isEqualTo3))
console.log([1,4,8,9].some(isEqualTo3))


// Задача 4





