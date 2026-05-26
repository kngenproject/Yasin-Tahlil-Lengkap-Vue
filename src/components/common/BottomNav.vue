<template>
  <nav class="bottom-nav">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      class="nav-item"
      :class="{ active: activeTab === tab.id }"
      @click="$emit('tabChange', tab.id)"
    >
      <span class="nav-label">{{ tab.label }}</span>
    </button>
  </nav>
</template>

<script setup>
defineProps({ activeTab: String })
defineEmits(['tabChange'])

const tabs = [
  { id: 'hadhroh', label: 'Hadhroh' },
  { id: 'yasin',   label: 'Yasin'   },
  { id: 'tahlil',  label: 'Tahlil'  },
  { id: 'doa',     label: "Do'a"    },
]
</script>

<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 0; left: 0; right: 0;
  z-index: 300;
  background: var(--surface-card);
  border-top: 1px solid var(--border-mid);
  display: flex;
  padding-bottom: var(--safe-bottom);
  box-shadow: 0 -4px 24px rgba(0,0,0,0.1);
}
.nav-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 18px 4px 14px;
  position: relative;
  cursor: pointer;
  border: none;
  background: none;
}
.nav-label {
  font-family: var(--ui-font);
  font-size: 14px;
  font-weight: 600;
  color: var(--text-muted);
  transition: color 0.2s;
  direction: ltr;
}
.nav-item.active .nav-label { color: var(--g-600); }
:global([data-theme="dark"]) .nav-item.active .nav-label { color: var(--gold); }
.nav-item::before {
  content: '';
  position: absolute;
  top: 0; left: 50%;
  transform: translateX(-50%);
  width: 0; height: 3px;
  border-radius: 0 0 3px 3px;
  background: var(--g-500);
  transition: width 0.3s cubic-bezier(.4,0,.2,1);
}
:global([data-theme="dark"]) .nav-item::before { background: var(--gold); }
.nav-item.active::before { width: 32px; }
</style>
