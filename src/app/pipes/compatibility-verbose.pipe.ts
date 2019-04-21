import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'compatibilityVerbose'
})
export class CompatibilityVerbosePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
