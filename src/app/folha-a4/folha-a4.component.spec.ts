import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolhaA4Component } from './folha-a4.component';

describe('FolhaA4Component', () => {
  let component: FolhaA4Component;
  let fixture: ComponentFixture<FolhaA4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolhaA4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolhaA4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
