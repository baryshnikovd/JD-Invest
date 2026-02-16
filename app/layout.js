import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import GrainOverlay from './components/GrainOverlay';

export const metadata = {
  title: 'JD Invest LLC — Global Private Investment Firm',
  description:
    'JD Invest LLC is a global private investment firm headquartered in Dubai, deploying long-duration capital across technology and essential real assets.',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'JD Invest LLC',
    description:
      'A global private investment firm deploying long-duration capital across technology and essential real assets.',
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
