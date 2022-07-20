import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewMerchandiseComponent } from './new-merchandise/new-merchandise.component';
import { MerchandiseListComponent } from './merchandise-list/merchandise-list.component';
import { EditMerchandiseComponent } from './edit-merchandise/edit-merchandise.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: 'list', component: MerchandiseListComponent
  },
  {
    path: 'add', component: NewMerchandiseComponent
  },
  {
    path: 'edit/:id', component: EditMerchandiseComponent
  },
  {
    path: '**', component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
