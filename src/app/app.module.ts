//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//components
import { AppComponent } from './app.component';
import { CardHousesComponent } from './components/card-houses/card-houses.component';
import { CardStudentsComponent } from './components/card-students/card-students.component';
import { ListHousesComponent } from './pages/list-houses/list-houses.component';
import { DetailHouseComponent } from './pages/detail-house/detail-house.component';
import { ReducePipe } from './customPipes/reduce.pipe';
import { FilterPipe } from './customPipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardHousesComponent,
    CardStudentsComponent,
    ListHousesComponent,
    DetailHouseComponent,
    ReducePipe,
    FilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
