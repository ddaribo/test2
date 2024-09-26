import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxAvatarComponent, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-in-app',
  standalone: true,
  imports: [IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxIconButtonDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleDirective, IgxIconComponent, IgxAvatarComponent, RouterLink, RouterOutlet],
  templateUrl: './in-app.component.html',
  styleUrls: ['./in-app.component.scss']
})
export class InAppComponent {}
