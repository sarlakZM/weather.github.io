import { Component } from '@angular/core';
import { NabvarComponent } from './core/components/nabvar/nabvar.component';

@Component({
  selector: 'app-root',
  template: `
    <app-nabvar></app-nabvar>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
