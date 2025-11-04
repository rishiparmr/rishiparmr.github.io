<template>
  <nav class="navbar scrolled" :class="{ 'visible': isVisible }">
    <div class="scroll-progress" :style="{ width: scrollProgress + '%' }"></div>
    <div class="container nav-container">
      <div class="logo">
        <a href="#home">Rishi Parmar<span class="accent">.</span></a>
      </div>
      
      <div class="nav-menu" :class="{ 'active': isMobileMenuOpen }">
        <ul class="nav-links">
          <li><a href="#home" @click="closeMenu">Home</a></li>
          <li><a href="#about" @click="closeMenu">About</a></li>
          <li><a href="#skills" @click="closeMenu">Skills</a></li>
          <li><a href="#projects" @click="closeMenu">Projects</a></li>
          <li><a href="#resume" @click="closeMenu">Resume</a></li>
          <li><a href="#contact" @click="closeMenu">Contact</a></li>
        </ul>
      </div>
      
      <div class="hamburger" @click="toggleMenu" :class="{ 'active': isMobileMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const scrollProgress = ref(0)
const isVisible = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  
  // Calculate scroll progress
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const scrolled = (window.scrollY / windowHeight) * 100
  scrollProgress.value = Math.min(scrolled, 100)
}

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  // Show navbar after page loader animation (1500ms total from PageLoader)
  setTimeout(() => {
    isVisible.value = true
  }, 1500)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 80px);
  max-width: 1400px;
  height: var(--header-height);
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
  z-index: 1000;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  opacity: 0;
  transform: translateX(-50%) translateY(-20px);
}

.navbar::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(6, 182, 212, 0.05) 50%, 
    transparent 100%);
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
}

.navbar.visible {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.navbar:hover {
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.1),
    0 6px 20px rgba(6, 182, 212, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 1),
    inset 0 -1px 0 rgba(6, 182, 212, 0.08);
  border-color: rgba(6, 182, 212, 0.25);
}

.scroll-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, #4F46E5, #7C3AED, #EC4899);
  transition: width 0.1s ease-out;
  box-shadow: 0 -1px 8px rgba(6, 182, 212, 0.4);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 var(--spacing-lg);
}

.logo a {
  font-size: 1.6rem;
  font-weight: 800;
  background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% auto;
  transition: all 0.4s ease;
  letter-spacing: -0.5px;
  position: relative;
  display: inline-block;
  filter: drop-shadow(0 2px 4px rgba(6, 182, 212, 0.2));
}

.logo a::before {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #1e3a8a, #06b6d4);
  transition: width 0.3s ease;
}

.logo a:hover::before {
  width: 100%;
}

.logo .accent {
  background: linear-gradient(135deg, #06b6d4, #22d3ee, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.9rem;
  font-weight: 900;
  display: inline-block;
  animation: pulse 2s ease-in-out infinite;
  filter: drop-shadow(0 2px 8px rgba(6, 182, 212, 0.4));
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
}

.logo a:hover {
  background-position: right center;
  transform: translateY(-2px);
  filter: drop-shadow(0 4px 8px rgba(6, 182, 212, 0.3));
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 8px;
  align-items: center;
}

.nav-links a {
  color: var(--color-text);
  font-weight: 600;
  padding: 10px 18px;
  border-radius: 10px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  font-size: 0.95rem;
  letter-spacing: 0.2px;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 6px;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 70%;
  height: 2px;
  background: linear-gradient(90deg, #1e3a8a, #06b6d4, #22d3ee);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(6, 182, 212, 0.4);
}

.nav-links a:hover::after {
  transform: translateX(-50%) scaleX(1);
}

.nav-links a:hover {
  color: var(--color-accent);
  transform: translateY(-2px);
}

/* Hamburger Menu */
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 6px;
  padding: 8px;
  border-radius: var(--radius-md);
  transition: all 0.3s ease;
}

.hamburger:hover {
  background: rgba(6, 182, 212, 0.1);
}

.hamburger span {
  width: 28px;
  height: 3px;
  background: var(--color-primary);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: var(--radius-full);
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(9px, 9px);
  background: var(--color-accent);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
  transform: translateX(20px);
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(9px, -9px);
  background: var(--color-accent);
}

/* Responsive */
@media (max-width: 768px) {
  .navbar {
    top: 10px;
    width: calc(100% - 20px);
    border-radius: 18px;
  }
  
  .hamburger {
    display: flex;
    z-index: 1002;
  }
  
  .nav-menu {
    position: fixed;
    top: calc(var(--header-height) + 20px);
    left: -100%;
    width: calc(100% - 40px);
    margin: 0 20px;
    max-height: calc(100vh - var(--header-height) - 40px);
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    padding: var(--spacing-xl);
    box-shadow: 
      0 8px 32px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.8);
    border-radius: 12px;
    border: 1px solid rgba(79, 70, 229, 0.15);
    overflow-y: auto;
  }
  
  .nav-menu.active {
    left: 0;
  }
  
  .nav-links {
    flex-direction: column;
    gap: var(--spacing-md);
    align-items: stretch;
  }
  
  .nav-links a {
    font-size: var(--font-size-lg);
    padding: var(--spacing-md);
    text-align: center;
    border: 1px solid rgba(6, 182, 212, 0.1);
    background: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
  }
  
  .nav-links a:hover {
    border-color: var(--color-accent);
    background: rgba(6, 182, 212, 0.05);
    transform: scale(1.02);
  }
}
</style>

