const MK_HOME = 'https://www.mk-digitalsystems.com/tr';

/** Sample-project notice shared by every MK portfolio demo. */
export function DemoBar() {
  return (
    <aside className="demo-bar" aria-label="Örnek proje">
      <b>Örnek proje</b>
      <p>Mavi Gayrimenkul gerçek bir işletme değildir; MK Digital Systems’in emlak ofisleri için hazırladığı bir web sitesi demosudur.</p>
      <a href={MK_HOME}>
        <span className="demo-bar-short">MK Digital Systems demosu ↗</span>
        <span className="demo-bar-long">MK Digital Systems ↗</span>
      </a>
    </aside>
  );
}

const MK_WHATSAPP = '905456597551';
/** WhatsApp link to MK Digital Systems with a prefilled message that names this demo. */
export function mkWhatsAppUrl() {
  const text = 'Merhaba MK Digital Systems, Mavi Gayrimenkul demo sitesini inceledim. İşletmem için benzer bir web sitesi hakkında görüşmek istiyorum.';
  return `https://wa.me/${MK_WHATSAPP}?text=${encodeURIComponent(text)}`;
}
