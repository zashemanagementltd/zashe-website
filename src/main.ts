import * as THREE from "three";
import "./styles.css";
import { brandKit, company, complianceNotes, mediaAssets, services, stages, type Service } from "./siteData";

type SceneState = "hero" | "commercial" | "civil" | "fleet" | "management";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) {
  throw new Error("Missing #app root");
}

const asset = (id: string) => {
  const found = mediaAssets.find((item) => item.id === id);
  if (!found) {
    throw new Error(`Missing media asset: ${id}`);
  }
  return found;
};

const serviceByPath = () => {
  const match = window.location.pathname.match(/^\/services\/([^/]+)\/?$/);
  return match ? services.find((service) => service.slug === match[1]) : undefined;
};

const internalPath = (href: string) => {
  try {
    const url = new URL(href, window.location.origin);
    return url.origin === window.location.origin ? `${url.pathname}${url.hash}` : "";
  } catch {
    return "";
  }
};

const listMarkup = (items: string[], className = "") =>
  items.map((item) => `<li class="${className}">${item}</li>`).join("");

const renderHeader = () => `
  <header class="site-header" aria-label="Primary navigation">
    <a class="brand" href="/" aria-label="${company.name} home">
      <img src="/brand/logo-horizontal-on-dark.svg" alt="${company.name}" />
    </a>
    <nav>
      <a href="/#services">Services</a>
      <a href="/#delivery">Delivery</a>
      <a href="/#brand-kit">Media kit</a>
      <a href="/#compliance">Compliance</a>
      <a class="nav-cta" href="/#quote">Request quote</a>
    </nav>
  </header>
`;

const renderFooter = () => `
  <footer class="site-footer">
    <div>
      <strong>${company.name}</strong>
      <p>Company number ${company.companyNumber}. Registered in ${company.registeredIn}. Registered office: ${company.registeredOffice}.</p>
      <p>${company.status}. ${company.sic}.</p>
    </div>
    <div>
      <p>Contact placeholders: <a href="mailto:${company.email}">${company.email}</a> / <a href="tel:${company.phone.replaceAll(" ", "")}">${company.phone}</a></p>
      <p>Synthetic commissioned website imagery. London landmarks and UK street context are atmospheric only; no third-party client work, landmark project, certification or accreditation is implied.</p>
    </div>
  </footer>
`;

const renderQuote = (selectedService?: Service) => `
  <section class="quote" id="quote" data-scene="management">
    <div class="quote__intro">
      <p class="eyebrow">Project enquiry</p>
      <h2>Send the package. Get a structured response.</h2>
      <p>
        Use the form for early pricing, trade packages, site visits, domestic works, civil packages or commercial management support. File upload is a placeholder for a future backend; include drawing links in the message for now.
      </p>
    </div>
    <form id="quote-form" novalidate>
      <div class="form-grid">
        <label>Name<input name="name" autocomplete="name" required /></label>
        <label>Company<input name="company" autocomplete="organization" /></label>
        <label>Email<input name="email" type="email" autocomplete="email" required /></label>
        <label>Phone<input name="phone" type="tel" autocomplete="tel" required /></label>
        <label>Project postcode / location<input name="location" autocomplete="postal-code" required /></label>
        <label>
          Sector
          <select name="sector" required>
            <option value="">Select sector</option>
            <option>Commercial</option>
            <option>Domestic</option>
            <option>Civil engineering</option>
            <option>Specialist trade package</option>
          </select>
        </label>
        <label>
          Required service / trade
          <select name="service" required>
            <option value="">Select service</option>
            ${services.map((service) => `<option ${selectedService?.slug === service.slug ? "selected" : ""}>${service.title}</option>`).join("")}
          </select>
        </label>
        <label>
          Project stage
          <select name="stage" required>
            <option value="">Select stage</option>
            <option>Idea / early feasibility</option>
            <option>Drawings available</option>
            <option>Tender / pricing</option>
            <option>Ready to mobilise</option>
            <option>Rescue / urgent support</option>
          </select>
        </label>
        <label>Target deadline<input name="deadline" type="date" /></label>
        <label>
          Budget range
          <select name="budget">
            <option value="">Not confirmed</option>
            <option>Under GBP 25k</option>
            <option>GBP 25k - GBP 100k</option>
            <option>GBP 100k - GBP 500k</option>
            <option>GBP 500k+</option>
          </select>
        </label>
        <label class="form-grid__wide">Drawings / photos placeholder<input name="files" type="file" multiple /></label>
        <label class="form-grid__wide">Message<textarea name="message" rows="5" required></textarea></label>
      </div>
      <label class="consent">
        <input name="consent" type="checkbox" required />
        I consent to ZASHE MANAGEMENT LTD using these details to respond to this enquiry.
      </label>
      <p class="form-status" role="status" aria-live="polite"></p>
      <button class="button button--primary" type="submit">Prepare enquiry email</button>
    </form>
  </section>
`;

