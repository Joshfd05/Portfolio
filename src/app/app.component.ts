import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EntryComponent } from "./components/entry/entry.component";
import { AboutComponent } from "./components/about/about.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ExtraComponent } from './components/extra/extra.component';



@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    EntryComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExtraComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolioJo';
}
