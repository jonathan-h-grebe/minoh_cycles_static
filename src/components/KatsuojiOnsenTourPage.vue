<template>
  <div class="tours-page">
    <AppHeader />

    <section class="tours-hero-section">
      <div class="tours-hero-content">
        <h1 class="tours-title">{{ currentLocale === 'ja' ? '勝尾寺・温泉ツアー' : 'Katsuoji & Onsen Tour' }}</h1>
        <p class="tours-subtitle">{{ currentLocale === 'ja' ? '半日Eバイクツアー' : 'Half-Day E-Bike Tour' }}</p>
        <p class="tours-description">{{ currentLocale === 'ja' ? '勝尾寺まで自転車で登り、大阪を一望できる山の温泉でのんびりとリフレッシュしてください。' : 'Cycle up to Katsuoji Temple through mountain forests, then unwind with a soak at a traditional mountain onsen boasting sweeping panoramic views over Osaka.' }}</p>
        <p class="tours-availability">{{ currentLocale === 'ja' ? '月・水・木曜日のみ開催' : 'Available on Mondays, Wednesdays and Thursdays' }}</p>
        <p class="tours-tattoo-notice">{{ currentLocale === 'ja' ? '※ タトゥーのある方はご利用いただけません' : 'Not suitable for guests with tattoos' }}</p>

        <div class="tour-pricing-hero">
          <span class="price-main-hero">¥14,000</span>
          <div class="price-options">
            <span class="price-option">{{ currentLocale === 'ja' ? '桜井ランチ付き: ¥16,000' : 'With Sakurai lunch: ¥16,000' }}</span>
            <span class="price-option">{{ currentLocale === 'ja' ? '山荘風の森ランチ付き: ¥25,000' : 'With Sanso Kaze No Mori luxury lunch: ¥25,000' }}</span>
          </div>
        </div>

        <div class="hero-book-button-wrapper">
          <BookingWidget
            widget-id="bokun_a923d9f3_9b21_4fcf_ad98_04dc0393f4b0"
            experience-id="1215355"
            :button-text="currentLocale === 'ja' ? '今すぐ予約' : 'Book Now'"
          />
        </div>
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
              <p class="step-description">{{ currentLocale === 'ja' ? '桜井駅近くのMinoh Cycle Toursで集合。Eバイクに慣れ、安全に関する説明を受け、今日のルートについて学びます。' : 'Meet at Minoh Cycle Tours near Sakurai Station. Get fitted to your e-bike, receive a safety briefing, and learn about today\'s route.' }}</p>
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
              <p class="step-description">{{ currentLocale === 'ja' ? '美しい景色の山道を登り、森林に覆われた山々を通り抜け、歴史的な勝尾寺に到着します。' : 'Climb scenic mountain roads, wind through forested mountainsides, and arrive at the historic Katsuoji Temple.' }}</p>
            </div>
          </div>
        </div>

        <!-- Step 3: Experience Katsuoji -->
        <div class="itinerary-step">
          <div class="step-content">
            <div class="step-number">3</div>
            <div class="step-details">
              <h3 class="step-title">{{ currentLocale === 'ja' ? '勝尾寺を体験' : 'Experience Katsuoji Temple' }} <span class="duration">({{ currentLocale === 'ja' ? '1時間' : '1 hour' }})</span></h3>
              <p class="step-description">{{ currentLocale === 'ja' ? '象徴的なだるまで有名な美しい寺院の境内を散策し、庭園を眺め、この神聖な場所の歴史と文化について学びます。' : 'Wander through the beautiful temple grounds famous for their iconic daruma dolls, admire the gardens, and learn about the history and culture of this sacred place.' }}</p>
            </div>
          </div>
          <div class="step-image">
            <img src="/assets/view_of_pond_at_katsuoji.jpg" alt="Katsuoji Temple" class="step-img">
          </div>
        </div>

        <!-- Step 4: Ride to Onsen -->
        <div class="itinerary-step reverse">
          <div class="step-image">
            <img src="/assets/going_down_from_katsuoji.jpg" alt="Descending from Katsuoji" class="step-img">
          </div>
          <div class="step-content">
            <div class="step-number">4</div>
            <div class="step-details">
              <h3 class="step-title">{{ currentLocale === 'ja' ? '温泉へライド' : 'Ride to the Onsen' }} <span class="duration">({{ currentLocale === 'ja' ? '20分' : '20 mins' }})</span></h3>
              <p class="step-description">{{ currentLocale === 'ja' ? '山道を下り、大阪を一望する絶好のロケーションにある温泉へ向かいます。' : 'Descend through the mountain roads towards the onsen, taking in sweeping views over Osaka along the way.' }}</p>
            </div>
          </div>
        </div>

        <!-- Step 5: Soak at the Onsen -->
        <div class="itinerary-step">
          <div class="step-content">
            <div class="step-number">5</div>
            <div class="step-details">
              <h3 class="step-title">{{ currentLocale === 'ja' ? '温泉でリラックス' : 'Relax at the Onsen' }} <span class="duration">({{ currentLocale === 'ja' ? '45分〜' : '45 mins+' }})</span></h3>
              <p class="step-description">{{ currentLocale === 'ja' ? '大阪の絶景を望む露天風呂でサイクリングの疲れを癒してください。ランチオプションをご希望の方は、桜井の地元レストランか、山荘風の森での豪華な懐石料理をお楽しみいただけます。' : 'Soak away the ride in the outdoor bath with panoramic views over Osaka. Those who have opted for lunch can enjoy a meal at a local Sakurai restaurant or a luxury kaiseki course at Sanso Kaze No Mori.' }}</p>
            </div>
          </div>
          <div class="step-image">
            <img src="/assets/outdoor_bath_1.webp" alt="Outdoor onsen bath with Osaka views" class="step-img">
          </div>
        </div>

        <!-- Branch point -->
        <div class="branch-header">
          <div class="branch-divider"></div>
          <span class="branch-label">{{ currentLocale === 'ja' ? 'ここからコースをお選びください' : 'Choose how to end your tour' }}</span>
          <div class="branch-divider"></div>
        </div>

        <div class="itinerary-branches">
          <!-- Branch A -->
          <div class="branch">
            <div class="branch-title branch-title--a">{{ currentLocale === 'ja' ? 'Aコース：桜井ランチ（オプション）' : 'Option A: Without hotel lunch' }}</div>

            <div class="itinerary-step branch-step">
              <div class="step-content">
                <div class="step-number step-number--a">6</div>
                <div class="step-details">
                  <h3 class="step-title">{{ currentLocale === 'ja' ? 'Minoh Cycle Toursに戻る' : 'Return to Minoh Cycle Tours HQ' }} <span class="duration">({{ currentLocale === 'ja' ? '20分' : '20 mins' }})</span></h3>
                  <p class="step-description">{{ currentLocale === 'ja' ? 'Minoh Cycle Tours本社に戻り、Eバイクを返却します。そこから桜井駅まで徒歩10分です。' : 'Ride back to Minoh Cycle Tours HQ and return your e-bike. From there it\'s a 10 minute walk to Sakurai Station.' }}</p>
                </div>
              </div>
              <div class="step-image">
                <img src="/assets/group_picture_with_view.jpg" alt="Return to Minoh Cycle Tours HQ" class="step-img">
              </div>
            </div>

            <div class="itinerary-step branch-step">
              <div class="step-content">
                <div class="step-number step-number--a">7</div>
                <div class="step-details">
                  <h3 class="step-title">{{ currentLocale === 'ja' ? '【オプション】桜井で昼食' : 'Lunch at Local Restaurant (Optional)' }}</h3>
                  <p class="step-description">{{ currentLocale === 'ja' ? '地元の人気レストランで美味しい昼食をお楽しみください。ツアーガイドが地域の人気スポットへご案内します。' : 'At a local restaurant specially chosen by the guide. Preferences and dietary requirements will be taken into account.' }}</p>
                </div>
              </div>
              <div class="step-image">
                <img src="/assets/lunch_combo.png" alt="Lunch at local restaurant" class="step-img">
              </div>
            </div>
          </div>

          <!-- Branch B -->
          <div class="branch">
            <div class="branch-title branch-title--b">{{ currentLocale === 'ja' ? 'Bコース：山荘風の森でのランチ' : 'Option B: Luxury lunch at the hotel' }}</div>

            <div class="itinerary-step branch-step">
              <div class="step-content">
                <div class="step-number step-number--b">6</div>
                <div class="step-details">
                  <h3 class="step-title">{{ currentLocale === 'ja' ? '山荘風の森で豪華ランチ' : 'Luxury Lunch at Sanso Kaze No Mori' }}</h3>
                  <p class="step-description">{{ currentLocale === 'ja' ? '温泉ホテル・山荘風の森にて、絶景を眺めながら本格的な懐石料理をお楽しみください。' : 'Stay on at the onsen hotel for a full luxury kaiseki lunch course, enjoying the panoramic views over Osaka in comfort.' }}</p>
                </div>
              </div>
              <div class="step-image">
                <img src="/assets/yawaragi_lunch_set.png" alt="Luxury kaiseki lunch at Sanso Kaze No Mori" class="step-img">
              </div>
            </div>

            <div class="itinerary-step branch-step">
              <div class="step-content">
                <div class="step-number step-number--b">7</div>
                <div class="step-details">
                  <h3 class="step-title">{{ currentLocale === 'ja' ? 'Minoh Cycle Tours本社に戻る' : 'Return to Minoh Cycle Tours HQ' }} <span class="duration">({{ currentLocale === 'ja' ? '20分' : '20 mins' }})</span></h3>
                  <p class="step-description">{{ currentLocale === 'ja' ? 'Minoh Cycle Tours本社に戻り、Eバイクを返却します。そこから桜井駅まで徒歩10分です。' : 'Ride back to Minoh Cycle Tours HQ and return your e-bike. From there it\'s a 10 minute walk to Sakurai Station.' }}</p>
                </div>
              </div>
              <div class="step-image">
                <img src="/assets/riders_together.jpg" alt="Return to Minoh Cycle Tours HQ" class="step-img">
              </div>
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
              <li>{{ currentLocale === 'ja' ? '水' : 'Water' }} <span class="note">*{{ currentLocale === 'ja' ? '1本のペットボトルが提供されますが、追加の水をお持ちいただくか、現地で購入されることをお勧めします' : 'A 600ml bottle is provided per bike, but you may want to bring or buy more' }}</span></li>
              <li>{{ currentLocale === 'ja' ? '日焼け止め' : 'Sunscreen' }}</li>
              <li>{{ currentLocale === 'ja' ? 'バックパック' : 'Backpack' }}</li>
              <li>{{ currentLocale === 'ja' ? '現金' : 'Money' }} <span class="note">- {{ currentLocale === 'ja' ? '飲食や買い物用' : 'for food and shopping' }}</span></li>
              <li>{{ currentLocale === 'ja' ? 'タオル（温泉用）' : 'Towel (for the onsen)' }} <span class="note">*{{ currentLocale === 'ja' ? 'レンタル可能' : 'available to rent on-site' }}</span></li>
            </ul>
          </div>

          <div class="preparation-card">
            <h3 class="preparation-title">{{ currentLocale === 'ja' ? 'ツアーに含まれるもの' : 'What\'s Included' }}</h3>
            <ul class="preparation-list included">
              <li>{{ currentLocale === 'ja' ? 'プレミアムEバイクレンタル' : 'Premium e-bike rental' }}</li>
              <li>{{ currentLocale === 'ja' ? 'TSマーク保険' : 'TS Mark insurance' }}</li>
              <li>{{ currentLocale === 'ja' ? 'ヘルメット' : 'Helmet' }}</li>
              <li>{{ currentLocale === 'ja' ? '600mlペットボトルの水（1本）' : '600ml bottle of water' }}</li>
              <li>{{ currentLocale === 'ja' ? '勝尾寺の入場料' : 'Katsuoji Temple entrance fee' }}</li>
              <li>{{ currentLocale === 'ja' ? '温泉入浴料' : 'Onsen admission' }}</li>
              <li>{{ currentLocale === 'ja' ? 'ガイド' : 'Guide' }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>{{ currentLocale === 'ja' ? '冒険の準備はできましたか？' : 'Ready for Your Adventure?' }}</h2>
        <div class="tour-pricing-detail">
          <span class="price-main-detail">¥14,000</span>
          <span class="price-option-detail">{{ currentLocale === 'ja' ? '桜井ランチ付き: ¥16,000' : 'With Sakurai lunch: ¥16,000' }}</span>
          <span class="price-option-detail">{{ currentLocale === 'ja' ? '山荘風の森ランチ付き: ¥25,000' : 'With Sanso Kaze No Mori luxury lunch: ¥25,000' }}</span>
        </div>
        <div class="cta-book-button-wrapper">
          <BookingWidget
            widget-id="bokun_a923d9f3_9b21_4fcf_ad98_04dc0393f4b0"
            experience-id="1215355"
            :button-text="currentLocale === 'ja' ? '今すぐ予約' : 'Book Now'"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import AppHeader from './AppHeader.vue'
import BookingWidget from './BookingWidget.vue'

export default {
  name: 'KatsuojiOnsenTourPage',
  components: {
    AppHeader,
    BookingWidget
  },
  setup() {
    const { locale: currentLocale } = useI18n()

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
  background-image: url('/assets/outdoor_bath_1.webp');
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
  max-width: 650px;
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
  margin-bottom: 1rem;
}

.tours-description {
  font-size: 1.1rem;
  opacity: 0.8;
  line-height: 1.6;
}

.tours-availability {
  display: inline-block;
  margin-top: 1rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: #fbbf24;
  background-color: rgba(251, 191, 36, 0.15);
  border: 1px solid rgba(251, 191, 36, 0.4);
  border-radius: 6px;
  padding: 0.4rem 0.9rem;
}

.tours-tattoo-notice {
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: #fca5a5;
  background-color: rgba(252, 165, 165, 0.15);
  border: 1px solid rgba(252, 165, 165, 0.4);
  border-radius: 6px;
  padding: 0.4rem 0.9rem;
}

.tour-pricing-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin: 2rem 0;
}

.price-main-hero {
  font-size: 2.5rem;
  color: white;
  font-weight: 800;
  letter-spacing: 0.05em;
}

.price-options {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.price-option {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

.coming-soon-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.coming-soon-badge {
  background-color: #fbbf24;
  color: #78350f;
  padding: 0.4rem 0.9rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
}

.booking-request-button {
  display: inline-block;
  background-color: #2563eb;
  color: white;
  padding: 1rem 2.5rem;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.2s ease;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

.booking-request-button.disabled {
  background-color: #94a3b8;
  cursor: not-allowed;
  box-shadow: none;
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

/* Branch layout */
.branch-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin: 1rem 0 3rem;
}

.branch-divider {
  flex: 1;
  height: 2px;
  background-color: #e2e8f0;
}

.branch-label {
  font-size: 1rem;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  white-space: nowrap;
}

.itinerary-branches {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.branch {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.branch-title {
  text-align: center;
  font-size: 1.1rem;
  font-weight: 700;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  letter-spacing: 0.03em;
}

.branch-title--a {
  background-color: #dbeafe;
  color: #1d4ed8;
}

.branch-title--b {
  background-color: #fef3c7;
  color: #92400e;
}

.branch-step {
  margin-bottom: 0 !important;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding: 1.5rem;
}

.step-number--a {
  background: linear-gradient(135deg, #2563eb, #1d4ed8) !important;
}

.step-number--b {
  background: linear-gradient(135deg, #f59e0b, #d97706) !important;
  box-shadow: 0 4px 8px rgba(245, 158, 11, 0.3) !important;
}

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
  text-align: left;
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

.tour-pricing-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin: 2rem 0;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
}

.price-main-detail {
  font-size: 3rem;
  color: white;
  font-weight: 800;
}

.price-option-detail {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.75);
  font-weight: 500;
}

.booking-request-button-cta {
  display: inline-block;
  padding: 1.25rem 3rem;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
}

.booking-request-button-cta.disabled {
  background-color: #475569;
  color: #94a3b8;
  cursor: not-allowed;
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

  .itinerary-branches {
    grid-template-columns: 1fr;
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

  .coming-soon-cta {
    flex-direction: column;
  }
}
</style>
