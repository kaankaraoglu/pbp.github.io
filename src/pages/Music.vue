<script setup>
import Layout from '../Layout.vue'
import { t } from '../i18n'
// Content comes from the band's own biography text.
const albums = [
  { title: 'Derin', year: 2015 },
  { title: 'Hand of God?', year: 2013, note: 'reissue' },
  { title: 'Affliction: Execution Is Necessary', year: 2007 },
  { title: 'One Reality', year: 2003 },
]
const singles = [
  { title: 'Heroes of 2020', year: 2020 },
  { title: 'Buselik Makamına', year: 2020, note: 'sirEp' },
  { title: 'Zahid Bizi Tan Eyleme', year: 2019, note: 'sirEp' },
]
</script>

<template>
  <Layout current="Music">
    <h2>{{ t('music') }}</h2>
    <template v-for="[key, list] in [['albums', albums], ['singles', singles]]" :key="key">
      <h3>{{ t(key) }}</h3>
      <ul><li v-for="r in list" :key="r.title">{{ r.title }} <small>{{ r.year }}<template v-if="r.note">, {{ t(r.note) }}</template></small></li></ul>
    </template>
  </Layout>
</template>
