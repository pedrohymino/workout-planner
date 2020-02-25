import { Component, OnInit } from '@angular/core';
import { TimerServiceService } from 'src/app/core/services/timer-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private timerService: TimerServiceService) { }
  
  _time:any;

  ngOnInit(): void {
    this._time = this.timerService.timer;
  }

  startTimer(){
    this.timerService.startTimer();
  }

  pauseTimer(){
    this.timerService.pauseTimer();
  }

  stopTimer(){
    this.timerService.stopTimer();
  }

}
