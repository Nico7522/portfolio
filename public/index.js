"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aos_1 = __importDefault(require("aos"));
require("aos/dist/aos.css");
const portfolio_1 = require("./classes/portfolio");
const helpers_1 = require("./helpers");
aos_1.default.init();
// Récuparation de toutes les sections.
const softSkillsSection = document.querySelector(".soft-skills");
const hobbiesSection = document.querySelector(".hobbies");
const informationsSection = document.querySelector(".informations");
const skillsSection = document.querySelector(".skills");
const experiencesSection = document.querySelector(".experiences > .experiences-wrapper");
const studiesSection = document.querySelector(".studies");
// Initiation du portfolio.
const portfolio = new portfolio_1.Portfolio(softSkillsSection, hobbiesSection, informationsSection, skillsSection, experiencesSection, studiesSection);
portfolio.init();
// Ouverture du pdf.
const pdfButton = document.querySelector(".pdf-button");
pdfButton.addEventListener("click", () => {
    (0, helpers_1.openPdf)();
});
