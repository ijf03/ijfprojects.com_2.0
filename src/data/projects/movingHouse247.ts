import type { Project } from "../../types/project";

export const movingHouse247 = {
  "slug": "moving-house-247",
  "title": "Moving House 24/7",
  "tagline": "A collaborative booking and operations platform for a removals and storage business, connecting customers, staff and administrators.",
  "type": "Full-Stack Development / Client Project",
  "year": "2026",
  "featured": true,
  "status": "Completed",
  "shortDescription": "A client-facing CakePHP platform for bookings, enquiries and business operations. My work focused on interfaces, customer messaging and administrative workflows.",
  "introduction": [
    "Moving House 24/7 brings a removals company's public website, customer portal and internal workflows into one CakePHP application. The client context is supplied by the developer; the repository verifies the application's modules and integrations.",
    "I contributed UI/UX implementation across public and administrative pages, the customer enquiry portal and threaded replies. Bookings, payments, staff operations and resource management are described as team-delivered capabilities."
  ],
  "disciplines": [
    "UI/UX Design",
    "Frontend Development",
    "Full-stack Development"
  ],
  "roles": [
    "UI/UX Designer",
    "Developer"
  ],
  "responsibilities": [
    "Redesigned the homepage and services navigation using responsive Bootstrap layouts.",
    "Implemented the customer enquiry portal, threaded replies and customer-ownership checks.",
    "Built the administrative dashboard and refined resource-management navigation.",
    "Improved mobile navigation, table search/sort feedback and job acceptance confirmations.",
    "Integrated interface workflows with CakePHP models, validation and content editing."
  ],
  "client": "Moving House 24/7",
  "team": [
    "Collaborative client project"
  ],
  "categories": [
    "Client Project",
    "Full-stack Development",
    "UI/UX Design"
  ],
  "skills": [
    "UI/UX Design",
    "Responsive design",
    "MVC"
  ],
  "techStack": {
    "languages": [
      "PHP",
      "JavaScript"
    ],
    "backend": [
      "CakePHP"
    ],
    "frontend": [
      "Bootstrap",
      "HTML",
      "CSS"
    ],
    "databases": [
      "MySQL"
    ],
    "integrations": [
      "Stripe API",
      "Google reCAPTCHA",
      "ContentBlocks"
    ],
    "devops": [
      "Composer"
    ]
  },
  "features": [
    "Public website and customer enquiry portal",
    "Customer enquiry threads with ordered replies",
    "Removal, storage and transfer booking modules",
    "Team integration: invoice and Stripe payment workflows",
    "Team integration: staff availability, jobs and resource allocation",
    "Truck, storage, equipment and inventory management",
    "ContentBlocks-based website content editing",
    "Administrative search, filtering and sorting"
  ],
  "coverImage": "/images/projects/moving-house-247/moving-house-logo.png",
  "heroGallery": {
    "layout": "full-width",
    "items": [
      {
        "type": "image",
        "src": "/images/projects/moving-house-247/admin-dashboard.png",
        "alt": "Moving House 24/7 dashboard with navigation and administrative action cards",
        "caption": "Administrative dashboard and navigation, without customer records."
      }
    ]
  },
  "deploymentStatus": "Source code available",
  "links": [
    {
      "label": "View source on GitHub",
      "href": "https://github.com/ijf03/Moving-House-247",
      "type": "github"
    }
  ],
  "sections": [
    {
      "id": "project-context",
      "title": "One system, several user workflows",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "Customers need to submit enquiries and booking requests, while staff and administrators work with jobs, invoices and resources. The engineering challenge is to present those related records through interfaces appropriate to each role.",
            "The public website and operational modules belong to a collaborative client project. The portfolio does not claim measured business savings or current production usage."
          ]
        }
      ]
    },
    {
      "id": "customer-enquiries",
      "title": "A customer portal with threaded replies",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "My customer-portal changes add a paginated enquiry list scoped to the signed-in customer, a thread view with replies ordered by creation time, and checks before a customer can view or reply to an enquiry.",
            "The controller retrieves related customers and replies through CakePHP's ORM. Keeping ownership validation in the request path makes the interface more than a filtered list of links."
          ]
        }
      ]
    },
    {
      "id": "ui-ux-design",
      "title": "Designing around administrative tasks",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "The dashboard uses action cards to surface bookings, enquiries, invoices, users, resources and content management. My resource-navigation and mobile-layout changes make those modules easier to reach without creating separate visual systems.",
            "Commit evidence also records homepage redesign, clearer table sorting indicators, invoice filtering and confirmation feedback for job acceptance. These concrete changes define my interface contribution."
          ]
        }
      ]
    },
    {
      "id": "content-management",
      "title": "Integrating ContentBlocks",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "Composer identifies the CakePHP ContentBlocks plugin, and the application includes content-block controllers and templates. Website content can be edited through application interfaces rather than only through source files.",
            "This is a ContentBlocks integration with project-specific interfaces, not a CMS engine written entirely from scratch."
          ]
        }
      ]
    },
    {
      "id": "development",
      "title": "Connecting interfaces to the team platform",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "CakePHP controllers, entity/table models and PHP templates implement the web application. The manifest verifies CakePHP 5, its authentication package, Stripe and reCAPTCHA dependencies. Booking, invoice, staff and resource modules form the team's wider system.",
            "Payment and operational capabilities are not automatically attributed to me. The strongest personal evidence is in the enquiry controller changes, homepage, dashboard and navigation diffs."
          ]
        }
      ]
    },
    {
      "id": "outcome",
      "title": "Interface development across real workflows",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "The project demonstrates how frontend decisions depend on roles, record ownership and backend relationships. My contribution spans both presentation and the request logic behind customer communication.",
            "PHPUnit configuration and test scaffolding exist, but this portfolio task did not run the client application or use its payment, database or customer data. Additional screenshots should use synthetic records."
          ]
        }
      ]
    }
  ]
} satisfies Project;
