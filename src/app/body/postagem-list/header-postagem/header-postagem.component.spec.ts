import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPostagemComponent } from './header-postagem.component';

describe('HeaderPostagemComponent', () => {
  let component: HeaderPostagemComponent;
  let fixture: ComponentFixture<HeaderPostagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderPostagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
