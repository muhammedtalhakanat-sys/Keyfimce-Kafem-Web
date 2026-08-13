from pathlib import Path

TARGETS = [
    Path('/home/ubuntu/upload/keyfimce-kafem-modern.html'),
    Path('/home/ubuntu/upload/github_clone/index.html'),
]

CSS_MARKER = '/* WHEEL SENSITIVITY + ESPRESSO DARK THEME V6 */'
JS_MARKER = '/* WHEEL SENSITIVITY V6 */'

CSS_PATCH = r'''

/* WHEEL SENSITIVITY + ESPRESSO DARK THEME V6 */
/* Fare ve dokunmatik sürükleme için daha kararlı hit-area ve manyetik fren durumu. */
#catNav.wheel-pro-mode{
  -webkit-user-select:none;
  user-select:none;
  -webkit-tap-highlight-color:transparent;
  touch-action:none;
}
#catNav.wheel-pro-mode.wheel-settling{cursor:grabbing;}
#catNav.wheel-pro-mode.wheel-settling .cat-pill{transition:transform .24s cubic-bezier(.22,1,.36,1),opacity .18s ease,filter .18s ease,box-shadow .18s ease!important;}
@media (pointer:fine) and (min-width:681px){
  #catNav.wheel-pro-mode{--wheel-drag-threshold:6px;--wheel-drag-gain:1.02;}
}
@media (pointer:coarse), (max-width:680px){
  #catNav.wheel-pro-mode{--wheel-drag-threshold:10px;--wheel-drag-gain:.94;}
  #catNav.wheel-pro-mode .cat-pill{min-height:56px;}
}

/* Espresso yüzeyleri, karamel vurgular ve krem metinler. */
html[data-theme="dark"]{
  --bg:#160f0c;
  --surface:#281a14;
  --surface2:#342118;
  --border:rgba(255,232,211,.16);
  --border2:rgba(255,218,188,.30);
  --rust:#d98257;
  --rust-dk:#ffb184;
  --rust-lt:#4b2b20;
  --gold:#e2b27e;
  --ink:#fff4e9;
  --muted:#d8bca9;
  --muted2:#ad8c7a;
}
html[data-theme="dark"] body{
  color:var(--ink);
  background:
    radial-gradient(circle at 12% -8%,rgba(183,106,65,.24),transparent 31rem),
    radial-gradient(circle at 92% 18%,rgba(112,61,39,.16),transparent 27rem),
    linear-gradient(145deg,#160f0c 0%,#21130e 54%,#100a08 100%)!important;
}
html[data-theme="dark"] #mainHeader,
html[data-theme="dark"] .glass,
html[data-theme="dark"] .wifi-bar,
html[data-theme="dark"] .search-wrap,
html[data-theme="dark"] .search-wrap input,
html[data-theme="dark"] #bottomNav,
html[data-theme="dark"] #langToggleBtn,
html[data-theme="dark"] #themeToggleBtn,
html[data-theme="dark"] .admin-panel,
html[data-theme="dark"] .admin-stat-card,
html[data-theme="dark"] .ap-admin-toolbar,
html[data-theme="dark"] .ap-product-editor{
  background:linear-gradient(145deg,rgba(52,33,24,.96),rgba(36,23,17,.96))!important;
  border-color:var(--border2)!important;
  color:var(--ink);
  box-shadow:0 14px 34px rgba(0,0,0,.24),inset 0 1px 0 rgba(255,237,220,.045);
}
html[data-theme="dark"] #mainHeader::before{
  background:linear-gradient(to bottom,rgba(22,15,12,.04),rgba(22,15,12,.48) 65%,#160f0c 100%)!important;
}
html[data-theme="dark"] #productGrid>.prod-card,
html[data-theme="dark"] .prod-card{
  background:linear-gradient(145deg,#342219 0%,#241610 100%)!important;
  border-color:var(--border2)!important;
  box-shadow:0 15px 32px rgba(0,0,0,.28),inset 0 1px 0 rgba(255,235,214,.035)!important;
}
html[data-theme="dark"] #productGrid>.prod-card:hover{box-shadow:0 20px 38px rgba(0,0,0,.36),0 0 0 1px rgba(217,130,87,.22)!important;}
html[data-theme="dark"] .product-card-image-wrap,
html[data-theme="dark"] .detail-hero{
  background:linear-gradient(135deg,#5a3626,#2e1b14)!important;
}
html[data-theme="dark"] .product-card-category,
html[data-theme="dark"] .product-card-description,
html[data-theme="dark"] .detail-description,
html[data-theme="dark"] .detail-stock,
html[data-theme="dark"] .admin-stat-label,
html[data-theme="dark"] .ap-save-hint,
html[data-theme="dark"] .ap-product-category,
html[data-theme="dark"] .menu-access-hint{color:var(--muted)!important;}
html[data-theme="dark"] .product-card-title,
html[data-theme="dark"] .detail-title,
html[data-theme="dark"] .ap-product-title,
html[data-theme="dark"] .admin-stat-value{color:var(--ink)!important;}
html[data-theme="dark"] .product-card-price,
html[data-theme="dark"] .detail-price,
html[data-theme="dark"] .detail-category,
html[data-theme="dark"] .ap-preview-link{color:var(--rust-dk)!important;}
html[data-theme="dark"] .product-detail-btn,
html[data-theme="dark"] .detail-action-main,
html[data-theme="dark"] .ap-stock-filter.active{background:linear-gradient(135deg,#d98257,#a95334)!important;color:#fff8f1!important;}
html[data-theme="dark"] .detail-action-soft,
html[data-theme="dark"] .ap-stock-filter,
html[data-theme="dark"] .ap-product-editor input,
html[data-theme="dark"] .ap-product-editor textarea,
html[data-theme="dark"] .ap-product-editor select{
  background:#3a251b!important;
  color:var(--ink)!important;
  border-color:var(--border2)!important;
}
html[data-theme="dark"] .modal-box,
html[data-theme="dark"] .detail-modal-box{background:linear-gradient(145deg,#342118,#241610)!important;border-color:var(--border2)!important;color:var(--ink);}
html[data-theme="dark"] .detail-close{background:#3a251b!important;color:var(--ink)!important;border-color:var(--border2)!important;}
html[data-theme="dark"] #catNav.wheel-pro-mode:not(.wheel-collapsed){
  background:
    linear-gradient(90deg,rgba(255,224,197,.035),transparent 20%,transparent 80%,rgba(217,130,87,.09)),
    radial-gradient(ellipse at 50% 50%,#4b3024 0%,#302016 56%,#20130f 100%)!important;
  border-color:rgba(217,130,87,.42)!important;
  box-shadow:inset 0 1px 0 rgba(255,235,215,.07),inset 0 24px 34px rgba(0,0,0,.20),inset 0 -24px 34px rgba(0,0,0,.25),0 18px 38px rgba(0,0,0,.32)!important;
}
html[data-theme="dark"] #catNav.wheel-pro-mode:not(.wheel-collapsed)::before,
html[data-theme="dark"] #catNav.wheel-pro-mode:not(.wheel-collapsed)::after{color:rgba(255,230,211,.78)!important;}
html[data-theme="dark"] #catNav.wheel-pro-mode:not(.wheel-collapsed) .wheel-focus{color:#fff8ef!important;background:linear-gradient(135deg,#d98257,#9e4b30)!important;border-color:rgba(255,230,211,.48)!important;}
html[data-theme="dark"] #catNav.wheel-collapsed{background:linear-gradient(135deg,#3e281e,#251711)!important;border-color:rgba(217,130,87,.38)!important;box-shadow:0 10px 24px rgba(0,0,0,.32),inset 0 0 0 1px rgba(255,225,202,.05)!important;}
html[data-theme="dark"] #catNav.wheel-collapsed::after{color:rgba(255,231,214,.86)!important;}
html[data-theme="dark"] .menu-end-card{background:linear-gradient(145deg,#3d281e,#251711 74%)!important;border-color:rgba(217,130,87,.38)!important;box-shadow:0 18px 36px rgba(0,0,0,.34),inset 0 1px 0 rgba(255,225,202,.055)!important;}
html[data-theme="dark"] .menu-end-card-copy strong{color:var(--ink)!important;}
html[data-theme="dark"] .menu-end-card-copy span{color:var(--muted)!important;}
html[data-theme="dark"] .menu-end-card-actions button{background:rgba(217,130,87,.16)!important;color:var(--rust-dk)!important;border-color:rgba(217,130,87,.26)!important;}
html[data-theme="dark"] .welcome-card{background:linear-gradient(145deg,rgba(63,40,29,.98),rgba(35,22,16,.98))!important;border-color:rgba(255,226,205,.24)!important;box-shadow:0 30px 70px rgba(0,0,0,.38)!important;}
html[data-theme="dark"] .welcome-orb{background:linear-gradient(145deg,#5a3828,#2c1b14)!important;border-color:rgba(255,226,205,.24)!important;}
html[data-theme="dark"] .welcome-eyebrow{color:var(--rust-dk)!important;}
html[data-theme="dark"] .welcome-progress{background:rgba(255,220,196,.15)!important;}
html[data-theme="dark"] .welcome-progress span{background:linear-gradient(90deg,#d98257,#ffbf91)!important;}
html[data-theme="dark"] ::placeholder{color:var(--muted2)!important;opacity:1;}
html[data-theme="dark"] input:focus,
html[data-theme="dark"] textarea:focus,
html[data-theme="dark"] select:focus{outline-color:var(--rust)!important;box-shadow:0 0 0 3px rgba(217,130,87,.16)!important;}

@media (prefers-color-scheme:dark){
  html[data-theme="auto"]{
    --bg:#160f0c;--surface:#281a14;--surface2:#342118;--border:rgba(255,232,211,.16);--border2:rgba(255,218,188,.30);
    --rust:#d98257;--rust-dk:#ffb184;--rust-lt:#4b2b20;--gold:#e2b27e;--ink:#fff4e9;--muted:#d8bca9;--muted2:#ad8c7a;
  }
  html[data-theme="auto"] body{background:radial-gradient(circle at 12% -8%,rgba(183,106,65,.24),transparent 31rem),linear-gradient(145deg,#160f0c,#21130e 54%,#100a08)!important;color:var(--ink);}
  html[data-theme="auto"] #productGrid>.prod-card,html[data-theme="auto"] .prod-card,html[data-theme="auto"] .modal-box{background:linear-gradient(145deg,#342219,#241610)!important;border-color:var(--border2)!important;}
  html[data-theme="auto"] #mainHeader,html[data-theme="auto"] .glass,html[data-theme="auto"] .wifi-bar,html[data-theme="auto"] .search-wrap input,html[data-theme="auto"] #bottomNav{background:linear-gradient(145deg,rgba(52,33,24,.96),rgba(36,23,17,.96))!important;border-color:var(--border2)!important;color:var(--ink);}
  html[data-theme="auto"] #catNav.wheel-pro-mode:not(.wheel-collapsed){background:radial-gradient(ellipse at 50% 50%,#4b3024,#302016 56%,#20130f)!important;border-color:rgba(217,130,87,.42)!important;}
  html[data-theme="auto"] .product-card-title,html[data-theme="auto"] .detail-title{color:var(--ink)!important;}
  html[data-theme="auto"] .product-card-description,html[data-theme="auto"] .detail-description,html[data-theme="auto"] .menu-access-hint{color:var(--muted)!important;}
}
'''

