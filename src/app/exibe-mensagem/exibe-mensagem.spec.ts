import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeMensagem } from './exibe-mensagem';

describe('ExibeMensagem', () => {
  let component: ExibeMensagem;
  let fixture: ComponentFixture<ExibeMensagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExibeMensagem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibeMensagem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
