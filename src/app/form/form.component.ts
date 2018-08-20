import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  form: FormGroup;
  message = {
    name:'',
    city:''
  }


  @Output('message') messageEmmiter: EventEmitter<{name:string, city:string}> = new EventEmitter();

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
    this.message.name = this.form.get('name').value;
    this.message.city = this.form.get('selectCity').value;
    this.messageEmmiter.emit(this.message); 
  }
}
