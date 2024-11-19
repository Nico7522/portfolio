import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

import { createSoftSkillsSection } from "./softskills_section";
import { createHobbiesSection } from "./hobbies_section";
import { createInformationsSection } from "./informations_sction";
import { createSkillsSection } from "./skills_section";
import { createExperiencesSection } from "./experiences_section";
import { createStudiesSection } from "./studies_section";

// Ajout du titre et de la liste des soft skills
const softSkill = document.querySelector(".soft-skills") as HTMLDivElement;
createSoftSkillsSection(softSkill);

// Ajout du titre et de la liste des loisirs.
const hobbiesSection = document.querySelector(".hobbies") as HTMLDivElement;
createHobbiesSection(hobbiesSection);

// Ajout du titre et de la liste des informations
const informationsSection = document.querySelector(
  ".informations"
) as HTMLDivElement;
createInformationsSection(informationsSection);

// Ajout des skills
const skillsSection = document.querySelector(".skills-section") as HTMLElement;
createSkillsSection(skillsSection);

// Ajout des expériences
const experiencesSection = document.querySelector(
  ".experiences > .experiences-wrapper"
) as HTMLDivElement;
createExperiencesSection(experiencesSection);

// Ajout des études
const studiesSection = document.querySelector(".studies") as HTMLElement;
createStudiesSection(studiesSection);
