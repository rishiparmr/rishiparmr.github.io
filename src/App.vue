<template>
  <div id="app">
    <PageLoader />
    <ParticleBackground />
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <MediaShowcase />
    <Resume />
    <Contact />
    <Footer />
    <BackToTop />
    <ThemeToggle />
  </div>
</template>

<script setup>
import PageLoader from './components/PageLoader.vue'
import ParticleBackground from './components/ParticleBackground.vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import MediaShowcase from './components/MediaShowcase.vue'
import Resume from './components/Resume.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import BackToTop from './components/BackToTop.vue'
import ThemeToggle from './components/ThemeToggle.vue'
</script>

<style>
#app {
  min-height: 100vh;
  position: relative;
}

/* Ensure content is above particles, but preserve navbar and loader fixed positioning */
#app > *:not(.particles-container):not(nav):not(.page-loader) {
  position: relative;
  z-index: 1;
}
</style>

