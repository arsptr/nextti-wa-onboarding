# **Next TI WhatsApp Onboarding Portal**

## **Design Direction**

> This document defines the visual and interaction direction of the Next TI WhatsApp Onboarding Portal.

> `docs/MASTER.md` defines the product vision and UX principles.

> `docs/MILESTONES.md` defines the implementation sequence.

> This document defines how the product should look, feel, and behave.

---

# **1\. Design Objective**

The interface should feel like a real enterprise onboarding tool created for customers of Next TI.

The product should communicate:

* clarity  
* trust  
* structure  
* operational confidence  
* simplicity  
* human guidance

The visual design should support the onboarding task rather than compete with it.

The customer should immediately understand:

> Where am I?

> What do I need to do?

> Who is responsible?

> Can I continue?

> What happens next?

---

# **2\. Visual Character**

The overall visual character should be:

**Professional \+ Operational \+ Calm \+ Human \+ Precise**

The interface should feel:

* intentionally designed  
* mature  
* practical  
* trustworthy  
* enterprise-ready  
* lightweight

It should NOT feel:

* flashy  
* futuristic  
* overly technical  
* playful  
* promotional  
* experimental  
* AI-generated

---

# **3\. Design Philosophy**

## **Content First**

Content and actions are more important than decoration.

The visual hierarchy should prioritize:

1. Current action  
2. Required checklist  
3. Progress / current milestone  
4. Ownership  
5. Blockers  
6. Supporting information

Decorative elements should never compete with these.

---

# **4\. Layout Philosophy**

Prefer a structured application layout over a marketing landing-page layout.

The interface should have clear spatial hierarchy.

Recommended structure:

┌─────────────────────────────────────────────┐  
│ Header / Navigation                         │  
├─────────────────────────────────────────────┤  
│                                             │  
│ Page context                                │  
│                                             │  
│ Current milestone / progress                │  
│                                             │  
│ ┌─────────────────────────────────────────┐ │  
│ │ Main onboarding content                 │ │  
│ │                                         │ │  
│ │ Current action                          │ │  
│ │                                         │ │  
│ │ Checklist                               │ │  
│ │                                         │ │  
│ │ Continue                                │ │  
│ └─────────────────────────────────────────┘ │  
│                                             │  
└─────────────────────────────────────────────┘

Do not force every page into cards.

Use containers only when they improve hierarchy or separation.

---

# **5\. Density**

Use a moderate information density.

The interface should not feel:

* cramped  
* dashboard-heavy  
* empty for the sake of minimalism

The customer should be able to scan the page quickly.

Avoid excessive vertical scrolling for simple instructions.

Longer operational content should be progressively disclosed where appropriate.

---

# **6\. Typography**

Typography should prioritize readability and hierarchy.

Use a clean, professional sans-serif typeface.

Recommended hierarchy:

Display / Page Title  
↓  
Section Heading  
↓  
Step Title  
↓  
Body  
↓  
Supporting Text  
↓  
Metadata / Helper Text

Do not use oversized typography simply to create visual impact.

Typography should communicate importance through:

* size  
* weight  
* spacing  
* placement

rather than decorative effects.

---

# **7\. Color Direction**

Use a restrained enterprise-oriented palette.

The palette should have:

* primary brand color  
* neutral background  
* surface color  
* primary text  
* secondary text  
* border  
* success  
* warning  
* error  
* informational state

Avoid building the design around gradients.

Avoid using many accent colors.

Color should communicate meaning.

Examples:

* success → completed  
* warning → attention required  
* error → blocked / failed  
* neutral → upcoming  
* primary → current action

Do not rely on color alone to communicate state.

---

# **8\. Brand Usage**

The product belongs to Next TI.

Branding should be visible but restrained.

The application should not become a marketing page for Next TI.

Prefer:

* subtle logo placement  
* clear product title  
* restrained brand color usage

Avoid:

* giant logos  
* promotional slogans  
* unnecessary company marketing sections

---

# **9\. Navigation**

Navigation should support orientation rather than exploration.

The user should always understand:

* current milestone  
* completed milestones  
* upcoming milestones  
* current location

