import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarasouelsComponent } from './carasouels.component';

const routes: Routes = [
  {path:"",component:CarasouelsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarasouelsRoutingModule { }
