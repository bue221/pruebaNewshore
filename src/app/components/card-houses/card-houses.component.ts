import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-houses',
  templateUrl: './card-houses.component.html',
  styleUrls: ['./card-houses.component.scss'],
})
export class CardHousesComponent implements OnInit {
  @Input() item: any;

  constructor() {}

  ngOnInit(): void {}
}