Recommended visual model:

✓ Preparation  
✓ Meta Business Setup  
● WhatsApp Number  
○ 8x8 Configuration  
○ Integration  
○ Testing  
○ Go-Live  
○ Handover

Use a consistent visual language for:

* completed  
* current  
* upcoming  
* blocked

---

# **10\. Progress**

Milestone progress should be more important than percentage progress.

Primary:

✓ Preparation  
✓ Meta Setup  
● WhatsApp Number  
○ 8x8  
○ Integration  
○ Testing  
○ Go-Live

Optional secondary indicator:

4 of 8 milestones

Percentage should never become the dominant visual element.

Avoid gamification.

---

# **11\. Checklist Design**

Checklist is one of the primary interaction patterns.

Checklist items should be:

* clearly selectable  
* easy to scan  
* sufficiently large for touch  
* associated with understandable text

Example:

☐ I have administrator access to my Meta Business Portfolio.

☐ My company information is ready.

☐ I have access to the WhatsApp number.

☐ I can receive verification messages on the number.

The checkbox should not be visually tiny.

The entire label should preferably be clickable.

---

# **12\. Continue Button**

The Continue action is the primary progression mechanism.

### **Disabled state**

Use a clearly disabled but readable state.

The customer should understand that the action is unavailable because prerequisites are incomplete.

Do not make the disabled state visually confusing.

### **Enabled state**

The button should receive strong but restrained emphasis.

Avoid:

* glowing buttons  
* animated gradients  
* excessive motion  
* oversized buttons

Example:

\[ Continue \]

---

# **13\. Ownership Indicators**

Ownership must be visually distinct but not visually dominant.

Recommended labels:

YOU  
NEXT TI  
8x8  
META  
YOU \+ NEXT TI

The exact visual treatment can evolve during implementation.

Ownership should remain understandable without relying solely on color.

---

# **14\. Status Design**

Support these states:

### **Not Started**

Neutral visual treatment.

### **Current**

Clear primary emphasis.

### **In Progress**

Indicates work has started but is not complete.

### **Completed**

Clear completion indicator.

### **Blocked**

Strong warning/error treatment.

### **Waiting for External Party**

Indicates that progress depends on another party.

Avoid relying exclusively on icons.

Use:

Icon \+ Label \+ Context

where appropriate.

---

# **15\. Blocker Design**

Blockers should look different from normal informational content.

Example structure:

┌─────────────────────────────────────────┐  
│ ⚠ Verification pending                  │  
│                                         │  
│ Meta is currently reviewing your        │  
│ business information.                   │  
│                                         │  
│ Owner                                    │  
│ META                                    │  
│                                         │  
│ What you can do                         │  
│ Review your submitted information.      │  
└─────────────────────────────────────────┘

Do not use aggressive red styling for every blocker.

The visual treatment should communicate importance without creating unnecessary anxiety.

---

# **16\. Cards and Containers**

Cards are allowed when they provide meaningful grouping.

Use cards for:

* current onboarding task  
* blocker  
* important supporting information  
* grouped checklist  
* contextual help

Do not create cards for every piece of content.

Avoid:

Card  
Card  
Card  
Card  
Card

as the default page structure.

Prefer a strong page hierarchy with selective containers.

---

# **17\. Border and Radius**

Use a restrained border system.

Borders should help establish:

* grouping  
* hierarchy  
* interactive boundaries

Avoid excessive borders around every element.

Corner radius should be consistent.

Avoid making every component extremely rounded.

Do not default to large pill-shaped containers.

---

# **18\. Icons**

Use icons only when they improve comprehension.

Good uses:

* completion  
* warning  
* error  
* information  
* navigation  
* external link  
* help

Avoid:

* decorative icon grids  
* random icon illustrations  
* icons without semantic meaning  
* excessive emoji usage

Iconography should be consistent.

---

# **19\. Illustration**

Illustrations are optional and should not be necessary to understand the product.

If used, they should support:

* explanation  
* orientation  
* process understanding

Avoid generic AI-generated illustrations.

Do not add illustrations simply to fill empty space.

---

