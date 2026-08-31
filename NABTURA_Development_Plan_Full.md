# NABTURA FULL PROJECT DEVELOPMENT PLAN
**A Phase-by-Phase Execution Guide for 5 Developers**

This document provides a highly detailed, step-by-step development breakdown for the NABTURA commercial website. It extracts every requirement from the official Brand & Website Direction Guide and divides the workload cleanly among 5 Developers to ensure zero merge conflicts.

---

## 🏗️ 1. GIT COLLABORATION & RULES (CRITICAL)

To avoid conflicts when 5 people edit the same Next.js project:
1. **Never push directly to `poorni-dev` or `main`.**
2. **Branching Strategy:** `feature/<dev-name>/<component-name>` (e.g., `feature/dev1/smart-greenhouse-page`).
3. **File Isolation:** Do NOT edit the root `src/app/page.tsx` simultaneously. Each developer builds their section inside their own folder in `src/components/`. The Lead Dev will import them into `page.tsx` at the end.
4. **CSS & Styling:** Do not change `globals.css` colors. Use the predefined CSS variables: `var(--color-nabtura-green)`, `var(--color-nabtura-slate)`, `var(--color-nabtura-blue)`, and `var(--color-nabtura-sand)`.

---

## 🎯 2. WHAT IS ALREADY COMPLETED

The foundational Next.js architecture is done. The following Homepage components are complete in `src/components/home/`:
- **Section 01:** Cinematic Hero ("SMART. CONTROLLED. ADAPTED.")
- **Section 02:** The Commercial Challenge ("FOOD. WATER. CLIMATE. SPACE. GREEN.")
- **Section 03:** The NABTURA Difference (3 Pillars & Smart Cycle Animation)
- **Section 04:** The 3 Hero Businesses (Greenhouses, Microgreens, Landscapes)
- **Section 06:** Who We Serve (Interactive audience selector)

---

## 🚀 3. PHASE-BY-PHASE DEVELOPER ASSIGNMENTS

Here is the exact task breakdown for Developers 1 to 5. Every task contains the precise copy and CTAs required by the guide.

### 🧑‍💻 DEVELOPER 1: Homepage Interactives & Completion
*Workspace:* `frontend/src/components/home/interactives/`

**Task 1: The Complete Ecosystem (Section 05)**
- **Headline:** ONE VISION. SEVEN SOLUTIONS.
- **Action:** Build an interactive diagram (not standard cards) grouping the 7 businesses into: GROW FOOD (Greenhouses, Microgreens), MANAGE WATER (Irrigation), CREATE GREEN (Landscapes, Urban Forests, Desert Greening), TRANSFORM (Environmental Projects).

**Task 2: Green Where It Matters (Section 07)**
- **Eyebrow:** PURPOSE-BUILT GREEN | **Headline:** GREEN CAN DO MORE.
- **Copy:** GROW. FEED. TEACH. RELAX. GATHER. BEAUTIFY. RESTORE.
- **Action:** Build a full-screen rotating concept visualizer (Dining Forest, Learning Garden, Urban Oasis, Edible Landscape, Productive Rooftop) with "EXPLORE POSSIBILITIES" CTA.

**Task 3: Space Transformation (Section 08)**
- **Headline:** YOU HAVE THE SPACE. LET'S EXPLORE THE POSSIBILITY.
- **Action:** Build a "Before/After" interactive slider. (e.g., Empty Land -> Smart Greenhouse).

**Task 4: Growing & Water Intelligence (Sections 09 & 10)**
- **Sec 09 Headline:** KNOW HOW YOUR FOOD IS GROWN. 
  - *Journey:* SEED → WATER → NUTRIENTS → ENVIRONMENT → MONITORING → HARVEST.
- **Sec 10 Headline:** EVERY DROP HAS VALUE.
  - *Journey:* SENSE → DECIDE → DELIVER → MONITOR → OPTIMIZE.

---

### 🧑‍💻 DEVELOPER 2: Agriculture & Water Solutions Pages
*Workspace:* `frontend/src/app/solutions/`

**Task 1: Smart Greenhouses Page**
- **Action:** Build the richest page. Include: "Why Controlled Growing?", "SMART/CONTROLLED/ADAPTED", "How it Works", "Climate Management", "What Can You Grow?", "Investment Opportunities".

