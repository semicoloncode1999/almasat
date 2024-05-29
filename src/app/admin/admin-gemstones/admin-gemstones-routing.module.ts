import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGemstonesComponent } from './admin-gemstones.component';

const routes: Routes = [
  {path:"",component:AdminGemstonesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminGemstonesRoutingModule { }
