import type { Project } from "../../types/project";

export const eldenThing2 = {
  "slug": "elden-thing-2",
  "title": "Elden Thing 2",
  "tagline": "A collaborative Java text game exploring object-oriented design through autonomous creatures, consumable items, a growing boss and shared spell contracts.",
  "type": "Game Development / Object-Oriented Design",
  "year": "2025",
  "featured": false,
  "shortDescription": "A Java text-based adventure built on an existing engine. My work spans Golden Beetle behaviours, egg interactions, boss composition and spell abstractions.",
  "introduction": [
    "Elden Thing 2 is a turn-based text adventure set in a blighted valley. The player controls a Farmer, navigates a character-based map and interacts with creatures, plants, merchants and combat systems through a menu of actions.",
    "The project developed across successive iterations, starting with movement, resources and terrain interactions before expanding into reproduction, trading, new maps, magic and a growing boss. Our four-person team extended an existing Java engine with game-specific systems.",
    "My contributions include the Golden Beetle and Golden Egg workflows, a reusable following behaviour, boss-part refactoring and a shared Spell interface. The focus was learning how to model changing requirements with interfaces, composition and delegated behaviour, supported by UML diagrams and design rationale."
  ],
  "disciplines": [
    "Game Development",
    "Software Engineering"
  ],
  "roles": [
    "Developer"
  ],
  "responsibilities": [
    "Implemented Golden Beetle wandering, following, reproduction and consumption workflows, integrating with shared team abstractions.",
    "Implemented Golden Egg hatching and stamina restoration, including cursed-ground and occupied-location checks.",
    "Created reusable FollowBehaviour logic using a FOLLOWABLE capability and retained target.",
    "Refactored boss parts into BossPartInterface, BossPart, Branch, Leaf and Growable abstractions, and worked on damage and growth handling.",
    "Introduced a Spell interface and refactored shared magic behaviour within the team implementation.",
    "Documented interactions using UML class and sequence diagrams, design rationale and Javadoc."
  ],
  "skills": [
    "Object-oriented programming",
    "Composition",
    "Interfaces",
    "Polymorphism",
    "Behaviour delegation",
    "UML modelling",
    "Collaborative development"
  ],
  "techStack": {
    "languages": [
      "Java"
    ],
    "gameCreative": [
      "Provided Java game engine"
    ],
    "devops": [
      "Javadoc"
    ]
  },
  "features": [
    "Turn-based navigation with a character map and context-sensitive action menus",
    "Health, stamina, mana and rune-based resources",
    "Golden Beetle wandering, following and egg production",
    "Consumable creatures and eggs with different resource effects",
    "Golden Egg hatching linked to nearby cursed ground",
    "Team-delivered farming, NPC conversations, merchants and weapons",
    "Boss parts with distinct growth, attack and healing responsibilities",
    "Magic actions with mana costs and spell-specific effects"
  ],
  "links": [
    {
      "label": "View source on GitHub",
      "href": "https://github.com/ijf03/Elden-Thing-2",
      "type": "github"
    }
  ],
  "sections": [
    {
      "id": "motivation",
      "title": "Learning design through an evolving game",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "The central challenge was keeping new mechanics manageable as the game expanded. A creature might wander, follow another actor, reproduce, speak or be consumed. Putting every rule into a single actor class would make each addition harder to understand and integrate.",
            "The text interface kept attention on the object model and the flow of a turn. Our work focused on gameplay rules and software structure, using the supplied engine for foundational actors, actions, items and map locations."
          ]
        }
      ]
    },
    {
      "id": "process",
      "title": "From requirements to responsibilities",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "I broke interactions into the objects that hold state, the actions that change it and the behaviours that select an action. For the beetle system, that meant separating the creature, its egg, following logic and consumption rather than treating them as one large feature.",
            "The class diagram helped map dependencies across the engine and game packages. Sequence diagrams then traced individual interactions: how an action becomes available, how it executes and which object changes the player or map. The design rationale compared reuse through inheritance with smaller interfaces and delegated behaviour.",
            "These diagrams record the design process rather than a frozen description of the final code. For example, the early diagram connects GoldenBeetle directly to Actor; the later implementation introduces a shared Creature base and delegates reproduction through a behaviour controller."
          ]
        },
        {
          "type": "gallery",
          "gallery": {
            "layout": "full-width",
            "items": [
              {
                "type": "image",
                "src": "/images/projects/Elden-thing/beetle-egg-design.png",
                "alt": "Early UML design relating Golden Beetle, Golden Egg, following behaviour, consumption and hatching to engine actors, items and locations.",
                "caption": "An early design diagram separates actors, items, actions and behaviours. Class names and inheritance evolved during implementation.",
                "aspectRatio": "landscape"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "beetle-behaviour",
      "title": "A creature that can wander, follow and reproduce",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "I implemented the Golden Beetle as a creature with its own turn counter and interactions. Its reproduction condition becomes eligible every five turns, while a controller chooses among registered behaviours such as following, reproduction and wandering.",
            "My reusable FollowBehaviour scans neighbouring locations for an actor marked FOLLOWABLE and retains that target while it remains on the map. It chooses an enterable neighbouring tile by distance to the target, returning a movement action for the engine to execute. This keeps target tracking and movement selection separate from the beetle itself.",
            "Checking a capability instead of a specific player class allows the same behaviour to recognise other followable actors. The trade-off is that priorities and capability assignments need to stay consistent as the team adds new creatures and behaviour-selection modes."
          ]
        }
      ]
    },
    {
      "id": "consumption",
      "title": "One interaction, different resource effects",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "A beetle is an actor and an egg is an item, but both can participate in the shared Consumable contract. ConsumeAction delegates to the selected entity, allowing each implementation to apply its own effect and cleanup without duplicating the menu-action structure.",
            "Consuming a Golden Beetle removes it from the map, restores 15 health and grants 1,000 runes. Consuming a Golden Egg removes it from the inventory and restores 20 stamina. I implemented these entity-specific workflows and integrated them with the shared consumption code as the team refined its interfaces.",
            "Tracing both sequences made an important distinction explicit: removing a consumed actor is a map operation, while removing a carried egg is an inventory operation. Similar player interactions can require different changes to the underlying game state."
          ]
        },
        {
          "type": "gallery",
          "gallery": {
            "layout": "two-column",
            "items": [
              {
                "type": "image",
                "src": "/images/projects/Elden-thing/consume-beetle-sequence.png",
                "alt": "Sequence diagram for consuming a Golden Beetle, restoring health, granting runes and removing the actor.",
                "caption": "Design sequence: consuming a beetle restores 15 health, awards 1,000 runes and removes it from the map.",
                "aspectRatio": "landscape"
              },
              {
                "type": "image",
                "src": "/images/projects/Elden-thing/consume-egg-sequence.png",
                "alt": "Sequence diagram for consuming a Golden Egg, restoring stamina and removing the inventory item.",
                "caption": "Design sequence: consuming an inventory egg restores 20 stamina and removes the item.",
                "aspectRatio": "landscape"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "hatching",
      "title": "Making hatching depend on the environment",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "The Golden Egg uses its ground tick to check whether it can hatch. The inspected implementation looks for neighbouring cursed ground and checks occupancy before replacing the egg with a new Golden Beetle. A carried egg instead offers a consumption action.",
            "I changed the environmental check to use the CURSED capability rather than a display character. This separates the rule from the map symbol: another ground type can participate by carrying the same capability.",
            "An early hatching sequence included a three-turn condition. The later Golden Egg implementation uses an environmental condition without that timer, so the case study describes the implemented rule. Reviewing the diagram against the code highlighted why design documentation needs to evolve alongside behaviour."
          ]
        }
      ]
    },
    {
      "id": "composition",
      "title": "A growing boss built from parts",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "The Bed of Chaos introduced a different modelling problem: its strength changes as branches and leaves are added. I refactored the part structure into a shared BossPartInterface, a base BossPart implementation and specialised Branch and Leaf classes.",
            "BossPart manages child components, while individual parts expose attack and healing contributions. Branches can create new parts; leaves represent a different contribution. This makes the tree structure explicit and provides a place for new part types without putting every effect directly into the attack action.",
            "I also worked on the boss's base-damage and growth handling. The gameplay log shows branches and leaves appearing during a turn. The implementation remains an area for further verification: the base part class has recursive aggregation helpers, while the inspected boss attack path sums immediate children. Nested growth and healing need focused tests before claiming that every intended tree rule is satisfied."
          ]
        },
        {
          "type": "gallery",
          "gallery": {
            "layout": "full-width",
            "items": [
              {
                "type": "image",
                "src": "/images/projects/Elden-thing/action update and details.png",
                "alt": "Console turn log showing boss branches and leaves growing, NPC movement and a combat result above the updated map.",
                "caption": "A turn log makes changes visible: boss growth, creature movement and combat results appear before the refreshed map.",
                "aspectRatio": "landscape"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "magic",
      "title": "A common contract for different spells",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "My Spell interface defines cast and getManaCost operations so magic implementations can expose their effects through a common contract. The casting action checks the player's mana, deducts the cost when sufficient and invokes the item's cast operation.",
            "This contribution sits within the team's broader magic system. It helped make the boundary between resource handling and spell effects clearer, while supporting different magical items through shared operations."
          ]
        }
      ]
    },
    {
      "id": "collaboration",
      "title": "Integrating features in a shared codebase",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "The beetle and egg features overlap with other creatures' reproduction and consumption systems. I worked with shared interfaces and revised the feature as teammates changed rune balances, actor capabilities and behaviour controllers.",
            "Our design rationale records the trade-offs behind this approach. Small interfaces support reuse across otherwise different entities, but they also add types to maintain. Controllers make behaviour selection reusable, but require explicit priorities. Capability checks reduce dependence on concrete classes, but only work reliably when capabilities are assigned consistently.",
            "The complete game is a team result. My work centres on beetle and egg interactions, following behaviour, boss refactoring and spell abstractions; other contributors developed and integrated additional terrain, merchants, dialogue, combat and magic features."
          ]
        }
      ]
    },
    {
      "id": "outcome",
      "title": "Practical object-oriented design experience",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "This project gave me experience turning gameplay requirements into collaborating Java objects and revisiting those choices as the system grew. Interfaces, composition and behaviour delegation became concrete tools for managing changes rather than just terminology.",
            "The supplied screenshots demonstrate the console presentation and turn feedback, while UML and Javadoc explain the intended structure. Automated gameplay tests were not verified for this case study. Useful next checks would target reproduction timing, occupied hatching locations, consumption cleanup and recursive boss calculations."
          ]
        }
      ]
    }
  ],
  "deploymentStatus": "Local Java console application",
  "team": [
    "Collaborative four-person project"
  ],
  "coverImage": "/images/projects/Elden-thing/startup.png",
  "heroGallery": {
    "layout": "full-width",
    "items": [
      {
        "type": "image",
        "src": "/images/projects/Elden-thing/startup.png",
        "alt": "Elden Thing title, character map, rune balance and paginated movement menu.",
        "caption": "The console interface presents the map, resources and available actions for the current turn.",
        "aspectRatio": "landscape"
      }
    ]
  }
} satisfies Project;
