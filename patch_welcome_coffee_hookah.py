from pathlib import Path

TARGETS = [
    Path('/home/ubuntu/upload/keyfimce-kafem-modern.html'),
    Path('/home/ubuntu/upload/github_clone/index.html'),
]
MARKER = '/* RESPONSIVE WHEEL ALIGNMENT & WHITE LED V5 */'
CSS = r'''

/* RESPONSIVE WHEEL ALIGNMENT & WHITE LED V5 */
/* Tablet: içerik kolonları aynı eksende tutulur, çark merkezi korunur. */
@media (min-width:700px) and (max-width:899px){
  body{max-width:none!important;margin:0!important;padding:0 22px 116px!important;}
  #mainHeader,#wifiBarWrap,.search-wrap,.menu-access-hint,#productGrid{
    box-sizing:border-box;width:min(860px,100%)!important;margin-left:auto!important;margin-right:auto!important;
  }
  #catNav.wheel-pro-mode{
    box-sizing:border-box;width:min(680px,calc(100% - 36px))!important;max-width:680px!important;
    margin:16px auto 24px!important;left:auto!important;right:auto!important;
  }
  #productGrid{grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:18px!important;}
  #bottomNav{width:min(680px,calc(100% - 44px))!important;left:50%!important;right:auto!important;transform:translateX(-50%)!important;}
}
/* Masaüstü: çark genişliği gridden dar, fakat aynı merkez çizgisinde kalır. */
@media (min-width:900px){
  #catNav.wheel-pro-mode{
    box-sizing:border-box;width:min(720px,calc(100% - 64px))!important;max-width:720px!important;
    margin:16px auto 24px!important;left:auto!important;right:auto!important;
  }
  #catNav.wheel-pro-mode .cat-pill{width:min(78%,440px);max-width:440px;}
  #productGrid{box-sizing:border-box;}
}
/* Çark kapalıyken ve açıkken de merkez değişmez. */
@media (min-width:700px){
  #catNav.wheel-pro-mode.wheel-collapsed{margin:16px auto 24px!important;}
}

/* Menü tıklamasında beyaz LED segmenti sağ kenardan başlayıp çevreyi sola doğru dolaşır. */
#bottomNav #bnav-menu.menu-button-ring{isolation:isolate;overflow:visible;}
#bottomNav #bnav-menu.menu-button-ring > *{position:relative;z-index:3;}
#bottomNav #bnav-menu.menu-button-ring::before{
  content:'';position:absolute;inset:-4px;z-index:2;padding:1.5px;border:0;border-radius:20px;pointer-events:none;
  background:conic-gradient(from 90deg,transparent 0deg 70deg,rgba(255,255,255,.22) 76deg,rgba(255,255,255,.98) 84deg,rgba(255,255,255,.34) 92deg,transparent 101deg 360deg);
  -webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);
  -webkit-mask-composite:xor;mask-composite:exclude;
  box-shadow:0 0 5px rgba(255,255,255,.94),0 0 13px rgba(255,246,235,.66),0 0 22px rgba(255,255,255,.28);
  animation:menuButtonWhiteLedOrbit 1.16s linear both;
}
@keyframes menuButtonWhiteLedOrbit{
  0%{opacity:0;transform:rotate(0deg) scale(.98);}
  8%{opacity:1;}
  84%{opacity:1;}
  100%{opacity:0;transform:rotate(-360deg) scale(1.02);}
}
@media(prefers-reduced-motion:reduce){
  #bottomNav #bnav-menu.menu-button-ring::before{animation:none!important;opacity:0!important;}
}
'''

for target in TARGETS:
    if not target.exists():
        raise FileNotFoundError(target)
    html = target.read_text(encoding='utf-8')
    if MARKER not in html:
        if '</style>' not in html:
            raise RuntimeError(f'No style closing tag in {target}')
        html = html.replace('</style>', CSS + '\n</style>', 1)
    old_timeout = "window.setTimeout(() => menuButton.classList.remove('menu-button-ring'), 980);"
    new_timeout = "window.setTimeout(() => menuButton.classList.remove('menu-button-ring'), 1260);"
    if old_timeout in html:
        html = html.replace(old_timeout, new_timeout, 1)
    elif new_timeout not in html:
        raise RuntimeError(f'Menu light cleanup timeout not found in {target}')
    target.write_text(html, encoding='utf-8')
    print(f'patched: {target}')

print('Responsive wheel and white LED patch complete.')
