<template>
  <section id="projects" class="section projects">
    <div class="container">
      <h2 class="section-title">Featured Projects</h2>
      
      <div class="filter-buttons">
        <button 
          v-for="filter in filters" 
          :key="filter"
          @click="activeFilter = filter"
          :class="['filter-btn', { active: activeFilter === filter }]"
        >
          {{ filter }}
        </button>
      </div>
      
      <div class="projects-grid">
        <ProjectCard 
          v-for="project in filteredProjects" 
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProjectCard from './ProjectCard.vue'

const activeFilter = ref('All')
const filters = ref(['All', 'AI/ML', 'Full-Stack', 'Mobile', 'Cloud'])

const projects = ref([
  {
    id: 1,
    title: 'Capital One IAM Automation',
    description: 'Built Python REST API integrating Workday, OracleDB, and SailPoint IIQ, cutting user termination processing by 91% (23hrs → <2hrs). Deployed company-wide for 52K+ employees using AWS.',
    category: 'Cloud',
    tech: ['Python', 'FastAPI', 'AWS', 'OracleDB', 'SailPoint IIQ'],
    image: '🏢',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'KicNic - Vaping Detection',
    description: 'LSTM neural network in PyTorch with ~92% accuracy for real-time vape detection using Apple Watch sensors. Built React dashboard for tracking usage and health metrics. Won 1st at Rutgers Health Hack.',
    category: 'AI/ML',
    tech: ['PyTorch', 'Swift', 'Firebase', 'React', 'LSTM'],
    image: '🏆',
    award: '1st Place',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'FairShare - Smart Bill Splitting',
    description: 'Integrated Azure & OpenAI APIs with ~95% accuracy in receipt parsing under 15 seconds. Deployed via Google Cloud Functions with React Native iOS interface. Won 2nd at HackRU (300+ teams).',
    category: 'Full-Stack',
    tech: ['Python', 'React Native', 'GCP', 'Azure', 'OpenAI', 'Firebase'],
    image: '🥈',
    award: '2nd Place',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 4,
    title: 'Spend Ruby - Expense Tracker Dashboard',
    description: 'Optimized Node.js/Express server on AWS EB, improving transaction processing by 20%. Engineered PostgreSQL database on Amazon RDS with JWT authentication and OpenAI integration for financial insights.',
    category: 'Full-Stack',
    tech: ['Node.js', 'Express', 'React', 'PostgreSQL', 'AWS', 'OpenAI'],
    image: '💰',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 5,
    title: 'Project Code - Education Initiative',
    description: 'Co-founded and led 12-week programming curriculum using MIT OpenCourseWare. Taught Scratch, Java, and Python fundamentals to 50+ K-3 students over 2 years.',
    category: 'Mobile',
    tech: ['Java', 'Python', 'Scratch', 'Teaching'],
    image: '📚',
    demoUrl: '#',
    githubUrl: '#'
  }
])

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') {
    return projects.value
  }
  return projects.value.filter(project => project.category === activeFilter.value)
})
</script>

<style scoped>
.projects {
  background: var(--bg-secondary);
}

.filter-buttons {
  display: flex;
  justify-content: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
  flex-wrap: wrap;
}

button.filter-btn,
.filter-buttons .filter-btn,
.filter-buttons button {
  padding: var(--spacing-xs) var(--spacing-md);
  background: var(--bg-primary);
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  border-radius: 9999px !important;
  cursor: pointer;
  font-weight: 600;
  transition: all var(--transition-fast);
  font-size: var(--font-size-base);
  font-family: var(--font-primary);
  outline: none !important;
  outline-offset: 0 !important;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  overflow: hidden;
  box-sizing: border-box;
}

button.filter-btn:focus,
.filter-buttons .filter-btn:focus,
.filter-buttons button:focus,
button.filter-btn:focus-visible,
.filter-buttons .filter-btn:focus-visible,
.filter-buttons button:focus-visible {
  outline: none !important;
  outline-offset: 0 !important;
  border-radius: 9999px !important;
}

button.filter-btn:hover,
.filter-buttons .filter-btn:hover,
.filter-buttons button:hover {
  background: var(--color-primary);
  color: white;
  border-radius: 9999px !important;
}

button.filter-btn.active,
.filter-buttons .filter-btn.active,
.filter-buttons button.active {
  background: var(--color-primary);
  border: 2px solid var(--color-primary);
  color: white;
  box-shadow: 0 4px 12px rgba(30, 58, 138, 0.3);
  border-radius: 9999px !important;
  outline: none !important;
  transform: translateY(-1px);
}

button.filter-btn.active:focus,
.filter-buttons .filter-btn.active:focus,
.filter-buttons button.active:focus,
button.filter-btn.active:focus-visible,
.filter-buttons .filter-btn.active:focus-visible,
.filter-buttons button.active:focus-visible {
  outline: none !important;
  border-radius: 9999px !important;
}

/* Dark Mode Filter Buttons */
.dark-mode button.filter-btn,
.dark-mode .filter-buttons .filter-btn,
.dark-mode .filter-buttons button {
  background: rgba(30, 41, 59, 0.5);
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.dark-mode button.filter-btn:hover,
.dark-mode .filter-buttons .filter-btn:hover,
.dark-mode .filter-buttons button:hover {
  background: var(--color-accent);
  color: var(--color-primary-dark);
}

.dark-mode button.filter-btn.active,
.dark-mode .filter-buttons .filter-btn.active,
.dark-mode .filter-buttons button.active {
  background: var(--color-accent);
  border: 2px solid var(--color-accent);
  color: var(--color-primary-dark);
  box-shadow: 0 4px 12px rgba(34, 211, 238, 0.4);
  transform: translateY(-1px);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-md);
}

/* Responsive */
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>

