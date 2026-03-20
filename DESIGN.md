# Design System Specification: The Knowledge Architect

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Cartographer"**
This design system moves beyond the "SaaS Dashboard" trope to embrace the precision of high-end cartography and the depth of architectural blueprints. For a knowledge graph application, the UI must not compete with the data; it must provide a sophisticated stage for it. 

We break the "template" look by rejecting rigid borders in favor of **Tonal Depth** and **Asymmetric Information Density**. The system utilizes a hyper-legible typographic scale and a "glass-on-glass" layering philosophy to make complex data relationships feel breathable, intentional, and premium.

---

## 2. Colors & Surface Philosophy
The palette is rooted in deep obsidian and technical blues, punctuated by high-frequency accents for data nodes.

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders (`outline`) for sectioning or layout containment. 
*   **How to define boundaries:** Use background shifts. A `surface-container-low` panel sitting on a `surface` background creates a clean, sophisticated edge.
*   **The "Ghost Border" Fallback:** If a border is required for extreme accessibility cases, use `outline-variant` at **15% opacity**. Never use 100% opaque lines.

### Surface Hierarchy & Nesting
Treat the interface as a series of physical layers. 
*   **Base Level:** `surface` (#121416)
*   **Primary Containers:** `surface-container-low` (#1a1c1e)
*   **Nested Elements (Cards/Modals):** `surface-container-high` (#282a2c) or `surface-container-highest` (#333537).
*   **The "Glass & Gradient" Rule:** For floating side panels or dropdowns, use `surface-container-highest` with a **20px Backdrop Blur** and 85% opacity. This "Glassmorphism" ensures the knowledge graph remains visible beneath the UI, maintaining spatial context.

### Signature Accents (The Node Logic)
*   **Primary Logic:** `primary` (#b0c6ff) – Use for core navigation and "Parent" nodes.
*   **Secondary Logic:** `secondary` (#adcbda) – Use for "Attribute" or "Metadata" nodes.
*   **Tertiary Logic:** `tertiary` (#00daf3) – Use for "Action" nodes or high-priority connections.

---

## 3. Typography
We utilize a pairing of **Space Grotesk** (Display/Headlines) and **Inter** (UI/Data).

*   **Space Grotesk (The Technical Edge):** Used for `display` and `headline` scales. Its tabular-leaning widths and geometric forms evoke a sense of engineered precision. 
    *   *Directorial Note:* Use `display-md` (2.75rem) for main workspace titles with a letter-spacing of -0.02em to create an authoritative, editorial feel.
*   **Inter (The Data Workhorse):** Used for `title`, `body`, and `label`. Inter’s high x-height ensures that complex node labels remain legible at small scales (`label-sm`: 0.6875rem).
*   **Hierarchy Tip:** Contrast a `headline-sm` title in Space Grotesk with a `label-md` metadata string in Inter. The juxtaposition of the two fonts creates a "custom-build" aesthetic that standard UI lacks.

---

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering**, not shadows.

*   **The Layering Principle:** Instead of a drop shadow, place a `surface-container-lowest` card on a `surface-container-low` section. The subtle contrast (Darker-on-Lighter) creates a "recessed" look, perfect for data entry fields or search bars.
*   **Ambient Shadows:** For "Floating" Graph Nodes or Context Menus only. Use a 40px blur with 6% opacity, tinted with the `on-surface` color. 
    *   *Shadow Token:* `0 20px 40px rgba(226, 226, 229, 0.06)`.
*   **Motion Depth:** When a side panel opens, use a subtle `primary-container` gradient overlay (10% opacity) on the main workspace to "push" the graph back into the distance.

---

## 5. Components

### The "Integrated" Side Panel
*   **Style:** No borders. Background: `surface-container-low`.
*   **Header:** `title-lg` (Inter) with a subtle `tertiary` accent bar (2px wide) on the left to indicate focus.
*   **Separation:** Use `3.5rem` (Spacing 16) of vertical white space between content groups instead of dividers.

### Buttons & CTAs
*   **Primary:** `primary` background with `on-primary` text. Use `md` (0.375rem) roundedness.
*   **Secondary/Ghost:** `outline-variant` background at 10% opacity. No border. On hover, transition to 20% opacity. 
*   **The "Signature" CTA:** For the main "Analyze" or "Connect" action, use a linear gradient: `primary` to `primary-container` at a 135-degree angle.

### Data Chips (Node Indicators)
*   **Style:** `surface-container-highest` background.
*   **Indicator:** A 6px solid circle of `tertiary` or `secondary` on the left.
*   **Typography:** `label-md` (Inter), uppercase with 0.05em letter spacing.

### Input Fields & Search
*   **State:** `surface-container-lowest`. 
*   **Focus:** Do not change the border. Instead, change the background to `surface-container-highest` and add a `primary` glow (2px) to the inner bottom edge only.

### Knowledge Graph Nodes
*   **Interaction:** On hover, a node should scale 1.1x and gain a `surface-tint` glow.
*   **Connection Lines:** Use `outline-variant` at 30% opacity. Use `tertiary` for active paths.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** embrace asymmetry. If a side panel is 400px wide, ensure the graph workspace feels expansive by using the `24` spacing scale (5.5rem) for margins.
*   **Do** use "Surface Nesting" to group related data. A `surface-container-high` card on a `surface-container-low` background is the standard for grouping.
*   **Do** use `tertiary` (#00daf3) sparingly. It is a high-frequency color intended to draw the eye to critical graph insights or "New" data points.

### Don't:
*   **Don't** use 1px dividers. If you feel the need for a line, increase the spacing (`1.5` to `2.5`) or shift the background tone instead.
*   **Don't** use pure black (#000000) or pure white (#FFFFFF). Use the provided `surface` and `on-surface` tokens to maintain the technical, cinematic atmosphere.
*   **Don't** use standard "Drop Shadows." They muddy the clean, technical aesthetic. Stick to Tonal Layering.

---

## 7. Spacing & Rhythm
Consistency in the "air" between elements is what makes a technical app feel professional.
*   **Component Internal Padding:** Use `spacing-3` (0.6rem) or `spacing-4` (0.9rem).
*   **Section Gaps:** Use `spacing-10` (2.25rem) or `spacing-12` (2.75rem).
*   **The "Knowledge Gap":** When displaying large-scale graphs, ensure a minimum margin of `spacing-20` (4.5rem) from the edge of the viewport to the nearest UI panel.