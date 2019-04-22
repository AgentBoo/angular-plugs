import { Injectable } from '@angular/core';
import sockets from "../../assets/data/sockets.json"
import codes from "../../assets/data/codes.json"

/**
 * Sockets Service
 * Provides methods to derive data from local json files
 *  
 * More on importing .json files, here
 * https://stackblitz.com/edit/json-import-example   
 * https://www.typescriptlang.org/docs/handbook/compiler-options.html
 */

export interface Socket{
  country: string; 
  voltage: string; 
  frequency: string; 
  types: string[];
}

export interface SocketResult extends Socket{
  city: string;
  compatible: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SocketsService {

  constructor() { }
  
  get socketsByCountry(): Socket[]{
  	return Object.keys(sockets).map(countryCode => sockets[countryCode])
  }

  findByCountryCode(city: string, code: string): SocketResult{
    const socket = sockets[code]
    return {
      city,
      compatible: socket.types.some(type => type === 'A' || type === 'B'),
      ...socket,
    }
  }
}
