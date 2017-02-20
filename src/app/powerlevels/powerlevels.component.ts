import { Component, OnInit } from '@angular/core';

import { Powerlevel } from '../shared/models/powerlevel.model';
import { PowerlevelsService } from '../shared/services/powerlevels/powerlevels.service';

@Component({
  selector: 'app-powerlevels',
  templateUrl: './powerlevels.component.html',
  styleUrls: ['./powerlevels.component.css']
})
export class PowerlevelsComponent implements OnInit {
  public powerlevels: Powerlevel[] = [];
  public isLoading = false;

  constructor(private powerlevelsService: PowerlevelsService) { }

  ngOnInit() {
    this.getPowerLevels();
  }

  getPowerLevels() {
    this.powerlevels = [];
    this.isLoading = true;

    this.powerlevelsService.fetchPowerlevels()
      .subscribe(data => {
        if (!!data.length) {
          this.powerlevels = data;          
        }

        this.isLoading = false;
      }, error => {
        console.log('Error', error);
        this.isLoading = false;
      });
  }


}
