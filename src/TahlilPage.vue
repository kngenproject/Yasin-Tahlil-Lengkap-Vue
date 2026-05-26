<template>
  <div>
    <div class="page-label">Tahlil · Dzikir Bersama</div>
    <SCard
      v-for="(section, idx) in tahlilSections"
      :key="idx"
      :title="section.title"
      icon="◆"
      :badge="section.repeat ? `×${section.repeat}` : null"
    >
      <div v-if="section.basmalah" class="basmalah">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</div>
      <div class="arabic sm">{{ section.text }}</div>
      <div v-if="section.extraText" class="arabic sm" style="margin-top:12px">{{ section.extraText }}</div>
    </SCard>
  </div>
</template>

<script setup>
import SCard from './components/common/SCard.vue'
import { tahlilSections } from './data/tahlilData'
</script>
