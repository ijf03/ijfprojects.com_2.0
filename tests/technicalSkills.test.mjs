import assert from "node:assert/strict";
import { test } from "node:test";
import { readFileSync } from "node:fs";
import ts from "typescript";
import { getTechnicalSkillGroups, getTechnologyCategoryConflicts } from "../src/data/projectTechnicalSkills.ts";
import { flattenTechStack } from "../src/data/technologyCategories.ts";
import { matchesProjectSearch } from "../src/data/projectSearch.ts";
import { bubbleTeaStore } from "../src/data/projects/bubbleTeaStore.ts";
import { cifar10 } from "../src/data/projects/cifar10.ts";
import { esportsPortfolio } from "../src/data/projects/esportsPortfolio.ts";
import { movingHouse247 } from "../src/data/projects/movingHouse247.ts";
import { nutricoach } from "../src/data/projects/NutriCoach.ts";
import { secureFinanceGroup } from "../src/data/projects/SecureFinanceGroup.ts";
import { smartPark } from "../src/data/projects/SmartParkAPI.ts";
import { todoList } from "../src/data/projects/todoList.ts";

test("explicit categories, aliases, case-insensitive deduplication, sorting and empty groups", () => {
  assert.deepEqual(getTechnicalSkillGroups([
    { techStack: { frontend: [" zeta ", "ReactJS", "alpha", ""], languages: ["TypeScript"] } },
    { techStack: { frontend: ["React.js", "react", "ALPHA"], backend: [] } },
  ]), [
    { title: "Languages", skills: ["TypeScript"] },
    { title: "Frontend", skills: ["alpha", "React", "zeta"] },
  ]);
  assert.deepEqual(getTechnicalSkillGroups([]), []);
});

test("unregistered technologies need only a project assignment", () => {
  assert.deepEqual(getTechnicalSkillGroups([{ techStack: { mobile: ["Brand New SDK"] } }]), [
    { title: "Mobile Development", skills: ["Brand New SDK"] },
  ]);
});

test("conflicts are reported and both explicit assignments are retained", () => {
  const projects = [
    { techStack: { frontend: ["React.js"] } },
    { techStack: { backend: ["reactJS"] } },
  ];
  assert.deepEqual(getTechnologyCategoryConflicts(projects), ["React: Frontend, Backend & APIs"]);
  assert.equal(getTechnicalSkillGroups(projects).length, 2);
  const component = readFileSync(new URL("../src/components/home/SkillsPreview.tsx", import.meta.url), "utf8");
  assert.match(component, /if \(import\.meta\.env\.DEV\)\s*\{[\s\S]*?console\.warn/);
});

test("project flattening preserves declared category and technology order", () => {
  assert.deepEqual(flattenTechStack({ backend: ["Node.js", "Express"], frontend: ["React", "CSS"] }),
    ["Node.js", "Express", "React", "CSS"]);
  assert.deepEqual(flattenTechStack({}), []);
});

test("search preserves text fields, technologies, aliases and empty searches", () => {
  const project = { title: "Example", type: "Web App", shortDescription: "Shopping experience",
    skills: ["Authentication"], techStack: { frontend: ["React.js"], backend: ["NodeJS"] } };
  for (const query of ["example", "WEB", "shopping", "authentication", "React", "reactjs", "Node.js", "node", "", "  "]) {
    assert.equal(matchesProjectSearch(project, query), true, query);
  }
  assert.equal(matchesProjectSearch(project, "unrelated"), false);
});

test("every recorded project technology is displayed and searchable from a homepage pill", () => {
  const projects = [bubbleTeaStore, cifar10, esportsPortfolio, movingHouse247, nutricoach, secureFinanceGroup, smartPark, todoList];
  assert.deepEqual(getTechnologyCategoryConflicts(projects), []);
  for (const project of projects) {
    assert.equal(flattenTechStack(project.techStack).length, Object.values(project.techStack).reduce((n, values) => n + values.length, 0));
    for (const group of getTechnicalSkillGroups([project])) {
      for (const skill of group.skills) {
        const url = new URL(`/projects?search=${encodeURIComponent(skill)}`, "https://example.com");
        assert.equal(matchesProjectSearch(project, url.searchParams.get("search")), true, skill);
      }
    }
  }
  const component = readFileSync(new URL("../src/components/home/SkillsPreview.tsx", import.meta.url), "utf8");
  assert.ok(component.includes('to={`/projects?search=${encodeURIComponent(skill)}`}'));
});

test("TypeScript rejects unknown category keys and accepts partial stacks", () => {
  const options = { noEmit: true, strict: true, skipLibCheck: true, target: ts.ScriptTarget.ES2023,
    module: ts.ModuleKind.ESNext, moduleResolution: ts.ModuleResolutionKind.Bundler };
  const program = ts.createProgram(["tests/technicalSkills.types.ts"], options);
  const diagnostics = ts.getPreEmitDiagnostics(program);
  assert.deepEqual(diagnostics.map(d => ts.flattenDiagnosticMessageText(d.messageText, "\n")), []);
});
