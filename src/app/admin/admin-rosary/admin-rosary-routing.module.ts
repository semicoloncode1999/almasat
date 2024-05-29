import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRosaryComponent } from './admin-rosary.component';

const routes: Routes = [
  {path:"",component:AdminRosaryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRosaryRoutingModule { }
