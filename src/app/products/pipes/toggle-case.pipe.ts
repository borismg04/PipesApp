import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe {
  transform(value: string, toUppeer:boolean = false ): string {
    console.log({value, toUppeer});

    return toUppeer ? value.toUpperCase() : value.toLowerCase();
  }
}
