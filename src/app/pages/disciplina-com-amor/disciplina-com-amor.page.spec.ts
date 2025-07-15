import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinaComAmorPage } from './disciplina-com-amor.page';

describe('DisciplinaComAmorPage', () => {
  let component: DisciplinaComAmorPage;
  let fixture: ComponentFixture<DisciplinaComAmorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisciplinaComAmorPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisciplinaComAmorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
