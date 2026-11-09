import type { Project } from "../../types/project";

const imageRoot = "/images/projects/aussie-ecoguard";

export const aussieEcoGuard = {
  slug: "aussie-ecoguard",
  title: "Aussie EcoGuard",
  tagline:
    "A wildlife observation and lost-pet discovery platform powered by computer vision and multi-cloud services.",
  type: "Computer Vision and Multi-cloud Web Platform",
  year: "2026",
  completedDate: "November 2026",
  featured: true,
  status: "Completed",

  shortDescription:
    "Upload wildlife photos and videos, identify and organise animal sightings, search public observations, and receive alerts for matching animals.",

  introduction: [
    "Aussie EcoGuard Friends & Foes is an authenticated wildlife and lost-pet observation platform. Users can upload photos or short videos, review automatically detected animal species and counts, add descriptive tags, and build a searchable personal collection.",
    "Public sightings can help people search for a missing pet using an image, species, descriptive tags, or a date range. A conversational search assistant and optional email alerts make the same underlying data easier to explore and monitor.",
    "I developed the core local TypeScript backend and media-processing workflows, with an emphasis on reusable interfaces, data integrity, computer vision, search, and automated testing. The completed application combines those foundations with a React frontend and AWS, Google Cloud, and Firebase services integrated collaboratively.",
  ],

  disciplines: [
    "Backend Development",
    "Full-stack Development",
    "Computer Vision",
    "API Development",
    "Testing and Quality Assurance",
  ],
  roles: [
    "Backend Developer",
    "Full-stack Developer",
    "Computer Vision Integration",
    "Software Tester",
  ],
  responsibilities: [
    "Established initial frontend and backend project foundations",
    "Built a TypeScript HTTP backend and typed frontend API client",
    "Implemented image upload validation, original retrieval, and SHA-256 deduplication",
    "Persisted sighting metadata in SQLite and generated compressed, aspect-ratio-preserving thumbnails",
    "Integrated configurable YOLO inference, species counts, processing status, and explicit retry workflows",
    "Implemented species/count filtering, temporary-image queries, and public lost-pet searches",
    "Developed bulk tagging, deletion workflows, and video frame extraction and analysis",
    "Created automated backend and real-inference tests and verified core user workflows",
    "Reviewed the integrated cloud application and performed manual checks and debugging",
  ],

  client: "Aussie EcoGuard",
  duration: "Collaborative development and cloud integration",
  team: ["Two-person development team"],

  categories: [
    "Full-stack Development",
    "Computer Vision",
    "Machine Learning",
    "Cloud Architecture",
    "Wildlife and Lost-pet Technology",
  ],
  skills: [
    "TypeScript",
    "Node.js",
    "React",
    "REST APIs",
    "Computer Vision",
    "YOLO",
    "SQL",
    "Automated Testing",
    "Cloud Integration",
  ],
  techStack: {
    backend: ["Node.js", "AWS Lambda", "Amazon API Gateway"],
    languages: ["TypeScript", "SQL"],
    databases: ["SQLite (local)", "Google Cloud Firestore (deployed)"],
    frontend: ["React", "TypeScript", "Firebase Hosting"],
    integrations: [
      "YOLO11n ONNX",
      "Amazon Cognito",
      "Amazon S3",
      "Amazon SNS",
      "Dialogflow ES",
      "Workload Identity Federation",
    ],
  },

  features: [
    "Email-verified registration and sign-in; the app opens at authentication rather than a public homepage",
    "Private sightings collection and optional public visibility",
    "Photo and short-video uploads with validation and duplicate detection",
    "YOLO-based animal recognition, species counts, and processing status",
    "Compressed thumbnails and protected original-media retrieval",
    "Search by species, minimum counts, and manually added descriptive tags",
    "Temporary image matching without adding query images to the collection",
    "Lost-pet discovery across recent public sightings with optional date filters",
    "Bulk tagging and deletion of owned sightings",
    "Natural-language search through the EcoGuard assistant",
    "Optional watched-species and tag email alerts",
  ],


  coverImage: `${imageRoot}/collection.png`,
  heroGallery: {
    layout: "featured-grid",
    featuredIndex: 0,
    items: [
      {
        type: "image",
        src: `${imageRoot}/collection.png`,
        alt: "EcoGuard collection displaying an uploaded animal sighting and detected tag",
        caption: "Authenticated sightings collection",
        aspectRatio: "landscape",
      },
      {
        type: "image",
        src: `${imageRoot}/upload.jpeg`,
        alt: "EcoGuard photo and video upload form with visibility controls",
        caption: "Add a wildlife sighting",
        aspectRatio: "landscape",
      },
      {
        type: "image",
        src: `${imageRoot}/lost-pet.jpeg`,
        alt: "Lost-pet search form with pet photo, descriptive tags, and dates",
        caption: "Search for a lost pet",
        aspectRatio: "landscape",
      },
      {
        type: "image",
        src: `${imageRoot}/assistant.jpeg`,
        alt: "EcoGuard conversational animal search assistant",
        caption: "Natural-language search assistant",
        aspectRatio: "landscape",
      },
    ],
  },

  // Add the live URL using your portfolio's ProjectLink type if supported.
  // https://fit3184-g80-ecoguard-dg26.web.app
  links: [],

  sections: [
    {
      id: "project-context",
      number: "01",
      title: "Project context",
      details: [
        { label: "Audience", items: ["Wildlife observers", "Pet owners", "Authenticated community members"] },
        { label: "Scope", items: ["Media collection", "Animal detection", "Search and discovery", "Notifications"] },
      ],
      blocks: [
        {
          type: "text",
          paragraphs: [
            "Images and videos can capture useful wildlife observations, but isolated media files are difficult to organise or search. The goal was to turn observations into structured records that people could revisit, filter, and use when looking for missing pets.",
            "EcoGuard is authentication-first: visitors start with registration or sign-in, including email verification. There is no separate marketing homepage. Each account has its own collection, and only sightings marked public can appear in other users' searches.",
          ],
        },
        {
          type: "gallery",
          gallery: {
            layout: "two-column",
            items: [
              {
                type: "image",
                src: `${imageRoot}/register.jpeg`,
                alt: "EcoGuard registration page with email, name, and password fields",
                caption: "Registration is the entry point to the application",
                aspectRatio: "landscape",
              },
              {
                type: "image",
                src: `${imageRoot}/collection.png`,
                alt: "Personal sightings collection showing a processed animal image",
                caption: "Authenticated personal collection",
                aspectRatio: "landscape",
              },
            ],
          },
        },
      ],
    },
    {
      id: "media-pipeline",
      number: "02",
      title: "Building the media-processing pipeline",
      details: [
        { label: "Core technologies", items: ["TypeScript", "Node.js", "SQLite", "YOLO11n ONNX"] },
        { label: "Media types", items: ["JPEG / PNG / WebP", "MP4 / H.264"] },
      ],
      blocks: [
        {
          type: "text",
          paragraphs: [
            "I built the local processing foundation: validate uploads, persist media metadata, recognise repeat uploads using SHA-256 checksums, generate compressed thumbnails, and expose the original media through API workflows.",
            "The detection pipeline runs a configurable YOLO model and stores animal classes, counts, model information, and processing status. Failures remain visible and can be retried rather than silently disappearing. Keeping storage, database, and processing behind replaceable interfaces allowed local features to be tested before cloud integration.",
            "For video, the backend samples supported short clips at ten-second intervals and aggregates each species using the maximum count observed in any sampled frame. This is not a count of unique animals across the entire clip.",
          ],
        },
        {
          type: "gallery",
          gallery: {
            layout: "two-column",
            items: [
              {
                type: "image",
                src: `${imageRoot}/upload.jpeg`,
                alt: "Photo and video sighting upload interface",
                caption: "Media upload and privacy selection",
                aspectRatio: "landscape",
              },
              {
                type: "image",
                src: `${imageRoot}/collection.png`,
                alt: "Processed animal sighting with species tag and thumbnail",
                caption: "Stored observations and inference results",
                aspectRatio: "landscape",
              },
            ],
          },
        },
        {
          type: "list",
          title: "Media workflows I implemented",
          columns: 2,
          items: [
            "Upload validation and original retrieval",
            "SHA-256 checksum deduplication",
            "SQLite metadata persistence",
            "Aspect-ratio-preserving thumbnail generation",
            "Configurable YOLO detection",
            "Explicit failure and retry handling",
            "Ten-second video frame sampling",
            "Automated and real-inference tests",
          ],
        },
      ],
    },
    {
      id: "search-and-discovery",
      number: "03",
      title: "Searching sightings and finding lost pets",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "I implemented species and minimum-count search with logical AND matching, as well as manual tags for descriptions that the detection model cannot reliably identify, such as breed, colour, or collar details.",
            "Temporary-image search allows someone to upload a query image, run animal detection, and find matching records without creating a permanent collection item. Lost-pet search builds on this and restricts results to recent public observations within a selected date window.",
            "The frontend also offers a conversational assistant for searches such as finding dogs or possible missing-pet matches. Dialogflow ES and cloud Lambda fulfillment were integrated as part of the collaborative cloud implementation.",
          ],
        },
        {
          type: "gallery",
          gallery: {
            layout: "two-column",
            items: [
              {
                type: "image",
                src: `${imageRoot}/lost-pet.jpeg`,
                alt: "Lost-pet search with photo input, tags, and date filters",
                caption: "Find a lost pet using photos and descriptions",
                aspectRatio: "landscape",
              },
              {
                type: "image",
                src: `${imageRoot}/assistant.jpeg`,
                alt: "Conversational assistant for searching animal sightings",
                caption: "Conversational search over the sighting collection",
                aspectRatio: "landscape",
              },
            ],
          },
        },
      ],
    },
    {
      id: "cloud-architecture",
      number: "04",
      title: "From local services to a multi-cloud application",
      details: [
        { label: "Frontend", items: ["React", "TypeScript", "Firebase Hosting"] },
        { label: "AWS", items: ["Cognito", "API Gateway", "Lambda", "Private S3", "SNS"] },
        { label: "Google Cloud", items: ["Firestore", "Dialogflow ES", "Workload Identity Federation"] },
      ],
      blocks: [
        {
          type: "text",
          paragraphs: [
            "The deployed application connects a React frontend hosted on Firebase with AWS authentication, API handling, private object storage, event-driven processing, and email notifications. Google Cloud Firestore stores metadata, while Dialogflow supports natural-language queries.",
            "The cloud implementation uses owner-scoped objects, authentication checks, and short-lived signed media URLs. Workload identity federation allows AWS services to access Google Cloud without embedding permanent Google credentials.",
            "My main contribution was the local backend and its reusable media, search, and testing workflows. My teammate led the subsequent cloud integration, authentication, deployment, and recovery services. I also reviewed the integrated product and performed manual checks.",
          ],
        },
        {
          type: "gallery",
          gallery: {
            layout: "two-column",
            items: [
              {
                type: "image",
                src: `${imageRoot}/alerts.jpeg`,
                alt: "Email alert preferences for watched animal species and tags",
                caption: "Opt-in species and tag notifications",
                aspectRatio: "landscape",
              },
              {
                type: "image",
                src: `${imageRoot}/register.jpeg`,
                alt: "EcoGuard account registration interface",
                caption: "Authenticated account access",
                aspectRatio: "landscape",
              },
            ],
          },
        },
      ],
    },
    {
      id: "challenges",
      number: "05",
      title: "Engineering challenges and trade-offs",
      blocks: [
        {
          type: "list",
          columns: 1,
          items: [
            "Avoiding duplicate media records while preserving consistent metadata and storage references",
            "Separating processing failures from valid uploads and allowing safe retries",
            "Keeping temporary search images out of permanent collections",
            "Aggregating video detections without implying unique-animal tracking",
            "Applying ownership rules when public and private sightings share search workflows",
            "Accounting for model errors and for services spread across two cloud platforms",
          ],
        },
        {
          type: "callout",
          title: "A model prediction is not an identification",
          text: "One manually tested dog photo was incorrectly labelled as a sheep. This reinforced the importance of showing predicted labels as fallible outputs, preserving manual tags, and testing on representative real-world media.",
        },
      ],
    },
    {
      id: "outcome",
      number: "06",
      title: "Outcome and verification",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "The resulting platform supports account-based collections, uploads and processing, image and tag-driven searches, public lost-pet discovery, a conversational search interface, and optional email alerts.",
            "The latest recorded audit reported 32 passing local backend tests and six passing frontend tests, alongside successful backend TypeScript checks/build and frontend build/lint. Three external-runtime tests were skipped. Earlier real-inference and Firestore-emulator test results were documented separately but not rerun in that audit.",
            "Manual cloud testing confirmed account access, image upload, and a processed collection entry. Broader two-user authorisation, final deletion and notification delivery checks were still outstanding in the report; cloud availability depends on the supporting services remaining active.",
          ],
        },
        {
          type: "list",
          title: "What I took from this project",
          columns: 2,
          items: [
            "Designing backend modules that can be tested locally before cloud deployment",
            "Building robust workflows around imperfect computer-vision results",
            "Connecting media processing, database state, and API contracts",
            "Keeping privacy and ownership visible in search design",
            "Using automated tests to verify workflows and failure cases",
            "Collaborating across local development and cloud integration responsibilities",
          ],
        },
      ],
    },
  ],
} satisfies Project;
