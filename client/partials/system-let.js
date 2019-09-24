import { LitElement, html, css } from 'lit-element'

import { ENV } from '@things-factory/system-base'
import '@things-factory/i18n-base'
import './opensource-license'
import { openPopup } from '@things-factory/layout-base'

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
    var appTitle = ENV['APP-NAME'] || 'things factory'
    if (appTitle.indexOf('@things-factory/') == 0) {
      appTitle = appTitle.substr(16)
    }
    appTitle = appTitle.toUpperCase()

    return html`
      <div>
        <mwc-icon>info</mwc-icon>
        <strong>${appTitle}</strong> <i18n-msg msgid="field.version"></i18n-msg> :
        ${ENV['APP-VERSION']}-${ENV['NODE-ENV']}
      </div>
      <div>
        <span>${ENV['APP-LICENSE']}</span>
        <span
          >Powered by &trade;Things Factory <i18n-msg msgid="field.version"></i18n-msg> ${ENV['SHELL-VERSION']}</span
        >
        <span
          >${appTitle} is built on several
          <a href="#" @click=${e => this.onClickOpenSourceLicense(e)}>open source software</a></span
        >
      </div>
    `
  }

  onClickOpenSourceLicense(e) {
    e.preventDefault()
    e.stopPropagation()

    openPopup(
      html`
        <opensource-license></opensource-license>
      `,
      {
        backdrop: true,
        size: 'large',
        title: 'Open Source Licenses'
      }
    )
  }
}

customElements.define('system-let', SystemLet)
