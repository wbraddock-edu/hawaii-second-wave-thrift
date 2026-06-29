const html = document.documentElement;
const themeBtn = document.getElementById('theme-toggle');
const saved = localStorage.getItem('theme');
if (saved) html.setAttribute('data-theme', saved);
if (themeBtn) {
  themeBtn.textContent = html.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
  themeBtn.addEventListener('click', () => {
    const cur = html.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    themeBtn.textContent = next === 'dark' ? '☀️' : '🌙';
  });
}
const ham = document.getElementById('hamburger');
const nav = document.getElementById('nav-links');
if (ham && nav) { ham.addEventListener('click', () => { nav.classList.toggle('open'); ham.setAttribute('aria-expanded', nav.classList.contains('open')); }); }
const reveals = document.querySelectorAll('.reveal');
if (reveals.length) { const obs = new IntersectionObserver(e => e.forEach(x => { if (x.isIntersecting) { x.target.classList.add('visible'); obs.unobserve(x.target); } }), { threshold: 0.1 }); reveals.forEach(r => obs.observe(r)); }
const btt = document.getElementById('back-to-top');
if (btt) { window.addEventListener('scroll', () => btt.classList.toggle('visible', window.scrollY > 400)); btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' })); }
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => { const a = btn.nextElementSibling; const ic = btn.querySelector('.faq-icon'); const open = a.classList.contains('open'); document.querySelectorAll('.faq-answer.open').forEach(x => { x.classList.remove('open'); x.previousElementSibling.querySelector('.faq-icon').classList.remove('open'); }); if (!open) { a.classList.add('open'); ic.classList.add('open'); } });
});
const steps = document.querySelectorAll('.booking-step');
const stepDots = document.querySelectorAll('.step');
let cur = 0;
function showStep(n) { steps.forEach((s, i) => s.classList.toggle('active', i === n)); stepDots.forEach((d, i) => { d.classList.toggle('active', i === n); d.classList.toggle('done', i < n); }); cur = n; }
document.querySelectorAll('[data-next]').forEach(b => b.addEventListener('click', () => { if (cur < steps.length - 1) showStep(cur + 1); }));
document.querySelectorAll('[data-prev]').forEach(b => b.addEventListener('click', () => { if (cur > 0) showStep(cur - 1); }));
document.querySelectorAll('.service-option').forEach(o => o.addEventListener('click', () => { document.querySelectorAll('.service-option').forEach(x => x.classList.remove('selected')); o.classList.add('selected'); }));
if (steps.length) showStep(0);
const loginForm = document.getElementById('admin-login-form');
const adminDash = document.getElementById('admin-dash');
const loginSection = document.getElementById('login-section');
if (loginForm) { loginForm.addEventListener('submit', e => { e.preventDefault(); if (document.getElementById('admin-pw').value === 'admin123') { loginSection.style.display = 'none'; adminDash.style.display = 'block'; } else { document.getElementById('login-error').textContent = 'Incorrect. Try admin123.'; } }); }
