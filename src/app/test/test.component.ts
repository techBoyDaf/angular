import { JsonPipe } from '@angular/common';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  appName = "My first app in Angular 8";  
  showData($event: any){ 
    alert("button is clicked!");
    if($event) {
      JSON.stringify (alert(($event.target))); 
      JSON.stringify(alert($event.target.value));
    }
    }
    userName:string = "Peter";
    myCSSClass = "red";
applyCSSClass = false;


  
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
