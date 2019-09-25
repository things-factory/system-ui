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
        text-align: center;

        background-color: var(--system-info-background-color);
        padding: var(--system-info-content-padding);
        color: var(--system-info-color);
        font: var(--system-info-font);
      }
      :host * {
        vertical-align: middle;
      }
      div {
        padding: 10px;
      }
      strong {
        font: var(--system-info-appname-font);
        color: var(--system-info-appname-color);
      }
      span {
        display: block;
      }
      span.description {
        padding: 3px 10px;
        font: var(--system-info-description-font);
        color: var(--system-info-description-color);
      }
      span.version {
        display: inline-block;
        border-radius: 5px;
        opacity: 0.8;
        background-color: var(--system-info-version-background-color);
        padding: 3px 10px;
        font: var(--system-info-version-font);
        color: var(--system-info-version-color);
      }
      .poweredBy {
        background-color: #efefef;
        position: absolute;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        padding: 7px 0;
        width: 100%;
        bottom: 0;
        text-align: center;
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
        <strong>${title}</strong>
        <span class="description">${description}</span>
        <span class="version"
          ><i18n-msg msgid="field.version"></i18n-msg> : ${ENV['APP-VERSION']}-${ENV['NODE-ENV']}</span
        >
      </div>

      <div>
        <span>${copyright}</span>

        <span
          >${title} is built on several
          <a href="#" @click=${e => this.onClickOpenSourceLicense(e)}>open source software</a></span
        >
      </div>

      <div class="poweredBy">
        <span
          >Powered by &trade;Things Factory <i18n-msg msgid="field.version"></i18n-msg> ${ENV['SHELL-VERSION']}</span
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
