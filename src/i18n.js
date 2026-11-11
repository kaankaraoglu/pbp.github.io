import { ref, watchEffect } from 'vue'

export const messages = {
  en: { music: 'Music', shows: 'Shows', about: 'Biography', contact: 'Contact',
        noShows: 'No shows announced.',
        bio: 'Pitch Black Process is a melodic death metal band from Izmir, Turkey. The band began in 1999 under the name Affliction and later became Pitch Black Process. Its music joins heavy riffs with Turkish and Middle Eastern melodies, with lyrics in English and Turkish. In 2013 it was the first metal band to play the main stage of the Izmir International Fair. It signed with David Ellefson\'s EMP Label Group, and the 2016 album Derin was recorded in Sweden with producer Daniel Bergstrand.',
        members: 'Line-up', album: 'Album', ep: 'EP',
        vocalsGuitar: 'vocals, guitar', guitar: 'guitar', bass: 'bass', drums: 'drums' },
  tr: { music: 'Müzik', shows: 'Konserler', about: 'Biyografi', contact: 'İletişim',
        noShows: 'Duyurulmuş konser yok.',
        bio: "Pitch Black Process, İzmir'li bir melodik death metal grubudur. Grup 1999'da Affliction adıyla yola çıktı, sonra Pitch Black Process adını aldı. Müziği ağır riffleri Türk ve Orta Doğu ezgileriyle birleştirir; sözler İngilizce ve Türkçedir. 2013'te İzmir Enternasyonal Fuarı'nın ana sahnesinde çalan ilk metal grubu oldu. David Ellefson'ın EMP Label Group'uyla anlaştı ve 2016 tarihli Derin albümü, yapımcı Daniel Bergstrand ile İsveç'te kaydedildi.",
        members: 'Kadro', album: 'Albüm', ep: 'EP',
        vocalsGuitar: 'vokal, gitar', guitar: 'gitar', bass: 'bas', drums: 'davul' },
}

const saved = localStorage.getItem('lang')
const guess = navigator.language?.startsWith('tr') ? 'tr' : 'en'
export const lang = ref(saved in messages ? saved : guess)

watchEffect(() => {
  document.documentElement.lang = lang.value
  localStorage.setItem('lang', lang.value)
})

export const t = (key) => messages[lang.value][key]