JS_HELPERS = r'''
        /* WHEEL SENSITIVITY V6 */
        let settling = false;
        let dragPointerType = 'touch';
        let dragThreshold = 10;
        let dragGain = .94;
        let dragMoved = false;
        let filteredDistance = 0;
        let lastPointerY = 0;
        let motionSamples = [];
        let magneticRaf = 0;

        function configureDragProfile(pointerType) {
            dragPointerType = pointerType || 'touch';
            const coarse = dragPointerType === 'touch' || dragPointerType === 'pen' || (window.matchMedia && window.matchMedia('(pointer: coarse)').matches);
            dragThreshold = coarse ? 10 : 6;
            dragGain = coarse ? .94 : 1.02;
        }

        function resetMotionFilter() {
            filteredDistance = 0;
            lastPointerY = 0;
            motionSamples = [];
        }

        function sampleMotion(distance) {
            const now = performance.now();
            motionSamples.push({ distance, time: now });
            if (motionSamples.length > 5) motionSamples.shift();
            return now;
        }

        function getFilteredDistance(rawDistance) {
            const target = rawDistance * dragGain;
            const smoothing = dragPointerType === 'mouse' ? .62 : .48;
            filteredDistance += (target - filteredDistance) * smoothing;
            return filteredDistance;
        }

        function getMotionVelocity() {
            if (motionSamples.length < 2) return 0;
            const first = motionSamples[0];
            const last = motionSamples[motionSamples.length - 1];
            return (last.distance - first.distance) / Math.max(1, last.time - first.time);
        }

        function magneticSnap(targetIndex) {
            cancelAnimationFrame(magneticRaf);
            clearDwell();
            const from = currentIndex;
            const to = clamp(Math.round(targetIndex), 0, getItems().length - 1);
            const distance = to - from;
            if (Math.abs(distance) < .001) {
                settling = false;
                render(to, true);
                return;
            }
            settling = true;
            nav.classList.add('wheel-settling');
            const duration = dragPointerType === 'mouse' ? 210 : 255;
            const start = performance.now();
            const ease = t => 1 - Math.pow(1 - t, 3);
            const tick = now => {
                const progress = Math.min(1, (now - start) / duration);
                currentIndex = from + distance * ease(progress);
                render(currentIndex, false);
                if (progress < 1) {
                    magneticRaf = requestAnimationFrame(tick);
                } else {
                    currentIndex = to;
                    settling = false;
                    nav.classList.remove('wheel-settling');
                    render(to, true);
                }
            };
            magneticRaf = requestAnimationFrame(tick);
        }
'''

