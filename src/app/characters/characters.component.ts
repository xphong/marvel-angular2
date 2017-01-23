import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { Character } from '../shared/models/character.model';
import { CharactersService } from '../shared/services/characters/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  public characters: Character[] = [];
  public serverError = false;
  public charactersError = false;
  public isLoading = false;

  private form: FormGroup;
  private characterName = new FormControl('', Validators.required);

  constructor(private formBuilder: FormBuilder, private charactersService: CharactersService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      characterName:  this.characterName
    });
  }

  handleSearch() {
    this.characters = [];
    this.isLoading = true;

    this.charactersService.fetchCharactersByName(this.form.value.characterName)
      .subscribe(data => {
        if (!!data.length) {
          this.serverError = false;
          this.charactersError = false;

          this.characters = data;
        } else {
          this.serverError = false;
          this.charactersError = true;
        }

        this.isLoading = false;
      }, error => {
        this.serverError = true;
        this.charactersError = false;
        this.isLoading = false;
      });
  }

}
