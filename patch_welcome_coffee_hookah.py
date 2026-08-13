from pathlib import Path
import shutil

ROOT = Path('/home/ubuntu/upload')
TARGETS = [
    ROOT / 'keyfimce-kafem-modern.html',
    ROOT / 'github_clone' / 'index.html',
]
ASSET_REL = Path('assets') / 'keyfimce-welcome-ornament.svg'
ASSET_SOURCE = ROOT / ASSET_REL
CSS_MARKER = '/* CINEMATIC WELCOME & MENU RETURN V3 */'
JS_MARKER = '// CINEMATIC WELCOME & MENU RETURN V3'


def make_ornament_svg() -> str:
    """Create a lightweight, transparent decorative SVG for the welcome screen."""
    beans = [
        (122, 120, 18, -28, '.20'), (187, 220, 14, 34, '.14'), (80, 318, 16, 18, '.11'),
        (529, 110, 17, 23, '.17'), (478, 234, 13, -31, '.12'), (550, 348, 19, 14, '.11'),
        (294, 75, 11, 8, '.10'), (315, 443, 14, -17, '.10'),
    ]
    bean_parts = []
    for x, y, r, rot, opacity in beans:
        bean_parts.append(f'''<g transform="translate({x} {y}) rotate({rot})" opacity="{opacity}">
  <ellipse cx="0" cy="0" rx="{r * .62:.1f}" ry="{r:.1f}" fill="url(#bean)"/>
  <path d="M0 {-r * .78:.1f} C{-r * .30:.1f} {-r * .35:.1f} {r * .30:.1f} {r * .35:.1f} 0 {r * .78:.1f}" fill="none" stroke="#7E3827" stroke-width="2.4" stroke-linecap="round"/>
</g>''')
    sparks = [
        (220, 105, 8, '.32'), (410, 156, 6, '.24'), (94, 212, 5, '.20'),
        (527, 292, 8, '.24'), (382, 409, 5, '.20'), (154, 425, 7, '.18'),
    ]
    spark_parts = []
    for x, y, s, opacity in sparks:
        spark_parts.append(f'''<path d="M{x} {y-s} L{x+s*.38:.1f} {y-s*.38:.1f} L{x+s} {y} L{x+s*.38:.1f} {y+s*.38:.1f} L{x} {y+s} L{x-s*.38:.1f} {y+s*.38:.1f} L{x-s} {y} L{x-s*.38:.1f} {y-s*.38:.1f} Z" fill="#E7A16F" opacity="{opacity}"/>''')
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 520" fill="none">
<defs>
  <linearGradient id="bean" x1="-1" y1="-1" x2="1" y2="1"><stop stop-color="#F6D7BC"/><stop offset=".48" stop-color="#B76242"/><stop offset="1" stop-color="#783521"/></linearGradient>
  <linearGradient id="steam" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#D37D55" stop-opacity="0"/><stop offset=".48" stop-color="#C26542" stop-opacity=".36"/><stop offset="1" stop-color="#D37D55" stop-opacity="0"/></linearGradient>
  <filter id="soft"><feGaussianBlur stdDeviation="1.6"/></filter>
</defs>
<g filter="url(#soft)" opacity=".72">
  <path d="M250 480 C205 405 314 360 265 278 C232 221 281 186 304 140" stroke="url(#steam)" stroke-width="10" stroke-linecap="round"/>
  <path d="M375 493 C434 421 334 356 389 282 C431 225 373 176 406 122" stroke="url(#steam)" stroke-width="8" stroke-linecap="round"/>
  <circle cx="320" cy="267" r="142" stroke="#C57550" stroke-opacity=".13" stroke-width="2" stroke-dasharray="4 14"/>
  <circle cx="320" cy="267" r="194" stroke="#E5B58C" stroke-opacity=".10" stroke-width="1.5" stroke-dasharray="3 18"/>
</g>
{''.join(bean_parts)}
{''.join(spark_parts)}
</svg>\n'''


CSS = r'''

