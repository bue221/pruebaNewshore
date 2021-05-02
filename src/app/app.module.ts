import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardHousesComponent } from './components/card-houses/card-houses.component';
import { CardStudentsComponent } from './components/card-students/card-students.component';
import { ListHousesComponent } from './pages/list-houses/list-houses.component';
import { DetailHouseComponent } from './pages/detail-house/detail-house.component';

@NgModule({
  declarations: [
    AppComponent,
    CardHousesComponent,
    CardStudentsComponent,
    ListHousesComponent,
    DetailHouseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
