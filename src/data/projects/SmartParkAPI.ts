import type { Project } from "../../types/project";

export const smartPark = {
  slug: "smartpark",
  title: "SmartPark",
  tagline:
    "A cloud-native computer-vision platform for analysing parking availability and scaling CPU-intensive inference across Kubernetes.",
  type: "Cloud-Native Computer Vision Platform",
  year: "2026",
  completedDate: "November 2026",
  featured: true,
  status: "Completed",

  shortDescription:
    "An end-to-end parking intelligence platform combining FastAPI, computer vision, Redis, Docker, Kubernetes, GCP, operational monitoring, and evidence-based performance testing.",

  introduction: [
    "SmartPark is a cloud-native platform that analyses simulated car-park camera images, calculates parking availability, and ranks the locations most likely to have open spaces. It also provides annotated detection images and an operator dashboard for monitoring car-park status, active users, and request activity.",
    "I designed, developed, deployed, and evaluated the complete software system. My work covered the API and computer-vision pipeline, concurrency control, caching, shared state, frontend monitoring, containerisation, Kubernetes infrastructure, cloud authentication, observability, security, load testing, performance analysis, and cost management.",
  ],

  disciplines: [
    "Cloud Engineering",
    "Backend Development",
    "DevOps",
    "Performance Engineering",
    "Machine Learning Integration",
  ],

  roles: [
    "Cloud Software Engineer",
    "Backend Developer",
    "DevOps Engineer",
    "Performance Engineer",
  ],

  responsibilities: [
    "Designed and developed the FastAPI backend, REST endpoints, validation, and error-handling strategy",
    "Integrated YOLO inference and converted detections into ranked parking-availability results",
    "Built simulated camera acquisition and annotated-image workflows",
    "Moved CPU-intensive inference away from FastAPI's event loop and introduced bounded concurrency",
    "Implemented SHA-256-based inference caching and Redis-backed shared state across replicas",
    "Created the React and Vite operator dashboard for live system visibility",
    "Containerised the frontend and backend using a multi-stage Docker build",
    "Provisioned and operated the application on Google Kubernetes Engine",
    "Configured model storage, Workload Identity, resource limits, health checks, readiness checks, and autoscaling",
    "Implemented structured logging and request correlation for operational troubleshooting",
    "Designed and executed Locust benchmarks across one, two, four, and eight API replicas",
    "Analysed latency, throughput, failure rates, CPU saturation, infrastructure behaviour, and cloud expenditure",
  ],

  client: "Independent cloud engineering project",
  duration: "2026",
  team: ["Independent end-to-end design, development, deployment, and testing"],

  categories: [
    "Cloud Engineering",
    "Computer Vision",
    "Backend Development",
    "DevOps",
    "Distributed Systems",
    "Performance Testing",
  ],

  skills: [
    "Python",
    "FastAPI",
    "Docker",
    "Kubernetes",
    "Google Cloud Platform",
    "Redis",
    "React",
    "Performance Testing",
  ],

  techStack: {
    languages: ["Python", "TypeScript"],
    backend: ["FastAPI"],
    machineLearning: ["PyTorch", "Ultralytics YOLO"],
    frontend: ["React", "Vite"],
    databases: ["Redis"],
    devops: ["Docker", "Kubernetes", "Google Kubernetes Engine", "Google Cloud Storage", "GCS Fuse", "Artifact Registry", "Workload Identity", "Locust"],
  },

  features: [
    "Parking-availability ranking from simulated camera images",
    "Annotated detection images with availability and confidence data",
    "Configurable inventory of simulated car parks",
    "Bounded worker-thread execution for CPU-intensive inference",
    "Short-lived SHA-256 inference cache with LRU-style eviction",
    "Redis-backed car-park status, active-user tracking, and request history",
    "React operations dashboard with automatic polling and failure recovery",
    "Structured application logs and request-ID correlation",
    "Separate liveness and dependency-aware readiness endpoints",
    "Multi-stage CPU-focused Docker image",
    "Kubernetes deployment with resource controls and horizontal scaling",
    "External, read-only model mounting through Cloud Storage",
    "Locust workloads with response-content validation",
  ],

  coverImage: "/images/projects/SmartPark/hero.png",

  heroGallery: {
    layout: "full-width",
    items: [
      {
        type: "image",
        src: "/images/projects/SmartPark/hero.png",
        alt: "SmartPark operations monitor showing observed available spaces, configured car parks, active users, and logged requests",
        caption: "The operations overview brings parking observations and current system activity into one dashboard.",
      },
    ],
  },

  // Add the repository and live deployment here when they become public.
  links: [],

  sections: [
    {
      id: "project-context",
      number: "01",
      title: "Project context",
      details: [
        {
          label: "Users",
          items: ["Drivers", "Platform operators"],
        },
        {
          label: "Scope",
          items: [
            "Cloud API",
            "Computer-vision pipeline",
            "Operations dashboard",
            "Kubernetes infrastructure",
          ],
        },
      ],
      blocks: [
        {
          type: "text",
          paragraphs: [
            "SmartPark addresses the time drivers lose while searching for parking. When a user requests nearby options, the platform analyses candidate car-park images, estimates the number of available spaces, and returns the strongest results instead of relying on manually entered availability data.",
            "The core engineering challenge was larger than image classification. The system needed to serve synchronous, CPU-intensive inference through an asynchronous API while remaining observable, deployable, and consistent across multiple cloud replicas.",
          ],
        },
        {
          type: "list",
          title: "Project goals",
          columns: 2,
          items: [
            "Convert camera images into useful parking-availability results",
            "Keep the API responsive during CPU-heavy inference",
            "Share operational state across application replicas",
            "Support container-based horizontal scaling",
            "Separate application and model release lifecycles",
            "Expose system health and operational activity",
            "Measure scaling behaviour under repeatable load",
            "Control cloud expenditure during development and benchmarking",
          ],
        },
      ],
    },
    {
      id: "inference-pipeline",
      number: "02",
      title: "Parking intelligence and API design",
      details: [
        {
          label: "Core workflow",
          items: [
            "Acquire images",
            "Run inference",
            "Calculate availability",
            "Rank car parks",
          ],
        },
      ],
      blocks: [
        {
          type: "text",
          paragraphs: [
            "I built the main search workflow around a modular FastAPI backend. A request selects multiple candidate car parks, retrieves a simulated camera image for each location, performs inference, converts the detections into availability and confidence values, updates the shared operational state, and returns the highest-ranked results.",
            "I also created an annotation endpoint that analyses a car-park image and returns a PNG containing labelled detection boxes. The visual response is generated from the same image used to calculate availability, ensuring the annotations and numeric result remain aligned.",
          ],
        },
        {
          type: "list",
          title: "Backend capabilities",
          columns: 2,
          items: [
            "Configurable simulated car-park inventory",
            "Camera image acquisition and base64 transport",
            "Availability and confidence calculation",
            "Candidate ranking and result validation",
            "Annotated PNG response generation",
            "Input validation and controlled error responses",
            "Operator-facing status APIs",
            "Request correlation through response headers",
          ],
        },
      ],
    },
    {
      id: "performance-engineering",
      number: "03",
      title: "Engineering for CPU-intensive inference",
      details: [
        {
          label: "Techniques",
          items: [
            "Worker-thread execution",
            "Bounded concurrency",
            "Inference caching",
            "Replica-based scaling",
          ],
        },
      ],
      blocks: [
        {
          type: "text",
          paragraphs: [
            "Inference is synchronous and CPU-intensive. Running it directly on FastAPI's event-loop thread would block lightweight requests while the model was working. I moved inference into AnyIO worker threads so the API could continue responding to health checks and other requests during analysis.",
            "I used a capacity limiter to bound active inference work rather than allowing unrestricted CPU-heavy tasks to compete for the same resources. I also implemented a per-replica cache keyed by the SHA-256 hash of decoded image bytes, with configurable expiry, bounded capacity, and LRU-style eviction. Successful repeated analyses could be reused, while failures were never cached.",
          ],
        },
        {
          type: "callout",
          title: "The key performance decision",
          text:
            "Worker-thread execution did not make inference itself faster. It protected FastAPI's event loop, while bounded concurrency, caching, resource limits, and additional replicas controlled how expensive work used the available CPU.",
        },
      ],
    },
    {
      id: "shared-state-and-operations",
      number: "04",
      title: "Shared state and operator visibility",
      details: [
        {
          label: "Shared data",
          items: [
            "Car-park observations",
            "Recent users",
            "Request history",
          ],
        },
        {
          label: "Interface",
          items: ["React", "Vite", "Responsive dashboard"],
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
                src: "/images/projects/SmartPark/carpark spaces available.png",
                alt: "SmartPark availability grid showing ten analysed car parks with available-space counts, confidence values, search, and sorting controls",
                caption: "Car-park observations show available spaces and detection confidence, with search, sorting, and grid or table views.",
              },
              {
                type: "image",
                src: "/images/projects/SmartPark/Smartpark website.png",
                alt: "Full SmartPark dashboard before camera analysis, with ten unanalysed car parks and an empty request-activity list",
                caption: "The complete dashboard in its initial state: unknown availability remains distinct from zero available spaces.",
                aspectRatio: "portrait",
              },
            ],
          },
        },
        {
          type: "text",
          paragraphs: [
            "Local Python memory was suitable for one process but could not provide a consistent view once the API scaled across multiple pods. I integrated Redis so every replica could access the same car-park observations, recent user activity, and operational request history.",
            "Recent-user tracking uses a 30-second activity window and Redis server time to avoid relying on potentially different clocks across pods. I also built a responsive React dashboard that polls the operator APIs without reloading the page, supports search and availability sorting, prevents overlapping refreshes, and preserves the last successful snapshot when an update fails.",
          ],
        },
        {
          type: "list",
          title: "Operational features",
          columns: 2,
          items: [
            "Shared car-park status across API replicas",
            "Distinct recently active-user count",
            "Bounded request history",
            "Dashboard search and availability sorting",
            "Automatic, manual, and paused refresh modes",
            "Timeout and connection-warning states",
            "Health and readiness visibility",
            "Request-level troubleshooting information",
          ],
        },
      ],
    },
    {
      id: "cloud-architecture",
      number: "05",
      title: "Containerisation and cloud architecture",
      details: [
        {
          label: "Platform",
          items: ["Docker", "Kubernetes", "GKE", "Redis"],
        },
        {
          label: "Cloud services",
          items: [
            "Artifact Registry",
            "Cloud Storage",
            "GCS Fuse",
            "Workload Identity",
          ],
        },
      ],
      blocks: [
        {
          type: "text",
          paragraphs: [
            "I packaged the React frontend and FastAPI backend with a multi-stage Docker build and deployed the service to Google Kubernetes Engine. The runtime image uses CPU-compatible dependencies, runs as a non-root user, and keeps frontend build tooling out of the final application stage.",
            "The application image and model artefact have separate lifecycles. The model is stored privately in Cloud Storage and mounted read-only into each pod through GCS Fuse. Workload Identity grants the Kubernetes workload access without embedding a long-lived cloud key in the repository or image.",
          ],
        },
        {
          type: "list",
          title: "Infrastructure I implemented",
          columns: 2,
          items: [
            "FastAPI deployment and public LoadBalancer service",
            "Internal Redis service with persistent storage",
            "CPU and memory requests and limits",
            "Liveness and readiness probes",
            "Horizontal Pod Autoscaler configuration",
            "Cluster node autoscaling",
            "Read-only external model mount",
            "Digest-based container deployment",
            "Non-root containers and restricted privileges",
            "Automated provisioning and deployment workflows",
          ],
        },
      ],
    },
    {
      id: "observability",
      number: "06",
      title: "Observability, reliability, and security",
      blocks: [
        {
          type: "gallery",
          gallery: {
            layout: "full-width",
            items: [
              {
                type: "image",
                src: "/images/projects/SmartPark/request activity.png",
                alt: "SmartPark request-activity panel listing the latest ten find-carparks API calls with demo user identifiers and local timestamps",
                caption: "Recent API requests appear in the activity feed with user identifiers, endpoints, and local timestamps.",
              },
            ],
          },
        },
        {
          type: "text",
          paragraphs: [
            "I implemented structured JSON logging with timestamps, severity, service name, request IDs, user identifiers, HTTP context, duration, status, and exception information. Each HTTP response includes its request ID so a client-visible failure can be correlated with the exact server-side event in container logs.",
            "Liveness and readiness are deliberately separate. The health endpoint reports whether the process is alive, while readiness checks whether required dependencies such as Redis are available. This allows Kubernetes to stop routing traffic to an unready pod without treating every dependency interruption as a crashed process.",
          ],
        },
        {
          type: "list",
          title: "Reliability and security controls",
          columns: 2,
          items: [
            "Structured application and inference events",
            "Request-ID response headers",
            "Client-safe errors with server-side diagnostics",
            "Dependency-aware readiness checks",
            "Controlled failures for camera, image, and inference errors",
            "Non-root execution",
            "Disabled privilege escalation",
            "Dropped Linux capabilities",
            "Runtime-default seccomp profile",
            "Private internal Redis networking",
          ],
        },
      ],
    },
    {
      id: "benchmarking",
      number: "07",
      title: "Load testing and scaling analysis",
      details: [
        {
          label: "Experiment",
          items: ["1, 2, 4, and 8 pods", "1, 5, 10, and 20 users"],
        },
        {
          label: "Measurements",
          items: ["Mean latency", "p95", "RPS", "Failures", "CPU"],
        },
      ],
      blocks: [
        {
          type: "text",
          paragraphs: [
            "I created a Locust workload that generated stable user identities, repeatedly called the core search endpoint, and validated response content rather than treating every HTTP 200 response as correct. I ran two three-minute trials for every combination of one, two, four, and eight API replicas with one, five, ten, and twenty concurrent users.",
            "The results showed that horizontal scaling was most valuable under high concurrency. At twenty users, the single-pod deployment recorded mean latencies above 57 seconds and failure rates of 84.62% and 90.48%. Four- and eight-pod deployments completed the same highest-load test with zero failures in both trials.",
          ],
        },
        {
          type: "list",
          title: "Measured outcomes",
          columns: 2,
          items: [
            "Four pods: 24.038s and 27.255s mean latency at 20 users",
            "Eight pods: 18.182s and 15.009s mean latency at 20 users",
            "Four and eight pods: 0% failures at 20 users in both trials",
            "One pod: 84.62% and 90.48% failures at 20 users",
            "CPU-heavy inference and queueing identified as the main bottlenecks",
            "Non-linear scaling observed at lighter workloads",
          ],
        },
        {
          type: "callout",
          title: "Evidence instead of a scalability claim",
          text:
            "The benchmark demonstrated that four- and eight-replica configurations handled the highest tested load of 20 concurrent users without failures in both trials. It did not establish 20 users as the platform's maximum capacity or suggest that scaling was linear.",
        },
      ],
    },
    {
      id: "trade-offs",
      number: "08",
      title: "Engineering trade-offs and future improvements",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "The project was designed as a complete cloud prototype, and the evaluation exposed several valuable trade-offs. Candidate images within one search request are analysed sequentially, so horizontal scaling primarily improves throughput across concurrent requests rather than reducing every individual request's latency.",
            "Caching is local to each API pod, which can reduce cache locality as replicas increase. The Redis deployment provides shared state but remains a single-instance dependency. A production evolution would also require a broader authentication, rate-limiting, and TLS strategy.",
          ],
        },
        {
          type: "list",
          title: "What I would improve next",
          columns: 2,
          items: [
            "Introduce explicit admission control and bounded request queueing",
            "Benchmark controlled parallel candidate processing",
            "Evaluate model optimisation and alternative inference runtimes",
            "Compare CPU and economically justified GPU deployments",
            "Investigate distributed caching",
            "Replace single-instance Redis with a managed high-availability service",
            "Expand benchmark ranges and define latency targets",
            "Add production authentication, rate limiting, and TLS termination",
          ],
        },
      ],
    },
    {
      id: "outcome",
      number: "09",
      title: "Outcome",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "SmartPark became a complete cloud-native inference platform rather than a standalone computer-vision script. I took it through architecture, implementation, containerisation, cloud deployment, operations, benchmarking, analysis, and cost control.",
            "The project strengthened my ability to reason about the systems surrounding machine learning: concurrency, shared state, resource limits, observability, security, scaling, reliability, and evidence-based performance decisions.",
          ],
        },
        {
          type: "list",
          title: "Delivered outcomes",
          columns: 2,
          items: [
            "Cloud-hosted FastAPI computer-vision service",
            "React operator dashboard",
            "Shared Redis state across API replicas",
            "Secure external model mounting",
            "Container and Kubernetes deployment automation",
            "Structured logging and dependency-aware probes",
            "Repeatable Locust benchmark suite",
            "Zero failures at 20 users with four and eight pods across both trials",
            "$10.85 total cloud expenditure during development and benchmarking",
            "Documented performance limitations and next steps",
          ],
        },
      ],
    },
  ],
} satisfies Project;
