import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-popup',
  templateUrl: './header-popup.component.html',
  styleUrls: ['./header-popup.component.css']
})


export class HeaderPopupComponent implements OnInit {

  isVisible:boolean = true;
  
  constructor() { }

  ngOnInit(): void {
    this.isVisible = true;
  }

  popUpClose(){
    this.isVisible = false
  }  

}
