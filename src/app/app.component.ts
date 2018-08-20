import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  isOpenForm: boolean;
  isOpenPopup:boolean;
  message;

  ngOnInit() {
    this.isOpenForm = false;
    this.isOpenPopup = false;
  }

  openForm(){
    this.isOpenForm = this.isOpenForm? false : true;
    this.isOpenPopup = false;
  }

  onChanged(message:{name:string, city:string}) {
    console.log(message);
    this.message = message;
    this.isOpenForm = false;
    this.isOpenPopup = true;
  }
}
