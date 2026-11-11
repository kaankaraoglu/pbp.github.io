import { ref, watchEffect } from 'vue'

export const messages = {
  en: {
    music: 'Music', shows: 'Shows', about: 'Biography', contact: 'Contact',
    noShows: 'No shows announced.',
    bio: [
      'Pitch Black Process, formerly known as Affliction, now consisting of Emrah Demirel, Kerem İnci and Emre Demirel, formed in February 1999 in Izmir, Turkey. After 12 years the band made the difficult decision to change its name and continue as Pitch Black Process. PBP has released 4 albums and 3 singles.',
      'The song Zahid Bizi Tan Eyleme (ZBTE) was chosen to represent Turkey at the World Metal Congress, held for the first time in London in 2019.',
      'Hand of God?, Derin and SIR were recorded at Dugout Studios in Sweden with the renowned producer Daniel Bergstrand (In Flames, Meshuggah, Soilwork and many more).',
    ],
    members: 'Line-up', albums: 'Albums', singles: 'Singles',
    reissue: '2021 reissue', sirEp: 'from the SIR EP',
  },
  tr: {
    music: 'Müzik', shows: 'Konserler', about: 'Biyografi', contact: 'İletişim',
    noShows: 'Duyurulmuş konser yok.',
    bio: [
      "Şu an Emrah Demirel, Kerem İnci ve Emre Demirel'den oluşan Pitch Black Process, 1999'un Şubat ayında İzmir'de \"Affliction\" adıyla kuruldu. 12 yılın sonunda grup adını \"Pitch Black Process\" olarak değiştirdi. Grup şu ana kadar 4 albüm ve 3 single yayınladı.",
      "Zahid Bizi Tan Eyleme (ZBTE) videosu ile grup, 2019 yılında Londra'da ilki düzenlenen Dünya Metal Kongresi'nde Türkiye'yi temsil etmesi için davet aldı.",
      "Hand of God?, Derin ve SIR; İsveç'te Dugout Studios'ta, dünyaca ünlü prodüktör Daniel Bergstrand (In Flames, Meshuggah, Soilwork ve daha birçoğu) ile kaydedildi.",
    ],
    members: 'Kadro', albums: 'Albümler', singles: 'Single\'lar',
    reissue: '2021 yeniden basım', sirEp: 'SIR EP\'sinden',
  },
}

const saved = localStorage.getItem('lang')
export const lang = ref(saved in messages ? saved : 'tr')

watchEffect(() => {
  document.documentElement.lang = lang.value
  localStorage.setItem('lang', lang.value)
})

export const t = (key) => messages[lang.value][key]
