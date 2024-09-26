import { Component } from '@angular/core';
import { IGX_ACCORDION_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-master-view',
  standalone: true,
  imports: [IGX_EXPANSION_PANEL_DIRECTIVES, IGX_ACCORDION_DIRECTIVES],
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent {}