const renderServiceCard = (service: Service) => {
  const image = asset(service.assetId);
  return `
    <a class="service-card" href="/services/${service.slug}" data-stage="${service.assetId === "civil" ? "civil" : service.assetId === "fleet" ? "fleet" : "commercial"}">
      <img src="${image.src}" alt="${image.alt}" loading="lazy" />
      <div class="service-card__body">
        <span>${service.kicker}</span>
        <h3>${service.title}</h3>
        <p>${service.summary}</p>
        <strong>Open service page</strong>
      </div>
    </a>
  `;
};

const renderHome = () => {
  const stageMarkup = stages
    .map(
      (stage, index) => `
        <li>
          <span>${String(index + 1).padStart(2, "0")}</span>
          <strong>${stage}</strong>
        </li>
      `
    )
    .join("");

  const brandMarkup = brandKit
    .map(
      (item) => `
        <article>
          <span>${item.label}</span>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");

  return `
    ${renderHeader()}
    <main id="top">
      <section class="hero" data-scene="hero">
        <canvas id="site-scene" aria-label="Animated 3D construction structure"></canvas>
        <div class="hero__media" aria-hidden="true">
          <img src="${asset("hero").src}" alt="" />
        </div>
        <div class="hero__content">
          <p class="eyebrow">London construction management / specialist trades</p>
          <h1>Build control from groundworks to finish.</h1>
          <p class="hero__lead">
            ZASHE MANAGEMENT LTD coordinates commercial, domestic and civil engineering works with skilled trade packages, plant logistics and site management under one disciplined delivery structure.
          </p>
          <div class="hero__actions">
            <a class="button button--primary" href="/#quote">Price a project</a>
            <a class="button button--ghost" href="/#services">View service pages</a>
          </div>
        </div>
        <aside class="hero__panel" aria-label="Company snapshot">
          <span>Company No. ${company.companyNumber}</span>
          <strong>${company.status}</strong>
          <p>${company.sic}</p>
        </aside>
      </section>

      <section class="cred-strip" aria-label="Delivery commitments">
        <p><strong>Commercial</strong><span>Frame, fit-out and site coordination</span></p>
        <p><strong>Domestic</strong><span>Extensions, refurbishments and finishing</span></p>
        <p><strong>Civil</strong><span>Groundworks, drainage and external works</span></p>
        <p><strong>Trades</strong><span>Drylining, shuttering, painting, polishing</span></p>
      </section>

      <section class="section section--intro" id="services" data-scene="commercial">
        <div class="section__heading">
          <p class="eyebrow">Dedicated service pages</p>
          <h2>Every package now has its own visual story.</h2>
        </div>
        <p class="section__copy">
          The home page is now a gateway into detailed service pages. Each page uses ZASHE-branded synthetic photography with London context, UK materials, site signs, workers, fleet and trade-specific delivery language.
        </p>
      </section>

      <section class="service-grid" aria-label="Zashe services">
        ${services.map(renderServiceCard).join("")}
      </section>

      <section class="delivery" id="delivery" data-scene="civil">
        <div class="delivery__image">
          <img src="${asset("management").src}" alt="${asset("management").alt}" loading="lazy" />
        </div>
        <div class="delivery__content">
          <p class="eyebrow">Managed delivery</p>
          <h2>From first enquiry to controlled handover.</h2>
          <p>
            Zashe can support project teams, homeowners, principal contractors and commercial clients with a practical route from scope to mobilisation, daily coordination and close-out.
          </p>
          <ol>${stageMarkup}</ol>
        </div>
      </section>

      <section class="fleet" id="fleet" data-scene="fleet">
        <div>
          <p class="eyebrow">Plant, people, programme</p>
          <h2>Equipment and labour planned as one system.</h2>
          <p>
            Fleet, access, materials and trade labour are coordinated around programme logic, London access constraints, safe movement and practical delivery windows.
          </p>
        </div>
        <img src="${asset("fleet").src}" alt="${asset("fleet").alt}" loading="lazy" />
      </section>

      <section class="brand-kit" id="brand-kit">
        <div>
          <p class="eyebrow">Media kit</p>
          <h2>Built as a brand system, not loose stock.</h2>
        </div>
        <div class="brand-kit__items">${brandMarkup}</div>
      </section>

      ${renderCompliance()}
      ${renderQuote()}
    </main>
    ${renderFooter()}
  `;
};

const renderCompliance = () => `
  <section class="compliance" id="compliance" data-scene="management">
    <div class="section__heading">
      <p class="eyebrow">Conservative compliance wording</p>
      <h2>Clear on obligations. Careful on claims.</h2>
    </div>
    <ul>${complianceNotes.map((note) => `<li>${note}</li>`).join("")}</ul>
  </section>
`;

const renderServicePage = (service: Service) => {
  const hero = asset(service.galleryAssetIds[0] ?? service.assetId);
  const gallery = service.galleryAssetIds
    .map((assetId, index) => {
      const image = asset(assetId);
      return `
        <figure class="service-gallery__item ${index === 0 ? "service-gallery__item--large" : ""}">
          <img src="${image.src}" alt="${image.alt}" loading="${index === 0 ? "eager" : "lazy"}" />
          <figcaption>
            <span>${image.title}</span>
            <p>${image.promptSummary}</p>
          </figcaption>
        </figure>
      `;
    })
    .join("");

  const siblingLinks = services
    .map((item) => `<a class="${item.slug === service.slug ? "is-active" : ""}" href="/services/${item.slug}">${item.navTitle}</a>`)
    .join("");

  return `
    ${renderHeader()}
    <main id="top" class="service-page">
      <section class="service-hero">
        <div class="service-hero__image">
          <img src="${hero.src}" alt="${hero.alt}" />
        </div>
        <div class="service-hero__content">
          <a class="back-link" href="/#services">All services</a>
          <p class="eyebrow">${service.kicker}</p>
          <h1>${service.title}</h1>
          <p>${service.pageLead}</p>
          <div class="service-hero__actions">
            <a class="button button--primary" href="#quote">Request this package</a>
            <a class="button button--ghost" href="#gallery">View media</a>
          </div>
        </div>
      </section>

      <section class="service-nav" aria-label="Service pages">
        ${siblingLinks}
      </section>

      <section class="service-detail">
        <div>
          <p class="eyebrow">Capability</p>
          <h2>${service.summary}</h2>
        </div>
        <div class="pill-grid">
          ${listMarkup(service.capabilities)}
        </div>
      </section>

      <section class="service-gallery" id="gallery" aria-label="${service.title} branded media">
        ${gallery}
      </section>

      <section class="service-spec">
        <div class="service-spec__panel">
          <p class="eyebrow">UK sectors</p>
          <ul>${listMarkup(service.sectors)}</ul>
        </div>
        <div class="service-spec__panel service-spec__panel--dark">
          <p class="eyebrow">Details clients care about</p>
          ${service.details.map((detail) => `<article><span>${detail.label}</span><p>${detail.text}</p></article>`).join("")}
        </div>
        <div class="service-spec__panel">
          <p class="eyebrow">Media guardrails</p>
          <ul>${listMarkup(service.proof)}</ul>
        </div>
      </section>

      <section class="media-note">
        <p>
          These images are synthetic commissioned ZASHE brand visuals. London landmarks, buses, skyline and UK site signs are used as market context only; they do not claim that ZASHE has completed work for those locations or any third party.
        </p>
      </section>

      ${renderCompliance()}
      ${renderQuote(service)}
    </main>
    ${renderFooter()}
  `;
};

class ConstructionScene {
  private readonly canvas: HTMLCanvasElement;
  private readonly renderer: THREE.WebGLRenderer;
  private readonly scene = new THREE.Scene();
  private readonly camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  private readonly clock = new THREE.Clock();
  private readonly frameGroup = new THREE.Group();
  private readonly civilGroup = new THREE.Group();
  private readonly fleetGroup = new THREE.Group();
  private readonly targetCamera = new THREE.Vector3(7, 5, 10);
  private readonly reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  private state: SceneState = "hero";
  private animationId = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.camera.position.copy(this.targetCamera);
    this.camera.lookAt(0, 1, 0);
    this.buildScene();
    this.resize();
    window.addEventListener("resize", () => this.resize());
    this.animate();
  }

  setState(state: SceneState) {
    this.state = state;
    const targets: Record<SceneState, THREE.Vector3> = {
      hero: new THREE.Vector3(7, 5, 10),
      commercial: new THREE.Vector3(5, 4, 7),
      civil: new THREE.Vector3(3, 2.8, 6),
      fleet: new THREE.Vector3(-5, 3, 6),
      management: new THREE.Vector3(0, 6, 8)
    };
    this.targetCamera.copy(targets[state]);
  }

  private buildScene() {
    this.scene.fog = new THREE.Fog(0x111417, 12, 28);
    const ambient = new THREE.HemisphereLight(0xfff0d4, 0x1a2830, 2.4);
    this.scene.add(ambient);
    const sun = new THREE.DirectionalLight(0xffb466, 4);
    sun.position.set(7, 9, 4);
    sun.castShadow = true;
    this.scene.add(sun);

    const slabMat = new THREE.MeshStandardMaterial({ color: 0x9b9a91, roughness: 0.76, metalness: 0.05 });
    const steelMat = new THREE.MeshStandardMaterial({ color: 0x45505a, roughness: 0.34, metalness: 0.68 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x8eb5bd, roughness: 0.08, metalness: 0.1, transparent: true, opacity: 0.38 });
    const orangeMat = new THREE.MeshStandardMaterial({ color: 0xe66b2d, roughness: 0.48, metalness: 0.15 });
    const navyMat = new THREE.MeshStandardMaterial({ color: 0x12243a, roughness: 0.42, metalness: 0.22 });

    const ground = new THREE.Mesh(new THREE.BoxGeometry(18, 0.18, 12), slabMat);
    ground.position.y = -0.18;
    ground.receiveShadow = true;
    this.scene.add(ground);

    for (let floor = 0; floor < 5; floor += 1) {
      const slab = new THREE.Mesh(new THREE.BoxGeometry(6.8, 0.16, 4.4), slabMat);
      slab.position.set(0, floor * 0.9, 0);
      slab.castShadow = true;
      slab.receiveShadow = true;
      this.frameGroup.add(slab);
    }

    for (let x = -3; x <= 3; x += 3) {
      for (let z = -1.8; z <= 1.8; z += 1.8) {
        const column = new THREE.Mesh(new THREE.BoxGeometry(0.16, 4.4, 0.16), steelMat);
        column.position.set(x, 2, z);
        column.castShadow = true;
        this.frameGroup.add(column);
      }
    }

    for (let level = 1; level < 5; level += 1) {
      const beamA = new THREE.Mesh(new THREE.BoxGeometry(7.1, 0.12, 0.12), steelMat);
      beamA.position.set(0, level * 0.9 - 0.42, -1.9);
      const beamB = beamA.clone();
      beamB.position.z = 1.9;
      this.frameGroup.add(beamA, beamB);
    }

    const core = new THREE.Mesh(new THREE.BoxGeometry(1.15, 4.1, 1), glassMat);
    core.position.set(2.05, 1.95, 0.35);
    this.frameGroup.add(core);

    const craneMast = new THREE.Mesh(new THREE.BoxGeometry(0.22, 5.6, 0.22), orangeMat);
    craneMast.position.set(-4.6, 2.55, -1.5);
    const craneJib = new THREE.Mesh(new THREE.BoxGeometry(5.2, 0.12, 0.12), orangeMat);
    craneJib.position.set(-2.2, 5.35, -1.5);
    const hookLine = new THREE.Mesh(new THREE.BoxGeometry(0.035, 1.15, 0.035), steelMat);
    hookLine.position.set(-0.4, 4.7, -1.5);
    this.frameGroup.add(craneMast, craneJib, hookLine);
    this.scene.add(this.frameGroup);

    const trench = new THREE.Mesh(new THREE.BoxGeometry(7.5, 0.12, 0.75), new THREE.MeshStandardMaterial({ color: 0x5c493b, roughness: 0.9 }));
    trench.position.set(0.5, 0.02, 4.2);
    const kerb = new THREE.Mesh(new THREE.BoxGeometry(7.7, 0.18, 0.12), slabMat);
    kerb.position.set(0.5, 0.12, 3.72);
    this.civilGroup.add(trench, kerb);
    this.scene.add(this.civilGroup);

    for (let i = 0; i < 4; i += 1) {
      const van = new THREE.Group();
      const body = new THREE.Mesh(new THREE.BoxGeometry(1.25, 0.55, 0.62), new THREE.MeshStandardMaterial({ color: 0xf5f1e8, roughness: 0.36 }));
      const cab = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.42, 0.58), navyMat);
      cab.position.x = 0.42;
      van.add(body, cab);
      van.position.set(-5.6 + i * 1.25, 0.22, 4.85);
      van.rotation.y = -0.18;
      this.fleetGroup.add(van);
    }
    this.scene.add(this.fleetGroup);
  }

  private resize() {
    const { clientWidth, clientHeight } = this.canvas;
    this.renderer.setSize(clientWidth, clientHeight, false);
    this.camera.aspect = Math.max(clientWidth, 1) / Math.max(clientHeight, 1);
    this.camera.updateProjectionMatrix();
  }

  private animate = () => {
    const elapsed = this.clock.getElapsedTime();
    this.camera.position.lerp(this.targetCamera, this.reducedMotion ? 1 : 0.035);
    this.camera.lookAt(0, 1.2, 0);
    if (!this.reducedMotion) {
      this.frameGroup.rotation.y = Math.sin(elapsed * 0.24) * 0.035;
      this.civilGroup.position.y = this.state === "civil" ? 0.08 : 0;
      this.fleetGroup.position.x = this.state === "fleet" ? 0.24 : 0;
    }
    this.renderer.render(this.scene, this.camera);
    this.animationId = window.requestAnimationFrame(this.animate);
  };

  destroy() {
    window.cancelAnimationFrame(this.animationId);
    this.renderer.dispose();
  }
}

let currentScene: ConstructionScene | undefined;

const setupScene = () => {
  currentScene?.destroy();
  currentScene = undefined;
  const sceneCanvas = document.querySelector<HTMLCanvasElement>("#site-scene");
  if (!sceneCanvas) {
    return;
  }
  currentScene = new ConstructionScene(sceneCanvas);
  const sceneSections = document.querySelectorAll<HTMLElement>("[data-scene]");
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      const state = visible?.target.getAttribute("data-scene") as SceneState | null;
      if (state) {
        currentScene?.setState(state);
      }
    },
    { threshold: 0.32 }
  );
  sceneSections.forEach((section) => observer.observe(section));
};

const setupForm = () => {
  const form = document.querySelector<HTMLFormElement>("#quote-form");
  const status = document.querySelector<HTMLElement>(".form-status");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.classList.add("form--validated");
      if (status) {
        status.textContent = "Please complete the required fields before preparing the enquiry email.";
      }
      return;
    }

    const data = new FormData(form);
    const body = Array.from(data.entries())
      .filter(([key]) => key !== "files" && key !== "consent")
      .map(([key, value]) => `${key}: ${value.toString() || "Not supplied"}`)
      .join("\n");
    const subject = encodeURIComponent("Project enquiry for ZASHE MANAGEMENT LTD");
    const message = encodeURIComponent(`${body}\n\nFiles: please attach drawings/photos or include a link before sending.`);
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${message}`;
    if (status) {
      status.textContent = "Your email client should open with the enquiry prepared.";
    }
  });
};

const setupRouting = () => {
  document.querySelectorAll<HTMLAnchorElement>("a[href]").forEach((link) => {
    const target = internalPath(link.href);
    if (!target || target.startsWith("mailto:") || target.startsWith("tel:")) {
      return;
    }
    link.addEventListener("click", (event) => {
      const url = new URL(link.href);
      if (url.pathname === window.location.pathname && url.hash) {
        return;
      }
      event.preventDefault();
      history.pushState({}, "", target || "/");
      render();
      if (url.hash) {
        document.querySelector(url.hash)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });
};

const render = () => {
  const service = serviceByPath();
  document.title = service
    ? `${service.title} | ZASHE MANAGEMENT LTD`
    : "ZASHE MANAGEMENT LTD | Construction Management & Specialist Trades";
  app.innerHTML = service ? renderServicePage(service) : renderHome();
  setupRouting();
  setupScene();
  setupForm();
};

window.addEventListener("popstate", render);
render();
