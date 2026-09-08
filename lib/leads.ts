export type LeadKind='degerleme'|'portfoy'|'randevu'|'iletisim';
export type LeadPayload={kind:LeadKind;name:string;phone:string;fields:Record<string,string>};
export interface LeadService {submit(payload:LeadPayload):Promise<{reference:string;demo:boolean}>}
// Replace this adapter with your authenticated CRM/API integration. No personal data is persisted or transmitted in the demo.
export const leadService:LeadService={async submit(payload){if(payload.name.trim().length<2)throw new Error('Adınızı ve soyadınızı yazın.');if(!/^(\+?90|0)?5\d{9}$/.test(payload.phone.replace(/[\s()-]/g,'')))throw new Error('Geçerli bir cep telefonu girin. Örnek: 05xx xxx xx xx');return{reference:`DEMO-${Date.now().toString().slice(-6)}`,demo:true}}};
