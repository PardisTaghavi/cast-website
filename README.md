# CAST — Semi-Supervised Foundation Model Distillation (CVPRW 2026)

A static academic project page for the paper:

> **Training a Student Expert via Semi-Supervised Foundation Model Distillation**
> Pardis Taghavi, Tian Liu, Renjie Li, Reza Langari, Zhengzhong Tu — Texas A&M University
> CVPR 2026 Workshop (Open Access)

## Files

```
cast-website/
├── index.html                  # main page (1130 lines)
├── assets/
│   ├── cast_logo.svg           # CAST wordmark + monogram
│   ├── Taghavi_CAST_CVPRW2026.pdf   # paper PDF for download
│   └── figures/                # 7 figures cropped from the paper
│       ├── fig1_framework.png
│       ├── fig2_efficiency.png
│       ├── fig3_empirical.png
│       ├── fig4_qualitative_cityscapes.png
│       ├── fig5_bias_reduction.png
│       ├── fig6_qualitative_ade20k.png
│       └── fig7_radar.png
└── static/
    ├── css/                    # Bulma 0.9.4 + index.css overrides
    └── js/                     # fontawesome, bulma plugins, index.js
```

## Run locally

```bash
cd cast-website
python3 -m http.server 8765
# open http://localhost:8765/index.html
```

## Deploy to GitHub Pages

1. Create a repo (e.g. `cast-website`) and push this directory.
2. Settings → Pages → Source: `Deploy from a branch` → `main` / `(root)`.
3. The page will be live at `https://<user>.github.io/cast-website/`.

## Sections

1. **Hero** — title, authors, links (Paper / arXiv / Code / BibTeX / Contact)
2. **Headline Results** — 4 stat cards (+11.9, +8.6, +3.4 maskAP, 11× smaller)
3. **TL;DR** — one-paragraph summary
4. **Teaser** — Figure 1 (three-stage framework)
5. **Overview** — the three stages + two key ideas
6. **Method** — instance-aware pixel-wise contrastive loss + Proposition 3.1
7. **Empirical Validation** — Figure 3 (margin / FNR / contrastive loss)
8. **Unified Training Framework** — joint objective + three stage equations
9. **Main Results** — Table 1 (Cityscapes & ADE20K)
10. **Efficiency at a Glance** — Figure 2 + Figure 7 + 4 stat cards
11. **Ablation Studies** — Tables 2–6
12. **Qualitative Results** — Figures 4, 5, 6
13. **Conclusion** + **BibTeX** + **Acknowledgments** + **Footer**

## Design notes

- Based on the **Academic Project Page Template** (Eliahu Horwitz) with design cues borrowed
  from the [Sparse VideoGen 2](https://svg-project.github.io/v2/) project page.
- CAST color scheme: deep purple `#500050` (matches DINOv2 / Mask2Former / Grounding-DINO
  visual identity used in the paper's Figure 1).
- All result tables are re-typeset in HTML (best / second-best cells highlighted in light blue)
  rather than screenshots — easier to read, accessible, and selectable.
- All seven paper figures are cropped from the PDF (no source files / original SVGs available)
  and embedded as PNGs at 200 DPI.
- Image modal with keyboard navigation (←/→/Esc) — click any figure to enlarge.
- BibTeX button copies citation to clipboard.

## Customization TODOs

- [ ] Replace `Code (coming)` with the actual GitHub link once public.
- [ ] Replace `arXiv` placeholder with the real arXiv URL once available.
- [ ] Add author personal-page links in the byline (currently `href="#"`).
- [ ] Optionally swap the cropped PNG figures for higher-quality originals if
      the source `.pdf` is re-rendered with vector output.

## License

This website is licensed under a
[Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).
