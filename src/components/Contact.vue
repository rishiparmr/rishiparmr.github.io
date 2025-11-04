<template>
  <section id="contact" class="section contact">
    <div class="container">
      <h2 class="section-title">Get In Touch</h2>
      <p class="contact-intro">
        Have a project in mind or want to collaborate? Feel free to reach out!
      </p>
      
      <div class="contact-content" ref="element">
        <div class="contact-info" :class="{ 'slide-in-left': isVisible }">
          <div class="info-card">
            <div class="info-icon">📧</div>
            <h3>Email</h3>
            <p>rishi.parmar@rutgers.edu</p>
          </div>
          
          <div class="info-card">
            <div class="info-icon">📱</div>
            <h3>Phone</h3>
            <p>732-799-5974</p>
          </div>
          
          <div class="info-card">
            <div class="info-icon">📍</div>
            <h3>Location</h3>
            <p>Princeton, NJ</p>
          </div>
          
          <div class="social-links">
            <a href="https://github.com/rishiparmar" class="social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            
            <a href="https://www.linkedin.com/in/rishi-parmar" class="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            <a href="#" class="social-link" aria-label="Twitter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <form @submit.prevent="handleSubmit" class="contact-form" :class="{ 'slide-in-right': isVisible }">
          <div class="form-group">
            <label for="name">Name *</label>
            <input 
              type="text" 
              id="name" 
              v-model="formData.name" 
              required
              placeholder="Your name"
            />
          </div>
          
          <div class="form-group">
            <label for="email">Email *</label>
            <input 
              type="email" 
              id="email" 
              v-model="formData.email" 
              required
              placeholder="your.email@example.com"
            />
          </div>
          
          <div class="form-group">
            <label for="subject">Subject *</label>
            <input 
              type="text" 
              id="subject" 
              v-model="formData.subject" 
              required
              placeholder="What's this about?"
            />
          </div>
          
          <div class="form-group">
            <label for="message">Message *</label>
            <textarea 
              id="message" 
              v-model="formData.message" 
              required
              rows="5"
              placeholder="Your message here..."
            ></textarea>
          </div>
          
          <button type="submit" class="btn btn-primary submit-btn" :disabled="isSubmitting">
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>
          
          <p v-if="submitMessage" class="submit-message" :class="{ success: submitSuccess }">
            {{ submitMessage }}
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const { isVisible, element } = useScrollAnimation({ threshold: 0.2, once: true })

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  submitMessage.value = ''
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  // Reset form
  formData.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
  
  submitSuccess.value = true
  submitMessage.value = 'Thank you! Your message has been sent successfully.'
  isSubmitting.value = false
  
  // Clear success message after 5 seconds
  setTimeout(() => {
    submitMessage.value = ''
  }, 5000)
}
</script>

<style scoped>
.contact {
  background: var(--bg-primary);
}

.contact-intro {
  text-align: center;
  font-size: var(--font-size-lg);
  max-width: 600px;
  margin: 0 auto var(--spacing-lg);
  color: var(--color-text-light);
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--spacing-lg);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  opacity: 0;
  transform: translateX(-50px);
  transition: all 0.8s ease-out;
}

.contact-info.slide-in-left {
  opacity: 1;
  transform: translateX(0);
}

.info-card {
  padding: var(--spacing-md);
  background: white;
  border-radius: var(--radius-lg);
  text-align: center;
  transition: all var(--transition-base);
  border: 2px solid transparent;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-accent);
}

/* Dark Mode Info Cards */
.dark-mode .info-card {
  background: linear-gradient(135deg, 
    rgba(30, 41, 59, 0.95) 0%, 
    rgba(15, 23, 42, 0.9) 100%);
  border: 1px solid rgba(147, 197, 253, 0.2);
  box-shadow: 
    0 8px 16px rgba(0, 0, 0, 0.4),
    0 4px 8px rgba(34, 211, 238, 0.1);
}

.dark-mode .info-card:hover {
  box-shadow: 
    0 12px 24px rgba(0, 0, 0, 0.5),
    0 6px 12px rgba(34, 211, 238, 0.15);
  border-color: rgba(34, 211, 238, 0.4);
}

.info-icon {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-xs);
  transition: transform var(--transition-base);
}

.info-card:hover .info-icon {
  transform: scale(1.2) rotate(5deg);
}

.info-card h3 {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-xs);
  color: var(--color-primary);
}

.info-card p {
  color: var(--color-text-light);
  margin: 0;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md);
}

.social-link {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-gradient);
  color: white;
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
}

.social-link:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg), var(--shadow-glow);
}

.contact-form {
  background: var(--bg-secondary);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  opacity: 0;
  transform: translateX(50px);
  transition: all 0.8s ease-out 0.2s;
}

.contact-form.slide-in-right {
  opacity: 1;
  transform: translateX(0);
}

.form-group {
  margin-bottom: var(--spacing-md);
}

.form-group label {
  display: block;
  margin-bottom: var(--spacing-xs);
  font-weight: 600;
  color: var(--color-primary);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: var(--spacing-sm);
  border: 2px solid #e2e8f0;
  border-radius: var(--radius-md);
  font-family: var(--font-primary);
  font-size: var(--font-size-base);
  transition: border-color var(--transition-fast), background-color var(--transition-fast), color var(--transition-fast);
  background: white;
  color: var(--color-text);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-accent);
}

/* Dark Mode Form */
.dark-mode .contact-form {
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(147, 197, 253, 0.2);
}

.dark-mode .form-group input,
.dark-mode .form-group textarea {
  background: rgba(15, 23, 42, 0.8);
  border-color: rgba(147, 197, 253, 0.2);
  color: var(--color-text);
}

.dark-mode .form-group input:focus,
.dark-mode .form-group textarea:focus {
  background: rgba(15, 23, 42, 0.95);
  border-color: var(--color-accent);
}

.dark-mode .form-group input::placeholder,
.dark-mode .form-group textarea::placeholder {
  color: var(--color-gray);
}

.form-group textarea {
  resize: vertical;
}

.submit-btn {
  width: 100%;
  font-size: var(--font-size-lg);
  padding: var(--spacing-sm) var(--spacing-md);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-message {
  margin-top: var(--spacing-sm);
  padding: var(--spacing-sm);
  border-radius: var(--radius-md);
  text-align: center;
  background: #fee;
  color: #c33;
  font-weight: 500;
}

.submit-message.success {
  background: #efe;
  color: #3a3;
}

/* Responsive */
@media (max-width: 968px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .contact-form {
    padding: var(--spacing-md);
  }
}
</style>

