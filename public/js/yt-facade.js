// Click-to-load: swap a YouTube Short thumbnail link for a youtube-nocookie iframe.
document.addEventListener('click', function (e) {
  var a = e.target.closest && e.target.closest('a[data-yt-embed]');
  if (!a || e.metaKey || e.ctrlKey || e.shiftKey) return;
  e.preventDefault();
  var f = document.createElement('iframe');
  f.src = a.dataset.ytEmbed;
  f.title = a.dataset.ytTitle;
  f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
  f.allowFullscreen = true;
  f.referrerPolicy = 'strict-origin-when-cross-origin';
  f.className = 'short__frame';
  a.replaceWith(f);
});
