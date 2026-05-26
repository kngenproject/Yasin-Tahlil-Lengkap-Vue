import { ref, watch } from 'vue'

const theme = ref(localStorage.getItem('theme') || 'light')

watch(theme, (val) => {
  document.documentElement.setAttribute('data-theme', val)
  localStorage.setItem('theme', val)
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', val === 'dark' ? '#060F08' : '#0F2E1B')
}, { immediate: true })

export function useTheme() {
  return { theme, setTheme: (val) => { theme.value = val } }
}
