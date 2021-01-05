import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TicTacComponent } from './tic-tac/tic-tac.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"retry",
    component:TicTacComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
