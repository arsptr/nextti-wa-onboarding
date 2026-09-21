# **Next TI WhatsApp Onboarding Portal**

## **Development Milestones**

> This document is the development control tower for the project.

> `docs/MASTER.md` defines the product vision, UX principles, scope boundaries, and quality bar.

> This document defines **what is being built, in what order, and when each milestone is considered complete.**

---

# **0\. How to Use This Document**

The project must be developed sequentially.

Do not skip milestones unless explicitly decided by the Product Owner.

For each milestone:

1. Read `docs/MASTER.md`.  
2. Read the current milestone definition in this document.  
3. Inspect the existing implementation before making changes.  
4. Implement only the current milestone scope.  
5. Test the acceptance criteria.  
6. Fix issues found during testing.  
7. Do not expand scope without explicit approval.  
8. Mark the milestone as complete only when all required acceptance criteria pass.  
9. Commit the completed milestone before moving to the next milestone.

### **Development Loop**

Read Master  
    ↓  
Read Current Milestone  
    ↓  
Inspect Existing Project  
    ↓  
Plan  
    ↓  
Implement  
    ↓  
Run  
    ↓  
Test  
    ↓  
Fix  
    ↓  
Acceptance Check  
    ↓  
PASS  
    ↓  
Commit  
    ↓  
Next Milestone

---

# **1\. Milestone Status**

Use the following status values:

* `⬜ NOT STARTED`  
* `🟡 IN PROGRESS`  
* `🔴 BLOCKED`  
* `🟢 COMPLETED`

Current project status:

| Milestone | Name | Status |
| ----- | ----- | ----- |
| M0 | Project Foundation | 🟢 COMPLETED |
| M1 | UX Skeleton | ⬜ NOT STARTED |
| M2 | Onboarding Content & Flow | ⬜ NOT STARTED |
| M3 | Visual Identity | ⬜ NOT STARTED |
| M4 | Operational UX | ⬜ NOT STARTED |
| M5 | Responsive & Accessibility | ⬜ NOT STARTED |
| M6 | Customer Journey Simulation | ⬜ NOT STARTED |
| M7 | Final Quality Gate | ⬜ NOT STARTED |

---

# **2\. Milestone Dependency**

Milestones should generally be completed in this order:

M0 Foundation  
     ↓  
M1 UX Skeleton  
     ↓  
M2 Onboarding Content & Flow  
     ↓  
M3 Visual Identity  
     ↓  
M4 Operational UX  
     ↓  
M5 Responsive & Accessibility  
     ↓  
M6 Customer Journey Simulation  
     ↓  
M7 Final Quality Gate

Some implementation details may naturally overlap, but the product must not be considered complete until the dependency order has been respected.

---

# **M0 — Project Foundation**

## **Status**

🟢 COMPLETED

## **Objective**

Establish the project foundation, development rules, visual direction placeholder, and technical structure before building the actual onboarding experience.

The goal is to prevent uncontrolled vibe coding from the beginning.

---

## **Scope**

### **Project**

* Create / initialize repository  
* Establish frontend application  
* Confirm development and build commands  
* Establish project folder structure  
* Confirm deployment target  
* Confirm supported browsers

### **Documentation**

* `docs/MASTER.md` exists  
* `docs/MILESTONES.md` exists  
* Create initial `docs/DESIGN.md`

### **Anti-Slop**

* Install / configure Anti-Slop according to its project instructions  
* Confirm relevant Anti-Slop workflow is available  
* Establish Anti-Slop as a quality gate  
* Do not use Anti-Slop as a replacement for the product's own design direction

### **Architecture**

* Define initial component structure  
* Define initial data structure for onboarding milestones  
* Define onboarding status model  
* Define ownership model  
* Define checklist model

---

## **Acceptance Criteria**

* Application runs successfully  
* Application builds successfully  
* Repository structure is clear  
* Documentation structure exists  
* `MASTER.md` is recognized as the product source of truth  
* `MILESTONES.md` is recognized as the development control document  
* Initial `DESIGN.md` exists  
* No unnecessary dependencies have been introduced  
* No unnecessary features have been implemented

---

## **Definition of Done**

M0 is complete when the project is technically ready to begin building the onboarding UX without requiring major foundational decisions.

---

# **M1 — UX Skeleton**

## **Status**

⬜ NOT STARTED

## **Objective**

Build the functional skeleton of the onboarding experience before adding detailed operational content or visual polish.

The focus is **interaction and state**, not aesthetics.

---

## **Scope**

### **Overview**

* Create onboarding overview  
* Display onboarding milestones  
* Display current progress  
* Highlight current milestone  
* Display next recommended action

