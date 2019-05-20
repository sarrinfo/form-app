import { Component, OnInit } from '@angular/core';
import { ValidatorFn, Validators, FormBuilder, FormArray, FormGroup, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'form-app';
 // name = this.fb[''];

  profileForm = this.fb.group({
    firstName: [''],
    lastName: ['', Validators.required],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  }, { validators: dateMustGreatValidator });


  // profileForm1 = this.fb.group({
  //   firstName: ['', Validators.required],
  //   lastName: [''],
  //   address: this.fb.group({
  //     street: [''],
  //     city: [''],
  //     state: [''],
  //     zip: ['']
  //   }),
  //   aliases: this.fb.array([
  //     this.fb.control('')
  //   ])
  // });


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.updateProfile();
    // this.updateName();
  }

  public updateName(){
    //this.name.setValue('Nancy');

  }

  // public get lastName(){
  //   return this.profileForm.get('lastName');
  // }

  // public get firstName(){
  //   return this.profileForm.get('firstName');
  // }

  // get aliases() {
  //   return this.profileForm1.get('aliases') as FormArray;
  // }
  // addAlias() {
  //   this.aliases.push(this.fb.control(''));
  // }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });

  //   this.profileForm1.patchValue({
  //     firstName: 'Malick',
  //     address: {
  //       street: '1453 Drew Street'
  //     }
  //   });
  // }

  // onSubmit() {
  //   console.warn(this.profileForm.value);
  // }

}

// export function dateMustGreatValidator(nameRe: RegExp): ValidatorFn {
//   return (control: AbstractControl): {[key: string]: any} | null => {
//     const forbidden = nameRe.test(control.value);

//     return forbidden ? {'resultDate': {value: control.value}} : null;
//   };
}

export const dateMustGreatValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const last = control.get('lastName');
  const first = control.get('firstName');

  return first && last && last.value <= first.value ? { 'resultRevealed': true } : null;
};


