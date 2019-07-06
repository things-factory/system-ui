import { LitElement, html, css } from 'lit-element'

import { ENV } from '@things-factory/system-base'
import '@things-factory/i18n-base'

class SystemMorenda extends LitElement {
  static get properties() {
    return {}
  }

  static get styles() {
    return []
  }

  render() {
    return html`
      <div><i18n-msg msgid="label.version"></i18n-msg> : ${ENV['APP-VERSION']}-${ENV['NODE-ENV']}</div>
      <div><i18n-msg msgid="label.license"></i18n-msg> : ${ENV['APP-LICENSE']}</div>
    `
  }
}

customElements.define('system-morenda', SystemMorenda)
