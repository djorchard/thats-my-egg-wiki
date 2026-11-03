(() => {
 const table=document.getElementById('creature-stats-table'); if(!table)return;
 const body=table.tBodies[0], rows=Array.from(body.rows), search=document.getElementById('creature-stats-search'), count=document.getElementById('creature-stats-count');
 const filter=()=>{const q=search.value.trim().toLocaleLowerCase();let visible=0;for(const row of rows){row.hidden=!row.textContent.toLocaleLowerCase().includes(q);if(!row.hidden)visible++;}count.textContent=`${visible} of ${rows.length} creatures`;table.dispatchEvent(new Event("creaturefilter"));};
 search.addEventListener('input',filter);filter();
 for(const button of table.querySelectorAll('button[data-stats-column]'))button.addEventListener('click',()=>{
  const th=button.closest('th'), ascending=th.getAttribute('aria-sort')!=='ascending', col=Number(button.dataset.statsColumn), numeric=button.dataset.sortKind==='number';
  for(const header of table.querySelectorAll('th[aria-sort]'))header.setAttribute('aria-sort','none');th.setAttribute('aria-sort',ascending?'ascending':'descending');
  const sorted=Array.from(body.rows).sort((a,b)=>{const x=a.cells[col].dataset.sortValue,y=b.cells[col].dataset.sortValue;if(x==='')return y===''?0:1;if(y==='')return -1;const result=numeric?Number(x)-Number(y):x.localeCompare(y,undefined,{numeric:true,sensitivity:'base'});return ascending?result:-result;});
  body.append(...sorted);
 });
})();
