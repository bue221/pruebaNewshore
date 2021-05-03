import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-students',
  templateUrl: './card-students.component.html',
  styleUrls: ['./card-students.component.scss'],
})
export class CardStudentsComponent implements OnInit {
  @Input() item: any;

  constructor() {}

  ngOnInit(): void {}
}