### **Milestone Navigation**

* Completed milestone state  
* Current milestone state  
* Upcoming / locked milestone state  
* Navigation between allowed states

### **Step Page**

* Step number  
* Step title  
* Step description  
* Checklist  
* Continue button

### **Checklist Logic**

* Required checklist items  
* Unchecked state  
* Checked state  
* Continue disabled when required items are incomplete  
* Continue enabled when required items are complete

### **Progression Logic**

* Completing a step unlocks the next step  
* Completed steps remain completed  
* Locked steps cannot be bypassed  
* Current step is clearly identifiable

---

## **Acceptance Criteria**

The following flow must work:

Start onboarding  
      ↓  
Open Step 1  
      ↓  
Checklist incomplete  
      ↓  
Continue disabled  
      ↓  
Complete required checklist  
      ↓  
Continue enabled  
      ↓  
Continue  
      ↓  
Step 1 completed  
      ↓  
Step 2 unlocked

Additional requirements:

* No dead primary buttons  
* No broken navigation  
* State changes are visually understandable  
* User can identify the current step  
* User can identify what is required before continuing  
* User cannot accidentally skip required onboarding steps

---

## **Out of Scope**

* Detailed final content  
* Authentication  
* Backend persistence  
* Admin dashboard  
* Real Meta integration  
* Real 8x8 integration  
* Final visual polish

---

## **Definition of Done**

A first-time user can understand and complete the basic onboarding interaction without requiring operational instructions from the Product Owner.

---

# **M2 — Onboarding Content & Flow**

## **Status**

⬜ NOT STARTED

## **Objective**

Translate the actual Next TI WhatsApp onboarding experience into the product.

This milestone establishes the real customer journey.

---

## **Required Input**

The actual onboarding process must be mapped before implementation.

The flow should be based on:

* Next TI operational experience  
* Customer responsibilities  
* Next TI responsibilities  
* 8x8 dependencies  
* Meta / WhatsApp dependencies  
* Known blockers  
* Testing requirements  
* Go-live requirements

Do not invent operational requirements.

---

## **Target Milestones**

The initial structure is:

01\. Preparation  
02\. Meta Business Setup  
03\. WhatsApp Number Setup  
04\. 8x8 Configuration  
05\. Integration  
06\. Testing / UAT  
07\. Go-Live  
08\. Handover

The exact step structure may be refined based on the actual Next TI onboarding process.

---

## **For Each Step**

Define:

* Step objective  
* Customer action  
* Next TI action  
* 8x8 dependency  
* Meta / WhatsApp dependency  
* Prerequisites  
* Required checklist  
* Expected next action  
* Known blockers  
* Exit criteria

---

## **Content Principles**

All customer-facing content must be:

* concise  
* practical  
* accurate  
* understandable by non-technical users  
* operational rather than promotional

Avoid:

* marketing language  
* unnecessary technical explanations  
* unsupported assumptions  
* fabricated processing times  
* fabricated SLA  
* fabricated capabilities  
* fabricated contact information

---

## **Acceptance Criteria**

* Customer journey reflects the actual Next TI onboarding process  
* Every major milestone has a clear purpose  
* Every customer action is explicitly stated  
* Next TI responsibilities are distinguishable  
* External dependencies are distinguishable  
* Required prerequisites are clear  
* Completion criteria are clear  
* Customer always knows what happens next  
* No known operational information has been fabricated

---

## **Definition of Done**

A customer can follow the onboarding journey from preparation through go-live using the portal without needing a separate verbal explanation of the basic process.

---

# **M3 — Visual Identity**

## **Status**

⬜ NOT STARTED

## **Objective**

Establish and implement a distinctive visual language for the Next TI onboarding experience.

This milestone exists to prevent the product from looking like a generic AI-generated SaaS interface.

---

## **Scope**

### **Design System**

* Typography hierarchy  
* Color system  
* Spacing system  
* Border treatment  
* Radius strategy  
* Button styles  
* Checkbox styles  
* Status indicators  
* Navigation  
* Cards / containers where genuinely useful  
* Icons

### **Layout**

* Overview layout  
* Milestone navigation  
* Step layout  
* Checklist layout  
* Blocker layout  
* Supporting information layout

### **Motion**

* Define useful transitions  
* Avoid decorative animation  
* Avoid excessive motion  
* Respect reduced-motion preferences where applicable

---

## **Anti-Slop Review**

Check for and remove unnecessary:

* gradients  
* glassmorphism  
* floating blobs  
* excessive rounded containers  
* excessive pills  
* giant hero typography  
* decorative dashboard elements  
* fake statistics  
* fake testimonials  
* meaningless animations  
* excessive shadows  
* generic AI illustrations  
* unnecessary visual noise

