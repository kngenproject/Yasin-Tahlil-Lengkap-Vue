<template>
  <div>
    <div class="page-label">Surah Yasin · Al-Qur'an 36</div>
    <SCard title="Surah Yasin (1–83)" icon="📖">
      <div class="basmalah">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</div>
      <div class="yasin-ayat-list">
        <span v-for="{ ayat, text } in yasinAyat" :key="ayat" class="yasin-ayat">
          {{ text }}
          <span class="ayat-num"> ﴿{{ toArabicNum(ayat) }}﴾ </span>
        </span>
      </div>
    </SCard>
  </div>
</template>

<script setup>
import SCard from './components/common/SCard.vue'
import { yasinAyat } from './data/yasinData'

const toArabicNum = (n) =>
  String(n).split('').map(d => '٠١٢٣٤٥٦٧٨٩'[+d]).join('')
</script>

<style scoped>
.yasin-ayat-list {
  font-family: var(--arabic-font);
  font-size: calc(var(--arabic-size) - 2px);
  font-weight: var(--arabic-weight);
  line-height: var(--arabic-line);
  color: var(--text-primary);
  direction: rtl;
  text-align: justify;
  transition: font-size 0.2s, font-family 0.25s;
}
.yasin-ayat { display: inline; }
.ayat-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--arabic-font);
  font-size: 0.7em;
  color: var(--g-600);
  vertical-align: middle;
  margin-inline: 2px;
}
:global([data-theme="dark"]) .ayat-num { color: var(--gold); }
</style>
