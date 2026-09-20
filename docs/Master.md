# **Next TI WhatsApp Onboarding Portal**

## **0\. ROLE**

You are acting as a senior Product Designer, UX Engineer, and Frontend Engineer working with a Product Owner.

Your job is to design and build a customer-facing WhatsApp onboarding portal for Next Transformtech Indonesia (Next TI).

This is NOT a generic documentation website.

This is an interactive onboarding product that guides customers through the WhatsApp onboarding journey involving:

* Customer  
* Next TI  
* 8x8  
* Meta / WhatsApp

The product should make the customer always understand:

1. Where am I?  
2. What have I completed?  
3. What do I need to do now?  
4. Who is responsible for this step?  
5. What happens after I complete it?  
6. Can I continue?  
7. What should I do if I get blocked?

The core product principle:

> At any point in the onboarding journey, the customer should never have to ask: "What do I do next?"

---

# **1\. PRODUCT POSITIONING**

Product name:

**Next TI WhatsApp Onboarding**

Purpose:

Provide customers with a structured, interactive, self-guided onboarding journey for WhatsApp implementation through Next TI and 8x8.

The experience should feel like:

* an onboarding portal  
* a guided implementation checklist  
* a lightweight project navigator  
* a customer enablement tool

It should NOT feel like:

* a long technical documentation website  
* a generic SaaS dashboard  
* an AI-generated landing page  
* a marketing website  
* a developer API documentation portal  
* a clone of another company's onboarding website

---

# **2\. PRIMARY USERS**

## **Primary user**

Customer / client representative responsible for onboarding WhatsApp.

They may not understand:

* Meta Business terminology  
* WhatsApp Business Platform  
* WABA  
* 8x8  
* API  
* webhook  
* technical configuration

Therefore, the experience must use clear business-friendly language.

Technical terminology may be used when necessary, but explain it briefly.

---

# **3\. STAKEHOLDER MODEL**

The onboarding involves multiple parties.

## **Customer**

Responsible for:

* providing required company information  
* preparing Meta Business assets  
* providing required documents  
* completing customer-side Meta actions  
* providing WhatsApp number/access  
* completing required confirmations  
* participating in testing  
* approving go-live

## **Next TI**

Responsible for:

* onboarding coordination  
* technical guidance  
* 8x8 configuration  
* integration support  
* troubleshooting  
* testing coordination  
* go-live coordination  
* handover

## **8x8**

Responsible for platform-side capabilities and configuration depending on the implementation flow.

## **Meta / WhatsApp**

Responsible for:

* Business verification  
* WhatsApp platform approval  
* number / WABA-related platform processes  
* template review  
* other Meta-controlled processes

Never imply that Next TI controls Meta decisions.

---

# **4\. CORE UX MODEL**

The onboarding is milestone-based.

Use this primary journey:

1. Preparation  
2. Meta Business Setup  
3. WhatsApp Number Setup  
4. 8x8 Configuration  
5. Integration  
6. Testing / UAT  
7. Go-Live  
8. Handover

The exact content can evolve, but the architecture must preserve this mental model.

---

# **5\. PROGRESS MODEL**

Do NOT make the experience primarily percentage-driven.

The main progress representation should be milestone-based.

Example:

Preparation ✓  
Meta Business Setup ✓  
WhatsApp Number ●  
8x8 Configuration ○  
Integration ○  
Testing ○  
Go-Live ○  
Handover ○

Where:

✓ \= completed  
● \= current  
○ \= upcoming

A percentage may exist as a secondary visual indicator, but it must not become the primary UX.

---

# **6\. STEP STRUCTURE**

Every onboarding step should contain:

## **Step header**

* Step number  
* Step name  
* Short purpose  
* Estimated effort/time where meaningful  
* Current status

## **Why this step matters**

One or two concise sentences.

## **What you need**

List required prerequisites.

## **Your actions**

Clear customer actions.

## **Next TI actions**

Clearly identify what Next TI will handle.

## **External dependency**

If applicable:

* Meta  
* 8x8  
* WhatsApp

## **Checklist**

Customer must explicitly confirm completion.

## **Blockers**

Explain common issues and what to do.

## **Continue**

The Continue button remains disabled until the required checklist is completed.

---

