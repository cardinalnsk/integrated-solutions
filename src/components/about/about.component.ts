import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    imports: [
        NgForOf
    ],
    styleUrl: './about.component.scss'
})
export class AboutComponent {
    features: string[] = ['Bosch', 'ESMI', 'Bolid', 'Rubezh', 'Tyco', 'Teko', 'Parsec', 'Apollo'];
}