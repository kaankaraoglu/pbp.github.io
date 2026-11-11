<script setup>
import Layout from '../Layout.vue'
import { t } from '../i18n'
const links = [
  { label: 'Website', url: 'https://www.pitchblackprocess.com/' },
  { label: 'Facebook', url: 'https://www.facebook.com/pitchblackprocess' },
  { label: 'YouTube', url: 'https://youtube.com/pitchblackprocess' },
]
</script>

<template>
  <Layout current="Contact">
    <h2>{{ t('contact') }}</h2>
    <p><a v-for="l in links" :key="l.label" :href="l.url">{{ l.label }}</a></p>
  </Layout>
</template>
