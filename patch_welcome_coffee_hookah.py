from pathlib import Path

path = Path('/home/ubuntu/upload/keyfimce-kafem-modern.html')
html = path.read_text(encoding='utf-8')

old_markup = '''            <div class="welcome-orb">
              <span class="welcome-steam-layer" aria-hidden="true"><span></span><span></span><span></span></span>
              <span class="welcome-emoji">👋</span>
            </div>'''

new_markup = '''            <div class="welcome-showcase" aria-label="Kahve, karşılama ve nargile animasyonu">
              <div class="welcome-coffee-scene" aria-hidden="true">
                <span class="coffee-steam"><i></i><i></i><i></i></span>
                <span class="coffee-cup-visual">
                  <span class="coffee-cup-rim"></span><span class="coffee-cup-body"></span><span class="coffee-cup-handle"></span><span class="coffee-saucer"></span>
                </span>
              </div>
              <div class="welcome-orb">
                <span class="welcome-emoji">👋</span>
              </div>
              <div class="welcome-hookah-scene" aria-hidden="true">
                <span class="hookah-smoke"><i></i><i></i><i></i></span>
                <span class="hookah-pipe"><span class="hookah-bowl"></span><span class="hookah-stem"></span><span class="hookah-vase"></span><span class="hookah-hose"></span></span>
              </div>
            </div>'''

if old_markup not in html:
    raise SystemExit('Welcome orb markup marker was not found; no changes were made.')

