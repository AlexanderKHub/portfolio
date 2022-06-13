import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {
  
  mySkills = [
    {
      'name': 'JavaScript',
      'image': 'assets/img/java script.png',
    },
    {
      'name': 'Angular',
      'image': 'assets/img/angular_icon.png',
    },
    {
      'name': 'HTML/CSS',
      'image': 'assets/img/html_css.png',
    },
    {
      'name': 'Database',
      'image': 'assets/img/database.png',
    },
    {
      'name': 'Git',
      'image': 'assets/img/git_icon.png',
    },
    {
      'name': 'SCRUM',
      'image': 'assets/img/scrum.png',
    },
    {
      'name': 'Rest API',
      'image': 'assets/img/rest_api.png',
    },
    {
      'name': 'Design Thinking',
      'image': 'assets/img/design.png',
    },
    {
      'name': 'Test automation',
      'image': 'assets/img/test_automation.png',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
