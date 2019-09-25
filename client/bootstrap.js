import { html } from 'lit-element'

import '@material/mwc-icon'

import { store, navigate } from '@things-factory/shell'
import { ADD_MORENDA } from '@things-factory/more-base'

export default function bootstrap() {
  /* add user profile morenda */
  store.dispatch({
    type: ADD_MORENDA,
    morenda: {
      icon: html`
        <mwc-icon>info</mwc-icon>
      `,
      name: html`
        <i18n-msg msgid="label.about-system"></i18n-msg>
      `,
      action: () => {
        navigate('system')
      }
    }
  })
}
