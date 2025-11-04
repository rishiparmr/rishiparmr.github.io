<template>
  <transition name="slide-up">
    <div v-if="isLoading" class="page-loader">
      <div class="shimmer-line"></div>
      <div class="nav-container container">
        <div class="logo-container">
          <span class="logo">R<span class="dot">.</span></span>
        </div>
        <div class="progress-bar-container">
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: progress + '%' }"></div>
          </div>
          <div class="progress-percent">{{ Math.floor(progress) }}%</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isLoading = ref(true)
const progress = ref(0)

onMounted(() => {
  // Prevent scroll restoration
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
  }
  
  // Force to top
  window.scrollTo(0, 0)
  
  // Lock scroll
  document.body.style.overflow = 'hidden'
  document.documentElement.style.overflow = 'hidden'
  
  // Fast loading animation
  const duration = 800 // Total load time in ms
  const interval = 20 // Update every 20ms
  const steps = duration / interval
  const increment = 100 / steps
  
  const timer = setInterval(() => {
    progress.value += increment
    if (progress.value >= 100) {
      progress.value = 100
      clearInterval(timer)
      
      // Quick delay at 100% then fade out
      setTimeout(() => {
        isLoading.value = false
        
        // Unlock scroll
        document.body.style.overflow = ''
        document.documentElement.style.overflow = ''
        
        // Restore scroll behavior
        if ('scrollRestoration' in history) {
          history.scrollRestoration = 'auto'
        }
      }, 300)
    }
  }, interval)
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  document.documentElement.style.overflow = ''
})
</script>

<style scoped>
.page-loader {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 80px);
  max-width: 1400px;
  height: 65px;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.98) 0%, 
    rgba(249, 250, 251, 0.95) 100%);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.08),
    0 4px 16px rgba(6, 182, 212, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 1),
    inset 0 -1px 0 rgba(6, 182, 212, 0.05);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(6, 182, 212, 0.2);
  border-radius: 24px;
  z-index: 99999;
  overflow: hidden;
  animation: subtle-glow 2s ease-in-out infinite;
}

@keyframes subtle-glow {
  0%, 100% {
    box-shadow: 
      0 8px 32px rgba(0, 0, 0, 0.08),
      0 4px 16px rgba(6, 182, 212, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 1),
      inset 0 -1px 0 rgba(6, 182, 212, 0.05);
  }
  50% {
    box-shadow: 
      0 8px 32px rgba(0, 0, 0, 0.08),
      0 4px 16px rgba(6, 182, 212, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 1),
      inset 0 -1px 0 rgba(6, 182, 212, 0.1);
  }
}

.shimmer-line {
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(6, 182, 212, 0.08) 50%, 
    transparent 100%);
  animation: shimmer-sweep 3s ease-in-out infinite;
}

@keyframes shimmer-sweep {
  0% {
    left: -100%;
  }
  100% {
    left: 150%;
  }
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 var(--spacing-lg);
}

.logo-container {
  animation: pulse 2s ease-in-out infinite;
}

.logo {
  font-size: 1.6rem;
  font-weight: 800;
  background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% auto;
  filter: drop-shadow(0 2px 4px rgba(6, 182, 212, 0.2));
}

.dot {
  background: linear-gradient(135deg, #06b6d4, #22d3ee, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.9rem;
  font-weight: 900;
  display: inline-block;
  animation: dot-pulse 1.5s ease-in-out infinite;
  filter: drop-shadow(0 2px 8px rgba(6, 182, 212, 0.4));
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

@keyframes dot-pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.3);
  }
}

.progress-bar-container {
  flex: 1;
  max-width: 600px;
  padding-left: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.progress-bar {
  flex: 1;
  height: 5px;
  background: rgba(6, 182, 212, 0.12);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #1e3a8a 0%, #06b6d4 50%, #22d3ee 100%);
  background-size: 200% 100%;
  animation: gradient-slide 2s ease-in-out infinite;
  border-radius: 10px;
  transition: width 0.3s ease-out;
  box-shadow: 0 0 12px rgba(6, 182, 212, 0.5);
  position: relative;
  overflow: hidden;
}

@keyframes gradient-slide {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(255, 255, 255, 0.5) 50%, 
    transparent 100%);
  animation: shimmer 1.2s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(200%);
  }
}

.progress-percent {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--color-accent);
  min-width: 35px;
  text-align: right;
  animation: fade-in 0.3s ease-in;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Slide up transition */
.slide-up-enter-active {
  transition: all 0.3s ease-out;
}

.slide-up-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateX(-50%) translateY(-20px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-30px);
}

/* Mobile responsive */
@media (max-width: 768px) {
  .page-loader {
    top: 10px;
    width: calc(100% - 20px);
    border-radius: 18px;
    height: 60px;
  }
  
  .nav-container {
    padding: 0 var(--spacing-md);
  }
  
  .logo {
    font-size: 1.5rem;
  }
  
  .dot {
    font-size: 1.7rem;
  }
  
  .progress-bar-container {
    padding-left: 1rem;
    max-width: 400px;
  }
}
</style>

