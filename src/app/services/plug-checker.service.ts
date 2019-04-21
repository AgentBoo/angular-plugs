import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';
import { LocationApiService } from './location-api.service'
import { SocketsService } from './sockets.service'

@Injectable({
  providedIn: 'root'
})
export class PlugCheckerService {
	// Observable source
  isChecking = new Subject<boolean>()
  results = new Subject<[]>()
  warning = new Subject<string>()

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

  setWarning(message){
    this.warning.next(message)
  }

  resetWarning(){
    this.warning.next('')
  }

  setResults(sockets){
    this.results.next(sockets)
  }

  resetResults(){
    this.results.next([])
  }

  determineCompatibility(formInput: string){
    this.resetWarning()
    this.resetResults()

    this.api.retrieveLocation(formInput).subscribe(
      data => {
        if(data.length){
          const locations = this.getUniqueLocations(data)
          const results = locations.map(location => {
            const [city, code] = location.split(',')
            return this.sockets.findByCountryCode(city, code)
          })
          this.setResults(results)
          console.log(results)
        } else {
          this.setWarning('Location could not be found')
        }
      },
      error => {
        if(400 <= error.status && error.status <= 429){
          this.setWarning('Network request failed')
        } else {
          this.setWarning('Something went wrong')
        }
        console.error(error.error.message)
      }
    )
  }
}
