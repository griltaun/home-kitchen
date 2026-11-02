const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.topbar nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
document.querySelectorAll('.topbar nav a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false');}));
const style=document.createElement('style');style.textContent='@media(max-width:760px){.topbar nav.open{display:flex;position:absolute;z-index:5;top:72px;left:0;right:0;background:var(--paper);padding:22px 7%;flex-direction:column;gap:20px;border-bottom:1px solid var(--line)}}';document.head.appendChild(style);
document.querySelector('.menu-paper img')?.addEventListener('click',e=>{if(e.target.requestFullscreen)e.target.requestFullscreen();});
