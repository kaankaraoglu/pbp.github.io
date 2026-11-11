<script setup>
import Layout from '../Layout.vue'
import { t } from '../i18n'
const shows = []
</script>

<template>
  <Layout current="Shows">
    <h2>{{ t('shows') }}</h2>
    <p v-if="!shows.length">{{ t('noShows') }}</p>
    <ul v-else><li v-for="s in shows" :key="s.date + s.venue">{{ s.date }} · {{ s.venue }}, {{ s.city }}</li></ul>
  </Layout>
</template>
