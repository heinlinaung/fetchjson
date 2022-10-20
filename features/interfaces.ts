const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true
}
// if object has more properties, it would cramp the screen
// if more functions using this object, have to duplicate this object structure
const printVehicle = (vehicle: { name: string, year: number, broken: boolean }): void => {
  console.log(`Name: ${vehicle.name}`)
  console.log(`Year: ${vehicle.year}`)
  console.log(`Broken? ${vehicle.broken}`)
}
printVehicle(oldCivic)

interface Vehicle {
  name: string, year: number, broken: boolean
}

const bugCivic = {
  name: 'civic',
  year: 'two thousand',
  broken: true
}
// solved
const logVechicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`)
  console.log(`Year: ${vehicle.year}`)
  console.log(`Broken? ${vehicle.broken}`)
}
// printVehicle(bugCivic) //raise error
/*
const personA = {
  name: 'person A',
  age: 20,
  address: {
    lat: 39,
    lng: 200
  },
  sayHello(): string {
    return `Hi, I am ${this.name}`
  }
}
interface Person {
  name: string, age: number, address: Address, sayHello(): string
}
interface Address {
  lat: number, lng: number
}
const logPerson = (person: Person): void => {
  console.log(`Name: ${person.name}`)
  console.log(`age: ${person.age}`)
  console.log(`addr: ${JSON.stringify(person.address, null, 2)}`)
  console.log(person.sayHello())
}
logPerson(personA)
*/
const personA = {
  name: 'person A',
  age: 20,
  address: {
    lat: 39,
    lng: 200
  },
  sayHello(): string {
    return `Hi, I am ${this.name}`
  }
}
const cocacola = {
  name: 'cola',
  carbonated: true,
  sugar: 40,
  sayHello(): string {
    return `Hi.. I am a drink called ${this.name}`
  }
}
interface Hello {
  sayHello(): string
}
interface Address {
  lat: number, lng: number
}

const logGreeting = (person: Hello): void => {
  console.log(person.sayHello())
}

logGreeting(personA)
logGreeting(cocacola)