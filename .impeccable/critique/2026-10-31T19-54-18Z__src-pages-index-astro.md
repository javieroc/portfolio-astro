---
target: portfolio homepage
total_score: 14
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 3
target_identity: "file:/home/connan/Repositories/portfolio-astro/src/pages/index.astro"
target_fingerprint: "sha256:2c5d9a617ec8559d369531acf0a32e382fc32603a4a8d6ae0a0d1bf5edcc87c5"
target_path: /home/connan/Repositories/portfolio-astro/src/pages/index.astro
timestamp: 2026-10-31T19-54-18Z
slug: src-pages-index-astro
closed: true
---
# Critique: portfolio homepage (src/pages/index.astro)
Score 14/32 (n/a: 7, 10). 1 P0, 3 P1, 1 P2.
- [P0] Missing public/projects/vuln-scan.png: broken image on the security card. Fix: build-time existence check plus fallback.
- [P1] Cards are div onclick; the modal has no focus move/trap, no Escape, no scroll lock; no focus-visible styles; menu button unlabeled.
- [P1] /projects/[slug] orphaned and unstyled (undefined classes, gray-400, no back link, APK ignored); dublin slug malformed.
- [P1] Contrast: text-mist 1.6-1.7:1, glacier links 3.2:1, hero text ~2.6:1, Scroll 1.3:1; 10-12px card text.
- [P2] Brand motif underdelivered (Uncial unused, sword orphaned); About/Skills placed before Projects.
Minor: no reduced-motion, reveal hidden without JS, meta description placeholder, favicon type, footer year, phone format, rel=noopener, alt text noise.
