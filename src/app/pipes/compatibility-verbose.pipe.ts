import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'compatibilityVerbose'
})
export class CompatibilityVerbosePipe implements PipeTransform {
	success = "You won't need an adapter."
	failure = "You will need an adapter."

  transform(value: boolean, args?: any): string {
    return value ? this.success : this.failure;
  }

}
