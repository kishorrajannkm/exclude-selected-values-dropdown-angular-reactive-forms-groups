import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { IDropDownOptions } from './i-drop-down-options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public dynamicControlsForm: FormGroup;
  public testArray : IDropDownOptions[]= [{
	"mainKey": "Option A",
	"subKeys": ["AA", "AB", "AC", "AD"]
  },
  {
	"mainKey": "Option B",
	"subKeys": ["BA", "BB", "BC", "BD"]
  },
  {
	"mainKey": "Option C",
	"subKeys": ["CA", "CB", "CC", "CD"]
  },
  {
	"mainKey": "Option D",
	"subKeys": ["DA", "DB", "DC", "DD"]
  }];
	
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.dynamicControlsForm = this._fb.group({
      newFormControlArray: this._fb.array([this.initFormControl()])
    });
  }

  initFormControl() {
    return this._fb.group({
      mainKeyChosen: [''],
      subKeyChosen: ['']
    });
  }

  addAnotherFormControl() {
    const control = <FormArray>this.dynamicControlsForm.controls['newFormControlArray'];
    control.push(this.initFormControl());
  }

  deleteFormControl(index: number, selectedTest, selectedSampleVolume) {
    const control = <FormArray>this.dynamicControlsForm.controls['newFormControlArray'];
    control.removeAt(index);
  }

  changeMainKey(i){
    this.dynamicControlsForm.controls['newFormControlArray'].value[i].subKeyChosen = ''
    let newFormValues = this.dynamicControlsForm.controls['newFormControlArray'].value;
    this.dynamicControlsForm.controls['newFormControlArray'].setValue(newFormValues);
  }

}
