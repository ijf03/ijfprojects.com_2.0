import type { Project } from "../../types/project";

export const cifar10 = {
  slug: "cifar10-image-classifier",
  title: "CIFAR-10 Image Classifier",
  tagline:
    "An end-to-end computer vision project that trains a CNN with PyTorch and runs the exported model directly in the browser.",
  type: "Computer Vision and Browser Inference Application",
  year: "2026",
  completedDate: "September 2026",
  featured: true,
  status: "Completed",

  shortDescription:
    "A CPU-trained PyTorch image classifier with reproducible Nix tooling, ONNX export, and a React interface for client-side predictions.",

  introduction: [
    "The CIFAR-10 Image Classifier is an end-to-end machine learning project that explores how a convolutional neural network learns to recognise small colour images. The model is trained and evaluated on the full CIFAR-10 dataset, which contains ten categories ranging from animals to vehicles.",
    "I developed the training pipeline, experimented with model and optimisation choices, exported the trained network to ONNX, and built a responsive React interface that runs inference locally in the user's browser without a Python backend.",
  ],

  disciplines: [
    "Machine Learning",
    "Computer Vision",
    "Frontend Development",
    "UI/UX Design",
  ],

  roles: [
    "Machine Learning Developer",
    "Frontend Developer",
    "UI/UX Designer",
  ],

  responsibilities: [
    "Built and trained a convolutional neural network using PyTorch and the CIFAR-10 dataset",
    "Created a reproducible CPU-only development environment using Nix",
    "Designed controlled experiments around dataset size, epochs, learning rate, model capacity, preprocessing, and optimisation",
    "Added batch normalisation, data augmentation, AdamW, weight decay, and cosine learning-rate scheduling",
    "Evaluated the trained model on the complete CIFAR-10 test set and saved a reusable checkpoint",
    "Exported the trained PyTorch model to a self-contained ONNX file",
    "Implemented image preprocessing and browser inference with ONNX Runtime Web",
    "Designed and developed the responsive React and TypeScript demonstration interface",
    "Tested model loading, image uploads, predictions, confidence output, and error states",
  ],

  client: "Independent project",
  duration: "September 4-10, 2026",
  team: ["Independent design and development"],

  categories: [
    "Machine Learning",
    "Computer Vision",
    "Web Application",
    "Model Deployment",
    "Technical Experimentation",
  ],

  skills: [
    "Machine Learning",
    "PyTorch",
    "Computer Vision",
    "React",
    "TypeScript",
    "Model Deployment",
    "Experimentation",
    "Nix",
  ],

  techStack: [
    "Python",
    "PyTorch",
    "Torchvision",
    "ONNX",
    "ONNX Runtime Web",
    "React",
    "TypeScript",
    "Vite",
    "Nix",
    "Node.js",
    "HTML",
    "CSS",
    "Vercel",
  ],

  features: [
    "CNN training on all 50,000 CIFAR-10 training images",
    "Evaluation using all 10,000 CIFAR-10 test images",
    "Balanced ten-class image classification",
    "Training-only random crop and horizontal-flip augmentation",
    "CIFAR-10-specific image normalisation",
    "Saved PyTorch checkpoint with model and preprocessing metadata",
    "Self-contained ONNX model export",
    "Client-side inference with no Python backend",
    "Image upload, centre cropping, resizing, and tensor conversion",
    "Top prediction and three-class confidence breakdown",
    "Responsive interface with loading and error feedback",
    "Reproducible CPU-only Nix environment",
  ],

  coverImage: "/images/projects/cifar10/car.png",

  heroGallery: {
    layout: "featured-grid",
    featuredIndex: 0,
    items: [
      {
        type: "image",
        src: "/images/projects/cifar10/car.png",
        alt: "CIFAR-10 classifier showing an uploaded orange car, an automobile prediction, and the top three class scores",
        caption: "Browser inference with an automobile prediction",
        aspectRatio: "landscape",
      },
      {
        type: "image",
        src: "/images/projects/cifar10/cat.png",
        alt: "CIFAR-10 classifier predicting cat from an uploaded tabby photo, with bird and frog as lower-scoring alternatives",
        caption: "A cat prediction with competing class scores",
        aspectRatio: "landscape",
      },
      {
        type: "image",
        src: "/images/projects/cifar10/dog.png",
        alt: "CIFAR-10 classifier predicting dog from an uploaded pug photo and displaying the top three class scores",
        caption: "A dog prediction in the deployed interface",
        aspectRatio: "landscape",
      },
    ],
  },

  links: [
    {
      label: "Live demo",
      href: "https://cifar10-image-classifier-chi.vercel.app/",
      type: "live",
    },
    {
      label: "GitHub repository",
      href: "https://github.com/ijf03/cifar10-image-classifier",
      type: "github",
    },
  ],

  sections: [
    {
      id: "project-context",
      number: "01",
      title: "Project context",
      details: [
        {
          label: "Dataset",
          items: ["CIFAR-10", "60,000 RGB images", "10 classes"],
        },
        {
          label: "Scope",
          items: [
            "CPU model training",
            "Model evaluation",
            "ONNX export",
            "Browser inference",
          ],
        },
      ],
      blocks: [
        {
          type: "text",
          paragraphs: [
            "The project began as an exploration of the complete machine learning workflow: preparing image data, defining a neural network, training it, evaluating unseen examples, saving the learned parameters, and turning the result into something people could use.",
            "CIFAR-10 provides 32 × 32 RGB images across airplane, automobile, bird, cat, deer, dog, frog, horse, ship, and truck classes. Because the model is limited to these ten categories, it will still choose one of them when given an unrelated image. The interface communicates this limitation instead of presenting confidence as a guarantee.",
          ],
        },
        {
          type: "list",
          title: "Project goals",
          columns: 2,
          items: [
            "Understand how a CNN processes image tensors",
            "Build a complete PyTorch training loop",
            "Separate training from evaluation and inference",
            "Compare model changes through controlled experiments",
            "Create a reproducible CPU development environment",
            "Save and export the trained model",
            "Run inference directly in a web browser",
            "Present predictions and uncertainty clearly",
          ],
        },
      ],
    },
    {
      id: "model-architecture",
      number: "02",
      title: "Designing the CNN pipeline",
      details: [
        {
          label: "Input",
          items: ["3 colour channels", "32 × 32 pixels", "Normalised tensor"],
        },
        {
          label: "Output",
          items: ["10 class scores", "Highest score becomes the prediction"],
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
                src: "/images/projects/cifar10/Workflow.png",
                alt: "Diagram explaining the convolution, batch normalisation, activation, pooling, flattening, fully connected, and prediction stages",
                caption: "How an image moves through the classifier",
                aspectRatio: "wide",
              },
            ],
          },
        },
        {
          type: "text",
          paragraphs: [
            "The network accepts an image tensor with the shape 3 × 32 × 32. Two convolutional blocks progressively extract visual patterns, while batch normalisation helps keep internal values stable, ReLU introduces non-linearity, and max pooling reduces the feature-map size.",
            "The resulting 64 × 8 × 8 feature maps are flattened and passed through a 128-unit fully connected layer. The final layer produces ten raw scores. Cross-entropy loss uses these scores during training, while inference selects the highest-scoring class.",
          ],
        },
        {
          type: "list",
          title: "Model architecture",
          columns: 2,
          items: [
            "Conv2D: 3 to 32 channels",
            "Batch normalisation, ReLU, and max pooling",
            "Conv2D: 32 to 64 channels",
            "Second normalisation, activation, and pooling block",
            "Flatten: 64 × 8 × 8 features",
            "Linear layer: 4096 to 128",
            "ReLU activation",
            "Output layer: 128 to 10 class scores",
          ],
        },
      ],
    },
    {
      id: "data-and-training",
      number: "03",
      title: "Preparing and training the model",
      details: [
        {
          label: "Training",
          items: ["50,000 images", "Batch size 64", "CPU execution"],
        },
        {
          label: "Evaluation",
          items: ["10,000 unseen images", "Class-balanced split"],
        },
      ],
      blocks: [
        {
          type: "text",
          paragraphs: [
            "Torchvision downloads the official CIFAR-10 archive and the training script builds reproducible, class-balanced loaders using a fixed random seed. The final configuration uses the complete 50,000-image training set and 10,000-image test set.",
            "Training images receive random cropping and horizontal flipping so the network sees slightly varied examples across epochs. Both training and test images use the same CIFAR-10-specific normalisation values, but augmentation is kept out of evaluation so the test conditions remain consistent.",
          ],
        },
        {
          type: "list",
          title: "Final training configuration",
          columns: 2,
          items: [
            "Cross-entropy loss",
            "AdamW optimiser",
            "0.001 initial learning rate",
            "0.0001 weight decay",
            "CosineAnnealingLR scheduler",
            "Configurable epoch and batch-size arguments",
            "Reproducible random seed",
            "Saved checkpoint with classes and normalisation metadata",
          ],
        },
      ],
    },
    {
      id: "experimentation",
      number: "04",
      title: "Experimenting and verifying behaviour",
      details: [
        {
          label: "Method",
          items: ["Predict", "Test", "Observe", "Compare"],
        },
      ],
      blocks: [
        {
          type: "text",
          paragraphs: [
            "Instead of treating every change as an automatic improvement, I recorded what I expected to happen, ran the experiment, and compared the observed behaviour. This made the project as much about verification as implementation.",
            "The experiments showed that model parameters interact. A smaller learning rate did not automatically improve the classifier, more epochs eventually produced diminishing returns and overfitting, and a larger network added capacity at the cost of additional computation.",
          ],
        },
        {
          type: "list",
          title: "Changes I tested",
          columns: 2,
          items: [
            "Expanded training from 5,000 to 50,000 images",
            "Expanded evaluation from 1,000 to 10,000 images",
            "Compared learning rates of 0.001 and 0.0001",
            "Compared 10, 100, 300, and 1,000 epochs",
            "Increased convolution and fully connected layer sizes",
            "Added batch normalisation",
            "Added random crop and horizontal-flip augmentation",
            "Switched from generic to CIFAR-10 normalisation",
            "Changed from Adam to AdamW with weight decay",
            "Added cosine learning-rate scheduling",
          ],
        },
        {
          type: "callout",
          title: "What the experiments changed",
          text:
            "I moved away from assuming that one larger or smaller value would automatically improve accuracy. The final setup balances dataset size, model capacity, training time, regularisation, and evaluation on unseen data.",
        },
      ],
    },
    {
      id: "browser-inference",
      number: "05",
      title: "Exporting the model to the browser",
      details: [
        {
          label: "Deployment",
          items: ["PyTorch checkpoint", "ONNX model", "WebAssembly inference"],
        },
        {
          label: "Interface",
          items: ["React", "TypeScript", "Vite", "Vercel"],
        },
      ],
      blocks: [
        {
          type: "text",
          paragraphs: [
            "The training script saves the learned state, class names, seed, epoch count, and normalisation values in a PyTorch checkpoint. A separate exporter recreates the architecture, loads the saved weights, and produces one self-contained ONNX model with dynamic batch axes.",
            "The React application loads that model through ONNX Runtime Web using WebAssembly. Predictions run locally in the browser, which removes the need to deploy a Python inference server and keeps uploaded images on the user's device.",
          ],
        },
        {
          type: "list",
          title: "Browser inference flow",
          columns: 2,
          items: [
            "Read the uploaded JPG, PNG, or WEBP image",
            "Centre-crop the image into a square",
            "Resize it to 32 × 32 pixels",
            "Apply CIFAR-10 channel normalisation",
            "Create a 1 × 3 × 32 × 32 tensor",
            "Run the tensor through ONNX Runtime Web",
            "Convert the ten model scores with softmax",
            "Display the leading prediction and top three results",
          ],
        },
        {
          type: "gallery",
          gallery: {
            layout: "full-width",
            items: [
              {
                type: "image",
                src: "/images/projects/cifar10/Cifar website no prediction.png",
                alt: "CIFAR-10 desktop interface before upload, showing the image chooser, empty prediction panel, and ten supported classes",
                caption: "The upload workflow before an image is selected",
                aspectRatio: "portrait",
              },
            ],
          },
        },
        {
          type: "links",
          links: [
            {
              label: "Try the live classifier",
              href: "https://cifar10-image-classifier-chi.vercel.app/",
              type: "live",
            },
            {
              label: "View the source code",
              href: "https://github.com/ijf03/cifar10-image-classifier",
              type: "github",
            },
          ],
        },
      ],
    },
    {
      id: "classification-results",
      number: "06",
      title: "Presenting classification results",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "The results panel pairs the uploaded image with the leading prediction and the three highest-scoring classes. This makes alternative predictions visible rather than reducing the result to a single label.",
            "In the horse example, the model assigns 63.9% to horse, followed by dog and deer. These scores describe this prediction, rather than overall test accuracy. The interface explains that confidence reflects the model's relative scores and does not guarantee a correct result.",
          ],
        },
        {
          type: "gallery",
          gallery: {
            layout: "full-width",
            items: [
              {
                type: "image",
                src: "/images/projects/cifar10/three horse.png",
                alt: "CIFAR-10 classifier showing three horses with horse ranked first at 63.9%, followed by dog and deer",
                caption: "Horse prediction with visible uncertainty across the top three classes",
                aspectRatio: "landscape",
              },
            ],
          },
        },
      ],
    },
    {
      id: "responsive-interface",
      number: "07",
      title: "Adapting the interface for mobile",
      details: [
        {
          label: "Design focus",
          items: ["Readable hierarchy", "Image upload", "Responsive layout"],
        },
      ],
      blocks: [
        {
          type: "text",
          paragraphs: [
            "The responsive React interface keeps the project introduction and image-upload action readable on a narrow screen. The mobile layout gives the upload area the available width while preserving the same visual hierarchy as the desktop experience.",
          ],
        },
        {
          type: "gallery",
          gallery: {
            layout: "full-width",
            items: [
              {
                type: "image",
                src: "/images/projects/cifar10/cifar10-image-classifier-chi.vercel.app_(iPhone 16 Pro Max).png",
                alt: "CIFAR-10 classifier on an iPhone-sized screen showing the project introduction, technology badges, and full-width image-upload area",
                caption: "Mobile introduction and image-upload interface",
                aspectRatio: "portrait",
              },
            ],
          },
        },
      ],
    },

    {
      id: "challenges",
      number: "08",
      title: "Key development challenges",
      blocks: [
        {
          type: "list",
          columns: 1,
          items: [
            "Building a CPU-only environment without triggering excessive local compilation",
            "Understanding the relationship between tensor shapes across convolution, pooling, flattening, and linear layers",
            "Choosing a practical epoch count without relying only on training accuracy",
            "Keeping browser preprocessing consistent with the transformations used during model evaluation",
            "Exporting the weights inside one ONNX file so the deployed application could load it reliably",
            "Explaining confidence honestly when the model must always choose one of ten limited classes",
          ],
        },
        {
          type: "text",
          paragraphs: [
            "The most disruptive issue occurred when the Nix environment exhausted the available WSL memory while compiling a large dependency. I investigated the environment rather than the model, pinned the project to a packaged NixOS release, and limited build jobs and cores. This allowed the required dependencies to use pre-built packages and made the setup reliable.",
            "For deployment, I kept the Python and browser pipelines aligned by reusing the same image dimensions and normalisation values. I also exported the ONNX model without external weight data, avoiding a separate file that could fail to load after deployment.",
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
            "The completed project connects the full machine learning lifecycle: reproducible environment setup, dataset preparation, CNN training, evaluation, checkpointing, model export, browser preprocessing, inference, and a deployed user interface.",
            "It also changed how I approach machine learning work. I learned to separate loss from accuracy, training performance from generalisation, and a model's confidence score from certainty. Most importantly, I learned to verify assumptions through small experiments and inspect the complete pipeline when results or tooling behaved unexpectedly.",
          ],
        },
        {
          type: "list",
          title: "Delivered outcomes",
          columns: 2,
          items: [
            "Reproducible Nix development environment",
            "CPU-trained PyTorch CNN",
            "Full CIFAR-10 training and evaluation workflow",
            "Reusable model checkpoint",
            "Self-contained ONNX export",
            "Client-side WebAssembly inference",
            "Responsive React and TypeScript interface",
            "Public live demo and documented source code",
          ],
        },
      ],
    },
  ],
} satisfies Project;