# **20\. Motion**

Motion should be functional.

Good uses:

* state transitions  
* checklist confirmation  
* step transitions  
* navigation feedback  
* progressive disclosure

Avoid:

* excessive entrance animations  
* floating objects  
* animated gradients  
* perpetual motion  
* decorative particles  
* exaggerated success animations

The product should remain useful with motion disabled.

---

# **21\. Responsive Design**

The product must be designed responsively from the beginning.

Do not treat mobile as a later adaptation of desktop.

### **Desktop**

Can use:

* milestone navigation  
* wider content area  
* supporting information alongside primary content where useful

### **Mobile**

Prioritize:

1. current step  
2. checklist  
3. Continue  
4. blocker / important information  
5. milestone context

Navigation may collapse or transform, but the user must always understand their current position.

---

# **22\. Accessibility**

Accessibility is part of the design system.

The UI should support:

* keyboard navigation  
* visible focus  
* sufficient contrast  
* semantic structure  
* accessible labels  
* large enough interaction targets  
* clear disabled states  
* non-color status indicators

Do not trade accessibility for visual aesthetics.

---

# **23\. Empty States**

Empty states should be informative and purposeful.

Do not use:

* giant illustrations  
* generic motivational copy  
* fake statistics

An empty state should explain:

1. What is empty?  
2. Why is it empty?  
3. What should the user do?

---

# **24\. Error States**

Errors should be:

* specific  
* actionable  
* calm  
* understandable

Prefer:

> "This step cannot continue because the required checklist is incomplete."

Instead of:

> "Something went wrong."

Where possible, tell the user how to recover.

---

# **25\. External Links**

External links should clearly indicate that the customer is leaving the onboarding portal.

Use an external-link indicator where appropriate.

The destination should be clear before the customer clicks.

Do not disguise external dependencies as internal actions.

---

# **26\. Copy Style**

Copy should be:

* direct  
* concise  
* practical  
* human  
* neutral  
* instructional

Prefer:

> Complete your Meta Business verification before continuing.

Avoid:

> Let's unlock the power of your business with an amazing WhatsApp experience\!

Prefer:

> Next TI will proceed with the configuration after this step is completed.

Avoid:

> Our powerful solution will seamlessly take care of everything for you.

---

# **27\. Anti-Slop Visual Rules**

The following patterns are explicitly discouraged:

* generic SaaS dashboard layouts  
* excessive gradients  
* gradient text  
* glassmorphism  
* floating blobs  
* decorative mesh backgrounds  
* excessive rounded cards  
* excessive pill components  
* oversized hero sections  
* fake metrics  
* fake testimonials  
* fake customer logos  
* unnecessary charts  
* decorative terminal windows  
* generic AI illustrations  
* excessive shadows  
* excessive animation  
* excessive icon usage  
* meaningless badges  
* unnecessary section separators  
* marketing-style feature grids

If a component does not improve comprehension, navigation, or task completion, question whether it needs to exist.

---

# **28\. Anti-Slop Principle**

Anti-Slop is a quality filter.

It is NOT the design system.

The product should not attempt to satisfy Anti-Slop by becoming visually bland.

The correct goal is:

> Specific, intentional design with functional visual hierarchy.

Not:

> Minimal design at all costs.

---

# **29\. Design Decision Rule**

When deciding between two visual approaches, prefer the option that:

1. makes the user's task clearer  
2. reduces cognitive load  
3. improves hierarchy  
4. communicates state better  
5. requires less explanation  
6. uses fewer unnecessary visual elements

Do not choose an element simply because it makes the interface look more impressive.

---

# **30\. Design Evolution**

This document represents the initial design direction.

During M3, refine this document based on the actual implemented interface.

Any major visual pattern introduced during development should be evaluated against this document.

If a new pattern becomes a recurring part of the UI, document it here.

The goal is to keep the design language coherent as the product grows.

---

# **31\. Final Design Principle**

The product should feel like:

> A carefully designed operational tool built by a team that understands the real WhatsApp onboarding process.

Not:

> A template populated with onboarding text.

Every visual decision should serve the onboarding experience.

