<template>
  <div>
    <div class="page-label">Tawassul · Hadhroh</div>
    <SCard
      v-for="item in hadhrohData"
      :key="item.id"
      class-name="fatiha-card"
    >
      <div class="arabic sm">{{ item.text }}</div>
      <div style="margin-top:16px;text-align:center">
        <span class="fatiha-pill">اَلْفَاتِحَةُ</span>
      </div>
    </SCard>
  </div>
</template>

<script setup>
import SCard from './components/common/SCard.vue'
import { hadhrohData } from './data/hadhrohData'
</script>
