<template>
  <button
    v-if="visible"
    class="scroll-fab"
    @click="scrollToTop"
    aria-label="Scroll ke atas"
  >↑</button>
</template>

<script setup>
import { useScrollToTop } from '../../composables/useScrollToTop'
const { visible, scrollToTop } = useScrollToTop()
</script>

<style scoped>
.scroll-fab {
  position: fixed;
  bottom: calc(var(--navbar-h) + var(--safe-bottom) + 16px);
  left: 16px;
  width: 44px; height: 44px;
  border-radius: 14px;
  background: var(--g-700);
  color: white;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(27,67,50,0.4);
  z-index: 250;
  border: 1px solid rgba(255,255,255,0.1);
  transition: opacity 0.2s, transform 0.2s;
  direction: ltr;
  cursor: pointer;
}
.scroll-fab:active { transform: scale(0.93); }
:global([data-theme="dark"]) .scroll-fab { background: var(--gold); color: #111; }
</style>
