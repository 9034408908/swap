import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Speech1Component } from './speech1/speech1.component';

const routes: Routes = [
  {
    path: 'speech1',
    component: Speech1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
