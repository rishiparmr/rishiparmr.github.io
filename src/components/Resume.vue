<template>
  <section id="resume" class="section resume">
    <div class="container">
      <h2 class="section-title">Resume</h2>
      <p class="resume-intro">
        View or download my full resume below
      </p>
      
      <div class="resume-content" ref="element">
        <div class="resume-actions" :class="{ 'fade-in': isVisible }">
          <a href="/rishiresume.pdf" class="btn btn-primary" download>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 8px;">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download PDF
          </a>
          <a href="/rishiresume.pdf" class="btn btn-outline" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 8px;">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Open in New Tab
          </a>
        </div>
        
        <div class="resume-viewer" :class="{ 'scale-in': isVisible }">
          <iframe 
            :src="pdfUrl" 
            class="resume-iframe"
            title="Rishi Parmar Resume"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const { isVisible, element } = useScrollAnimation({ threshold: 0.1, once: true })

const pdfUrl = computed(() => {
  // Add #view=FitH to make PDF fit width and look better
  return '/rishiresume.pdf#view=FitH'
})
</script>

<style scoped>
.resume {
  background: var(--bg-primary);
}

.resume-intro {
  text-align: center;
  font-size: var(--font-size-lg);
  max-width: 600px;
  margin: 0 auto var(--spacing-lg);
  color: var(--color-text-light);
}

.resume-content {
  max-width: 1000px;
  margin: 0 auto;
}

.resume-actions {
  display: flex;
  justify-content: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
  flex-wrap: wrap;
  opacity: 0;
  transition: opacity 0.6s ease-out;
}

.resume-actions.fade-in {
  opacity: 1;
}

.resume-actions .btn {
  display: flex;
  align-items: center;
  min-width: 180px;
  justify-content: center;
}

.resume-viewer {
  background: white;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  overflow: hidden;
  opacity: 0;
  transform: scale(0.95);
  transition: all 0.8s ease-out 0.2s;
}

.resume-viewer.scale-in {
  opacity: 1;
  transform: scale(1);
}

.resume-iframe {
  width: 100%;
  height: 800px;
  border: none;
  display: block;
}

/* Responsive */
@media (max-width: 968px) {
  .resume-iframe {
    height: 600px;
  }
}

@media (max-width: 768px) {
  .resume-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .resume-actions .btn {
    width: 100%;
    max-width: 280px;
  }
  
  .resume-iframe {
    height: 500px;
  }
}

@media (max-width: 480px) {
  .resume-iframe {
    height: 400px;
  }
}
</style>

