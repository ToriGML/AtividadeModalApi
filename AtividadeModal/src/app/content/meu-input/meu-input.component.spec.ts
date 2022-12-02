import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuInputComponent } from './meu-input.component';

describe('MeuInputComponent', () => {
  let component: MeuInputComponent;
  let fixture: ComponentFixture<MeuInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
