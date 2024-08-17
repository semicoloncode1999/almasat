import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResoryComponent } from './resory.component';

const routes: Routes = [
  {path:"", component:ResoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResoryRoutingModule { }
