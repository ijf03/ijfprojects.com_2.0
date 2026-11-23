import type { Project } from "../../types/project";

export const smartPark = {
  "slug": "smartpark",
  "title": "SmartPark",
  "tagline": "A computer-vision API that turns simulated car-park images into availability rankings and an operator dashboard.",
  "type": "Computer Vision / Backend Development",
  "year": "2026",
  "featured": true,
  "status": "Completed",
  "shortDescription": "A FastAPI and React parking prototype with YOLO integration, annotated images, bounded inference and a short-lived cache.",
  "introduction": [
    "SmartPark analyses simulated camera images to estimate occupied and empty parking spaces, rank car parks and display observations in an operator dashboard.",
    "I implemented the API, model integration, dashboard and local container workflow. The public repository supports a single-process local implementation; it does not substantiate the earlier portfolio's distributed-cloud or benchmark claims."
  ],
  "disciplines": [
    "Backend Development",
    "Computer Vision",
    "Frontend Development"
  ],
  "roles": [
    "Developer"
  ],
  "team": [
    "Individual application development"
  ],
  "responsibilities": [
    "Built FastAPI endpoints for car-park ranking, annotation and operator data.",
    "Integrated an existing YOLO model and converted detections into availability counts.",
    "Added worker-thread inference with a configurable capacity limiter and SHA-256 image caching.",
    "Implemented the React polling dashboard, structured logging and validation regression tests.",
    "Added a multi-stage Docker build with externally mounted model weights."
  ],
  "skills": [
    "Model integration",
    "Concurrency",
    "API design",
    "Automated testing"
  ],
  "techStack": {
    "languages": [
      "Python",
      "JavaScript"
    ],
    "backend": [
      "FastAPI"
    ],
    "frontend": [
      "React",
      "Vite"
    ],
    "machineLearning": [
      "PyTorch",
      "Ultralytics YOLO"
    ],
    "integrations": [
      "Pillow",
      "AnyIO"
    ],
    "devops": [
      "Docker",
      "Python unittest"
    ]
  },
  "features": [
    "Availability ranking from simulated camera images",
    "Annotated PNG images with occupied and empty-space boxes",
    "Operator APIs for observations and recent request activity",
    "Bounded worker-thread inference",
    "Short-lived SHA-256 cache with bounded capacity",
    "Polling dashboard with pause, refresh and failure feedback",
    "Structured JSON logs and request correlation",
    "Local Docker packaging with separate model storage"
  ],
  "coverImage": "/images/projects/SmartPark/hero.png",
  "heroGallery": {
    "layout": "full-width",
    "items": [
      {
        "type": "image",
        "src": "/images/projects/SmartPark/hero.png",
        "alt": "SmartPark local operations dashboard with observed parking availability",
        "caption": "Existing local-edition dashboard capture; values are a demonstration snapshot."
      }
    ]
  },
  "links": [
    {
      "label": "View source on GitHub",
      "href": "https://github.com/ijf03/smartpark",
      "type": "github"
    }
  ],
  "deploymentStatus": "Local application",
  "sections": [
    {
      "id": "project-context",
      "title": "From detections to an application",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "The prototype explores how parking detections can become useful API results. It samples simulated camera files rather than claiming an installed live-camera network.",
            "The model is an integrated dependency. No evidence reviewed here establishes that I trained the underlying model."
          ]
        }
      ]
    },
    {
      "id": "inference-pipeline",
      "title": "Analysing and ranking car parks",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "A search selects candidate car parks, acquires their simulated images, runs YOLO and derives availability and confidence. The annotation endpoint renders boxes on the same analysed image so its numeric result and visual explanation correspond.",
            "YOLOService loads the model once. The active source uses Ultralytics and a configured model path; the repository also contains model artefacts, but an ONNX-specific runtime is not claimed."
          ]
        }
      ]
    },
    {
      "id": "performance-engineering",
      "title": "Protecting the API event loop",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "InferenceService runs synchronous model work through AnyIO worker threads under a capacity limiter. Waiting requests do not each occupy an inference thread.",
            "The analysis cache hashes decoded image bytes and retains successful results for a configurable period with bounded eviction. This avoids repeat inference for identical images; it is not evidence of a measured production speed-up."
          ]
        }
      ]
    },
    {
      "id": "operations",
      "title": "Keeping observations distinct from measurements",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "The React dashboard polls operator endpoints and retains its last successful snapshot if a refresh fails. Unknown car-park observations remain distinct from zero availability.",
            "Observations, recent users and request history are held in process memory and reset on restart. Redis, shared state across replicas and Kubernetes infrastructure are not present in the inspected release."
          ]
        }
      ]
    },
    {
      "id": "testing",
      "title": "Validation and local packaging",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "The source includes unittest modules for annotations, caching, inference execution, logging and validation failures, plus a concurrency probe. These are separate from a measured load benchmark; no performance numbers are asserted here.",
            "Docker builds the dashboard and serves it with the Python API. Model weights are mounted externally, and the runtime uses a single worker. No model weights were downloaded or executed during the portfolio review."
          ]
        }
      ]
    },
    {
      "id": "outcome",
      "title": "Engineering around an existing model",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "SmartPark demonstrates the application work around computer vision: API contracts, error handling, concurrency limits, caching, operational feedback and container packaging.",
            "A cloud-hosted evolution would need deliberate shared-state, access-control and resource-budget decisions. A local recorded demo can show the verified implementation without maintaining an inference server."
          ]
        }
      ]
    }
  ]
} satisfies Project;
