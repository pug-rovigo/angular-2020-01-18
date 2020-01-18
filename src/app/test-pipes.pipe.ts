import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testPipes'
})
export class TestPipesPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    if (args.length == 0) {
      return value + 'sec';
    }

    return (value * args[0]) + 'sec';
  }
}

@Pipe({
  name: 'testSum'
})
export class TestSumPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    if (value == null) return 0;

    let sum = 0;
    value.forEach(item => {
      sum += item.id;
    });

    return sum;
  }

}
