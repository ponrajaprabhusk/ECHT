import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  isUser:boolean = true;
  isSidebarVisible:boolean = false;

  ngOnInit(): void {
  }

  sidebarOpen() {
    this.isSidebarVisible = true; 
  }

  sidebarClose(){
    this.isSidebarVisible = false;
  }

}
