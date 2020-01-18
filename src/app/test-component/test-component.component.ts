import { Component, OnInit } from '@angular/core';
import { TestServieService } from '../test-servie.service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {

  private wid: string = '10px';
  private doubleSeconds: number = 0;

  constructor( private service: TestServieService ) {

      this.service.SecondsCass.subscribe((value) => {
          this.doubleSeconds = 2 * value.seconds;
          this.wid = (value.seconds *2) + 'px';
      });
  }

  ngOnInit() {
  }

  reset() {
    console.log('RESET');
    this.service.reset();
  }
}
