import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { TimerService } from '../../services/timer.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  providers: [TimerService],
})
export class TimerComponent implements OnInit, OnDestroy {

  @Input() init = 20;
  @Output() whenComplete = new EventEmitter<void>();
  private countdownEndSubscription: Subscription = null;
  private countdownSubscription: Subscription = null;
  public countdown = 0;

  get progress() {
    return (this.init - this.countdown) / this.init * 100;
  }

  constructor(
    public timerService: TimerService,
  ) { }

  ngOnInit(): void {
    this.timerService.restartCountdown(this.init);
    this.countdownEndSubscription = this.timerService.countdownEnd$.subscribe(() => {
      this.whenComplete.emit();
    });
    this.countdownSubscription = this.timerService.countdown$.subscribe((data) => {
      this.countdown = data;
    });
  }

  ngOnDestroy(): void {
    this.timerService.destroy();
    this.countdownEndSubscription.unsubscribe();
    this.countdownSubscription.unsubscribe();
  }


}
