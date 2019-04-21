import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productUrl'
})
export class ProductUrlPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
  	/*get productURL(): string{
    const plugType = this.searchResult.types[0]
  	return `https://www.amazon.com/s?k=type+{plugType}+adapter&i=electronics`
  }*/
    return null;
  }

}
