import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailHouseComponent } from './pages/detail-house/detail-house.component';
import { ListHousesComponent } from './pages/list-houses/list-houses.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ListHousesComponent },
  { path: 'detail-house/:id', component: DetailHouseComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
