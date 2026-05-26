<template>
  <header class="app-header">
    <div class="header-inner">
      <div class="header-brand">
        <div class="header-mark">
          <img src="/icons/icon-192.png" alt="" width="22" height="22" style="border-radius:4px;display:block" />
        </div>
        <div class="header-text">
          <div class="header-arabic">يٰسٓ · تَهْلِيْل</div>
          <div class="header-latin">Hadhroh · Yasin · Tahlil · Do'a</div>
        </div>
      </div>
      <div class="header-actions">
        <button class="hdr-btn" @click="$emit('openSettings')" aria-label="Pengaturan">⚙️</button>
      </div>
    </div>
    <div class="header-divider"></div>
  </header>
</template>

<script setup>
defineEmits(['openSettings'])
</script>

<style scoped>
.app-header {
  background: var(--g-800);
  border-bottom: 1px solid rgba(201,168,76,0.18);
  padding: 0 18px;
  position: sticky;
  top: 0;
  z-index: 200;
}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 58px;
}
.header-brand { display: flex; align-items: center; gap: 12px; }
.header-mark {
  width: 36px; height: 36px;
  border-radius: 10px;
  background: linear-gradient(135deg, rgba(201,168,76,0.18) 0%, rgba(201,168,76,0.08) 100%);
  border: 1px solid rgba(201,168,76,0.28);
  display: flex; align-items: center; justify-content: center;
}
.header-arabic {
  font-family: 'Scheherazade New', serif;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
}
.header-latin {
  font-family: var(--ui-font);
  font-size: 9.5px;
  font-weight: 500;
  color: rgba(201,168,76,0.75);
  letter-spacing: 1.8px;
  text-transform: uppercase;
  direction: ltr;
}
.hdr-btn {
  width: 36px; height: 36px;
  border-radius: 10px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.7);
  font-size: 15px;
  transition: all 0.2s;
  cursor: pointer;
}
.hdr-btn:active { transform: scale(0.93); }
.header-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(201,168,76,0.4), rgba(201,168,76,0.65), rgba(201,168,76,0.4), transparent);
}
</style>
