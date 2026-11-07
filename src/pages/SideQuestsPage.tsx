import { useEffect, useRef, useState } from "react";
import "../styles/SideQuestsPage.css";


type ScrapbookMemory = {
  id: string;
  title: string;
  eyebrow: string;
  caption: string;
  story: string;
  emoji: string;
  image?: string;
  imageAlt?: string;
  tint: string;
  tags: string[];
  photoLabel: string;
};

const memories: ScrapbookMemory[] = [
  {
    id: "01", title: "Founding FAM", eyebrow: "THE PEOPLE",
    caption: "A community, from the beginning.",
    story: "A moment with the founding leadership team of the Filipino Association of Monash. We helped create a space for Filipino students to connect, celebrate culture, and find community at Monash.",
    emoji: "🪩", image: "/images/SideQuests/FAM/Fam Founding leadership team.jpeg", imageAlt: "The Filipino Association of Monash founding leadership team together in front of a Philippine flag",
    tint: "lilac", tags: ["Community", "Culture"], photoLabel: "FAM FOUNDING TEAM",
  },
  {
    id: "02", title: "On the mic", eyebrow: "SHOUTCASTING",
    caption: "Bringing the game to life.",
    story: "Esports has taken me from online broadcasts to live events, hosting and commentating games including Call of Duty Mobile and Valorant. Here is a moment from the Realme Regional Wars desk.",
    emoji: "🎤", image: "/images/SideQuests/Esports Shoutcasting/Shoutcasting.jpg", imageAlt: "Two presenters at the Realme Regional Wars broadcast desk",
    tint: "pink", tags: ["Esports", "Hosting"], photoLabel: "SHOUTCASTING",
  },
  {
    id: "03", title: "Homes of Hope", eyebrow: "GIVING BACK",
    caption: "Small acts, shared hope.",
    story: "I founded Homes of Hope to support families in Cebu affected by Super Typhoon Rai, also known as Odette. The initiative provided materials to help rebuild homes for more than 100 families.",
    emoji: "🧩", image: "/images/SideQuests/Fundraisers & Outreaches/Homes of Hope.jpg", imageAlt: "People gathered around a table at a Homes of Hope activity",
    tint: "yellow", tags: ["Outreach", "Community"], photoLabel: "HOMES OF HOPE",
  },
  {
    id: "04", title: "VR Pictionary", eyebrow: "MONASH EVENTS",
    caption: "Drawing outside the lines.",
    story: "A moment from a VR Pictionary event with Monash Nexus for Emerging Technologies, where we brought people together around immersive technology and creative experiences.",
    emoji: "🎮", image: "/images/SideQuests/Monash Events/VR Pictionary Event.jpeg", imageAlt: "At a Monash Nexus for Emerging Technologies VR Pictionary event",
    tint: "blue", tags: ["Monash", "Emerging Technology"], photoLabel: "VR PICTIONARY",
  },
  {
    id: "05", title: "Tier One, together", eyebrow: "THE CREW",
    caption: "Good company, good memories.",
    story: "A group photo from a Tier One Entertainment photoshoot. Esports has introduced me to people across hosting, commentary, and event production.",
    emoji: "💌", image: "/images/SideQuests/Esports Shoutcasting/t1 photoshoot.jpg", imageAlt: "A group at a Tier One Entertainment photoshoot",
    tint: "peach", tags: ["Esports", "Community"], photoLabel: "TIER ONE TEAM",
  },
  {
    id: "06", title: "A Tier One moment", eyebrow: "BEHIND THE MIC",
    caption: "A moment between broadcasts.",
    story: "From a Tier One Entertainment photoshoot, a little snapshot of my journey as an esports commentator and events host.",
    emoji: "✨", image: "/images/SideQuests/Esports Shoutcasting/T1 Entertainment Photoshoot.jpg", imageAlt: "Portrait from a Tier One Entertainment photoshoot",
    tint: "orange", tags: ["Esports", "Hosting"], photoLabel: "TIER ONE PHOTOSHOOT",
  },

];

const decorations = [
  { className: "sq-sticker sq-sticker--star", label: "a five-point star sticker", content: "★" },
  { className: "sq-sticker sq-sticker--heart", label: "a heart sticker", content: "♥" },
  { className: "sq-sticker sq-sticker--flower", label: "a flower sticker", content: "✿" },
  { className: "sq-sticker sq-sticker--spark", label: "a five-point star sticker", content: "★" },
  { className: "sq-sticker sq-sticker--spiral", label: "a spiral sticker", content: "〰" },
];

function MemoryPhoto({ memory, onOpen, index }: {
  memory: ScrapbookMemory;
  onOpen: () => void;
  index: number;
}) {
  return (
    <button
      type="button"
      className={`sq-polaroid sq-polaroid--${index + 1} sq-tint--${memory.tint}`}
      onClick={onOpen}
      aria-label={`Open scrapbook story: ${memory.title}`}
    >
      <span className="sq-tape" aria-hidden="true" />
      <span className="sq-photo">
        {memory.image ? (
          <img src={memory.image} alt="" loading="lazy" />
        ) : (
          <span className="sq-placeholder" aria-hidden="true">
            <span className="sq-placeholder-emoji">{memory.emoji}</span>
            <span className="sq-placeholder-label">{memory.photoLabel}</span>
            <span className="sq-placeholder-hint">more memories soon</span>
          </span>
        )}
        <span className="sq-photo-corner">{memory.eyebrow}</span>
      </span>
      <span className="sq-handwritten sq-polaroid-caption">{memory.caption}</span>
      <span className="sq-polaroid-index">{memory.id} / {String(memories.length).padStart(2, "0")}</span>
    </button>
  );
}

