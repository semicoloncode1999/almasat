import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersMsgsComponent } from './users-msgs.component';

const routes: Routes = [
  {path:"" , component:UsersMsgsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersMsgsRoutingModule { }
