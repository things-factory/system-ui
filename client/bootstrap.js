import { html } from 'lit-html'
import { store } from '@things-factory/shell'
import { ADD_SETTING } from '@things-factory/setting-base'

import './partials/system-let'

export default function bootstrap() {
  store.dispatch({
    type: ADD_SETTING,
    setting: {
      seq: 0,
      template: html`
        <system-let></system-let>
      `
    }
  })
}
