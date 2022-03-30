// 1 Задача

const num = [1,3,8]

const multiplyBy = (arr,x=5) => {
	return arr.map(item=> item*x)
}

console.log(multiplyBy(num))



// 2 Задача

const number = [2,3,5,9,14]

const filterLessThan = (arr,x) => {
	return arr.filter(item=> item<=x)
}
console.log(filterLessThan(number,7))



// Задача 3

function isEqualTo3 (element) {
 return element === 3
}

console.log([0,2,3,7].includes(3))
console.log([1,4,8,9].find(3))


// Задача 4

const arr =  [[1,2,5, 'putin'], [3,7,1, 'xuylo']]

const sum = arr => arr.reduce((res, el) => res + (Array.isArray(el) ? sum(el) : el),0);

console.log(sum(arr))








