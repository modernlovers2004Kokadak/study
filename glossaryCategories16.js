/* v2.9.131 用語集582語を問題集と同じ16カテゴリで表示（本文・番号は変更しない）。 */
(()=>{
const CATEGORY_NAMES=['理容師法','理容師法施行令','理容師法施行規則','感染症法','地域保健法','健康増進法','消費者基本法','出張理容・美容衛生管理要領','消毒法','公衆衛生','皮膚と毛髪','香粧品成分','理容文化史','店舗管理','カッティング','シェービング'];
const LAW_ACT=new Set(['理容師法','理容師','理容所','理容業','理容師免許','厚生労働大臣','都道府県知事','保健所長','開設者','管理理容師','立入検査','報告徴収','改善命令','閉鎖命令','業務停止','免許取消し','免許停止','無免許営業','美容師法']);
const LAW_ORDER=new Set(['国家試験','指定試験機関']);
const LAW_RULE=new Set(['開設届','廃止届','変更届','構造設備基準','消毒設備','採光基準','換気基準','待合所','作業場','器具格納','毛髪箱','汚物箱']);
const SHOP=new Set(['苦情対応','顧客管理','作業手順書','安全管理','危険予知','労働災害','定期清掃','衛生点検','個人情報保護法','労働基準法','労働安全衛生法']);
function classify(no,name){
 if(no<=206)return'感染症法';if(no<=270)return'消毒法';if(no<=285)return SHOP.has(name)?'店舗管理':'公衆衛生';if(no<=296)return'地域保健法';if(no<=345)return'健康増進法';if(no<=450)return'皮膚と毛髪';if(no<=505)return'香粧品成分';if(no<=540)return /レザー|シェービング/.test(name)?'シェービング':name==='理容'?'理容文化史':'カッティング';
 if(LAW_ACT.has(name))return'理容師法';if(LAW_ORDER.has(name))return'理容師法施行令';if(LAW_RULE.has(name))return'理容師法施行規則';if(name==='出張理容')return'出張理容・美容衛生管理要領';if(name==='感染症法')return'感染症法';if(name==='地域保健法')return'地域保健法';if(name==='健康増進法')return'健康増進法';if(name==='消費者基本法'||name==='個人情報保護法')return'消費者基本法';if(SHOP.has(name))return'店舗管理';return'公衆衛生';
}
globalThis.GLOSSARY_CATEGORY_CLASSIFY=classify;
const allSection=document.getElementById('全課目');if(!allSection)return;const originals=[...allSection.querySelectorAll('details.qa')];if(originals.length!==582)return;
const rows=originals.map((detail,index)=>{const no=index+1,name=detail.querySelector('.qtext')?.textContent.trim()||'',category=classify(no,name),badge=detail.querySelector('.meta .badge');if(badge)badge.textContent=category;detail.dataset.category=category;return{detail,category}});
document.querySelectorAll('main > section').forEach(section=>{if(section!==allSection)section.remove()});const main=document.querySelector('main'),counts=Object.fromEntries(CATEGORY_NAMES.map(name=>[name,rows.filter(row=>row.category===name).length]));allSection.querySelector('h2').textContent='全カテゴリ（582）';
const sections={};CATEGORY_NAMES.forEach((name,index)=>{const section=document.createElement('section');section.id=`category16-${index+1}`;section.hidden=true;section.innerHTML=`<h2>${name}（${counts[name]}）</h2>`;rows.filter(row=>row.category===name).forEach(row=>section.appendChild(row.detail.cloneNode(true)));main.appendChild(section);sections[name]=section});
const tabs=document.querySelector('.tabs');if(tabs){tabs.innerHTML='';const label=document.createElement('label');label.className='tab';label.textContent='カテゴリ：';const select=document.createElement('select');select.setAttribute('aria-label','用語集カテゴリ');select.style.cssText='font:inherit;color:inherit;border:0;background:transparent;max-width:100%;';select.appendChild(new Option('全カテゴリ（582）','all'));CATEGORY_NAMES.forEach(name=>select.appendChild(new Option(`${name}（${counts[name]}）`,name)));label.appendChild(select);tabs.appendChild(label);select.addEventListener('change',()=>{allSection.hidden=select.value!=='all';CATEGORY_NAMES.forEach(name=>sections[name].hidden=select.value!==name);const target=select.value==='all'?allSection:sections[select.value];if(target&&target.scrollIntoView)target.scrollIntoView({block:'start'})})}
})();
