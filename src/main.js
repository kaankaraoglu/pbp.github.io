import '@fontsource/cal-sans/400.css'
import { createApp } from 'vue'
import './style.css'

// Each HTML page names its component in data-page.
const pages = import.meta.glob('./pages/*.vue', { eager: true })
const app = document.getElementById('app')
createApp(pages[`./pages/${app.dataset.page}.vue`].default).mount(app)

// Fade out before leaving the page; skip in-page anchors, new tabs and modified clicks.
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href]')
  if (!a || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
  if (a.target === '_blank' || !/^https?:$/.test(a.protocol)) return
  if (a.origin === location.origin && a.pathname === location.pathname) return
  e.preventDefault()
  document.body.classList.add('leaving')
  setTimeout(() => { location.href = a.href }, 2000)
})
// Back/forward cache can restore the page still faded out.
addEventListener('pageshow', () => document.body.classList.remove('leaving'))
