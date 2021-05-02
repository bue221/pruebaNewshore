import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce',
})
export class ReducePipe implements PipeTransform {
  transform(value: any): any {
    if (!value) return null;

    return value.reduce((countHouses: any, house: any) => {
      countHouses[house.house !== '' ? house.house : 'no house'] =
        (countHouses[house.house] || 0) + 1;
      console.log(countHouses);
      return countHouses;
    }, []);
  }
}
