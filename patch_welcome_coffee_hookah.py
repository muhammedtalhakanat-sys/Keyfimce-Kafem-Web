from pathlib import Path

TARGETS = [
    Path('/home/ubuntu/upload/keyfimce-kafem-modern.html'),
    Path('/home/ubuntu/upload/github_clone/index.html'),
]

CSS_MARKER = '/* PROFESSIONAL MOTION POLISH V2 */'
JS_MARKER = '// PROFESSIONAL MOTION POLISH V2'

CSS = r'''

/* PROFESSIONAL MOTION POLISH V2 */
/* Sayfa ilerleme göstergesi: kullanıcının menüdeki konumunu sessizce belirtir. */
#pageProgress{position:fixed;top:0;left:0;z-index:120;width:100%;height:3px;pointer-events:none;background:rgba(255,255,255,.18);transform:translateZ(0)}
#pageProgress>span{display:block;width:100%;height:100%;background:linear-gradient(90deg,var(--rust),#e8a47d,#f7d2ae);box-shadow:0 1px 12px rgba(184,92,56,.36);transform:scaleX(var(--page-progress,0));transform-origin:left center;will-change:transform}

/* Görseller yüklendiğinde yalnızca bir kez kısa bir sinematik ışık geçişi oluşur. */
.product-card-image-wrap::before{content:'';position:absolute;inset:-18% -48%;z-index:3;pointer-events:none;opacity:0;background:linear-gradient(112deg,transparent 40%,rgba(255,255,255,.56) 50%,transparent 60%);transform:translateX(-96%) rotate(9deg)}
.product-card-image-wrap.image-ready::before{animation:productImageSoftReveal .78s cubic-bezier(.22,1,.36,1) both}
@keyframes productImageSoftReveal{0%{opacity:0;transform:translateX(-96%) rotate(9deg)}20%{opacity:.68}100%{opacity:0;transform:translateX(96%) rotate(9deg)}}

/* Çarkta 1 saniyelik otomatik seçime hazırlanırken merkez seçenek net biçimde vurgulanır. */
#catNav.wheel-awaiting-selection .wheel-focus::before{border-color:rgba(184,92,56,.72);box-shadow:0 0 0 0 rgba(184,92,56,.26);animation:wheelSelectionReady 1s cubic-bezier(.22,1,.36,1) both}
@keyframes wheelSelectionReady{0%{box-shadow:0 0 0 0 rgba(184,92,56,.05);transform:scale(.94)}72%{box-shadow:0 0 0 10px rgba(184,92,56,0);transform:scale(1.025)}100%{box-shadow:0 0 0 0 rgba(184,92,56,0);transform:scale(1)}}

/* Aktif alt navigasyon sekmesi için sade bir durum ışığı. */
#bottomNav .bnav-btn{position:relative}
#bottomNav .bnav-btn.active::after{content:'';position:absolute;left:50%;bottom:-3px;width:22px;height:3px;border-radius:99px;background:currentColor;box-shadow:0 2px 10px currentColor;transform:translateX(-50%) scaleX(.72);animation:navIndicatorIn .32s cubic-bezier(.22,1,.36,1) both}
@keyframes navIndicatorIn{from{opacity:0;transform:translateX(-50%) scaleX(.2)}to{opacity:1;transform:translateX(-50%) scaleX(1)}}

@media(max-width:680px){#pageProgress{height:2px}#pageProgress>span{box-shadow:none}.product-card-image-wrap.image-ready::before{animation-duration:.58s}}
@media(prefers-reduced-motion:reduce){#pageProgress{display:none}.product-card-image-wrap.image-ready::before,#catNav.wheel-awaiting-selection .wheel-focus::before,#bottomNav .bnav-btn.active::after{animation:none!important}}
'''

JS = r'''

    // PROFESSIONAL MOTION POLISH V2
    // Image reveal is bound once per card and uses transform/opacity only for low-cost rendering.
    function setupCardImageReveal() {
        const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduceMotion) return;
        document.querySelectorAll('.product-card-image-wrap .product-card-image').forEach(img => {
            if (img.dataset.imageRevealReady === 'true') return;
            img.dataset.imageRevealReady = 'true';
            const wrap = img.closest('.product-card-image-wrap');
            if (!wrap) return;
            const reveal = () => {
                wrap.classList.remove('image-ready');
                void wrap.offsetWidth;
                wrap.classList.add('image-ready');
            };
            if (img.complete && img.naturalWidth > 0) {
                requestAnimationFrame(reveal);
            } else {
                img.addEventListener('load', reveal, { once: true });
            }
        });
    }

    // Fixed reading progress gives orientation in long menus without occupying usable space.
    function setupPageProgress() {
        if (document.getElementById('pageProgress')) return;
        const bar = document.createElement('div');
        bar.id = 'pageProgress';
        bar.setAttribute('aria-hidden', 'true');
        bar.innerHTML = '<span></span>';
        document.body.appendChild(bar);
        const fill = bar.firstElementChild;
        let raf = 0;
        const update = () => {
            raf = 0;
            const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
            const progress = Math.max(0, Math.min(1, window.scrollY / max));
            fill.style.setProperty('--page-progress', progress.toFixed(4));
        };
        const requestUpdate = () => {
            if (!raf) raf = requestAnimationFrame(update);
        };
        window.addEventListener('scroll', requestUpdate, { passive: true });
        window.addEventListener('resize', requestUpdate, { passive: true });
        requestUpdate();
    }
'''

for path in TARGETS:
    if not path.exists():
        raise FileNotFoundError(path)
    html = path.read_text(encoding='utf-8')

    if CSS_MARKER not in html:
        if '\n</style>' not in html:
            raise RuntimeError(f'CSS closing tag not found: {path}')
        html = html.replace('\n</style>', CSS + '\n</style>', 1)

    replacements = [
        ("content: 'Yukarı-aşağı kaydırın · merkezde 2 sn bekleyin';", "content: 'Yukarı-aşağı kaydırın · merkezde 1 sn bekleyin';"),
        ("content: 'Sürükleyin · Ortada seçin';", "content: 'Sürükleyin · 1 sn bekleyin';"),
        ("            nav.classList.remove('wheel-dwell');\n", "            nav.classList.remove('wheel-dwell');\n            nav.classList.remove('wheel-awaiting-selection');\n"),
        ("            if (!item) return;\n            dwellTimer = setTimeout(() => {", "            if (!item) return;\n            nav.classList.add('wheel-awaiting-selection');\n            dwellTimer = setTimeout(() => {"),
        ("        setupCardParallax();\n        setupPremiumMotionLayer();", "        setupCardParallax();\n        setupPremiumMotionLayer();\n        setupCardImageReveal();"),
    ]
    for old, new in replacements:
        if old in html:
            html = html.replace(old, new, 1)
        elif new not in html:
            raise RuntimeError(f'Required patch marker not found in {path}: {old[:70]!r}')

    if JS_MARKER not in html:
        marker = '\n    setupPremiumMotionLayer();\n\n</script>'
        if marker not in html:
            raise RuntimeError(f'Final script marker not found: {path}')
        html = html.replace(marker, JS + '\n    setupPremiumMotionLayer();\n    setupPageProgress();\n\n</script>', 1)

    path.write_text(html, encoding='utf-8')
    print(f'Patched: {path}')
