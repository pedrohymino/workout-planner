import { Component, OnInit } from '@angular/core';
import { WorkoutServiceService } from 'src/app/core/services/workout-service.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(
    private workoutService: WorkoutServiceService
  ) { }

  ngOnInit(): void {
    this.workoutService.listWorkout().subscribe(
      res => {
        console.log(res);
      }
    );
  }
}
