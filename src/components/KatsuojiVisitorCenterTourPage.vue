<template>
  <div class="tours-page">
    <AppHeader />

    <section class="tours-hero-section">
      <div class="tours-hero-content">
        <h1 class="tours-title">{{ currentLocale === 'ja' ? '勝尾寺とビジターセンターツアー' : 'Katsuoji Temple & Visitor Center Tour' }}</h1>
        <p class="tours-subtitle">{{ currentLocale === 'ja' ? '半日Eバイクツアー' : 'Half-Day E-Bike Tour' }}</p>
        <p class="tours-description">{{ currentLocale === 'ja' ? '箕面の山々を探索し、美しい勝尾寺を訪れ、箕面ビジターセンターで自然について学びます。' : 'Explore the mountains of Minoh, visit the beautiful Katsuoji Temple, and learn about nature at the Minoh Visitor Center.' }}</p>
      </div>
    </section>

    <!-- Itinerary Section -->
    <section class="itinerary-section">
      <div class="container">
        <h2 class="section-title">{{ currentLocale === 'ja' ? '旅程' : 'Itinerary' }}</h2>

        <!-- Step 1: Orientation -->
        <div class="itinerary-step">
          <div class="step-content">
            <div class="step-number">1</div>
            <div class="step-details">
              <h3 class="step-title">{{ currentLocale === 'ja' ? 'オリエンテーション' : 'Orientation' }} <span class="duration">({{ currentLocale === 'ja' ? '15分' : '15 mins' }})</span></h3>
              <p class="step-description">{{ currentLocale === 'ja' ? '桜井駅近くのMinoh Cyclesで集合。Eバイクに慣れ、安全に関する説明を受け、今日のルートについて学びます。' : 'Meet at Minoh Cycles near Sakurai Station. Get fitted to your e-bike, receive a safety briefing, and learn about today\'s route.' }}</p>
            </div>
          </div>
          <div class="step-image">
            <img src="/assets/fitting_rider_to_trek_bike.jpg" alt="Bike fitting and orientation" class="step-img">
          </div>
        </div>

        <!-- Step 2: Ride to Katsuoji -->
        <div class="itinerary-step reverse">
          <div class="step-image">
            <img src="/assets/riding_bikes_on_mountain_road.jpg" alt="Riding to Katsuoji Temple" class="step-img">
          </div>
          <div class="step-content">
            <div class="step-number">2</div>
            <div class="step-details">
              <h3 class="step-title">{{ currentLocale === 'ja' ? '勝尾寺へライド' : 'Ride to Katsuoji Temple' }} <span class="duration">({{ currentLocale === 'ja' ? '45分' : '45 mins' }})</span></h3>
              <p class="step-description">{{ currentLocale === 'ja' ? '美しい景色の山道を登り、紅葉の山々を通り抜け、歴史的な勝尾寺に到着します。' : 'Climb scenic mountain roads, wind through forested mountainsides, and arrive at the historic Katsuoji Temple.' }}</p>
            </div>
          </div>
        </div>

        <!-- Step 3: Experience Katsuoji -->
        <div class="itinerary-step">
          <div class="step-content">
            <div class="step-number">3</div>
            <div class="step-details">
              <h3 class="step-title">{{ currentLocale === 'ja' ? '勝尾寺を体験' : 'Experience Katsuoji Temple' }} <span class="duration">({{ currentLocale === 'ja' ? '1時間15分' : '1hr 15mins' }})</span></h3>
              <p class="step-description">{{ currentLocale === 'ja' ? '象徴的なだるまで有名な美しい寺院の境内を散策し、庭園を眺め、この神聖な場所の歴史と文化について学びます。' : 'Wander through the beautiful temple grounds famous for their iconic daruma dolls, admire the gardens, and learn about the history and culture of this sacred place.' }}</p>
            </div>
          </div>
          <div class="step-image">
            <img src="/assets/view_of_pond_at_katsuoji.jpg" alt="Katsuoji Temple" class="step-img">
          </div>
        </div>

        <!-- Step 4: Continue to Visitor Center -->
        <div class="itinerary-step reverse">
          <div class="step-image">
            <img src="/assets/going_down_from_katsuoji.jpg" alt="E-bike journey through mountains" class="step-img">
          </div>
          <div class="step-content">
            <div class="step-number">4</div>
            <div class="step-details">
              <h3 class="step-title">{{ currentLocale === 'ja' ? 'ビジターセンターへ続く' : 'Continue to Visitor Center' }} <span class="duration">({{ currentLocale === 'ja' ? '15分' : '15 mins' }})</span></h3>
              <p class="step-description">{{ currentLocale === 'ja' ? '美しい山道を下り、箕面国定公園ビジターセンターへ向かいます。' : 'Descend through beautiful mountain roads towards the Minoh Quasi-National Park Visitor Center.' }}</p>
            </div>
          </div>
        </div>

        <!-- Step 5: Explore Visitor Center -->
        <div class="itinerary-step">
          <div class="step-content">
            <div class="step-number">5</div>
            <div class="step-details">
              <h3 class="step-title">{{ currentLocale === 'ja' ? 'ビジターセンターを探索' : 'Explore Visitor Center' }} <span class="duration">({{ currentLocale === 'ja' ? '20分' : '20 mins' }})</span></h3>
              <p class="step-description">{{ currentLocale === 'ja' ? 'ビジターセンターで箕面の自然、野生動物、生態系について学び、周辺エリアを散策します。' : 'Learn about Minoh\'s nature, wildlife, and ecosystems at the visitor center and explore the surrounding area.' }}</p>
            </div>
          </div>
          <div class="step-image">
            <img src="/assets/minoh_visitor_center_outside.jpg" alt="Minoh Visitor Center" class="step-img">
          </div>
        </div>

        <!-- Step 6: Return to Minoh Cycles HQ -->
        <div class="itinerary-step reverse">
          <div class="step-image">
            <img src="/assets/group_picture_with_view.jpg" alt="Group enjoying mountain views" class="step-img">
          </div>
          <div class="step-content">
            <div class="step-number">6</div>
            <div class="step-details">
              <h3 class="step-title">{{ currentLocale === 'ja' ? 'Minoh Cycles本社に戻る' : 'Return to Minoh Cycles HQ' }} <span class="duration">({{ currentLocale === 'ja' ? '30分' : '30 mins' }})</span></h3>
              <p class="step-description">{{ currentLocale === 'ja' ? 'Minoh Cycles本社に戻り、Eバイクを返却します。そこから桜井駅まで徒歩10分です。素晴らしい1日をお楽しみください！' : 'Ride back to Minoh Cycles HQ and return your e-bike. From there it\'s a 10 minute walk to Sakurai Station. Thank you for a wonderful day!' }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What to Bring Section -->
    <section class="preparation-section">
      <div class="container">
        <div class="preparation-grid">
          <div class="preparation-card">
            <h3 class="preparation-title">{{ currentLocale === 'ja' ? '持ち物' : 'What to Bring' }}</h3>
            <ul class="preparation-list">
              <li>{{ currentLocale === 'ja' ? '運動しやすい服装' : 'Comfortable exercise clothes' }}</li>
              <li>{{ currentLocale === 'ja' ? '水' : 'Water' }} <span class="note">*{{ currentLocale === 'ja' ? 'ウォーターボトルは提供されます' : 'water bottle provided' }}</span></li>
              <li>{{ currentLocale === 'ja' ? '日焼け止め' : 'Sunscreen' }}</li>
              <li>{{ currentLocale === 'ja' ? 'バックパック（オプション）' : 'Backpack (optional)' }}</li>
              <li>{{ currentLocale === 'ja' ? '現金' : 'Money' }} <span class="note">- {{ currentLocale === 'ja' ? '飲食や買い物用' : 'for food and shopping' }}</span></li>
            </ul>
          </div>

          <div class="preparation-card">
            <h3 class="preparation-title">{{ currentLocale === 'ja' ? 'ツアーに含まれるもの' : 'What\'s Included' }}</h3>
            <ul class="preparation-list included">
              <li>{{ currentLocale === 'ja' ? 'プレミアムEバイクレンタル' : 'Premium e-bike rental' }}</li>
              <li>{{ currentLocale === 'ja' ? 'TSマーク保険' : 'TS Mark insurance' }}</li>
              <li>{{ currentLocale === 'ja' ? 'ヘルメット' : 'Helmet' }}</li>
              <li>{{ currentLocale === 'ja' ? 'ウォーターボトル' : 'Water bottle' }}</li>
              <li>{{ currentLocale === 'ja' ? 'スナック' : 'Snack' }}</li>
              <li>{{ currentLocale === 'ja' ? '勝尾寺の入場料' : 'Katsuoji Temple entrance fee' }}</li>
              <li>{{ currentLocale === 'ja' ? 'ガイド' : 'Guide' }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>{{ currentLocale === 'ja' ? '今すぐ予約' : 'Book Your Tour Today' }}</h2>
        <p>{{ currentLocale === 'ja' ? 'このユニークなEバイク体験を予約して、箕面の美しさを発見しましょう。' : 'Reserve your spot on this unique e-bike experience and discover the beauty of Minoh.' }}</p>
        <p class="schedule-info">{{ currentLocale === 'ja' ? '近日公開' : 'Coming Soon' }}</p>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import AppHeader from './AppHeader.vue'

export default {
  name: 'KatsuojiVisitorCenterTourPage',
  components: {
    AppHeader
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
.tours-page {
  font-family: 'Inter', sans-serif;
  color: #333;
  min-height: 100vh;
}

.tours-hero-section {
  background-image: url('/assets/view_of_pond_at_katsuoji.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 80px;
}

.tours-hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.tours-hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  color: white;
  max-width: 600px;
  padding: 3rem;
}

.tours-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.1;
}

.tours-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  line-height: 1.5;
  margin-bottom: 2rem;
}

.tours-description {
  font-size: 1.1rem;
  opacity: 0.8;
  line-height: 1.6;
}

.itinerary-section {
  background-color: #f8fafc;
  padding: 6rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 4rem;
  color: #1e293b;
  text-align: center;
}

/* Itinerary Steps */
.itinerary-step {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;
  background-color: white;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.itinerary-step.reverse {
  direction: rtl;
}

.itinerary-step.reverse > * {
  direction: ltr;
}

.step-content {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
}

.step-number {
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: white;
  font-size: 1.5rem;
  font-weight: 800;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 8px rgba(37, 99, 235, 0.3);
}

.step-details {
  flex: 1;
}

.step-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}

.duration {
  color: #10b981;
  font-weight: 600;
  font-size: 1rem;
}

.step-description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #475569;
}

.step-image {
  position: relative;
}

.step-img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.step-img:hover {
  transform: scale(1.02);
}

/* Preparation Section */
.preparation-section {
  background-color: white;
  padding: 6rem 0;
}

.preparation-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1000px;
  margin: 0 auto;
}

