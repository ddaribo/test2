import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxButtonDirective, IgxRippleDirective, IGX_CARD_DIRECTIVES, IgxIconButtonDirective, IgxIconComponent, IGX_LIST_DIRECTIVES } from 'igniteui-angular';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DashboardComponent, NoopAnimationsModule, FormsModule, RouterTestingModule, HttpClientTestingModule, IgxButtonDirective, IgxRippleDirective, IGX_CARD_DIRECTIVES, IgxIconButtonDirective, IgxIconComponent, IGX_LIST_DIRECTIVES ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
