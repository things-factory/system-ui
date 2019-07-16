import { html } from 'lit-html'
import { store } from '@things-factory/shell'
import { ADD_SETTING } from '@things-factory/setting-base'

export default function bootstrap() {
  import('./partials/system-let')

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
