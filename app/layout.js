import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import GrainOverlay from './components/GrainOverlay';

export const metadata = {
  metadataBase: new URL('https://jd-invest-production.vercel.app'),
  title: 'JD Invest LLC — Global Private Investment Firm',
  description:
    'JD Invest LLC is a global private investment firm headquartered in Dubai, deploying long-duration capital across technology and essential real assets.',
  openGraph: {
    title: 'JD Invest LLC',
    description:
      'Global private investment firm deploying long-duration capital across technology and essential real assets.',
    url: 'https://jd-invest-production.vercel.app',
    siteName: 'JD Invest LLC',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ paddingTop: 'var(--nav-height)' }}>{children}</main>
        <Footer />
        <GrainOverlay />
      </body>
    </html>
  );
}
