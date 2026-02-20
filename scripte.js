function closeBanner() {
  const banner = document.getElementById('ramadanBanner');
  if (banner) banner.style.display = 'none';
  document.documentElement.style.setProperty('--banner-height', '0px');
}

/* Zoom image */
function zoomImage(src) {
  const modal = document.getElementById('zoomModal');
  const img = document.getElementById('zoomImage');
  if (!modal || !img) return;
  img.src = src;
  modal.classList.add('active');
}

function closeZoom() {
  const modal = document.getElementById('zoomModal');
  const img = document.getElementById('zoomImage');
  if (!modal || !img) return;
  modal.classList.remove('active');
  img.src = '';
}

/* Click dehors + bouton X + ESC */
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('zoomModal');
  const closeBtn = document.getElementById('zoomClose');

  if (modal) modal.addEventListener('click', (e) => {
    if (e.target === modal) closeZoom();
  });

  if (closeBtn) closeBtn.addEventListener('click', closeZoom);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeZoom();
  });
});
