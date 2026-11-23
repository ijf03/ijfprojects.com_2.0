import type { Project } from "../../types/project";

export const ticketToRide = {
  "slug": "ticket-to-ride",
  "title": "Ticket to Ride",
  "tagline": "A Java Swing strategy game with configurable maps, timed local play and traffic jams that change the cost of claiming routes.",
  "type": "Game Development / Desktop Software",
  "year": "2026",
  "featured": false,
  "shortDescription": "A Java Swing strategy game with configurable maps, timed local play and traffic jams that change the cost of claiming routes.",
  "introduction": [
    "This board-game-inspired desktop application combines card collection, route claiming and destination planning. Sprint 3 extends the original London game with three maps, support for up to five players, ferry routes, individual player clocks and a custom Traffic Jam mechanic.",
    "The original game was developed collaboratively. My earlier contributions covered setup, board presentation, final-round handling and graph-based scoring. My Sprint 3 work, documented in my design report, extends that foundation with new gameplay rules, focused validation classes and a more informative results screen."
  ],
  "disciplines": [
    "Game Development",
    "Object-Oriented Programming"
  ],
  "roles": [
    "Developer"
  ],
  "responsibilities": [
    "Implemented starting-card distribution and adapted setup to the London board.",
    "Built and refined board rendering, route positioning, card colours and player setup screens.",
    "Implemented final-score calculation, destination connectivity checks and a longest-continuous-path bonus.",
    "Added final-round behaviour and fixed selected-card state leaking between turns.",
    "Extended the game in Sprint 3 with configurable maps and player colours, ferry payments, player timers and a custom Traffic Jam mechanic.",
    "Separated route validation from turn progression, centralised deck creation and encapsulated player state changes.",
    "Added structured score breakdowns and refined timer updates to refresh only the active player’s time label."
  ],
  "skills": [
    "Game state management",
    "Graph traversal",
    "MVC",
    "UI validation",
    "Refactoring",
    "Single responsibility principle",
    "Configuration-driven design"
  ],
  "techStack": {
    "languages": [
      "Java"
    ],
    "gameCreative": [
      "Java Swing"
    ]
  },
  "features": [
    "Local pass-and-play for up to five players with selectable colours and three maps",
    "External text-based map configuration for locations, routes and destination tickets",
    "Face-up and blind bus-card draws with rainbow-card restrictions",
    "Ferry routes with rainbow-card requirements and three-card substitutions",
    "Temporary traffic jams that add one matching or rainbow card to adjacent route costs",
    "Individual countdown clocks with game-end handling when a player runs out of time",
    "Destination selection, route ownership feedback and player handover screens",
    "Final results with route points, ticket outcomes, longest-path bonuses and total scores"
  ],
  "links": [
    {
      "label": "View source on GitHub",
      "href": "https://github.com/ijf03/Ticket-to-ride",
      "type": "github"
    }
  ],
  "sections": [
    {
      "id": "motivation",
      "title": "Extending a shared game foundation",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "The challenge was to add interacting rules while keeping the game understandable for players and maintainable for developers. Ferry requirements, grey-route payments and traffic jam surcharges can all apply to the same claim.",
            "This is a board-game-inspired software project with its own implemented rules, rather than an official or licensed application."
          ]
        }
      ]
    },
    {
      "id": "architecture",
      "title": "Separating rules from turn flow",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "GameState holds the in-memory game state, GameService coordinates setup and GameController connects Swing events to model operations and view updates. In Sprint 3, RouteClaimValidator takes over claim validation from TurnManager, returning a RouteClaimResult with the result or a specific error message.",
            "TurnManager can then focus on turn progression and applying successful actions. Player methods manage changes to cards, buses and scores, while BusCardDeck owns deck construction. These changes reduce duplicated logic and direct manipulation of another class’s state.",
            "A single validator with focused helper methods accommodates overlapping route rules. Strategy, Factory Method, Observer and State patterns were considered in the report but were not fully implemented."
          ]
        }
      ]
    },
    {
      "id": "configuration",
      "title": "New maps without rewriting the board",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "MapConfigLoader reads external text files into GameMapConfig, including locations, coordinates, routes, ferry requirements and destination tickets. GameService uses the selected configuration to initialise the board and ticket deck.",
            "The Sprint 3 setup supports three maps and up to five players with selectable colours. Adding a map means supplying another correctly formatted file; malformed configuration can prevent a map from loading."
          ]
        },
        {
          "type": "gallery",
          "gallery": {
            "layout": "full-width",
            "items": [
              {
                "type": "image",
                "src": "/images/projects/ticket-to-ride/Starting game (game initialise, player chooses destination cards).png",
                "alt": "Initial destination ticket selection beside the London board, ferry symbols and four player information cards.",
                "caption": "The opening turn presents destination choices, starting cards and each player’s remaining time.",
                "aspectRatio": "wide"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "traffic-jams",
      "title": "Making each route claim affect the next move",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "Claiming a route temporarily congests adjacent unclaimed routes for the next player. Claiming an affected route costs one extra matching card or rainbow card; on a grey route, the extra card follows the chosen payment colour.",
            "GameState records the temporary jam, Route provides adjacency checks, RouteClaimValidator checks the surcharge and TurnManager clears the jam after the affected turn. Orange outlines, exclamation marks and status messages explain the extra cost.",
            "Traffic jams were chosen over random closures because they make disruption a consequence of player decisions while leaving routes available at an increased cost. Ferry rules also remain part of claim validation, including a three-card substitution for each missing required rainbow card."
          ]
        },
        {
          "type": "gallery",
          "gallery": {
            "layout": "full-width",
            "items": [
              {
                "type": "image",
                "src": "/images/projects/ticket-to-ride/extra card needed to claim traffic jam routes.png",
                "alt": "Selected pink cards and an orange-highlighted congested route with a message requiring one extra matching or rainbow card.",
                "caption": "A claim attempt explains the additional payment required for a congested route.",
                "aspectRatio": "wide"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "turns",
      "title": "Keeping local turns clear and responsive",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "A handover screen asks players to pass the device and confirm they are ready. Each Player stores their remaining time, PlayerTimerManager applies the countdown rules and GameController coordinates the Swing timer. Running out of time ends the game.",
            "Refreshing every player information card each second caused visible movement, especially with five players. Sprint 3 changes the timer refresh to update only the current player’s time label. Earlier turn-state fixes also clear selected cards between turns and disable actions after game-over."
          ]
        },
        {
          "type": "gallery",
          "gallery": {
            "layout": "full-width",
            "items": [
              {
                "type": "image",
                "src": "/images/projects/ticket-to-ride/Pass the device screen.png",
                "alt": "Player handover screen naming the next player and showing an I’m ready button.",
                "caption": "A dedicated handover screen makes the transition between local players explicit.",
                "aspectRatio": "wide"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "scoring",
      "title": "From graph traversal to an explainable result",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "FinalScoreManager checks destination connectivity using depth-first traversal over a player’s claimed routes. The longest-continuous-path search tracks used edges and backtracks to explore alternatives without reusing a route within one candidate path.",
            "Sprint 3 adds PlayerScoreBreakdown and DestinationTicketScoreLine to represent the scoring results separately from the interface. FinalResultsPanel displays route points, completed and incomplete tickets, longest-path length and bonus, and the final total for each player."
          ]
        },
        {
          "type": "gallery",
          "gallery": {
            "layout": "full-width",
            "items": [
              {
                "type": "image",
                "src": "/images/projects/ticket-to-ride/Results and score breakdown.png",
                "alt": "Final results table showing four players’ route scores, destination scores, longest paths, bonuses and individual ticket outcomes.",
                "caption": "The results screen makes both the overall ranking and individual destination-ticket outcomes visible.",
                "aspectRatio": "wide"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "outcome",
      "title": "A more extensible desktop game",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "The project combines object-oriented modelling, graph algorithms, event-driven interfaces and configuration-driven content. Sprint 3 shows how targeted refactoring can support new gameplay while improving feedback and keeping score calculation separate from presentation.",
            "Remaining improvements identified in the sprint report include splitting the large GameController, simplifying long UI methods and renaming the legacy LondonBoard class to reflect its broader role. The supplied report and screenshots document this iteration; an independent Java build and gameplay verification remain outstanding."
          ]
        }
      ]
    }
  ],
  "deploymentStatus": "Local desktop application",
  "team": [
    "Collaborative development project"
  ],
  "coverImage": "/images/projects/ticket-to-ride/bold color coded outlines for claimed routes.png",
  "heroGallery": {
    "layout": "full-width",
    "items": [
      {
        "type": "image",
        "src": "/images/projects/ticket-to-ride/bold color coded outlines for claimed routes.png",
        "alt": "London game board with player-coloured claimed routes, orange traffic jam warnings and four player clocks.",
        "caption": "Claimed routes use bold player colours; orange outlines and exclamation marks identify temporary traffic jams.",
        "aspectRatio": "wide"
      }
    ]
  }
} satisfies Project;
