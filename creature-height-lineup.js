(() => {
 const table=document.getElementById('creature-stats-table'),canvas=document.getElementById('height-lineup');if(!table||!canvas)return;
 const zoom=document.getElementById('height-lineup-zoom'),scale=document.getElementById('height-lineup-scale'),status=document.getElementById('height-lineup-status'),download=document.getElementById('height-lineup-download');
 const rows=[...table.tBodies[0].rows], cache=new Map();let revision=0;
 async function artwork(src){
  if(cache.has(src))return cache.get(src);
  const pending=(async()=>{const image=new Image();image.src=src;await image.decode();const cut=document.createElement('canvas');cut.width=image.naturalWidth;cut.height=image.naturalHeight;const ctx=cut.getContext('2d',{willReadFrequently:true});ctx.drawImage(image,0,0);const p=ctx.getImageData(0,0,cut.width,cut.height).data;let left=cut.width,top=cut.height,right=-1,bottom=-1;for(let y=0;y<cut.height;y++)for(let x=0;x<cut.width;x++)if(p[(y*cut.width+x)*4+3]>16){left=Math.min(left,x);right=Math.max(right,x);top=Math.min(top,y);bottom=Math.max(bottom,y);}if(right<left)throw Error('Empty artwork');return{image,left,top,width:right-left+1,height:bottom-top+1};})();cache.set(src,pending);return pending;
 }
 async function render(){
  const token=++revision,ppu=Number(zoom.value);scale.textContent=`${ppu} pixels per stud`;download.disabled=true;
  const selected=rows.filter(r=>!r.hidden&&r.cells[0].querySelector('img')&&Number(r.cells[5].dataset.sortValue)>0).map(r=>({name:r.cells[1].textContent.trim(),height:Number(r.cells[5].dataset.sortValue),src:r.cells[0].querySelector('img').src})).sort((a,b)=>a.height-b.height||a.name.localeCompare(b.name));
  const results=await Promise.all(selected.map(async r=>{try{return{...r,art:await artwork(r.src)}}catch{return null}}));if(token!==revision)return;
  const creatures=results.filter(Boolean),missing=selected.length-creatures.length,max=Math.max(1,...creatures.map(c=>c.height)),baseline=40+Math.ceil(max)*ppu;
  let x=65;for(const c of creatures){c.drawHeight=c.height*ppu;c.drawWidth=c.drawHeight*c.art.width/c.art.height;c.slot=Math.max(100,c.drawWidth+24);c.x=x+c.slot/2;x+=c.slot;}
  canvas.width=Math.max(400,Math.ceil(x+20));canvas.height=Math.ceil(baseline+100);const ctx=canvas.getContext('2d');ctx.fillStyle='#11151c';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.font='13px system-ui';ctx.textAlign='right';
  for(let n=0;n<=Math.ceil(max);n++){const y=baseline-n*ppu;ctx.strokeStyle=n===0?'#e4e9f1':'#303845';ctx.lineWidth=n===0?2:1;ctx.beginPath();ctx.moveTo(55,y);ctx.lineTo(canvas.width-12,y);ctx.stroke();ctx.fillStyle='#d7deea';ctx.fillText(`${n}`,45,y+4);}
  ctx.textAlign='left';ctx.fillText('studs',12,18);
  for(const c of creatures){const a=c.art;ctx.drawImage(a.image,a.left,a.top,a.width,a.height,c.x-c.drawWidth/2,baseline-c.drawHeight,c.drawWidth,c.drawHeight);ctx.fillStyle='#f3f5f9';ctx.font='bold 13px system-ui';ctx.textAlign='center';const words=c.name.split(' ');let line='',lines=[];for(const word of words){const next=line?line+' '+word:word;if(ctx.measureText(next).width>c.slot-8&&line){lines.push(line);line=word;}else line=next;}lines.push(line);lines.forEach((line,i)=>ctx.fillText(line,c.x,baseline+22+i*17));ctx.font='13px system-ui';ctx.fillStyle='#aebbd0';ctx.fillText(`${c.height.toFixed(2).replace(/0+$/,'').replace(/\.$/,'')} studs`,c.x,baseline+28+lines.length*17);}
  canvas.dataset.creatureCount=creatures.length;canvas.dataset.pixelsPerStud=ppu;canvas.dataset.heights=JSON.stringify(creatures.map(c=>c.height));canvas.dataset.drawHeights=JSON.stringify(creatures.map(c=>c.drawHeight));
  status.textContent=`${creatures.length} creatures shown. Scroll sideways to compare.${missing?' '+missing+' artwork files could not load.':''}`;download.disabled=!creatures.length;
 }
 table.addEventListener('creaturefilter',render);zoom.addEventListener('input',render);
 download.addEventListener('click',()=>canvas.toBlob(blob=>{if(!blob)return;const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='creature-height-lineup.png';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)},'image/png'));
 render();
})();
