export type MediaAsset = {
  id: string;
  title: string;
  src: string;
  alt: string;
  promptSummary: string;
};

export type Service = {
  slug: string;
  title: string;
  navTitle: string;
  kicker: string;
  summary: string;
  pageLead: string;
  assetId: string;
  galleryAssetIds: string[];
  capabilities: string[];
  sectors: string[];
  details: { label: string; text: string }[];
  proof: string[];
};

export const company = {
  name: "ZASHE MANAGEMENT LTD",
  companyNumber: "17221503",
  status: "Active private limited company",
  registeredOffice: "Flat 1, 113 Earlham Grove, London, England, E7 9AP",
  registeredIn: "England and Wales",
  email: "projects@zashe-management.co.uk",
  phone: "+44 20 0000 0000",
  sic: "43999 - Other specialised construction activities not elsewhere classified"
};

export const mediaAssets: MediaAsset[] = [
  {
    id: "hero",
    title: "Branded commercial construction site",
    src: "/media/hero-zashe-site.png",
    alt: "Synthetic ZASHE branded commercial construction site with plant, steel frame and PPE team.",
    promptSummary: "Cinematic UK commercial construction site with ZASHE hoarding, plant, PPE and steel frame."
  },
  {
    id: "commercial",
    title: "Commercial construction management",
    src: "/media/commercial-frame.png",
    alt: "Synthetic commercial steel frame project with supervisors coordinating drawings and MEP zones.",
    promptSummary: "Commercial steel frame and MEP coordination with ZASHE site management."
  },
  {
    id: "domestic",
    title: "Domestic build and refurbishment",
    src: "/media/domestic-extension.png",
    alt: "Synthetic UK domestic house extension under construction with tidy brickwork and roof timbers.",
    promptSummary: "Residential extension and refurbishment stage with safe, tidy site practice."
  },
  {
    id: "civil",
    title: "Civil engineering and groundworks",
    src: "/media/civil-engineering.png",
    alt: "Synthetic civil engineering works with drainage trench, kerb lines, plant and PPE team.",
    promptSummary: "Groundworks, drainage, kerbs and compact plant on an organised UK site."
  },
  {
    id: "shuttering",
    title: "Shuttering carpentry",
    src: "/media/shuttering-carpentry.png",
    alt: "Synthetic shuttering carpenters assembling formwork and reinforced concrete preparation.",
    promptSummary: "Formwork, rebar and shuttering carpentry trade package."
  },
  {
    id: "drylining",
    title: "Drylining and fit-out",
    src: "/media/drylining-fitout.png",
    alt: "Synthetic dryliners installing metal stud partitions, plasterboard and ceiling framing.",
    promptSummary: "Drylining, partitions, ceilings and commercial interior package control."
  },
  {
    id: "polishing",
    title: "Polishing and finishes",
    src: "/media/polishing-finishes.png",
    alt: "Synthetic floor polishing and finishing work in a commercial interior.",
    promptSummary: "Polished concrete or stone finishing with dust control and quality checks."
  },
  {
    id: "painting",
    title: "Painting and decorating",
    src: "/media/painting-decorating.png",
    alt: "Synthetic painters and decorators applying final coats in a protected interior.",
    promptSummary: "Final painting and decorating with protected finishes and clean working standards."
  },
  {
    id: "fleet",
    title: "Fleet and equipment",
    src: "/media/fleet-equipment.png",
    alt: "Synthetic ZASHE branded vans, compact plant and equipment staged in a construction yard.",
    promptSummary: "Branded fleet, plant, equipment and site logistics dispatch."
  },
  {
    id: "management",
    title: "Management and safety",
    src: "/media/management-safety.png",
    alt: "Synthetic site management team reviewing RAMS, drawings and tablet in a site briefing.",
    promptSummary: "Site management, safety briefing, RAMS folder and planning coordination."
  },
  {
    id: "commercialLondonFrame",
    title: "London commercial frame package",
    src: "/media/services/commercial-london-frame.png",
    alt: "Synthetic London commercial steel frame site with ZASHE hoarding, PPE team and distant skyline.",
    promptSummary: "Commercial frame package with distant London skyline context and UK site signage."
  },
  {
    id: "commercialFitoutLogistics",
    title: "Commercial fit-out logistics",
    src: "/media/services/commercial-fitout-logistics.png",
    alt: "Synthetic London office shell fit-out with ZASHE supervisors, materials and delivery route signage.",
    promptSummary: "Interior commercial fit-out logistics with raised floor, MEP zones and site management."
  },
  {
    id: "domesticTerraceExtension",
    title: "London terrace extension",
    src: "/media/services/domestic-terrace-extension.png",
    alt: "Synthetic East London terrace extension with brickwork, propping, scaffold tower and ZASHE sign.",
    promptSummary: "Victorian terrace rear extension with UK brickwork and protected site routes."
  },
  {
    id: "domesticRefurbProtection",
    title: "Domestic refurbishment protection",
    src: "/media/services/domestic-refurb-protection.png",
    alt: "Synthetic domestic refurbishment with protected floors, dust screens and ZASHE progress briefing.",
    promptSummary: "Residential refurbishment with dust protection, plasterboard and homeowner communication."
  },
  {
    id: "civilDrainageLondon",
    title: "London drainage and kerbs",
    src: "/media/services/civil-drainage-london.png",
    alt: "Synthetic London drainage works with trench boxes, kerbs, plant and distant landmark context.",
    promptSummary: "Groundworks, drainage, kerbing and trench safety in a London infrastructure setting."
  },
  {
    id: "civilExternalWorks",
    title: "External works and surfacing",
    src: "/media/services/civil-external-works.png",
    alt: "Synthetic UK external works with tactile paving, kerbs, gully pots, dumper and ZASHE folder.",
    promptSummary: "External works, tactile paving, drainage channels and setting-out details."
  },
  {
    id: "shutteringFormworkDetail",
    title: "Formwork detail",
    src: "/media/services/shuttering-formwork-detail.png",
    alt: "Synthetic shuttering carpentry formwork with rebar, props, clamps and ZASHE tool chest.",
    promptSummary: "Detailed formwork, rebar and pre-pour preparation on a concrete frame site."
  },
  {
    id: "shutteringTeamProfile",
    title: "Shuttering team profile",
    src: "/media/services/shuttering-team-profile.png",
    alt: "Synthetic ZASHE shuttering carpentry team beside completed formwork and pre-pour checklist.",
    promptSummary: "Worker-profile style image of skilled shuttering carpenters and quality sign-off."
  },
  {
    id: "dryliningPartitions",
    title: "Drylining partitions",
    src: "/media/services/drylining-partitions.png",
    alt: "Synthetic commercial drylining with metal studs, plasterboard, ceiling grid and fire line labels.",
    promptSummary: "Drylining package with partitions, ceilings, acoustic insulation and UK fire details."
  },
  {
    id: "dryliningSettingOut",
    title: "Drylining setting out",
    src: "/media/services/drylining-setting-out.png",
    alt: "Synthetic drylining setting-out detail with laser line, metal track and ZASHE method statement folder.",
    promptSummary: "Close detail of partition layout, acoustic sealant, track and setting-out control."
  },
  {
    id: "polishingFloorFinish",
    title: "Polished floor finish",
    src: "/media/services/polishing-floor-finish.png",
    alt: "Synthetic ZASHE polishing team finishing a concrete floor with grinder, extractor and QA light.",
    promptSummary: "Commercial floor polishing with dust control, edge work and finish inspection."
  },
  {
    id: "polishingFinishSchedule",
    title: "Finish schedule and samples",
    src: "/media/services/polishing-finish-schedule.png",
    alt: "Synthetic polishing sample board, grit pads, sealant tins and ZASHE finish schedule.",
    promptSummary: "Close detail of finish samples, polishing pads and quality schedule."
  },
  {
    id: "paintingCommercialFinish",
    title: "Commercial painting finish",
    src: "/media/services/painting-commercial-finish.png",
    alt: "Synthetic commercial painting site with protected floors, masked glazing and ZASHE painters.",
    promptSummary: "Commercial painting, decorating, protection and snagging before handover."
  },
  {
    id: "paintingDomesticPeriod",
    title: "Period-home decorating",
    src: "/media/services/painting-domestic-period.png",
    alt: "Synthetic London period-home decorating with protected cornices, sash windows and ZASHE painter.",
    promptSummary: "Domestic period-property painting with protection, prep and careful cutting in."
  },
  {
    id: "fleetYardDispatch",
    title: "Fleet yard dispatch",
    src: "/media/services/fleet-yard-dispatch.png",
    alt: "Synthetic ZASHE depot with branded vans, plant, stillages, barriers and daily check sheets.",
    promptSummary: "Fleet, plant, equipment and dispatch checks in an East London yard."
  },
  {
    id: "fleetLogisticsProfile",
    title: "Plant logistics profile",
    src: "/media/services/fleet-logistics-profile.png",
    alt: "Synthetic ZASHE site logistics with telehandler, flatbed van, banksman and exclusion zone cones.",
    promptSummary: "Material movement, banksman coordination and plant logistics at a London site entrance."
  }
];

