const drink = {
  color: 'brown',
  carbonate: true,
  sugar: 40,
}

const pepsi: [string, boolean, number] = ['brown', true, 40]
// pepsi[0] = 30 //raise error

// with type alias
type Drink = [string, boolean, number]
const cola: Drink = ['brown', true, 35]
const sprite: Drink = ['clear', true, 30]
/* Notes
- tuple will be rarely used. [good to use with csv]
 */
const carSpecs = [400, 4983] // what does it mean here?
const carStats = { // now you understand
  horsepower: 400,
  weight: 4983
}