OLD_POINTER_BLOCK = r'''        nav.addEventListener('pointerdown', (event) => {
            if (nav.classList.contains('wheel-collapsed')) return;
            if (event.pointerType === 'mouse' && event.button !== 0) return;
            dragging = true;
            suppressClick = false;
            dragStartY = event.clientY;
            dragStartIndex = Math.round(currentIndex);
            clearDwell();
            nav.classList.add('wheel-dragging');
            nav.setPointerCapture?.(event.pointerId);
            event.preventDefault();
        }, { passive: false });

        nav.addEventListener('pointermove', (event) => {
            if (!dragging) return;
            const distance = dragStartY - event.clientY;
            if (Math.abs(distance) > 8) suppressClick = true;
            const liveIndex = dragStartIndex + distance / STEP;
            nav.style.setProperty('--wheel-gesture-tilt', `${clamp((liveIndex - dragStartIndex) * -2.4, -3.2, 3.2).toFixed(2)}deg`);
            render(liveIndex, false);
            event.preventDefault();
        }, { passive: false });

        function endDrag(event) {
            if (!dragging) return;
            const distance = dragStartY - event.clientY;
            dragging = false;
            nav.classList.remove('wheel-dragging');
            nav.style.setProperty('--wheel-gesture-tilt', '0deg');
            const nextIndex = Math.round(dragStartIndex + distance / STEP);
            render(nextIndex, true);
            if (Math.abs(distance) > 8) setTimeout(() => { suppressClick = false; }, 120);
        }
        nav.addEventListener('pointerup', endDrag, { passive: true });
        nav.addEventListener('pointercancel', endDrag, { passive: true });
'''

