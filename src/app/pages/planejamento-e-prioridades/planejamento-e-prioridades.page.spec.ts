import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanejamentoEPrioridadesPage } from './planejamento-e-prioridades.page';

describe('PlanejamentoEPrioridadesPage', () => {
  let component: PlanejamentoEPrioridadesPage;
  let fixture: ComponentFixture<PlanejamentoEPrioridadesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanejamentoEPrioridadesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanejamentoEPrioridadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
