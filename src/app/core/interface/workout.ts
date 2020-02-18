export interface IWorkouts {
  day: IDay;
}
export interface IDay {
  type: [];
  workout: IWorkout;
}
export interface IWorkout {
  equipment: string;
  img: string;
  muscleGroup: [];
  set: number;
  reps: string;
  weight: number;
  weightType: string;
  method: []; // bi-sex, drop-set, circuit, pyramid
}