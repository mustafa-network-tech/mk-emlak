import Link from 'next/link';
export default function NotFound(){return <main id="main" className="container empty-state"><span className="eyebrow">404 · BU ADRESİ BULAMADIK</span><h1>Yeni bir yoldan başlayalım.</h1><p>Aradığınız sayfa mevcut değil. Portföylerimize göz atabilirsiniz.</p><Link href="/satilik" className="button">Portföyleri keşfet</Link></main>}
