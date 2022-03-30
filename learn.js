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
const array = [0,2,3,7]

function checkthree (element) {
 return element === 3
}
console.log(array.find(checkthree))

const numbers = [1,4,8,9]

function donthavethree (element) {
	return element ===3
}
console.log(numbers.includes(donthavethree))




// Задача 4

const arr =  [[1,2,5, 'putin'], [3,7,1, 'xuylo']]

const sum = arr => arr.reduce((res, el) => res + (Array.isArray(el) ? sum(el) : el),0);

console.log(sum(arr))








