import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as AppConstants from '../../../app.constants';
import { Powerlevel } from '../../models/powerlevel.model';

@Injectable()
export class PowerlevelsService {

  constructor(private http: Http) { }

  createPowerLevelData(data) {
    let powerLevel: Powerlevel = {
      name: '',
      intelligence: '',
      strength: '',
      speed: '',
      durability: '',
      energyProjection: '',
      fightingAbility: ''
    };

    powerLevel.name = data.Name;
    powerLevel.intelligence = data.Intelligence;
    powerLevel.strength = data.Strength;
    powerLevel.speed = data.Speed;
    powerLevel.durability = data.Durability;
    powerLevel.energyProjection = data.Energy_Projection;
    powerLevel.fightingAbility = data.Fighting_Ability;

    return powerLevel;
  }

  fetchPowerlevels() {
    const url = `${AppConstants.apiUrl}/powerlevels`;

    return this.http.get(url)
      .map(res => res.json())
      .map(res => {
        let data: Powerlevel[] = [];

        if (res) {
          data = res.map(this.createPowerLevelData);
        }

        return data;
      })
      .catch(this.handleError);
  }

  handleError(error) {
    console.error(error);

    return Observable.throw(error.json().message || 'Server error');
  }

}
