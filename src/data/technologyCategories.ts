export interface Technology {
  name: string;
  aliases?: readonly string[];
}

export const technologyCategories: readonly {
  title: string;
  technologies: readonly Technology[];
}[] = [
  { title: "Languages", technologies: [
    { name: "Python" }, { name: "JavaScript" }, { name: "TypeScript" },
    { name: "PHP" }, { name: "Kotlin" }, { name: "Java" }, { name: "C++" },
    { name: "Swift" }, { name: "Lua" },
  ] },
  { title: "Frontend", technologies: [
    { name: "React", aliases: ["React.js", "ReactJS"] }, { name: "HTML" },
    { name: "CSS" }, { name: "Bootstrap" }, { name: "Tailwind CSS" }, { name: "Vite" },
  ] },
  { title: "Backend & APIs", technologies: [
    { name: "Node.js", aliases: ["NodeJS"] }, { name: "Express" },
    { name: "CakePHP" }, { name: "Retrofit" }, { name: "REST APIs" },
  ] },
  { title: "Mobile Development", technologies: [
    { name: "Jetpack Compose" }, { name: "SwiftUI" },
    { name: "Kotlin Coroutines" }, { name: "Material 3" },
  ] },
  { title: "Databases", technologies: [
    { name: "MySQL" }, { name: "SQLite" }, { name: "MongoDB" },
    { name: "Room" }, { name: "SQL" },
  ] },
  { title: "AI & Machine Learning", technologies: [
    { name: "PyTorch" }, { name: "Torchvision" }, { name: "ONNX" },
    { name: "ONNX Runtime Web" }, { name: "YOLO" },
  ] },
  { title: "DevOps & Tools", technologies: [
    { name: "Docker" }, { name: "Nix" }, { name: "Vercel" }, { name: "Git" },
    { name: "AWS" }, { name: "Google Cloud" },
  ] },
  { title: "APIs & Integrations", technologies: [
    { name: "Gemini API" }, { name: "Stripe API" }, { name: "FruityVice API" },
    { name: "Google reCAPTCHA" }, { name: "FullCalendar" },
  ] },
  { title: "Game & Creative Tech", technologies: [
    { name: "Unity" }, { name: "Unreal Engine" }, { name: "Blender" },
    { name: "Three.js" }, { name: "Maya" }, { name: "Tinkercad" },
    { name: "Arduino" }, { name: "Figma" },
  ] },
];

const technologyLookup = new Map(
  technologyCategories.flatMap((category) =>
    category.technologies.flatMap((technology) =>
      [technology.name, ...(technology.aliases ?? [])].map((name) =>
        [name.toLowerCase(), { ...technology, category: category.title }] as const,
      ),
    ),
  ),
);

export function findTechnology(value: string) {
  return technologyLookup.get(value.trim().toLowerCase());
}
