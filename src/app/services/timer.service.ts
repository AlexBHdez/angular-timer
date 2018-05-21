import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TimerService {

  private countdownTimerRef: any = null;
  public paused = false;
  private init = 0;

  private countdownEndSource = new Subject<void>();
  public countdownEnd$ = this.countdownEndSource.asObservable();
  private countdownSource = new BehaviorSubject<number>(0);
  public countdown$ = this.countdownSource.asObservable();

  constructor() { }

  destroy(): void {
    this.clearTimeout();
  }

  setTimer(time) {
    this.countdownSource.next(time);
  }

  restartCountdown(time) {
    this.paused = false;
    this.clearTimeout();
    this.countdownSource.next(time);
  }

  toggleCountdown() {
    this.paused = !this.paused;
    if (this.paused === true) {
      this.doCountdown();
    } else {
      this.clearTimeout();
    }
  }

  private doCountdown() {
    this.countdownTimerRef = setTimeout(() => {
      this.countdownSource.next(this.countdownSource.getValue() - 1);
      this.processCountdown();
    }, 1000);
  }

  private processCountdown() {
    if (this.countdownSource.getValue() <= 0) {
      this.countdownEndSource.next();
    } else {
      this.doCountdown();
    }
  }

  private clearTimeout() {
    if (this.countdownTimerRef) {
      clearTimeout(this.countdownTimerRef);
      this.countdownTimerRef = null;
    }
  }

}
