import { onMounted, onUnmounted, ref } from 'vue'

export function useScrollAnimation(options = {}) {
  const isVisible = ref(false)
  const element = ref(null)
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isVisible.value = true
          if (options.once) {
            observer.unobserve(entry.target)
          }
        } else if (!options.once) {
          isVisible.value = false
        }
      })
    }, {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px'
    })

    if (element.value) {
      observer.observe(element.value)
    }
  })

  onUnmounted(() => {
    if (observer && element.value) {
      observer.unobserve(element.value)
    }
  })

  return { isVisible, element }
}

