import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  js_btn_focus:boolean = false;
  all_btn_focus:boolean = false;
  angular_btn_focus:boolean = false;
  no_slide:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  showAll(){
    this.all_btn_focus = true;
    this.js_btn_focus = false;
    this.angular_btn_focus = false;
    document.getElementById('slackclone')?.classList.remove('hide');
    document.getElementById('ringoffire')?.classList.remove('hide');
    document.getElementById('elpolloloco')?.classList.remove('hide');
    document.getElementById('pokedex')?.classList.remove('hide');
  }

  showAngular(){
    this.all_btn_focus = false;
    this.js_btn_focus = false;
    this.angular_btn_focus = true;
    document.getElementById('slackclone')?.classList.remove('hide');
    document.getElementById('ringoffire')?.classList.remove('hide');
    document.getElementById('elpolloloco')?.classList.add('hide');
    document.getElementById('pokedex')?.classList.add('hide');
  }

  showJS(){
    this.all_btn_focus = false;
    this.js_btn_focus = true;
    this.angular_btn_focus = false;
    document.getElementById('js-btn')?.classList.add('focus-btn')
    document.getElementById('slackclone')?.classList.add('hide');
    document.getElementById('ringoffire')?.classList.add('hide');
    document.getElementById('elpolloloco')?.classList.remove('hide');
    document.getElementById('pokedex')?.classList.remove('hide');
  }

}
