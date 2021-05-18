import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '../app/list/list.component';
import { TimwebComponent } from './timweb/timweb.component';


const routes: Routes = [
  {path: 'timeweb', component: TimwebComponent},
  {path: 'list', component: ListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
