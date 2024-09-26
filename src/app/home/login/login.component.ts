import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxCheckboxComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxCheckboxComponent, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public checked: boolean = true;
}
