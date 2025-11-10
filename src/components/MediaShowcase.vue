<template>
  <section id="media-showcase" class="section media-showcase">
    <div class="container">
      <h2 class="section-title">Media Showcase</h2>
      <p class="showcase-intro">Inspirations & Journey in Software Development | Temporary for class project</p>
      
      <div class="media-grid">
        <!-- Embedded Video -->
        <div class="media-item">
          <h3 class="media-title">📹 Inspirational Speech: Steve Jobs at Stanford</h3>
          <div class="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/UF8uR6Z6KLc"
              title="Steve Jobs Stanford Commencement Speech"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="media-context">
            <p><strong>Significance:</strong> Steve Jobs' 2005 Stanford commencement speech profoundly influenced my approach to software development and career decisions. His message about "connecting the dots" resonates with my journey from learning programming fundamentals through Project Code to working on AI/ML projects at Capital One. His emphasis on doing what you love and trusting that the dots will connect inspired me to pursue both Computer Science and Data Science, even when the path wasn't clear. The speech reminds me that every project, hackathon, and internship (from winning 1st at Rutgers Health Hack to building IAM automation systems) contributes to a bigger picture I'm still discovering.</p>
          </div>
        </div>

        <!-- Embedded Audio -->
        <div class="media-item">
          <h3 class="media-title">🎵 "Intriguing Possibilities" - My Flow State Soundtrack</h3>
          <div class="audio-container">
            <audio controls>
              <source src="/audio.mp3" type="audio/mpeg">
              Your browser does not support the audio element.
            </audio>
            <p class="audio-note"><em>"Intriguing Possibilities" by Trent Reznor and Atticus Ross from The Social Network (2010)</em></p>
          </div>
          <div class="media-context">
            <p><strong>Significance:</strong> “Intriguing Possibilities” from The Social Network soundtrack is my favorite song to listen to when I’m coding. The movie motivates me because it shows how Mark Zuckerberg built something world-changing through focus and problem-solving, which I relate to from my hackathon and internship experiences. The song’s simple electronic beat helps me stay focused during tough coding sessions, like when I worked on Capital One’s IAM system or trained neural networks for KicNic. Its calm, steady rhythm helps me get into that flow state where ideas and solutions come easily.</p>
          </div>
        </div>

        <!-- Image Carousel/Slideshow -->
        <div class="media-item">
          <h3 class="media-title">🖼️ My Software Development Journey</h3>
          <div class="carousel-container">
            <div class="carousel">
              <button @click="previousSlide" class="carousel-btn prev" aria-label="Previous slide">‹</button>
              
              <div class="carousel-slides">
                <div 
                  v-for="(image, index) in images" 
                  :key="index"
                  class="carousel-slide"
                  :class="{ active: currentSlide === index }"
                >
                  <img :src="image.url" :alt="image.alt" />
                  <div class="slide-caption">{{ image.caption }}</div>
                </div>
              </div>
              
              <button @click="nextSlide" class="carousel-btn next" aria-label="Next slide">›</button>
            </div>
            
            <div class="carousel-dots">
              <button 
                v-for="(image, index) in images" 
                :key="index"
                @click="goToSlide(index)"
                class="dot"
                :class="{ active: currentSlide === index }"
                :aria-label="`Go to slide ${index + 1}`"
              ></button>
            </div>
          </div>
          <div class="media-context">
            <p><strong>Slideshow Highlights:</strong></p>
            <ul class="highlights-list">
              <li><strong>Image 1 - The Learning Foundation:</strong> Represents my early days teaching programming through Project Code, where I introduced 50+ K-3 students to coding fundamentals using Scratch, Java, and Python. This experience taught me that the best engineers can explain complex concepts simply (a skill I use daily in code reviews and team collaborations).</li>
              <li><strong>Image 2 - Professional Growth:</strong> Symbolizes my Capital One internship where I built scalable IAM systems that reduced processing time by 91%. Working with enterprise technologies like AWS, OracleDB, and SailPoint IIQ taught me how software development decisions impact thousands of users and the importance of writing maintainable, production-grade code.</li>
              <li><strong>Image 3 - Innovation & Competition:</strong> Captures the hackathon spirit where I thrive under pressure. From building KicNic's LSTM neural network (1st place, Rutgers Health Hack) to creating FairShare's AI-powered receipt parser (2nd place, HackRU), these experiences taught me rapid prototyping, full-stack development, and how to turn ambitious ideas into working products in 24 to 48 hours.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
const autoplayInterval = ref(null)

const images = ref([
  {
    url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
    alt: 'Students learning to code',
    caption: 'The Learning Foundation: Teaching Programming Fundamentals'
  },
  {
    url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    alt: 'Professional software development workspace',
    caption: 'Professional Growth: Capital One Internship & Enterprise Systems'
  },
  {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
    alt: 'Team collaboration at hackathon',
    caption: 'Innovation & Competition: Hackathon Success & Rapid Development'
  }
])

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % images.value.length
}

const previousSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + images.value.length) % images.value.length
}

const goToSlide = (index) => {
  currentSlide.value = index
}

// Auto-rotate every 4 seconds
onMounted(() => {
  autoplayInterval.value = setInterval(() => {
    nextSlide()
  }, 4000)
})

onUnmounted(() => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value)
  }
})
</script>

<style scoped>
.media-showcase {
  background: var(--bg-secondary);
}

.showcase-intro {
  text-align: center;
  font-size: var(--font-size-base);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-lg);
  font-style: italic;
}

.media-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-xl);
  max-width: 900px;
  margin: 0 auto;
}

.media-item {
  background: var(--bg-primary);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
}

.media-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-xl);
}

/* Dark Mode */
.dark-mode .media-item {
  background: linear-gradient(135deg, 
    rgba(30, 41, 59, 0.95) 0%, 
    rgba(15, 23, 42, 0.9) 100%);
  border: 1px solid rgba(147, 197, 253, 0.2);
  box-shadow: 
    0 8px 16px rgba(0, 0, 0, 0.4),
    0 4px 8px rgba(34, 211, 238, 0.1);
}

.dark-mode .media-item:hover {
  box-shadow: 
    0 12px 24px rgba(0, 0, 0, 0.5),
    0 6px 12px rgba(34, 211, 238, 0.15);
  border-color: rgba(34, 211, 238, 0.3);
}

.media-title {
  font-size: var(--font-size-xl);
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
  text-align: center;
}

.media-context {
  margin-top: var(--spacing-md);
  padding-top: var(--spacing-md);
  border-top: 2px solid rgba(6, 182, 212, 0.2);
  text-align: left;
}

.media-context p {
  line-height: 1.8;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-sm);
}

.media-context strong {
  color: var(--color-primary);
  font-weight: 600;
}

.highlights-list {
  list-style: none;
  padding: 0;
  margin-top: var(--spacing-sm);
}

.highlights-list li {
  padding: var(--spacing-sm) 0;
  padding-left: var(--spacing-md);
  border-left: 3px solid var(--color-accent);
  margin-bottom: var(--spacing-sm);
  line-height: 1.7;
  color: var(--color-text-light);
}

.highlights-list li strong {
  color: var(--color-accent);
  display: block;
  margin-bottom: 0.25rem;
}

/* Video Styles */
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  border-radius: var(--radius-md);
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: var(--radius-md);
}

/* Audio Styles */
.audio-container {
  text-align: center;
}

.audio-container audio {
  width: 100%;
  max-width: 500px;
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-sm);
}

.audio-note {
  color: var(--color-gray);
  font-size: var(--font-size-sm);
  margin: var(--spacing-xs) 0 0 0;
  font-style: italic;
  text-align: center;
}

.audio-description {
  color: var(--color-text-light);
  font-size: var(--font-size-sm);
  margin: 0;
}

/* Carousel Styles */
.carousel-container {
  max-width: 700px;
  margin: 0 auto;
}

.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: var(--radius-lg);
  background: var(--bg-secondary);
}

.carousel-slides {
  position: relative;
  width: 100%;
  padding-bottom: 75%; /* 4:3 aspect ratio */
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  pointer-events: none;
}

.carousel-slide.active {
  opacity: 1;
  pointer-events: auto;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--radius-lg);
}

.slide-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
  padding: var(--spacing-md);
  font-size: var(--font-size-base);
  font-weight: 600;
  text-align: center;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  color: var(--color-primary);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 2rem;
  cursor: pointer;
  transition: all var(--transition-fast);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-md);
}

.carousel-btn:hover {
  background: white;
  transform: translateY(-50%) scale(1.1);
  box-shadow: var(--shadow-lg);
}

.carousel-btn.prev {
  left: 15px;
}

.carousel-btn.next {
  right: 15px;
}

/* Dark Mode Carousel Buttons */
.dark-mode .carousel-btn {
  background: rgba(30, 41, 59, 0.9);
  color: var(--color-accent);
}

.dark-mode .carousel-btn:hover {
  background: rgba(30, 41, 59, 1);
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: var(--spacing-xs);
  margin-top: var(--spacing-md);
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--color-gray);
  border: none;
  cursor: pointer;
  transition: all var(--transition-fast);
  padding: 0;
}

.dot:hover {
  background: var(--color-accent);
  transform: scale(1.2);
}

.dot.active {
  background: var(--color-accent);
  width: 30px;
  border-radius: var(--radius-full);
}

/* Responsive */
@media (max-width: 768px) {
  .media-grid {
    gap: var(--spacing-lg);
  }

  .media-item {
    padding: var(--spacing-md);
  }

  .carousel-btn {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }

  .carousel-btn.prev {
    left: 10px;
  }

  .carousel-btn.next {
    right: 10px;
  }

  .slide-caption {
    font-size: var(--font-size-sm);
    padding: var(--spacing-sm);
  }
}
</style>

 