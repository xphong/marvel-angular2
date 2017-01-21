import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  public serverError = '';
  public charactersError = '';

  private form: FormGroup;
  private characterName = new FormControl('', Validators.required);

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      characterName:  this.characterName
    });
  }

  handleSearch() {
    console.log('test');
  }

}
