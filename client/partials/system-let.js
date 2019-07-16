import { LitElement, html, css } from 'lit-element'

import { ENV } from '@things-factory/system-base'
import '@things-factory/i18n-base'

class SystemLet extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;

        background-color: #e5e5e5;
        height: 30px;
        padding: 20px 0px 20px 0px;
        text-align: center;
      }

      p {
        margin: 0;
      }
    `
  }

  render() {
    return html`
      <p><i18n-msg msgid="field.version"></i18n-msg> : ${ENV['APP-VERSION']}-${ENV['NODE-ENV']}</p>
      <p><i18n-msg msgid="field.license"></i18n-msg> : ${ENV['APP-LICENSE']}</p>
    `
  }
}

customElements.define('system-let', SystemLet)
