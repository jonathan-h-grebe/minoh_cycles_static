<template>
  <div class="insurance-page">
    <AppHeader />

    <section class="insurance-hero-section">
      <div class="insurance-hero-content">
        <h1 class="insurance-title">{{ currentLocale === 'ja' ? '保険について' : 'About Insurance' }}</h1>
        <p class="insurance-subtitle">{{ currentLocale === 'ja' ? 'TSマーク保険による補償' : 'TS Mark Insurance Coverage' }}</p>
      </div>
    </section>

    <!-- Insurance Content Section -->
    <section class="insurance-content-section">
      <div class="container">
        <div class="content-card">
          <p class="intro-text">
            {{ currentLocale === 'ja'
              ? 'すべての自転車はTSマーク保険に加入しています。'
              : 'All our bikes are covered by TS Mark insurance.' }}
          </p>
          <p class="intro-text">
            {{ currentLocale === 'ja'
              ? '万が一の事故の際、ライダーは以下の補償を受けることができます：'
              : 'This means in the unlikely event of an accident, the rider is eligible for:' }}
          </p>

          <div class="coverage-section">
            <h3 class="coverage-title">
              {{ currentLocale === 'ja' ? '賠償責任・損害補償' : 'Liability & Damage Compensation' }}
            </h3>
            <p class="coverage-description">
              {{ currentLocale === 'ja'
                ? '例：ライダーが車との衝突事故に巻き込まれ、車の損害賠償を支払う必要がある場合、TSマーク保険がこの費用を補償します。'
                : 'e.g. if the rider is involved in a collision with a car, and they are required to pay for damages to the car, the TS Mark insurance will cover this cost.' }}
            </p>
          </div>

          <div class="coverage-section">
            <h3 class="coverage-title">
              {{ currentLocale === 'ja' ? '傷害補償' : 'Injury Compensation' }}
            </h3>
            <p class="coverage-description">
              {{ currentLocale === 'ja'
                ? '例：ライダーが重傷を負ったり、入院または死亡した場合、TSマーク保険が補償金を支払います。'
                : 'e.g. if the rider suffers a severe injury, and/or is hospitalized or dies, the TS Mark insurance will pay out compensation.' }}
            </p>
          </div>

          <div class="details-section">
            <p class="details-text">
              {{ currentLocale === 'ja'
                ? '詳細については、TSマークの'
                : 'For further details, please refer to the TS Mark ' }}
              <a
                href="https://www.tmt.or.jp/safety/pdf/English.pdf"
                target="_blank"
                rel="noopener noreferrer"
                class="ts-link"
              >
                {{ currentLocale === 'ja' ? 'ウェブサイト' : 'website' }}
              </a>
              {{ currentLocale === 'ja' ? 'をご参照ください。' : '.' }}
            </p>
          </div>

          <div class="recommendation-section">
            <p class="recommendation-text">
              {{ currentLocale === 'ja'
                ? 'これは妥当なベースのセキュリティを提供しますが、より包括的な補償をお求めの方には、個人保険の購入をお勧めします。'
                : 'This provides a reasonable base of security, but for those looking for more comprehensive coverage, we recommend you purchase your own individual insurance.' }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSeo } from '@/composables/useSeo'
import AppHeader from './AppHeader.vue'

export default {
  name: 'InsurancePage',
  components: {
    AppHeader
  },
  setup() {
    // Apply SEO
    useSeo('insurance')

    const { locale } = useI18n()
    const currentLocale = ref(locale.value)

    return {
      currentLocale
    }
  }
}
</script>

<style scoped>
.insurance-page {
  font-family: 'Inter', sans-serif;
  color: #333;
  min-height: 100vh;
}

.insurance-hero-section {
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 80px;
}

.insurance-hero-content {
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 3rem;
}

.insurance-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.1;
}

.insurance-subtitle {
  font-size: 1.25rem;
  line-height: 1.5;
  opacity: 0.95;
}

.insurance-content-section {
  background-color: #f8fafc;
  padding: 6rem 0;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
}

.content-card {
  background-color: white;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.intro-text {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #475569;
  margin-bottom: 1.5rem;
}

.coverage-section {
  margin: 2.5rem 0;
  padding: 2rem;
  background-color: #f8fafc;
  border-radius: 12px;
  border-left: 4px solid #2563eb;
}

.coverage-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}

.coverage-description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #475569;
}

.details-section {
  margin: 2.5rem 0;
  padding: 2rem;
  background-color: #dbeafe;
  border-radius: 12px;
}

.details-text {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #1e293b;
  margin: 0;
}

.ts-link {
  color: #2563eb;
  text-decoration: underline;
  text-decoration-color: rgba(37, 99, 235, 0.5);
  transition: text-decoration-color 0.3s ease;
  font-weight: 600;
}

.ts-link:hover {
  text-decoration-color: #2563eb;
}

.recommendation-section {
  margin-top: 2.5rem;
  padding: 2rem;
  background-color: #fef3c7;
  border-radius: 12px;
  border-left: 4px solid #f59e0b;
}

.recommendation-text {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #78350f;
  margin: 0;
  font-weight: 500;
}

@media (max-width: 768px) {
  .insurance-title {
    font-size: 2.5rem;
  }

  .insurance-subtitle {
    font-size: 1.1rem;
  }

  .insurance-hero-content {
    padding: 2rem;
  }

  .content-card {
    padding: 2rem;
  }

  .coverage-section,
  .details-section,
  .recommendation-section {
    padding: 1.5rem;
  }

  .intro-text,
  .coverage-description,
  .details-text,
  .recommendation-text {
    font-size: 1rem;
  }

  .coverage-title {
    font-size: 1.25rem;
  }
}
</style>
