import type { Project } from "../../types/project";

export const movingHouse247 = {
  slug: "moving-house-247",
  title: "Moving House 24/7",
  type: "Business Operations and CMS Platform",
  year: "2026",
  featured: true,
  status: "Completed",

  shortDescription:
    "A role-based booking and operations platform developed for a Victorian removals and storage business transitioning from paper-based processes.",

  overview:
    "Moving House 24/7 is a full-stack web platform that centralises customer enquiries, bookings, communication, invoices, payments, staff scheduling, job allocation, and administrative workflows.",

  client: "Moving House 24/7",
  role: "UI/UX Designer and Frontend Developer",
  duration: "University industry project",
  team: ["Nine-person multidisciplinary student team"],
  categories: [
    "Full-stack Development",
    "UI/UX Design",
    "Business Systems",
    "Custom CMS",
    "Client Project",
  ],

  stack: [
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
    "Role-based customer, staff, and administrator dashboards",
    "Online enquiry and booking workflows",
    "Customer portal with threaded messaging",
    "Booking approval and status management",
    "Invoice generation and Stripe payments",
    "Staff availability, scheduling, and job allocation",
    "User, resource, and content management",
    "Responsive administrative interfaces",
    "Email notifications and form validation",
    "Custom CMS for managing public website content",
  ],

  coverImage: "/images/projects/moving-house-247/cover.png",

  media: [
    {
      type: "image",
      src: "/images/projects/moving-house-247/dashboard.png",
      alt: "Moving House 24/7 administrative dashboard",
      caption: "Role-based administrative dashboard",
    },
    {
      type: "image",
      src: "/images/projects/moving-house-247/customer-portal.png",
      alt: "Moving House 24/7 customer booking portal",
      caption: "Customer enquiry, booking, and communication portal",
    },
    {
      type: "image",
      src: "/images/projects/moving-house-247/bookings.png",
      alt: "Moving House 24/7 booking management interface",
      caption: "Booking management and approval workflow",
    },
  ],

  links: {},

  caseStudy: {
    introduction:
      "A real-client industry project focused on transforming disconnected, paper-based business processes into one accessible digital platform.",

    problem: [
      "The client relied heavily on paper records, folders, and manual communication to manage customers, bookings, jobs, staff, invoices, and resources.",
      "Information was spread across separate processes, making it harder to track updates and maintain a consistent view of business operations.",
      "The platform needed to support customers, staff members, and administrators without making the workflows confusing for users with different technical abilities.",
    ],

    goals: [
      "Move customer enquiries and booking requests online",
      "Centralise customer, booking, invoice, job, and resource information",
      "Create clear workflows for customers, staff, and administrators",
      "Support communication between customers and the business",
      "Introduce staff scheduling and job allocation",
      "Provide secure online payments",
      "Ensure the system remained responsive and usable across devices",
    ],

    responsibilities: [
      "Designed interfaces and page layouts across the public website, customer portal, staff system, and administrative dashboard",
      "Translated business requirements and backend workflows into understandable user journeys",
      "Created responsive tables, forms, navigation, status indicators, management pages, and threaded messaging interfaces",
      "Worked with backend developers to connect frontend components to CakePHP data, permissions, validation, and application logic",
      "Applied usability and accessibility principles throughout the interface",
      "Supported testing and refinement of end-to-end workflows across different user roles",
    ],

    process: [
      {
        id: "requirements",
        eyebrow: "01",
        title: "Understanding the business",
        paragraphs: [
          "The project began by reviewing the client's existing processes and identifying the information each user role needed to access.",
          "We translated the requirements into customer, staff, and administrator workflows rather than treating the platform as one generic dashboard.",
        ],
        highlights: [
          "Mapped role-specific tasks and permissions",
          "Identified dependencies between enquiries, bookings, invoices, jobs, and payments",
          "Prioritised core workflows for the first development iteration",
        ],
      },
      {
        id: "interface-design",
        eyebrow: "02",
        title: "Designing role-based interfaces",
        paragraphs: [
          "I designed interfaces around the tasks each user needed to complete. Customer pages prioritised clear progress and communication, while administrative pages focused on efficient information management.",
          "Reusable patterns were established for forms, responsive tables, status labels, actions, validation, and navigation so the system felt consistent across modules.",
        ],
        highlights: [
          "Public website and information pages",
          "Customer enquiry and booking portal",
          "Administrative management screens",
          "Staff availability and job interfaces",
          "Mobile navigation and responsive tables",
        ],
      },
      {
        id: "implementation",
        eyebrow: "03",
        title: "Connecting design with application logic",
        paragraphs: [
          "The frontend needed to reflect real application state, permissions, and backend relationships. I worked closely with the development team to ensure interface actions aligned with CakePHP controllers, database records, and role restrictions.",
          "Booking approvals, payment availability, message threads, job allocation, and status changes all depended on backend rules rather than being purely visual interactions.",
        ],
        highlights: [
          "Integrated persistent application data",
          "Handled role-based visibility and navigation",
          "Added validation, feedback, and error states",
          "Supported Stripe payment and reCAPTCHA workflows",
        ],
      },
      {
        id: "iteration",
        eyebrow: "04",
        title: "Expanding the operational system",
        paragraphs: [
          "The first iteration established the website, customer portal, administrative tools, booking flow, invoices, and payments.",
          "The second iteration expanded the platform into internal operations through staff availability, scheduling, job allocation, referrals, resources, notifications, and reporting.",
        ],
        highlights: [
          "Customer-facing services",
          "Administrative workflows",
          "Staff operations",
          "Notifications and reporting",
        ],
      },
    ],

    challenges: [
      {
        title: "Designing for multiple user roles",
        problem:
          "Customers, staff, and administrators needed different information and actions, but all roles interacted with the same underlying bookings and jobs.",
        solution:
          "We created separate role-based navigation and dashboards while maintaining consistent interface patterns and status language throughout the platform.",
      },
      {
        title: "Making complex data manageable",
        problem:
          "Administrative pages contained large amounts of booking, customer, invoice, and job information that could become difficult to scan on smaller screens.",
        solution:
          "I used responsive tables, clear visual hierarchy, filtering, search, status indicators, and focused actions to reduce clutter and support faster decision-making.",
      },
      {
        title: "Aligning frontend behaviour with backend rules",
        problem:
          "Actions such as approval, payment, staff allocation, and messaging depended on permissions and workflow state.",
        solution:
          "I collaborated closely with backend developers and learned the data relationships so interface controls, messages, and available actions accurately reflected the current system state.",
      },
    ],

    outcome: {
      summary:
        "The completed platform brought the client's main customer-facing and operational workflows into one connected system and established a scalable foundation for replacing manual records.",
      highlights: [
        "Centralised enquiry, booking, communication, invoice, payment, staff, and job information",
        "Provided customers with an online portal for requests, updates, messages, and payments",
        "Created role-based tools for administrators and staff",
        "Reduced reliance on disconnected paper-based processes",
        "Delivered a responsive system designed around real business workflows",
      ],
    },

    learnings: [
      "Good frontend work requires understanding the backend, data model, permissions, and business rules.",
      "Role-based systems need clear boundaries while maintaining consistency across the overall product.",
      "Information-heavy interfaces benefit from strong hierarchy, meaningful status feedback, and reusable interaction patterns.",
      "Regular communication between design and development prevents interface decisions from becoming disconnected from technical constraints.",
    ],

    nextSteps: [
      "Conduct further usability testing with the client's staff and customers",
      "Continue improving operational reporting and analytics",
      "Refine automation around notifications and recurring workflows",
    ],
  },
} satisfies Project;
