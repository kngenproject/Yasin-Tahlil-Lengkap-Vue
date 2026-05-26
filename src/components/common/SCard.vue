<template>
  <div class="s-card" :class="className">
    <div v-if="title" class="s-head">
      <span v-if="icon" class="s-head-icon">{{ icon }}</span>
      <span class="s-head-title">{{ title }}</span>
      <span v-if="badge" class="s-head-badge">{{ badge }}</span>
    </div>
    <div class="s-body">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title:     { type: String, default: null },
  icon:      { type: String, default: null },
  badge:     { type: String, default: null },
  className: { type: String, default: '' },
})
</script>

<style scoped>
.s-card {
  background: var(--surface-card);
  border-radius: var(--r-lg);
  box-shadow: var(--shadow-sm);
  margin-bottom: 12px;
  overflow: hidden;
  border: 1px solid var(--border);
}
.s-head {
  padding: 11px 16px 10px;
  background: linear-gradient(90deg, var(--g-700) 0%, var(--g-600) 100%);
  display: flex;
  align-items: center;
  gap: 9px;
}
:global([data-theme="dark"]) .s-head {
  background: linear-gradient(90deg, #1B3A2D 0%, #224D3A 100%);
}
.s-head-icon { font-size: 13px; opacity: 0.85; }
.s-head-title {
  font-family: var(--ui-font);
  font-size: 11px;
  font-weight: 700;
  color: rgba(255,255,255,0.95);
  letter-spacing: 1px;
  text-transform: uppercase;
  direction: ltr;
}
.s-head-badge {
  margin-right: auto;
  background: rgba(201,168,76,0.2);
  border: 1px solid rgba(201,168,76,0.4);
  color: var(--gold-light);
  font-family: 'Scheherazade New', serif;
  font-size: 14px;
  font-weight: 700;
  padding: 1px 10px;
  border-radius: var(--r-full);
  direction: rtl;
}
.s-body {
  padding: 20px 18px 22px;
  background: var(--surface-card);
}
</style>
