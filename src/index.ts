import AOS from "aos";
import "aos/dist/aos.css";

import { Portfolio } from "./classes/portfolio";
import { openPdf } from "./helpers";

AOS.init();

// Récuparation de toutes les sections.

const softSkillsSection = document.querySelector(".soft-skills") as HTMLElement;
const hobbiesSection = document.querySelector(".hobbies") as HTMLElement;
const informationsSection = document.querySelector(
  ".informations"
) as HTMLElement;
const skillsSection = document.querySelector(".skills") as HTMLElement;
const experiencesSection = document.querySelector(
  ".experiences > .experiences-wrapper"
) as HTMLElement;
const studiesSection = document.querySelector(".studies") as HTMLElement;

// Initiation du portfolio.
const portfolio = new Portfolio(
  softSkillsSection,
  hobbiesSection,
  informationsSection,
  skillsSection,
  experiencesSection,
  studiesSection
);

portfolio.init();

// Ouverture du pdf.

const pdfButton = document.querySelector(".pdf-button") as HTMLButtonElement;

pdfButton.addEventListener("click", () => {
  openPdf();
});
