import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, RouterLink],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {}
