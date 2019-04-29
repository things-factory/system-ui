import { html, css } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin.js'
import { store, PageView } from '@things-factory/shell'

class SystemInfo extends connect(store)(PageView) {
  static get properties() {
    return {
      modules: Object
    }
  }

  static get styles() {
    return [
      css`
        :host {
          overflow: auto;
        }

        .module {
          margin: 10px;
        }

        label {
          color: red;
        }
      `
    ]
  }

  get tools() {
    return html`
      <label>System Information</label>
    `
  }

  render() {
    return html`
      ${this.modules.map(
        m => html`
          <div class="module">
            <div>
              <label>name</label>
              ${m.name}
            </div>

            <div>
              <label>version</label>
              ${m.version}
            </div>

            <div>
              <label>license</label>
              ${m.license}
            </div>
          </div>
        `
      )}
    `
  }

  stateChanged(state) {
    this.modules = state.app.modules
  }
}

window.customElements.define('system-info', SystemInfo)
