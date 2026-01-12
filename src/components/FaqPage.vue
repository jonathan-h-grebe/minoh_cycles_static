<template>
  <div class="faq-page">
    <AppHeader />
    <header class="faq-header">
      <h1>{{ $t('faq.title') }}</h1>
    </header>

    <div class="faq-container">
      <div class="faq-item">
        <h3 class="question">{{ $t('faq.q1.question') }}</h3>
        <p class="answer">{{ $t('faq.q1.answer') }}</p>
      </div>

      <div class="faq-item">
        <h3 class="question">{{ $t('faq.q2.question') }}</h3>
        <p class="answer">{{ $t('faq.q2.answer') }}</p>
      </div>

      <div class="faq-item">
        <h3 class="question">{{ $t('faq.q3.question') }}</h3>
        <p class="answer">{{ $t('faq.q3.answer') }}</p>
      </div>

      <div class="faq-item">
        <h3 class="question">{{ $t('faq.q4.question') }}</h3>
        <p class="answer">{{ $t('faq.q4.answer') }}</p>
      </div>

      <div class="faq-item">
        <h3 class="question">{{ $t('faq.q5.question') }}</h3>
        <p class="answer">{{ $t('faq.q5.answer') }}</p>
      </div>

      <div class="faq-item">
        <h3 class="question">{{ $t('faq.q6.question') }}</h3>
        <p class="answer">{{ $t('faq.q6.answer') }}</p>
      </div>

      <div class="faq-item">
        <h3 class="question">{{ $t('faq.q7.question') }}</h3>
        <p class="answer">{{ $t('faq.q7.answer') }}</p>
      </div>

      <div class="faq-item">
        <h3 class="question">{{ $t('faq.q8.question') }}</h3>
        <p class="answer">{{ $t('faq.q8.answer') }}</p>
      </div>

      <div class="faq-item">
        <h3 class="question">{{ $t('faq.q9.question') }}</h3>
        <p class="answer">{{ $t('faq.q9.answer') }}</p>
      </div>

      <div class="faq-item">
        <h3 class="question">{{ $t('faq.q10.question') }}</h3>
        <i18n-t keypath="faq.q10.answer" tag="p" class="answer">
          <template #link>
            <router-link :to="`/${currentLocale}/insurance`" class="insurance-link">{{ $t('faq.q10.linkText') }}</router-link>
          </template>
        </i18n-t>
      </div>

      <div class="faq-item">
        <h3 class="question">{{ $t('faq.q11.question') }}</h3>
        <p class="answer">{{ $t('faq.q11.answer') }}</p>
      </div>

      <div class="faq-item">
        <h3 class="question">{{ $t('faq.q12.question') }}</h3>
        <p class="answer">{{ $t('faq.q12.answer') }}</p>
        <ul class="answer-list">
          <li v-for="(item, index) in $tm('faq.q12.items')" :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'

export default {
  name: 'FaqPage',
  components: {
    AppHeader,
    AppFooter
  },
  computed: {
    currentLocale() {
      return this.$i18n.locale
    }
  }
}
</script>

<style scoped>
.faq-page {
  min-height: 100vh;
  background-color: #f8fafc;
  padding-top: 80px;
}

.faq-header {
  background-color: #1e293b;
  color: white;
  padding: 3rem 2rem;
  text-align: center;
}

.faq-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
}

.faq-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.faq-item {
  background-color: white;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.faq-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 12px -2px rgba(0, 0, 0, 0.15);
}

.question {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.answer {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #475569;
  margin: 0;
}

.insurance-link {
  color: #2563eb;
  text-decoration: underline;
  transition: color 0.2s ease;
}

.insurance-link:hover {
  color: #1d4ed8;
}

.answer-list {
  margin-top: 1rem;
  padding-left: 1.5rem;
  list-style-type: disc;
}

.answer-list li {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #475569;
  margin-bottom: 1rem;
}

.answer-list li:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .faq-header h1 {
    font-size: 1.75rem;
  }

  .faq-container {
    padding: 2rem 1rem;
  }

  .faq-item {
    padding: 1.5rem;
  }

  .question {
    font-size: 1.1rem;
  }

  .answer {
    font-size: 0.95rem;
  }

  .answer-list li {
    font-size: 0.95rem;
  }
}
</style>
