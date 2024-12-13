import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  constructor(private ngZone: NgZone) {}

  observeElements() {
    const observer = new IntersectionObserver((entries) => {
      this.ngZone.run(() => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  }
}