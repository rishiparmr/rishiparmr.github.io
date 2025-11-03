<template>
  <div 
    class="project-card card" 
    @mouseenter="handleMouseEnter" 
    @mousemove="handleMouseMove" 
    @mouseleave="handleMouseLeave"
    :style="cardStyle"
  >
    <div class="project-shine"></div>
    <div v-if="project.award" class="award-badge">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
      {{ project.award }}
    </div>
    <div class="project-icon">{{ project.image }}</div>
    <h3 class="project-title">{{ project.title }}</h3>
    <p class="project-description">{{ project.description }}</p>
    
    <div class="project-tech">
      <span 
        v-for="(tech, index) in project.tech" 
        :key="tech" 
        class="tech-badge"
        :style="{ animationDelay: `${index * 0.05}s` }"
      >
        {{ tech }}
      </span>
    </div>
    
    <div class="project-links">
      <a :href="project.demoUrl" class="project-link" target="_blank" rel="noopener noreferrer">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
        Live Demo
      </a>
      <a :href="project.githubUrl" class="project-link" target="_blank" rel="noopener noreferrer">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        GitHub
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

defineProps({
  project: {
    type: Object,
    required: true
  }
})

const tiltX = ref(0)
const tiltY = ref(0)
const isHovered = ref(false)

const cardStyle = computed(() => {
  if (!isHovered.value) return {}
  return {
    transform: `perspective(1000px) rotateX(${tiltY.value}deg) rotateY(${tiltX.value}deg) scale(1.02)`,
    transition: 'transform 0.1s ease-out'
  }
})

const handleMouseEnter = () => {
  isHovered.value = true
}

const handleMouseMove = (e) => {
  if (!isHovered.value) return
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const rotateX = ((y - centerY) / centerY) * -10
  const rotateY = ((x - centerX) / centerX) * 10
  
  tiltX.value = rotateY
  tiltY.value = rotateX
}

const handleMouseLeave = () => {
  isHovered.value = false
  tiltX.value = 0
  tiltY.value = 0
}
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  will-change: transform;
}

.project-shine {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, 
    transparent 30%, 
    rgba(255, 255, 255, 0.1) 50%, 
    transparent 70%);
  transform: translateX(-100%);
  transition: transform 0.6s;
}

.project-card:hover .project-shine {
  transform: translateX(100%);
}

.award-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  color: white;
  padding: 6px 12px;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
  box-shadow: 0 4px 12px rgba(251, 191, 36, 0.4);
  z-index: 10;
  animation: badge-pulse 2s ease-in-out infinite;
}

@keyframes badge-pulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 4px 12px rgba(251, 191, 36, 0.4);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgba(251, 191, 36, 0.6);
  }
}

.project-icon {
  font-size: 4rem;
  margin-bottom: var(--spacing-sm);
  text-align: center;
  animation: bounce-icon 2s ease-in-out infinite;
  transform-style: preserve-3d;
}

@keyframes bounce-icon {
  0%, 100% { transform: translateZ(0px) scale(1); }
  50% { transform: translateZ(20px) scale(1.1); }
}

.project-title {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-sm);
  color: var(--color-primary);
}

.project-description {
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
  flex-grow: 1;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-md);
}

.tech-badge {
  background: var(--bg-gradient);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  font-weight: 500;
  opacity: 0;
  transform: scale(0.8);
  animation: badge-appear 0.4s ease-out forwards;
}

@keyframes badge-appear {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.project-links {
  display: flex;
  gap: var(--spacing-sm);
  padding-top: var(--spacing-sm);
  border-top: 1px solid var(--bg-secondary);
}

.project-link {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: var(--color-accent);
  font-weight: 600;
  font-size: var(--font-size-sm);
  transition: all var(--transition-fast);
}

.project-link:hover {
  color: var(--color-primary);
  transform: translateX(3px);
}

.project-link svg {
  transition: transform var(--transition-fast);
}

.project-link:hover svg {
  transform: scale(1.1);
}
</style>

