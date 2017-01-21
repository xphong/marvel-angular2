import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as AppConstants from '../../app.constants';
import { Character } from './character.model';

@Injectable()
export class CharactersService {

  constructor(private http: Http) { }

  createCharacterData(data) {
    let characterData: Character = {
      name: '',
      url: '',
      image: '',
      description: ''
    };

    characterData.name = data.name;
    characterData.url = (data.urls[1] ? data.urls[1].url : data.urls[0].url);
    characterData.image = data.thumbnail.path + '.' + data.thumbnail.extension;
    characterData.description =  (data.description === '' ? 'No description listed for this character.' : characterData.description = data.description);

    return characterData;
  }

  fetchCharactersByName(characterName) {
    const url = `${AppConstants.apiUrl}/characters?limit=12&name=${characterName}`;

    return this.http.get(url)
      .map(res => res.json())
      .map(res => {
        let data: Character[] = [];

        if (res.results) {
          data = res.results.map(this.createCharacterData);
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
