import { captureRejectionSymbol } from "events"

class Vehicle {
  publicMethod(): void {
    console.log('publicMethod...')
  }

  private privateMethod(): void {
    console.log('privateMethod...')
  }

  protected honk(): void {
    console.log('beep...')
  }
}
const vehicle = new Vehicle()
vehicle.publicMethod()
// vehicle.privateMethod() // raise error[private method can't use outside class]
// vehicle.honk() // raise error[protected method can't use outside class and outside its child class]

//inheritance
class Car extends Vehicle {
  private drive(): void {
    console.log('vroom...')
  }

  startDrive(): void {
    this.drive()
    this.honk()
  }
}

const car = new Car()
car.startDrive()
car.publicMethod() // can use public method
// car.privateMethod()  // raise error[private method can only use inside the exact class]
// car.honk()  // raise error[protected method can only use inside the exact class and inside its child classes] check line 29

/* Class Method modifiers [public, private, protected]
## Public [default]
- can be called anywhere, anytime
## Private
- can only be called by other methods in this exact class [not on instances]
## Protected
- can be called by other methods from the exact class or its child classes
## Notes
- child Classes cannot change its parent method modifier [like from public[drive()] to private[drive()]]
*/

