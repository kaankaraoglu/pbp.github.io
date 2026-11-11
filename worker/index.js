// Basic auth in front of the GitHub Pages site. Credentials come from the
// AUTH_USER and AUTH_PASS secrets.
const digest = (s) => crypto.subtle.digest('SHA-256', new TextEncoder().encode(s))

async function same(a, b) {
  return crypto.subtle.timingSafeEqual(await digest(a), await digest(b))
}

export default {
  async fetch(request, env) {
    const header = request.headers.get('Authorization') ?? ''
    const [scheme, encoded = ''] = header.split(' ')
    if (scheme === 'Basic') {
      let decoded = ''
      try { decoded = atob(encoded) } catch {} // malformed header falls through to 401
      const i = decoded.indexOf(':')
      if (i >= 0 && (await same(decoded.slice(0, i), env.AUTH_USER)) & (await same(decoded.slice(i + 1), env.AUTH_PASS))) {
        return fetch(request) // pass through to GitHub Pages
      }
    }
    return new Response('Authentication required', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="PBP", charset="UTF-8"' },
    })
  },
}
