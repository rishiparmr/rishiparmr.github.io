<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
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
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  background: transparent;
  z-index: var(--z-header);
  transition: all var(--transition-base);
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: var(--shadow-md);
  backdrop-filter: blur(10px);
}

.scroll-progress {
  position: absolute;
  top: 0;
  left: 0;
  height: 3px;
  background: var(--bg-gradient);
  transition: width 0.1s ease-out;
  z-index: 1001;
  box-shadow: 0 0 10px var(--color-accent-glow);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.logo a {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-primary);
  transition: color var(--transition-fast);
}

.logo .accent {
  color: var(--color-accent);
  font-size: var(--font-size-2xl);
}

.logo a:hover {
  color: var(--color-accent);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: var(--spacing-md);
}

.nav-links a {
  color: var(--color-text);
  font-weight: 500;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: var(--color-accent);
  transition: width var(--transition-base);
}

.nav-links a:hover::after {
  width: 80%;
}

.nav-links a:hover {
  color: var(--color-accent);
}

/* Hamburger Menu */
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background: var(--color-primary);
  transition: all var(--transition-base);
  border-radius: var(--radius-full);
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

/* Responsive */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }
  
  .nav-menu {
    position: fixed;
    top: var(--header-height);
    left: -100%;
    width: 100%;
    height: calc(100vh - var(--header-height));
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    transition: left var(--transition-base);
    padding: var(--spacing-md);
  }
  
  .nav-menu.active {
    left: 0;
  }
  
  .nav-links {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
  
  .nav-links a {
    font-size: var(--font-size-lg);
    padding: var(--spacing-sm);
  }
}
</style>

