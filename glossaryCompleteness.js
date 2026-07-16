/* v2.9.124 用語集重点語の定義・作用・類義語・混同注意・出典を統一（基準日 2026-07-16） */
(()=>{
const REVIEW_DATE='2026-07-16';
const SOURCES={
 infection:['厚生労働省「感染症情報」','https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/kenkou/kekkaku-kansenshou/index.html'],
 hygiene:['厚生労働省「理容所及び美容所における衛生管理要領」','https://www.mhlw.go.jp/web/t_doc?dataId=00ta5155&dataType=1&pageNo=1'],
 health:['NCBI Bookshelf（皮膚・毛髪の解剖生理）','https://www.ncbi.nlm.nih.gov/books/'],
 cosmetics:['厚生労働省「医薬品・医療機器等」','https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iyakuhin/index.html'],
 technique:['理容師美容師試験研修センター「実技試験審査マニュアル」','https://www.rbc.or.jp/exam/practical_exam/']
};
const ALIASES={
 'キューティクル':'毛小皮','毛小皮':'キューティクル','コルテックス':'毛皮質','毛皮質':'コルテックス','メデュラ':'毛髄質','毛髄質':'メデュラ','クリッパー':'バリカン','バリカン':'クリッパー','シザーズ':'理容鋏・はさみ','セニングシザーズ':'すき鋏','レザー':'剃刀','ネープ':'襟足・後頸部','トップ':'頭頂部','サイド':'側頭部側','フロント':'前頭部側','バック':'後頭部側','クラウン':'頭頂部周辺','ニキビ':'尋常性ざ瘡','尋常性ざ瘡':'ニキビ','毛孔':'毛穴','陰イオン界面活性剤':'アニオン界面活性剤','陽イオン界面活性剤':'カチオン界面活性剤','非イオン界面活性剤':'ノニオン界面活性剤','両性界面活性剤':'アンフォテリック界面活性剤','パーマネントウェーブ':'パーマ（一般的略称）','PG':'プロピレングリコール','BG':'1,3-ブチレングリコール','HBV':'B型肝炎ウイルス','HCV':'C型肝炎ウイルス','HIV':'ヒト免疫不全ウイルス','AIDS':'後天性免疫不全症候群','MRSA':'メチシリン耐性黄色ブドウ球菌','PPE':'個人防護具','QOL':'生活の質','BMI':'体格指数','WHO':'世界保健機関','BCG':'結核予防ワクチン','UV':'紫外線','DNA':'デオキシリボ核酸','RNA':'リボ核酸','RSV':'RSウイルス'
};
const MIXUPS={
 '毛幹':'皮膚外の部分。皮膚内の毛根と混同しない。','毛根':'皮膚内の部分。毛髪全体や毛幹と同義ではない。','毛球':'毛根下端の膨大部。内部へ入り込む毛乳頭と区別する。','毛乳頭':'結合組織側の構造。毛髪を形成する毛母細胞と区別する。','毛母細胞':'分裂・角化して毛髪を形成する細胞。毛乳頭そのものではない。','表皮':'血管をもたない。血管・神経・皮膚付属器を含む真皮と区別する。','真皮':'表皮の下の結合組織層。皮下組織と同義ではない。','皮脂腺':'皮脂を分泌する。汗を分泌する汗腺と区別する。','エクリン腺':'皮膚表面へ開口し主に体温調節に関与。毛包へ開口するアポクリン腺と区別する。','アポクリン腺':'主に毛包へ開口。全身の体温調節を主とするエクリン腺と区別する。','毛小皮':'毛幹最外層。毛髪の大部分を占める毛皮質と区別する。','毛皮質':'毛幹の大部分。最外層の毛小皮、中心の毛髄質と区別する。','毛髄質':'毛幹中心部で、細い毛では欠く場合がある。毛皮質と区別する。','シスチン':'システイン2分子がジスルフィド結合した形。単独のシステインと区別する。','防腐剤':'製品中の微生物増殖を抑える。成分の酸化劣化を抑える酸化防止剤と区別する。','酸化防止剤':'成分の酸化劣化を抑える。微生物増殖を抑える防腐剤と区別する。','還元剤':'パーマ第1剤の主作用。第2剤の酸化剤と役割を逆にしない。','酸化剤':'パーマ第2剤や酸化染毛・脱色に用いられる。用途ごとの反応を同一視しない。','パーマ第1剤':'主に還元して毛髪を変形しやすくする。酸化して固定する第2剤と逆にしない。','パーマ第2剤':'主に酸化して形を固定する。還元する第1剤と逆にしない。','乳化':'互いに混ざりにくい液体を分散させる操作。可溶化や単なる溶解と区別する。','可溶化剤':'少量の油性物質を透明又は微細に分散させる用途。乳化剤と常に同一ではない。','pH':'酸性・アルカリ性の指標。濃度、粘度、酸化還元力とは別の概念。','SARS':'疾患名。原因ウイルス名と同義ではない。','MERS':'疾患名。原因ウイルス名と同義ではない。','HIV':'ウイルス名。HIV感染の進行した病態であるAIDSと区別する。','AIDS':'症候群名。原因ウイルスHIVと同義ではない。','HBV':'病原体名。B型肝炎という疾患名と区別する。','HCV':'病原体名。C型肝炎という疾患名と区別する。','クリッパー':'毛髪を刈る器具。毛髪を挟んで巻く器具ではない。','セニングシザーズ':'毛量調整等に用いる。通常の直鋏と切断結果が異なる。','レザー':'刃を皮膚近くで扱う器具。シザーズやクリッパーと操作・衛生管理を区別する。'
};
const kindOf=(detail,name,category)=>{if(detail.querySelector('.infection-route')||/感染|ウイルス|菌|肝炎|熱$|症$|SARS|MERS|HIV|AIDS|HBV|HCV|MRSA|SFTS|RSV/.test(name))return'infection';if(category==='香粧品化学')return'cosmetics';if(category==='保健')return'health';if(category==='理容技術理論')return'technique';return'hygiene'};
const fallbacks={
 definition:{infection:n=>`${n}：感染症、病原体、病態又は感染対策に関する用語。疾患名・病原体名・感染症法上の類型を分けて理解する。`,cosmetics:n=>`${n}：香粧品の成分、剤型、作用、用途又は法令上の区分に関する用語。`,health:n=>`${n}：皮膚・毛髪の構造、機能、性状又は病変を表す保健用語。`,technique:n=>`${n}：理容技術の部位、器具、操作又は仕上がりを表す用語。`,hygiene:n=>`${n}：衛生管理又は公衆衛生に関する用語。`},
 action:{infection:'感染経路・感染源・予防策の判断に用いる。理容業務では標準予防策、手指衛生、器具の洗浄・消毒へ結び付ける。',cosmetics:'製品の洗浄、保湿、保護、乳化、着色、毛髪形状変化等に関係する。具体的作用は成分・剤型・使用濃度で異なる。',health:'皮膚の防御・知覚・体温調節又は毛髪の形成・強度・色・周期等に関係する。',technique:'安全で再現性のある施術、部位区分、器具選択又は仕上がり確認に用いる。',hygiene:'感染予防、消毒、公衆衛生又は健康管理の判断に用いる。'},
 mixup:{infection:'疾患名、病原体名、感染源、感染経路、法令上の類型を混同しない。',cosmetics:'成分名、製品名、作用、用途、法令上の分類を混同しない。',health:'位置、構造、機能、病変名を混同しない。',technique:'器具名、部位名、操作名、仕上がり名称を混同しない。',hygiene:'目的、対象、方法、濃度・時間等の適用条件を混同しない。'}
};
document.querySelectorAll('details.qa').forEach(detail=>{
 const name=detail.querySelector('.qtext')?.textContent.trim(),category=detail.querySelector('.meta .badge')?.textContent.trim(),answer=detail.querySelector('.answer');if(!name||!answer)return;
 const target=/[ァ-ヶー]|[A-Za-z]/.test(name)||category==='保健'||category==='香粧品化学'||!!detail.querySelector('.infection-route')||(category==='衛生管理'&&/感染|ウイルス|菌|肝炎|熱$|症$|SARS|MERS|HIV|AIDS|HBV|HCV|MRSA|SFTS|RSV/.test(name));if(!target||answer.querySelector('.completeness-evidence'))return;
 const kind=kindOf(detail,name,category),[sourceTitle,sourceUrl]=SOURCES[kind],existing=answer.querySelector('.priority-evidence');let definition=existing?.textContent?.replace(/\s+/g,' ').trim();if(!definition)definition=fallbacks.definition[kind](name);
 const alias=ALIASES[name]||'試験上、明確な同義語は設定しない。上位概念・関連語を同義扱いしない。',mixup=MIXUPS[name]||fallbacks.mixup[kind];
 const box=document.createElement('div');box.className='priority-evidence completeness-evidence';box.innerHTML=`<strong>定義：</strong>${definition}<br><strong>作用・用途：</strong>${fallbacks.action[kind]}<br><strong>類義語・別名：</strong>${alias}<br><strong>混同注意：</strong>${mixup}<br><strong>出典：</strong><a href="${sourceUrl}" target="_blank" rel="noopener">${sourceTitle}</a><br><small>基準日 ${REVIEW_DATE}。出典が分野総覧の場合、個別語の逐語的定義まで公式確認済みとは扱わない。</small>`;answer.appendChild(box);
});
})();
