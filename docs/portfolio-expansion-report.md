# Portfolio expansion implementation report

## Update: 23 November 2026

The Book App case study now has twelve sections covering the learning process, weekly feedback, interface revisions, reading workflows, discovery and editions, asynchronous metadata loading, reading insights, architecture, synchronisation, accessibility, testing and reflection. Seven selected user-supplied screenshots illustrate these sections with captions and alternative text. The supporting portfolio reports a historical 100-test Xcode run with zero failures; this was not rerun here. Live verification of the newer metadata fields and updated Firestore rules remains outstanding. The private PDF, student identifiers and university links are not published.

The `temp` and `temp2` stashes were reconciled with the pulled main branch. Missing project files and Ticket to Ride images were restored, while the new Book App content was retained. The newer EcoGuard write-up and images were preserved alongside the earlier backend detail, GitHub link and consistent technology categories. Its canonical slug is now `aussie-ecoguard`; `ecoguard` remains a supported lookup alias. Bubble Tea Store and Esports Portfolio remain registered from the pulled version, bringing the collection to fifteen entries. Both stashes are retained as backups.

Current verification: all eight tests in the pulled working tree pass; lint and production build pass. Vite still reports the existing warning for a main bundle larger than 500 kB. Both Git conflicts were resolved. The sections below record the earlier audit and are superseded by this update where counts, screenshot availability or routes differ.

Review date: 19 November 2026 (Australia/Sydney).

## Result

All nine requested projects have one registered entry and a data-driven detail page. The collection now contains 13 projects, up from six. Five project data files were created; four existing files were updated, including the empty EcoGuard file and the unregistered CloudKitchenPro draft. Seven entries were added to the registry. Existing active slugs and unrelated project content were preserved.

No dependencies were introduced. No commits, pushes, application deployments, cloud changes or project-repository modifications were performed.

## Architecture and audit

- React 19, TypeScript 6 and Vite 8, with Tailwind CSS 4, React Router 7, Framer Motion and Lucide icons.
- Individual objects in `src/data/projects/` satisfy the shared `Project` interface in `src/types/project.ts`.
- `src/data/projects/index.ts` registers projects and provides slug lookup. `projects/:slug` renders the shared `ProjectDetailPage`; no individual page implementations were needed.
- `ProjectCard`, `ProjectSectionRenderer` and `ProjectMediaGallery` handle cards, ordered content blocks and image/video galleries. Moving House's section/block structure was the architectural reference.
- The project collection uses text/technology search and date sorting, not a category-tab system. Existing technology groups also feed homepage skill links. New projects use those conventions.
- Existing active entries: Moving House 24/7, CIFAR-10, SmartPark, Secure Finance Group, To Do List and NutriCoach. Bubble Tea Store and the esports portfolio remain intentionally unregistered.
- CloudKitchenPro was an unregistered legacy-shape object containing unrelated removals-business copy and NutriCoach image paths. It was rewritten in the current interface.
- AussieEcoGuard.ts was empty. Book App, Ticket to Ride, Flappy Birb, RecipeHub2 and Elden Thing 2 had no data files.
- Existing theme tokens match the supplied dark/teal palette, with Inter body and Space Grotesk heading fonts. Those tokens, the main container, navigation, grids and animation conventions remain.
- Existing galleries already return nothing for empty arrays. The detail page now also avoids an empty hero-gallery wrapper.
- Images live under `public/images/projects/`. Missing Moving House gallery references were removed. Only an inspected administrative-dashboard image without customer rows is retained on its page. The original files remain on disk.
- Vercel's SPA rewrite remains unchanged. The portfolio is a static Vite build, separate from the infrastructure of the projects it describes.

## Routes and verified repositories

Every repository below was accessible and public through GitHub during the final review. Repository access does not prove the application currently runs.

