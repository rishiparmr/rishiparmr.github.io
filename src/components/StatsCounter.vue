<template>
  <div class="stats-container" ref="element">
    <div class="stat-item" v-for="stat in stats" :key="stat.label" :class="{ 'count-up': isVisible }">
      <div class="stat-number">{{ isVisible ? stat.displayValue : 0 }}{{ stat.suffix }}</div>
      <div class="stat-label">{{ stat.label }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const { isVisible, element } = useScrollAnimation({ threshold: 0.5, once: true })

const stats = ref([
  { value: 5, suffix: '+', label: 'Projects Completed', displayValue: 0 },
  { value: 2, suffix: '', label: 'Hackathon Wins', displayValue: 0 },
  { value: 3, suffix: '+', label: 'Technologies Mastered', displayValue: 0 },
  { value: 1, suffix: '', label: 'Internship', displayValue: 0 }
])

watch(isVisible, (newVal) => {
  if (newVal) {
    stats.value.forEach((stat, index) => {
      let current = 0
      const increment = stat.value / 50
      const timer = setInterval(() => {
        current += increment
        if (current >= stat.value) {
          stat.displayValue = stat.value
          clearInterval(timer)
        } else {
          stat.displayValue = Math.floor(current)
        }
      }, 30)
    })
  }
})
</script>

<style scoped>
.stats-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
  padding: var(--spacing-lg);
  background: linear-gradient(135deg, rgba(30, 58, 138, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(6, 182, 212, 0.1);
}

.stat-item {
  text-align: center;
  padding: var(--spacing-md);
}

.stat-number {
  font-size: 3rem;
  font-weight: 800;
  background: var(--bg-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: var(--spacing-xs);
  letter-spacing: -0.02em;
  font-family: var(--font-primary);
}

.stat-label {
  font-size: 0.9rem;
  color: var(--color-text-light);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-family: var(--font-primary);
}

.stat-item.count-up .stat-number {
  animation: pulse-scale 0.6s ease-out;
}

@keyframes pulse-scale {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

@media (max-width: 768px) {
  .stats-container {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-md);
  }
  
  .stat-number {
    font-size: 2.5rem;
  }
}
</style>

