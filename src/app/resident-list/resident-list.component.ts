import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { Resident } from '../resident';
import { ResidentService } from '../resident.service';

@Component({
  selector: 'app-resident-list',
  template: `
    <p>
      resident-list works!
    </p>
  `,
  styles: [
  ]
})
export class ResidentListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
