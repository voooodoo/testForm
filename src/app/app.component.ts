import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  isOpenForm: boolean;
  
  ngOnInit() {
    this.isOpenForm = false;
  }
  openForm(){
    this.isOpenForm = this.isOpenForm? false : true;
  }
  onChanged($event) {
    console.log(event);
    this.isOpenForm = false;
  }
}
