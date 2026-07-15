# Kuriausity Website — Complete Image Inventory

This document lists every image needed for each page and tab of the website. Recommended dimensions, style notes, and priority levels are included for each.

**Current Status:** 2 of 25+ images available (Rice Sally Port, Petrus Alphonsi). All others need to be sourced.

---

## Already Available (2 images)

| # | File | Page | Location | Priority |
|---|------|------|----------|----------|
| 1 | `rice-sally-port.jpg` | About | Background (Hero, Timeline, CTA) | Used |
| 2 | `petrus-alphonsi.jpg` | About | Background (Values, Co-Consultants) | Used |

---

## HOME PAGE (`/`)

| # | Element | Dimensions | Description / Suggestion | Priority |
|---|---------|------------|--------------------------|----------|
| 3 | Hero fallback background | 1920x1080 | Abstract emerald neural network pattern — dark greens and teal lines on black, subtle and non-distracting. Used if 3D brain fails to load. | Low |
| 4 | Testimonial avatar — Sarah M. | 200x200 | Professional portrait of a woman, 40s, warm. Or approved generic placeholder. | Medium |
| 5 | Testimonial avatar — Dr. James R. | 200x200 | Professional portrait of a man, 50s, academic. Or approved generic placeholder. | Medium |
| 6 | Testimonial avatar — Lisa T. | 200x200 | Professional portrait of a woman, 40s, put-together. Or approved generic placeholder. | Medium |

**Home Page Total:** 4 images (3 new)

---

## SERVICES PAGE (`/services`)

### Section 1: Monthly Tutoring
No images required — purely text/icon based.

### Section 2: 90-Day Courses (14 course card thumbnails)

Each card has a thumbnail placeholder showing the category name. These should be replaced with evocative imagery.

| # | Course | Dimensions | Description / Suggestion | Priority |
|---|--------|------------|--------------------------|----------|
| 7 | NeuroLSAT | 800x450 (16:9) | Law library interior, leather-bound books, or abstract logic gate pattern in emerald tones. Could use a darkened photo of a courtroom or study. | High |
| 8 | Speakers Corner | 800x450 | Orator at a classical podium, a speaker addressing an audience, or a vintage microphone. Dark background preferred. | High |
| 9 | Competitive Debate & Forensics | 800x450 | Two figures facing each other in dialogue, a debate chamber, or tournament setting. Dramatic lighting. | High |
| 10 | SAT Prep | 800x450 | Mathematical equations on a chalkboard, geometric patterns, or a focused student at a desk. Dark and scholarly. | High |
| 11 | ACT Prep | 800x450 | Science lab equipment, periodic table detail, or a timed test environment. Should feel precise and analytical. | High |
| 12 | College Admissions Masterclass | 800x450 | University campus gate, ivy-covered building, or an open acceptance letter. Prestigious and aspirational. | Medium |
| 13 | Essay Writing Tour de Force | 800x450 | Vintage writing desk with quill, open journal with handwritten text, or stacked books with reading glasses. Literary and warm. | Medium |
| 14 | AI & Real Ethics | 800x450 | Circuit board close-up, neural network visualization, or human silhouette merging with digital patterns. Futuristic but serious. | Medium |
| 15 | Sacred Texts & Traditions | 800x450 | Illuminated manuscript page, ancient scroll unfurled, or comparative religious symbols arranged artfully. Scholarly and reverent. | Medium |
| 16 | World Art AP-reciation | 800x450 | Famous painting detail (public domain), museum gallery interior, or artistic brushstrokes close-up. Rich with color. | Medium |
| 17 | Executive Function Training | 800x450 | Organized workspace with planner, color-coded system, or a student with headphones in focused study. Clean and structured. | Medium |
| 18 | History of Philosophy | 800x450 | Greek columns, classical bust (Plato/Aristotle), or ancient philosophical manuscript. Timeless and academic. | Medium |
| 19 | Introduction to Biopolitics | 800x450 | Vintage anatomical illustration, power structure diagram, or body politic concept art. Intellectual and slightly provocative. | Low |
| 20 | Pre-Mortem Advisory | 800x450 | Chess board mid-game, strategic map with markers, or an analytical boardroom setting. Should convey high-stakes decision making. | Medium |

