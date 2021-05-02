import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MseService } from 'src/app/services/mse.service';

@Component({
  selector: 'app-detail-house',
  templateUrl: './detail-house.component.html',
  styleUrls: ['./detail-house.component.scss'],
})
export class DetailHouseComponent implements OnInit {
  house: string | null;
  characters: any[] = [];
  public filter: any = '';

  constructor(
    private _mseService: MseService,
    private activeR: ActivatedRoute,
    private _location: Location
  ) {
    this.house = this.activeR.snapshot.paramMap.get('house');
  }

  ngOnInit(): void {
    this.getCharacterByHouse();
  }

  getCharacterByHouse() {
    if (this.house !== null)
      this._mseService
        .getHouseCharacters(this.house)
        .subscribe((data) => (this.characters = data));
  }

  goBack() {
    this._location.back();
  }
}
