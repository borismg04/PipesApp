import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class CanFlyPipe {
  transform(value:boolean): 'Vuela' | 'No vuela' {
    console.log({value});
    return (value) ? 'Vuela' : 'No vuela';
  }
}
