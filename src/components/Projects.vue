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

.filter-btn {
  padding: var(--spacing-xs) var(--spacing-md);
  background: var(--bg-primary);
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  border-radius: var(--radius-full);
  cursor: pointer;
  font-weight: 600;
  transition: all var(--transition-fast);
  font-size: var(--font-size-base);
}

.filter-btn:hover {
  background: var(--color-primary);
  color: white;
}

.filter-btn.active {
  background: var(--bg-gradient);
  border-color: transparent;
  color: white;
  box-shadow: var(--shadow-glow);
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