/* CINEMATIC WELCOME & MENU RETURN V3 */
/* Python tarafından oluşturulan SVG, fotoğraf yüklemeden sıcak kafe dokusu sağlar. */
#welcomeScreen{isolation:isolate;background:radial-gradient(circle at 50% 34%,#fffdfb 0%,#f9efe7 48%,#ead8ca 100%)}
.welcome-ornament{position:absolute;inset:-9vh -18vw;z-index:1;pointer-events:none;opacity:.86;background:url('assets/keyfimce-welcome-ornament.svg') center / min(700px,94vw) auto no-repeat;mix-blend-mode:multiply;transform:translate3d(0,0,0);will-change:transform,opacity;animation:welcomeOrnamentDrift 13s ease-in-out infinite alternate}
#welcomeScreen::before,#welcomeScreen::after{z-index:0}
.welcome-stage{z-index:2}
.welcome-card{overflow:hidden;background:linear-gradient(142deg,rgba(255,255,255,.79),rgba(255,247,239,.66));box-shadow:0 26px 70px rgba(99,45,26,.18),inset 0 1px 0 rgba(255,255,255,.82);animation:welcomeCinematicIn .92s cubic-bezier(.22,1,.36,1) both}
.welcome-card::before{background:linear-gradient(125deg,rgba(255,255,255,.76),transparent 36%,rgba(184,92,56,.12) 72%)!important}
.welcome-showcase{position:relative;isolation:isolate}
.welcome-showcase::before{content:'';position:absolute;z-index:0;left:50%;top:48%;width:124px;height:124px;border-radius:50%;border:1px solid rgba(184,92,56,.24);background:radial-gradient(circle,rgba(255,220,188,.43) 0%,rgba(255,242,230,.12) 46%,transparent 72%);transform:translate3d(-50%,-50%,0) scale(.86);box-shadow:0 0 0 11px rgba(255,255,255,.17),0 0 42px rgba(184,92,56,.16);animation:welcomeHaloBloom 2.6s cubic-bezier(.22,1,.36,1) .22s both}
.welcome-showcase::after{content:'';position:absolute;z-index:0;left:50%;top:48%;width:154px;height:154px;border-radius:50%;border:1px dashed rgba(184,92,56,.19);transform:translate3d(-50%,-50%,0);animation:welcomeOrbitTurn 13s linear infinite}
.welcome-showcase>.welcome-coffee-scene,.welcome-showcase>.welcome-hookah-scene,.welcome-showcase>.welcome-orb{position:relative;z-index:1}
.welcome-orb{filter:drop-shadow(0 14px 18px rgba(126,56,39,.16))}
.welcome-emoji{animation:welcomeGreetingWave 2.7s cubic-bezier(.34,.08,.26,1) .38s infinite!important}
.welcome-eyebrow{position:relative;letter-spacing:.25em!important;text-shadow:0 2px 10px rgba(184,92,56,.11)}
.welcome-tip{position:relative;display:inline-flex;align-items:center;gap:4px}
.welcome-tip::after{content:'···';display:inline-block;letter-spacing:2px;color:var(--rust);animation:welcomeTipDots 1.35s ease-in-out infinite}
.welcome-progress{position:relative;overflow:hidden}
.welcome-progress::after{content:'';position:absolute;inset:0;width:30%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.78),transparent);transform:translateX(-130%);animation:welcomeProgressGlint 2.8s ease-in-out .18s both;pointer-events:none}

/* Menü düğmesiyle dönüş anında hedef alan hafifçe vurgulanır. */
#catNav{scroll-margin-top:18px}
#catNav.menu-return-focus{animation:menuReturnFocus .78s cubic-bezier(.22,1,.36,1) both}

@keyframes welcomeCinematicIn{0%{opacity:0;transform:translate3d(0,34px,0) scale(.94) rotateX(7deg)}65%{opacity:1}100%{opacity:1;transform:translate3d(0,0,0) scale(1) rotateX(0)}}
@keyframes welcomeOrnamentDrift{0%{transform:translate3d(-10px,9px,0) rotate(-1deg);opacity:.67}100%{transform:translate3d(13px,-11px,0) rotate(1deg);opacity:.94}}
@keyframes welcomeHaloBloom{0%{opacity:0;transform:translate3d(-50%,-50%,0) scale(.70)}100%{opacity:1;transform:translate3d(-50%,-50%,0) scale(1)}}
@keyframes welcomeOrbitTurn{to{transform:translate3d(-50%,-50%,0) rotate(360deg)}}
@keyframes welcomeGreetingWave{0%,100%{transform:rotate(0deg) translateY(0)}11%{transform:rotate(15deg) translateY(-2px)}22%{transform:rotate(-8deg)}34%{transform:rotate(14deg) translateY(-1px)}46%{transform:rotate(-3deg)}58%{transform:rotate(8deg)}70%{transform:rotate(0deg) translateY(0)}}
@keyframes welcomeTipDots{0%,100%{opacity:.24;transform:translateX(-2px)}50%{opacity:1;transform:translateX(2px)}}
@keyframes welcomeProgressGlint{0%{transform:translateX(-130%);opacity:0}18%{opacity:.8}100%{transform:translateX(440%);opacity:0}}
@keyframes menuReturnFocus{0%{box-shadow:0 0 0 0 rgba(184,92,56,0)}40%{box-shadow:0 0 0 9px rgba(184,92,56,.18)}100%{box-shadow:0 0 0 0 rgba(184,92,56,0)}}

