import { html } from 'lit-html'
import { store } from '@things-factory/shell'
import { ADD_MORENDA } from '@things-factory/more-base'

import './morendas/system-morenda'

export default function bootstrap() {
  store.dispatch({
    type: ADD_MORENDA,
    morenda: {
      name: 'System Brief.',
      template: html`
        <system-morenda></system-morenda>
      `
    }
  })
}
