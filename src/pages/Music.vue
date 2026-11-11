<script setup>
import Layout from '../Layout.vue'
import { t } from '../i18n'
// Content comes from the band's own biography text.
const albums = [
  { title: 'Derin', year: 2015, cover: 'derin', spotify: '7FBYbZcTb9kokf6U8Lu0Q6' },
  { title: 'Hand of God?', year: 2013, note: 'reissue', cover: 'hand-of-god', spotify: '47yRdyCKeH9hC7TjMS4BPm' },
  { title: 'Affliction: Execution Is Necessary', year: 2007, cover: 'execution', spotify: '43D3hE1fJ3x9njXoUPJnks' },
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
      <ul class="releases"><li v-for="r in list" :key="r.title">
        <img v-if="r.cover" :src="`/covers/${r.cover}.jpg`" :alt="r.title" width="64" height="64" />
        <span>{{ r.title }} <small>{{ r.year }}<template v-if="r.note">, {{ t(r.note) }}</template></small>
          <a v-if="r.spotify" :href="`https://open.spotify.com/album/${r.spotify}`" target="_blank" rel="noopener">Spotify</a></span>
      </li></ul>
    </template>
  </Layout>
</template>
