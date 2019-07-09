import { html } from 'lit-html'
import { store } from '@things-factory/shell'
import { ADD_MORENDA } from '@things-factory/more-base'

import './morendas/system-morenda'

export default function bootstrap() {
  store.dispatch({
    type: ADD_MORENDA,
    morenda: {
      icon: html`
        <mwc-icon>info</mwc-icon>
      `,
      name: html`
        <i18n-msg msgid="field.system brief"></i18n-msg>
      `,
      template: html`
        <system-morenda></system-morenda>
      `
    }
  })
}
