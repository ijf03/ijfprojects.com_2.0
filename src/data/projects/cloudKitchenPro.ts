import type { Project } from "../../types/project";

export const cloudKitchenPro = {
  "slug": "cloudKitchenPro",
  "title": "CloudKitchenPro / Recipe Hub",
  "tagline": "A kitchen-management project developed from server-rendered Recipe Hub into an Angular application to explore the fundamentals of the MEAN stack.",
  "type": "Full-Stack Web Development",
  "year": "2025",
  "featured": false,
  "shortDescription": "A recipe and inventory application developed in two stages: Express, EJS and MongoDB first, then Angular and JSON APIs, with a focus on learning MEAN fundamentals.",
  "introduction": [
    "Recipe Hub and CloudKitchenPro are two stages of the same kitchen-management project. I first built recipe and inventory workflows with Express, EJS and MongoDB, then developed the Angular frontend and JSON API integration under the CloudKitchenPro name.",
    "My main aim was to understand the fundamentals of the MEAN stack: MongoDB, Express, Angular and Node.js. I prioritised data modelling, request handling and working features over visual design. The early EJS version established the backend concepts before I moved navigation, forms and data loading into Angular.",
    "This case study follows that progression in one place. The screenshots show the earlier Recipe Hub interface; the later stage demonstrates the move to Angular components, frontend services and PWA configuration."
  ],
  "disciplines": [
    "Full-stack Development",
    "Frontend Development",
    "Database Design"
  ],
  "roles": [
    "Developer"
  ],
  "responsibilities": [
    "Organised Express routes, controllers, Mongoose models and reusable EJS views around users, recipes and inventory.",
    "Built recipe creation, editing, search, duplication and ownership checks for destructive actions.",
    "Implemented inventory forms, category and location filters, low-stock indicators and expiration reporting.",
    "Connected dashboard counts and value summaries to MongoDB queries and aggregation.",
    "Added schema constraints, form-data normalisation, duplicate checks and validation feedback.",
    "Implemented Angular routing, navigation, login, registration and role-dependent dashboards.",
    "Built recipe and inventory list, detail, creation and editing screens.",
    "Connected Angular HttpClient services to Express JSON endpoints and MongoDB models.",
    "Added the service-worker manifest/configuration and adjusted application serving for a virtual machine."
  ],
  "skills": [
    "MVC architecture",
    "MongoDB data modelling",
    "CRUD workflows",
    "Server-side rendering",
    "Form validation",
    "Database aggregation",
    "REST APIs",
    "Client-side routing",
    "Progressive Web App"
  ],
  "techStack": {
    "languages": [
      "TypeScript",
      "JavaScript"
    ],
    "frontend": [
      "Angular",
      "Bootstrap",
      "HTML",
      "CSS"
    ],
    "backend": [
      "Node.js",
      "Express",
      "Mongoose",
      "EJS"
    ],
    "databases": [
      "MongoDB"
    ],
    "integrations": [
      "RxJS"
    ],
    "devops": [
      "Angular Service Worker"
    ]
  },
  "features": [
    "Recipe and inventory creation, detail pages, editing and deletion",
    "Recipe Hub: recipe search, filters, ownership-dependent actions and personal copies",
    "Recipe Hub: inventory filters, low-stock highlighting and expiration indicators",
    "Dashboard summaries and role-dependent navigation",
    "Mongoose data models, form validation and prototype account workflows",
    "CloudKitchenPro: Angular routing, forms and HttpClient services",
    "CloudKitchenPro: Express JSON APIs backed by MongoDB",
    "CloudKitchenPro: Angular service-worker and install manifest configuration"
  ],
  "links": [
    {
      "label": "CloudKitchenPro source (Angular)",
      "href": "https://github.com/ijf03/cloudkitchenpro",
      "type": "github"
    },
    {
      "label": "Recipe Hub source (EJS)",
      "href": "https://github.com/ijf03/RecipeHub2",
      "type": "github"
    }
  ],
  "sections": [
    {
      "id": "recipe-hub-motivation",
      "title": "Connecting recipes with kitchen stock",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "Recipe planning and inventory tracking often involve the same ingredients but live in separate records. I brought both into a single interface so users can organise cooking instructions while also reviewing available stock, storage locations and items approaching expiration.",
            "The workflow centres on a dashboard, searchable recipe catalogue and inventory table. These screens make records easier to find and maintain; the application does not automatically deduct ingredients when a recipe is prepared.",
            "This was primarily a technical learning project. I used a straightforward Bootstrap interface to practise how requests, routes, controllers, models and database operations fit together. The design supports those workflows, but visual polish and a bespoke design system were not the main focus."
          ]
        }
      ],
      "eyebrow": "Stage 1 · Recipe Hub / EJS"
    },
    {
      "id": "recipe-hub-architecture",
      "title": "From data models to server-rendered pages",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "I separated the application into models, routes, controllers and views. Express routes dispatch requests to controllers, controllers normalise form values and query MongoDB through Mongoose, and EJS templates render the results. Shared navigation and footer partials keep the page structure consistent, with Bootstrap and custom CSS handling presentation.",
            "The three main collections are users, recipes and inventories. Alongside MongoDB document IDs, records use readable sequential identifiers such as U-00001, R-00001 and I-00001. Recipes and inventory records carry a string userId to associate them with an account; these are application-managed relationships rather than populated ObjectId references.",
            "Recipe documents store ingredient and instruction arrays alongside meal type, cuisine, difficulty, preparation time and servings. Inventory documents capture quantity, unit, category, purchase and expiration dates, location and cost. Modelling these fields explicitly makes filtering and validation part of the application structure."
          ]
        }
      ],
      "eyebrow": "Stage 1 · Recipe Hub / EJS"
    },
    {
      "id": "recipe-hub-recipes",
      "title": "A shared catalogue with personal recipe ownership",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "The recipe catalogue supports text searches across titles, chef names and ingredients, combined with meal, cuisine and difficulty filters. The table exposes preparation time and servings so users can compare recipes before opening their details.",
            "I built create, view, edit, delete and duplicate workflows for chefs. Ownership determines which actions appear: a chef can edit or delete their own recipes, while another chef's recipe can be viewed and duplicated. Editing a recipe owned by someone else follows a copy-before-edit path, giving the current chef a separate record instead of changing the original.",
            "The copy workflow assigns a new recipe ID and owner, copies the recipe content and adds a Copy suffix to the title. Deletion also checks ownership in the controller, so the rule is enforced beyond the visible buttons. Recipe creation checks for an existing title before saving."
          ]
        }
      ],
      "eyebrow": "Stage 1 · Recipe Hub / EJS"
    },
    {
      "id": "recipe-hub-inventory",
      "title": "Making stock levels and expiration visible",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "Inventory management supports adding, viewing, editing and deleting ingredient records. Users can search the table and narrow results by category or storage location. Sorting by expiration date helps bring time-sensitive stock into view.",
            "The interface highlights quantities below five as low stock and labels expiration states directly in the table. In the supplied screenshot, yellow rows mark low quantities, a red badge marks an expired item and an orange badge identifies an item expiring in two days. This combines text and colour so the status remains understandable without relying on colour alone.",
            "The inventory reporting logic also calculates stock value from quantity multiplied by cost and provides an expiring-within-seven-days query. These reports provide a starting point for stock review; the low-stock threshold is fixed rather than tailored to each ingredient or measurement unit."
          ]
        },
        {
          "type": "gallery",
          "gallery": {
            "layout": "full-width",
            "items": [
              {
                "type": "image",
                "src": "/images/projects/recipe-hub/inventory admin view.png",
                "alt": "Recipe Hub inventory table with category and location filters, yellow low-stock rows, and expired and expiring-soon badges.",
                "caption": "The inventory view surfaces low quantities and expiration status alongside storage locations and record actions.",
                "aspectRatio": "wide"
              }
            ]
          }
        }
      ],
      "eyebrow": "Stage 1 · Recipe Hub / EJS"
    },
    {
      "id": "recipe-hub-dashboard",
      "title": "An overview shaped by the current role",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "The home dashboard brings together total users, recipes and inventory items, an inventory value summary and a count of items expiring within seven days. For chefs, it also compares their personal recipe count with the overall catalogue.",
            "Registration captures account details and a chef, manager or admin role. Navigation and calls to action change with the current user: recipe management is chef-oriented, while inventory workflows are available across the roles. Visitors see login and registration entry points. This demonstrates role-dependent navigation, although the prototype account mechanism needs further work before public deployment."
          ]
        }
      ],
      "eyebrow": "Stage 1 · Recipe Hub / EJS"
    },
    {
      "id": "recipe-hub-validation",
      "title": "Turning form input into consistent records",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "I used Mongoose schemas to constrain required fields, identifier formats, enum choices and numeric values. Recipes require ingredients and instructions, positive preparation time and integer servings. Inventory constraints cover quantities, costs and the relationship between purchase and expiration dates.",
            "Controllers handle checks that depend on existing records, including duplicate emails and recipe titles. Ingredient and instruction input is split into arrays, trimmed and cleared of empty entries before saving. Owner recipe updates explicitly enable Mongoose update validators.",
            "One lesson was that defining a schema is only part of validation: each update path must apply it consistently. The inventory update path does not explicitly enable update validators, making that an important follow-up alongside more consistent error responses."
          ]
        }
      ],
      "eyebrow": "Stage 1 · Recipe Hub / EJS"
    },
    {
      "id": "recipe-hub-challenges",
      "title": "Lessons from the first implementation",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "These observations describe the earlier Recipe Hub codebase and identify follow-up work, rather than verified fixes in the Angular version.",
            "The account system is a prototype. Passwords are stored directly, and login relies on a database flag and a user ID passed in the URL. These do not establish a secure session or trustworthy identity. Before deployment, I would introduce password hashing, signed server-side sessions, shared authentication and authorisation middleware, and CSRF protection.",
            "Reporting also exposed the importance of sharing business rules. The dashboard totals the cost field, while the inventory value report multiplies quantity by cost. The inventory expiring-soon query has an upper date boundary but can include already-expired stock, whereas the dashboard bounds both ends of the date range. I would consolidate these calculations so every screen reports the same meaning.",
            "The next engineering step would be integration tests for ownership, validation and date boundaries, followed by consistent error handling, pagination and database indexes. The project has no dedicated automated test suite, and the recipe-creation error path does not render a response in every catch case. These remain improvements rather than completed features."
          ]
        }
      ],
      "eyebrow": "Stage 1 · Recipe Hub / EJS"
    },
    {
      "id": "cloudkitchen-motivation",
      "title": "Moving the interface into the browser",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "The technical goal was to move from whole-page server rendering to a frontend that owns navigation and calls backend services. Kitchen recipes and inventory provide a shared domain for comparing the two approaches."
          ]
        }
      ],
      "eyebrow": "Stage 2 · CloudKitchenPro / Angular"
    },
    {
      "id": "cloudkitchen-architecture",
      "title": "Angular services and an Express API",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "Angular routes map to standalone page components. Injectable services wrap HttpClient calls for authentication, home summaries, recipes and inventory. Express parses JSON, mounts the API routers and serves the compiled Angular browser build.",
            "Mongoose retains the recipe, inventory and user models found in the earlier application. This preserves domain concepts while changing how data reaches the interface."
          ]
        }
      ],
      "eyebrow": "Stage 2 · CloudKitchenPro / Angular"
    },
    {
      "id": "cloudkitchen-progression",
      "title": "Extending the same project",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "The second stage retains the kitchen-management domain and model structure while introducing TypeScript components, browser routing and JSON service responses. Instead of rendering complete EJS pages, the backend supplies data to an Angular interface.",
            "The PWA work adds a web manifest, icons and Angular service-worker configuration. It does not establish that authenticated API mutations work offline."
          ]
        }
      ],
      "eyebrow": "Stage 2 · CloudKitchenPro / Angular"
    },
    {
      "id": "cloudkitchen-challenges",
      "title": "Connecting identity and role-based views",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "Historical fixes address passing user identity to the server, relative API URLs and role defaults. These illustrate the integration work required when frontend and backend responsibilities move apart.",
            "The implementation uses browser-stored user information and request-supplied identity, and its password handling needs hardening before public use. Role-dependent screens should not be presented as proof of production-grade authorisation."
          ]
        }
      ],
      "eyebrow": "Stage 2 · CloudKitchenPro / Angular"
    },
    {
      "id": "outcome",
      "title": "Learning the stack through two implementations",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "Developing the same domain twice helped me understand where frontend and backend responsibilities sit. The EJS stage made the request-to-database-to-page lifecycle explicit; the Angular stage added client-side navigation and a service layer between the interface and Express APIs.",
            "The outcome is a practical exploration of MEAN fundamentals with recipe and inventory workflows. A straightforward interface supported that learning goal, while visual polish remained secondary. Authentication hardening and consistent business rules remain important work before public deployment.",
            "Recipe Hub has no dedicated automated test suite. CloudKitchenPro contains component test files and Jasmine/Karma configuration, but its test results have not been reproduced for this case study."
          ]
        }
      ]
    }
  ],
  "deploymentStatus": "Source code available",
  "team": [
    "Individual application development on supplied repository scaffolding"
  ],
  "coverImage": "/images/projects/recipe-hub/Recipes chef view.png",
  "heroGallery": {
    "layout": "full-width",
    "items": [
      {
        "type": "image",
        "src": "/images/projects/recipe-hub/Recipes chef view.png",
        "alt": "Recipe Hub chef recipe catalogue with search and meal, cuisine and difficulty filters, plus ownership-dependent row actions.",
        "caption": "Stage 1, Recipe Hub: the EJS-rendered recipe catalogue with filters and ownership-dependent actions.",
        "aspectRatio": "wide"
      }
    ]
  }
} satisfies Project;
