import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  // onclick of button remove class from all divs having class 'active'
  removeVisibilityClass() {
    const divs = document.getElementsByClassName('remove-visibility');
    for (let i = 0; i < divs.length; i++) {
      divs[i].classList.remove('remove-visibility');
    }
  }
  addvisibilityClass() {
    const divs = document.getElementsByClassName('new-to-be-added');
    for (let i = 0; i < divs.length; i++) {
      divs[i].classList.add('remove-visibility');
    }
  }

}
