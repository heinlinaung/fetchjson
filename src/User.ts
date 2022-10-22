import { faker } from '@faker-js/faker';
import { MapObject } from './CustomMap';
export class User implements MapObject {
  name: string;
  location: {
    lat: number;
    lng: number;
  }
  constructor() {
    this.name = faker.name.firstName()
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude()
    }
  }

  markerContent() {
    return `User name : ${this.name}`
  }
}