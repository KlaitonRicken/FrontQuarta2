import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadesPesquiseComponent } from './cidades-pesquise.component';

describe('CidadesPesquiseComponent', () => {
  let component: CidadesPesquiseComponent;
  let fixture: ComponentFixture<CidadesPesquiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CidadesPesquiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadesPesquiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
