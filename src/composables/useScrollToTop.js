import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollToTop() {
  const visible = ref(false)

  const handleScroll = () => {
    visible.value = window.scrollY > 280
  }

  onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return { visible, scrollToTop }
}
