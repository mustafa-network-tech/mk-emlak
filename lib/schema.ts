import type {Property} from './data';
// Ready for verified company/listing records. Never emitted for demo content.
export function buildPropertySchema(p:Property,origin:string){return{'@context':'https://schema.org','@type':'Offer',name:p.title,price:p.price,priceCurrency:p.currency,url:`${origin}/ilan/${p.slug}`,itemOffered:{'@type':'Residence',name:p.title,floorSize:{'@type':'QuantitativeValue',value:p.grossArea,unitCode:'MTK'},address:{'@type':'PostalAddress',addressLocality:p.district,addressRegion:'Bolu',addressCountry:'TR'}}}}
export function buildAgentSchema(verified:{name:string;telephone:string;url:string;address:string}){return{'@context':'https://schema.org','@type':'RealEstateAgent',name:verified.name,telephone:verified.telephone,url:verified.url,address:verified.address}}
