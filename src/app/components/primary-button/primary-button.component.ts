import { Component } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports: [],
  template: `
    <button
      class="border-2 border-slate-200 py-1 px-3 rounded-xl hover:bg-slate-200 w-fit text-slate-700"
    >
      <ng-content />
    </button>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class PrimaryButtonComponent {}
