import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

export class TimeType {
  minutes: number;
  seconds: number;
}

@Injectable({
  providedIn: 'root'
})
export class TestServieService {
  private title: string = "Test Component Property";
  private seconds: number = 0;
  private timeClass: TimeType = { minutes: 0, seconds: 0 }; 

  public get Title(): string { return this.title; }
  public set Title(value: string) { this.title = value; }

  public Seconds: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public SecondsCass: BehaviorSubject<TimeType> = new BehaviorSubject<TimeType>({ seconds: 0, minutes: 0});

  constructor() { 

    setInterval(() => this.tick(), 1000)
  }

  public reset() {
    this.seconds = -1;
    this.tick();
  }

  private tick() {
    this.seconds++;
    this.Seconds.next(this.seconds);

    let minutes = Math.trunc(this.seconds / 60);
    let seconds =  this.seconds - (minutes * 60);

    this.timeClass.seconds = seconds;
    this.timeClass.minutes = minutes;

    this.SecondsCass.next(this.timeClass);
  }
}
