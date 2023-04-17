import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionCdsComponent } from './informacion-cds.component';

describe('InformacionCdsComponent', () => {
  let component: InformacionCdsComponent;
  let fixture: ComponentFixture<InformacionCdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionCdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionCdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
