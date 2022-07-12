import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MerchandiseListComponent } from './merchandise-list/merchandise-list.component';
import { NewMerchandiseComponent } from './new-merchandise/new-merchandise.component';

@NgModule({
  declarations: [
    AppComponent,
    MerchandiseListComponent,
    NewMerchandiseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
