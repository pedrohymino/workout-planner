import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkoutServiceService } from 'src/app/core/services/workout-service.service';
import { IWorkoutInfo } from 'src/app/core/interface/workout'
import { TimerServiceService } from 'src/app/core/services/timer-service.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss'] 
})
export class WorkoutComponent implements OnInit {
  workout = {} as IWorkoutInfo;
  paramID;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private workoutService:WorkoutServiceService,
    private timerService: TimerServiceService
    ) {
    this.route.params.subscribe(params => {
      this.paramID = params.id;
    });
  }

  ngOnInit(): void {
    this.workoutService.listWorkout().subscribe(
      res => {
        this.workout = res.workout.filter(work => work.id == this.paramID)[0];
      }
    );
  }

  toggleSet(plannerObj, index){
    plannerObj.set.status[index] = !plannerObj.set.status[index];
    this.checkCompleteExercise(plannerObj.set);
  }

  startExercise(plannerObj){
    this.timerService.startTimer();
    plannerObj.started = !plannerObj.started;
  }

  checkCompleteExercise(setObj){
    setObj.completed = setObj.status.every(Boolean);
  }

}
