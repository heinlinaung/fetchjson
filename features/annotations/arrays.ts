// type annotation
const carMakers: string[] = [];
const twoDimensionArray: string[][] = [] // [['abc'],['def']]

// type inference
const carVendors = ['Audi', 'Toyota'];
const carBrandByVendor = [ // 2D array
  ['f150'],
  ['corolla'],
  ['camaro']
]

// help with inference when extracting value
const car = carVendors[1]
const mycar = carVendors.pop()

// prevent adding incompatible value into the array
carVendors.push(123)

// got help with 'map', 'reduce', 'forEach'
carVendors.map(x => { // x here is 'x : string'
  return car.toUpperCase()
})

// flexible types
const importantDates = [new Date(), '01-31-2022']
// importantDates.push(100) //raise error
// const importantDates: (string | Date)[] = [new Date(), '01-31-2022'] // type annotation