# **7\. CHECKLIST BEHAVIOR**

Checklist interaction is a core product feature.

Example:

☐ I have access to my Meta Business Portfolio.

☐ My business information is ready.

☐ I have administrator access.

☐ I have access to the WhatsApp number.

Only after required items are checked:

\[ Continue \]

becomes enabled.

Do NOT allow users to bypass required steps through the primary navigation.

The interaction should feel deliberate rather than gamified.

Avoid excessive animations or celebration effects.

---

# **8\. RESPONSIBILITY MODEL**

Every action must communicate ownership.

Use a clear ownership indicator.

Examples:

**YOU**  
Customer action.

**NEXT TI**  
Action handled by Next TI.

**META**  
External Meta process.

**8x8**  
External platform process.

If multiple parties are involved:

**YOU \+ NEXT TI**

Do not make customers guess who owns a task.

---

# **9\. BLOCKER MODEL**

Create a reusable blocker component.

Example:

### **Meta Business Verification Pending**

**What is happening?**

Meta is reviewing your business information.

**What you should do**

Check that the submitted company information and documents are accurate.

**Who owns this?**

Meta

**Can Next TI help?**

Next TI can help review the preparation, but Meta controls the verification decision.

This component should be reusable across multiple steps.

---

# **10\. ONBOARDING STATES**

The interface must support at minimum:

* Not Started  
* Current  
* In Progress  
* Completed  
* Blocked  
* Waiting for External Party

Do not use color alone to communicate these states.

Use:

* icon  
* label  
* visual treatment  
* optional supporting text

---

# **11\. MAIN INFORMATION ARCHITECTURE**

Recommended structure:

Home / Overview

├── Start Onboarding  
│  
├── 01 Preparation  
│  
├── 02 Meta Business Setup  
│  
├── 03 WhatsApp Number  
│  
├── 04 8x8 Configuration  
│  
├── 05 Integration  
│  
├── 06 Testing / UAT  
│  
├── 07 Go-Live  
│  
├── 08 Handover  
│  
├── Blockers & Troubleshooting  
│  
├── FAQ  
│  
└── Contact / Support

The actual interface should keep navigation simple.

Do not expose a large documentation tree unless it is necessary.

---

# **12\. HOME / OVERVIEW**

The homepage should immediately communicate:

## **Title**

WhatsApp Onboarding

## **Supporting message**

A guided checklist to help you prepare, configure, test, and launch your WhatsApp channel with Next TI.

Then show:

### **Your onboarding progress**

Milestone timeline.

### **Current step**

Show the single most relevant next action.

Example:

**Current step**

Complete Meta Business Verification

\[ Continue onboarding \]

### **Important information**

Show only relevant blockers or pending external actions.

Do not fill the page with generic marketing content.

---

# **13\. CURRENT STEP EXPERIENCE**

The current step should receive the strongest visual hierarchy.

Example:

---

STEP 03

WhatsApp Number Setup

Prepare the WhatsApp number that will be connected to the platform.

### **Before you continue**

☐ The number is accessible.  
☐ The number can receive verification.  
☐ The number is ready for onboarding.

\[ Continue \]

---

The page should make the next action obvious.

---

# **14\. COMPLETION EXPERIENCE**

When a step is completed:

* clearly show completion  
* update progress  
* unlock the next milestone  
* provide a concise explanation of what happens next

Example:

✓ Step completed

Your WhatsApp number is ready.

Next:

8x8 Configuration

\[ Continue \]

Do not use excessive confetti, giant success graphics, or generic SaaS celebration patterns.

---

# **15\. TROUBLESHOOTING**

Create a dedicated troubleshooting area.

Structure issues by practical customer symptoms.

Examples:

* Meta Business Verification is pending  
* Business verification failed  
* WhatsApp number cannot be verified  
* Number already connected elsewhere  
* OTP not received  
* 2FA issue  
* WABA-related issue  
* Template rejected  
* Integration test failed  
* Customer cannot continue to the next step

Each issue should answer:

1. What happened?  
2. Why can it happen?  
3. What should I check?  
4. Who owns the resolution?  
5. When should I contact Next TI?

---

# **16\. FAQ**

Keep FAQ concise.

Prioritize questions customers are likely to ask during onboarding.