**Task 2: Smart Microgreens Page**
- **Headline:** GROW CLOSER TO WHERE FOOD IS USED.
- **Structure:** "What Are Microgreens?", "Controlled Indoor Environment", "Who Is It For?"
- **Action:** Add the Hospitality concept block: "GROWN HERE. HARVESTED HERE. SERVED HERE."

**Task 3: Smart Irrigation Page**
- **Headline:** EVERY DROP HAS A JOB.
- **Structure:** "The Water Challenge", "Sensors, Weather Data, Zoning, Automation", "Precision Delivery".
- **Rule:** This must be positioned as a *Standalone Solution*.

---

### 🧑‍💻 DEVELOPER 3: Greening Solutions & Environment Pages
*Workspace:* `frontend/src/app/solutions/`

**Task 1: Landscapes Page**
- **Headline:** GREEN SPACES DESIGNED TO PERFORM.
- **Structure:** "Landscape Philosophy", Commercial/Hospitality/Residential/Edible Landscapes, "Design -> Build -> Manage".

**Task 2: Urban Forests Page**
- **Headline:** BRING NATURE INTO THE BUILT ENVIRONMENT.
- **Structure:** Organize by possibilities (Dining Forest, Learning Forest, Community Forest). "Create Your Forest" CTA.

**Task 3: Desert Greening Page**
- **Headline:** WHERE OTHERS SEE ARID LAND, WE SEE POSSIBILITY.
- **Structure:** "Site Assessment", "Soil/Growing Medium Strategy", "Water Strategy", "Long-Term Management".

---

### 🧑‍💻 DEVELOPER 4: The Commercial Funnel & Possibilities UI
*Workspace:* `frontend/src/app/possibilities/` & `frontend/src/components/layout/`

**Task 1: Possibilities Gallery (Top Level Navigation)**
- **Headline:** IMAGINE WHAT YOUR SPACE COULD BECOME.
- **Action:** Build a visual gallery of concept examples (Smart Villa Garden, Forest Restaurant, Green School, Edible Corporate Campus). Use the Situation → Idea → NABTURA Solution format.

**Task 2: Mega-Menu Header & Global Footer**
- **Action:** Update the site Header to feature a Mega-Menu for "SOLUTIONS" (organized by Grow Food, Manage Water, Create Green, Transform). 
- **Footer:** Add all 7 businesses, Explore links, and WhatsApp contact details.

**Task 3: Homepage Conversion Blocks (Sections 11 - 15)**
- **Action:** Build the bottom of the Homepage. 
- *How We Work:* 3 clean cards ("WE CREATE. YOU OPERATE.", "WE CREATE. WE MANAGE.", "WE ADVISE. YOU DEVELOP.").
- *Investment:* "LOOKING FOR SOMETHING THAT GROWS?"
- *UAE Credibility:* "BASED IN THE UAE. BUILT FOR WIDER MARKETS."

---

### 🧑‍💻 DEVELOPER 5: Corporate Credibility & Enquiry Router (Backend)
*Workspace:* `frontend/src/app/about/` & `frontend/src/app/contact/`

**Task 1: The Commercial Enquiry Router (Contact Page)**
- **Headline:** WHAT BRINGS YOU TO NABTURA?
- **Action:** Build an interactive dynamic form. User selects: "I Want to Invest", "I Have a Location", "I Want to Grow Food", etc.
- If "I Have a Location" is clicked, show dynamic questions: What type? Where is it? Size?
- Output leads to WhatsApp, Telephone, or Email submission.

**Task 2: About NABTURA Page**
- **Action:** Answer the questions: Who Are We? Why NABTURA? Our Philosophy. Our Approach to Sustainability. 

**Task 3: INFORGRID FZC Page**
- **Action:** Create a dedicated corporate page establishing the UAE presence and corporate credibility behind the NABTURA brand.

---

## 🛑 CHECKLIST FOR SUCCESSFUL MERGES
1. Developer pulls `poorni-dev`.
2. Developer creates `feature/devX/task`.
3. Developer builds component.
4. Developer runs `npm run dev` to ensure no errors.
5. Developer pushes branch to GitHub and opens a Pull Request.
6. Lead Developer reviews, merges to `poorni-dev`.
7. All other developers run `git pull origin poorni-dev` before starting the next task.
