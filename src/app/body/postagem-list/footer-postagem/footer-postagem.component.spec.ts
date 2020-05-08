import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPostagemComponent } from './footer-postagem.component';

describe('FooterPostagemComponent', () => {
  let component: FooterPostagemComponent;
  let fixture: ComponentFixture<FooterPostagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterPostagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
