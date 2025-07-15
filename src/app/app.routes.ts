import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Rota raiz → mostra a Home
  { path: 'home', component: HomeComponent }, // Rota explícita → também funciona
  {
    path: 'planejamento-e-prioridades',
    loadComponent: () =>
      import('./pages/planejamento-e-prioridades/planejamento-e-prioridades.page').then(
        (m) => m.PlanejamentoEPrioridadesPage
      )
  },
  {
  path: 'disciplina-com-amor',
  loadComponent: () =>
    import('./pages/disciplina-com-amor/disciplina-com-amor.page').then(
      (m) => m.DisciplinaComAmorPage
    )
  }
];
