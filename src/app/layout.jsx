import localFont from 'next/font/local';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import ScrollButtons from '../components/ScrollButtons';
import BookingModal from '../components/BookingModal';
import '../index.css';
import '../styles/components.css';
import '../styles/motion.css';
import '../styles/theme.css';
import '../styles/header-tools.css';
import '../styles/inner.css';

// Applies the saved theme (or the device preference) before first paint, so pages never flash.
const themeInitScript = `(function(){try{var t=localStorage.getItem('medicora-theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

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
    default: 'Dr. Mohini Mutha | Homeopathy · Counselling · Mind-Body Care',
    template: '%s | Dr. Mohini Mutha',
  },
  description:
    'With 14+ years of clinical experience and 12,000+ patients consulted, Dr. Mohini Mutha combines homeopathy, counselling and a personalised understanding of every patient.',
  icons: { icon: '/brand/logo-icon.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${parkinsans.variable} ${geist.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <div className="site-shell">
          <Header />
          <main className="site-main">{children}</main>
          <Footer />
          <ScrollReveal />
          <ScrollButtons />
          <BookingModal />
        </div>
      </body>
    </html>
  );
}
