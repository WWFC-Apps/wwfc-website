# Wroughton & Wichelstowe FC Website

Modern community football club website for Wroughton & Wichelstowe FC (WWFC), built using Astro, React and TailwindCSS and deployed via Vercel.

---

# Project Overview

This project supports the club’s transition to a CIO registered charity and modernises the club’s digital presence.

The website is intended to support:

- Club and governance information
- Youth, adult and inclusive football pathways
- Team management and automated seasonal progression
- Respect and safeguarding information
- Venue and visiting team guidance
- Contact and newsletter integrations
- Community engagement and sponsorship
- Recruitment and volunteering
- Sponsor and partner engagement
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
| Tally Forms | Form management and integration |
| CSV files | Team Management |
---

# Production Build

- Always run a production build before pushing changes:
         npm run build

- This catches:

        Astro route issues
        syntax errors
        deployment problems
        static generation conflicts

---

# Deployment Architecture

- GitHub   ->   Vercel   ->    www.wwfc.org.uk

---

# Environment Strategy
- 2 branches : "main" branch and "develop" branch

    Branch      Purpose             Deployment

    main        Production          Live site
    develop     Active development  Vercel preview

- develop any new features in the "develop" branch. then merge the working code into "main"
---

# Development Workflow
- Switch to development branch -> git checkout develop
- Pull latest changes -> gut pull
- Commit work   ->    git add . ->  git commit -m "Description of changes"  ->  git push

---

# Production Release Workflow

Before releasing:

- git checkout main   ->   git merge develop  ->  git push
    Vercel will automatically deploy production from the main branch.

---

# Repository Rules


- Do not commit directly to main

- All development should happen on develop

- Always run npm run build before merging into main

- Keep commits small and descriptive

- Use preview deployments to validate changes



# Project Structure
- src/  components/  data/  layouts/  pages/ 
- public/  images/

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
# Team Management System

    Teams are managed using:

    src/data/teams.csv  (XLS Spreadsheet)

    This allows non-technical club administrators to easily update:

            teams
            managers
            training details
            recruitment status
            galleries
            contact emails

    without editing code. Save the spreadhseet as a CSV to the correct file location and push to repo.

    Recommended Workflow

    Maintain:

    teams-master.xlsx (editable master spreadsheet)
    export to:
        src/data/teams.csv

    CSV files do not retain:

    dropdowns
    formatting
    validation rules

    so the XLSX file should remain the admin editing source.

# Team Progression

    Youth age groups are generated automatically from:

        player birth year
        current season

    The website automatically rolls forward to the next season on:

        31 May

    Example:

        2013 birth year
        season 2025/26
        displayed as U12

        After rollover:

        season 2026/27
        displayed as U13

    This minimises annual admin overhead.

# Team Galleries

    Team galleries are supported via image paths stored in teams.csv.

    Images should be placed in:

            public/images/teams/

        Example:

            public/images/teams/2013-blue/

        Gallery image paths are pipe-separated in CSV:

            /images/teams/2013-blue/photo1.jpg|/images/teams/2013-blue/photo2.jpg

# Forms & Contact

    Forms are powered by:

    Tally

    Current integrations:

        Contact form
        Newsletter signup

    Tally handles:

        form submission storage
        email notifications
        spam protection
        GDPR-friendly handling         

# Governance & Policies

    The site includes:

        FA Respect Codes of Conduct
        Charity governance information
        Trustee information
        Safeguarding contacts
        Venue guidance
        Privacy policy support


---
# Repository Access

    This repository is private and intended solely for authorised WWFC collaborators.

    No reuse, redistribution or replication is permitted without written permission from Wroughton & Wichelstowe FC.

# License
    This project is proprietary software.

    All rights reserved © Wroughton & Wichelstowe FC.

    Copyright (c) 2026 Wroughton & Wichelstowe Football Club

    This source code, website design, branding, content, graphics, assets and associated materials are proprietary to Wroughton & Wichelstowe Football Club (WWFC).
    No part of this repository may be copied, modified, distributed, sublicensed, published or used in whole or in part without prior written permission from Wroughton & Wichelstowe Football Club.
    This repository is provided for authorised development and operational purposes only.
    Unauthorised use is strictly prohibited.
