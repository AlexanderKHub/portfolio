import { Component, Input, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  

 

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