NEW_POINTER_BLOCK = r'''        nav.addEventListener('pointerdown', (event) => {
            if (nav.classList.contains('wheel-collapsed') || settling) return;
            if (event.pointerType === 'mouse' && event.button !== 0) return;
            configureDragProfile(event.pointerType);
            dragging = true;
            dragMoved = false;
            suppressClick = false;
            dragStartY = event.clientY;
            lastPointerY = event.clientY;
            dragStartIndex = currentIndex;
            resetMotionFilter();
            clearDwell();
            nav.classList.add('wheel-dragging');
            nav.setPointerCapture?.(event.pointerId);
            event.preventDefault();
        }, { passive: false });

        nav.addEventListener('pointermove', (event) => {
            if (!dragging) return;
            const rawDistance = dragStartY - event.clientY;
            sampleMotion(rawDistance);
            const filtered = getFilteredDistance(rawDistance);
            const crossedThreshold = Math.abs(rawDistance) >= dragThreshold;
            if (!crossedThreshold && !dragMoved) {
                lastPointerY = event.clientY;
                return;
            }
            if (crossedThreshold) {
                dragMoved = true;
                suppressClick = true;
            }
            const liveIndex = dragStartIndex + filtered / STEP;
            nav.style.setProperty('--wheel-gesture-tilt', `${clamp((liveIndex - dragStartIndex) * -2.4, -3.2, 3.2).toFixed(2)}deg`);
            render(liveIndex, false);
            lastPointerY = event.clientY;
            event.preventDefault();
        }, { passive: false });

        function endDrag(event) {
            if (!dragging) return;
            const clientY = Number.isFinite(event?.clientY) ? event.clientY : lastPointerY;
            const rawDistance = dragStartY - clientY;
            const distance = dragMoved ? filteredDistance : 0;
            const velocity = getMotionVelocity();
            dragging = false;
            nav.classList.remove('wheel-dragging');
            nav.style.setProperty('--wheel-gesture-tilt', '0deg');
            if (event?.pointerId != null) nav.releasePointerCapture?.(event.pointerId);
            if (!dragMoved) {
                render(Math.round(currentIndex), true);
                resetMotionFilter();
                return;
            }
            const inertiaMs = dragPointerType === 'mouse' ? 115 : 85;
            const inertiaDistance = clamp(velocity * inertiaMs, -38, 38);
            const projectedIndex = dragStartIndex + (distance + inertiaDistance) / STEP;
            magneticSnap(projectedIndex);
            setTimeout(() => { suppressClick = false; }, 170);
            resetMotionFilter();
        }
        nav.addEventListener('pointerup', endDrag, { passive: true });
        nav.addEventListener('pointercancel', endDrag, { passive: true });
'''


