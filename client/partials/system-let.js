import { LitElement, html, css } from 'lit-element'

import { ENV } from '@things-factory/system-base'
import '@things-factory/i18n-base'

class SystemLet extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;

        background-color: var(--setting-info-background-color);
        padding: var(--setting-content-padding);
        font: var(--setting-info-font);
        color: var(--setting-info-color);
      }
      :host * {
        vertical-align: middle;
      }
      mwc-icon {
        font-size: 14px;
        color: var(--setting-info-color);
      }
      [positionR] {
        float: right;
      }
    `
  }

  render() {
    return html`
      <span>
        <mwc-icon>info</mwc-icon>
        <i18n-msg msgid="field.version"></i18n-msg> : ${ENV['APP-VERSION']}-${ENV['NODE-ENV']}
      </span>
      <span positionR><i18n-msg msgid="field.license"></i18n-msg> : ${ENV['APP-LICENSE']}</span>
    `
  }
}

customElements.define('system-let', SystemLet)
