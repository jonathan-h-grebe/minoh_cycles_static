<template>
  <div class="testimonials-page">
    <AppHeader />
    <header class="page-header">
      <h1>{{ $t('reviews.title') }}</h1>
    </header>

    <div class="testimonials-container">
      <div class="testimonials-grid">
        <article v-for="review in reviews" :key="review.id" class="review-card">
          <div class="review-top">
            <span class="quote-mark">"</span>
            <span :class="['platform-badge', review.platformClass]">{{ review.platform }}</span>
          </div>
          <p class="review-text">{{ review.text }}</p>
          <div class="review-footer">
            <span class="reviewer-name">{{ review.name }}</span>
            <span class="review-date">{{ review.date }}</span>
          </div>
        </article>
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'

export default {
  name: 'TestimonialsPage',
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      reviews: [
        {
          id: 1,
          name: 'Tripadvisor Traveller',
          date: 'April 2026',
          platform: 'Tripadvisor',
          platformClass: 'tripadvisor',
          text: 'Minoh Cycle Tours provides a scenic and easy ride through Osaka\'s northern mountains. Highlights include visiting the famous Katsuoji Temple (known for its red Daruma idols and beautiful scenery), the picturesque Minoh Waterfall, expansive views of Osaka City, and peaceful riding through the quiet mountain roads on comfortable modern e-bikes. My tour came at the height of spring, blessing us with pink yaezakura flowers, trees swathed in spring\'s freshest green, and a troop of Japanese macaque monkeys hanging out right next to the road! They were bold enough to allow us to take their pictures. If you\'re visiting Osaka, this might be the best way to get out of the city and enjoy the outdoors and cultural sites.'
        },
        {
          id: 2,
          name: 'GetYourGuide Traveller',
          date: 'June 2026',
          platform: 'GetYourGuide',
          platformClass: 'gyg',
          text: 'Die Tour war super! Man hatte bei der Fahrt eine super Aussicht und konnte auch an schönen Stellen halten, um ein Foto zu machen. Die E-Bikes waren gepflegt & technisch fit. Selbst für den großen Kopf von meinem Mann hatte Jonathan noch einen Helm parat. Auf Jonathans Vorschlag hin haben wir zuerst den Tempel angesteuert statt dem Wasserfall und damit den großen Andrang an Touristen etwas umgangen. Viele spannende Infos zur Tour und nette Gespräche auch zu Themen abseits davon. Am Ende hat uns Jonathan noch verschiedene Restaurants empfohlen, wovon wir auch eins ausprobiert haben. Es war richtig gut! Alles in allem super organisiert und ein toller Guide! Sehr zu empfehlen, gerade wenn man die Massen meiden möchte, eine tolle Erfahrung.'
        },
        {
          id: 3,
          name: 'Tripadvisor Traveller',
          date: 'May 2026',
          platform: 'Tripadvisor',
          platformClass: 'tripadvisor',
          text: 'Bellissima esperienza con la guida Jonathan, bravo, simpatico e preparato, che parla benissimo sia l\'inglese che il giapponese. Percorso da fare con la bici elettrica, semplice per tutti, che parte dal paesino di Minoh, molto molto carino, per arrivare nei boschi. Prima la bellissima cascata e poi il meraviglioso tempio in cima alla montagna. Consigliatissimo!!!'
        },
        {
          id: 4,
          name: 'Tripadvisor Traveller',
          date: 'September 2025',
          platform: 'Tripadvisor',
          platformClass: 'tripadvisor',
          text: '箕面の滝と勝尾寺には車で何回も訪れた事があります。ハイキングにもハマり勝尾寺まで歩いて行った事もありました。今回初めて自転車で勝尾寺まで行った感覚は言葉にならない良さがありました。8月に行ったのですが、気温も高く自転車で登れるのか不安でしたが、電動自転車が優れもので楽々でした。標高が高くなるほど気温も下がり、明治の森箕面国定公園に入る頃には、かなり涼しくなり、自転車に乗りながら森林浴を楽しめました。国定公園沿いには滝に流れ込む沢があり、紅葉の時期には最高だろうなと思いました。箕面の滝や勝尾寺も、さることながら、帰りに自転車で明治の森を抜ける爽快感は体験しないと言葉にならない良さがありました。ガイドの方も大変感じの良い方で安心できました。ありがとうございました'
        },
        {
          id: 5,
          name: 'Tripadvisor Traveller',
          date: 'June 2026',
          platform: 'Tripadvisor',
          platformClass: 'tripadvisor',
          text: 'Enjoyed my bike tour to Katsuoji and Minoh Falls very much. This is a great way to escape the hustle and bustle of the main city, to explore the beautiful natural sights and rich culture of Osaka. Jonathan is a knowledgeable and thoughtful guide, who helped me appreciate the history and culture of the area much more. Even the lunch spot he recommended was a local gem! Thank you!'
        },
        {
          id: 6,
          name: 'GetYourGuide Traveller',
          date: 'May 2026',
          platform: 'GetYourGuide',
          platformClass: 'gyg',
          text: 'Our e-bike tour with Jonathan to Minoh Falls and Katsuo-ji Temple was one of the best experiences of our trip to Japan! The route was low to medium difficulty, but Jonathan made everything easy and enjoyable, with perfect pacing and relaxing breaks along the way. He guided us through every stop with detailed explanations, especially at the temple, sharing history and local culture with real passion. This is a unique and safe way to experience nature and authentic local life away from crowded tourist spots. He also recommended an incredible local place for curry rice run by the sweetest lady and absolutely delicious and authentic! On top of that, Jonathan even helped us recover a lost souvenir bag. If you want an unforgettable experience with a truly kind and caring guide, don\'t miss this tour!'
        },
        {
          id: 7,
          name: 'GetYourGuide Traveller',
          date: 'April 2026',
          platform: 'GetYourGuide',
          platformClass: 'gyg',
          text: 'Johnathan was a fantastic tour guide. The trip up to Katsuoji on the bikes was a great way to see the stunning scenery whilst also avoiding the crowds of the buses. The electric bikes make getting to the top of the mountain a breeze. If you\'ve never used an electric bike before don\'t worry as you get a briefing before you head off and they are really quick to get used to. Johnathan was great at explaining all the information to us at the shrine, including translating our fortunes! You get plenty of time to look around, with stops to take pictures both at the shrine and at the falls. If you want a change of pace from urban Osaka for half a day, this is perfect. Would 100% recommend to anyone coming to Osaka!'
        },
        {
          id: 8,
          name: 'Tripadvisor Traveller',
          date: 'April 2026',
          platform: 'Tripadvisor',
          platformClass: 'tripadvisor',
          text: 'Awesome way to see the Minoh falls and temple. E bikes were new and easy to ride. Jonathan was a wonderful, knowledgeable host and made the experience personal and authentic. He had secured pre entry to the shrines so we didn\'t have to wait which was a win. Afterwards he took us to a local spot for a tempura meal which was delicious. I really enjoyed this morning and highly recommend this adventure to anyone who is up for some fresh air and a less touristy experience.'
        },
        {
          id: 9,
          name: 'Tripadvisor Traveller',
          date: 'March 2026',
          platform: 'Tripadvisor',
          platformClass: 'tripadvisor',
          text: 'If visiting Katsuoji Temple is on your bucket list, this tour is absolutely the way to go! The e-bikes make the ride easy and enjoyable while letting you fully appreciate the scenery. Jonathan is an excellent guide — friendly, knowledgeable, and passionate about the area. Overall, this tour was a highlight of the trip and 100% worth it! Highly recommended for anyone looking for a unique and memorable way to explore.'
        },
        {
          id: 10,
          name: 'GetYourGuide Traveller',
          date: 'March 2026',
          platform: 'GetYourGuide',
          platformClass: 'gyg',
          text: 'The tour was lovely and very informative. I was expecting the cycling component to be harder than it was and the guide did a great job of setting a comfortable pace for the entire tour. The guide was very knowledgeable about the history of the temple and also the scenic mountain we took to get there. Upon completion, the guide even recommended a nearby local ramen shop and hand wrote a note for easy ordering. The whole trip took us just short of 4 hours and was a lovely way to spend a morning.'
        },
        {
          id: 11,
          name: 'Tripadvisor Traveller',
          date: 'February 2026',
          platform: 'Tripadvisor',
          platformClass: 'tripadvisor',
          text: 'We had a fantastic day out on the e-bikes with Jonathan. He is very knowledgeable and patient and explained everything to us in a way that we could understand and appreciate the culture. While at times it was a tough ride up the mountain it was all worth it for the experience and views. Jonathan even took the time to walk us to a local restaurant for lunch and translate the menu and order for us. I would 1000% recommend this tour and Jonathan to anyone travelling this way.'
        },
        {
          id: 12,
          name: 'Viator Traveller',
          date: 'January 2026',
          platform: 'Viator',
          platformClass: 'viator',
          text: 'Great way to get out of the city, get some fresh air, some gentle exercise, see a lovely waterfall, a beautiful temple, and if you\'re lucky some wild monkeys. Jonathan was a friendly host, very easy going, and full of interesting snippets of local information. I had a great time and have no hesitation in recommending it to other travellers, be you a family, a couple, or solo.'
        },
        {
          id: 13,
          name: 'Viator Traveller',
          date: 'January 2026',
          platform: 'Viator',
          platformClass: 'viator',
          text: 'It was my first time using an electric bike but it was super easy to get the hang of and I had no problems throughout the entire ride. The tour guide was extremely friendly while providing interesting information and making sure everyone stayed safe. I highly recommend this tour! このツアーは最高でした！ありがとうございました。'
        },
        {
          id: 14,
          name: 'Viator Traveller',
          date: 'January 2026',
          platform: 'Viator',
          platformClass: 'viator',
          text: 'Our tour guide, Jonathan, was one of the sweetest people I have met. There was some initial confusion about the meeting point for the tour, but he offered to come pick us up where we were. He offered us water and snacks for the ride and he constantly made sure that we were doing okay. The ride up the mountain to the shrine can be a lot for someone who is inexperienced and sort of out of shape like myself, but Jonathan was very understanding. We made stops along the way and he made sure I felt comfortable with the pace. The shrine and waterfalls were beautiful, even in the off season. Jonathan\'s personal knowledge and experience with the areas made them that much more interesting to visit and explore.'
        },
        {
          id: 15,
          name: 'Tripadvisor Traveller',
          date: 'December 2025',
          platform: 'Tripadvisor',
          platformClass: 'tripadvisor',
          text: 'Fantastic bike tour with Jonathan. Super knowledgeable and friendly, and a consummate local who prioritizes cultural engagement for us tourists! The bikes themselves were also top notch and easy to ride. I highly recommend booking this experience. There is no better way to get off the beaten path and explore different parts of the Osaka area.'
        },
        {
          id: 16,
          name: 'Tripadvisor Traveller',
          date: 'December 2025',
          platform: 'Tripadvisor',
          platformClass: 'tripadvisor',
          text: 'Purposefully sought out a bike tour that gave an opportunity to see the "road less traveled" and boy did we get it. Doing this trip during peak fall is amazing. Loved getting a sweat in while exploring nature in an efficient way. The tour size is small, which made it intimate. Jonathan is a great guide, endearing and passionate about what he does. Massive fan of experiencing places we would not otherwise find or seek out. Bring cash for the Minoh Falls area so you can grab a treat down there — we didn\'t and missed out on the yummy looking matcha soft serve!'
        },
        {
          id: 17,
          name: 'Tripadvisor Traveller',
          date: 'November 2025',
          platform: 'Tripadvisor',
          platformClass: 'tripadvisor',
          text: 'This e-bike tour with Jonathan was one of the best experiences of our Japan trip! He was friendly, knowledgeable, and made sure everyone was comfortable throughout the ride. What makes this tour unique is that it\'s the only one that lets you visit both Katsuoji Temple and Minoh Falls without a long, uphill hike. The e-bikes make the journey easier, letting you enjoy the forest roads, peaceful countryside, and local charm along the way. Katsuoji Temple was stunning with its mountain setting and hundreds of daruma dolls, and Minoh Falls was the perfect, relaxing finish surrounded by nature. It\'s the ideal mix of culture, nature, and light adventure — perfect for travelers of any fitness level.'
        },
        {
          id: 18,
          name: 'Tripadvisor Traveller',
          date: 'October 2025',
          platform: 'Tripadvisor',
          platformClass: 'tripadvisor',
          text: 'We had a great tour with Jonathan. The e-bikes were easy to ride and a fantastic way to see both the falls and temple in a single day. The route we rode had super pretty scenery, was fun to ride, and avoided all the inconveniences of traffic in Osaka proper. We even saw monkeys up close! Jonathan did a great job showing us first-timers how to ride the e-bikes. He was also very flexible and gave great insight as a native of the area, answering our many questions. Overall, highly recommend!'
        },
        {
          id: 19,
          name: 'Tripadvisor Traveller',
          date: 'October 2025',
          platform: 'Tripadvisor',
          platformClass: 'tripadvisor',
          text: 'I would highly recommend this e-bike tour as a great way to see and appreciate Katsuoji Temple and Minoh Falls. The temple location up high on the hill and the surrounding landscape is spectacular and was well worth the ride up, with lots of places to take some nice photos! We toured a lot of temples in our two-week visit to Japan and this one was by far the most impressive spot. On the way down there was a stunning view of the city all the way to Osaka. Jonathan did a great job leading us and sharing the history and meaning of each part of the temple. He also gave a few great recommendations for lunch in the town on our return. The bikes are new and handle very nicely. We had a great experience!'
        },
        {
          id: 20,
          name: 'Tripadvisor Traveller',
          date: 'April 2026',
          platform: 'Tripadvisor',
          platformClass: 'tripadvisor',
          text: 'Jonathan\'s tour was an awesome day pedaling to the sites. He was very knowledgeable of every aspect of the tour. I went with my wife, daughter, and daughter\'s partner. It was a wonderful way to spend time together. There were a few parts that required a little exertion, but nothing difficult for someone who is moderately fit. I couldn\'t recommend this experience more highly.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.testimonials-page {
  min-height: 100vh;
  background-color: #f8fafc;
  padding-top: 80px;
}

.page-header {
  background-color: #1e293b;
  color: white;
  padding: 3rem 2rem;
  text-align: center;
}

.page-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
}

.testimonials-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  align-items: start;
}

