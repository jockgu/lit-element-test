import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('app-root')
export class AppRoot extends LitElement {
  static styles = css`p { color: blue }`;

  @property()
  name = 'Somebody';

  firstUpdated() {
    alert('its updated');
  }

  override render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}
