import type { Project } from "../../types/project";

export const bookApp = {
  "slug": "book-app",
  "title": "Book App",
  "type": "iOS Development",
  "year": "2026",
  "featured": true,
  "disciplines": [
    "Mobile Development",
    "UI/UX Design",
    "Software Architecture"
  ],
  "techStack": {
    "languages": [
      "Swift"
    ],
    "mobile": [
      "SwiftUI",
      "WidgetKit",
      "Swift Charts",
      "UserNotifications"
    ],
    "databases": [
      "Cloud Firestore"
    ],
    "integrations": [
      "Firebase Authentication",
      "Open Library API"
    ],
    "devops": [
      "Xcode",
      "Swift Testing",
      "XCTest"
    ]
  },
  "links": [
    {
      "label": "View source on GitHub",
      "href": "https://github.com/ijf03/book-app",
      "type": "github"
    }
  ],
  "deploymentStatus": "Native iOS application",
  "team": [
    "Individual development project"
  ],
  "sections": [
    {
      "id": "motivation",
      "title": "Designing for the life of a reader",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "A bookshelf alone could tell me what I owned or had finished, but it did not explain how I was reading. I wanted to connect daily activity with longer-term goals: which months were most active, which authors I returned to and how reading habits changed over time.",
            "The core workflow follows that journey: discover a book, choose an edition, add it to a collection, record progress or a session, and reflect through notes, reviews and insights. These features share the same underlying records so readers do not have to enter the same information in multiple places."
          ]
        }
      ]
    },
    {
      "id": "process",
      "title": "Learning, building and revising",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "I began without Swift or iOS experience, using guided exercises to understand SwiftUI, navigation, persistence and Xcode before adapting those concepts to my own app. Features beyond the taught examples required independent research and experiments, particularly Firebase integration and the variety of statistics I wanted to display.",
            "Early development focused on making the basic workflows function. As the application grew, weekly reviews shifted my attention towards how people would discover features, interpret controls and move between screens. I also used the app myself to identify additions that would make it more useful as a reading companion.",
            "The expanding scope exposed dependencies between features. Later additions such as richer metadata, rereading and statistics required changes to how book information and reading progress were stored and accessed. That experience made planning shared data relationships an important part of the project, rather than treating each screen as an isolated feature."
          ]
        }
      ]
    },
    {
      "id": "design-iteration",
      "title": "Turning feedback into interface changes",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "Early feedback identified icon-only navigation and titles obscured by the iPhone’s Dynamic Island. I added text labels beneath navigation icons, adjusted title placement and checked layouts on different devices. Shared colour assets helped establish a consistent appearance as the interface developed.",
            "Custom collections were initially hidden behind an unclear icon. I moved them beneath the familiar To Read, Reading and Completed lists so users could discover them in context. I also replaced the earlier year controls with a picker for specific years.",
            "A later review highlighted missing book descriptions and unnecessary scrolling on the login screen. I condensed the login layout and added synopses, genres and other metadata to book details. It was a useful reminder that my own preference to avoid spoilers was not a reason to omit information other readers need.",
            "Feedback about break reminders prompted a different decision: I wanted reading sessions to remain uninterrupted, with a pause control available when needed. A possible gentle break cue remained an idea rather than a completed notification feature."
          ]
        },
        {
          "type": "gallery",
          "gallery": {
            "layout": "single",
            "items": [
              {
                "type": "image",
                "src": "/images/projects/bookapp/Library and custom lists.png",
                "alt": "Library showing standard reading lists followed by a custom Empyrean Series collection.",
                "caption": "Custom collections sit beneath the standard reading lists, making them easier to find.",
                "aspectRatio": "portrait"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "library-and-sessions",
      "title": "Tracking progress without losing reading history",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "Readers organise books into standard reading states and custom collections, then record progress in the unit appropriate to their format: pages, percentages or audiobook timestamps. Notes, spoiler settings, ratings and reviews stay attached to the relevant book.",
            "Timed sessions support starting, pausing, resuming and finishing. Active reading time excludes pauses, and completed sessions become part of the reader’s history. Daily check-ins can acknowledge a reading day without fabricating a timed session or page count.",
            "Read Again archives the previous reading cycle before resetting current progress. Sessions can belong to a particular cycle, so finishing the same book twice contributes two completions while preserving earlier sessions and completion history. Local reminders and a reading-streak widget provide additional ways to keep a reading habit visible."
          ]
        },
        {
          "type": "gallery",
          "gallery": {
            "layout": "single",
            "items": [
              {
                "type": "image",
                "src": "/images/projects/bookapp/Reading sessions.png",
                "alt": "Active reading session for Iron Flame with elapsed time, Pause Session and End Session controls.",
                "caption": "The session timer keeps pause and finish actions visible while reading.",
                "aspectRatio": "portrait"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "discovery",
      "title": "Helping readers find their next book",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "Find Books started as a title and author search. I extended it with discovery shelves based on the authors and genres most represented in books marked Reading or Completed. An Explore shelf gives readers with an empty library a starting point.",
            "Suggestions come from real Open Library searches using those preferences. Existing library books are excluded, and duplicate results are filtered across shelves. This is a rule-based discovery feature; suggestions are generated from reading history without an AI recommendation model.",
            "Selecting a result opens its details, including available descriptions, genres, first-publication information and community ratings. Optional metadata is handled explicitly so incomplete API records do not prevent someone from adding a book.",
            "Edition selection addresses a practical accuracy problem: different editions can have different page counts. Readers can choose an edition using its available ISBN, publisher, language, publication date and physical format. Estimated page counts are labelled as estimates instead of being presented as exact values."
          ]
        },
        {
          "type": "gallery",
          "gallery": {
            "layout": "single",
            "items": [
              {
                "type": "image",
                "src": "/images/projects/bookapp/Suggested reads based on genre and favorite author.png",
                "alt": "Find Books showing genre-based suggestions and a More by Ana Huang shelf.",
                "caption": "Discovery shelves use the reader’s existing authors and genres to search Open Library.",
                "aspectRatio": "portrait"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "networking",
      "title": "Managing slow requests and incomplete metadata",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "The discovery feature uses URLSession through the book repository and Swift concurrency for asynchronous requests. Loading, empty and recoverable error states keep the interface understandable when a request is slow or fails.",
            "Descriptions load when requested, while editions are fetched in pages of twenty. This avoids fetching detailed metadata for every search result. Task cancellation and account-generation checks prevent a late response from updating a screen or account that is no longer active.",
            "Metadata refreshes merge into the latest stored book instead of replacing the entire record, preserving progress, sessions, notes and reviews. Saved metadata remains available with the library record, while regenerated discovery suggestions stay in memory and are not uploaded to Firebase."
          ]
        }
      ]
    },
    {
      "id": "insights",
      "title": "Making statistics reflect recorded activity",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "Reading Insights uses Swift Charts to explore books, pages and active days over time, alongside genres, formats, languages, authors, fiction/non-fiction and rating distributions. Readers can select the current month, current year, all time, a particular year or a custom date range, then change metrics and comparisons.",
            "Accuracy mattered more than filling every chart. Reading time comes from completed sessions with pauses removed. Page totals use recorded page changes and deduplicate overlapping ranges. Missing information stays unrecorded instead of being inferred from unrelated values.",
            "Check-ins and completed sessions combine into active reading days, but each calendar day counts only once. Weekly, monthly and yearly goals can track books, pages or active days. Yearly book goals group completed covers by month and calculate the pace needed over the remaining months.",
            "Insights derive from the existing books, sessions, reviews, check-ins and goals rather than maintaining a second statistics database. Only source records synchronise to Firebase; each device recalculates its own totals. This keeps completions, rereads and goal progress connected to the same evidence."
          ]
        },
        {
          "type": "gallery",
          "gallery": {
            "layout": "single",
            "items": [
              {
                "type": "image",
                "src": "/images/projects/bookapp/Reading insights books finished.png",
                "alt": "Reading Insights showing monthly completion totals with book covers.",
                "caption": "Monthly completion history links the statistics back to individual books.",
                "aspectRatio": "portrait"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "architecture",
      "title": "Native views, replaceable services",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "AppContainer composes authentication, the book repository and cloud synchronisation services. SwiftUI feature views use observable stores and view models; DefaultBookRepository delegates remote discovery to an Open Library data source.",
            "Repository and service protocols allow tests to supply controlled implementations. AccountSession owns the active reader’s stores, while account changes invalidate the previous session and clear its widget state."
          ]
        }
      ]
    },
    {
      "id": "data-management",
      "title": "Saving locally and resolving cloud conflicts",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "The app first saves an edit locally, then synchronises it when connectivity is available. LocalSyncRepository maintains an atomic journal of confirmed records and pending mutations, with feature JSON files projected from that journal. Pending edits remain visible across app restarts rather than disappearing while the cloud catches up.",
            "Firebase Authentication identifies the active account, while Firestore stores its reading records. AccountSyncCoordinator and CloudSyncService manage listeners and uploads, using operation identifiers and record revisions to distinguish a local save from a confirmed cloud update.",
            "If two devices edit the same revision, the first accepted transaction becomes the cloud version. The rejected local edit is retained so the reader can restore it or choose the cloud version. Versioned deletion markers prevent an older offline edit from recreating a deleted record.",
            "Signing out removes listeners and invalidates the session so delayed callbacks cannot affect the next account. Pending edits can remain queued for their original account. Offline handling supports existing local reading data; authentication and new book searches still depend on their network services."
          ]
        }
      ]
    },
    {
      "id": "accessibility",
      "title": "Making controls usable beyond their appearance",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "An accessibility review exposed a concrete problem in the star rating control: VoiceOver could announce the rating, but its individual buttons were hidden, so users could not change it. I added an adjustable accessibility action with values and hints, keeping ratings within zero to five and read-only ratings non-adjustable.",
            "Dynamic Type changes the layout as well as the font size. Home rearranges horizontal content vertically, Library switches from a grid to a list, and session timers use scalable text and flexible containers. Heading traits, selected-state traits and progress values make structure and state available to VoiceOver.",
            "Charts include numerical summaries and an Activity as text alternative. Shared buttons have a minimum 44-point height, and the startup animation respects Reduce Motion. Adaptive colour assets support light and dark appearances.",
            "The documented contrast review found one secondary-text/background pair at 4.37:1. Adjusting the existing token raised that tested pair to 4.57:1. This was a targeted improvement supported by tests, rather than a claim that every screen had received a complete accessibility audit."
          ]
        },
        {
          "type": "gallery",
          "gallery": {
            "layout": "single",
            "items": [
              {
                "type": "image",
                "src": "/images/projects/bookapp/Accessibility friendly large text.png",
                "alt": "Home at a large accessibility text size with vertically stacked check-in actions.",
                "caption": "At larger text sizes, the layout expands and stacks controls instead of retaining fixed-height rows.",
                "aspectRatio": "portrait"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "testing",
      "title": "Testing the connected workflow",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "My manual testing plan covered three areas: the reading workflow; authentication, persistence and synchronisation; and failure recovery, navigation and layout. I recorded expected outcomes before testing with sample books and test accounts in Xcode simulators, including two simulators for cross-device checks.",
            "The submitted report records passes for search, library changes, format-aware progress, session timing, notes and reviews, goals and statistics. It also documents offline persistence after restart, synchronisation on reconnection, conflicting edits, account isolation, invalid inputs and network recovery.",
            "Automated tests use injected repositories and deterministic reading records. Coverage described in the portfolio includes date boundaries, paused time, repeated page ranges, streaks, goals, rereads, discovery filtering, request cancellation, account changes and metadata persistence. Swift Testing covers application behaviour, with a separate XCTest UI target.",
            "The later metadata extension reports a full Xcode run of 100 tests with zero failures. That is a documented development result, not a test run repeated for this website update. The same report explicitly leaves live verification of the updated Firestore rules and cross-device synchronisation of new metadata fields outstanding."
          ]
        }
      ]
    },
    {
      "id": "reflection",
      "title": "What I would carry into the next app",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "The biggest lesson was that understanding a framework demonstration is different from integrating it into an application with interacting features. Debugging required tracing how views, stored records, asynchronous requests and account state affected one another.",
            "I would plan feature dependencies and the data model earlier, seek feedback from unfamiliar users sooner and reserve more time for testing. A smaller initial scope would have reduced rework and given the core experience more time to mature.",
            "I used ChatGPT and Codex to assist with implementation, debugging, test development and documentation, then reviewed and tested the resulting changes. The app logo was AI-generated using my creative direction and feedback. The project demonstrates my design decisions, integration work and responsibility for the finished application, with no App Store release claimed."
          ]
        }
      ]
    }
  ],
  "tagline": "A native iOS reading companion that connects book discovery, personal libraries and reading habits through meaningful insights.",
  "shortDescription": "A SwiftUI reading tracker with edition-aware discovery, reading sessions, interactive insights and account-based Firebase synchronisation.",
  "duration": "Approximately six weeks of custom app development",
  "roles": [
    "iOS Developer",
    "UI/UX Designer"
  ],
  "introduction": [
    "I built Book App to bring together the tools I wanted as a reader: a personal library, flexible progress tracking, reading goals and a clearer picture of my habits. It supports physical books, ebooks and audiobooks, connecting discovery with the reading activity that follows.",
    "This was my first Swift and iOS development project. Over approximately six weeks of custom app development, I moved from learning SwiftUI and Xcode to designing and implementing a connected application with Open Library, Firebase and native Apple frameworks. Weekly feedback, hands-on use and testing shaped both the interface and the underlying data model."
  ],
  "responsibilities": [
    "Designed and implemented the SwiftUI interface, navigation, reusable components and adaptive light and dark appearances.",
    "Built library organisation, custom collections, format-aware progress, timed sessions, notes, reviews and rereading history.",
    "Integrated Open Library search, personalised discovery shelves, book descriptions and edition selection.",
    "Developed interactive reading insights, weekly/monthly/yearly goals, daily check-ins, reminders and a streak widget.",
    "Implemented Firebase Authentication, account-scoped persistence and live Firestore synchronisation with explicit conflict handling.",
    "Refined the app through weekly usability feedback, accessibility reviews, manual simulator testing and automated tests."
  ],
  "skills": [
    "SwiftUI interface design",
    "MVVM",
    "Repository pattern",
    "Dependency injection",
    "Swift concurrency",
    "API integration",
    "Local persistence",
    "Cloud synchronisation",
    "Data visualisation",
    "Accessibility",
    "Testing and debugging"
  ],
  "features": [
    "Open Library title/author search, personalised author and genre shelves, and an Explore shelf for new readers",
    "Book descriptions, community ratings and selectable editions with available ISBN, publisher, language and page-count details",
    "To Read, Reading and Completed library lists, filters, sorting and custom collections",
    "Progress recorded as pages, percentages or audiobook timestamps",
    "Reading sessions with start, pause, resume and finish actions that exclude paused time",
    "Book-specific notes, spoiler settings, ratings and reviews",
    "Read Again cycles that preserve previous completions and session history",
    "Interactive statistics across preset, yearly and custom date ranges",
    "Weekly, monthly and yearly goals for books, pages or active reading days",
    "Daily check-ins, reading streaks, local reminders and a WidgetKit streak widget",
    "Registration, sign-in, password reset and account-specific local/cloud data",
    "Visible sync states, queued offline edits and revision-based conflict recovery",
    "Dynamic Type layouts, adjustable VoiceOver ratings, chart text alternatives and Reduce Motion support"
  ],
  "coverImage": "/images/projects/bookapp/cover.png",
  "heroGallery": {
    "layout": "two-column",
    "items": [
      {
        "type": "image",
        "src": "/images/projects/bookapp/Homepage with streak checkin.png",
        "alt": "Book App Home showing a daily check-in, reading streak and currently reading books.",
        "caption": "Home connects daily check-ins with the books currently being read.",
        "aspectRatio": "portrait"
      },
      {
        "type": "image",
        "src": "/images/projects/bookapp/Reading Overview.png",
        "alt": "Stats and Goals showing a reading profile summary and yearly book goal progress.",
        "caption": "Reading goals and profile summaries derive from the reader’s recorded history.",
        "aspectRatio": "portrait"
      }
    ]
  }
} satisfies Project;
