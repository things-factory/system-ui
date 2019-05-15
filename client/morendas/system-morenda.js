import { LitElement, html, css } from 'lit-element'

import { ENV } from '@things-factory/system-base'

class SystemMorenda extends LitElement {
  static get properties() {
    return {}
  }

  static get styles() {
    return []
  }

  render() {
    return html`
      <div>App Ver. : ${ENV['APP-VERSION']}-${ENV['NODE-ENV']}</div>
      <div>LICENSE : ${ENV['APP-LICENSE']}</div>
    `
  }
}

customElements.define('system-morenda', SystemMorenda)
