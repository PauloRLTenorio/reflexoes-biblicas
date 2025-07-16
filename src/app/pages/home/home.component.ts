import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  temas = [
    {
      nome: 'Planejamento e Prioridades',
      rota: '/planejamento-e-prioridades'
    },
    {
      nome: 'Disciplina com Amor',
      rota: '/disciplina-com-amor'
    },
    {
      nome: 'A Lei, o Amor e a Misericórdia',
      rota: '/a-lei-o-amor-e-a-misericordia'
    }
  ];
}