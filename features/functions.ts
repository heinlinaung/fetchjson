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