import { ref, watch } from 'vue'

function useLocalStorage(key, initialValue) {
  let stored
  try {
    const item = localStorage.getItem(key)
    stored = item ? JSON.parse(item) : initialValue
  } catch {
    stored = initialValue
  }
  const value = ref(stored)
  watch(value, (val) => {
    localStorage.setItem(key, JSON.stringify(val))
  })
  return value
}

const fontSize   = useLocalStorage('fontSize', 'md')
const arabicFont = useLocalStorage('arabicFont', 'Scheherazade New')
const arabicWeight = useLocalStorage('arabicWeight', 400)
const bgColor    = useLocalStorage('bgColor', 'default')

const sizeMap = { sm: '22px', md: '26px', lg: '30px', xl: '36px' }

watch(fontSize, (val) => {
  document.documentElement.style.setProperty('--arabic-size', sizeMap[val] || '26px')
}, { immediate: true })

watch(arabicFont, (val) => {
  document.documentElement.style.setProperty('--arabic-font', `'${val}', serif`)
}, { immediate: true })

watch(arabicWeight, (val) => {
  document.documentElement.style.setProperty('--arabic-weight', val)
}, { immediate: true })

const bgPalette = {
  default:   { surface: null, card: null, alt: null },
  '#FDF6E3': { surface: '#FDF6E3', card: '#FFFDF5', alt: '#F5EDD4' },
  '#F0FBF3': { surface: '#F0FBF3', card: '#FAFFFC', alt: '#E3F5E8' },
  '#F4ECD8': { surface: '#F4ECD8', card: '#FDF8EE', alt: '#EBE0C8' },
  '#EFF6FF': { surface: '#EFF6FF', card: '#F9FCFF', alt: '#E2EFFE' },
  '#FFF1F2': { surface: '#FFF1F2', card: '#FFF8F9', alt: '#FFE4E6' },
  '#1E293B': { surface: '#1E293B', card: '#273548', alt: '#162030' },
}

watch(bgColor, (val) => {
  const p = bgPalette[val]
  if (!p || p.surface === null) {
    document.body.style.backgroundColor = ''
    document.documentElement.style.removeProperty('--surface')
    document.documentElement.style.removeProperty('--surface-card')
    document.documentElement.style.removeProperty('--surface-alt')
  } else {
    document.body.style.backgroundColor = p.surface
    document.documentElement.style.setProperty('--surface', p.surface)
    document.documentElement.style.setProperty('--surface-card', p.card)
    document.documentElement.style.setProperty('--surface-alt', p.alt)
  }
}, { immediate: true })

export function useSettings() {
  return {
    fontSize, setFontSize: (v) => { fontSize.value = v },
    arabicFont, setArabicFont: (v) => { arabicFont.value = v },
    arabicWeight, setArabicWeight: (v) => { arabicWeight.value = v },
    bgColor, setBgColor: (v) => { bgColor.value = v },
  }
}
