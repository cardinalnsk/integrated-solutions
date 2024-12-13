import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../utils/animation.service';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';
import { PROJECTS } from '../../data/portfolio-data';
import { Project } from '../../models/project.interface';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, PortfolioItemComponent],
  styleUrl: "./portfolio.component.scss",
  templateUrl: "./portfolio.component.html",
})
export class PortfolioComponent implements OnInit {
  projects: Project[] = PROJECTS;
  categories: string[] = ['Все', 'СКУД', 'Видеонаблюдение', 'Пожарная безопасность'];
  selectedCategory: string = 'Все';
  filteredProjects: Project[] = this.projects;
  selectedProject: Project | any = null;

  constructor(private animationService: AnimationService) {
  }

  ngOnInit() {
    this.animationService.observeElements();
  }

  filterProjects(category: string) {
    this.selectedCategory = category;
    this.filteredProjects = category === 'Все' 
      ? this.projects
      : this.projects.filter(p => p.category.includes(category));
  }

  openPopup(project: any) {
    this.selectedProject = project;
  }

  closePopup() {
    this.selectedProject = null;
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }
}