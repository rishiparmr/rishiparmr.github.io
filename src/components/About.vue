<template>
  <section id="about" class="section about">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      
      <div class="about-content" ref="element">
        <div class="about-image" :class="{ 'slide-in-left': isVisible }">
          <div class="image-container">
            <img src="/profilepic.png" alt="Rishi - Software Engineer" class="profile-pic" />
          </div>
        </div>
        
        <div class="about-text" :class="{ 'slide-in-right': isVisible }">
          <h3>Hi, I'm Rishi Parmar</h3>
          <p>
            I'm a Computer Science and Data Science student at Rutgers University (Expected May 2026) with a 3.6 GPA 
            and Dean's List recognition. My passion lies in building scalable systems, developing AI-driven solutions, 
            and creating innovative applications that solve real-world problems.
          </p>
          <p>
            During my internship at Capital One, I built and deployed a Python REST API that reduced user termination 
            processing time by 91% and designed a scalable IAM architecture adopted company-wide for 52K+ employees. 
            I'm experienced in full-stack development, cloud architecture (AWS, GCP, Azure), and machine learning.
          </p>
          <p>
            I've won 1st place at Rutgers Health Hack and 2nd place at HackRU, building projects that combine 
            cutting-edge technology with meaningful impact. When I'm not coding, I enjoy teaching programming 
            fundamentals and contributing to the tech community.
          </p>
          
          <div class="about-details">
            <div class="detail-item">
              <span class="detail-label">Location:</span>
              <span class="detail-value">Princeton, NJ</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Email:</span>
              <span class="detail-value">rishi.parmar@rutgers.edu</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Education:</span>
              <span class="detail-value">Rutgers University (Expected 2026)</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Status:</span>
              <span class="detail-value">Open to Summer 2026 Opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollAnimation } from '../composables/useScrollAnimation'

const { isVisible, element } = useScrollAnimation({ threshold: 0.2, once: true })
</script>

<style scoped>
.about {
  background: var(--bg-secondary);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--spacing-lg);
  align-items: center;
}

.about-image {
  display: flex;
  justify-content: center;
  opacity: 0;
  transform: translateX(-50px);
  transition: all 0.8s ease-out;
}

.about-image.slide-in-left {
  opacity: 1;
  transform: translateX(0);
}

.about-text {
  opacity: 0;
  transform: translateX(50px);
  transition: all 0.8s ease-out 0.2s;
}

.about-text.slide-in-right {
  opacity: 1;
  transform: translateX(0);
}

.image-container {
  width: 300px;
  height: 300px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-xl);
  position: relative;
  overflow: hidden;
  background: var(--bg-gradient);
  padding: 8px;
}

.profile-pic {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  border-radius: var(--radius-lg);
  transition: transform var(--transition-base);
}

.image-container:hover .profile-pic {
  transform: scale(1.05);
}

.image-container::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
  animation: shine 3s infinite;
  pointer-events: none;
  z-index: 1;
}

@keyframes shine {
  0% {
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) translateY(100%) rotate(45deg);
  }
}

.about-text h3 {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-sm);
  color: var(--color-primary);
}

.about-text p {
  margin-bottom: var(--spacing-sm);
  line-height: 1.8;
}

.about-details {
  margin: var(--spacing-md) 0;
  padding: var(--spacing-md);
  background: var(--bg-primary);
  border-radius: var(--radius-md);
  border-left: 4px solid var(--color-accent);
}

.detail-item {
  display: flex;
  margin-bottom: var(--spacing-xs);
}

.detail-item:last-child {
  margin-bottom: 0;
}

.detail-label {
  font-weight: 600;
  color: var(--color-primary);
  min-width: 100px;
}

.detail-value {
  color: var(--color-text-light);
}

/* Responsive */
@media (max-width: 968px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
  
  .image-container {
    width: 250px;
    height: 250px;
  }
}

@media (max-width: 480px) {
  .image-container {
    width: 200px;
    height: 200px;
  }
  
  .detail-item {
    flex-direction: column;
  }
  
  .detail-label {
    margin-bottom: var(--spacing-xs);
  }
}
</style>