def patch_file(path: Path) -> None:
    if not path.exists():
        raise FileNotFoundError(path)
    html = path.read_text(encoding='utf-8')
    original = html

    if CSS_MARKER not in html:
        style_pos = html.rfind('</style>')
        if style_pos < 0:
            raise RuntimeError(f'</style> bulunamadı: {path}')
        html = html[:style_pos] + CSS_PATCH + '\n' + html[style_pos:]

    if JS_MARKER not in html:
        anchor = "        nav.addEventListener('pointerdown', (event) => {"
        if anchor not in html:
            raise RuntimeError(f'pointerdown bloğu bulunamadı: {path}')
        html = html.replace(anchor, JS_HELPERS + '\n' + anchor, 1)

    if OLD_POINTER_BLOCK in html:
        html = html.replace(OLD_POINTER_BLOCK, NEW_POINTER_BLOCK, 1)
    elif NEW_POINTER_BLOCK not in html:
        raise RuntimeError(f'Eski pointer bloğu bulunamadı: {path}')

    html = html.replace('if (!dragging) startDwell();', 'if (!dragging && !settling) startDwell();', 1)
    if html == original:
        raise RuntimeError(f'Dosyada değişiklik oluşmadı: {path}')
    path.write_text(html, encoding='utf-8')
    print(f'patched: {path}')


for target in TARGETS:
    patch_file(target)
