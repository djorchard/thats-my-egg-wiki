/* Load a public status snapshot as a script so local file URLs also work. */
const known=new Map([...document.querySelectorAll('[data-job]')].map(row=>[row.dataset.job,row]));
let lastStates=new Map([...known].map(([id,row])=>[id,row.dataset.initialState]));
window.CreatureMediaQueueUpdate=status=>{
  const unresponsive=status.worker==='running'&&Date.now()-Date.parse(status.heartbeat)>30000;
  document.getElementById('queue-worker').textContent=unresponsive?'not responding, restart the queue worker':status.worker;
  let changed=false;
  for(const job of status.jobs){
    const row=known.get(job.id);
    if(row){row.querySelector('[data-state]').textContent=job.state+': '+job.stage;row.querySelector('progress').value=job.progress;}
    else changed=true;
    if(lastStates.has(job.id)&&lastStates.get(job.id)!==job.state&&['completed','failed','stale','cancelled'].includes(job.state))changed=true;
    lastStates.set(job.id,job.state);
  }
  if(changed){
    const output=document.getElementById('queue-new-results');
    output.textContent='Queue results changed. ';
    const refresh=document.createElement('button');refresh.type='button';refresh.textContent='Refresh results';
    refresh.style.cssText='border:0;border-radius:8px;padding:8px 12px;background:#335fff;color:white;font:inherit;cursor:pointer';
    refresh.addEventListener('click',()=>location.reload());output.append(refresh);
  }
};
function update(){const script=document.createElement('script');script.src='assets/creature-queue/status.js?v='+Date.now();script.onload=script.onerror=()=>script.remove();document.body.append(script);}
update();setInterval(update,5000);
