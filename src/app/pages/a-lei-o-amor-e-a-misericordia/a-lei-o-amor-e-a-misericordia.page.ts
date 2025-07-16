import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-a-lei-o-amor-e-a-misericordia',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './a-lei-o-amor-e-a-misericordia.page.html',
  styleUrls: ['./a-lei-o-amor-e-a-misericordia.page.scss']
})
export class ALeiOAmorEAMisericordiaPage {
  public metadados = {
    publicado: new Date('2025-07-16'), // Data fixa da primeira publicação
    revisado: new Date()               // Data da última revisão (agora)
  };
}