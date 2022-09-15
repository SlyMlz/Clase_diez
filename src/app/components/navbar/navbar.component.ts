import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  img='https://www.nintenderos.com/wp-content/uploads/2018/10/Nintendo-64.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
