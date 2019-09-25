import { html, css } from 'lit-element'

import { PageView } from '@things-factory/shell'
import { ENV } from '@things-factory/system-base'
import { i18next, localize } from '@things-factory/i18n-base'
import { openPopup } from '@things-factory/layout-base'
import '@things-factory/i18n-base'

import '../viewparts/opensource-license'

import logo from '../../assets/images/hatiolab-logo.png'

class SystemInfo extends localize(i18next)(PageView) {
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

  get context() {
    return {
      title: i18next.t('label.about-system')
    }
  }

  get applicationMeta() {
    if (!this._applicationMeta) {
      var iconLink = document.querySelector('link[rel="application-icon"]')
      var titleMeta = document.querySelector('meta[name="application-name"]')
      var descriptionMeta = document.querySelector('meta[name="application-description"]')
      var copyrightMeta = document.querySelector('meta[name="application-copyright"]')

      this._applicationMeta = {
        icon: iconLink ? iconLink.href : logo,
        title: titleMeta ? titleMeta.content : 'Things Factory',
        description: descriptionMeta ? descriptionMeta.content : 'Reimagining Software',
        copyright: copyrightMeta ? copyrightMeta.content : 'Copyright © hatiolab.com. All Rights Reserved." />'
      }
    }

    return this._applicationMeta
  }

  render() {
    var { icon, title, description, copyright } = this.applicationMeta

    return html`
      <img src=${icon} />

      <div>
        <mwc-icon>info</mwc-icon>
        <strong>${title}</strong>
        <span>${description}</span>
        <i18n-msg msgid="field.version"></i18n-msg> : ${ENV['APP-VERSION']}-${ENV['NODE-ENV']}
      </div>

      <div>
        <span>${copyright}</span>
        <span
          >Powered by &trade;Things Factory <i18n-msg msgid="field.version"></i18n-msg> ${ENV['SHELL-VERSION']}</span
        >
        <span
          >${title} is built on several
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

customElements.define('system-info', SystemInfo)
