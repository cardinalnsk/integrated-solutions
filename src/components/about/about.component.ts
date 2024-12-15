import {Component} from '@angular/core';
import {ImageCloudComponent} from "../image-cloud/image-cloud.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    imports: [
        ImageCloudComponent
    ],
    styleUrl: './about.component.scss'
})
export class AboutComponent {
}