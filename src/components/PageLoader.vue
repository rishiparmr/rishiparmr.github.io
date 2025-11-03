<template>
  <transition name="fade-out">
    <div v-if="isLoading" class="page-loader">
      <div class="loader-content">
        <div class="loader-logo">
          <span class="logo-text">R</span>
          <span class="logo-dot">.</span>
        </div>
        <div class="loader-bar">
          <div class="loader-progress" :style="{ width: progress + '%' }"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isLoading = ref(true)
const progress = ref(0)

onMounted(() => {
  // Simulate loading progress
  const interval = setInterval(() => {
    progress.value += Math.random() * 30
    if (progress.value >= 100) {
      progress.value = 100
      clearInterval(interval)
      setTimeout(() => {
        isLoading.value = false
      }, 300)
    }
  }, 200)
})
</script>

<style scoped>
.page-loader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.loader-content {
  text-align: center;
}

.loader-logo {
  font-size: 5rem;
  font-weight: 800;
  margin-bottom: 2rem;
  animation: logo-bounce 1s ease-in-out infinite;
}

.logo-text {
  background: linear-gradient(135deg, #ffffff 0%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
}

.logo-dot {
  color: #06b6d4;
  animation: dot-pulse 1s ease-in-out infinite;
}

@keyframes logo-bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes dot-pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.2);
  }
}

.loader-bar {
  width: 200px;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  margin: 0 auto;
}

.loader-progress {
  height: 100%;
  background: linear-gradient(90deg, #06b6d4 0%, #3b82f6 100%);
  border-radius: 2px;
  transition: width 0.3s ease-out;
  box-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
}

.fade-out-enter-active,
.fade-out-leave-active {
  transition: opacity 0.5s ease;
}

.fade-out-enter-from,
.fade-out-leave-to {
  opacity: 0;
}
</style>

