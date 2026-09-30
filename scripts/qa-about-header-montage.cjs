process.env.PLAYWRIGHT_BROWSERS_PATH='0';
const { chromium } = require('playwright');
const fs=require('fs');
// Build a contact sheet of mobile frames (4 per row) for faster review.
(async()=>{
  const route=process.argv[2];
  const files=fs.readdirSync('qa-screens/frames').filter(f=>f.startsWith(route+'_mobile_')).sort();
  const imgs=files.map(f=>'data:image/png;base64,'+fs.readFileSync('qa-screens/frames/'+f).toString('base64'));
  const b=await chromium.launch();const p=await b.newPage({viewport:{width:1600,height:800}});
  await p.setContent('<body style="margin:0;display:flex;flex-wrap:wrap;gap:6px;background:#888">'+imgs.map(s=>`<img src="${s}" style="width:390px">`).join('')+'</body>');
  const h=await p.evaluate(()=>document.body.scrollHeight);
  for(let i=0;i*1600<h;i++){await p.screenshot({fullPage:true,path:`qa-screens/about-header/${route}_sheet_${i}.png`,clip:{x:0,y:i*1600,width:1600,height:Math.min(1600,h-i*1600)}});console.log(i)}
  await b.close();
})();
