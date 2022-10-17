const add = (a: number, b: number): number => {
  return a + b
}

/*NOTES
- no type inference for function's arguments(have to set annotation explicitly)
- must/should add always the type annotation for the return value
 */
// eg. without type annotation for the return value
const subtract = (a: number, b: number) => {
  a - b
  /*
  if we return, 
  typescript inferrenc knows that the return type is number, 
  but if we forgot to return, it assume void
  and if we return the wrong value, type inference would take that wonrg value type as expected type. like return false
   */
}

function divide(a: number, b: number): number {
  return a / b
}

const multiply = (a: number, b: number): Number => {
  return a * b
}

// return type:void -> function that returns nothing at all (not even null, undefined)
const logger = (message: string): void => {
  console.log(message)
  // return null // raise error
}

// [never] : when functino will never reach the end of function [rare case, will never use it]
const throwError = (message: string): never => {
  throw new Error(message)

  /* why?
  if(!message){
    throw new Error(message)
  }
  return message
  // in this case return type must be 'string'
   */
  /* why2?
  if(!message){
    throw new Error(message)
  }
  // in this case return type must be 'void'
   */
}

const todayWeather = {
  date: new Date(),
  weather: 'sunny'
}
const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
  console.log(date)
  console.log(weather)
}
logWeather(todayWeather)