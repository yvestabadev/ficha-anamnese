import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisePesComponent } from './analise-pes.component';

describe('AnalisePesComponent', () => {
  let component: AnalisePesComponent;
  let fixture: ComponentFixture<AnalisePesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalisePesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalisePesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