@media(max-width:520px){.welcome-ornament{inset:-5vh -33vw;background-size:540px auto;opacity:.68}.welcome-showcase::after{width:132px;height:132px}.welcome-showcase::before{width:108px;height:108px}.welcome-card{box-shadow:0 18px 48px rgba(99,45,26,.15)}}
@media(prefers-reduced-motion:reduce){.welcome-ornament,.welcome-showcase::before,.welcome-showcase::after,.welcome-emoji,.welcome-tip::after,.welcome-progress::after,#catNav.menu-return-focus{animation:none!important}.welcome-ornament{opacity:.46}.welcome-card{animation:none!important}}
'''

JS = r'''

    // CINEMATIC WELCOME & MENU RETURN V3
    function scrollToMenuStart() {
        const target = document.getElementById('catNav') || document.getElementById('productGrid');
        if (!target) return;
        const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const top = Math.max(0, window.scrollY + target.getBoundingClientRect().top - 18);
        window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
        target.classList.remove('menu-return-focus');
        if (!reduceMotion) {
            requestAnimationFrame(() => target.classList.add('menu-return-focus'));
            window.setTimeout(() => target.classList.remove('menu-return-focus'), 840);
        }
    }
'''

# Generate the same light asset for the standalone HTML and GitHub Pages tree.
ASSET_SOURCE.parent.mkdir(parents=True, exist_ok=True)
ASSET_SOURCE.write_text(make_ornament_svg(), encoding='utf-8')
clone_asset = ROOT / 'github_clone' / ASSET_REL
clone_asset.parent.mkdir(parents=True, exist_ok=True)
shutil.copy2(ASSET_SOURCE, clone_asset)
print(f'Generated: {ASSET_SOURCE}')
print(f'Copied: {clone_asset}')

for path in TARGETS:
    if not path.exists():
        raise FileNotFoundError(path)
    html = path.read_text(encoding='utf-8')

    if CSS_MARKER not in html:
        style_marker = '\n</style>'
        if style_marker not in html:
            raise RuntimeError(f'Could not find style closing marker in {path}')
        html = html.replace(style_marker, CSS + style_marker, 1)

    ornament_markup = '<div class="welcome-ornament" aria-hidden="true"></div>'
    if ornament_markup not in html:
        source = '<div id="welcomeScreen">'
        if source not in html:
            raise RuntimeError(f'Could not find welcome screen markup in {path}')
        html = html.replace(source, source + '\n        ' + ornament_markup, 1)

    old_set_tab = '''    function setTab(tab) {
        document.getElementById('bnav-menu').className = 'bnav-btn' + (tab === 'menu' ? ' active' : '');
        kategoriGit(aktifKat);
    }'''
    new_set_tab = '''    function setTab(tab) {
        document.getElementById('bnav-menu').className = 'bnav-btn' + (tab === 'menu' ? ' active' : '');
        kategoriGit(aktifKat);
        if (tab === 'menu') window.setTimeout(scrollToMenuStart, 0);
    }'''
    if old_set_tab in html:
        html = html.replace(old_set_tab, new_set_tab, 1)
    elif new_set_tab not in html:
        raise RuntimeError(f'Could not find setTab function in {path}')

    if JS_MARKER not in html:
        marker = '\n    setupPremiumMotionLayer();\n    setupPageProgress();\n\n</script>'
        replacement = JS + '\n    setupPremiumMotionLayer();\n    setupPageProgress();\n\n</script>'
        if marker not in html:
            raise RuntimeError(f'Could not find final script marker in {path}')
        html = html.replace(marker, replacement, 1)

    path.write_text(html, encoding='utf-8')
    print(f'Patched: {path}')
