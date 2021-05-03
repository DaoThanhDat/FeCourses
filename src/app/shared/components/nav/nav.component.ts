import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  isVisible = false;
  oke = true;
  list = [
    {
      name: 'Dashboard',
      path: '/Dashboard',
    },
    {
      name: 'Course',
      path: '/Course',
    },
    {
      name: 'Pricing',
      path: '/Course',
    },
    {
      name: 'Blog',
      path: '/Course',
    },
    {
      name: 'Videos',
      path: '/Course',
    },
  ];
  constructor() {}
  // constructor()

  ngOnInit(): void {}

  // @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    let element = document.querySelector('.nav');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }
}
