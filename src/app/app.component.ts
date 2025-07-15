import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet],
  // O template abaixo contém apenas o <router-outlet></router-outlet>, que é o ponto onde o Angular
  // irá renderizar dinamicamente o componente correspondente à rota atual definida em app.routes.ts
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']  
})
export class AppComponent {
  title = 'reflexoes-biblicas';
}