.preparation-card {
  background-color: #f8fafc;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.preparation-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 2rem;
  text-align: center;
}

.preparation-list {
  list-style: none;
  padding: 0;
}

.preparation-list li {
  padding: 0.75rem 0;
  border-bottom: 1px solid #e2e8f0;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #475569;
  position: relative;
  padding-left: 2rem;
}

.preparation-list li:before {
  content: "•";
  color: #2563eb;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.preparation-list.included li:before {
  content: "✓";
  color: #10b981;
}

.preparation-list li:last-child {
  border-bottom: none;
}

.note {
  font-size: 0.9rem;
  color: #64748b;
  font-style: italic;
}

/* CTA Section */
.cta-section {
  background-color: #1e293b;
  color: white;
  padding: 6rem 0;
  text-align: center;
}

.cta-section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.schedule-info {
  background-color: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 2rem !important;
  display: inline-block;
  color: #60a5fa;
}

@media (max-width: 768px) {
  .tours-title {
    font-size: 2rem;
  }

  .tours-hero-content {
    padding: 2rem;
    margin: 1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .itinerary-step,
  .itinerary-step.reverse {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem;
    direction: ltr;
  }

  .step-content {
    flex-direction: column;
    text-align: center;
  }

  .step-number {
    align-self: center;
  }

  .step-img {
    height: 250px;
  }

  .preparation-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .preparation-card {
    padding: 2rem;
  }

  .cta-section h2 {
    font-size: 1.75rem;
  }
}
</style>
