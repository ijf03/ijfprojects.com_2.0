import type { Project } from "../../types/project";

export const nutricoach = {
  slug: "nutricoach",
  title: "NutriTrack: NutriCoach",
  tagline:
    "A personalised Android nutrition platform combining health insights, live fruit information, and AI-generated coaching.",
  type: "Personalised Android Nutrition Platform",
  year: "2025",
  completedDate: "June 2025",
  featured: true,
  status: "Completed",

  shortDescription:
    "A Kotlin Android application that turns nutrition data into personalised insights, fruit guidance, saved coaching tips, and clinician-facing analytics.",

  introduction: [
    "NutriTrack: NutriCoach is an Android application designed to help users understand their nutrition data and receive guidance based on their individual food-intake results. It combines personal health scores, an external fruit-information service, and generative AI within one mobile experience.",
    "I designed and developed the complete application, including its Jetpack Compose interface, multi-user authentication, Room database, MVVM architecture, API integrations, personalised coaching logic, and clinician analytics tools.",
  ],

  disciplines: [
    "Mobile App Development",
    "UI/UX Design",
    "Data Architecture",
    "API Integration",
  ],

  roles: [
    "Android Developer",
    "UI/UX Designer",
    "Mobile Application Architect",
  ],

  responsibilities: [
    "Designed and developed the complete Android application using Kotlin and Jetpack Compose",
    "Created the user journeys for account claiming, login, nutrition insights, coaching, settings, and clinician access",
    "Structured the application around MVVM with repositories, ViewModels, and reactive UI state",
    "Migrated user and food-intake data into a relational Room database",
    "Integrated FruityVice, Gemini, and Picsum Photos to provide live and personalised content",
    "Developed conditional coaching experiences based on each user's fruit score",
    "Implemented saved AI-tip history and clinician-facing nutrition analytics",
    "Tested and refined navigation, validation, data persistence, API states, and screen behaviour",
  ],

  client: "Independent project",
  duration: "First half of 2025",
  team: ["Independent design and development"],

  categories: [
    "Android Development",
    "Mobile UI/UX",
    "Health Technology",
    "Generative AI",
    "Data Visualisation",
  ],

    techStack: [
    "Kotlin",
    "Jetpack Compose",
    "Material 3",
    "Room",
    "Retrofit",
    "Kotlin Coroutines",
    "Gemini API",
    "FruityVice API",
  ],

  features: [
    "Multi-user account claiming, login, and persistent sessions",
    "Personal nutrition scores and food-intake insights",
    "Conditional coaching based on the user's fruit score",
    "Live fruit search with nutritional facts",
    "Random fruit facts and remotely loaded imagery",
    "AI-generated tips personalised with user nutrition data",
    "Saved coaching-tip history",
    "Clinician authentication and analytics dashboard",
    "AI-assisted pattern analysis across nutrition data",
    "Room database with MVVM-based data access",
  ],

  coverImage:
    "/images/projects/nutricoach/nutricoach-fruit-search.png",

  heroGallery: {
    layout: "three-column",
    items: [
      {
        type: "image",
        src: "/images/projects/nutricoach/nutricoach-fruit-search.png",
        alt: "NutriCoach fruit search and personalised motivational tip screen",
        caption: "Fruit search and personalised coaching",
        aspectRatio: "portrait",
      },
      {
        type: "image",
        src: "/images/projects/nutricoach/nutricoach-optimal-score.jpg",
        alt: "NutriCoach optimal fruit score experience with an image and random fact",
        caption: "Conditional experience for an optimal fruit score",
        aspectRatio: "portrait",
      },
      {
        type: "image",
        src: "/images/projects/nutricoach/clinician-dashboard.png",
        alt: "NutriTrack clinician dashboard with average nutrition scores and AI-generated patterns",
        caption: "Clinician analytics and data patterns",
        aspectRatio: "portrait",
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
          items: ["Individuals", "Clinicians"],
        },
        {
          label: "Scope",
          items: [
            "Android application",
            "Personal nutrition insights",
            "AI-assisted coaching",
            "Clinician analytics",
          ],
        },
      ],
      blocks: [
        {
          type: "text",
          paragraphs: [
            "Nutrition scores can be difficult to interpret when they are presented as isolated numbers. The application needed to turn detailed food-intake data into an experience that helped users understand where they could improve and gave them a practical next step.",
            "The product also needed a separate clinician experience. While individual users required personal guidance, clinicians needed an overview of broader nutrition patterns without disrupting the currently signed-in user's session.",
          ],
        },
        {
          type: "list",
          title: "Project goals",
          columns: 2,
          items: [
            "Present personal nutrition data clearly",
            "Keep user accounts and sessions persistent",
            "Adapt coaching to each user's results",
            "Combine local data with live external services",
            "Store generated advice for later review",
            "Provide a separate clinician analytics experience",
            "Keep data access consistent through MVVM",
            "Create a clear and cohesive mobile interface",
          ],
        },
      ],
    },
    {
      id: "personalised-experience",
      number: "02",
      title: "Designing a personalised experience",
      details: [
        {
          label: "Personalisation",
          items: [
            "Nutrition scores",
            "Food-intake responses",
            "Conditional fruit guidance",
          ],
        },
      ],
      blocks: [
        {
          type: "text",
          paragraphs: [
            "The main design challenge was that the same screen could not be equally useful for every user. NutriCoach evaluates the signed-in user's fruit score and changes the experience according to their result.",
            "Users with a lower fruit score receive an explanation, fruit search, nutritional data, and targeted encouragement. Users with an optimal score receive a lighter experience with remotely loaded imagery and a random fruit fact, while still retaining access to personalised motivational tips.",
          ],
        },
      ],
    },
    {
      id: "ui-ux-design",
      number: "03",
      title: "Mobile UI/UX design",
      details: [
        {
          label: "Design focus",
          items: [
            "Clear hierarchy",
            "Contextual feedback",
            "Consistent navigation",
            "Readable health information",
          ],
        },
      ],
      blocks: [
        {
          type: "text",
          paragraphs: [
            "I designed the application as a connected set of user and clinician journeys rather than a collection of separate screens. A consistent bottom navigation system gives users direct access to their home, insights, NutriCoach, and settings areas.",
            "The visual hierarchy prioritises the user's current result, the action available to them, and the response produced by that action. Cards, labelled inputs, clear buttons, and separated content groups keep nutrition data and generated advice readable on a mobile screen.",
          ],
        },
        {
          type: "list",
          title: "Interfaces I designed and developed",
          columns: 2,
          items: [
            "Account claim and login screens",
            "Personal nutrition dashboard",
            "Food-intake insights",
            "NutriCoach fruit search",
            "AI coaching and tip history",
            "User settings and logout",
            "Clinician authentication",
            "Clinician analytics dashboard",
          ],
        },
      ],
    },
    {
      id: "ai-and-api-integration",
      number: "04",
      title: "AI coaching and live fruit information",
      details: [
        {
          label: "External services",
          items: ["Gemini", "FruityVice", "Picsum Photos"],
        },
      ],
      blocks: [
        {
          type: "text",
          paragraphs: [
            "FruityVice supplies live nutritional information for searched fruits, while Picsum Photos provides remote imagery for the optimal-score experience. Retrofit, Gson, coroutines, and Coil handle asynchronous requests, response conversion, and image loading.",
            "Gemini generates coaching that uses the current user's nutrition scores and food-intake data as context. Each response is saved to the NutriCoachTips table, allowing users to reopen their previous advice through a tip-history dialog instead of losing it when the screen changes.",
          ],
        },
        {
          type: "callout",
          title: "Designing AI as part of the product",
          text:
            "The generated response is connected to real application data, presented within a defined interface, and stored for later use. This makes AI one part of a complete user workflow rather than an isolated text-generation feature.",
        },
      ],
    },
    {
      id: "architecture",
      number: "05",
      title: "Data architecture and application development",
      details: [
        {
          label: "Application",
          items: ["Kotlin", "Jetpack Compose", "Material 3"],
        },
        {
          label: "Data and networking",
          items: ["Room", "MVVM", "Retrofit", "Coroutines"],
        },
      ],
      blocks: [
        {
          type: "text",
          paragraphs: [
            "The application follows an MVVM structure so UI components do not access storage or network services directly. Repositories coordinate Room and API operations, ViewModels expose screen state, and reactive data updates keep the Compose interface synchronised with persisted information.",
            "Initial user records are imported into Room once, after which the database becomes the application's source of truth. Relational data connects users with their food-intake responses and saved coaching tips, supporting multiple accounts while keeping each user's information separate.",
          ],
        },
        {
          type: "list",
          title: "Technical implementation",
          columns: 2,
          items: [
            "Multi-user account claiming and authentication",
            "Persistent signed-in sessions",
            "Relational Room entities and data access objects",
            "Repository and ViewModel data flow",
            "Reactive UI updates with LiveData",
            "Asynchronous Retrofit network requests",
            "API loading, success, and error handling",
            "Navigation between user and clinician flows",
          ],
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
            "Changing the NutriCoach interface according to the signed-in user's nutrition score",
            "Combining persisted user data, live fruit information, remote images, and generated responses on one screen",
            "Keeping data isolated correctly across multiple user accounts",
            "Maintaining reactive UI state across Room operations and asynchronous API calls",
            "Converting dense nutrition results and generated analysis into readable mobile layouts",
            "Providing clinician access without replacing the active user's session",
          ],
        },
        {
          type: "text",
          paragraphs: [
            "I addressed these challenges through clear state-driven UI branches, a repository-based data layer, coroutine-backed network calls, reusable Compose components, and repeated testing of authentication, navigation, persistence, and API response states.",
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
            "The completed application brings nutrition tracking, personalised guidance, persistent data, and clinician analytics into one Android product. Users can review their results, receive coaching relevant to their own data, explore live fruit information, and return to advice generated during earlier sessions.",
            "For me, the project brought together mobile interface design, relational data modelling, reactive architecture, asynchronous networking, and generative AI. It strengthened my ability to design a feature from the user experience through to its underlying data and application logic.",
          ],
        },
        {
          type: "list",
          title: "Delivered outcomes",
          columns: 2,
          items: [
            "Complete Kotlin and Compose Android application",
            "Persistent multi-user data and sessions",
            "Personalised, score-based NutriCoach experience",
            "Live fruit facts and nutritional information",
            "Context-aware AI coaching with saved history",
            "Separate clinician authentication and analytics",
            "AI-generated patterns across nutrition data",
            "Consistent MVVM data flow across the product",
          ],
        },
      ],
    },
  ],
} satisfies Project;
