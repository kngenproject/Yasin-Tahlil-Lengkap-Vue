<template>
  <div>
    <UpdatePrompt />
    <div class="status-spacer"></div>
    <AppHeader @open-settings="settingsOpen = true" />

    <main class="app-body">
      <HadhrohPage v-show="activeTab === 'hadhroh'" />
      <YasinPage   v-show="activeTab === 'yasin'"   />
      <TahlilPage  v-show="activeTab === 'tahlil'"  />
      <DoaPage     v-show="activeTab === 'doa'"     />
    </main>

    <BottomNav :active-tab="activeTab" @tab-change="activeTab = $event" />
    <ScrollToTop />
    <SettingsSheet :is-open="settingsOpen" @close="settingsOpen = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppHeader    from './components/common/AppHeader.vue'
import BottomNav    from './components/common/BottomNav.vue'
import ScrollToTop  from './components/common/ScrollToTop.vue'
import SettingsSheet from './components/settings/SettingsSheet.vue'
import UpdatePrompt from './components/common/UpdatePrompt.vue'
import HadhrohPage  from './HadhrohPage.vue'
import YasinPage    from './YasinPage.vue'
import TahlilPage   from './TahlilPage.vue'
import DoaPage      from './DoaPage.vue'

const activeTab   = ref('hadhroh')
const settingsOpen = ref(false)
</script>