---

## **Acceptance Criteria**

* Product has a recognizable visual character  
* UI does not resemble a generic AI-generated SaaS dashboard  
* Visual hierarchy supports onboarding tasks  
* Important actions receive appropriate emphasis  
* Decorative elements do not compete with functional content  
* Components use a consistent visual language  
* `DESIGN.md` accurately reflects the implemented visual system

---

## **Definition of Done**

The interface looks intentionally designed for a real enterprise onboarding workflow rather than generated from a generic SaaS template.

---

# **M4 — Operational UX**

## **Status**

⬜ NOT STARTED

## **Objective**

Make the onboarding experience operationally useful by clearly communicating responsibility, dependencies, blockers, and next actions.

---

## **Scope**

### **Ownership**

Implement clear ownership indicators:

* YOU / CUSTOMER  
* NEXT TI  
* 8x8  
* META  
* Shared responsibility where applicable

Do not rely on color alone.

---

### **Action Separation**

For each relevant step:

* Customer actions  
* Next TI actions  
* External actions  
* Waiting state

---

### **Blockers**

Create reusable blocker patterns supporting:

* What happened?  
* Why can it happen?  
* What should the customer check?  
* Who owns the resolution?  
* Can Next TI help?  
* What should happen next?

---

### **Troubleshooting**

Create a practical troubleshooting section covering known onboarding issues.

Examples may include:

* Meta Business verification issue  
* Verification pending  
* WhatsApp number verification issue  
* Number already registered / connected  
* OTP issue  
* 2FA issue  
* WABA-related issue  
* Template rejection  
* Integration issue  
* Testing issue

Only include issues that are verified as relevant to the actual onboarding process.

---

### **FAQ**

* Create concise FAQ  
* Prioritize real customer questions  
* Avoid encyclopedia-style documentation

---

### **Support**

* Explain when to contact Next TI  
* Explain what information to provide when reporting an issue  
* Use placeholders for undefined operational information  
* Do not invent contact details

---

## **Acceptance Criteria**

A customer should be able to answer:

* What do I need to do?  
* Who owns this task?  
* Am I waiting for someone?  
* Why can't I continue?  
* What should I do if something fails?  
* When should I contact Next TI?  
* What happens after this step?

---

## **Definition of Done**

The portal no longer functions merely as a checklist. It acts as a practical onboarding guide that reduces operational ambiguity between Customer, Next TI, 8x8, and Meta.

---

# **M5 — Responsive & Accessibility**

## **Status**

⬜ NOT STARTED

## **Objective**

Ensure the onboarding experience works reliably across screen sizes and is accessible to users with different interaction needs.

---

## **Responsive Scope**

* Desktop  
* Laptop  
* Tablet  
* Mobile

---

## **Mobile Requirements**

* Checklist remains easy to use  
* Buttons remain accessible  
* Continue action remains obvious  
* Milestone navigation remains understandable  
* No horizontal overflow  
* Content reflows naturally  
* Touch targets are sufficiently large

---

## **Accessibility**

* Semantic HTML  
* Keyboard navigation  
* Visible focus states  
* Accessible checkbox labels  
* Accessible buttons  
* Sufficient contrast  
* Status is not communicated by color alone  
* Meaningful headings  
* Logical reading order  
* Reduced-motion consideration

---

## **Acceptance Criteria**

* Core onboarding journey works on mobile  
* Core onboarding journey works on desktop  
* No major responsive layout failures  
* Keyboard user can navigate the core flow  
* Required controls are understandable without relying only on visual styling

---

## **Definition of Done**

A customer can complete the core onboarding journey regardless of whether they access the portal from desktop or mobile.

---

# **M6 — Customer Journey Simulation**

## **Status**

⬜ NOT STARTED

## **Objective**

Validate the product from the perspective of a first-time customer rather than from the perspective of its creator.

This is a product usability test.

---

## **Simulation Rules**

The Product Owner must act as a customer.

Assume:

> "I have just received the onboarding link from Next TI and have never used this portal before."

Do not rely on prior knowledge.

Do not explain the interface to yourself.

---

## **Walkthrough**

Start from the beginning and complete the onboarding journey.

At every step, identify moments where the customer might ask:

* "What does this mean?"  
* "What do I need to do?"  
* "Is this my responsibility?"  
* "Do I need to wait?"  
* "Who is responsible for this?"  
* "Why can't I continue?"  
* "What happens next?"  
* "Who should I contact?"

---

## **Findings**

Record every issue.

Classify findings as:

### **Critical**

