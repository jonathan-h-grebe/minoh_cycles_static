<template>
  <div class="how-to-book-page">
    <AppHeader />

    <main class="content-section">
      <div class="container">
        <div class="page-header">
          <h1 class="page-title">{{ $t('howToBook.title') }}</h1>
          <p v-if="$t('howToBook.subtitle')" class="page-subtitle">{{ $t('howToBook.subtitle') }}</p>
        </div>

        <!-- Guided Tours Section -->
        <div class="booking-section">
          <div class="section-header">
            <div class="icon-wrapper">🚴</div>
            <h2>{{ $t('howToBook.guidedTours.title') }}</h2>
          </div>

          <div class="step-by-step">
            <div class="step">
              <div class="step-number">1</div>
              <div class="step-content">
                <h3>{{ $t('howToBook.guidedTours.step1.title') }}</h3>
                <p v-if="$t('howToBook.guidedTours.step1.description')">{{ $t('howToBook.guidedTours.step1.description') }}</p>
                <router-link to="/tours" class="inline-link">
                  {{ $t('howToBook.guidedTours.step1.linkText') }} →
                </router-link>
              </div>
            </div>

            <div class="step">
              <div class="step-number">2</div>
              <div class="step-content">
                <h3>{{ $t('howToBook.guidedTours.step2.title') }}</h3>
                <p v-if="$t('howToBook.guidedTours.step2.description')">{{ $t('howToBook.guidedTours.step2.description') }}</p>

                <div class="tour-types">
                  <div class="tour-type-card booking-widget-card">
                    <h4>{{ $t('howToBook.guidedTours.step2.onlineBooking.title') }}</h4>
                    <p>{{ $t('howToBook.guidedTours.step2.onlineBooking.description') }}</p>
                    <div class="booking-widget-wrapper">
                      <BookingWidget
                        :button-text="$t('howToBook.guidedTours.step2.onlineBooking.button')"
                        button-class="book-button-bokun"
                      />
                    </div>
                  </div>

                  <div class="tour-type-card direct-card">
                    <div class="card-badge new-badge">{{ $t('howToBook.guidedTours.step2.directTours.badge') }}</div>
                    <h4>{{ $t('howToBook.guidedTours.step2.directTours.title') }}</h4>
                    <p>{{ $t('howToBook.guidedTours.step2.directTours.description') }}</p>
                    <a href="mailto:info@minohcycles.com?subject=Tour Booking Request"
                       class="book-button direct">
                      {{ $t('howToBook.guidedTours.step2.directTours.button') }}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="step">
              <div class="step-number">3</div>
              <div class="step-content">
                <h3>{{ $t('howToBook.guidedTours.step3.title') }}</h3>
                <p v-html="$t('howToBook.guidedTours.step3.description')"></p>
              </div>
            </div>
          </div>
        </div>

        <!-- Cycle Hire Section -->
        <div class="booking-section coming-soon-section">
          <div class="section-header">
            <div class="icon-wrapper">🚲</div>
            <h2>{{ $t('howToBook.cycleHire.title') }}</h2>
          </div>

          <div class="coming-soon-content">
            <p class="coming-soon-text">{{ $t('howToBook.cycleHire.comingSoon') }}</p>
          </div>
        </div>

        <!-- Payments Section -->
        <div class="booking-section">
          <div class="section-header">
            <div class="icon-wrapper">💳</div>
            <h2>{{ $t('howToBook.payments.title') }}</h2>
          </div>

          <div class="payment-info">
            <div class="payment-method">
              <div class="payment-icon">🌐</div>
              <div class="payment-details">
                <h4>{{ $t('howToBook.payments.online.title') }}</h4>
                <p>{{ $t('howToBook.payments.online.description') }}</p>
              </div>
            </div>

            <div class="payment-method">
              <div class="payment-icon">💵</div>
              <div class="payment-details">
                <h4>{{ $t('howToBook.payments.direct.title') }}</h4>
                <p>{{ $t('howToBook.payments.direct.description') }}</p>
                <p class="payment-note">{{ $t('howToBook.payments.direct.note') }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Availability Section -->
        <div class="booking-section">
          <div class="section-header">
            <div class="icon-wrapper">📅</div>
            <h2>{{ $t('howToBook.availability.title') }}</h2>
          </div>

          <div class="availability-info">
            <div class="availability-card">
              <h4>{{ $t('howToBook.availability.online.title') }}</h4>
              <p>{{ $t('howToBook.availability.online.description') }}</p>
            </div>

            <div class="availability-card">
              <h4>{{ $t('howToBook.availability.direct.title') }}</h4>
              <p>{{ $t('howToBook.availability.direct.description') }}</p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSciB9DLiWjZOrWJau70qXlSVRerGiLRzN4PqdSRyXUvjO4OTA/viewform?usp=preview"
                 target="_blank"
                 rel="noopener noreferrer"
                 class="enquiry-button">
                {{ $t('howToBook.availability.direct.button') }}
              </a>
            </div>
          </div>
        </div>

      </div>
    </main>

    <AppFooter>
      <div class="footer-quick-links">
        <div class="container">
          <p class="quick-links-text">{{ $t('howToBook.quickLinks.title') }}:</p>
          <div class="quick-links">
            <router-link to="/tours" class="footer-link">{{ $t('howToBook.quickLinks.viewTours') }}</router-link>
            <span class="separator">•</span>
            <router-link to="/bikes" class="footer-link">{{ $t('howToBook.quickLinks.viewBikes') }}</router-link>
            <span class="separator">•</span>
            <router-link to="/rentals" class="footer-link">{{ $t('howToBook.quickLinks.cycleHire') }}</router-link>
          </div>
        </div>
      </div>
    </AppFooter>
  </div>
</template>

<script>
import { useSeo } from '@/composables/useSeo'
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
import BookingWidget from './BookingWidget.vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'HowToBookPage',
  components: {
    AppHeader,
    AppFooter,
    BookingWidget
  },
  setup() {
    // Apply SEO
    useSeo('howToBook')

    const { t } = useI18n()
    return { t }
  }
}
</script>

