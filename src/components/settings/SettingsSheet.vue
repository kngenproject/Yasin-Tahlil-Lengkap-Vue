<template>
  <div v-if="isOpen" class="sheet-overlay open">
    <div class="sheet-backdrop" @click="$emit('close')"></div>
    <div class="sheet">
      <div class="sheet-handle"></div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:22px">
        <div class="sheet-title" style="margin-bottom:0">Pengaturan</div>
        <button @click="$emit('close')" style="width:32px;height:32px;border-radius:8px;background:var(--surface-alt);border:1px solid var(--border-mid);color:var(--text-secondary);cursor:pointer">✕</button>
      </div>

      <!-- Theme -->
      <div class="sheet-section">
        <div class="sheet-label">Mode Tampilan</div>
        <div class="theme-pill">
          <button :class="['theme-opt', theme === 'light' ? 'active' : '']" @click="setTheme('light')">☀️ Terang</button>
          <button :class="['theme-opt', theme === 'dark'  ? 'active' : '']" @click="setTheme('dark')">🌙 Gelap</button>
        </div>
      </div>

      <!-- Font Size -->
      <div class="sheet-section">
        <div class="sheet-label">Ukuran Teks Arab</div>
        <div class="size-row">
          <button
            v-for="s in ['sm','md','lg','xl']"
            :key="s"
            :class="['size-opt', fontSize === s ? 'active' : '']"
            @click="setFontSize(s)"
          >ص</button>
        </div>
      </div>

      <!-- Font Type -->
      <div class="sheet-section">
        <div class="sheet-label">Jenis Font Arab</div>
        <div class="font-row">
          <button
            v-for="font in ['Scheherazade New','Amiri','Noto Naskh Arabic']"
            :key="font"
            :class="['font-opt', arabicFont === font ? 'active' : '']"
            @click="setArabicFont(font)"
          >
            {{ font }}
            <span class="font-opt-preview" :style="{ fontFamily: font }">بِسْمِ اللّٰهِ</span>
          </button>
        </div>
      </div>

      <!-- Font Weight -->
      <div class="sheet-section">
        <div class="sheet-label">Tebal Font Arab</div>
        <div class="weight-row">
          <button :class="['weight-opt', arabicWeight === 400 ? 'active' : '']" @click="setArabicWeight(400)">ب</button>
          <button :class="['weight-opt', arabicWeight === 500 ? 'active' : '']" @click="setArabicWeight(500)" style="font-weight:500">ب</button>
          <button :class="['weight-opt', arabicWeight === 700 ? 'active' : '']" @click="setArabicWeight(700)" style="font-weight:700">ب</button>
        </div>
      </div>

      <!-- Background Color -->
      <div class="sheet-section">
        <div class="sheet-label">Warna Background</div>
        <div class="bg-color-row">
          <button
            v-for="swatch in swatches"
            :key="swatch.id"
            :class="['bg-swatch', bgColor === swatch.value ? 'active' : '']"
            :style="{ background: swatch.color }"
            @click="setBgColor(swatch.value)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTheme } from '../../composables/useTheme'
import { useSettings } from '../../composables/useSettings'

defineProps({ isOpen: Boolean })
defineEmits(['close'])

const { theme, setTheme } = useTheme()
const { fontSize, setFontSize, arabicFont, setArabicFont, arabicWeight, setArabicWeight, bgColor, setBgColor } = useSettings()

const swatches = [
  { id: 'default', color: '#EAE6DC', value: 'default'  },
  { id: 'warm',    color: '#FDF6E3', value: '#FDF6E3'  },
  { id: 'mint',    color: '#F0FBF3', value: '#F0FBF3'  },
  { id: 'sepia',   color: '#F4ECD8', value: '#F4ECD8'  },
  { id: 'sky',     color: '#EFF6FF', value: '#EFF6FF'  },
  { id: 'rose',    color: '#FFF1F2', value: '#FFF1F2'  },
  { id: 'slate',   color: '#1E293B', value: '#1E293B'  },
]
</script>

<style scoped>
.sheet-section { margin-bottom: 24px; }
.sheet-label {
  font-family: var(--ui-font);
  font-size: 11px;
  font-weight: 700;
  color: var(--text-muted);
  letter-spacing: 1.2px;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.font-opt-preview { font-size: 18px; color: var(--text-muted); }
</style>