| Project | Route | Repository | Change |
| --- | --- | --- | --- |
| Moving House 24/7 | /projects/moving-house-247 | [Moving-House-247](https://github.com/ijf03/Moving-House-247) | Updated existing entry |
| Ticket to Ride | /projects/ticket-to-ride | [Ticket-to-ride](https://github.com/ijf03/Ticket-to-ride) | Added |
| Book App | /projects/book-app | [book-app](https://github.com/ijf03/book-app) | Added |
| Aussie EcoGuard | /projects/ecoguard | [ecoguard](https://github.com/ijf03/ecoguard) | Filled existing empty file; registered |
| SmartPark | /projects/smartpark | [smartpark](https://github.com/ijf03/smartpark) | Updated existing entry |
| Flappy Birb | /projects/flappy-birb | [Flappy-Birb](https://github.com/ijf03/Flappy-Birb) | Added |
| RecipeHub2 | /projects/recipehub2 | [RecipeHub2](https://github.com/ijf03/RecipeHub2) | Added |
| Elden Thing 2 | /projects/elden-thing-2 | [Elden-Thing-2](https://github.com/ijf03/Elden-Thing-2) | Added |
| CloudKitchenPro | /projects/cloudKitchenPro | [cloudkitchenpro](https://github.com/ijf03/cloudkitchenpro) | Replaced draft; retained its existing slug |

GitHub initially reported zero-size metadata for Moving House and Ticket to Ride, but their trees and commits were accessible. Flappy Birb initially returned 404 and was absent from the public listing; it became accessible when rechecked after the user supplied its exact URL. No repository remained inaccessible.

## Evidence and attribution

This is a targeted source and history review, not an exhaustive security audit or a replay of every commit. Trees, manifests, entry points, representative implementation paths, tests and relevant diffs were inspected. History queries covered the first 100 commits for Moving House, Ticket to Ride and Elden Thing 2, with additional path-specific Moving House history. Smaller returned histories were reviewed in full. The attribution below uses named changes, not commit-count percentages.

### Moving House 24/7

- **Source verified:** CakePHP 5.3, Composer, authentication, Stripe, reCAPTCHA and ContentBlocks dependencies; enquiry ownership checks and ordered replies; administrative navigation; booking, invoice, staff and resource modules. Primary evidence: `composer.json`, `src/Controller/ContactFormsController.php`, `src/Controller/ContentBlocksController.php`, and the controller/model/template tree.
- **Personal changes:** [customer portal and threaded replies](https://github.com/ijf03/Moving-House-247/commit/2f820ec05e5da92a1b87443c62e44a74286ed45a), [dashboard implementation](https://github.com/ijf03/Moving-House-247/commit/6cc5af8f3a68034f6ccc8d17fabc889e85868e55), [homepage redesign](https://github.com/ijf03/Moving-House-247/commit/161986a07253018bfc86f6aeb13d7ff30b9a436c), and [resource navigation](https://github.com/ijf03/Moving-House-247/commit/0719ebdb830f3ff9a2989682b7bd24ff249ae61e).
- **Documentation:** README is largely CakePHP starter documentation; its upstream badge is not project test evidence.
- **User supplied:** Real client context, MySQL stack, collaborative development and broader contribution areas.
- **Uncertain/omitted:** Current deployment, client outcomes, team size, precise completion month, broad payment-system authorship, Geoapify usage and comprehensive accessibility results. The previous assertion of an entirely custom CMS was corrected to ContentBlocks integration. No ownership of the whole operational system is asserted.

### Ticket to Ride

- **Source verified:** Java and Swing, not PHP/web development. In-memory GameState, GameService, TurnManager and GameController coordinate local player actions. FinalScoreManager uses graph traversal for ticket connectivity and backtracking over used routes for a longest-path bonus.
- **Personal changes:** [final-score integration](https://github.com/ijf03/Ticket-to-ride/commit/a016fa3fca447fd09e4e3b86e0f97cf690200da1) and [longest-path bonus](https://github.com/ijf03/Ticket-to-ride/commit/7e9281657c3ae98655798390e949297ca5a8c245); history additionally identifies setup, board/card presentation, final-round and selection-reset work.
- **Documentation:** README is only a repository heading. No Maven/Gradle manifest or automated test suite was identified in the inspected tree.
- **User supplied:** Board-game inspiration and portfolio inclusion. On 23 November 2026, the Sprint 3 design report and six PNG files were supplied. The report documents ferry routes, three configurable maps, up to five players, individual clocks, temporary traffic jams, route-validation refactoring and structured final-score breakdowns. These additions are documentation-backed personal sprint work, not a fresh source-code or runtime verification.
- **Screenshots:** Five distinct images now illustrate the board, initial ticket selection, traffic-jam payment feedback, player handover and results. `Traffic jam.png` duplicates the handover image and is retained but not displayed. The board screenshot also supplies the project cover. No private report or university links were copied into public assets.
- **Uncertain/omitted:** Full commercial rules equivalence, licensing/endorsement, remote multiplayer, persistence and fresh gameplay correctness. Team mechanics remain distinct from personal scoring/setup/interface work.

### Book App

- **Source verified:** SwiftUI feature views and view models; AppContainer dependency injection; repository protocols; Firebase authentication; Firestore sync; local account storage/journal; reminders; reading features; WidgetKit; Swift Testing and XCTest UI targets.
- **Personal changes:** [account-based cloud synchronisation](https://github.com/ijf03/book-app/commit/e314ff772ba9505c5691a3216292b229831af48f) adds coordinator, account lifecycle, local journal and related store changes. The history records the individual's successive library, search, session, goal and widget work.
- **Documentation:** No root README was present. Source comments explain the journal and pending-edit behaviour; the UI test explicitly limits its audit to the launch screen.
- **User supplied:** Native reading-companion motivation and expected feature areas.
- **Uncertain/omitted:** App Store/TestFlight availability, current passing iOS tests, full VoiceOver coverage and entirely offline authentication/search. Onboarding is not claimed as a completed dedicated flow. Firebase configuration was not used. Runtime validation requires macOS/Xcode.

### Aussie EcoGuard

- **Source verified:** Node HTTP API, TypeScript contracts, local filesystem/SQLite adapters, SHA-256 deduplication, Python image workers, detection integration and FFmpeg video sampling. Final tree includes React, Cognito, Lambda/API Gateway, S3, Firestore, Dialogflow and notification modules.
- **Personal changes:** [local media/storage/search foundation](https://github.com/ijf03/ecoguard/commit/2c0ea623ad58a725f1b88aad005709fd5475a103) and [processing validation and regression work](https://github.com/ijf03/ecoguard/commit/449e3ddfee27f9a206628f910d3bbdb746f96927).
- **Documentation:** README describes the final multi-cloud integration, historical live checks, a hosted frontend and ten-class model limitations. It explicitly distinguishes Sabi's local backend foundation from the teammate's subsequent integration work and discloses AI assistance.
- **User supplied:** Local-backend emphasis and collaborative context, corroborated by diffs.
- **Uncertain/omitted:** Current live availability, fresh test results, field detection accuracy, unique-animal counts across video and production readiness. Historical frontend, authentication, cloud, chatbot and notification work is not attributed to Sabi. No contribution percentage is reproduced.
- The README's historical hosting URL was not added as a live button because the application was not freshly verified. Its feature-branch wording is retained as a documentation caveat; the inspected default tree itself contains the cloud modules.

### SmartPark

- **Source verified:** `release/app/main.py`, YOLOService, InferenceService, inference cache, annotation service, React dashboard and Docker packaging. State is process-local. The active integration loads an Ultralytics model; presence of an ONNX artefact does not establish a dedicated ONNX runtime.
- **Personal changes:** [local completion, logging, annotations and tests](https://github.com/ijf03/smartpark/commit/65370e211c0647d91ab8d0cfa31eb2bf989eb714). The history also records camera, YOLO, ranking, dashboard and Docker changes.
- **Documentation:** `release/README.md` documents single-process memory, cache behaviour, dashboard polling, test commands and CPU Docker execution with externally mounted weights.
- **User supplied/existing portfolio:** Parking-detection motivation; earlier portfolio text asserted Redis, GKE, autoscaling, Locust metrics and costs.
- **Uncertain/omitted:** Those distributed-cloud and measured performance claims could not be corroborated by the public release and were removed from public copy. They may belong to a later unprovided version. Model training is not attributed to Sabi. No large model or historical virtual environment was downloaded or executed.

### Flappy Birb

- **Source verified:** TypeScript, RxJS, Vite and SVG; FLAP/TICK/RESTART actions reduced with scan; readonly state; CSV obstacle schedule; collision cooldown, bounce and three lives; scored pipes; previous-run ghost track.
- **Personal changes:** [ghost replay](https://github.com/ijf03/Flappy-Birb/commit/624a6148dbde099340d8743512aa211a581b6bed), alongside the individual's collision, movement and rendering history. Initial starter commits have a different author.
- **Documentation:** README supplies development, test and map-generation commands.
- **User supplied:** Project title, functional-programming motivation and exact repository URL.
- **Uncertain/omitted:** Adaptive difficulty, meaningful automated game coverage and live deployment. The existing tests only assert that state$ exists and is a function. A static deployment must verify the root-relative CSV request and asset packaging. The submission archive and assessment material were not downloaded.

### RecipeHub2

- **Source verified:** Express, EJS rendering, MongoDB/Mongoose schemas, role/ownership checks, recipe CRUD and copying, inventory forms and filtering. AngularJS is declared in package.json but no Angular UI implementation was established.
- **Personal changes:** [MongoDB refactor](https://github.com/ijf03/RecipeHub2/commit/f043e8fca86c0f760cd6c18a9c7dd00890f73335); history identifies routes/controllers/models, login, editing and fixes. Starter README commits are not attributed to Sabi.
- **Documentation:** Minimal README; package test script is a failing placeholder rather than an implemented suite.
- **User supplied:** Recipe-management purpose and proposed MEAN label.
- **Uncertain/omitted:** MEAN as the implemented frontend stack, third-party APIs, secure-session claims and production readiness. The page accurately describes server-rendered MVC.

### Elden Thing 2

- **Source verified:** Java text game, supplied engine/demo packages, game-specific actors/actions/items; BossPartInterface, BossPart, Branch, Leaf, Growable and Spell contracts.
- **Personal changes:** [boss-part refactor](https://github.com/ijf03/Elden-Thing-2/commit/a6e6e5b8f674b00a012984f4f76f6c0518eaa564) and [spell interface/refactoring](https://github.com/ijf03/Elden-Thing-2/commit/ce9eb22240c6506f4e8b21157f8817b548f3c559). See the snapshot table below for reproducible review; interface changes were examined alongside current source.
- **Documentation:** README identifies a four-person team and describes magic/potion requirements. Requirements alone were not treated as proof of completed behaviour; source takes precedence where wording differs.
- **User supplied:** Object-oriented software engineering focus.
- **Uncertain/omitted:** Whole-engine authorship, all-combat/all-magic authorship, universal SOLID compliance and fresh runtime tests. No automated test suite was identified. Private design/contribution documents were not opened or reproduced.

### CloudKitchenPro

- **Source verified:** Angular 20, TypeScript, router, HttpClient services, forms, Bootstrap, Express JSON endpoints, MongoDB/Mongoose, service-worker configuration and web manifest.
- **Personal changes:** [Angular/backend integration](https://github.com/ijf03/cloudkitchenpro/commit/83be2281abf52cab8952abcbe13fcae0f44bd81d) and [PWA configuration](https://github.com/ijf03/cloudkitchenpro/commit/60b47c04bd65295c1fc54ab296b534d27e7636ec).
- **Documentation:** Minimal root README and Angular starter documentation; Jasmine/Karma configuration and component test files exist, but their results were not reproduced.
- **User supplied:** Kitchen inventory/recipe purpose and progression from the earlier application.
- **Uncertain/omitted:** Commercial client status, restaurant order processing, staff scheduling, unrelated booking/payment/CMS claims, current hosting and offline API mutations. The source and commit messages support shared lineage with RecipeHub2, not a byte-for-byte identity between the projects.

## Featured selection

The six previously active featured projects remain featured. Book App is added for native iOS architecture, local/cloud data handling and individual implementation evidence, bringing the featured collection to seven. Moving House and SmartPark remain prominent, with corrected scope. EcoGuard is a strong future featured candidate once a safe visual/demo is available. CloudKitchenPro is in the collection but not newly featured because it overlaps RecipeHub2 and needs authentication hardening. No existing featured project was silently displaced.

## Media and deployment plan

Six requested projects currently have no portfolio screenshots: Book App, EcoGuard, Flappy Birb, RecipeHub2, Elden Thing 2 and CloudKitchenPro. They receive CSS title/technology covers, not generated or unrelated screenshots. Ticket to Ride now uses five user-supplied gameplay screenshots. Moving House uses its existing logo and inspected dashboard; SmartPark uses its inspected local-edition dashboard. Other existing assets were not deleted.

None of the nine entries has a newly asserted live URL. This does not change development status or imply abandonment. A deployment is not required for a useful portfolio case study.

| Project | Recommended next screenshots | Future approach; requirements and cost considerations |
| --- | --- | --- |
| Moving House | Synthetic enquiry thread, mobile navigation, synthetic staff/resource allocation and ContentBlocks editor | Prefer a recorded walkthrough. If hosting is needed, use an isolated PHP 8.2+/CakePHP server or container plus MySQL. Supply new demo-only configuration for mail, reCAPTCHA and Stripe test mode. Server/database costs may apply; never reuse client data. |
| Ticket to Ride | Optional additions: map/player configuration screen, alternate maps and ferry substitution feedback. Board, ticket selection, traffic-jam feedback, handover and final results are included. | A local Java/Swing recording is sufficient. A reviewed desktop package is more appropriate than static website hosting. No server, database or cloud credentials were identified. Check asset/licensing distribution rights before packaging. |
| Book App | Library, reading timer, progress statistics, sync status and large-text/light/dark screens using synthetic records | Start with an iOS simulator recording. TestFlight is an optional later distribution route, requiring Apple signing/distribution setup and its programme requirements. Firebase account/rules setup remains necessary for cloud features; usage and programme costs may apply. |
| EcoGuard | Synthetic media upload, species results, retry state, video sampling and a redrawn public architecture diagram | A recording is the lowest-maintenance choice. Revisit the existing team's Firebase/AWS deployment only after checking ownership, credentials, budgets and current runtime. It requires model/runtime packaging, cloud identity, S3, Firestore and related services; cross-cloud and inference usage may incur costs. |
| SmartPark | Annotated detection image, ranking response, unknown versus observed dashboard state and controlled error | Prefer local Docker plus a recording. A later CPU container host/VM needs sufficient memory, externally supplied model weights and bounded concurrency. Current state is in memory, not a shared database. Persistent model files need mounted storage; CPU hosting costs may exceed the benefit of an always-on portfolio demo. |
| Flappy Birb | Active play, collision/lives, score and ghost replay | Best static-hosting candidate after asset/base-path fixes and gameplay testing. A reviewed Vite build could use GitHub Pages. No backend, database or API keys are apparent. A recording remains useful if hosting is deferred. |
| RecipeHub2 | Recipe filters, validation error, copy/edit ownership flow and synthetic inventory | Prefer a recording until authentication is hardened. Later use a Node/Express server such as Render plus MongoDB, with database credentials outside source. EJS needs a running server; it is not a static-only deployment. Hosting/database charges may apply. |
| Elden Thing 2 | Terminal map, growing boss, spell action and a fresh public class diagram | A local Java recording demonstrates the design well. No web service, database or cloud keys are needed for the inspected implementation. Review rights to redistribute the supplied engine and assets before offering a downloadable package. |
| CloudKitchenPro | Angular dashboard, recipe edit, inventory detail and install prompt using synthetic data | Prefer a recording until authentication is hardened. Later serve the Angular build with the Express API, or split static hosting and a Node service; MongoDB remains required. Configure backend database credentials and HTTPS. Server/database costs may apply. PWA configuration alone does not provide offline writes. |

Platform recommendations are implementation-based suggestions, not price quotations. Relevant current primary references: [GitHub Pages static hosting](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages), [Render Express hosting](https://render.com/docs/deploy-node-express-app), [Apple TestFlight](https://developer.apple.com/testflight/), [Docker persistent storage](https://docs.docker.com/get-started/docker-concepts/running-containers/persisting-container-data/), and [Firebase billing plans](https://firebase.google.com/docs/projects/billing/firebase-pricing-plans). Check service-specific budgets and terms before any deployment.

## Security and confidentiality findings

- RecipeHub2/CloudKitchenPro identify users from request-supplied IDs and login flags; CloudKitchenPro's inspected user controller stores/compares password strings directly and accepts role choices. These need a proper password/session/authorisation review before a public demo. No application code was changed.
- Academic identifiers occur in upstream routes, documentation and archive names. They were not copied into portfolio content or this report.
- Book App's tree includes Firebase client configuration; its values were not opened or used. Presence of a client configuration file is not by itself evidence of a leaked admin credential.
- Moving House contains a database dump. Its records were not opened or imported. The retained dashboard has no customer rows. Other operational images await a synthetic-data/confidentiality review before reuse.
- No raw diffs, credentials, database records, private assessment documents or new downloaded media are stored in the portfolio. The source review was not an exhaustive historical secret scan.

## Verification

- Production build and TypeScript: passed using `npm run build`.
- ESLint: passed using `npm run lint`.
- Tests: nine passing using `npm test`, including the new portfolio regression check.
- The new test renders all 13 project detail routes with React server rendering, checks uniqueness of the nine requested slugs, section IDs, HTTPS links, absence of blank links, technology-category consistency and existence of requested-project media.
- It also checks image-free card output and empty-gallery output. Actual pages without live URLs render their complete case studies.
- Local development server returned HTTP 200 for a project detail URL.
- `git diff --check`: passed.
- The build warns that the main JavaScript chunk exceeds 500 kB minified. The existing single-bundle architecture was retained; no unrelated code-splitting refactor was introduced.
- Desktop/tablet/mobile structure was inspected in code: existing one/two/three-column grids remain, the search header now stacks on mobile, titles can wrap and cover areas have a fixed aspect ratio. New card text uses existing higher-contrast secondary text instead of muted text where changed. Visible focus styles remain and the new cover/card transformations respect reduced motion.
- **Visual verification limitation:** browser automation was unavailable, and native Computer Use stopped because it could not determine Chrome's URL confidently. No desktop/tablet/mobile screenshot validation, browser keyboard run, screen-reader run or visual overflow measurement is claimed. These remain final visual QA work.
- The requested projects' applications and external test suites were not run. Historical test documentation is distinguished from results produced in this task.
- Two unregistered legacy entries still reference missing assets (Bubble Tea Store and esports portfolio); these were outside the active collection and left unchanged.

## Files

Created:
- `src/components/projects/ProjectCover.tsx`
- `src/data/projects/bookApp.ts`
- `src/data/projects/ticketToRide.ts`
- `src/data/projects/flappyBirb.ts`
- `src/data/projects/recipeHub2.ts`
- `src/data/projects/eldenThing2.ts`
- `tests/portfolioProjects.test.mjs`
- `docs/portfolio-expansion-report.md`

Modified:
- `src/types/project.ts`
- `src/components/projects/ProjectCard.tsx`
- `src/data/projects/movingHouse247.ts`
- `src/data/projects/AussieEcoGuard.ts`
- `src/data/projects/SmartParkAPI.ts`
- `src/data/projects/cloudKitchenPro.ts`
- `src/data/projects/index.ts`
- `src/pages/ProjectDetailPage.tsx`
- `src/pages/ProjectsPage.tsx`

## Maintaining the collection

1. Copy a current project data file and keep `satisfies Project`. Choose a unique slug, write source-backed content and import/register the object in `src/data/projects/index.ts`.
2. Group verified technologies in `techStack`. Reuse the existing category for a technology; tests catch conflicting assignments. Search and homepage skill links consume these values automatically.
3. Omit `coverImage` until a real approved image exists. The card and image-free detail header use the branded cover. For a real image, put it under `public/images/projects/<slug>/` and use a root-relative URL.
4. Add `heroGallery: { layout: "two-column", items: [{ type: "image", src: "/images/projects/<slug>/screen.png", alt: "Specific description", caption: "Context for this screen" }] }`. The existing section gallery block format supports additional images and video. Omit galleries or use empty items when there is no media.
5. Add a verified live link to `links` using `{ label: "Live demo", href: "https://...", type: "live" }`. Do not add placeholders. Demo recordings can use `type: "external"`; documentation uses `type: "documentation"`.
6. `deploymentStatus` is optional presentation text, separate from `status`. Update it when availability changes. A project can be completed without a deployment.
7. Set `featured` deliberately. The homepage uses the registry's featured entries without a separate hardcoded list.
8. Run `npm test`, `npm run lint` and `npm run build`, then inspect desktop, tablet and mobile views. Use synthetic records and descriptive alternative text when adding screenshots.

## Open follow-up questions

- Does a later SmartPark repository/branch contain the previous GKE, Redis and benchmark evidence? If supplied, those claims can be reviewed and restored accurately.
- Which live deployments should remain public, and are the documented EcoGuard services still available?
- Which screenshots are approved for public display, particularly client operations and account-related screens?
- Confirm development/completion status where not supplied; new entries intentionally omit a categorical completion claim rather than infer it from lack of hosting.


## Inspected default-branch snapshots

| Repository | Commit |
| --- | --- |
| Moving-House-247 | [cdba208f4d2e](https://github.com/ijf03/Moving-House-247/tree/cdba208f4d2e0356621851c920a5e2eea7d9da91) |
| Ticket-to-ride | [fb7ffc78234d](https://github.com/ijf03/Ticket-to-ride/tree/fb7ffc78234d21d7ab2148d727e547dcbc23f714) |
| book-app | [fbf7f9670f9f](https://github.com/ijf03/book-app/tree/fbf7f9670f9f710ee5c42c56c8de51ced9880429) |
| ecoguard | [1fda2b990763](https://github.com/ijf03/ecoguard/tree/1fda2b99076332d833c11a532964a9fa16cb25c6) |
| smartpark | [5d6ecad238a7](https://github.com/ijf03/smartpark/tree/5d6ecad238a749d50aa4a3cadb09542b55706999) |
| Flappy-Birb | [f0fb978e8e0f](https://github.com/ijf03/Flappy-Birb/tree/f0fb978e8e0ffccad124d1bad65a784c936ff9d2) |
| RecipeHub2 | [91ed3dd230f2](https://github.com/ijf03/RecipeHub2/tree/91ed3dd230f2abe3a5233e27f646f1e225e853eb) |
| Elden-Thing-2 | [d35a661ca77e](https://github.com/ijf03/Elden-Thing-2/tree/d35a661ca77ea073ccfadfd9b34d3e2775b88a34) |
| cloudkitchenpro | [2becfb5c5ab9](https://github.com/ijf03/cloudkitchenpro/tree/2becfb5c5ab9b36410d8b1b975be80802f8c25fc) |

