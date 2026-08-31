# NABTURA Website Project - Team Development & Execution Plan

This document outlines the strategy for 5 collaborators to work simultaneously on the NABTURA Next.js project without merge conflicts. It includes a project status review, scope of remaining work, and a conflict-free work breakdown structure.

---

## 1. Project Status (What We Have Done So Far)

The foundation of the NABTURA website is fully established in the GitHub repository (`poorni-dev` branch). 

**Architecture & Infrastructure:**
- Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.
- Monorepo folder structure created (`frontend/` and `backend/`).
- Global color theme implemented in `globals.css` (Premium Slate, Emerald Green, Cyan Water Accent, Desert Sand).

**Completed Homepage Components (Phase 01 & 03):**
- **Section 01:** Hero Cinematic Sequence
- **Section 02:** The Commercial Challenge (Food, Water, Climate, Space, Green)
- **Section 03:** The NABTURA Difference & Smart Cycle (Smart, Controlled, Adapted)
- **Section 04:** Featured Commercial Solutions (Greenhouse, Microgreens, Landscapes visuals)
- **Section 06:** Who We Serve (Interactive audience selector)

---

## 2. Scope of Remaining Work

Based on the full Development Guide, the following phases must be built:

**A. Remaining Homepage Sections:**
- Sec 05: Complete Ecosystem Diagram
- Sec 07: Green Where It Matters (Rotating Concepts)
- Sec 08: Space Transformation (Before/After)
- Sec 09: Smart Growing / Food Credibility Journey
- Sec 10: Water Intelligence Sequence
- Sec 11-15: Growing Food, How We Work, Investment, UAE Credibility
- Sec 17-18: Final Commercial CTA & Global Footer

**B. Dedicated Pages (Sitemap Phase 02):**
- **Solutions Mega-Menu & Pages:** Smart Greenhouses, Smart Microgreens, Landscapes, Smart Irrigation, Urban Forests, Desert Greening, Environmental Projects.
- **Possibilities Gallery Page**
- **About NABTURA & INFORGRID FZC Pages**
- **Contact / Commercial Enquiry Router**

---

## 3. Division of Labor (For 5 Developers)

To prevent merge conflicts, each developer is assigned **isolated routes** and **isolated component directories**. 

### 🧑‍💻 Developer 1: Homepage Interactives
**Focus:** Complex interactive UI sections for the middle of the homepage.
**Assigned Tasks:**
- Sec 05: Ecosystem Diagram
- Sec 07: Green Where It Matters (Interactive rotating concepts)
- Sec 08: What Could Your Space Become? (Before/After interactions)
- Sec 09 & 10: Smart Growing Journey & Water Intelligence sequences.
**Workspace:** `frontend/src/components/home/interactives/`

### 🧑‍💻 Developer 2: Homepage Conversion & Global UI
**Focus:** Bottom of the homepage, global navigation, and final CTAs.
**Assigned Tasks:**
- Build the **Solutions Mega-Menu** in the Header.
- Sec 11 to 15: How We Work, Investment & Partnership cards, UAE Credibility.
- Sec 17 & 18: Final CTA logic and Global Footer.
**Workspace:** `frontend/src/components/home/conversion/` & `frontend/src/components/layout/`

### 🧑‍💻 Developer 3: Agriculture & Water Solutions Pages
**Focus:** Creating the heavy, content-rich pages for core commercial solutions.
**Assigned Tasks:**
- `app/solutions/smart-greenhouses/page.tsx`
- `app/solutions/smart-microgreens/page.tsx`
- `app/solutions/smart-irrigation/page.tsx`
- Reusable solution UI components (e.g., CTA banners, feature grids).
**Workspace:** `frontend/src/app/solutions/` & `frontend/src/components/solutions/`

### 🧑‍💻 Developer 4: Greening Solutions & Possibilities
**Focus:** Environmental pages and the visual possibilities gallery.
**Assigned Tasks:**
- `app/solutions/landscapes/page.tsx`
- `app/solutions/urban-forests/page.tsx`
- `app/solutions/desert-greening/page.tsx`
- `app/solutions/environmental-projects/page.tsx`
- `app/possibilities/page.tsx` (Possibilities Gallery)
**Workspace:** `frontend/src/app/solutions/` & `frontend/src/app/possibilities/`

### 🧑‍💻 Developer 5: Corporate Hub & Enquiry Backend
**Focus:** Corporate credibility pages and the dynamic contact form backend.
**Assigned Tasks:**
- `app/about/page.tsx` (About NABTURA)
- `app/inforgrid/page.tsx` (INFORGRID FZC)
- `app/contact/page.tsx` (Dynamic Enquiry Router: "What brings you to Nabtura?")
- Setup API endpoints in `frontend/src/app/api/contact/` or the `backend/` folder to handle form submissions (email/WhatsApp integration).
**Workspace:** `frontend/src/app/about/`, `frontend/src/app/contact/`, and Backend APIs.

---

## 4. Git Workflow & Conflict Prevention Rules

If all 5 members follow these exact rules, there will be **zero merge conflicts**:

1. **Branch Naming Strategy:**
   Never push to `poorni-dev` directly. Create branches using the format: `feature/dev-name/task` 
   *(Example: `feature/kamal/smart-greenhouse-page`)*
   
2. **File Isolation (The Golden Rule):**
   - Do NOT edit files that belong to another developer's scope.
   - Do NOT edit `page.tsx` on the homepage simultaneously. Instead, Developers 1 & 2 should build their sections inside their own component files. Once finished, one assigned "Lead Developer" merges those components into the main `page.tsx`.
   - Do NOT edit `globals.css` or `tailwind.config.ts` without informing the team.

3. **Pull Request (PR) Workflow:**
   - Once a feature is done, push the branch to GitHub and create a **Pull Request** to `poorni-dev`.
   - Another team member should review the code before clicking "Merge".
   - After a PR is merged, all other developers MUST run `git pull origin poorni-dev` on their local machines before starting their next task to keep their code updated.

4. **Component Reusability:**
   If multiple developers need the same button style or card style, Developer 2 should create it in `src/components/ui/` first, and others should import it.
