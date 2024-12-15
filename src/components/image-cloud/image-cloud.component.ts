import {Component, HostListener} from '@angular/core';
import {JsonPipe, NgForOf, NgStyle} from "@angular/common";
import {shuffle} from "../../utils/shuffleFunction";

@Component({
    selector: 'app-image-cloud',
    standalone: true,
    imports: [
        NgForOf,
    ],
    templateUrl: './image-cloud.component.html',
    styleUrl: './image-cloud.component.scss'
})
export class ImageCloudComponent {
    features: string[] = ['Bosch', 'ESMI', 'Bolid', 'Rubezh', 'Tyco', 'Teko', 'Parsec', 'Apollo'];

    images: string[] = [];

    constructor() {
        const urls = [
            'assets/partners/logo/bosch.svg',
            'assets/partners/logo/esmi.png',
            'assets/partners/logo/rubezh.svg',
            'assets/partners/logo/tyco.png',
            'assets/partners/logo/teko.png',
            'assets/partners/logo/bolid.png',
            'assets/partners/logo/parsec.svg',
            'assets/partners/logo/apollo-fire-logo.png'
        ];
        this.images = shuffle(urls)
    }


}
