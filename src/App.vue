<script setup>
import { lang, t } from './i18n'
// TODO: replace placeholder content with real band info.
const releases = [{ title: 'Release title', year: 'YYYY', url: '#' }]
const shows = [{ date: 'YYYY-MM-DD', venue: 'Venue', city: 'City', url: '' }]
const links = [
  { label: 'Bandcamp', url: '#' },
  { label: 'Spotify', url: '#' },
  { label: 'YouTube', url: '#' },
  { label: 'Instagram', url: '#' },
]
const email = 'contact@example.com'
</script>

<template>
  <header class="hero">
    <h1>Pitch Black Process</h1>
    <p>{{ t('tagline') }}</p>
    <nav><a href="#music">{{ t('music') }}</a> <a href="#shows">{{ t('shows') }}</a> <a href="#about">{{ t('about') }}</a> <a href="#contact">{{ t('contact') }}</a>
      <button v-for="l in ['en', 'tr']" :key="l" :disabled="lang === l" @click="lang = l">{{ l.toUpperCase() }}</button>
    </nav>
  </header>
  <main>
    <section id="music">
      <h2>{{ t('music') }}</h2>
      <ul><li v-for="r in releases" :key="r.title"><a :href="r.url">{{ r.title }}</a> <small>{{ r.year }}</small></li></ul>
    </section>
    <section id="shows">
      <h2>{{ t('shows') }}</h2>
      <p v-if="!shows.length">{{ t('noShows') }}</p>
      <ul v-else><li v-for="s in shows" :key="s.date + s.venue">{{ s.date }} · {{ s.venue }}, {{ s.city }}</li></ul>
    </section>
    <section id="about">
      <h2>{{ t('about') }}</h2>
      <p>{{ t('bio') }}</p>
    </section>
    <section id="contact">
      <h2>{{ t('contact') }}</h2>
      <p><a :href="'mailto:' + email">{{ email }}</a></p>
      <p><a v-for="l in links" :key="l.label" :href="l.url">{{ l.label }}</a></p>
    </section>
  </main>
  <footer>© Pitch Black Process</footer>
</template>

<style scoped>
.hero { text-align:center; padding:6rem 1rem 3rem; }
h1 { font-size:clamp(2.2rem,8vw,5rem); letter-spacing:.08em; text-transform:uppercase; margin:0; }
.hero p { color:var(--dim); }
nav a, section p a { margin:0 .75rem; }
main { max-width:42rem; margin:0 auto; padding:0 1rem; }
button { background:none; border:1px solid var(--dim); color:var(--fg); margin-left:.5rem; cursor:pointer; }
button:disabled { border-color:var(--fg); cursor:default; }
h2 { border-bottom:1px solid var(--line); padding-bottom:.25rem; }
ul { padding:0; list-style:none; }
small, footer { color:var(--dim); }
footer { text-align:center; padding:3rem 1rem; }
</style>
