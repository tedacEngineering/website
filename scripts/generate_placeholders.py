"""Generates the demo SVG images in public/images. Run: python3 scripts/generate_placeholders.py
Replace any image by dropping a real photo in public/images and updating src/data/images.js."""
import random, os
OUT = os.path.join(os.path.dirname(__file__), '..', 'public', 'images')
os.makedirs(OUT, exist_ok=True)
PAL = {  # sky top, sky bottom, structure, ground, glow
 'dusk': ('#0B1F3F', '#F2A93B', '#08121f', '#060d18', '#ffd27a'),
 'day': ('#3d86d8', '#d3e8f8', '#1c3961', '#565c66', '#ffffff'),
 'dawn': ('#1b3560', '#f6c985', '#0c1a30', '#0a1424', '#fff1c9'),
 'night': ('#050F22', '#173a6c', '#030a16', '#02060e', '#6fa8ff'),
 'mist': ('#6f88a6', '#e8eef4', '#24405f', '#4a525c', '#ffffff'),
}
def sky(p, r, sx):
    t, b, _, g, glow = PAL[p]
    s = f'<defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="{t}"/><stop offset="1" stop-color="{b}"/></linearGradient><radialGradient id="g"><stop offset="0" stop-color="{glow}" stop-opacity=".95"/><stop offset="1" stop-color="{glow}" stop-opacity="0"/></radialGradient><linearGradient id="f" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff9a1f"/><stop offset="1" stop-color="#ffe9a0"/></linearGradient><linearGradient id="pp" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5fb0ff"/><stop offset=".5" stop-color="#2f7fd1"/><stop offset="1" stop-color="#17508f"/></linearGradient></defs>'
    s += '<rect width="1600" height="1000" fill="url(#s)"/>'
    s += f'<circle cx="{sx}" cy="560" r="380" fill="url(#g)"/>'
    for _ in range(6):
        s += f'<ellipse cx="{r.randint(0,1600)}" cy="{r.randint(60,420)}" rx="{r.randint(160,380)}" ry="{r.randint(14,34)}" fill="#fff" opacity=".{r.randint(10,22)}"/>'
    return s
def ground(p, y=760):
    return f'<rect y="{y}" width="1600" height="{1000-y}" fill="{PAL[p][3]}"/>'
def tower(x, b, w, h, c, lit):
    s = f'<rect x="{x}" y="{b-h}" width="{w}" height="{h}" fill="{c}"/>'
    for i in range(1, int(h / 70)):
        y = b - h + i * 70
        s += f'<rect x="{x-10}" y="{y}" width="{w+20}" height="7" fill="{c}"/><rect x="{x-10}" y="{y-26}" width="2" height="26" fill="{c}"/><rect x="{x+w+8}" y="{y-26}" width="2" height="26" fill="{c}"/>'
        if lit: s += f'<circle cx="{x+w+9}" cy="{y-30}" r="4" fill="#ffd27a"/>'
    return s + f'<rect x="{x+w//2-3}" y="{b-h-40}" width="6" height="40" fill="{c}"/>'
def flare(x, b, h, c):
    return f'<rect x="{x}" y="{b-h}" width="8" height="{h}" fill="{c}"/><ellipse cx="{x+4}" cy="{b-h-34}" rx="20" ry="46" fill="url(#f)"/><ellipse cx="{x+4}" cy="{b-h-26}" rx="9" ry="24" fill="#fff6d0"/>'
def tank(x, b, w, h, c):
    return f'<rect x="{x}" y="{b-h}" width="{w}" height="{h}" fill="{c}"/><ellipse cx="{x+w/2}" cy="{b-h}" rx="{w/2}" ry="{w/9}" fill="{c}" opacity=".85"/><ellipse cx="{x+w/2}" cy="{b}" rx="{w/2}" ry="{w/9}" fill="{c}"/><rect x="{x+w*0.08}" y="{b-h}" width="{w*0.06}" height="{h}" fill="#fff" opacity=".08"/>'
