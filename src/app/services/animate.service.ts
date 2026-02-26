import { Injectable, NgZone } from '@angular/core';
import { animate } from 'motion';

@Injectable({
  providedIn: 'root',
})
export class AnimateService {
  constructor(private zone: NgZone) {}

  animateBell(element: HTMLElement) {
    this.zone.runOutsideAngular(() => {
      animate(
        element as any,
        {
          rotate: ['45deg', '-45deg', '0deg'],
        } as any,
        {
          offset: [0, 0.5, 1],
        } as any,
      );
    });
  }
}
