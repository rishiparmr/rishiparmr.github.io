<template>
  <section id="home" class="hero">
    <div class="hero-background">
      <div class="hero-gradient"></div>
      <div class="hero-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
    </div>
    
    <div class="container hero-content">
      <div class="hero-text fade-in">
        <p class="greeting">Hi, I'm</p>
        <h1 class="name">Rishi Parmar</h1>
        <h2 class="tagline">
          <span class="typing-text">{{ displayedText }}</span>
          <span class="cursor">|</span>
        </h2>
        <p class="description">
          Rutgers University student passionate about building scalable systems and AI-driven solutions.
          Former Capital One intern with experience in IAM, cloud architecture, and full-stack development.
        </p>
        <div class="hero-buttons">
          <a href="#projects" class="btn btn-primary">View My Work</a>
          <a href="#contact" class="btn btn-outline">Get In Touch</a>
        </div>
      </div>
    </div>
    
    <div class="scroll-indicator">
      <div class="mouse">
        <div class="wheel"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const displayedText = ref('')
const texts = ['Computer Science Student', 'Software Engineer', 'Full-Stack Developer', 'AI/ML Enthusiast']
let currentTextIndex = 0
let currentCharIndex = 0
let isDeleting = false
let typingTimeout = null

const typeText = () => {
  const currentText = texts[currentTextIndex]
  
  if (!isDeleting) {
    displayedText.value = currentText.substring(0, currentCharIndex + 1)
    currentCharIndex++
    
    if (currentCharIndex === currentText.length) {
      isDeleting = true
      typingTimeout = setTimeout(typeText, 2000) // Pause at end
      return
    }
  } else {
    displayedText.value = currentText.substring(0, currentCharIndex - 1)
    currentCharIndex--
    
    if (currentCharIndex === 0) {
      isDeleting = false
      currentTextIndex = (currentTextIndex + 1) % texts.length
      typingTimeout = setTimeout(typeText, 500)
      return
    }
  }
  
  typingTimeout = setTimeout(typeText, isDeleting ? 50 : 100)
}

onMounted(() => {
  typeText()
})

onUnmounted(() => {
  if (typingTimeout) clearTimeout(typingTimeout)
})
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.hero-gradient {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, 
    rgba(30, 58, 138, 0.05) 0%, 
    rgba(6, 182, 212, 0.05) 100%);
}

.hero-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
  animation: float 20s infinite ease-in-out;
}

.shape-1 {
  width: 300px;
  height: 300px;
  background: var(--color-primary);
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 200px;
  height: 200px;
  background: var(--color-accent);
  bottom: 20%;
  right: 15%;
  animation-delay: 5s;
}

.shape-3 {
  width: 150px;
  height: 150px;
  background: var(--color-primary-light);
  top: 50%;
  right: 10%;
  animation-delay: 10s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-30px) translateX(20px);
  }
  50% {
    transform: translateY(-20px) translateX(-30px);
  }
  75% {
    transform: translateY(30px) translateX(-20px);
  }
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: var(--spacing-xl) var(--spacing-md);
}

.greeting {
  font-size: var(--font-size-xl);
  color: var(--color-accent);
  margin-bottom: var(--spacing-xs);
  font-weight: 500;
}

.name {
  font-size: var(--font-size-4xl);
  font-weight: 800;
  background: linear-gradient(135deg, #1e3a8a 0%, #06b6d4 50%, #1e3a8a 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: var(--spacing-xs);
  line-height: 1.1;
  animation: gradient-flow 4s ease infinite;
  text-shadow: 0 0 30px rgba(6, 182, 212, 0.3);
}

@keyframes gradient-flow {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.tagline {
  font-size: var(--font-size-2xl);
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
  font-weight: 600;
  min-height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.typing-text {
  display: inline-block;
}

.cursor {
  display: inline-block;
  color: var(--color-accent);
  animation: blink 1s infinite;
  margin-left: 2px;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.description {
  font-size: var(--font-size-lg);
  color: var(--color-text-light);
  max-width: 600px;
  margin: 0 auto var(--spacing-lg);
  line-height: 1.8;
}

.hero-buttons {
  display: flex;
  gap: var(--spacing-sm);
  justify-content: center;
  flex-wrap: wrap;
}

.hero-buttons .btn {
  min-width: 150px;
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
}

.mouse {
  width: 30px;
  height: 50px;
  border: 2px solid var(--color-primary);
  border-radius: 20px;
  position: relative;
}

.wheel {
  width: 4px;
  height: 10px;
  background: var(--color-accent);
  border-radius: 2px;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

@keyframes scroll {
  0% {
    top: 8px;
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    top: 25px;
    opacity: 0;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .name {
    font-size: var(--font-size-3xl);
  }
  
  .tagline {
    font-size: var(--font-size-xl);
  }
  
  .description {
    font-size: var(--font-size-base);
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-buttons .btn {
    width: 100%;
    max-width: 250px;
  }
  
  .shape-1 {
    width: 200px;
    height: 200px;
  }
  
  .shape-2 {
    width: 150px;
    height: 150px;
  }
  
  .shape-3 {
    width: 100px;
    height: 100px;
  }
}
</style>