def rack(y, c, x0=0, x1=1600):
    s = ''
    for k in range(4): s += f'<rect x="{x0}" y="{y+k*14}" width="{x1-x0}" height="8" fill="{c}"/>'
    for x in range(x0, x1, 150): s += f'<rect x="{x}" y="{y}" width="10" height="{1000-y-190}" fill="{c}"/>'
    return s
def fg_pipe(r):
    s = ''
    for (x1, y1, x2, y2, w) in [(-100, 960, 1700, 700, 110), (-100, 1010, 1700, 840, 70)]:
        s += f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="url(#pp)" stroke-width="{w}"/>'
        for t in (0.2, 0.55, 0.85):
            cx, cy = x1 + (x2-x1)*t, y1 + (y2-y1)*t
            s += f'<ellipse cx="{cx}" cy="{cy}" rx="{w*0.2}" ry="{w*0.62}" fill="#17508f" transform="rotate(-8 {cx} {cy})"/>'
    s += '<rect x="1050" y="640" width="10" height="130" fill="#17508f"/><circle cx="1055" cy="636" r="44" fill="none" stroke="#c0392b" stroke-width="9"/>'
    return s
def frame(c, r):
    s = ''
    for x in range(120, 1500, 260):
        s += f'<rect x="{x}" y="180" width="18" height="700" fill="{c}"/>'
        if x < 1360: s += f'<line x1="{x+18}" y1="190" x2="{x+260}" y2="870" stroke="{c}" stroke-width="8"/><line x1="{x+260}" y1="190" x2="{x+18}" y2="870" stroke="{c}" stroke-width="8"/>'
    for y in (180, 420, 660): s += f'<rect x="100" y="{y}" width="1420" height="22" fill="{c}"/>'
    return s
def crane(x, c):
    return f'<rect x="{x}" y="200" width="16" height="560" fill="{c}"/><rect x="{x-260}" y="210" width="620" height="14" fill="{c}"/><line x1="{x+8}" y1="140" x2="{x-260}" y2="210" stroke="{c}" stroke-width="4"/><line x1="{x+8}" y1="140" x2="{x+360}" y2="210" stroke="{c}" stroke-width="4"/><line x1="{x-180}" y1="224" x2="{x-180}" y2="420" stroke="{c}" stroke-width="3"/><rect x="{x-205}" y="420" width="50" height="34" fill="#E8A90E"/>'
def workers(c, r):
    s = ''
    for x in (480, 700, 930, 1150):
        h = r.randint(300, 360)
        s += f'<rect x="{x-48}" y="{860-h+90}" width="96" height="{h-90}" rx="30" fill="{c}"/><circle cx="{x}" cy="{860-h+50}" r="40" fill="{c}"/><path d="M{x-50} {860-h+46} a50 44 0 0 1 100 0z" fill="#E8A90E"/><rect x="{x-58}" y="{860-h+42}" width="116" height="9" fill="#E8A90E"/><rect x="{x-48}" y="{860-h+130}" width="96" height="10" fill="#e9f0f7" opacity=".7"/>'
    return s
def road(p):
    return f'<polygon points="0,1000 1600,1000 980,610 620,610" fill="#2a2f38"/><polygon points="790,1000 810,1000 802,610 798,610" fill="#E8A90E" opacity=".8"/><rect y="600" width="1600" height="12" fill="{PAL[p][3]}"/>'
