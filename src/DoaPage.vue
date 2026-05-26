<template>
  <div>
    <div class="page-label">Do'a Penutup Tahlil</div>
    <SCard title="Do'a Tahlil" icon="🤲">
      <div class="basmalah">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</div>
      <div class="doa-paragraphs">
        <p v-for="{ id, text } in doaParagraphs" :key="id" class="arabic sm doa-p">{{ text }}</p>
      </div>
      <div style="margin-top:18px;text-align:center">
        <span class="fatiha-pill">اَلْفَاتِحَة</span>
      </div>
    </SCard>
  </div>
</template>

<script setup>
import SCard from './components/common/SCard.vue'
import { doaParagraphs } from './data/doaData'
</script>

<style scoped>
.doa-paragraphs { display: flex; flex-direction: column; gap: 16px; }
.doa-p { margin: 0; text-align: right; }
</style>