css = r'''
/* =========================================================
   AÇILIŞ KOMPOZİSYONU — KAHVE · KARŞILAMA · NARGİLE
   ========================================================= */
.welcome-showcase{
  display:flex;align-items:flex-end;justify-content:center;gap:clamp(8px,2.5vw,18px);
  min-height:142px;margin:0 auto 17px;perspective:900px;transform-style:preserve-3d;
}
.welcome-showcase .welcome-orb{margin:0;flex:0 0 112px;z-index:3}
.welcome-orb > .welcome-steam-layer{display:none!important}
.welcome-coffee-scene,.welcome-hookah-scene{
  position:relative;flex:0 0 88px;height:126px;isolation:isolate;transform-style:preserve-3d;
  animation:welcomeSideFloat 4.8s ease-in-out 1.1s infinite;
}
.welcome-hookah-scene{animation-delay:1.85s}
@keyframes welcomeSideFloat{
  0%,100%{transform:translate3d(0,0,0) rotateY(-4deg)}
  50%{transform:translate3d(0,-6px,12px) rotateY(5deg)}
}
/* Kahve fincanı: fincan gövdesi, kulp ve tabak. */
.coffee-cup-visual{position:absolute;left:50%;bottom:13px;width:66px;height:56px;transform:translateX(-50%) translateZ(12px)}
.coffee-cup-rim{position:absolute;z-index:3;left:4px;top:0;width:53px;height:14px;border:4px solid #f7dfca;border-radius:50%;background:radial-gradient(ellipse at center,#5c2f20 0 42%,#8b4a2f 44% 58%,#f5d7c0 60%);box-shadow:inset 0 2px 4px rgba(44,17,9,.38),0 3px 5px rgba(82,39,22,.18)}
.coffee-cup-body{position:absolute;z-index:2;left:8px;top:8px;width:50px;height:42px;border-radius:7px 7px 20px 20px;background:linear-gradient(105deg,#fdf1e6,#eab995 56%,#c9764d);box-shadow:inset 4px 2px 5px rgba(255,255,255,.52),0 9px 14px rgba(90,43,24,.2)}
.coffee-cup-handle{position:absolute;z-index:1;right:0;top:15px;width:23px;height:26px;border:6px solid #d8895e;border-left:0;border-radius:0 18px 18px 0;box-shadow:3px 4px 7px rgba(82,39,22,.14)}
.coffee-saucer{position:absolute;z-index:0;left:0;bottom:0;width:68px;height:12px;border-radius:50%;background:linear-gradient(180deg,#fff6ef,#dfa47f);box-shadow:0 7px 12px rgba(82,39,22,.16)}
.coffee-steam{position:absolute;z-index:4;left:5px;right:5px;bottom:55px;height:76px;pointer-events:none}
.coffee-steam i{position:absolute;bottom:0;width:10px;height:55px;border-left:2px solid rgba(137,72,47,.36);border-radius:50%;opacity:0;filter:blur(.2px);transform-origin:bottom center;animation:coffeeCupSteam 5.4s cubic-bezier(.3,.03,.34,1) infinite}
.coffee-steam i:nth-child(1){left:25%;height:49px;animation-delay:.15s}
.coffee-steam i:nth-child(2){left:49%;height:66px;border-color:rgba(177,96,61,.28);animation-duration:6.15s;animation-delay:1.7s}
.coffee-steam i:nth-child(3){left:67%;height:57px;border-color:rgba(112,54,35,.27);animation-duration:4.85s;animation-delay:3.25s}
@keyframes coffeeCupSteam{
  0%{opacity:0;transform:translate3d(0,12px,0) rotate(-7deg) scaleX(.62)}
  18%{opacity:.44}
  64%{opacity:.18}
  100%{opacity:0;transform:translate3d(12px,-65px,18px) rotate(11deg) scaleX(1.14)}
}
/* Nargile: basit vektör form ve nargile başlığından yükselen üç duman katmanı. */
.hookah-pipe{position:absolute;left:50%;bottom:10px;width:68px;height:92px;transform:translateX(-50%) translateZ(12px)}
.hookah-bowl{position:absolute;z-index:4;left:24px;top:4px;width:24px;height:13px;border-radius:5px 5px 10px 10px;background:linear-gradient(180deg,#55352e,#b86743);box-shadow:0 4px 6px rgba(62,31,23,.2)}
.hookah-bowl::after{content:'';position:absolute;left:-3px;top:-4px;width:30px;height:7px;border-radius:50%;background:linear-gradient(90deg,#d8a57e,#7a4332,#d8a57e);box-shadow:0 2px 5px rgba(66,29,19,.22)}
.hookah-stem{position:absolute;z-index:3;left:33px;top:17px;width:6px;height:40px;border-radius:99px;background:linear-gradient(90deg,#b87855,#f7d1ae 45%,#8d4a35);box-shadow:1px 0 4px rgba(68,30,17,.22)}
.hookah-vase{position:absolute;z-index:2;left:16px;bottom:0;width:40px;height:39px;border:2px solid rgba(248,210,176,.7);border-radius:14px 14px 21px 21px;background:linear-gradient(145deg,rgba(239,171,126,.94),rgba(145,61,47,.95));box-shadow:inset 5px 3px 6px rgba(255,240,221,.31),0 9px 15px rgba(73,33,22,.22)}
.hookah-vase::after{content:'';position:absolute;left:7px;right:7px;bottom:7px;height:8px;border-radius:50%;background:rgba(79,35,27,.28)}
.hookah-hose{position:absolute;z-index:1;right:-25px;top:34px;width:38px;height:39px;border:4px solid #8f5039;border-left:0;border-bottom:0;border-radius:0 40px 0 0;transform:rotate(18deg)}
.hookah-hose::after{content:'';position:absolute;right:-12px;top:-6px;width:17px;height:6px;border-radius:8px;background:#d4956b;transform:rotate(22deg)}
.hookah-smoke{position:absolute;z-index:5;left:10px;right:10px;bottom:87px;height:88px;pointer-events:none}
.hookah-smoke i{position:absolute;bottom:0;width:12px;height:61px;border-left:2px solid rgba(143,151,166,.34);border-radius:50%;opacity:0;filter:blur(.35px);animation:hookahSmoke 6.1s cubic-bezier(.31,.03,.32,1) infinite}
.hookah-smoke i:nth-child(1){left:38%;animation-delay:.9s}
.hookah-smoke i:nth-child(2){left:55%;height:74px;border-color:rgba(177,183,195,.31);animation-duration:7s;animation-delay:2.55s}
.hookah-smoke i:nth-child(3){left:22%;height:54px;border-color:rgba(121,132,146,.26);animation-duration:5.35s;animation-delay:4.1s}
@keyframes hookahSmoke{
  0%{opacity:0;transform:translate3d(0,10px,0) rotate(8deg) scaleX(.7)}
  20%{opacity:.36}
  68%{opacity:.14}
  100%{opacity:0;transform:translate3d(-16px,-74px,16px) rotate(-13deg) scaleX(1.3)}
}
@media(max-width:520px){
  .welcome-showcase{gap:4px;min-height:116px;margin-bottom:11px;transform:scale(.88);transform-origin:center bottom}
  .welcome-showcase .welcome-orb{flex-basis:96px;width:96px;height:96px;border-radius:28px}
  .welcome-coffee-scene,.welcome-hookah-scene{flex-basis:72px;height:108px}
  .coffee-steam,.hookah-smoke{transform:scale(.88);transform-origin:bottom center}
}
@media(max-width:365px){.welcome-showcase{transform:scale(.76);margin-bottom:1px}}
@media(prefers-reduced-motion:reduce){
  .welcome-coffee-scene,.welcome-hookah-scene,.coffee-steam i,.hookah-smoke i{animation:none!important}
  .coffee-steam i,.hookah-smoke i{opacity:.22;transform:none!important}
}
'''

html = html.replace(old_markup, new_markup, 1)
insert_at = html.rfind('</style>')
if insert_at == -1:
    raise SystemExit('Style closing tag not found; no changes were made.')
html = html[:insert_at] + '\n' + css + '\n' + html[insert_at:]
path.write_text(html, encoding='utf-8')
print('Welcome composition patch applied successfully.')
