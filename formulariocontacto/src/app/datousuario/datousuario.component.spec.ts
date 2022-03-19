import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatousuarioComponent } from './datousuario.component';

describe('DatousuarioComponent', () => {
  let component: DatousuarioComponent;
  let fixture: ComponentFixture<DatousuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatousuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatousuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
