import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterByEmailComponent } from './register-by-email.component';

describe('RegisterByEmailComponent', () => {
  let component: RegisterByEmailComponent;
  let fixture: ComponentFixture<RegisterByEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterByEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterByEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
