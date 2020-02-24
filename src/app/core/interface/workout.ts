export interface IWorkouts {
  workout: IWorkoutInfo[];
}

export interface IWorkoutInfo {
  id: number;
  type: any[];
  img: string;
  subtitle: string;
  minutes: number;
  planner: IWorkout[];
}
export interface IWorkout {
  exercise: string;
  img: string;
  muscleGroup: [];
  set: ISet;
  reps: string;
  weight: number;
  weightType: string;
  method: []; // bi-sex, drop-set, circuit, pyramid
}

export interface ISet {
  qty: number;
  started: boolean;
  completed: boolean;
  status: [];
}