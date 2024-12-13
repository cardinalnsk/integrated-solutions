import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../models/project.interface';

@Component({
  selector: 'app-portfolio-item',
  standalone: true,
  imports: [CommonModule],
  styleUrl: "portfolio-item.component.scss",
  templateUrl: "portfolio-item.component.html"
})
export class PortfolioItemComponent {
  @Input() project!: Project;

  constructor() {
  }
}