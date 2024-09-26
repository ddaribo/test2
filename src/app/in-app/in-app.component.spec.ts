import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { IgxIconButtonDirective, IgxRippleDirective, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxIconComponent, IgxAvatarComponent, IGX_NAVIGATION_DRAWER_DIRECTIVES } from 'igniteui-angular';
import { InAppComponent } from './in-app.component';

describe('InAppComponent', () => {
  let component: InAppComponent;
  let fixture: ComponentFixture<InAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ InAppComponent, NoopAnimationsModule, FormsModule, RouterTestingModule, IgxIconButtonDirective, IgxRippleDirective, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxIconComponent, IgxAvatarComponent, IGX_NAVIGATION_DRAWER_DIRECTIVES ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
