import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* PAGES*/
import { IndexComponent } from './pages/index/index.component';
import { WorkoutComponent } from './pages/workout/workout.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: IndexComponent,
  },
  {
    path: 'workout',
    component: WorkoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }