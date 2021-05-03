import { Component, OnInit } from '@angular/core';
import { MseService } from 'src/app/services/mse.service';

@Component({
  selector: 'app-list-houses',
  templateUrl: './list-houses.component.html',
  styleUrls: ['./list-houses.component.scss'],
})
export class ListHousesComponent implements OnInit {
  HousesCount: any[] = [];
  loading: boolean = false;

  constructor(private _mseService: MseService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.loading = true;
    this._mseService.getCharacters().subscribe(
      async (data) => {
        this.loading = false;
        return (this.HousesCount = await data);
      }
      // data
    );
  }
}
