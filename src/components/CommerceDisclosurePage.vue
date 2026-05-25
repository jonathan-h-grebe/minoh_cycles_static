<template>
  <div class="disclosure-page">
    <AppHeader />

    <section class="disclosure-hero-section">
      <div class="disclosure-hero-content">
        <h1 class="disclosure-title">
          {{ currentLocale === 'ja' ? '特定商取引法に基づく表記' : 'Commerce Disclosure' }}
        </h1>
        <p class="disclosure-subtitle">
          {{ currentLocale === 'ja'
            ? '特定商取引法第11条に基づく表示'
            : 'Notation Based on the Act on Specified Commercial Transactions' }}
        </p>
      </div>
    </section>

    <section class="disclosure-content-section">
      <div class="container">
        <div class="content-card">
          <table class="disclosure-table">
            <tbody>
              <tr>
                <th>{{ currentLocale === 'ja' ? '販売業者' : 'Business Operator' }}</th>
                <td>Minoh Cycle Tours合同会社</td>
              </tr>
              <tr>
                <th>{{ currentLocale === 'ja' ? '運営責任者' : 'Head of Operations' }}</th>
                <td>Jonathan Hill</td>
              </tr>
              <tr>
                <th>{{ currentLocale === 'ja' ? '所在地' : 'Address' }}</th>
                <td>桜ハイム 102, 5 Chome-18-7 Sakura, Minoh, Osaka 562-0041</td>
              </tr>
              <tr>
                <th>{{ currentLocale === 'ja' ? '電話番号' : 'Phone Number' }}</th>
                <td>080-9974-6397</td>
              </tr>
              <tr>
                <th>{{ currentLocale === 'ja' ? 'メールアドレス' : 'Email Address' }}</th>
                <td><a href="mailto:minohcycles@gmail.com" class="email-link">minohcycles@gmail.com</a></td>
              </tr>
              <tr>
                <th>{{ currentLocale === 'ja' ? '販売価格' : 'Price' }}</th>
                <td>
                  {{ currentLocale === 'ja'
                    ? '各商品ページに記載の金額'
                    : 'Amounts listed on each product page' }}
                </td>
              </tr>
              <tr>
                <th>{{ currentLocale === 'ja' ? '追加費用' : 'Additional Fees' }}</th>
                <td>{{ currentLocale === 'ja' ? 'なし' : 'None' }}</td>
              </tr>
              <tr>
                <th>{{ currentLocale === 'ja' ? '支払方法' : 'Payment Methods' }}</th>
                <td>
                  {{ currentLocale === 'ja'
                    ? 'Stripeによるクレジットカード決済'
                    : 'Credit card payment via Stripe' }}
                </td>
              </tr>
              <tr>
                <th>{{ currentLocale === 'ja' ? '支払時期' : 'Payment Timing' }}</th>
                <td>
                  {{ currentLocale === 'ja'
                    ? 'クレジットカード決済は即時処理されます'
                    : 'Credit card payments are processed immediately' }}
                </td>
              </tr>
              <tr>
                <th>{{ currentLocale === 'ja' ? '役務の提供時期' : 'Service Delivery' }}</th>
                <td>
                  {{ currentLocale === 'ja'
                    ? 'お客様がご予約時に選択した日時にサービスを提供します'
                    : 'The service will be provided on the date and time selected by the customer at the time of booking' }}
                </td>
              </tr>
              <tr>
                <th>{{ currentLocale === 'ja' ? 'キャンセル・返金について' : 'Cancellations & Refunds' }}</th>
                <td>
                  <template v-if="currentLocale === 'ja'">
                    ツアー開始の24時間前までに <a href="mailto:minohcycles@gmail.com" class="email-link">minohcycles@gmail.com</a> までご連絡いただければ、全額返金いたします。悪天候または危険な状況とMinoh Cycle Toursが判断した場合は、プロバイダー側よりキャンセルし、全額返金いたします。
                  </template>
                  <template v-else>
                    Customers can cancel and receive a full refund up to 24 hours before the tour starts by emailing minohcycles@gmail.com. If severe or dangerous weather occurs, Minoh Cycle Tours reserves the right to cancel the tour and issue a full refund.
                  </template>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'

export default {
  name: 'CommerceDisclosurePage',
  components: {
    AppHeader,
    AppFooter
  },
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
.disclosure-page {
  font-family: 'Inter', sans-serif;
  color: #333;
  min-height: 100vh;
}

.disclosure-hero-section {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  min-height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
}

.disclosure-hero-content {
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 3rem;
}

.disclosure-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.1;
}

.disclosure-subtitle {
  font-size: 1.1rem;
  line-height: 1.5;
  opacity: 0.8;
}

.disclosure-content-section {
  background-color: #f8fafc;
  padding: 5rem 0;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
}

.content-card {
  background-color: white;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.disclosure-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;
}

.disclosure-table th,
.disclosure-table td {
  padding: 1.1rem 1.25rem;
  text-align: left;
  vertical-align: top;
  border-bottom: 1px solid #e2e8f0;
  line-height: 1.7;
}

.disclosure-table tr:last-child th,
.disclosure-table tr:last-child td {
  border-bottom: none;
}

.disclosure-table th {
  width: 35%;
  font-weight: 600;
  color: #1e293b;
  background-color: #f8fafc;
  white-space: nowrap;
}

.disclosure-table td {
  color: #475569;
}

.email-link {
  color: #2563eb;
  text-decoration: underline;
  text-decoration-color: rgba(37, 99, 235, 0.4);
  transition: text-decoration-color 0.2s ease;
}

.email-link:hover {
  text-decoration-color: #2563eb;
}

@media (max-width: 768px) {
  .disclosure-title {
    font-size: 2rem;
  }

  .disclosure-hero-content {
    padding: 2rem;
  }

  .content-card {
    padding: 1.5rem 1rem;
  }

  .disclosure-table th,
  .disclosure-table td {
    display: block;
    width: 100%;
    padding: 0.75rem 0.5rem;
  }

  .disclosure-table th {
    border-bottom: none;
    padding-bottom: 0.25rem;
    font-size: 0.85rem;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    white-space: normal;
  }

  .disclosure-table tr {
    display: block;
    border-bottom: 1px solid #e2e8f0;
    padding: 0.75rem 0;
  }

  .disclosure-table tr:last-child {
    border-bottom: none;
  }

  .disclosure-table tr:last-child th,
  .disclosure-table tr:last-child td {
    border-bottom: none;
  }
}
</style>
