import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewMerchandiseComponent } from './new-merchandise/new-merchandise.component';
import { MerchandiseListComponent } from './merchandise-list/merchandise-list.component';

const routes: Routes = [
  {
    path: 'add', component: NewMerchandiseComponent
  }, 
  {
    path: 'list', component: MerchandiseListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
