import localFont from 'next/font/local';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../index.css';
import '../styles/components.css';

const parkinsans = localFont({
  src: [
    { path: '../../public/fonts/Parkinsans-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Parkinsans-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../../public/fonts/Parkinsans-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '../../public/fonts/Parkinsans-Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-parkinsans',
  display: 'swap',
});

const geist = localFont({
  src: [
    { path: '../../public/fonts/Geist-Light.ttf', weight: '300', style: 'normal' },
    { path: '../../public/fonts/Geist-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Geist-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../../public/fonts/Geist-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '../../public/fonts/Geist-Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-geist',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://drmohinimutha.com'),
  title: {
    default: 'Dr. Mohini Mutha | Homeopathic Physician & Psychological Counsellor',
    template: '%s | Dr. Mohini Mutha',
  },
  description:
    'Personalised healthcare combining 14+ years of clinical homeopathy, psychological counselling, and mind-body care. Consultations available online (India, UAE, USA) and in-person in Navi Mumbai.',
  icons: { icon: '/brand/logo-icon.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${parkinsans.variable} ${geist.variable}`}>
      <body>
        <div className="site-shell">
          <Header />
          <main className="site-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
