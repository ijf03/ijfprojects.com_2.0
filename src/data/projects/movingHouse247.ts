import type { Project } from "../../types/project";

export const movingHouse247 = {
  slug: "moving-house-247",
  title: "Moving House 24/7",
  tagline:
    "A digital booking, operations, and content-management platform for a Victorian removals business.",
  type: "Business Operations and Custom CMS Platform",
  year: "2026",
  completedDate: "June 2026",
  featured: true,
  status: "Completed",

  shortDescription:
    "A role-based platform that centralises customer enquiries, bookings, payments, staff scheduling, job allocation, and website content management.",

  introduction: [
    "Moving House 24/7 is a full-stack web platform developed for a real removals and storage business in Victoria. The client previously relied heavily on paper records, folders, and manual communication to manage customers, bookings, jobs, staff, invoices, and business resources.",
    "Our team designed and developed one connected system for the public website, customer portal, staff operations, and administrative management. It also includes a custom CMS that allows authorised users to update public website information without editing the application code.",
  ],

  disciplines: ["UI/UX Design", "Frontend Development", "Full-stack Development"],

  roles: [
    "UI/UX Designer",
    "Frontend Developer",
    "Content Designer",
  ],

  responsibilities: [
    "Designed the public website, customer portal, staff interfaces, and administrative dashboard",
    "Translated business requirements and backend workflows into clear user journeys",
    "Created responsive layouts, forms, tables, navigation, status indicators, and reusable interface patterns",
    "Designed and implemented the custom CMS interfaces for managing public website content",
    "Worked with backend developers to connect the frontend to CakePHP data, permissions, validation, and workflow logic",
    "Applied usability and accessibility principles across desktop and mobile interfaces",
    "Supported end-to-end testing and refinement across customer, staff, and administrator roles",
  ],

  client: "Moving House 24/7",
  duration: "Two university development iterations",
  team: ["Nine-person multidisciplinary student team"],

  categories: [
    "Client Project",
    "Business Systems",
    "Custom CMS",
    "UI/UX Design",
    "Full-stack Development",
  ],

  techStack: [
    "CakePHP",
    "PHP",
    "MySQL",
    "JavaScript",
    "Bootstrap",
    "HTML",
    "CSS",
    "Stripe API",
    "Google reCAPTCHA",
    "FullCalendar",
  ],

  features: [
    "Custom CMS for managing public website content",
    "Role-based customer, staff, and administrator dashboards",
    "Online enquiry and booking workflows",
    "Customer portal with threaded messaging",
    "Booking approval and status management",
    "Invoice generation and Stripe payments",
    "Staff availability, scheduling, and job allocation",
    "User, resource, referral, and content management",
    "Responsive administrative interfaces",
    "Email notifications and form validation",
  ],

  coverImage: "/images/projects/moving-house-247/moving-house-logo.png",

  heroGallery: {
    layout: "featured-grid",
    featuredIndex: 0,
    items: [
        {
            type: "image",
            src: "/images/projects/moving-house-247/hero.png",
            alt: "Moving House 24/7",
            caption: "Home page hero section",
            aspectRatio: "landscape",
        },
        {
            type: "image",
            src: "/images/projects/moving-house-247/admin-dashboard.png",
            alt: "Moving House 24/7 administrative dashboard",
            caption: "Role-based administrative dashboard",
            aspectRatio: "landscape",
        },
        {
            type: "image",
            src: "/images/projects/moving-house-247/resource-allocation.png",
            alt: "Resource Allocation System",
            caption: "Allocate resources to every job",
            aspectRatio: "landscape",
        },
        {
            type: "image",
            src: "/images/projects/moving-house-247/Resource-management.png",
            alt: "Resource Management System",
            caption: "Manage the resources available to the company",
            aspectRatio: "landscape",
        },
        {
            type: "image",
            src: "/images/projects/moving-house-247/trasnfer-service-form.png",
            alt: "Transfer Service form for customers",
            caption: "Customer side form",
            aspectRatio: "landscape",
        },
    ],
  },

  links: [],

  sections: [
    {
      id: "project-context",
      number: "01",
      title: "Project context",
      details: [
        {
          label: "Users",
          items: ["Customers", "Staff", "Administrators"],
        },
        {
          label: "Scope",
          items: [
            "Public website",
            "Customer portal",
            "Operations platform",
            "Custom CMS",
          ],
        },
      ],
      blocks: [
        {
          type: "text",
          paragraphs: [
            "The client needed to replace disconnected, paper-based processes with a central system that could support both customer-facing services and internal operations.",
            "Because customers, staff members, and administrators interacted with the same bookings and jobs in different ways, the platform needed clear role boundaries without feeling like several unrelated products.",
          ],
        },
        {
          type: "list",
          title: "Project goals",
          columns: 2,
          items: [
            "Move enquiries and booking requests online",
            "Centralise customer, booking, invoice, job, and resource information",
            "Support customer and staff communication",
            "Introduce staff availability and job allocation",
            "Provide secure online payments",
            "Allow administrators to manage public website content",
            "Create responsive and accessible interfaces",
          ],
        },
      ],
    },
    {
      id: "research-and-workflows",
      number: "02",
      title: "Understanding the business workflows",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "We began by reviewing the client's existing processes and identifying the information and actions required by each user role. The team mapped dependencies between enquiries, bookings, invoices, payments, staff availability, and jobs before building the interfaces.",
            "This helped us prioritise the main customer and administrative workflows for the first iteration, then expand into staff operations and reporting during the second.",
          ],
        },
        {
          type: "gallery",
          gallery: {
            layout: "two-column",
            items: [
              {
                type: "image",
                src: "/images/projects/moving-house-247/enquiry-flow.png",
                alt: "Customer enquiry and booking workflow",
                caption: "Customer enquiry and booking flow",
                aspectRatio: "landscape",
              },
              {
                type: "image",
                src: "/images/projects/moving-house-247/role-flow.png",
                alt: "Customer, staff, and administrator role workflow",
                caption: "Role and permission mapping",
                aspectRatio: "landscape",
              },
            ],
          },
        },
      ],
    },
    {
      id: "ui-ux-design",
      number: "03",
      title: "Role-based UI/UX design",
      details: [
        {
          label: "Design focus",
          items: [
            "Information hierarchy",
            "Status visibility",
            "Error prevention",
            "Responsive behaviour",
          ],
        },
      ],
      blocks: [
        {
          type: "gallery",
          gallery: {
            layout: "full-width",
            items: [
              {
                type: "image",
                src: "/images/projects/moving-house-247/design-system.png",
                alt: "Moving House 24/7 interface components and design patterns",
                caption: "Reusable interface patterns and visual language",
                aspectRatio: "wide",
              },
            ],
          },
        },
        {
          type: "text",
          paragraphs: [
            "I designed each interface around the tasks its user needed to complete. Customer pages prioritised clear progress, reassurance, and communication, while staff and administrative pages focused on efficient access to operational information.",
            "Reusable patterns for forms, tables, actions, validation, status labels, and navigation helped the system remain consistent even as its number of modules increased.",
          ],
        },
        {
          type: "list",
          title: "Interfaces I designed",
          columns: 2,
          items: [
            "Public information pages",
            "Customer enquiry portal",
            "Booking and payment pages",
            "Threaded messages",
            "Administrative dashboards",
            "User and booking management",
            "Staff availability and job pages",
            "Responsive mobile navigation",
          ],
        },
      ],
    },
    {
      id: "custom-cms",
      number: "04",
      title: "Custom content-management system",
      details: [
        {
          label: "Purpose",
          items: ["Editable public content", "Reduced developer dependency"],
        },
      ],
      blocks: [
        {
          type: "text",
          paragraphs: [
            "The platform includes custom content-management functionality rather than relying on an external CMS product. Authorised administrators can update public website content through the same business system used for bookings and operations.",
            "This keeps content editing connected to the client's existing permissions and interface patterns while allowing routine information changes without modifying source code.",
          ],
        },
        {
          type: "gallery",
          gallery: {
            layout: "two-column",
            items: [
              {
                type: "image",
                src: "/images/projects/moving-house-247/cms-list.png",
                alt: "List of editable Moving House 24/7 website content",
                caption: "Content-management overview",
                aspectRatio: "landscape",
              },
              {
                type: "image",
                src: "/images/projects/moving-house-247/cms-edit.png",
                alt: "Moving House 24/7 content editing form",
                caption: "Editing public website information",
                aspectRatio: "landscape",
              },
            ],
          },
        },
      ],
    },
    {
      id: "development",
      number: "05",
      title: "Connecting the design to application logic",
      details: [
        {
          label: "Development",
          items: ["CakePHP", "PHP", "MySQL", "JavaScript", "Bootstrap"],
        },
        {
          label: "Integrations",
          items: ["Stripe", "Google reCAPTCHA", "FullCalendar"],
        },
      ],
      blocks: [
        {
          type: "text",
          paragraphs: [
            "The frontend needed to reflect real application state, permissions, validation rules, and database relationships. I worked closely with the backend developers so that interface actions aligned with CakePHP controllers and the underlying business logic.",
            "Booking approvals, payment availability, messages, staff allocation, and status changes could not be treated as isolated visual interactions. The available actions and feedback had to change according to each user's role and the current workflow state.",
          ],
        },
        {
          type: "callout",
          title: "What this taught me",
          text:
            "Strong frontend development requires an understanding of the backend, data model, permissions, and business rules—not only the visible interface.",
        },
      ],
    },
    {
      id: "challenges",
      number: "06",
      title: "Key design and development challenges",
      blocks: [
        {
          type: "list",
          columns: 1,
          items: [
            "Supporting three user roles that interact with the same underlying bookings and jobs",
            "Presenting large amounts of administrative information without making pages difficult to scan",
            "Keeping frontend actions aligned with backend permissions and workflow states",
            "Making table-heavy administrative interfaces usable on mobile screens",
            "Maintaining consistent interaction patterns across a growing number of modules",
          ],
        },
        {
          type: "text",
          paragraphs: [
            "We addressed these issues through role-based navigation, reusable interface patterns, responsive table strategies, clear status feedback, search and filtering, and regular collaboration between frontend and backend team members.",
          ],
        },
      ],
    },
    {
      id: "outcome",
      number: "07",
      title: "Outcome",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "The completed platform brought the client's main customer-facing and operational workflows into one connected system. It established a foundation for replacing manual records and managing bookings, communication, payments, staff, jobs, resources, and public content more consistently.",
            "For me, the project demonstrated how UI/UX design, frontend implementation, backend logic, accessibility, and business requirements need to work together in a real client system.",
          ],
        },
        {
          type: "list",
          title: "Delivered outcomes",
          columns: 2,
          items: [
            "Centralised business information and workflows",
            "Online customer enquiry and booking experience",
            "Role-based administrative and staff tools",
            "Secure invoicing and payment workflow",
            "Custom website content management",
            "Responsive interfaces across devices",
          ],
        },
        {
          type: "gallery",
          gallery: {
            layout: "masonry",
            items: [
              {
                type: "image",
                src: "/images/projects/moving-house-247/messages.png",
                alt: "Moving House 24/7 threaded messaging interface",
                caption: "Threaded customer communication",
                aspectRatio: "portrait",
              },
              {
                type: "image",
                src: "/images/projects/moving-house-247/staff-calendar.png",
                alt: "Moving House 24/7 staff scheduling calendar",
                caption: "Staff availability and scheduling",
                aspectRatio: "landscape",
              },
              {
                type: "image",
                src: "/images/projects/moving-house-247/invoice.png",
                alt: "Moving House 24/7 invoice interface",
                caption: "Invoice and payment workflow",
                aspectRatio: "portrait",
              },
              {
                type: "image",
                src: "/images/projects/moving-house-247/mobile.png",
                alt: "Moving House 24/7 mobile interface",
                caption: "Responsive mobile experience",
                aspectRatio: "portrait",
              },
            ],
          },
        },
      ],
    },
  ],
} satisfies Project;
