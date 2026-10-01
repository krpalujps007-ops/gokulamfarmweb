const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
if(toggle){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open);});}
document.querySelectorAll('.main-nav a').forEach(link=>link.addEventListener('click',()=>nav.classList.remove('open')));
const sections=[...document.querySelectorAll('main section[id]')];
const links=[...document.querySelectorAll('.main-nav a[href^="#"]')];
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(l=>l.classList.remove('active'));const active=links.find(l=>l.getAttribute('href')==='#'+entry.target.id);if(active)active.classList.add('active')}})},{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(s=>observer.observe(s));


// Go-Seva enquiry -> WhatsApp
const sevaForm = document.getElementById('sevaForm');
if (sevaForm) {
  sevaForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const data = new FormData(sevaForm);
    const name = (data.get('name') || '').trim();
    const phone = (data.get('phone') || '').trim();
    const email = (data.get('email') || '').trim();
    const country = (data.get('country') || '').trim();
    const seva = (data.get('seva') || '').trim();
    const contribution = (data.get('contribution') || '').trim();
    const message = (data.get('message') || '').trim();
    const text = [
      'Hare Krishna 🙏',
      '',
      'I would like to enquire about Go-Seva at Gokulam Goshala.',
      '',
      `Name: ${name}`,
      `WhatsApp: ${phone}`,
      `Email: ${email || 'Not provided'}`,
      `Country: ${country || 'Not provided'}`,
      `Seva Interested In: ${seva}`,
      `Preferred Contribution: ${contribution || 'Not provided'}`,
      '',
      'Message:',
      message || 'I would like to know more about this seva.',
      '',
      'Thank you.'
    ].join('\n');
    const url = 'https://wa.me/60176700085?text=' + encodeURIComponent(text);
    window.open(url, '_blank', 'noopener');
  });
}