Prevents onboarding or creates major ambiguity.

### **Major**

Significantly affects understanding or completion.

### **Minor**

Creates friction but does not prevent completion.

### **Cosmetic**

Visual issue with minimal functional impact.

---

## **Acceptance Criteria**

* Customer can identify the current milestone  
* Customer can identify the current action  
* Customer understands checklist requirements  
* Customer understands ownership  
* Customer understands blockers  
* Customer understands what happens next  
* Customer can recover from common issues  
* No critical usability issues remain

---

## **Definition of Done**

A first-time customer can navigate the core onboarding journey without requiring real-time explanation from the Product Owner.

---

# **M7 — Final Quality Gate**

## **Status**

⬜ NOT STARTED

## **Objective**

Perform the final product, UX, content, responsive, accessibility, code, and Anti-Slop review before considering the MVP complete.

---

# **Quality Checks**

## **Product**

* Product purpose is clear  
* Scope remains within MVP  
* Core onboarding journey works  
* Customer always knows the next action  
* No unnecessary features have been added

---

## **UX**

* Navigation is understandable  
* Progression is understandable  
* Checklist behavior is correct  
* Locked states are correct  
* Completed states are correct  
* Blocked states are understandable  
* Error recovery is understandable

---

## **Content**

* Copy is concise  
* Copy is customer-friendly  
* Technical terminology is explained when necessary  
* No marketing fluff  
* No fabricated operational information  
* No unsupported claims  
* No fake SLA  
* No fake contact information

---

## **Ownership**

* Customer responsibilities are clear  
* Next TI responsibilities are clear  
* 8x8 dependencies are clear  
* Meta dependencies are clear  
* Waiting states are clear

---

## **Responsive**

* Desktop checked  
* Tablet checked  
* Mobile checked  
* No horizontal overflow  
* Touch interactions checked

---

## **Accessibility**

* Keyboard navigation checked  
* Focus states checked  
* Contrast checked  
* Semantic structure checked  
* Form/checklist accessibility checked  
* Color-independent status checked

---

## **Code**

* No unnecessary dependencies  
* No dead code  
* No dead buttons  
* No broken routes  
* Components are reusable where appropriate  
* Onboarding content is data-driven where appropriate  
* No excessive abstraction  
* No unnecessary complexity

---

## **Anti-Slop Delivery Gate**

Run the relevant Anti-Slop review.

Check:

* UI quality  
* Copy quality  
* Human / accessibility quality  
* Responsive quality  
* Code quality

Document remaining issues.

---

# **Final Acceptance**

The MVP can be considered complete only when:

PRODUCT  
✓

UX  
✓

CONTENT  
✓

OWNERSHIP  
✓

BLOCKERS  
✓

RESPONSIVE  
✓

ACCESSIBILITY  
✓

CODE  
✓

ANTI-SLOP  
✓

SCOPE CONTROL  
✓

---

# **3\. Scope Control Rules**

These rules apply throughout the project.

## **Rule 1 — One Milestone at a Time**

Do not implement future milestone features while the current milestone is incomplete.

---

## **Rule 2 — No Unrequested Features**

Do not add:

* authentication  
* admin dashboard  
* database  
* CRM  
* ticketing  
* live chat  
* analytics dashboard  
* real Meta integration  
* real 8x8 integration  
* automated provisioning  
* automated document verification  
* notifications

unless explicitly requested.

---

## **Rule 3 — Do Not Invent Information**

If operational information is unknown:

TODO  
TBD  
PLACEHOLDER

is acceptable.

Inventing information is not.

---

## **Rule 4 — Fix Before Expanding**

If the current milestone contains bugs or UX problems:

> Fix the current milestone before adding new functionality.

---

## **Rule 5 — Product Owner Has Final Scope Authority**

The AI coding agent must not independently expand the product scope.

If a potential improvement is discovered, document it separately instead of implementing it automatically.

---

# **4\. Milestone Completion Record**

At the completion of each milestone, record:

Milestone:  
Status:  
Completed date:

Completed:  
\- 

Files changed:  
\- 

Acceptance criteria:  
\- \[ \] PASS  
\- \[ \] FAIL

Tests performed:  
\- 

Known issues:  
\- 

Out of scope / deferred:  
\- 

Git commit:  
\- 

---

# **5\. Final Product Principle**

The project succeeds when the portal makes the customer's onboarding journey easier to understand and execute.

The primary measure of quality is not the number of features.

It is:

> **Can a first-time customer understand what they need to do, who owns each action, whether they are blocked, and what happens next?**

If yes, the onboarding experience is doing its job.

If no, improve the experience before adding more features.

