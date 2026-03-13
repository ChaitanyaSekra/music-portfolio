// ══════════════════════════════════════
//  SEKRA OG — main.js
// ══════════════════════════════════════

// ── Page routing ──────────────────────
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  document.getElementById('nav-' + id).classList.add('active');
  window.scrollTo(0, 0);
  setTimeout(observeReveals, 50);
}

// ── Tracklist toggle (EPs / Albums) ──
function toggleTracklist(btn) {
  const tracklist = btn.nextElementSibling;
  const isOpen = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', !isOpen);
  btn.classList.toggle('open', !isOpen);
  if (isOpen) {
    tracklist.hidden = true;
  } else {
    tracklist.hidden = false;
  }
}

// ── Legacy accordion (kept for compat) ──
function toggleAcc(el) { el.classList.toggle('open'); }

// ── Filter tracks ─────────────────────
function filterTracks(type, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const showProj    = (type === 'all' || type === 'ep');
  const showSingles = (type === 'all' || type === 'single');

  document.getElementById('sec-proj').style.display    = showProj    ? '' : 'none';
  document.getElementById('sec-singles').style.display = showSingles ? '' : 'none';
}

// ── Grid / List view toggle ───────────
function setView(mode) {
  document.getElementById('btn-grid').classList.toggle('active', mode === 'grid');
  document.getElementById('btn-list').classList.toggle('active', mode === 'list');
  document.getElementById('grid-view').style.display = mode === 'grid' ? '' : 'none';
  document.getElementById('list-view').style.display = mode === 'list' ? 'flex' : 'none';
}

// ── Scroll reveal ─────────────────────
function observeReveals() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('on'), i * 90);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal:not(.on)').forEach(el => obs.observe(el));
}

// ── Init ──────────────────────────────
showPage('home');
