<template>
  <footer class="app-footer">
    <!-- Slot for page-specific content above the social media section -->
    <slot></slot>

    <!-- Social Media Section (always present) -->
    <section class="footer-social">
      <div class="container">
        <p class="social-text">{{ currentLocale === 'ja' ? '最新の写真とアップデートはこちら' : 'Follow us for latest photos and updates' }}</p>
        <p class="copyright">© 2026 Minoh Cycle Tours合同会社</p>
        <div class="social-links">
          <a href="https://www.instagram.com/minoh.cycle.tours/" target="_blank" rel="noopener noreferrer" class="social-link">
            <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>Instagram</span>
          </a>
          <a href="https://www.youtube.com/@MinohCycles" target="_blank" rel="noopener noreferrer" class="social-link">
            <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>YouTube</span>
          </a>
        </div>
      </div>
    </section>
  </footer>
</template>

<script>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'AppFooter',
  setup() {
    const { locale } = useI18n()
    const currentLocale = ref(locale.value)

    return {
      currentLocale
    }
  }
}
</script>

<style scoped>
.app-footer {
  background-color: #1e293b;
  color: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Social Media Section */
.footer-social {
  padding: 3rem 0;
  text-align: center;
}

.social-text {
  font-size: 1rem;
  margin-bottom: 1rem;
  opacity: 0.8;
}

.copyright {
  font-size: 0.85rem;
  opacity: 0.5;
  margin-bottom: 1.25rem;
}

.social-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #e1306c;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  padding: 0.75rem 1.5rem;
  border: 2px solid rgba(225, 48, 108, 0.3);
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.1);
}

.social-link:hover {
  background-color: rgba(225, 48, 108, 0.1);
  border-color: #e1306c;
  transform: translateY(-2px);
}

.social-icon {
  width: 20px;
  height: 20px;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-social {
    padding: 2rem 0;
  }

  .social-text {
    font-size: 0.9rem;
    padding: 0 1rem;
  }

  .social-links {
    padding: 0 1rem;
  }

  .social-link {
    padding: 0.75rem 1.25rem;
    font-size: 0.9rem;
  }

  .social-icon {
    width: 18px;
    height: 18px;
  }
}
</style>
