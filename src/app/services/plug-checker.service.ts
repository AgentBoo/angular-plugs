import { Injectable } from '@angular/core';
import { Subject, of }    from 'rxjs';
import { LocationApiService } from './location-api.service'
import { SocketsService, SocketResult } from './sockets.service'

@Injectable({
  providedIn: 'root'
})
export class PlugCheckerService {
	// Observable sources
  isChecking = new Subject<boolean>();
  results = new Subject<SocketResult[]>();
  warning = new Subject<string>();
  
  constructor(
  	private api: LocationApiService, 
  	private sockets: SocketsService) { 
  }
   
  private getUniqueLocations(data: any){
    let uniqueLocations = new Set()

    for(let i = 0; i < data.length; i++){
      uniqueLocations.add(`${data[i].name},${data[i].sys.country}`)
    }

    return Array.from(uniqueLocations)
  }

  private locateSockets(locations){
    return locations.map(location => {
      const [city, code] = location.split(',')
      return this.sockets.findByCountryCode(city, code)
    })
  }  

  setIsChecking(){
    this.isChecking.next(true)
  }

  resetIsChecking(){
    this.isChecking.next(false)
  }

  setResults(sockets){
    this.results.next(sockets)
  }

  resetResults(){
    this.results.next([])
  }

  setWarning(message){
    this.warning.next(message)
  }

  resetWarning(){
    this.warning.next('')
  }

  determineCompatibility(formInput: string){
    this.setIsChecking()
    this.resetWarning()
    this.resetResults()

    this.api.retrieveLocation(formInput).subscribe(
      data => {
        if(data.length){
          const locations = this.getUniqueLocations(data)
          const results = this.locateSockets(locations)
          this.setResults(results)
        } else {
          this.setWarning('Location could not be found.')
        }
        this.resetIsChecking()
      },
      error => {
        if(400 <= error.status && error.status <= 429){
          this.setWarning('Location service was used incorrectly.')
        } else {
          this.setWarning(`Network request failed (${error.status} ${error.statusText}).`)
        }
        this.resetIsChecking()
        console.error(error.error.message)
      }
    )
  }
}
