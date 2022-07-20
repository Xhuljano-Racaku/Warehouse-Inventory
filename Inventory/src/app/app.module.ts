import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MerchandiseListComponent } from './merchandise-list/merchandise-list.component';
import { NewMerchandiseComponent } from './new-merchandise/new-merchandise.component';
import { EditMerchandiseComponent } from './edit-merchandise/edit-merchandise.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    MerchandiseListComponent,
    NewMerchandiseComponent,
    EditMerchandiseComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
