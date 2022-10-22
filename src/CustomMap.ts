interface MapObject {
  location: {
    lat: number,
    lng: number
  };
  markerContent(): string; // return string
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId)!, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    })
  }

  addMarker(mapObject: MapObject): void {
    // addMarker(mapObject: User | Company): void {
    /* this OR here does
    - only allow the field(s) which exists in both User & Company (like 'location')
    - check by 
      >_ mapObject. // & you can see there is only 'location' shows up
    - downside : have to add the typed definition on every additional argument (like User | Company | Park | Garage)
      - have to update the code if one of those arguments removed from the app
      - solved by using interface 'MapObject'
     */
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapObject.location.lat,
        lng: mapObject.location.lng
      }
    })
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mapObject.markerContent()
      })
      infoWindow.open(this.googleMap, marker)
    })
  }
}