<template>
  <button 
    @click="toggleTheme" 
    class="theme-toggle"
    :class="{ 'dark': isDark, 'visible': isVisible }"
    aria-label="Toggle dark mode"
  >
    <div class="toggle-track">
      <div class="toggle-thumb">
        <svg v-if="!isDark" class="icon sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
        <svg v-else class="icon moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </div>
    </div>
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useTheme } from '../composables/useTheme'

const { isDark, toggleTheme } = useTheme()
const isVisible = ref(false)

onMounted(() => {
  // Show toggle after loader (1500ms same as navbar)
  setTimeout(() => {
    isVisible.value = true
  }, 1500)
})
</script>

<style scoped>
.theme-toggle {
  position: fixed !important;
  top: calc(20px + (65px - 36px) / 2) !important; /* 20px navbar top + centered within 65px navbar height */
  right: calc((100vw - min(1400px, 100% - 80px)) / 2 - 90px) !important;
  bottom: auto !important;
  left: auto !important;
  width: 70px;
  height: 36px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1100 !important;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(-20px);
}

.theme-toggle.visible {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

/* Simplify for smaller screens */
@media (max-width: 1500px) {
  .theme-toggle {
    right: 60px !important;
    z-index: 1100 !important;
  }
}

@media (max-width: 1200px) {
  .theme-toggle {
    right: 30px !important;
    z-index: 1100 !important;
  }
}

@media (max-width: 768px) {
  .theme-toggle {
    top: 20px !important;
    right: 15px !important;
    width: 60px;
    height: 32px;
    z-index: 1100 !important;
  }
  
  .toggle-track {
    padding: 3px 3px 4px 3px;
  }
  
  .toggle-thumb {
    width: 24px;
    height: 24px;
  }
  
  .theme-toggle.dark .toggle-thumb {
    transform: translateX(28px);
  }
  
  .icon {
    width: 14px;
    height: 14px;
  }
}

.toggle-track {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.95) 0%, 
    rgba(249, 250, 251, 0.9) 100%);
  border-radius: 50px;
  padding: 4px 4px 5px 4px;
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.1),
    0 2px 8px rgba(6, 182, 212, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(6, 182, 212, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  display: flex;
  align-items: flex-start;
}

.theme-toggle.dark .toggle-track {
  background: linear-gradient(135deg, 
    rgba(30, 41, 59, 0.95) 0%, 
    rgba(15, 23, 42, 0.9) 100%);
  border-color: rgba(147, 197, 253, 0.3);
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.3),
    0 2px 8px rgba(147, 197, 253, 0.2),
    inset 0 1px 0 rgba(147, 197, 253, 0.1);
}

.toggle-thumb {
  width: 28px;
  height: 28px;
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(6, 182, 212, 0.4);
  transform: translateX(0);
}

.theme-toggle.dark .toggle-thumb {
  background: linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%);
  transform: translateX(34px);
  box-shadow: 0 2px 8px rgba(147, 197, 253, 0.4);
}

.icon {
  width: 18px;
  height: 18px;
  color: white;
  animation: rotate-in 0.4s ease;
}

@keyframes rotate-in {
  0% {
    transform: rotate(-90deg) scale(0);
    opacity: 0;
  }
  100% {
    transform: rotate(0deg) scale(1);
    opacity: 1;
  }
}

.theme-toggle:hover .toggle-track {
  box-shadow: 
    0 6px 20px rgba(0, 0, 0, 0.15),
    0 3px 10px rgba(6, 182, 212, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  transform: scale(1.05);
}

.theme-toggle.dark:hover .toggle-track {
  box-shadow: 
    0 6px 20px rgba(0, 0, 0, 0.4),
    0 3px 10px rgba(147, 197, 253, 0.3),
    inset 0 1px 0 rgba(147, 197, 253, 0.1);
}

.theme-toggle:active .toggle-thumb {
  transform: translateX(0) scale(0.9);
}

.theme-toggle.dark:active .toggle-thumb {
  transform: translateX(34px) scale(0.9);
}

@media (max-width: 768px) {
  .theme-toggle {
    top: calc(10px + (60px - 32px) / 2) !important; /* 10px navbar top + centered within 60px navbar height */
    right: 90px !important;
    bottom: auto !important;
    left: auto !important;
    width: 60px;
    height: 32px;
  }
  
  .toggle-thumb {
    width: 24px;
    height: 24px;
  }
  
  .theme-toggle.dark .toggle-thumb {
    transform: translateX(28px);
  }
  
  .icon {
    width: 14px;
    height: 14px;
  }
}
</style>

