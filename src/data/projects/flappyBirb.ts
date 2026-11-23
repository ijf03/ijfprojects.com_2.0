import type { Project } from "../../types/project";

export const flappyBirb = {
  "slug": "flappy-birb",
  "title": "Flappy Birb",
  "tagline": "An SVG browser game driven by RxJS action streams, immutable state transitions and a replay ghost from the previous run.",
  "type": "Game Development / Functional Programming",
  "year": "2025",
  "featured": false,
  "shortDescription": "A TypeScript game exploring functional reactive programming through an immutable reducer, collision handling and a previous-run ghost replay.",
  "introduction": [
    "Flappy Birb is a browser game built around a simple challenge: guide a bird through scrolling pipe gaps using the Space key. Three lives, collision bounces and a replay of the previous attempt add room to recover and compare runs.",
    "I developed the gameplay in TypeScript using functional reactive programming. Keyboard input, animation frames and restart clicks become explicit actions, a pure reducer produces the next immutable state, and an SVG renderer turns that state into the visible game. My work builds on an existing TypeScript/Vite starter framework."
  ],
  "disciplines": [
    "Game Development",
    "Functional Programming"
  ],
  "roles": [
    "Developer"
  ],
  "team": [
    "Individual development project"
  ],
  "responsibilities": [
    "Implemented bird and pipe rendering and interactive game behaviour.",
    "Added collision detection, lives, bounce response and a collision cooldown.",
    "Recorded state snapshots and rendered a ghost of the previous run.",
    "Refined movement and restart behaviour around the RxJS state pipeline."
  ],
  "skills": [
    "Functional reactive programming",
    "Immutable state",
    "Reducers",
    "SVG rendering"
  ],
  "techStack": {
    "languages": [
      "TypeScript"
    ],
    "frontend": [
      "HTML",
      "CSS",
      "Vite"
    ],
    "integrations": [
      "RxJS"
    ],
    "gameCreative": [
      "SVG"
    ],
    "devops": [
      "Vitest"
    ]
  },
  "features": [
    "Space-key flight controls and frame-based movement",
    "CSV-scheduled obstacles and per-pipe scoring",
    "Three lives with collision cooldown and bounce response",
    "Restart after a run ends",
    "Previous-run ghost replay",
    "SVG rendering driven by state snapshots"
  ],
  "deploymentStatus": "Gameplay video and source code available",
  "links": [
    {
      "label": "View source on GitHub",
      "href": "https://github.com/ijf03/Flappy-Birb",
      "type": "github"
    }
  ],
  "sections": [
    {
      "id": "gameplay-video",
      "title": "See the game in motion",
      "blocks": [
        {
          "type": "youtube",
          "videoId": "1JtWV2EcgBk",
          "title": "Flappy Birb gameplay demonstration",
          "caption": "A short gameplay recording. Use the player controls to watch or expand it to full screen."
        }
      ]
    },
    {
      "id": "motivation",
      "title": "A game as a stream of state changes",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "The technical challenge was to coordinate movement, input, obstacles, collisions and replay without scattering mutable game variables across event handlers. Bird position, velocity, health, score, pipe state and replay history belong to a single model.",
            "I used this project to explore how functional techniques work in an interactive application. Each action transforms the current state into a new value, making the rules explicit and keeping rendering separate from the calculations."
          ]
        }
      ]
    },
    {
      "id": "process",
      "title": "From a lifecycle sketch to one state pipeline",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "My early concept broke the game into ready, playing and game-over phases. It helped identify what should initialise at the start of a run, what changes each frame and what must survive a restart.",
            "The final design centres those behaviours on FLAP, TICK and RESTART actions accumulated through one reducer. I chose to keep restart and ghost history in the same state pipeline, so a new run can reset the active simulation while retaining the previous trajectory.",
            "The design notes also considered separating the ghost into its own observable. That remains a possible refactor; the implemented version derives the replay from history stored in the main state."
          ]
        }
      ]
    },
    {
      "id": "state",
      "title": "Actions in, new state out",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "Animation frames provide time, Space-key events provide flap actions and mouse clicks provide restart actions. RxJS merge combines these inputs, and scan(reduceState, initial) accumulates the successive game states.",
            "Actions carry the information needed for their transition. TICK includes an elapsed-time delta and a deterministic pseudo-random sample. The reducer can calculate movement and collision responses without reading the clock or calling a global random generator itself.",
            "Readonly types describe the model, while object spreads and operations such as map, filter and concatenation construct updated values. DOM writes are concentrated in the rendering subscription, keeping the gameplay reducer independent of the page."
          ]
        }
      ]
    },
    {
      "id": "gameplay",
      "title": "Controlling time, pipes and scoring",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "Successive animation-frame timestamps produce bounded time steps. Limiting the elapsed delta prevents a delayed frame from creating a large jump in movement. Gravity changes vertical velocity, while a flap gives the bird an upward impulse.",
            "The level is data-driven: a CSV defines each pipe’s gap centre, gap height and appearance time. The schedule is loaded and parsed once, and each tick moves due entries into the active pipe list. Pipes scroll at a constant speed and are removed after leaving the screen.",
            "A passed flag records whether a pipe has already contributed to the score, preventing repeated points across consecutive frames. The game ends when health reaches zero or when the schedule is exhausted and the remaining pipes have moved off-screen."
          ]
        }
      ]
    },
    {
      "id": "collisions",
      "title": "Making collisions recoverable",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "Collision checks compare the bird with the screen boundaries and the solid regions around each pipe gap. A hit removes a life and applies a directional bounce: bottom contacts push upwards, while top contacts push downwards.",
            "Bounce magnitude uses a deterministic hash of the tick timestamp. Passing that sample into the reducer preserves reproducible state transitions while still varying the response.",
            "A short cooldown prevents one contact from consuming several lives over successive frames. Position and velocity bounds help the bird recover rather than remaining trapped outside the playable area. Together, these rules make the three-life system useful during play."
          ]
        }
      ]
    },
    {
      "id": "replay",
      "title": "Turning the previous attempt into a ghost",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "Each tick records a sample containing elapsed time and the bird’s vertical position. When the run ends, that trajectory becomes the ghost track. Restarting creates fresh gameplay state while preserving this previous attempt.",
            "During the next run, the renderer selects the ghost sample immediately before the current elapsed time and draws a translucent grey bird. The replay follows the new run’s clock without a second animation loop or separate timer.",
            "Keeping history as data makes the comparison a projection of recorded state. It also makes the trade-off explicit: samples are retained for the previous run, and replay logic remains coupled to the main state rather than a separate ghost stream."
          ]
        },
        {
          "type": "gallery",
          "gallery": {
            "layout": "full-width",
            "items": [
              {
                "type": "image",
                "src": "/images/projects/Flappy-birb/gameplay with ghost from previous game.png",
                "alt": "A yellow player bird and a translucent grey ghost from the previous run between green pipes.",
                "caption": "The grey ghost shows the previous attempt alongside the current bird.",
                "aspectRatio": "wide"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "testing",
      "title": "Verification and next improvements",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "The project includes a minimal Vitest check that state$ exists and is a function. It does not establish the correctness of physics, collision cooldowns, scoring or replay, and the gameplay recording is a demonstration rather than automated test evidence.",
            "The most useful next tests would exercise reducer transitions directly: a flap changes velocity, a hit removes one life during the cooldown window, a pipe scores once, and restarting preserves the previous trajectory while resetting the active run.",
            "The game can be packaged as a static browser application. Before deployment, its CSV and asset paths need verification, particularly when hosting under a subdirectory. No live playable deployment is claimed."
          ]
        }
      ]
    },
    {
      "id": "outcome",
      "title": "Functional programming with visible results",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "The finished implementation connects event streams, pure reducers, immutable updates and SVG rendering in a playable experience. The ghost replay shows how the same state model can support a feature beyond the immediate game loop.",
            "My contribution covers gameplay, collision and life handling, rendering, restart behaviour and replay. The existing starter framework and third-party RxJS library are separate foundations used by the implementation."
          ]
        }
      ]
    }
  ],
  "coverImage": "/images/projects/Flappy-birb/gameplay.png",
  "heroGallery": {
    "layout": "full-width",
    "items": [
      {
        "type": "image",
        "src": "/images/projects/Flappy-birb/gameplay.png",
        "alt": "Flappy Birb gameplay with a yellow bird between green pipes, one life remaining and a score of nine.",
        "caption": "The SVG playfield presents the bird, scrolling pipe gaps, remaining lives and score.",
        "aspectRatio": "wide"
      }
    ]
  }
} satisfies Project;
