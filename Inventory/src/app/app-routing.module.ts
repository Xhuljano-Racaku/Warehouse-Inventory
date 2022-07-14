import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewMerchandiseComponent } from './new-merchandise/new-merchandise.component';
import { MerchandiseListComponent } from './merchandise-list/merchandise-list.component';
import { EditMerchandiseComponent } from './edit-merchandise/edit-merchandise.component';

const routes: Routes = [
  {
    path: 'list', component: MerchandiseListComponent
  },
  {
    path: 'add', component: NewMerchandiseComponent
  },
  {
    path: 'edit/:index', component: EditMerchandiseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
