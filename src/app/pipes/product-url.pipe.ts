import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productUrl'
})
export class ProductUrlPipe implements PipeTransform {

  transform(values: string[], args?: any): string {
    const plugType = values[0]
    return `https://www.amazon.com/s?k=type+${plugType}+adapter&i=electronics`
  }

}
