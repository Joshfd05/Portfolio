import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [CommonModule]
})
export class ProjectsComponent {
  projects = [
    { name: 'Project 1', description: 'Description for project 1' },
    { name: 'Project 2', description: 'Description for project 2' }
  ];
}
