import {type Property,slugify} from './data';
export type Filters=Record<string,string>;
export function filterProperties(items:Property[],f:Filters){return items.filter(p=>{
 if(f.transaction&&slugify(p.transactionType)!==f.transaction)return false;
 if(f.type&&slugify(p.propertyType)!==f.type)return false;
 if(f.district&&slugify(p.district)!==f.district)return false;
 if(f.neighborhood&&slugify(p.neighborhood)!==f.neighborhood)return false;
 if(f.rooms&&p.rooms!==f.rooms.replace(' ','+'))return false;
 if(f.minPrice&&p.price<Number(f.minPrice))return false;
 if(f.maxPrice&&p.price>Number(f.maxPrice))return false;
 if(f.minArea&&p.grossArea<Number(f.minArea))return false;
 if(f.maxArea&&p.grossArea>Number(f.maxArea))return false;
 if(f.age&&p.buildingAge>Number(f.age))return false;
 if(f.floor&&p.floor!==f.floor)return false;
 if(f.heating&&p.heating!==f.heating)return false;
 for(const key of ['furnished','creditEligible','inComplex','parking','balcony','elevator'] as const)if(f[key]&&p[key]!== (f[key]==='true'))return false;
 return true;
 }).sort((a,b)=>f.sort==='priceAsc'?a.price-b.price:f.sort==='priceDesc'?b.price-a.price:f.sort==='area'?b.grossArea-a.grossArea:b.createdAt.localeCompare(a.createdAt));}
