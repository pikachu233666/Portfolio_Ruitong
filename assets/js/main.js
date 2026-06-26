document.addEventListener('DOMContentLoaded',()=> {
  document.querySelectorAll('form').forEach(f=>f.addEventListener('submit',e=>e.preventDefault()));

});

document.addEventListener('DOMContentLoaded',()=>{
const b=document.querySelector('.mobile-menu-toggle');
const m=document.querySelector('.mobile-menu');
const c=document.querySelector('.mobile-menu-close');
if(b&&m)b.onclick=()=>m.classList.add('open');
if(c&&m)c.onclick=()=>m.classList.remove('open');
document.querySelectorAll('.mobile-menu a').forEach(a=>a.onclick=()=>m.classList.remove('open'));
});
