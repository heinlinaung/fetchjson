const profile = {
  name: 'hein',
  age: 22,
  coords: {
    lat: 10,
    lng: 20
  },
  setAge(x: number): void {
    this.age = x
  }
}

const { age, name }: { age: number, name: string } = profile
const { coords: { lat, lng } }: { coords: { lat: number, lng: number } } = profile