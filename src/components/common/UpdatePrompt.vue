<template>
  <Transition name="slide-down">
    <div v-if="needRefresh" class="update-banner">
      <span class="update-dot"></span>
      <span class="update-text">Update tersedia</span>
      <button class="update-btn" @click="updateApp">Perbarui</button>
      <button class="close-btn" @click="close">✕</button>
    </div>
  </Transition>
</template>

<script setup>
import { useRegisterSW } from 'virtual:pwa-register/vue'

const { needRefresh, updateServiceWorker } = useRegisterSW({
  onRegistered(r) {
    r && r.update()
  }
})

function updateApp() {
  updateServiceWorker(true)
}

function close() {
  needRefresh.value = false
}
</script>

<style scoped>
.update-banner {
  position: fixed;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px 8px 10px;
  background: var(--g-800);
  border: 1px solid var(--g-600);
  border-radius: var(--r-full);
  box-shadow: var(--shadow-md);
  white-space: nowrap;
}

.update-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--gold);
  flex-shrink: 0;
}

.update-text {
  font-family: var(--ui-font);
  font-size: 12px;
  color: var(--g-100);
}

.update-btn {
  font-family: var(--ui-font);
  font-size: 11px;
  font-weight: 600;
  color: var(--g-800);
  background: var(--gold);
  border: none;
  border-radius: var(--r-full);
  padding: 4px 10px;
  cursor: pointer;
  transition: opacity 0.15s;
}

.update-btn:active {
  opacity: 0.8;
}

.close-btn {
  font-size: 10px;
  color: var(--g-400);
  background: none;
  border: none;
  padding: 0 2px;
  cursor: pointer;
  line-height: 1;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateX(-50%) translateY(-60px);
  opacity: 0;
}
</style>
