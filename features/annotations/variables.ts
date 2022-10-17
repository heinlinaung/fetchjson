let apples: number = 5;
let speed: string = 'slow'
let hasName: boolean = true
/* # type inference version
# typescript decide the type on variable declration
let apples= 5;
let speed= 'slow'
let hasName= true
*/

let nothingNull: null = null
let nothingUndefined: undefined = undefined

// built-in objects
let now: Date = new Date()

// Array
let colors: string[] = ['red']
let numbers: number[] = [12, 3, 2]
let booleanValues: boolean[] = [true, true, false]

// Class
class Car {

}
let car: Car = new Car()

// object literal
let person: { name: string; age: number } = {
  name: 'hein',
  age: 31
}

// Function
// -------------- input ------- return value ----------
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
  return true
}

// when to use type annotation
// 1) function that returns 'any' type value
const json = '{"x":10,"y":20}'
const coordinates: { x: number; y: number } = JSON.parse(json)
// coordinates.blah // raise err

// 2) when declare a variable and assign value later
let words = ['red', 'green', 'brown']
let foundWord: boolean;
words.forEach(x => {
  if (x === 'red') {
    foundWord = true
  }
})

// 3) variable whose type cannot be inferred correctly
let numbers2 = [-10, -1, 20]
let numberAboveZero: boolean | number = false
numbers2.forEach(x => {
  if (x > 0) {
    numberAboveZero = x
  }
})