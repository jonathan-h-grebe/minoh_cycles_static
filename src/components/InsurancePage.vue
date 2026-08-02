<template>
  <div class="insurance-page">
    <AppHeader />

    <section class="insurance-hero-section">
      <div class="insurance-hero-content">
        <h1 class="insurance-title">{{ currentLocale === 'ja' ? '保険について' : 'About Insurance' }}</h1>
        <p class="insurance-subtitle">{{ currentLocale === 'ja' ? '賠償責任保険による補償' : 'Liability Insurance Coverage' }}</p>
      </div>
    </section>

    <!-- Insurance Content Section -->
    <section class="insurance-content-section">
      <div class="container">
        <div class="content-card">
          <p class="intro-text">
            {{ currentLocale === 'ja'
              ? '皆守サイクルツアーズは、お客様と第三者の双方を守るため、包括的な賠償責任保険に加入しています。'
              : 'Minoh Cycle Tours carries comprehensive liability insurance to protect both you and third parties during your tour.' }}
          </p>
          <p class="intro-text">
            {{ currentLocale === 'ja'
              ? 'この保険は、以下のようなケースを補償します：'
              : 'This insurance covers the following cases:' }}
          </p>

          <div class="coverage-section">
            <h3 class="coverage-title">
              {{ currentLocale === 'ja' ? '第三者賠償責任' : '3rd-Party Liability' }}
            </h3>
            <p class="coverage-description">
              {{ currentLocale === 'ja'
                ? '例：お客様が自動車や歩行者など第三者との事故に巻き込まれ、相手への損害賠償責任を負った場合、この保険が費用を補償します。'
                : 'e.g. if you are involved in an accident with a car, pedestrian, or other third party, and are found liable for their injuries or damages, this insurance covers the cost.' }}
            </p>
          </div>

          <div class="coverage-section">
            <h3 class="coverage-title">
              {{ currentLocale === 'ja' ? '事業者賠償責任' : 'Business Liability' }}
            </h3>
            <p class="coverage-description">
              {{ currentLocale === 'ja'
                ? '例：当社（皆守サイクルツアーズ）の過失、ミス、または機材の不具合が原因でお客様が負傷または損害を被った場合、この保険が費用を補償します。'
                : 'e.g. if you are injured or suffer damages due to negligence, a mistake, or equipment failure on the part of Minoh Cycle Tours, this insurance covers the cost.' }}
            </p>
          </div>

          <div class="recommendation-section">
            <p class="recommendation-text">
              {{ currentLocale === 'ja'
                ? '重要：当社に過失がない事故（例えば、お客様ご自身の操作ミスなどにより転倒した場合など）で生じた、お客様ご自身の怪我や損害については、この保険の対象外です。ツアー前に、ご自身の傷害保険・旅行保険へのご加入を強くお勧めします。'
                : 'Important: This insurance does not cover your own personal injury or damages arising from an accident that is not the fault of Minoh Cycle Tours — for example, if you lose control of the bike through no negligence on our part. We strongly recommend arranging your own personal accident or travel insurance before your tour.' }}
            </p>
          </div>

          <div class="details-section">
            <p class="details-text">
              {{ currentLocale === 'ja'
                ? '加えて、当店の自転車は日本のTSマーク自転車保険制度にも登録されており、第三者への賠償については追加の補償があります。ただし、ご本人の傷害に対する補償は限定的で、重傷等の深刻なケースにのみ支払われます。詳細については、TSマークの'
                : 'In addition, our bikes are also registered under Japan\'s TS-Mark bicycle insurance scheme, which provides additional 3rd-party liability coverage. The TS Mark insurance also includes limited personal injury coverage, however this only pays out in the most severe cases. For more details, please refer to the TS Mark ' }}
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
