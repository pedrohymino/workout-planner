import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IWorkouts } from 'src/app/core/interface/workout';

// https://wger.de/en/exercise/overview/
// https://weighttraining.guide/category/exercises/

@Injectable({
  providedIn: 'root'
})
export class WorkoutServiceService {
  private readonly baseUrl: string = 'assets/database/db.json';

  constructor(private http: HttpClient) { }
  
  public listWorkout(): Observable<IWorkouts> {
    return this.http.get<IWorkouts>(this.baseUrl);
  }
}
