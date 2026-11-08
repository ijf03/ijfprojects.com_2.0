import type { Project } from "../../types/project";

export const secureFinanceGroup = {
  slug: "secure-finance-group",
  title: "Secure Finance Group",
  tagline:
    "A MERN-based finance website and operations platform connecting customer journeys, appointment booking, content management, and staff workflows.",
  type: "Full-Stack Finance Website and Operations Platform",
  year: "2026",
  completedDate: "2026",
  featured: true,
  status: "Completed",

  shortDescription:
    "A responsive finance platform built with React, TypeScript, Express, Node.js, and MongoDB, with booking, CMS, blog, authentication, email, meeting, and administration workflows.",

  introduction: [
    "The original Secure Finance Group website primarily introduced the business, its finance services, and contact information. Team 158 expanded that foundation into an integrated application supporting customer engagement, appointment booking, content management, and internal administration.",
    "Secure Finance Group is a full-stack business platform that combines a redesigned public finance website with customer enquiries, financial calculators, consultation booking, content management, blog publishing, mailing-list tools, meeting records, and a protected staff workspace.",
    "I led the frontend development and UI/UX design, created most public-facing interfaces and several internal workflows, established the reusable design system, and translated client requirements into practical product decisions. I also worked across the frontend-backend boundary by integrating APIs, supporting backend setup, investigating bugs, resolving integration issues, and helping refine the system through testing and client feedback.",
  ],

  disciplines: [
    "Full-Stack Development",
    "Frontend Development",
    "UI/UX Design",
    "API Integration",
    "Client Communication",
  ],

  roles: [
    "Frontend Developer",
    "UI/UX Designer",
    "Full-Stack Contributor",
    "Client Liaison",
  ],

  responsibilities: [
    "Designed and developed the public website, customer booking journey, loan information pages, and responsive navigation",
    "Created interfaces for complex internal workflows, including the website CMS and modular blog-management experience",
    "Established centralised design tokens, shared layouts, reusable components, and frontend styling conventions",
    "Connected React and TypeScript interfaces to Express REST APIs and MongoDB-backed application data",
    "Supported backend setup, third-party integrations, API troubleshooting, minor fixes, and end-to-end debugging",
    "Translated client requirements and feedback into maintainable interface and workflow decisions",
    "Designed responsive desktop, tablet, and mobile behaviour for public and staff-facing pages",
    "Applied usability and accessibility principles to forms, navigation, validation, feedback, and content-management tools",
    "Performed manual functional, responsive, integration, peer, and user-acceptance testing",
    "Collaborated through Git branches, merge resolution, shared coding conventions, Agile planning, and technical documentation",
  ],

  client: "Secure Finance Group",
  duration: "Two development iterations",
  team: ["Zentrix158 multidisciplinary development team"],

  categories: [
    "Client Project",
    "MERN Stack",
    "Financial Services",
    "Business Systems",
    "UI/UX Design",
    "API Integration",
  ],

  skills: [
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "UI/UX Design",
    "API Integration",
    "Debugging",
  ],

  techStack: {
    databases: ["MongoDB Atlas"],
    backend: ["Mongoose", "Express.js", "Node.js", "OAuth 2.0"],
    frontend: ["React", "Vite", "CSS Modules", "Bootstrap", "Tailwind CSS"],
    languages: ["TypeScript", "JavaScript"],
    integrations: ["Microsoft Graph API", "Microsoft Outlook", "Zoom", "Granola"],
    devops: ["Docker", "Git", "GitLab"],
    gameCreative: ["Figma"],
  },

  features: [
    "Responsive public finance and loan-information website",
    "Financial calculators and searchable FAQs",
    "Zoom and phone consultation booking",
    "Email-based booking confirmation, reminders, rescheduling, and cancellation",
    "Password and one-time email-code staff authentication",
    "Role-based broker and administrator workspaces",
    "Customer enquiry and contact management",
    "AI-assisted meeting transcription, summarisation, and booking links",
    "Custom website content-management system",
    "Component-based blog editor with draft and publishing workflows",
    "Mailing-list confirmation, preferences, and unsubscribe workflows",
    "Staff account, role, status, and password management",
    "Predefined customer-support chatbot",
    "Responsive and accessible public and administration interfaces",
  ],

  coverImage: "/images/projects/sfg/new/CMS page.png",

  heroGallery: {
    "layout": "two-column",
    "items": [
      {
        "type": "image",
        "src": "/images/projects/sfg/sections/old-home-hero.png",
        "alt": "Before: the original homepage navigation and opening banner.",
        "caption": "Before: the original homepage navigation and opening banner."
      },
      {
        "type": "image",
        "src": "/images/projects/sfg/sections/new-home-hero.png",
        "alt": "After: a personal introduction to the broker with a clear meeting-booking action.",
        "caption": "After: a personal introduction to the broker with a clear meeting-booking action."
      }
    ]
  },

  // Add the deployed website and repository when they are ready to share.
  links: [],

  sections: [
    {
      id: "project-context",
      number: "01",
      title: "Project context",
      details: [
        {
          label: "Users",
          items: ["Prospective customers", "Brokers", "Administrators"],
        },
        {
          label: "Scope",
          items: [
            "Public website",
            "Customer booking journey",
            "Staff workspace",
            "Custom CMS",
          ],
        },
      ],
      blocks: [
        {
          type: "text",
          paragraphs: [
            "Secure Finance Group needed more than a visual website refresh. The platform had to reduce manual, spreadsheet-heavy work while giving customers a clearer way to understand finance services, contact the business, calculate loan scenarios, and book consultations.",
            "The resulting system connects the public customer journey to a protected operational workspace. Customer bookings, enquiries, meeting information, blogs, mailing-list records, staff accounts, and editable website content are managed through one integrated product.",
          ],
        },
        {
          type: "list",
          title: "Project goals",
          columns: 2,
          items: [
            "Modernise the public brand and customer experience",
            "Explain complex finance services clearly",
            "Move appointment booking into a connected digital workflow",
            "Reduce manual administration for brokers",
            "Allow staff to update website content without editing code",
            "Support blog publishing and subscriber communication",
            "Protect staff functionality through role-based access",
            "Create maintainable interfaces that future developers could extend",
          ],
        },
      ],
    },
    {
      "id": "original-and-redesigned",
      "number": "02",
      "title": "From an informational website to an integrated platform",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "The original website gave Secure Finance Group an online presence for explaining its services, introducing its broker, and receiving customer enquiries. Its loan guides, contact pages, and existing enquiry journey provided the starting point for the redesign.",
            "Across two development iterations, Team 158 expanded that foundation with an appointment booking and reminder system, AI-assisted meeting transcription and summarisation, and chatbot functionality. A dedicated administrative dashboard was a significant addition, bringing bookings, website content, and other staff workflows into a central workspace.",
            "The public-facing pages were also substantially restructured to improve navigation, responsiveness, accessibility, and visual consistency. The React and TypeScript frontend, supported by backend services, gave the team a flexible architecture for future features and integrations."
          ]
        },
        {
          "type": "callout",
          "title": "A broader role for the website",
          "text": "The redesign aimed to connect customer-facing services with internal business operations: helping customers take the next step while giving staff tools to manage appointments, content, and follow-up work."
        },
        {
          "type": "gallery",
          "gallery": {
            "layout": "three-column",
            "items": [
              {
                "type": "image",
                "src": "/images/projects/sfg/sections/old-broker-profile.png",
                "alt": "Original site: the broker profile, business information, and get-started action.",
                "caption": "Original site: the broker profile, business information, and get-started action."
              },
              {
                "type": "image",
                "src": "/images/projects/sfg/sections/old-loan-introduction.png",
                "alt": "Original site: first-home-loan introduction and imagery.",
                "caption": "Original site: first-home-loan introduction and imagery."
              },
              {
                "type": "image",
                "src": "/images/projects/sfg/sections/old-loan-process.png",
                "alt": "Original site: the complete six-step loan process.",
                "caption": "Original site: the complete six-step loan process."
              },
              {
                "type": "image",
                "src": "/images/projects/sfg/sections/old-loan-calculators.png",
                "alt": "Original site: borrowing-power and stamp-duty calculator links.",
                "caption": "Original site: borrowing-power and stamp-duty calculator links."
              },
              {
                "type": "image",
                "src": "/images/projects/sfg/old/contact us home-loan-recommendations-.png",
                "alt": "Original get-started journey offering home buying, investment property, and refinancing options",
                "caption": "Original site: the existing get-started enquiry journey."
              }
            ]
          }
        }
      ]
    },
    {
      id: "requirements-and-design",
      number: "03",
      title: "Turning client needs into product decisions",
      details: [
        {
          label: "My focus",
          items: [
            "Client liaison",
            "Requirements analysis",
            "UI/UX strategy",
            "Design consistency",
          ],
        },
      ],
      blocks: [
        {
          type: "text",
          paragraphs: [
            "As the team's client liaison, I gathered requirements, clarified priorities, and translated business feedback into interface and workflow decisions. Because the client had limited technical experience, broad questions were not always enough; visual examples and targeted choices produced clearer, more actionable feedback.",
            "I balanced customer usability, internal efficiency, maintainability, responsiveness, and budget constraints. That meant considering not only how each screen looked, but how content would be updated, how staff would understand system status, and how new features could be added without creating inconsistent one-off designs.",
          ],
        },
        {
          type: "callout",
          title: "Designing for a real handover",
          text:
            "The platform needed to remain understandable after development ended. I treated reusable components, centralised tokens, documentation, and predictable workflows as part of the product—not only implementation details.",
        },
      ],
    },
    {
      id: "public-experience",
      number: "04",
      title: "Public customer experience",
      details: [
        {
          label: "Primary journeys",
          items: [
            "Explore finance services",
            "Use calculators",
            "Book a consultation",
            "Submit an enquiry",
          ],
        },
      ],
      blocks: [
        {
          "type": "gallery",
          "gallery": {
            "layout": "two-column",
            "items": [
              {
                "type": "image",
                "src": "/images/projects/sfg/sections/old-contact-introduction.png",
                "alt": "Before: broker availability and contact options.",
                "caption": "Before: broker availability and contact options."
              },
              {
                "type": "image",
                "src": "/images/projects/sfg/sections/old-contact-form.png",
                "alt": "Before: the original contact enquiry form.",
                "caption": "Before: the original contact enquiry form."
              },
              {
                "type": "image",
                "src": "/images/projects/sfg/sections/new-contact-introduction.png",
                "alt": "After: a clearer introduction to contact and booking options.",
                "caption": "After: a clearer introduction to contact and booking options."
              },
              {
                "type": "image",
                "src": "/images/projects/sfg/sections/new-contact-form.png",
                "alt": "After: the complete labelled enquiry form with supporting guidance.",
                "caption": "After: the complete labelled enquiry form with supporting guidance."
              }
            ]
          }
        },
        {
          "type": "gallery",
          "gallery": {
            "layout": "single",
            "items": [
              {
                "type": "image",
                "src": "/images/projects/sfg/sections/new-investment-introduction.png",
                "alt": "Redesigned investment-loans introduction and property-planning card.",
                "caption": "Redesigned investment-loans introduction and property-planning card."
              },
              {
                "type": "image",
                "src": "/images/projects/sfg/sections/new-investment-guidance.png",
                "alt": "Investment guidance organised around goals, budget, lending options, and future plans.",
                "caption": "Investment guidance organised around goals, budget, lending options, and future plans."
              },
              {
                "type": "image",
                "src": "/images/projects/sfg/sections/new-investment-process.png",
                "alt": "The complete four-step investment-loan process.",
                "caption": "The complete four-step investment-loan process."
              },
              {
                "type": "image",
                "src": "/images/projects/sfg/sections/new-investment-faq.png",
                "alt": "Investment-loan FAQs and supporting information.",
                "caption": "Investment-loan FAQs and supporting information."
              }
            ]
          }
        },
        {
          type: "text",
          paragraphs: [
            "I designed and implemented most of the public-facing experience, including the home page, finance and loan-detail pages, booking journey, navigation, calls to action, and supporting customer interfaces. The content hierarchy was designed to make complex lending information easier to scan without losing the professional tone expected from a finance business.",
            "Customers can explore loan products, use financial calculators, search frequently asked questions, read published insights, interact with a predefined support chatbot, submit enquiries, subscribe to updates, and book either Zoom or phone consultations.",
          ],
        },
        {
          type: "list",
          title: "Customer-facing functionality",
          columns: 2,
          items: [
            "Home, about, team, and contact pages",
            "Home, personal, vehicle, commercial, and business loan information",
            "Reusable service-detail page patterns",
            "Financial calculators with separated calculation logic",
            "Searchable FAQ and blog experiences",
            "Guided customer-support chatbot",
            "Contact and enquiry forms",
            "Newsletter subscription and preference management",
          ],
        },
      ],
    },
    {
      id: "mern-architecture",
      number: "05",
      title: "MERN architecture and API integration",
      details: [
        {
          label: "Frontend",
          items: ["React", "TypeScript", "Vite", "CSS Modules"],
        },
        {
          label: "Backend",
          items: ["Node.js", "Express", "MongoDB", "Mongoose"],
        },
      ],
      blocks: [
        {
          type: "text",
          paragraphs: [
            "The application uses a MERN architecture: a React and TypeScript single-page application communicates with an Express JSON API, while MongoDB Atlas stores operational records, website content, blogs, users, bookings, enquiries, meetings, subscribers, and audit information.",
            "Frontend API access is centralised within reusable client utilities and CMS hooks instead of being duplicated inside individual pages. On the backend, routes apply middleware, controllers coordinate HTTP request and response behaviour, services contain business and third-party integration logic, and models provide access to MongoDB collections and schemas.",
            "Although my primary ownership was frontend and UI/UX, I became familiar with the backend structure so I could connect interfaces correctly, trace issues across the request lifecycle, help with setup and integrations, and contribute minor fixes when frontend behaviour revealed an API, validation, or data problem.",
          ],
        },
        {
          type: "list",
          title: "Full-stack data flows I worked with",
          columns: 2,
          items: [
            "Public content retrieval from MongoDB-backed CMS APIs",
            "Booking creation, availability, rescheduling, and cancellation",
            "Contact-form submission and staff enquiry views",
            "Staff session and role checks",
            "Blog drafting, publishing, searching, and editing",
            "Newsletter confirmation and preference links",
            "Meeting and booking cross-navigation",
            "Form validation, loading, success, and error states",
          ],
        },
        {
          type: "callout",
          title: "Working across the stack",
          text:
            "Understanding the Express routes, controllers, services, validation, and MongoDB data made it much easier to diagnose interface problems accurately instead of treating every failure as a frontend issue.",
        },
      ],
    },
    {
      id: "booking-and-integrations",
      number: "06",
      title: "Booking and third-party service workflows",
      details: [
        {
          label: "Integrations",
          items: [
            "Microsoft Graph",
            "Outlook",
            "OAuth 2.0",
            "Zoom",
            "Granola",
          ],
        },
      ],
      blocks: [
        {
          "type": "gallery",
          "gallery": {
            "layout": "two-column",
            "items": [
              {
                "type": "image",
                "src": "/images/projects/sfg/sections/old-home-enquiry.png",
                "alt": "Original homepage: customers could send an enquiry through a general form.",
                "caption": "Original homepage: customers could send an enquiry through a general form."
              },
              {
                "type": "image",
                "src": "/images/projects/sfg/sections/new-home-booking.png",
                "alt": "Redesigned homepage: a direct call to book a Zoom or phone conversation.",
                "caption": "Redesigned homepage: a direct call to book a Zoom or phone conversation."
              },
              {
                "type": "image",
                "src": "/images/projects/sfg/sections/new-contact-booking.png",
                "alt": "Redesigned contact page: reassurance and a meeting-booking action.",
                "caption": "Redesigned contact page: reassurance and a meeting-booking action."
              }
            ]
          }
        },
        {
          type: "text",
          paragraphs: [
            "The booking journey connects customer-facing forms with staff availability, email communication, calendar and meeting services, and internal booking management. Customers can select a broker, meeting method, date, and time, then manage the appointment through secure links sent by email without creating a traditional customer account.",
            "The server coordinates Outlook and Microsoft Graph functionality for email and calendar-related behaviour, OAuth-based integration, and Zoom meeting support. Meeting records can also expose imported transcripts and summaries alongside their related booking, giving staff a connected view of the consultation lifecycle.",
          ],
        },
        {
          type: "list",
          title: "Connected booking workflow",
          columns: 2,
          items: [
            "Broker and meeting-method selection",
            "Date and time availability",
            "Customer details and validation",
            "Zoom or phone consultation support",
            "Confirmation emails and appointment reminders",
            "Secure customer management links",
            "Rescheduling and cancellation",
            "Staff booking search and filtering",
            "Meeting transcript and summary status",
            "Navigation between meetings and bookings",
          ],
        },
      ],
    },
    {
      id: "content-platform",
      number: "07",
      title: "CMS and modular blog experience",
      details: [
        {
          label: "Content tools",
          items: [
            "Website CMS",
            "Original-value recovery",
            "Component-based blog editor",
          ],
        },
      ],
      blocks: [
        {
          "type": "gallery",
          "gallery": {
            "layout": "two-column",
            "items": [
              {
                "type": "image",
                "src": "/images/projects/sfg/sections/old-home-faq-blog.png",
                "alt": "Original homepage: FAQ and blog content presented as public information.",
                "caption": "Original homepage: FAQ and blog content presented as public information."
              }
            ]
          }
        },
        {
          "type": "gallery",
          "gallery": {
            "layout": "full-width",
            "items": [
              {
                "type": "image",
                "src": "/images/projects/sfg/new/CMS page.png",
                "alt": "Secure Finance Group CMS with page navigation, editable content fields, live preview, reset controls, and a save button",
                "caption": "New capability: staff can edit website content alongside a live preview and restore original values."
              }
            ]
          }
        },
        {
          type: "text",
          paragraphs: [
            "The website needed to remain editable for staff who were not developers. I designed the CMS and blog-management interfaces around recognition, visible system status, clear validation, and immediate success or error feedback so administrators could understand what had changed without repeatedly moving between editing and public pages.",
            "The CMS supports content across the home page, company information, team profiles, loan services, calculators, FAQs, blog layouts, newsletters, and other public pages. Saved MongoDB content becomes the runtime source of truth, while administrators can restore original values when a change needs to be reversed.",
            "The blog editor uses reusable content components rather than one fixed article layout. Staff can create, rearrange, draft, publish, search, and edit articles, while future developers can extend the available component types without rebuilding the entire editor. My contribution focused on the workflow and interface design, with implementation completed collaboratively by the team.",
          ],
        },
        {
          type: "list",
          title: "Usability principles applied",
          columns: 2,
          items: [
            "Visibility of save and publishing status",
            "Recognition rather than recall",
            "Consistent controls and terminology",
            "Immediate validation and operation feedback",
            "Error prevention and confirmation steps",
            "Progressive disclosure through grouped and collapsible fields",
            "Searchable content-management lists",
            "Original-content restoration",
          ],
        },
      ],
    },
    {
      id: "staff-workspace",
      number: "08",
      title: "Role-based staff workspace",
      details: [
        {
          label: "Roles",
          items: ["Broker", "Administrator"],
        },
        {
          label: "Authentication",
          items: ["Password login", "One-time email code"],
        },
      ],
      blocks: [
        {
          "type": "gallery",
          "gallery": {
            "layout": "full-width",
            "items": [
              {
                "type": "image",
                "src": "/images/projects/sfg/sections/new-admin-overview.png",
                "alt": "New capability: the administration overview, booking counts, schedule, and follow-up status.",
                "caption": "New capability: the administration overview, booking counts, schedule, and follow-up status."
              },
              {
                "type": "image",
                "src": "/images/projects/sfg/sections/new-admin-workspace.png",
                "alt": "New capability: staff shortcuts to bookings, enquiries, meetings, users, mailing lists, and blogs.",
                "caption": "New capability: staff shortcuts to bookings, enquiries, meetings, users, mailing lists, and blogs."
              }
            ]
          }
        },
        {
          type: "text",
          paragraphs: [
            "The authenticated workspace separates broker and administrator capabilities. Brokers work with their bookings, meeting content, blogs, and enquiries, while administrators can additionally manage staff accounts, mailing-list records, CMS content, and uploaded images.",
            "Frontend route guards improve navigation, while backend middleware and endpoint checks enforce permissions. The staff-management workflow also protects referential integrity by preventing changes that would remove the final active administrator, modify the current administrator incorrectly, or delete staff records that are still referenced by bookings, meetings, content, or audit history.",
          ],
        },
        {
          type: "list",
          title: "Internal workflows",
          columns: 2,
          items: [
            "Password and email-code authentication",
            "Booking search, filtering, and management",
            "Meeting transcript and summary review",
            "Customer enquiry management",
            "Blog drafting and publishing",
            "CMS content and image management",
            "Mailing-list administration",
            "Staff creation, role, status, and password controls",
          ],
        },
      ],
    },
    {
      id: "design-system",
      number: "09",
      title: "Reusable frontend and responsive design",
      details: [
        {
          label: "Design system",
          items: [
            "Centralised tokens",
            "Global styles",
            "CSS Modules",
            "Reusable components",
          ],
        },
      ],
      blocks: [
        {
          "type": "gallery",
          "gallery": {
            "layout": "two-column",
            "items": [
              {
                "type": "image",
                "src": "/images/projects/sfg/sections/old-home-services.png",
                "alt": "Before: separate homepage service cards.",
                "caption": "Before: separate homepage service cards."
              },
              {
                "type": "image",
                "src": "/images/projects/sfg/sections/new-home-services.png",
                "alt": "After: service pathways grouped around customer goals.",
                "caption": "After: service pathways grouped around customer goals."
              },
              {
                "type": "image",
                "src": "/images/projects/sfg/sections/old-home-process.png",
                "alt": "Before: a four-step overview of the broker relationship.",
                "caption": "Before: a four-step overview of the broker relationship."
              },
              {
                "type": "image",
                "src": "/images/projects/sfg/sections/new-home-process.png",
                "alt": "After: a simplified conversation, options, and next-steps sequence.",
                "caption": "After: a simplified conversation, options, and next-steps sequence."
              },
              {
                "type": "image",
                "src": "/images/projects/sfg/sections/new-home-introduction.png",
                "alt": "A consistent editorial layout pairs personal guidance with broker photography.",
                "caption": "A consistent editorial layout pairs personal guidance with broker photography."
              }
            ]
          }
        },
        {
          type: "text",
          paragraphs: [
            "Because several developers were contributing to a large interface, I established shared design tokens for colour, typography, spacing, borders, shadows, and transitions. Global styles handle common elements, while CSS Modules keep page and component styles locally scoped.",
            "This reduced hardcoded styling and made brand updates significantly easier. When the client supplied the final brand colours, the interface could be updated centrally rather than changing values across individual pages. Shared components and layouts also helped different contributors produce a more consistent experience.",
            "Responsive behaviour was designed for desktop, tablet, and mobile rather than treated as simple component shrinking. Multi-column content collapses, typography and spacing adjust, navigation changes, and complex staff interfaces reorganise to preserve information hierarchy on smaller screens.",
          ],
        },
        {
          type: "list",
          title: "Accessibility and responsive considerations",
          columns: 2,
          items: [
            "Readable type hierarchy and line spacing",
            "High-contrast text and interactive controls",
            "Visible keyboard focus indicators",
            "Persistent form labels and validation feedback",
            "Reduced-motion support",
            "Touch-friendly inputs and actions",
            "Semantic headings, navigation, and forms",
            "Mobile-specific layout restructuring",
          ],
        },
      ],
    },
    {
      id: "debugging-and-quality",
      number: "10",
      title: "Debugging, integration, and quality assurance",
      details: [
        {
          label: "Testing",
          items: [
            "Functional",
            "Responsive",
            "Integration",
            "User acceptance",
          ],
        },
      ],
      blocks: [
        {
          type: "text",
          paragraphs: [
            "A platform of this size produced problems that crossed feature and ownership boundaries. I helped investigate frontend-backend integration failures, unexpected API responses, validation behaviour, styling regressions introduced during merges, setup issues, and responsive defects across both my work and teammates' features.",
            "My familiarity with the backend allowed me to follow a problem from the user action through the frontend API utility, Express route and middleware, controller or service, and MongoDB data. This made bug reports more precise and helped the team identify whether the correct fix belonged in the interface, API contract, validation, permissions, or stored data.",
            "I performed manual functional and responsive testing, collected peer feedback, and participated in user-acceptance testing with the client. These checks surfaced both defects and usability problems that were technically functional but did not yet match user expectations.",
          ],
        },
        {
          type: "list",
          title: "Problems I helped solve",
          columns: 2,
          items: [
            "Frontend and API integration mismatches",
            "Loading, validation, success, and error-state issues",
            "Styling conflicts introduced during feature merges",
            "Inconsistent components across contributor branches",
            "Responsive layouts for complex CMS and blog tools",
            "Environment and deployment compatibility issues",
            "Client requirements that needed more precise clarification",
            "Usability issues found through peer and acceptance testing",
          ],
        },
      ],
    },
    {
      id: "outcome",
      number: "11",
      title: "Outcome",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "The completed platform gives Secure Finance Group a modern public website and an integrated operational system for consultations, enquiries, meetings, content, blogs, subscribers, and staff administration. It replaces disconnected customer and internal processes with workflows backed by a shared MERN application and database.",
            "For me, the project strengthened the connection between UI/UX and full-stack engineering. I learned that maintainable frontend work depends on understanding API contracts, backend validation, permissions, data relationships, integrations, deployment constraints, and the real people who will operate the product after handover.",
          ],
        },
        {
          type: "list",
          title: "Delivered outcomes",
          columns: 2,
          items: [
            "Complete responsive finance website",
            "Connected customer booking journey",
            "Protected broker and administrator workspace",
            "MERN API and MongoDB data integration",
            "Outlook, Microsoft Graph, Zoom, and meeting-service integrations",
            "Editable website content and modular blog publishing",
            "Centralised, reusable design system",
            "Accessible desktop, tablet, and mobile interfaces",
            "Documented setup, architecture, and user workflows",
            "Client-reviewed and refined product experience",
          ],
        },
      ],
    },
  ],
} satisfies Project;
