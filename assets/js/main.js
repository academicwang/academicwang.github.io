// ─── Mobile nav toggle ───
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
if (navToggle) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  document.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', () => navLinks.classList.remove('open')));
}

// ─── Mark active nav link by current page ───
(function() {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === path) link.classList.add('active');
    else link.classList.remove('active');
  });
})();

// ─── Abstract toggle (publications page) ───
function toggleAbstract(id, btn) {
  const el = document.getElementById(id);
  if (!el) return;
  const open = el.classList.toggle('open');
  btn.innerHTML = open ? '<i class="fas fa-file-alt"></i> Hide' : '<i class="fas fa-file-alt"></i> Abstract';
}

// ─── Citation modal ───
function showCitation(e) {
  e.preventDefault();
  document.getElementById('citeModal').classList.add('open');
}
function closeCiteModal() { document.getElementById('citeModal')?.classList.remove('open'); }
function switchCite(type, btn) {
  document.querySelectorAll('.cite-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('citeAPA').classList.toggle('hidden', type !== 'apa');
  document.getElementById('citeBib').classList.toggle('hidden', type !== 'bib');
}
function copyCitation() {
  const el = document.querySelector('.cite-text:not(.hidden)');
  if (!el) return;
  navigator.clipboard.writeText(el.textContent).then(() => {
    const btn = document.querySelector('.btn-copy');
    btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
    setTimeout(() => btn.innerHTML = '<i class="fas fa-copy"></i> Copy', 2000);
  });
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCiteModal(); });

// ─── Pub filter ───
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.pub-card').forEach(c => {
      c.style.display = (f === 'all' || c.dataset.type === f) ? 'grid' : 'none';
    });
  });
});

// ─── Scroll-reveal ───
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.style.opacity = '1';
      en.target.style.transform = 'translateY(0)';
      io.unobserve(en.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.pub-card, .book-card, .course-card, .about-info-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease, box-shadow .25s ease';
  io.observe(el);
});
