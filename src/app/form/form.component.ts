import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  form: FormGroup;

  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      selectCity: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],  
    }, {validator: this.passwordConfirming})
  }

  passwordConfirming(c: FormGroup) {
    if (c.controls.password.value !== c.controls.confirmPassword.value) {
        return {confirm: true};
    }
  }
  onSubmit(form) {
    console.log(form);
    this.close.emit(form); 
  }
}
