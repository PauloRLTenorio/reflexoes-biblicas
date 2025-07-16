import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ALeiOAmorEAMisericordiaPage } from './a-lei-o-amor-e-a-misericordia.page';

describe('ALeiOAmorEAMisericordiaPage', () => {
  let component: ALeiOAmorEAMisericordiaPage;
  let fixture: ComponentFixture<ALeiOAmorEAMisericordiaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ALeiOAmorEAMisericordiaPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ALeiOAmorEAMisericordiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
