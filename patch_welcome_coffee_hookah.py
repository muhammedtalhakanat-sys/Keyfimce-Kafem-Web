from pathlib import Path

TARGETS = [
    Path('/home/ubuntu/upload/keyfimce-kafem-modern.html'),
    Path('/home/ubuntu/upload/github_clone/index.html'),
]
MARKER = '/* WHEEL EXPERIENCE V4 */'

CSS = r'''
/* WHEEL EXPERIENCE V4 */
/* 1 saniyelik seçimin ilerleyişini açıkça gösteren dolan merkez halkası. */
@property --wheel-ring-progress { syntax: '<angle>'; inherits: false; initial-value: 0deg; }
#catNav.wheel-pro-mode:not(.wheel-collapsed){
  --wheel-gesture-tilt:0deg;
  transform:perspective(1100px) rotateY(var(--wheel-gesture-tilt));
  transform-style:preserve-3d;
  transition:transform .22s cubic-bezier(.22,1,.36,1),height .34s cubic-bezier(.22,1,.36,1),padding .34s ease,opacity .25s ease,box-shadow .34s ease;
}
#catNav.wheel-pro-mode.wheel-dragging{transition:transform .08s linear;height:232px;}
#catNav.wheel-pro-mode:not(.wheel-collapsed) .wheel-focus::before{
  inset:-10px -16px;
  border:2px solid rgba(184,92,56,.18);
  background:conic-gradient(from -90deg,rgba(184,92,56,.16) 0deg,var(--wheel-ring-color, var(--rust)) var(--wheel-ring-progress),rgba(184,92,56,.12) var(--wheel-ring-progress) 360deg) border-box;
  box-shadow:0 0 0 1px rgba(184,92,56,.10),0 0 16px rgba(184,92,56,.10);
  -webkit-mask:linear-gradient(#000 0 0) padding-box,linear-gradient(#000 0 0);
  -webkit-mask-composite:xor;
  mask-composite:exclude;
  opacity:.8;
  transform:scale(.98);
}
#catNav.wheel-awaiting-selection .wheel-focus::before{
  --wheel-ring-progress:0deg;
  border-color:transparent;
  opacity:1;
  animation:wheelSelectionRing 1s linear forwards;
}
@keyframes wheelSelectionRing{
  0%{--wheel-ring-progress:0deg;transform:scale(.94);filter:brightness(.95)}
  82%{--wheel-ring-progress:295deg;transform:scale(1.025);filter:brightness(1.06)}
  100%{--wheel-ring-progress:360deg;transform:scale(1.035);filter:brightness(1.13)}
}
/* Sürüklemede merkez kartı öne gelir; yakın kartlar hafif yatay eksende hareket eder. */
#catNav.wheel-pro-mode.wheel-dragging .cat-pill{filter:blur(var(--wheel-live-blur,0px)) saturate(1.03)!important;}
#catNav.wheel-pro-mode.wheel-dragging .wheel-focus{box-shadow:0 18px 34px rgba(105,47,28,.30),0 0 0 5px rgba(184,92,56,.13);}
/* Açık/koyu dil yönergeleri, buildNav içinden güncellenen data-lang ile çalışır. */
#catNav[data-lang="en"].wheel-collapsed::after{content:'Click to access the menu';}
#catNav[data-lang="en"].wheel-pro-mode:not(.wheel-collapsed)::before{content:'CATEGORIES';}
#catNav[data-lang="en"].wheel-pro-mode:not(.wheel-collapsed)::after{content:'Drag vertically · wait 1 sec';}
/* Alt Menü düğmesine basıldığında sayfaya yön veren tek seferlik ışık halkası. */
#bottomNav #bnav-menu.menu-button-ring::before{
  content:'';position:absolute;inset:-8px;border:1.5px solid rgba(226,138,97,.72);border-radius:18px;pointer-events:none;
  box-shadow:0 0 0 0 rgba(226,138,97,.28),0 0 16px rgba(226,138,97,.16);animation:menuButtonLightRing .92s cubic-bezier(.22,1,.36,1) both;
}
@keyframes menuButtonLightRing{
  0%{opacity:0;transform:scale(.76);box-shadow:0 0 0 0 rgba(226,138,97,.38)}
  30%{opacity:1;transform:scale(1);box-shadow:0 0 0 5px rgba(226,138,97,.16),0 0 18px rgba(226,138,97,.26)}
  100%{opacity:0;transform:scale(1.27);box-shadow:0 0 0 13px rgba(226,138,97,0),0 0 0 rgba(226,138,97,0)}
}
/* Koyu temada çarktaki beyaz kenar ve açık yüzey etkileri sıcak, okunaklı tonlara çevrilir. */
html[data-theme="dark"] #catNav.wheel-pro-mode:not(.wheel-collapsed){
  background:linear-gradient(90deg,rgba(255,222,196,.025),transparent 20%,transparent 80%,rgba(226,138,97,.075)),radial-gradient(ellipse at 50% 50%,#4a3228 0%,#2b1d18 57%,#1e1512 100%);
  border-color:rgba(226,138,97,.34);
  box-shadow:inset 0 1px 0 rgba(255,221,197,.05),inset 0 24px 34px rgba(0,0,0,.19),inset 0 -24px 34px rgba(0,0,0,.23),0 16px 34px rgba(0,0,0,.34);
}
html[data-theme="dark"] #catNav.wheel-pro-mode:not(.wheel-collapsed)::before,
html[data-theme="dark"] #catNav.wheel-pro-mode:not(.wheel-collapsed)::after{color:rgba(255,220,198,.62);}
html[data-theme="dark"] #catNav.wheel-pro-mode:not(.wheel-collapsed) .wheel-focus{border-color:rgba(226,138,97,.50);box-shadow:0 13px 30px rgba(0,0,0,.33),0 0 0 4px rgba(226,138,97,.15);}
html[data-theme="dark"] #catNav.wheel-pro-mode:not(.wheel-collapsed) .wheel-focus::before{--wheel-ring-color:#f1a67e;border-color:rgba(226,138,97,.28);box-shadow:0 0 0 1px rgba(226,138,97,.18),0 0 18px rgba(226,138,97,.16);}
html[data-theme="dark"] #catNav.wheel-collapsed{background:linear-gradient(135deg,#3a271f,#241915);box-shadow:0 8px 22px rgba(0,0,0,.28),inset 0 0 0 1px rgba(226,138,97,.14);}
html[data-theme="dark"] #catNav.wheel-collapsed::after{color:rgba(255,224,205,.72);}
html[data-theme="dark"] .menu-access-hint{color:var(--muted);}
html[data-theme="dark"] .menu-end-card{background:linear-gradient(145deg,#3a281f,#241915 72%);border-color:rgba(226,138,97,.30);box-shadow:0 16px 34px rgba(0,0,0,.34),inset 0 1px 0 rgba(255,222,196,.04);}
html[data-theme="dark"] .menu-end-card::before{background:radial-gradient(circle,rgba(226,138,97,.20),transparent 68%);}
html[data-theme="dark"] .menu-end-card-copy > i{color:#f1a67e;background:rgba(226,138,97,.15);}
html[data-theme="dark"] .menu-end-card-copy strong{color:var(--ink);}
html[data-theme="dark"] .menu-end-card-copy span{color:var(--muted);}
html[data-theme="dark"] .menu-end-card-actions button{color:#f1a67e;background:rgba(226,138,97,.14);}
html[data-theme="dark"] .menu-end-card-actions button:hover{background:rgba(226,138,97,.24);}
@media(max-width:680px){
  #catNav.wheel-pro-mode:not(.wheel-collapsed){transform:none;}
  #catNav.wheel-pro-mode.wheel-dragging .wheel-focus{box-shadow:0 13px 25px rgba(105,47,28,.26),0 0 0 4px rgba(184,92,56,.11);}
}
@media(prefers-reduced-motion:reduce){
  #catNav.wheel-pro-mode:not(.wheel-collapsed),#catNav.wheel-pro-mode.wheel-dragging{transform:none!important;transition:none!important;}
  #catNav.wheel-awaiting-selection .wheel-focus::before,#bottomNav #bnav-menu.menu-button-ring::before{animation:none!important;}
}
'''


