<script setup>
import Layout from '../Layout.vue'
import { t } from '../i18n'
const members = ['Emrah Demirel', 'Kerem İnci', 'Emre Demirel']
</script>

<template>
  <Layout current="Biography">
    <h2>{{ t('about') }}</h2>
    <p v-for="p in t('bio')" :key="p">{{ p }}</p>
    <h3>{{ t('members') }}</h3>
    <ul><li v-for="m in members" :key="m">{{ m }}</li></ul>
  </Layout>
</template>