Examples:

* What is WABA?  
* Do I need Meta Business verification?  
* Can I use an existing WhatsApp number?  
* Who performs the 8x8 configuration?  
* How long does Meta verification take?  
* What happens if my verification fails?  
* Who creates WhatsApp message templates?  
* What happens during UAT?  
* When is the channel considered ready for go-live?

Avoid turning FAQ into an encyclopedia.

---

# **17\. CONTACT / SUPPORT**

The support section should clearly explain:

When to contact Next TI.

Examples:

* onboarding blocker  
* technical issue  
* configuration issue  
* testing issue  
* unclear instruction

Avoid fake contact information.

Use placeholders where actual operational details are not yet defined.

Never invent:

* email addresses  
* phone numbers  
* SLA commitments  
* processing times  
* Meta guarantees  
* 8x8 guarantees

---

# **18\. DESIGN DIRECTION**

The visual identity should communicate:

* professional  
* operational  
* trustworthy  
* structured  
* calm  
* human  
* enterprise-ready

The interface should feel like a real internal/customer implementation product.

Avoid generic "AI startup" aesthetics.

DO NOT automatically use:

* purple gradients  
* glowing cards  
* glassmorphism  
* excessive rounded cards  
* floating blobs  
* gradient text  
* oversized hero typography  
* sparkle icons  
* fake metrics  
* fake dashboards  
* decorative terminal windows  
* excessive shadows  
* excessive pill badges  
* unnecessary illustrations

Do not add visual decoration unless it supports the product.

---

# **19\. DESIGN SYSTEM**

Before implementing the full UI, establish a small visual system.

Define:

* typography hierarchy  
* spacing scale  
* border treatment  
* radius strategy  
* button system  
* status system  
* iconography  
* card treatment  
* form/checklist treatment  
* navigation  
* responsive behavior

The system should be coherent but not over-engineered.

Do not create dozens of tokens that are never used.

---

# **20\. DESIGN.md REQUIREMENT**

Create a project-level DESIGN.md.

This file must define the visual direction for the product.

It should answer:

### **Visual character**

What should this product feel like?

### **Typography**

What type hierarchy and personality should be used?

### **Layout**

How dense or spacious should the interface be?

### **Components**

Which component patterns should dominate?

### **Color**

Define a restrained palette appropriate for an enterprise onboarding product.

### **Motion**

Define where motion is useful and where it should not exist.

### **Anti-patterns**

Explicitly list visual patterns that must not be used.

The design direction must be specific enough that another engineer could continue the project without reinventing the visual language.

---

# **21\. ANTI-SLOP REQUIREMENT**

Use the Anti-Slop methodology throughout implementation.

Reference:

