import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRingsComponent } from './admin-rings.component';

const routes: Routes = [
  {path:"", component:AdminRingsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRingsRoutingModule { }
