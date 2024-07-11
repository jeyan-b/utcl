import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-dynamic-comp',
  templateUrl: './dynamic-comp.component.html',
  styleUrls: ['./dynamic-comp.component.css']
})
export class DynamicCompComponent implements OnInit {
  @Input() controls: any[];
  selectedValue: string;
  dynamicForm: FormGroup;
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
  validatorsList: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the dynamic form with FormBuilder
    this.validatorsList = [];
    this.dynamicForm = this.formBuilder.group({
      // name : new FormControl('', [Validators.required, Validators.maxLength(5), Validators. minLength(1)])
    });
    this.controls.forEach((control: any) => {
      console.log("control ",control);
      this.validatorsList = [];
      if (control.setValidations?.required) {
        this.validatorsList.push(Validators.required);
      }
      if (control.setValidations?.maxLength) {
        this.validatorsList.push(Validators.maxLength(control.maxLength));
      }
      if (control.setValidations?.minLength) {
        this.validatorsList.push(Validators.maxLength(control.minLength));
      }
      console.log('this.validatorsList ', this.validatorsList);
      this.addControl(control);
    });

    console.log('this.dynamicForm ', this.dynamicForm);
  }

  addControl(control: any) {
    // Add a new control dynamically to the form group
    this.dynamicForm.addControl(
      control.controlName,
      this.formBuilder.control('', this.validatorsList)
    );
  }

  checkFormValid() {
    if (this.dynamicForm.invalid) {
      console.log('this.dynamicForm in invalid ', this.dynamicForm);
      return true;
    } else {
      return false;
    }
  }

  // getDynamicValidators() {
  //   // Add validators dynamically based on your logic
  //   const validators = [];
  //   if (/* some condition */) {
  //     validators.push(Validators.required);
  //   }
  //   if (/* some other condition */) {
  //     validators.push(Validators.minLength(3));
  //   }
  //   // Add more validators based on your requirements
  //   return validators;
  // }
}
