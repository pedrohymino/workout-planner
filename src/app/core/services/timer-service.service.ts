import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerServiceService {
  public timer = {
    running: false,
    pause: false,
    time: 0,
    display: ''
  }
  private timerInterval;

  constructor() { }
  
  public startTimer(){
    if(!this.timer.running){
      this.timer.running = true;
      this.timer.display = 'Ready?';
      this.timerRun();
    }
  }

  private timerRun(){
    var startTime = this.timer.time;

    this.timerInterval = setInterval(() => {
      this.timer.time = startTime++;
      this.timer.display = this.secondsToHms(this.timer.time);
    },1000);
  }
  
  public pauseTimer(){
    this.timer.pause = !this.timer.pause;
    if(this.timer.pause){
      clearInterval(this.timerInterval);
    }else{
      this.timerRun();
    }
  }

  public stopTimer(){
    this.timer.running = false;
    this.timer.pause = false;
    this.timer.time = 0;
    clearInterval(this.timerInterval);
  }

  private secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    return `${this.twoDigits(h)} : ${this.twoDigits(m)} : ${this.twoDigits(s)}`; 
  }

  private twoDigits(value){
    return ('0' + value).slice(-2)
  }

}
