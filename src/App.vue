<script setup>
import { lang, t } from './i18n'
// Sources: Metallian, Spirit of Metal, Metal Temple, Rock N Growl, Rebel Radio.
const releases = [
  { title: 'SIR', type: 'ep', year: 2019 },
  { title: 'Derin', type: 'album', year: 2016 },
  { title: 'Hand of God?', type: 'album', year: 2013 },
  { title: 'Deceiver', type: 'ep', year: 2013 },
]
const members = [
  { name: 'Emrah Demirel', role: 'vocalsGuitar' },
  { name: 'Kerem İnci', role: 'guitar' },
  { name: 'Emre Demirel', role: 'bass' },
  { name: 'Fikri Yargıcı', role: 'drums' },
]
const shows = []
const links = [
  { label: 'Website', url: 'https://www.pitchblackprocess.com/' },
  { label: 'Facebook', url: 'https://www.facebook.com/pitchblackprocess' },
  { label: 'YouTube', url: 'https://youtube.com/pitchblackprocess' },
]
</script>

<template>
  <header class="hero">
    <h1 lang="en">Pitch Black Process</h1>
    <nav><a href="#music">{{ t('music') }}</a> <a href="#shows">{{ t('shows') }}</a> <a href="#about">{{ t('about') }}</a> <a href="#contact">{{ t('contact') }}</a>
      <button v-for="l in ['en', 'tr']" :key="l" :disabled="lang === l" @click="lang = l">{{ l.toUpperCase() }}</button>
    </nav>
  </header>
  <main>
    <section id="music">
      <h2>{{ t('music') }}</h2>
      <ul><li v-for="r in releases" :key="r.title">{{ r.title }} <small>{{ t(r.type) }}, {{ r.year }}</small></li></ul>
    </section>
    <section id="shows">
      <h2>{{ t('shows') }}</h2>
      <p v-if="!shows.length">{{ t('noShows') }}</p>
      <ul v-else><li v-for="s in shows" :key="s.date + s.venue">{{ s.date }} · {{ s.venue }}, {{ s.city }}</li></ul>
    </section>
    <section id="about">
      <h2>{{ t('about') }}</h2>
      <p>{{ t('bio') }}</p>
      <h3>{{ t('members') }}</h3>
      <ul><li v-for="m in members" :key="m.name">{{ m.name }} <small>{{ t(m.role) }}</small></li></ul>
    </section>
    <section id="contact">
      <h2>{{ t('contact') }}</h2>
      <p><a v-for="l in links" :key="l.label" :href="l.url">{{ l.label }}</a></p>
    </section>
  </main>
  <footer lang="en">© Pitch Black Process</footer>
</template>

<style scoped>
.hero { text-align:center; padding:6rem 1rem 3rem; }
h1 { font-size:clamp(2.2rem,8vw,5rem); letter-spacing:0; word-spacing:.08em; font-synthesis-weight:auto; text-transform:uppercase; margin:0; }
nav a, section p a { margin:0 .75rem; }
main { max-width:42rem; margin:0 auto; padding:0 1rem; }
button { background:none; border:1px solid var(--dim); color:var(--fg); margin-left:.5rem; cursor:pointer; }
button:disabled { border-color:var(--fg); cursor:default; }
h2 { border-bottom:1px solid var(--line); padding-bottom:.25rem; }
ul { padding:0; list-style:none; }
h3 { font-size:1rem; color:var(--dim); }
small, footer { color:var(--dim); }
footer { text-align:center; padding:3rem 1rem; }
</style>