def scene(kind, p, seed, name):
    r = random.Random(seed); c = PAL[p][2]; lit = p in ('dusk', 'night', 'dawn')
    s = sky(p, r, r.randint(300, 1300))
    s += ''.join(f'<rect x="{x}" y="{700-h}" width="{w}" height="{h}" fill="{c}" opacity=".35"/>' for x, h, w in [(r.randint(0,1400), r.randint(40,120), r.randint(60,200)) for _ in range(9)])
    if kind == 'refinery':
        for i, x in enumerate(range(120, 1500, r.randint(250, 330))): s += tower(x, 790, r.randint(46, 84), r.randint(300, 520), c, lit)
        s += flare(r.randint(1250, 1450), 790, 560, c) + rack(700, c) + ground(p, 790)
    elif kind == 'pipeline':
        for x in range(60, 1500, 420): s += tank(x + r.randint(0, 80), 700, r.randint(240, 320), r.randint(160, 240), '#8aa4be' if p in ('day', 'mist') else c)
        s += ground(p, 700) + '<g opacity=".25">' + ''.join(f'<circle cx="{r.randint(0,1600)}" cy="{r.randint(720,990)}" r="{r.randint(2,6)}" fill="#fff"/>' for _ in range(160)) + '</g>' + fg_pipe(r)
    elif kind == 'tanks':
        for x in range(40, 1560, 380): s += tank(x, 820, 330, r.randint(230, 330), c)
        s += rack(660, c, 0, 1600) + ground(p, 820)
    elif kind == 'steel':
        s += ground(p, 880) + frame(c, r)
    elif kind == 'civil':
        s += ground(p, 600) + road(p) + crane(r.randint(1050, 1300), c)
    elif kind == 'people':
        for x in range(150, 1500, 300): s += tower(x, 800, 60, r.randint(260, 420), c, lit)
        s += ground(p, 800) + workers(c, r)
    if lit and kind in ('refinery', 'tanks', 'people'):
        s += ''.join(f'<circle cx="{r.randint(40,1560)}" cy="{r.randint(560,780)}" r="3.5" fill="#ffd27a"/>' for _ in range(40))
    s += '<rect width="1600" height="1000" fill="#000" opacity=".06"/>'
    save(name, s)
def portrait(name, seed, p):
    r = random.Random(seed); t, b, c, g, _ = PAL[p]
    s = f'<defs><linearGradient id="s" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="{t}"/><stop offset="1" stop-color="{b}"/></linearGradient></defs><rect width="1600" height="1000" fill="url(#s)"/>'
    s += f'<ellipse cx="800" cy="1060" rx="520" ry="420" fill="{c}"/><circle cx="800" cy="400" r="190" fill="{c}" opacity=".92"/><path d="M610 380 a190 170 0 0 1 380 0z" fill="#E8A90E"/><rect x="590" y="368" width="420" height="22" fill="#E8A90E"/><path d="M700 640 l100 120 100 -120" fill="none" stroke="#fff" stroke-width="10" opacity=".4"/>'
    save(name, s)
def save(name, body):
    open(os.path.join(OUT, name + '.svg'), 'w').write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">{body}</svg>')
JOBS = [
 ('hero-1','refinery','dusk'),('hero-2','pipeline','day'),('hero-3','tanks','dawn'),
 ('about-1','steel','mist'),('about-2','people','dawn'),('about-3','refinery','night'),
 ('service-1','steel','day'),('service-2','pipeline','dawn'),('service-3','civil','day'),('service-4','people','mist'),('service-5','tanks','day'),
 ('service-6','pipeline','mist'),('service-7','people','dusk'),('service-8','civil','dawn'),('service-9','refinery','mist'),
 ('project-1','pipeline','dusk'),('project-2','tanks','day'),('project-3','steel','dawn'),('project-4','refinery','night'),('project-5','civil','mist'),('project-6','people','day'),
 ('news-1','refinery','mist'),('news-2','people','day'),('news-3','pipeline','dawn'),
 ('industry-1','refinery','dusk'),('industry-2','tanks','night'),('industry-3','steel','day'),('industry-4','civil','dawn'),
 ('careers-1','people','day'),('contact-1','refinery','night'),('cta-1','pipeline','dusk'),('hse-1','people','dusk'),('process-1','steel','dawn'),
]
for i, (n, k, p) in enumerate(JOBS): scene(k, p, i * 7 + 3, n)
for i, p in enumerate(['mist', 'dawn', 'day', 'dusk']): portrait(f'team-{i+1}', 90 + i, p)
print(len(os.listdir(OUT)), 'images written')