def replace_once(text: str, old: str, new: str, label: str) -> str:
    if old not in text:
        raise RuntimeError(f'Beklenen bölüm bulunamadı: {label}')
    return text.replace(old, new, 1)


def patch_html(path: Path) -> None:
    html = path.read_text(encoding='utf-8')

    if 'id="menuAccessHintText"' not in html:
        html = replace_once(
            html,
            '<span>Menüye ulaşmak için tıklayınız</span>',
            '<span id="menuAccessHintText">Menüye ulaşmak için tıklayınız</span>',
            'sabit Menü yönergesi',
        )

    if 'nav.dataset.lang = aktifDil;' not in html:
        html = replace_once(
            html,
            "const nav   = document.getElementById('catNav');\n        const apKat",
            "const nav   = document.getElementById('catNav');\n        nav.dataset.lang = aktifDil;\n        const apKat",
            'buildNav dil verisi',
        )

    if "menuHint.textContent = aktifDil === 'en'" not in html:
        html = replace_once(
            html,
            "document.getElementById('htmlRoot').lang = aktifDil;\n        // Tüm dinamik bileşenleri yenile",
            "document.getElementById('htmlRoot').lang = aktifDil;\n        const menuHint = document.getElementById('menuAccessHintText');\n        if (menuHint) menuHint.textContent = aktifDil === 'en' ? 'Click to access the menu' : 'Menüye ulaşmak için tıklayınız';\n        const categoryWheel = document.getElementById('catNav');\n        if (categoryWheel) categoryWheel.dataset.lang = aktifDil;\n        // Tüm dinamik bileşenleri yenile",
            'dil yönergesi güncellemesi',
        )

    if 'menu-button-ring' not in html.split('function scrollToMenuStart()', 1)[-1]:
        html = replace_once(
            html,
            "if (!target) return;\n        const reduceMotion",
            "if (!target) return;\n        const menuButton = document.getElementById('bnav-menu');\n        if (menuButton) {\n            menuButton.classList.remove('menu-button-ring');\n            void menuButton.offsetWidth;\n            menuButton.classList.add('menu-button-ring');\n            window.setTimeout(() => menuButton.classList.remove('menu-button-ring'), 980);\n        }\n        const reduceMotion",
            'Menü düğmesi halka tetikleme',
        )

    old_transform = """const rotate = distance * -7;
                const blur = absolute < .08 ? 0 : Math.min(2.2, absolute * .65);
                const y = distance * STEP;
                item.style.opacity = opacity.toFixed(2);
                item.style.filter = `blur(${blur.toFixed(1)}px)`;
                item.style.transform = `translate(-50%, -50%) translateY(${y.toFixed(1)}px) scale(${scale.toFixed(3)}) rotateX(${rotate.toFixed(1)}deg)`;"""
    new_transform = """const rotate = distance * -7;
                const depth = absolute < .08 ? 34 : Math.max(-38, 14 - absolute * 20);
                const sideShift = dragging ? clamp(distance * 5.5, -15, 15) : distance * 1.35;
                const rotateY = dragging ? clamp(distance * 2.4, -9, 9) : distance * 1.05;
                const blur = absolute < .08 ? 0 : Math.min(2.2, absolute * .65);
                const y = distance * STEP;
                item.style.opacity = opacity.toFixed(2);
                item.style.setProperty('--wheel-live-blur', `${blur.toFixed(1)}px`);
                item.style.filter = `blur(${blur.toFixed(1)}px)`;
                item.style.transform = `translate(-50%, -50%) translate3d(${sideShift.toFixed(1)}px, ${y.toFixed(1)}px, ${depth.toFixed(1)}px) scale(${scale.toFixed(3)}) rotateX(${rotate.toFixed(1)}deg) rotateY(${rotateY.toFixed(1)}deg)`;"""
    if old_transform in html:
        html = html.replace(old_transform, new_transform, 1)
    elif 'const sideShift = dragging ? clamp(distance * 5.5' not in html:
        raise RuntimeError('Çark 3B transform bölümü bulunamadı')

    old_pointermove = """const distance = dragStartY - event.clientY;
            if (Math.abs(distance) > 8) suppressClick = true;
            render(dragStartIndex + distance / STEP, false);"""
    new_pointermove = """const distance = dragStartY - event.clientY;
            if (Math.abs(distance) > 8) suppressClick = true;
            const liveIndex = dragStartIndex + distance / STEP;
            nav.style.setProperty('--wheel-gesture-tilt', `${clamp((liveIndex - dragStartIndex) * -2.4, -3.2, 3.2).toFixed(2)}deg`);
            render(liveIndex, false);"""
    if old_pointermove in html:
        html = html.replace(old_pointermove, new_pointermove, 1)
    elif "const liveIndex = dragStartIndex + distance / STEP;" not in html:
        raise RuntimeError('Çark pointermove bölümü bulunamadı')

    old_end_drag = """dragging = false;
            nav.classList.remove('wheel-dragging');
            const nextIndex"""
    new_end_drag = """dragging = false;
            nav.classList.remove('wheel-dragging');
            nav.style.setProperty('--wheel-gesture-tilt', '0deg');
            const nextIndex"""
    if old_end_drag in html:
        html = html.replace(old_end_drag, new_end_drag, 1)
    elif "nav.style.setProperty('--wheel-gesture-tilt', '0deg');" not in html:
        raise RuntimeError('Çark pointerup bölümü bulunamadı')

    if MARKER not in html:
        if '</style>' not in html:
            raise RuntimeError('CSS kapanış etiketi bulunamadı')
        html = html.replace('</style>', CSS + '\n</style>', 1)

    path.write_text(html, encoding='utf-8')
    print(f'Güncellendi: {path}')


for target in TARGETS:
    if not target.exists():
        raise FileNotFoundError(target)
    patch_html(target)

print('Çark, tema, dil ve Menü düğmesi geliştirmeleri tamamlandı.')
