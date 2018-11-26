import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCadastrarRecorteComponent } from './admin-cadastrar-recorte.component';

describe('AdminCadastrarRecorteComponent', () => {
  let component: AdminCadastrarRecorteComponent;
  let fixture: ComponentFixture<AdminCadastrarRecorteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCadastrarRecorteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCadastrarRecorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
