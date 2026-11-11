<script setup>
import { lang, t } from './i18n'
defineProps({ current: String })
const nav = [['music', '/music/', 'Music'], ['shows', '/shows/', 'Shows'], ['about', '/biography/', 'Biography'], ['contact', '/contact/', 'Contact']]
</script>

<template>
  <header class="hero">
    <h1 lang="en"><a href="/">Pitch Black Process</a></h1>
    <nav>
      <a v-for="[key, href, id] in nav" :key="key" :href="href" :aria-current="current === id ? 'page' : null">{{ t(key) }}</a>
      <button v-for="l in ['tr', 'en']" :key="l" class="flag" :disabled="lang === l" :aria-label="l === 'tr' ? 'Türkçe' : 'English'" :aria-pressed="lang === l" @click="lang = l">
        <svg v-if="l === 'tr'" viewBox="0 0 30 20" aria-hidden="true"><rect width="30" height="20" fill="currentColor"/><circle cx="11" cy="10" r="5" fill="#000"/><circle cx="12.5" cy="10" r="4" fill="currentColor"/><path d="M19 10l3.4-1.1-2.1 2.9v-3.6l2.1 2.9z" fill="#000"/></svg>
        <svg v-else viewBox="0 0 30 20" aria-hidden="true"><rect width="30" height="20" fill="currentColor"/><path d="M0 0L30 20M30 0L0 20" stroke="#000" stroke-width="3"/><path d="M15 0v20M0 10h30" stroke="#000" stroke-width="6"/><path d="M15 0v20M0 10h30" stroke="currentColor" stroke-width="3"/></svg>
      </button>
    </nav>
  </header>
  <main><slot /></main>
  <footer lang="en">© Pitch Black Process</footer>
</template>

<style>
.hero { text-align:center; padding:6rem 1rem 3rem; }
h1 { font-size:clamp(2.2rem,8vw,5rem); letter-spacing:0; word-spacing:.08em; font-synthesis-weight:auto; text-transform:uppercase; margin:0; }
h1 a { text-decoration:none; }
nav a, main p a { margin:0 .75rem; }
nav a, main p a { text-decoration:none; }
nav a { color:var(--dim); }
nav a:hover, nav a[aria-current] { color:var(--fg); }
main { max-width:42rem; margin:0 auto; padding:0 1rem; }
button { background:none; border:1px solid var(--dim); color:var(--fg); margin-left:.5rem; cursor:pointer; }
button:disabled { border-color:var(--fg); cursor:default; }
h2 { border-bottom:1px solid var(--line); padding-bottom:.25rem; }
ul { padding:0; list-style:none; }
h3 { font-size:1rem; color:var(--dim); }
small, footer { color:var(--dim); }
footer { text-align:center; padding:3rem 1rem; }
</style>
