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
      div {
        padding: 2px;
      }
      mwc-icon {
        font-size: 14px;
        color: var(--setting-info-color);
      }
      strong {
        color: var(--setting-info-appname-color);
      }
      span {
        display: block;
        text-indent: 18px;
        font-size: 12px;
      }
      [positionR] {
        float: right;
      }
    `
  }

  render() {
    return html`
      <div>
        <mwc-icon>info</mwc-icon>
        <strong>OPA-APP</strong> <i18n-msg msgid="field.version"></i18n-msg> : ${ENV['APP-VERSION']}-${ENV['NODE-ENV']}
      </div>
      <div>
        <mwc-icon>copyright</mwc-icon> HatioSEA Inc.
        <span>OPA-APP is built on several <a href="#">open source software</a></span>
      </div>
      <!-- <span positionR><i18n-msg msgid="field.license"></i18n-msg> : ${ENV['APP-LICENSE']}</span> -->
    `
  }
}

customElements.define('system-let', SystemLet)
