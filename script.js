const products=[
['Adidas','ドット ファイヤーバードジャージ','S','160,000','varQgAese-f51570d0f4d0.jpg','5sw48'],
['Levi’s','00s Y2K キャンバストート サンド','OS','79,000','Kl0jUNTIh-fc612c3cddbf.jpg','5zab1'],
['Levi’s','00s サンドワーク ミリタリーキャップ','OS','69,000','XZHuHtPXqZ-1774794914996.png','53l4e'],
['Puma','レッド サイドライン トラックトップ','S','139,000','qCkHjdqa6-233dd1b892f8.jpg','5svar'],
['Levi’s','00s Y2K キャンバストート バーガンディ','OS','69,000','OHT55iCcC-9ac5fb5ae0fc.jpg','5wrzk'],
['Dr. Martens','1461 ブラッシュオフ','250','129,000','y26GLupyr-1872debec47d.jpg','61ywl'],
['Puma','レッド サイドライン トラックトップ','L','189,000','_w2_eXfw5-2fad1d628ee6.jpg','65ji8'],
['Alexander McQueen','PUMA ブレース ミッド ハイトップ','270','319,000','3oS62S4Gt-f2fc9c277f24.jpg','5tbnx'],
['Adidas','ユーロパ トラックジャージ','L','189,000','Gw8KByGTe-ea7e832e1fc4.jpg','5z0n0'],
['Timberland','3アイ クラシック ラグ ボートシューズ','265','139,000','KsyvZhpYN-de4a3e0671b6.jpg','5phkm'],
['KAPITAL','スマイル タイダイ キャップ','OS','150,000','_-vCe_z6r-4d71357308fa.png','5fi1v'],
['Converse','ワンスター ロー ブラック','220','79,000','HwgIXHerj7-1768385486987.png','4dtlk'],
['Onitsuka Tiger','メキシコ リンカンブーツ ブラック','245','159,000','wNUyXoRdO-c56c2168a0eb.jpg','6616y'],
['Comme des Garçons Homme','ウール ヘリンボーン ハンチング','OS','189,000','Bjo6-o9r4-401d37b5680b.jpg','5yqk8'],
['Vivienne Westwood','スカル刺繍パッチ ボールキャップ','OS','159,000','mt9Zosd54o-1768305188269.png','4dikh'],
['Dr. Martens','1461 レオパード 3ホール','230','139,000','l8zDQh-_S_-1773555325500.png','4wgop'],
['Adidas','ユーロパ トラックジャージ','M','179,000','HKNUZzxlm-237b3086bc61.jpg','5z04o'],
['Timberland','クラシック 2アイ ボートシューズ','270','98,000','ZG7xerRmcV-1774867646164.png','51rfn'],
['Nike ACG','ヴィンテージ ACG バックパック','OS','89,000','daU5X-wjt--PhotoRoom-20230720_144804_1.png','mdh0'],
['Dr. Martens','スエード デザートブーツ ブラック','270','79,000','pi6MDDmEB-a1eea24c591c.jpg','5tf7n'],
['Levi’s','00s スタッズ デニム ミニホーボー','OS','129,000','6fuq-Q4fz5-1774795996949.png','5p81u'],
['Jean Paul Gaultier','925 バーガンディ レジンリング','OS','359,000','dTeJJ5DTO-02720af4c46c.jpg','5z6be'],
['Roen','AC/DC スカル ミリタリーキャップ','M','359,000','7MiSU-sUQ-cc775f95ac88.jpg','5po4d'],
['Asics','ヴィンテージ ゴープコア キャップ','OS','39,000','wJjM-GUpXx-1692609114563.png','o5it'],
['Vintage','USJ スパイダーマン キャップ','OS','59,000','Y0jfVKTr41-1771163638094.png','4nw79'],
['Timberland','プレミアム 6インチ ブーツ ピンク','250','109,000','sX2gNKoA8-88ecb05fcea5.jpg','64aur'],
['Dr. Martens','1461 MONO ローファー','270','139,000','a3VbtMsEB-5e8e3ce88c9a.jpg','64au1'],
['Camper','MIL 1913 レザー ダービー','270','159,000','eaB5v_vc--8f64e8355755.jpg','5qxmr'],
['Levi’s','00s Y2K キャンバストート サンド','OS','69,000','x4ly0avH--bf5add275a03.jpg','5ws1t'],
['New Era','DC オールオーバー モノグラム キャップ','OS','59,000','gyY93sFtu-61fc8459b0d3.jpg','63bu2']
].map((p,i)=>({id:i+1,brand:p[0],name:p[1],size:p[2],price:p[3],image:`https://image.production.fruitsfamily.com/public/product/resized%40width620/${p[4]}`,url:`https://fruitsfamily.com/product/${p[5]}`}));
const grid=document.querySelector('#productGrid'),modal=document.querySelector('#buyDialog');
grid.innerHTML=products.map((p,i)=>`<article class="product"><button data-index="${i}" aria-label="${p.brand} ${p.name}を購入"><img loading="lazy" src="${p.image}" alt="${p.brand} ${p.name}"></button><div class="product-info"><h3>${p.brand} — ${p.name}</h3><p>SIZE ${p.size}</p><strong>₩${p.price}</strong></div></article>`).join('');
function openProduct(p){document.querySelector('#modalName').textContent=`${p.brand} — ${p.name}`;document.querySelector('#modalPrice').textContent=`₩${p.price}`;document.querySelector('#fruitLink').href=p.url;const q=encodeURIComponent(`${p.brand} ${p.name}`);document.querySelector('#amazonLink').href=`https://www.amazon.co.jp/s?k=${q}`;document.querySelector('#mercariLink').href=`https://jp.mercari.com/search?keyword=${q}`;modal.showModal()}
grid.addEventListener('click',e=>{const b=e.target.closest('[data-index]');if(b)openProduct(products[Number(b.dataset.index)])});document.querySelector('.close').addEventListener('click',()=>modal.close());modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});
let slide=0;const slides=[...document.querySelectorAll('.hero-slide')],dots=[...document.querySelectorAll('.hero-progress i')];function showSlide(n){slides.forEach((s,i)=>s.classList.toggle('is-active',i===n));dots.forEach((d,i)=>d.classList.toggle('active',i===n))}showSlide(0);setInterval(()=>{slide=(slide+1)%slides.length;showSlide(slide)},6500);
const header=document.querySelector('.site-header');document.querySelector('.menu-toggle').addEventListener('click',()=>header.classList.toggle('open'));header.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>header.classList.remove('open')));