export const services: Service[] = [
  {
    slug: "commercial-construction",
    title: "Commercial Construction",
    navTitle: "Commercial",
    kicker: "Frames, fit-out, logistics",
    summary: "Management of commercial packages from structural stages through MEP coordination, interiors, finishes and handover support.",
    pageLead: "Commercial buyers need more than labour. They need sequencing, site discipline, reporting, access planning and trades that understand the pressure of live programmes.",
    assetId: "commercial",
    galleryAssetIds: ["commercial", "commercialLondonFrame", "commercialFitoutLogistics", "management"],
    capabilities: ["Structural frame coordination", "Fit-out logistics", "MEP interface support", "Site reporting", "Material movement plans", "Handover and snagging support"],
    sectors: ["Office shells", "Retail units", "Mixed-use developments", "Landlord works", "Commercial refurbishments", "Package support for principal contractors"],
    details: [
      { label: "Typical scope", text: "Frame-stage support, logistics, drylining interfaces, finishes, temporary works coordination and site-management cover." },
      { label: "UK site language", text: "RAMS, inductions, PPE zones, permits, delivery booking, access routes, snag lists and handover packs." },
      { label: "Client value", text: "One accountable management layer that keeps trades, plant, material deliveries and quality checks moving together." }
    ],
    proof: ["London commercial visual language", "ZASHE branded hoarding and PPE", "No fake client project claims"]
  },
  {
    slug: "domestic-works",
    title: "Domestic Works",
    navTitle: "Domestic",
    kicker: "Extensions, refurbishments",
    summary: "Tidy, controlled domestic build management for extensions, refurbishments, structural alterations and finishing packages.",
    pageLead: "Domestic work succeeds when the build is tidy, communication is direct, and protection is treated as seriously as the structure.",
    assetId: "domestic",
    galleryAssetIds: ["domestic", "domesticTerraceExtension", "domesticRefurbProtection", "paintingDomesticPeriod"],
    capabilities: ["House extensions", "Refurbishment coordination", "Structural opening support", "Protection and dust control", "Finishes and decorating", "Resident communication"],
    sectors: ["Terraced homes", "Flats and maisonettes", "Landlord refurbishments", "Extensions", "Internal alterations", "Pre-sale improvement works"],
    details: [
      { label: "Typical scope", text: "Extensions, plasterboard, decorating, minor structural works, protection, material planning and final finishes." },
      { label: "UK materials", text: "London stock brick, blockwork, rooflights, plasterboard, dust screens, timber protection and period-detail prep." },
      { label: "Client value", text: "A cleaner, more controlled domestic site that respects neighbours, access, protection and day-to-day communication." }
    ],
    proof: ["Residential London context", "Tidy route protection", "Careful language for homeowners"]
  },
  {
    slug: "civil-engineering",
    title: "Civil Engineering",
    navTitle: "Civil",
    kicker: "Groundworks, drainage, kerbs",
    summary: "Civil and enabling works including site preparation, drainage runs, kerb lines, compacted sub-base and external works coordination.",
    pageLead: "Civil packages need practical controls: safe excavation, clean levels, service awareness, pedestrian routes and plant that fits constrained London sites.",
    assetId: "civil",
    galleryAssetIds: ["civil", "civilDrainageLondon", "civilExternalWorks", "fleetLogisticsProfile"],
    capabilities: ["Drainage runs", "Inspection chambers", "Kerbs and edgings", "Compacted sub-base", "External works", "Plant and pedestrian coordination"],
    sectors: ["Commercial sites", "Residential developments", "External works", "Service yards", "Access routes", "Urban enabling works"],
    details: [
      { label: "Typical scope", text: "Trenching, drainage, duct routes, kerbing, gully pots, tactile paving, surfacing prep and external works." },
      { label: "UK site language", text: "CAT scanning, trench boxes, cones, barriers, pedestrian routes, level checks and temporary access plans." },
      { label: "Client value", text: "Groundworks and external works delivered with practical safety controls and clear interfaces for follow-on trades." }
    ],
    proof: ["London infrastructure setting", "Trench and pedestrian-route controls", "No utility-company logo claims"]
  },
  {
    slug: "shuttering-carpenters",
    title: "Shuttering Carpenters",
    navTitle: "Shuttering",
    kicker: "Formwork and concrete prep",
    summary: "Specialist shuttering carpentry teams for formwork, reinforcement preparation, concrete pours and frame-stage coordination.",
    pageLead: "Good formwork is measured before the concrete arrives. Zashe presents shuttering as a disciplined trade package, not a last-minute labour fill.",
    assetId: "shuttering",
    galleryAssetIds: ["shuttering", "shutteringFormworkDetail", "shutteringTeamProfile", "commercialLondonFrame"],
    capabilities: ["Timber formwork", "Phenolic ply systems", "Rebar interface checks", "Props and clamps", "Pre-pour checklists", "Concrete-frame support"],
    sectors: ["Concrete frames", "Basements", "Cores and walls", "Slabs and upstands", "Temporary works support", "Specialist labour packages"],
    details: [
      { label: "Typical scope", text: "Formwork assembly, stop ends, props, setting-out lines, pre-pour inspection and concrete preparation." },
      { label: "UK materials", text: "Phenolic ply, C16/C24 timber, rebar caps, props, clamps, release agents and pre-pour quality folders." },
      { label: "Client value", text: "A shuttering package that foregrounds tolerance, edge safety, pre-pour readiness and clean handover to concrete teams." }
    ],
    proof: ["Trade-profile imagery", "Rebar and formwork detail", "Quality sign-off story"]
  },
  {
    slug: "dryliners",
    title: "Dryliners",
    navTitle: "Dryliners",
    kicker: "Partitions and ceilings",
    summary: "Drylining, metal stud partitions, ceilings, insulation and plasterboard packages for shell, core and fit-out projects.",
    pageLead: "Drylining is the geometry of the interior. Zashe frames it around accurate setting out, board control, acoustic intent and fire-conscious details.",
    assetId: "drylining",
    galleryAssetIds: ["drylining", "dryliningPartitions", "dryliningSettingOut", "commercialFitoutLogistics"],
    capabilities: ["Metal stud partitions", "Plasterboard installation", "Ceiling grids", "Acoustic insulation", "Setting out", "Fire stopping interfaces"],
    sectors: ["Office fit-outs", "Retail units", "Residential interiors", "Landlord shells", "Corridors and cores", "Refurbishment projects"],
    details: [
      { label: "Typical scope", text: "Track setting, studs, plasterboard, acoustic insulation, ceilings, openings, reveals and ready-for-finish checks." },
      { label: "UK site language", text: "Fire lines, setting-out marks, method statements, access platforms, board storage and sequencing." },
      { label: "Client value", text: "Interior packages delivered with line, level, fire/acoustic awareness and fewer downstream clashes." }
    ],
    proof: ["Material-detail imagery", "Commercial interior realism", "Fire and acoustic interface language"]
  },
  {
    slug: "polishers",
    title: "Polishers",
    navTitle: "Polishers",
    kicker: "Floors and fine finishing",
    summary: "Polishing and surface-finishing packages for concrete, stone and specialist interior finishes with inspection-led quality control.",
    pageLead: "Polishing is not decoration at the end. It is a controlled sequence of preparation, grit, dust management, edge work, samples and final inspection.",
    assetId: "polishing",
    galleryAssetIds: ["polishing", "polishingFloorFinish", "polishingFinishSchedule", "paintingCommercialFinish"],
    capabilities: ["Concrete polishing", "Stone and surface finishing", "Dust extraction", "Edge detailing", "Sample boards", "Finish schedules"],
    sectors: ["Commercial lobbies", "Retail shells", "Residential interiors", "Common parts", "Feature floors", "Stair and edge details"],
    details: [
      { label: "Typical scope", text: "Grinding, polishing, edge work, sealing, sample checks, protection and final finish inspections." },
      { label: "UK materials", text: "Concrete, stone, sealers, diamond pads, grit discs, moisture meters, masking and protection systems." },
      { label: "Client value", text: "A finishing package managed around samples, surface protection and a clear sign-off point." }
    ],
    proof: ["Close material details", "Dust-control equipment", "Quality-check imagery"]
  },
  {
    slug: "painters",
    title: "Painters",
    navTitle: "Painters",
    kicker: "Final coatings",
    summary: "Painting and decorating teams for protected final finishes, snagging cycles, colour coordination and handover readiness.",
    pageLead: "Paint is what clients see first at handover. Zashe positions decorating around protection, prep, clean cutting-in and snag discipline.",
    assetId: "painting",
    galleryAssetIds: ["painting", "paintingCommercialFinish", "paintingDomesticPeriod", "domesticRefurbProtection"],
    capabilities: ["Commercial decorating", "Domestic decorating", "Mist coats and final coats", "Protection systems", "Colour samples", "Snagging cycles"],
    sectors: ["Offices", "Retail", "Homes", "Common parts", "Period properties", "Post-refurbishment handovers"],
    details: [
      { label: "Typical scope", text: "Preparation, masking, filling, sanding, mist coats, final coats, snagging, protection and handover cleaning." },
      { label: "UK materials", text: "Dust sheets, masking, filler, sanding extraction, heritage colour samples, roller/sprayer systems and wet paint controls." },
      { label: "Client value", text: "Cleaner final finishes with fewer return visits because protection, prep and snagging are planned from the start." }
    ],
    proof: ["Commercial and domestic finish scenes", "Period-home detail", "Protected final-stage work"]
  },
  {
    slug: "fleet-and-plant",
    title: "Fleet and Plant",
    navTitle: "Fleet",
    kicker: "Equipment coordination",
    summary: "Own fleet and coordinated equipment planning for vans, compact plant, access, material movement and site logistics.",
    pageLead: "Plant, vehicles and deliveries can make or break a London site. Zashe presents equipment as part of the management system, not an afterthought.",
    assetId: "fleet",
    galleryAssetIds: ["fleet", "fleetYardDispatch", "fleetLogisticsProfile", "civilExternalWorks"],
    capabilities: ["Branded vans", "Compact plant", "Material movement", "Banksman coordination", "Daily checks", "Access and delivery planning"],
    sectors: ["Constrained London sites", "Commercial works", "Domestic refurbishments", "Civil packages", "Fit-out logistics", "Multi-trade mobilisation"],
    details: [
      { label: "Typical scope", text: "Vehicle planning, equipment dispatch, delivery notes, exclusion zones, stillage movement and access sequencing." },
      { label: "UK site language", text: "Daily checks, banksman control, delivery routes, plant movement, cones, barriers and material laydown areas." },
      { label: "Client value", text: "Plant and fleet planning that reduces site friction, keeps public interfaces controlled and supports trade productivity." }
    ],
    proof: ["Branded fleet imagery", "Operational yard story", "Safe lifting and movement language"]
  }
];

export const stages = [
  "Enquiry and scope review",
  "Site visit and feasibility check",
  "RAMS, programme and resourcing",
  "Trade package mobilisation",
  "Daily site coordination",
  "Quality checks and handover"
];

export const complianceNotes = [
  "Compliance documentation is available on request and confirmed for each project before mobilisation.",
  "PAYE/CIS, insurance, RAMS, CSCS/competency records and SSIP/Constructionline/CHAS-type requirements are handled project-by-project where applicable.",
  "No accreditation, membership or insurance level is claimed on this website unless verified documentation is supplied."
];

export const brandKit = [
  { label: "Primary mark", text: "Block Z monogram, amber-to-orange safety gradient, graphite surround." },
  { label: "Site colours", text: "Graphite, concrete grey, ZASHE navy, safety amber, site orange and high-vis yellow." },
  { label: "Media rule", text: "Synthetic commissioned brand media only. No third-party client work, badges or approvals are implied." },
  { label: "Favicon set", text: "Local SVG favicon included for browser tabs, bookmarks and launch previews." }
];
