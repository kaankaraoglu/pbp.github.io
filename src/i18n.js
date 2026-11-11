import { ref, watchEffect } from 'vue'

export const messages = {
  en: { music: 'Music', shows: 'Shows', about: 'Biography', contact: 'Contact',
        noShows: 'No shows announced.', bio: 'Band biography goes here.' },
  tr: { music: 'Müzik', shows: 'Konserler', about: 'Biyografi', contact: 'İletişim',
        noShows: 'Duyurulmuş konser yok.', bio: 'Grup biyografisi buraya gelecek.' },
}

const saved = localStorage.getItem('lang')
const guess = navigator.language?.startsWith('tr') ? 'tr' : 'en'
export const lang = ref(saved in messages ? saved : guess)

watchEffect(() => {
  document.documentElement.lang = lang.value
  localStorage.setItem('lang', lang.value)
})

export const t = (key) => messages[lang.value][key]