[https://github.com/miqdadbadjuber/anti-slop](https://github.com/miqdadbadjuber/anti-slop)

Anti-Slop is a filter, not the design direction.

Use it to prevent:

* generic AI-generated UI  
* unnecessary decoration  
* fake content  
* repetitive card layouts  
* generic marketing copy  
* invented statistics  
* unnecessary badges  
* predictable AI-generated section structures  
* meaningless animations  
* bloated component patterns

The product's own DESIGN.md provides the visual direction.

Use the relevant Anti-Slop skills for:

* UI  
* copywriting  
* human/accessibility  
* responsive design  
* code comments where applicable

Run the Anti-Slop Delivery Gate before considering a milestone complete.

---

# **22\. COPYWRITING PRINCIPLES**

Copy must be:

* concise  
* direct  
* practical  
* customer-friendly  
* operational

Prefer:

"Complete your Meta Business verification before continuing."

Instead of:

"Let's get your business ready for an amazing WhatsApp experience\!"

Prefer:

"Next TI will configure the 8x8 channel after this step is completed."

Instead of:

"Our powerful platform will seamlessly unlock the next generation of communication."

Avoid:

* buzzwords  
* exaggerated claims  
* marketing fluff  
* AI-sounding language  
* unnecessary adjectives

---

# **23\. TECHNICAL PRINCIPLES**

Build the product as a maintainable frontend application.

Prioritize:

* reusable components  
* clear state management  
* data-driven onboarding steps  
* accessible interaction  
* responsive layout  
* predictable routing  
* clean component boundaries

Do not hardcode the entire onboarding flow into individual page components.

Prefer a structured data model for:

* milestones  
* steps  
* checklist items  
* ownership  
* blockers  
* status  
* dependencies

This allows the onboarding content to evolve without rewriting the UI.

---

# **24\. DATA MODEL**

Conceptually, onboarding content should support:

type OnboardingStep \= {  
  id: string  
  number: number  
  title: string  
  description: string  
  owner: Owner\[\]  
  status: StepStatus  
  prerequisites?: string\[\]  
  checklist: ChecklistItem\[\]  
  blockers?: Blocker\[\]  
  nextAction?: string  
}

The exact implementation may differ depending on the chosen stack.

---

# **25\. STATE MANAGEMENT**

At minimum, support:

* checklist completion  
* current milestone  
* completed milestones  
* locked milestones  
* current step  
* blocked state

For the MVP, persistence can be local/browser-based if authentication/backend is not required.

Do not introduce a backend merely for the sake of having one.

---

# **26\. RESPONSIVE REQUIREMENTS**

The experience must work well on:

* desktop  
* laptop  
* tablet  
* mobile

The onboarding flow is more important than decorative desktop layouts.

On mobile:

* checklist items must remain easy to tap  
* Continue button must remain accessible  
* milestone navigation must remain understandable  
* content should reflow naturally  
* avoid horizontal overflow

---

# **27\. ACCESSIBILITY**

Support:

* keyboard navigation  
* visible focus states  
* sufficient contrast  
* semantic HTML  
* accessible checkbox labels  
* meaningful button labels  
* status information not communicated through color alone

Do not sacrifice accessibility for visual styling.

---

# **28\. WHAT NOT TO BUILD IN MVP**

Do NOT build:

* customer authentication  
* admin dashboard  
* CRM  
* ticketing system  
* live chat  
* real-time Meta integration  
* real-time 8x8 API integration  
* automated document verification  
* actual WhatsApp provisioning  
* customer database  
* analytics dashboard

unless explicitly requested later.

The MVP is the **interactive onboarding experience**, not the entire onboarding infrastructure.

---

# **29\. IMPLEMENTATION ORDER**

Build in this order:

### **Phase 1 — Foundation**

* project setup  
* DESIGN.md  
* Anti-Slop setup  
* visual system  
* application shell

### **Phase 2 — Core onboarding**

* overview  
* milestone navigation  
* step page  
* checklist  
* Continue logic  
* completion state

### **Phase 3 — Operational content**

* ownership indicators  
* blockers  
* troubleshooting  
* FAQ  
* support

### **Phase 4 — Responsive \+ accessibility**

* mobile  
* keyboard  
* focus  
* responsive states  
* touch targets

### **Phase 5 — Polish**

* interaction refinement  
* motion  
* spacing  
* typography  
* copy refinement  
* visual consistency

### **Phase 6 — Quality gate**

Run:

* Anti-Slop audit  
* accessibility review  
* responsive review  
* interaction/state review  
* content accuracy review

Do not ship until all major issues are resolved.

---

# **30\. IMPORTANT PRODUCT RULE**

Do not invent operational facts.

If information is unknown, use:

* TODO  
* TBD  
* placeholder  
* configuration constant

Do NOT fabricate:

* SLA  
* processing time  
* Meta policy  
* 8x8 behavior  
* technical capability  
* customer requirement  
* contact details  
* success metrics

Accuracy is more important than completeness.

---

# **31\. FINAL QUALITY BAR**

The final product should feel like:

> A real onboarding tool created by a product team that has actually implemented WhatsApp integrations for customers.

It should NOT feel like:

> A website generated by an AI after being asked to "make a modern SaaS onboarding dashboard."

Prioritize:

1. clarity  
2. usability  
3. ownership  
4. progression  
5. operational accuracy  
6. visual specificity  
7. maintainability

in that order.

Before declaring the project complete, perform a final product review from the perspective of a first-time customer.

Ask:

* Do I know where I am?  
* Do I know what I need to do?  
* Do I know who owns the task?  
* Do I know what happens next?  
* Can I tell whether I am blocked?  
* Can I recover from common problems?  
* Can I continue without guessing?

If the answer to any of these is no, improve the product before shipping.

