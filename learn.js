// 1 Задача

/*const num = [1,3,8]

const multiplyBy = (arr,x=5) => {
	return arr.map(item=> item*x)
}

console.log(multiplyBy(num))*/



// 2 Задача

/*const number = [2,3,5,9,14]

const filterLessThan = (arr,x) => {
	return arr.filter(item=> item<=x)
}
console.log(filterLessThan(number,7))*/



// Задача 3
/*const array = [0,2,3,7]

function checkthree (element) {
 return element === 3
}
console.log(array.find(checkthree))

const numbers = [1,4,8,9]

function donthavethree (element) {
	return element ===3
}
console.log(numbers.includes(donthavethree))*/




// Задача 4

/*const arr =  [[1,2,5, 'putin'], [3,7,1, 'xuylo']]

const sum = arr => arr.reduce((res, el) => res + (Array.isArray(el) ? sum(el) : el),0);


console.log(sum(arr))


//1 массив

const arrio = [1,2,5, 'putin']
const b = arrio.reduce((prev, item)=> {
 return prev + item
},)
console.log(b)*/






const arrr =  [[1,2,5, 'putin'], [3,7,1, 'xuylo']]
const getObject = (arr) => arr.reduce((acc, [key, val]) => ((acc[key] = val), acc), {});
console.log(getObject(arrr))




// 5 Функция принимает строку и возвращает строку в обратном направлении

function reverseStr(str) {
	return str.split("").reverse().join("")
}
console.log(reverseStr("Hello world"))


// 6 Функция которая проходит по массиву чисел и возвращает дубликат

const arr = [1,3,5,2,1,21,11,21,9,5]

const uniqArray = arr.filter((item,index)=> {
	return index === arr.indexOf(item)
})
console.log(uniqArray)