.review-card {
  background-color: white;
  border-radius: 12px;
  padding: 1.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.review-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 12px -2px rgba(0, 0, 0, 0.15);
}

.review-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.quote-mark {
  font-size: 3.5rem;
  line-height: 1;
  color: #cbd5e1;
  font-family: Georgia, serif;
  margin-top: -0.5rem;
}

.platform-badge {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
  white-space: nowrap;
}

.platform-badge.tripadvisor {
  background-color: #e8f5e9;
  color: #2e7d32;
}

.platform-badge.viator {
  background-color: #fff3e0;
  color: #e65100;
}

.platform-badge.gyg {
  background-color: #fce4ec;
  color: #c62828;
}

.review-text {
  font-size: 1rem;
  line-height: 1.75;
  color: #374151;
  margin: 0;
  flex: 1;
}

.review-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #f1f5f9;
  padding-top: 0.875rem;
  margin-top: auto;
}

.reviewer-name {
  font-weight: 600;
  color: #1e293b;
  font-size: 0.95rem;
}

.review-date {
  font-size: 0.85rem;
  color: #94a3b8;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 1.75rem;
  }

  .testimonials-container {
    padding: 2rem 1rem;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
  }

  .review-card {
    padding: 1.5rem;
  }

  .review-text {
    font-size: 0.95rem;
  }
}
</style>