<style scoped>
.how-to-book-page {
  font-family: 'Inter', sans-serif;
  color: #333;
  min-height: 100vh;
}

.content-section {
  padding-top: 120px;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-title {
  font-size: 3rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.25rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.booking-section {
  background: white;
  border-radius: 16px;
  padding: 3rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.section-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid #e2e8f0;
}

.icon-wrapper {
  font-size: 2.5rem;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
  border-radius: 16px;
  flex-shrink: 0;
}

.section-header h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
}

/* Step by Step */
.step-by-step {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.step {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.step-number {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  flex-shrink: 0;
}

.step-content {
  flex: 1;
}

.step-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.75rem;
}

.step-content p {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #475569;
  margin-bottom: 1rem;
}

.inline-link {
  color: #2563eb;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;
}

.inline-link:hover {
  color: #1d4ed8;
  text-decoration: underline;
}

/* Tour Type Cards */
.tour-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.tour-type-card {
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  position: relative;
  transition: all 0.3s ease;
}

.tour-type-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px -5px rgba(0, 0, 0, 0.15);
}

.booking-widget-card {
  border-color: #408C3D;
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
}

.booking-widget-wrapper {
  display: flex;
  justify-content: center;
}

.direct-card {
  border-color: #10b981;
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
}

.card-badge {
  position: absolute;
  top: -12px;
  right: 1rem;
  background: #8b5cf6;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
}

.new-badge {
  background: #10b981;
}

.tour-type-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.75rem;
  margin-top: 0.5rem;
}

.tour-type-card p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #475569;
  margin-bottom: 1.25rem;
}

.book-button {
  display: block;
  width: 100%;
  padding: 0.875rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
}

.book-button.direct {
  background-color: #10b981;
  color: white;
}

.book-button.direct:hover {
  background-color: #059669;
  transform: scale(1.02);
}

/* Payment Info */
.payment-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.payment-method {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 12px;
}

.payment-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.payment-details h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.payment-details p {
  font-size: 1rem;
  line-height: 1.7;
  color: #475569;
  margin-bottom: 0.5rem;
}

.payment-note {
  font-size: 0.9rem;
  color: #64748b;
  font-style: italic;
  background: white;
  padding: 0.75rem;
  border-radius: 6px;
  border-left: 3px solid #f59e0b;
  margin-top: 0.75rem;
}

/* Coming Soon Section */
.coming-soon-section {
  background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
  border: 2px dashed #cbd5e1;
}

.coming-soon-content {
  text-align: center;
  padding: 0.5rem;
}

.coming-soon-text {
  font-size: 1.1rem;
  color: #64748b;
  margin-bottom: 0.75rem;
}

/* Availability Info */
.availability-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.availability-card {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
}

.availability-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1rem;
}

.availability-card p {
  font-size: 1rem;
  line-height: 1.7;
  color: #475569;
  margin-bottom: 1.5rem;
}

.enquiry-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #2563eb;
  color: white;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.enquiry-button:hover {
  background-color: #1d4ed8;
  transform: translateY(-2px);
}

/* Footer Quick Links */
.footer-quick-links {
  background-color: #1e293b;
  padding: 2rem 0;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.quick-links-text {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.75rem;
}

.quick-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.footer-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #60a5fa;
  text-decoration: underline;
}

.separator {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 768px) {
  .content-section {
    padding-top: 100px;
  }

  .page-header {
    margin-bottom: 2rem;
  }

  .page-title {
    font-size: 2rem;
  }

  .page-subtitle {
    font-size: 1rem;
  }

  .booking-section {
    padding: 2rem 1.5rem;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .icon-wrapper {
    width: 60px;
    height: 60px;
    font-size: 2rem;
  }

  .section-header h2 {
    font-size: 1.5rem;
  }

  .step {
    flex-direction: column;
    gap: 1rem;
  }

  .step-number {
    width: 40px;
    height: 40px;
    font-size: 1.25rem;
  }

  .step-content h3 {
    font-size: 1.25rem;
  }

  .tour-types {
    grid-template-columns: 1fr;
  }

  .payment-method {
    flex-direction: column;
    gap: 1rem;
  }

  .availability-info {
    grid-template-columns: 1fr;
  }

  .quick-links {
    flex-direction: column;
    gap: 0.75rem;
  }

  .separator {
    display: none;
  }
}
</style>