function MemoryModal({ memory, onClose, onPrevious, onNext }: {
  memory: ScrapbookMemory;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrevious();
      if (event.key === "ArrowRight") onNext();
      if (event.key === "Tab") {
        const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault(); last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault(); first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus();
    };
  }, [onClose, onPrevious, onNext]);

  return (
    <div className="sq-modal-backdrop" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <div
        className="sq-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="sq-modal-title"
        aria-describedby="sq-modal-description"
        ref={panelRef}
      >
        <button className="sq-modal-close" type="button" onClick={onClose} ref={closeRef} aria-label="Close story">✕</button>
        <div className={`sq-modal-photo sq-tint--${memory.tint}${memory.id === "06" ? " sq-modal-photo--portrait" : ""}`}>
          {memory.image ? <img src={memory.image} alt={memory.imageAlt ?? memory.title} /> : (
            <div className="sq-modal-placeholder">
              <span aria-hidden="true">{memory.emoji}</span>
              <strong>{memory.photoLabel}</strong>
              <small>more memories soon</small>
            </div>
          )}
          <span className="sq-modal-tape" aria-hidden="true" />
        </div>
        <div className="sq-modal-story">
          <span className="sq-overline">SIDE QUEST #{memory.id} • {memory.eyebrow}</span>
          <h2 id="sq-modal-title">{memory.title}</h2>
          <p className="sq-modal-quote sq-handwritten">“{memory.caption}”</p>
          <p id="sq-modal-description">{memory.story}</p>
          <div className="sq-tag-list">{memory.tags.map((tag) => <span key={tag}>#{tag.replaceAll(" ", "")}</span>)}</div>
          <div className="sq-modal-pagination">
            <button type="button" onClick={onPrevious}>← Previous</button>
            <span>{memory.id} / {String(memories.length).padStart(2, "0")}</span>
            <button type="button" onClick={onNext}>Next →</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SideQuestsPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeModal = () => setActiveIndex(null);
  const previousMemory = () => setActiveIndex((index) => index === null ? null : (index - 1 + memories.length) % memories.length);
  const nextMemory = () => setActiveIndex((index) => index === null ? null : (index + 1) % memories.length);

  return (
    <main className="sq-page">
      <div className="sq-paper-grain" aria-hidden="true" />
      <div className="sq-scrapbook">
        <header className="sq-header">
          <div className="sq-topline"><span>THE UNOFFICIAL FIELD NOTES OF ME</span><span>VOL. 01 / ALWAYS IN PROGRESS</span></div>
          <div className="sq-heading-wrap">
            <span className="sq-heading-asterisk" aria-hidden="true">★</span>
            <h1>SIDE <span>QUESTS</span><i aria-hidden="true">★</i></h1>
            <div className="sq-title-underline" aria-hidden="true" />
            <div className="sq-header-stamp" aria-hidden="true">100%<br />UNSERIOUS</div>
          </div>
          <div className="sq-intro">
            <div className="sq-intro-note"><span className="sq-handwritten">psst... hi! ♡</span><p>When I’m not making things on a screen, I’m probably making memories somewhere else.</p></div>
            <p className="sq-intro-side">A VERY UNOFFICIAL COLLECTION OF<br />PEOPLE, HOBBIES, CHAOS & GOOD TIMES. <span>↓</span></p>
          </div>
        </header>

        <section className="sq-board" aria-label="Click a photo to explore a side quest">
          <img className="sq-sticker sq-sticker--logo" src="/images/SideQuests/Esports Shoutcasting/Personal Logo.png" alt="" aria-hidden="true" draggable={false} />
          <div className="sq-board-stamp" aria-hidden="true">COLLECTED<br />MOMENTS<br /><b>✿</b></div>
          <div className="sq-notecard sq-notecard--one" aria-hidden="true"><span>NOTE TO SELF:</span><strong>do more things<br />that make good<br />stories.</strong><em>↗</em></div>
          <div className="sq-notecard sq-notecard--two" aria-hidden="true"><span>little reminder</span><strong>life's not<br />just a to-do list ♡</strong></div>
          <div className="sq-paper-ticket" aria-hidden="true"><span>ADMIT ONE</span><strong>GOOD TIME</strong><small>★ NO REFUNDS ★</small></div>
          <div className="sq-doodle sq-doodle--left" aria-hidden="true">↝</div>
          <div className="sq-doodle sq-doodle--right" aria-hidden="true">↜</div>
          <div className="sq-doodle sq-doodle--bottom" aria-hidden="true">♡ ♡ ♡</div>
          {decorations.map((decoration) => <span key={decoration.className} className={decoration.className} aria-hidden="true" title={decoration.label}>{decoration.content}</span>)}
          {memories.map((memory, index) => <MemoryPhoto key={memory.id} memory={memory} index={index} onOpen={() => setActiveIndex(index)} />)}
        </section>

        <footer className="sq-footer">
          <span className="sq-footer-squiggle" aria-hidden="true">〰 ✿ 〰</span>
          <p className="sq-handwritten">to be continued...</p>
          <span>MORE SIDE QUESTS UNLOCKING SOON <span aria-hidden="true">★</span></span>
        </footer>
      </div>
      {activeIndex !== null && (
        <MemoryModal memory={memories[activeIndex]} onClose={closeModal} onPrevious={previousMemory} onNext={nextMemory} />
      )}
    </main>
  );
}
