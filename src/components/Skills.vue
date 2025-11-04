<template>
  <section id="skills" class="section skills">
    <div class="container">
      <h2 class="section-title">Skills & Technologies</h2>
      
      <div class="skills-grid" ref="element">
        <div 
          v-for="(category, index) in skillCategories" 
          :key="category.title" 
          class="skill-category card"
          :class="{ 'animate-in': isVisible }"
          :style="{ 'animation-delay': `${index * 0.1}s` }"
        >
          <div class="card-inner">
            <div class="card-front">
              <div class="category-icon">{{ category.icon }}</div>
              <h3 class="category-title">{{ category.title }}</h3>
              <div class="skills-count">{{ category.skills.length }} skills</div>
            </div>
            <div class="card-back">
              <div class="skills-list">
                <span v-for="skill in category.skills" :key="skill" class="skill-tag">
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const { isVisible, element } = useScrollAnimation({ threshold: 0.2, once: true })

const skillCategories = ref([
  {
    title: 'Languages',
    icon: '💻',
    skills: ['Java', 'Python', 'C', 'JavaScript', 'HTML', 'SQL', 'R', 'Swift']
  },
  {
    title: 'Frameworks & Libraries',
    icon: '🎨',
    skills: ['React.js', 'React Native', 'Node.js', 'Express', 'Flask', 'Django', 'PyTorch']
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    skills: ['AWS', 'GCP', 'Azure', 'Unix', 'Git', 'Docker', 'Lambda', 'CloudWatch']
  },
  {
    title: 'Databases & APIs',
    icon: '🗄️',
    skills: ['PostgreSQL', 'OracleDB', 'Firebase', 'REST APIs', 'FastAPI', 'NoSQL']
  },
  {
    title: 'AI & Data Science',
    icon: '🤖',
    skills: ['PyTorch', 'LSTM Networks', 'Pandas', 'Matplotlib', 'OpenAI API', 'Machine Learning']
  },
  {
    title: 'Tools & Methodologies',
    icon: '🔧',
    skills: ['Agile/Scrum', 'SailPoint IIQ', 'Postman', 'Web Scraping', 'JWT Auth', 'Route 53']
  }
])
</script>

<style scoped>
.skills {
  background: var(--bg-primary);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-md);
}

.skill-category {
  text-align: center;
  padding: 0;
  transition: all var(--transition-base);
  perspective: 1000px;
  opacity: 0;
  transform: translateY(30px);
  height: 320px;
}

.skill-category.animate-in {
  animation: slideUp 0.6s ease-out forwards;
}

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.skill-category:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card-front {
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.card-back {
  background: var(--bg-gradient);
  color: white;
  transform: rotateY(180deg);
  overflow-y: auto;
}

/* Dark Mode Styles */
.dark-mode .card-front {
  background: linear-gradient(135deg, 
    rgba(30, 41, 59, 0.95) 0%, 
    rgba(15, 23, 42, 0.9) 100%);
  border: 1px solid rgba(147, 197, 253, 0.2);
  box-shadow: 
    0 8px 16px rgba(0, 0, 0, 0.4),
    0 4px 8px rgba(34, 211, 238, 0.1),
    inset 0 1px 0 rgba(147, 197, 253, 0.05);
}

.dark-mode .skill-category:hover .card-front {
  box-shadow: 
    0 12px 24px rgba(0, 0, 0, 0.5),
    0 6px 12px rgba(34, 211, 238, 0.15),
    inset 0 1px 0 rgba(147, 197, 253, 0.1);
  border-color: rgba(34, 211, 238, 0.3);
}

.category-icon {
  font-size: 4rem;
  margin-bottom: var(--spacing-sm);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.category-title {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-sm);
  color: var(--color-primary);
}

.skills-count {
  font-size: var(--font-size-sm);
  color: var(--color-accent);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  justify-content: center;
}

.skill-tag {
  background: rgba(255, 255, 255, 0.2);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  color: white;
  font-weight: 500;
  transition: all var(--transition-fast);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.skill-tag:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
  border-color: rgba(255, 255, 255, 0.6);
}

/* Responsive */
@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>

