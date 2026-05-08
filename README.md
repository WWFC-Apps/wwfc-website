# Wroughton & Wichelstowe FC Website

Modern community football club website for Wroughton & Wichelstowe FC (WWFC), built using Astro, React and TailwindCSS and deployed via Vercel.

---

# Project Overview

This project supports the club’s transition to a CIO registered charity and modernises the club’s digital presence.

The website is intended to support:

- Community football participation
- Team and pathway information
- Club governance and safeguarding
- Recruitment and volunteering
- Sponsor and partner engagement
- Inclusive football development
- Modern mobile-first user experience

---

# Technology Stack

| Technology | Purpose |
|---|---|
| Astro | Static-first website framework |
| React | Interactive UI components |
| TailwindCSS | Styling and responsive layout |
| Vercel | Hosting and deployments |
| GitHub | Source control and collaboration |

---

# Production Build

- Always run a production build before pushing changes:
- npm run build
- This catches:

        Astro route issues
        syntax errors
        deployment problems
        static generation conflicts

---

# Deployment Architecture

- GitHub   ↓Vercel   ↓www.wwfc.org.uk

---

# Environment Strategy
    Branch      Purpose             Deployment

    main        Production          Live site
    develop     Active development  Vercel preview

---

# Development Workflow
- Switch to development branch
= git checkout develop
- Pull latest changes
- git pull
- Commit work
- git add .git commit -m "Description of changes"git push

---

# Production Release Workflow

Before releasing:
- npm run build
    Then:
= git checkout maingit merge developgit push
    Vercel will automatically deploy production from the main branch.

---

# Repository Rules


- Do not commit directly to main

- All development should happen on develop

- Always run npm run build before merging into main

- Keep commits small and descriptive

- Use preview deployments to validate changes



# Project Structure
- src/  components/  layouts/  pages/  data/public/  images/

---

# Current Site Architecture
- Teams Structure
- /teams/teams/[section]/team/[slug]

---

# Team Categories

- Adult / Senior Football

- Youth Football (Mixed)

- Girls Football

- Pan-Disability Football

 - Sessional Football

- Tournament Football


---

# Policies Structure
/policies/policies/committee/policies/privacy-policy/policies/safeguarding-children/policies/respect/policies/respect/players/policies/respect/coaches/policies/respect/parents-spectators

---

# Design Direction
- Current design goals:

    Modern grassroots football aesthetic

    Mobile-first responsive layouts

    Accessible navigation

    Community-focused branding

    Dark navy / electric blue palette

    Lightweight and fast-loading pages

    SEO-friendly static architecture

---

# Accessibility & Safeguarding
- The site is intended to support:

    FA safeguarding expectations

    Inclusive football pathways

    Accessible communication

    GDPR-compliant privacy handling

    Clear governance visibility

---

# Domain & Hosting
    Production domain:
    https://www.wwfc.org.uk
    
    Hosted via :    Vercel

    DNS managed through 123-Reg


---

# Future Enhancements
Planned improvements include:


    Fixtures & results

    Sponsor management

    Team galleries

    CMS/content collections

    Contact/join forms

    Volunteer recruitment

    Mobile navigation enhancements

    Search engine optimisation

    Accessibility audit

    Tournament management pages

---

# License
    Copyright (c) 2026 Wroughton & Wichelstowe Football Club
    All rights reserved.
    This source code, website design, branding, content, graphics, assets and associated materials are proprietary to Wroughton & Wichelstowe Football Club (WWFC).
    No part of this repository may be copied, modified, distributed, sublicensed, published or used in whole or in part without prior written permission from Wroughton & Wichelstowe Football Club.
    This repository is provided for authorised development and operational purposes only.
    Unauthorised use is strictly prohibited.
