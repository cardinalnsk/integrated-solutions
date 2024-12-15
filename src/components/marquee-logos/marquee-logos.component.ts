import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {shuffle} from "../../utils/shuffleFunction";

@Component({
    selector: 'app-marquee-logos',
    standalone: true,
    imports: [
        NgForOf
    ],
    templateUrl: './marquee-logos.component.html',
    styleUrl: './marquee-logos.component.scss'
})
export class MarqueeLogosComponent {
    logos: string[] = [];

    ngOnInit() {
        const strings = [
            'assets/partners/logo/Abloy_Logo_.webp',
            'assets/partners/logo/apollo-fire-logo.png',
            'assets/partners/logo/artsok.png',
            'assets/partners/logo/axis.svg',
            'assets/partners/logo/bolid.png',
            'assets/partners/logo/bosch.svg',
            'assets/partners/logo/came.svg',
            'assets/partners/logo/commax.svg',
            'assets/partners/logo/Cooper_Wheelock_logo.jpg',
            'assets/partners/logo/effeff_logo.webp',
            'assets/partners/logo/Elsys logo_1.png',
            'assets/partners/logo/esmi.png',
            'assets/partners/logo/inter-m.png',
            'assets/partners/logo/iss-logo.svg',
            'assets/partners/logo/kalatel-1.svg',
            'assets/partners/logo/logo-ademco.png',
            'assets/partners/logo/logo-legrand-sa-1.svg',
            'assets/partners/logo/Logo-Nothern_Computers.svg',
            'assets/partners/logo/logo-optex.png',
            'assets/partners/logo/logo_dsc_new.png',
            'assets/partners/logo/logo_omega_sound.svg',
            'assets/partners/logo/panasonic.svg',
            'assets/partners/logo/parsec.svg',
            'assets/partners/logo/perco.svg',
            'assets/partners/logo/sanyo.svg',
            'assets/partners/logo/system_sensors.png'
        ];
        this.logos = shuffle(strings)
    }
}