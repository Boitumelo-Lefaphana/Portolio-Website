import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../models/Projects';
import { Tag } from '../models/tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  project: Project = {
    id: 0,
    name: 'Sample Angular App',
    summary: 'Test Description',
    description:'',
    projectLink: '',
    tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
    pictures: []
  }
  constructor(private titleService: Title){
    this.titleService.setTitle('Boitumelo Lefaphana - Portfolio')
  }
}