**Services Page Total:** 14 images (all new)

### Section 3: Advisory Services
No images required — table-based layout.

---

## ABOUT PAGE (`/about`)

| # | Element | Dimensions | Description / Suggestion | Priority |
|---|---------|------------|--------------------------|----------|
| 21 | Michael Kurian portrait | 600x800 (3:4) | Professional headshot or environmental portrait of the founder. Warm lighting, academic setting preferred. Replaces the gradient "K" avatar in the profile section. | High |

**About Page Total:** 1 image (new)

### Background Images (Already Available)
- Rice Sally Port — used in Hero, Timeline, and CTA sections
- Petrus Alphonsi Dialogues — used in Values and Co-Consultants sections

---

## RESULTS PAGE (`/results`)

| # | Element | Dimensions | Description / Suggestion | Priority |
|---|---------|------------|--------------------------|----------|
| 22 | Student success hero image | 1920x600 | Graduation caps thrown in air, a student with an acceptance letter, or a celebratory academic moment. Wide panoramic crop. | Low |

**Results Page Total:** 1 image (new)

---

## POST-MORTEM ADVISORY PAGE (`/post-mortem-advisory`)

| # | Element | Dimensions | Description / Suggestion | Priority |
|---|---------|------------|--------------------------|----------|
| 23 | Advisory hero background | 1920x800 | Strategic planning scene — chess pieces, a decision tree diagram, or a dramatic architectural interior (like a boardroom or library). Dark tones. | Low |

**Post-Mortem Advisory Total:** 1 image (new)

---

## BLOG PAGE (`/blog`)

| # | Element | Dimensions | Description / Suggestion | Priority |
|---|---------|------------|--------------------------|----------|
| 24 | Blog post thumbnails (6) | 600x340 (16:9) | Each blog post needs a thumbnail: ADHD classroom, SAT test booklet, debate podium, college essay draft, neurodiverse learner tools, LSAT logic games. One per post. | Low |

**Blog Page Total:** 6 images (all new)

---

## CONTACT PAGE (`/contact`)
No images required.

---

## GRAND TOTAL

| Page | Images Needed | Priority Breakdown |
|------|--------------|--------------------|
| Home | 3 | 3 Medium |
| Services | 14 | 5 High, 7 Medium, 1 Low, 1 Medium |
| About | 1 | 1 High |
| Results | 1 | 1 Low |
| Post-Mortem Advisory | 1 | 1 Low |
| Blog | 6 | 6 Low |
| **Already have** | **2** | — |
| **GRAND TOTAL NEEDED** | **26** | **5 High / 10 Medium / 11 Low** |

---

## STYLE GUIDELINES FOR ALL IMAGES

### Color Treatment
All images should work within the dark Opal Malachite palette:
- **Preferred:** Naturally dark-toned photography (night scenes, dark interiors, moody lighting)
- **Acceptable:** Bright images with a dark overlay applied in CSS
- **Avoid:** Bright white backgrounds, saturated primary colors, stock-photo smiles

### Consistency
- Course card thumbnails should share a consistent treatment (e.g., all at 85% saturation with slight emerald color grade, or all monochrome with a single accent color)
- Background images should fade smoothly into the section background color via CSS gradients (already implemented on About page)

### Technical
- Format: JPG for photos, PNG for images with transparency
- Save to: `/mnt/agents/output/app/public/images/` (they'll be served at `/images/filename.jpg`)
- Optimal file size: Under 200KB per image for fast loading

### Public Domain Sources
- Wikimedia Commons (university campuses, classical art, historical manuscripts)
- Unsplash (moody academic photography)
- Library of Congress (historical documents and photographs)
- NYPL Digital Collections (illuminated manuscripts, vintage illustrations)
