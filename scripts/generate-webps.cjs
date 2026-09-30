const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const brainDir = 'C:/Users/Dreams/.gemini/antigravity-ide/brain/6b4765aa-95b2-43b3-b58b-0dc2e06c8c8d';

const targets = [
  // 1. Home hero doctor (full clinic desk, mid-30s)
  {
    src: 'hero_dr_mohini_1790753112121.jpg',
    out: 'public/images/hero/dr-mohini-hero.webp',
    width: 1200,
    height: 800,
    fit: 'cover',
    position: 'center'
  },
  // 2. Home hero doctor avatar (tight face crop, vibrant mid-30s)
  {
    src: 'hero_dr_mohini_1790753112121.jpg',
    out: 'public/images/hero/dr-mohini-avatar.webp',
    width: 320,
    height: 320,
    extract: { left: 660, top: 60, width: 360, height: 360 }
  },
  // 3. Home anxiety slide / Telehealth
  {
    src: 'home_anxiety_slide_1790752620727.jpg',
    out: 'public/images/hero/telehealth-consultation.webp',
    width: 1200,
    height: 800,
    fit: 'cover',
    position: 'center'
  },
  // 4. Booking page telehealth
  {
    src: 'home_anxiety_slide_1790752620727.jpg',
    out: 'public/images/booking/online-consultation-desk.webp',
    width: 900,
    height: 600,
    fit: 'cover',
    position: 'center'
  },
  // 5. About Me doctor portrait (mid-30s, vibrant)
  {
    src: 'about_dr_portrait_1790753191123.jpg',
    out: 'public/images/about/dr-mohini-portrait.webp',
    width: 800,
    height: 1067,
    fit: 'cover',
    position: 'top'
  },
  // 6. About Me avatar (tight face crop, radiant mid-30s)
  {
    src: 'about_dr_portrait_1790753191123.jpg',
    out: 'public/images/about/dr-mohini-avatar.webp',
    width: 320,
    height: 320,
    extract: { left: 200, top: 70, width: 500, height: 500 }
  },
  // 7. About Me doctor listening & holding hand
  {
    src: 'about_listening_care_1790753314552.jpg',
    out: 'public/images/about/doctor-patient-listening.webp',
    width: 1200,
    height: 800,
    fit: 'cover',
    position: 'center'
  },
  // 8. Consultation process page listening crop
  {
    src: 'about_listening_care_1790753314552.jpg',
    out: 'public/images/approach/consultation-listening.webp',
    width: 900,
    height: 600,
    fit: 'cover',
    position: 'center'
  },
  // 9. Home difference mind-body meditation
  {
    src: 'home_diff_mindbody_1790752918870.jpg',
    out: 'public/images/hero/mind-body-wellness.webp',
    width: 1200,
    height: 675,
    fit: 'cover',
    position: 'center'
  },
  // 10. Integrated healing page mindfulness
  {
    src: 'home_diff_mindbody_1790752918870.jpg',
    out: 'public/images/approach/integrated-healing-mindfulness.webp',
    width: 900,
    height: 600,
    fit: 'cover',
    position: 'center'
  },
  // 11. Clinical philosophy whole person
  {
    src: 'home_diff_mindbody_1790752918870.jpg',
    out: 'public/images/about/philosophy-whole-person.webp',
    width: 800,
    height: 600,
    fit: 'cover',
    position: 'center'
  },
  // 12. Blog 1: Anxiety myths & facts
  {
    src: 'blog_anxiety_myths_1790752935369.jpg',
    out: 'public/images/blog/anxiety-myths-and-facts.webp',
    width: 1200,
    height: 675,
    fit: 'cover',
    position: 'center'
  },
  // 13. Expertise: Mental & emotional wellness
  {
    src: 'blog_anxiety_myths_1790752935369.jpg',
    out: 'public/images/expertise/mental-emotional-wellness.webp',
    width: 900,
    height: 600,
    fit: 'cover',
    position: 'center'
  },
  // 14. Blog 2: Anxiety sleep
  {
    src: 'blog_anxiety_sleep_1790752952178.jpg',
    out: 'public/images/blog/can-anxiety-affect-your-sleep.webp',
    width: 1200,
    height: 675,
    fit: 'cover',
    position: 'center'
  },
  // 15. Expertise: Sleep & lifestyle
  {
    src: 'blog_anxiety_sleep_1790752952178.jpg',
    out: 'public/images/expertise/sleep-lifestyle-concerns.webp',
    width: 900,
    height: 600,
    fit: 'cover',
    position: 'center'
  },
  // 16. Blog 3: Homeopathy for anxiety
  {
    src: 'blog_homeopathy_anxiety_1790752974725.jpg',
    out: 'public/images/blog/does-homeopathy-work-for-anxiety.webp',
    width: 1200,
    height: 675,
    fit: 'cover',
    position: 'center'
  },
  // 17. Approach: Why homeopathy
  {
    src: 'blog_homeopathy_anxiety_1790752974725.jpg',
    out: 'public/images/approach/why-homeopathy-remedies.webp',
    width: 900,
    height: 600,
    fit: 'cover',
    position: 'center'
  },
  // 18. Journey: Study desk & Materia Medica
  {
    src: 'journey_study_desk_1790753070548.jpg',
    out: 'public/images/journey/clinical-study-materia-medica.webp',
    width: 1200,
    height: 800,
    fit: 'cover',
    position: 'center'
  },
  // 19. Credentials: Education & Qualifications
  {
    src: 'journey_study_desk_1790753070548.jpg',
    out: 'public/images/credentials/education-materia-medica.webp',
    width: 900,
    height: 600,
    fit: 'cover',
    position: 'center'
  }
];

(async () => {
  for (const t of targets) {
    const inPath = path.join(brainDir, t.src);
    const outPath = t.out;
    const parent = path.dirname(outPath);
    if (!fs.existsSync(parent)) fs.mkdirSync(parent, { recursive: true });

    let pipeline = sharp(inPath);
    if (t.extract) {
      pipeline = pipeline.extract(t.extract);
    }
    if (t.width && t.height) {
      pipeline = pipeline.resize({ width: t.width, height: t.height, fit: t.fit || 'cover', position: t.position || 'center' });
    }
    await pipeline.webp({ quality: 85, effort: 4 }).toFile(outPath);

    const stat = fs.statSync(outPath);
    console.log('Generated:', outPath, '(' + Math.round(stat.size / 1024) + ' KB)');
  }

  // Also convert the 3 camp photos to WebP
  for (let i = 1; i <= 3; i++) {
    const cIn = `public/images/camp/medical-camp-${i}.jpg`;
    const cOut = `public/images/camp/medical-camp-${i}.webp`;
    if (fs.existsSync(cIn)) {
      await sharp(cIn).webp({ quality: 85 }).toFile(cOut);
      const stat = fs.statSync(cOut);
      console.log('Converted camp photo:', cOut, '(' + Math.round(stat.size / 1024) + ' KB)');
    }
  }

  console.log('All WebP images generated successfully!');
})();
