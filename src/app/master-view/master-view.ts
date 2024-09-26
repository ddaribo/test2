import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcAccordionComponent, IgcExpansionPanelComponent } from 'igniteui-webcomponents';

defineComponents(IgcAccordionComponent, IgcExpansionPanelComponent);

@customElement('app-master-view')
export default class MasterView extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .accordion {
      overflow-y: auto;
      flex-shrink: 0;
    }
    .text {
      height: max-content;
      min-width: min-content;
    }
  `;

  render() {
    return html`
      <link rel='stylesheet' href='../../ig-theme.css'>
      <igc-accordion class="accordion">
        <igc-expansion-panel>
          <p class="typography__body-2 text">
            Body 2
          </p>
          <span slot="title">Title goes here...</span>
        </igc-expansion-panel>
        <igc-expansion-panel>
          <p class="typography__body-2 text">
            Body 2
          </p>
          <span slot="title">Title goes here...</span>
        </igc-expansion-panel>
        <igc-expansion-panel>
          <p class="typography__body-2 text">
            Body 2
          </p>
          <span slot="title">Title goes here...</span>
        </igc-expansion-panel>
      </igc-accordion>
    `;
  }
}
