import { LitElement, html, css } from 'lit-element'
import { ScrollbarStyles } from '@things-factory/shell'

export class OpenSourceLicense extends LitElement {
  static get styles() {
    return [
      ScrollbarStyles,
      css`
        :host {
          display: flex;
          flex-direction: row;

          background-color: white;
        }

        [licenses] {
          flex: 1;
          overflow: auto;

          padding: 15px;
        }
      `
    ]
  }
  static get properties() {
    return {
      licenses: Object
    }
  }

  async firstUpdated() {
    try {
      const response = await fetch('/licenses', {
        method: 'GET'
      })

      if (response.ok) {
        this.licenses = await response.json()
        console.log(this.licenses)
      } else {
        throw new Error(response)
      }
    } catch (e) {
      console.error(e)
    }
  }

  render() {
    var licenses = this.licenses || {}

    return html`
      <ul licenses>
        ${Object.keys(licenses).map(name => {
          var license = licenses[name]

          return html`
            <li>
              <span>${name}</span>
              <a href=${license.licenseUrl}>${license.licenses}</a>
            </li>
          `
        })}
      </ul>
    `
  }
}

customElements.define('opensource-license', OpenSourceLicense)
