import route from './client/route'
import bootstrap from './client/bootstrap'

export default {
  route,
  routes: [
    {
      tagname: 'system-info',
      page: 'system'
    }
  ],
  bootstrap
}
