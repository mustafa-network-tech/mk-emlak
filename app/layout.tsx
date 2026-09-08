import type { Metadata } from 'next';
import { SiteProvider, Header, Footer } from '@/components/site-shell';
import './globals.css';
export const metadata: Metadata = {
 title: { default: 'Mavi Gayrimenkul | Bolu Satılık ve Kiralık Gayrimenkul', template: '%s | Mavi Gayrimenkul' },
 description: 'Bolu’da yeni bir başlangıç. Satılık ve kiralık konut, arsa ve iş yeri portföylerini keşfedin. MK Digital Systems demo çalışması.',
 robots: { index: false, follow: false },
 metadataBase: new URL('https://mavi-gayrimenkul-bolu.oner334480.chatgpt.site'),
 openGraph: { title: 'Mavi Gayrimenkul · Bolu’da yeni bir başlangıç', description: 'Gayrimenkul danışmanlığı deneyimi. Örnek portföy çalışması.', locale: 'tr_TR', type: 'website' },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
 return <html lang="tr"><body><SiteProvider><a className="skip-link" href="#main">İçeriğe geç</a><Header />{children}<Footer /></SiteProvider></body></html>;
}
