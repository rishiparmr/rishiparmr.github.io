<template>
  <transition name="fade">
    <button 
      v-if="isVisible" 
      @click="scrollToTop" 
      class="back-to-top"
      aria-label="Back to top"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const handleScroll = () => {
  isVisible.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.back-to-top {
  position: fixed !important;
  bottom: 40px !important;
  right: 40px !important;
  left: auto !important;
  top: auto !important;
  width: 56px;
  height: 56px;
  background: var(--bg-gradient);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-lg), var(--shadow-glow);
  z-index: 1002 !important;
  transition: all var(--transition-base);
  animation: pulse 2s ease-in-out infinite;
  margin: 0;
  padding: 0;
}

.back-to-top:hover {
  transform: translateY(-5px) scale(1.1);
  box-shadow: var(--shadow-xl), 0 0 30px var(--color-accent-glow);
}

.back-to-top:active {
  transform: translateY(-2px) scale(1.05);
}

@keyframes pulse {
  0%, 100% {
    box-shadow: var(--shadow-lg), 0 0 0 0 var(--color-accent-glow);
  }
  50% {
    box-shadow: var(--shadow-lg), 0 0 20px var(--color-accent-glow);
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.8) !important;
}

.fade-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1) !important;
}

.fade-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1) !important;
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.8) !important;
}

@media (max-width: 768px) {
  .back-to-top {
    bottom: 30px !important;
    right: 20px !important;
    width: 50px;
    height: 50px;
  }
}
</style>

