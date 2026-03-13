

## Replace All Stock Images with AI-Generated Images

### Scope

The project has **~45 unique Unsplash stock image URLs** spread across **18 files**. These will be replaced with AI-generated images that depict realistic Indian NGO/community scenes matching AGR Foundation's work.

### Image Categories & Count

| Category | Count | Description |
|----------|-------|-------------|
| Education | 8 | Indian classrooms, school supplies distribution, graduation, computer training |
| Healthcare | 6 | Health camps, mobile clinics, senior care, medical checkups |
| Community | 6 | Community gatherings, relief distribution, kitchen, awareness programs |
| Sustainability | 3 | Tree planting, eco-packaging, environmental projects |
| Events | 4 | Fundraiser gala, celebration, workshops |
| Volunteers | 3 | Volunteer training, helping, team meetings |
| Livelihood | 3 | Tailoring training, skill development, entrepreneurship |
| Causes | 8 | Lake cleaning, wheelchair, water filter, medical treatment |
| Focus Areas | 5 | Rural development, skill dev, social welfare, women's empowerment, environment |
| News Hero | 1 | Newspaper/media background |

**Total: ~47 unique images to generate**

### Implementation Approach

Since there's no backend, I'll use the AI image generation capability to create each image, save them as local assets in `src/assets/generated/`, and update all file references.

**Phase 1 - Generate images** (organized in subdirectories):
```text
src/assets/generated/
├── education/        (8 images)
├── healthcare/       (6 images)
├── community/        (6 images)
├── sustainability/   (3 images)
├── events/           (4 images)
├── volunteers/       (3 images)
├── livelihood/       (3 images)
├── causes/           (8 images)
├── focus/            (5 images)
└── news/             (1 image)
```

**Phase 2 - Update all file references** across these files:

| File | Images to Replace |
|------|-------------------|
| `src/components/GallerySection.tsx` | 5 |
| `src/components/CausesSection.tsx` | 5 |
| `src/components/NewsSection.tsx` | 3 |
| `src/pages/Gallery.tsx` | 14 |
| `src/pages/Events.tsx` | 6 |
| `src/pages/News.tsx` | 7 (includes hero bg) |
| `src/pages/causes/LakeCleaning.tsx` | 4 |
| `src/pages/causes/PhysicallyChallengedTreatment.tsx` | 4 |
| `src/pages/causes/WaterFilterSchool.tsx` | 4 |
| `src/pages/causes/WheelchairStudent.tsx` | 3 |
| `src/pages/causes/WheelchairElderly.tsx` | 3 |
| `src/pages/focus/EnvironmentalSafety.tsx` | 1 |
| `src/pages/focus/RuralDevelopment.tsx` | 1 |
| `src/pages/focus/SkillDevelopment.tsx` | 1 |
| `src/pages/focus/SocialWelfare.tsx` | 1 |
| `src/pages/focus/WomensEmpowerment.tsx` | 1 |
| `src/pages/programs/Healthcare.tsx` | already uses local asset |

### Image Generation Prompts

Each image will be generated with prompts specific to Indian rural/community context. Examples:
- "Indian rural school classroom with children studying, natural lighting, realistic photograph"
- "Free medical health camp in Indian village with doctors checking patients, outdoor setting"
- "Indian women learning tailoring in a vocational training center, realistic photo"
- "Temple lake in South India being cleaned by community volunteers"

### What Won't Change

- The 4 existing local hero images (`hero-volunteers.jpg`, `education-program.jpg`, `healthcare-program.jpg`, `livelihood-program.jpg`) stay as-is
- The local gallery images (`biodegradable-bag.jpg`) stay as-is
- The `agr-logo.svg` stays as-is

### Technical Notes

- All generated images will be saved as `.jpg` files (~800px wide for gallery, ~1200px for hero images)
- Import paths will use the `@/assets/generated/` alias
- Images shared across multiple files (e.g., same healthcare image in Gallery and Events) will use a single generated file imported in both places
- This will eliminate all external Unsplash dependencies, making the site load faster and work offline

