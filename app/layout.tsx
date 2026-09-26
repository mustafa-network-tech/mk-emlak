import type { Metadata } from 'next';
import { SiteProvider, Header, Footer } from '@/components/site-shell';
import { DemoBar } from '@/components/demo-bar';
import './globals.css';
export const metadata: Metadata = {
 title: { default: 'Mavi Gayrimenkul — Emlak Ofisi Web Sitesi Demosu | MK Digital Systems', template: '%s | Mavi Gayrimenkul Demosu' },
 description: 'Bolu’da yeni bir başlangıç. Satılık ve kiralık konut, arsa ve iş yeri portföylerini keşfedin. MK Digital Systems demo çalışması.',
 robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
 metadataBase: new URL('https://mk-emlak-swfa.vercel.app'),
 openGraph: { title: 'Mavi Gayrimenkul — Emlak Ofisi Web Sitesi Demosu | MK Digital Systems', description: 'Gayrimenkul danışmanlığı deneyimi. Örnek portföy çalışması.', locale: 'tr_TR', type: 'website' },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
 return <html lang="tr"><body><SiteProvider><a className="skip-link" href="#main">İçeriğe geç</a><DemoBar /><Header />{children}<Footer /></SiteProvider></body></html>;
}
