import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacaComponent } from './placa.component';

describe('PlacaComponent', () => {
  let component: PlacaComponent;
  let fixture: ComponentFixture<PlacaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
