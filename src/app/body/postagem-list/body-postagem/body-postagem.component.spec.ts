import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPostagemComponent } from './body-postagem.component';

describe('BodyPostagemComponent', () => {
  let component: BodyPostagemComponent;
  let fixture: ComponentFixture<BodyPostagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyPostagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyPostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
