const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
if(toggle){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open);});}
document.querySelectorAll('.main-nav a').forEach(link=>link.addEventListener('click',()=>nav.classList.remove('open')));
const sections=[...document.querySelectorAll('main section[id]')];
const links=[...document.querySelectorAll('.main-nav a[href^="#"]')];
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(l=>l.classList.remove('active'));const active=links.find(l=>l.getAttribute('href')==='#'+entry.target.id);if(active)active.classList.add('active')}})},{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(s=>observer.observe(s));
