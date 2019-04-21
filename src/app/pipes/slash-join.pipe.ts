import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slashJoin'
})
export class SlashJoinPipe implements PipeTransform {

  transform(values: string[], args?: any): string {
    return values.join(' / ');
  }

}
