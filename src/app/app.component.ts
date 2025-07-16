import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
  <app-header></app-header>
  <router-outlet></router-outlet>
`,
  styleUrls: ['./app.component.scss']  
})
export class AppComponent {
  title = 'reflexoes-biblicas';
}
