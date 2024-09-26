import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular';
import { SetNewPasswordComponent } from './set-new-password.component';

describe('SetNewPasswordComponent', () => {
  let component: SetNewPasswordComponent;
  let fixture: ComponentFixture<SetNewPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SetNewPasswordComponent, NoopAnimationsModule, FormsModule, RouterTestingModule, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxRippleDirective ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetNewPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
