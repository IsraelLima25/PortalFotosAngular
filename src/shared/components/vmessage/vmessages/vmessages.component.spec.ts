import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VmessagesComponent } from './vmessages.component';

describe('VmessagesComponent', () => {
  let component: VmessagesComponent;
  let fixture: ComponentFixture<VmessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VmessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VmessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
