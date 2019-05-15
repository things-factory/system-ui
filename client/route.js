export default function route(page) {
  switch (page) {
    case 'system':
      import('./pages/system-info')
      return page
  }
}
