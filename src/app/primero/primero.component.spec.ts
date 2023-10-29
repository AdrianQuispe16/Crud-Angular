import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeroComponent } from './primero.component';

describe('PrimeroComponent', () => {
  let component: PrimeroComponent;
  let fixture: ComponentFixture<PrimeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimeroComponent]
    });
    fixture = TestBed.createComponent(PrimeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
