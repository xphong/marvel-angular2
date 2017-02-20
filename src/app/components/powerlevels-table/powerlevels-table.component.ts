import { Component, OnInit, Input } from '@angular/core';

import { Powerlevel } from '../../shared/models/powerlevel.model';

@Component({
  selector: 'app-powerlevels-table',
  templateUrl: './powerlevels-table.component.html',
  styleUrls: ['./powerlevels-table.component.css']
})
export class PowerlevelsTableComponent implements OnInit {
  @Input() powerlevels: Powerlevel[] = [];

  constructor() { }

  ngOnInit() {
  }

}
