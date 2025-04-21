"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Portfolio_instances, _Portfolio_softSkillsSection, _Portfolio_hobbiesSection, _Portfolio_informationsSection, _Portfolio_skillsSection, _Portfolio_experiencesSection, _Portfolio_studiesSection, _Portfolio_createSoftSkillsSection, _Portfolio_createHobbiesSection, _Portfolio_createInformationsSection, _Portfolio_createSkillsSection, _Portfolio_createExperiencesSection, _Portfolio_createStudiesSection;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Portfolio = void 0;
const experience_1 = require("../data/experience");
const hobbies_1 = require("../data/hobbies");
const informations_1 = require("../data/informations");
const languages_skills_1 = require("../data/languages_skills");
const soft_skill_list_1 = require("../data/soft_skill_list");
const studies_1 = require("../data/studies");
const helpers_1 = require("../helpers");
class Portfolio {
    constructor(softSkillsSection, hobbiesSection, informationsSection, skillsSection, experiencesSection, studiesSection) {
        _Portfolio_instances.add(this);
        _Portfolio_softSkillsSection.set(this, void 0);
        _Portfolio_hobbiesSection.set(this, void 0);
        _Portfolio_informationsSection.set(this, void 0);
        _Portfolio_skillsSection.set(this, void 0);
        _Portfolio_experiencesSection.set(this, void 0);
        _Portfolio_studiesSection.set(this, void 0);
        __classPrivateFieldSet(this, _Portfolio_softSkillsSection, softSkillsSection, "f");
        __classPrivateFieldSet(this, _Portfolio_hobbiesSection, hobbiesSection, "f");
        __classPrivateFieldSet(this, _Portfolio_informationsSection, informationsSection, "f");
        __classPrivateFieldSet(this, _Portfolio_skillsSection, skillsSection, "f");
        __classPrivateFieldSet(this, _Portfolio_experiencesSection, experiencesSection, "f");
        __classPrivateFieldSet(this, _Portfolio_studiesSection, studiesSection, "f");
    }
    init() {
        __classPrivateFieldGet(this, _Portfolio_instances, "m", _Portfolio_createSoftSkillsSection).call(this);
        __classPrivateFieldGet(this, _Portfolio_instances, "m", _Portfolio_createHobbiesSection).call(this);
        __classPrivateFieldGet(this, _Portfolio_instances, "m", _Portfolio_createInformationsSection).call(this);
        __classPrivateFieldGet(this, _Portfolio_instances, "m", _Portfolio_createSkillsSection).call(this);
        __classPrivateFieldGet(this, _Portfolio_instances, "m", _Portfolio_createExperiencesSection).call(this);
        __classPrivateFieldGet(this, _Portfolio_instances, "m", _Portfolio_createStudiesSection).call(this);
    }
}
exports.Portfolio = Portfolio;
_Portfolio_softSkillsSection = new WeakMap(), _Portfolio_hobbiesSection = new WeakMap(), _Portfolio_informationsSection = new WeakMap(), _Portfolio_skillsSection = new WeakMap(), _Portfolio_experiencesSection = new WeakMap(), _Portfolio_studiesSection = new WeakMap(), _Portfolio_instances = new WeakSet(), _Portfolio_createSoftSkillsSection = function _Portfolio_createSoftSkillsSection() {
    const sokfSkillsTitle = document.createElement("h2");
    const softSkillList = document.createElement("ul");
    softSkillList.classList.add("font-lato", "text-3xl", "mt-5", "list-image-[url(../images/check.png)]");
    soft_skill_list_1.softSkillsList.forEach((s) => {
        const li = document.createElement("li");
        li.classList.add("my-10");
        li.innerText = s.name;
        li.classList.add("text-sm", "md:text-xl");
        softSkillList.appendChild(li);
    });
    sokfSkillsTitle.innerText = "Soft Skills";
    sokfSkillsTitle.classList.add("text-4xl", "font-lato", "font-bold", "text-center");
    __classPrivateFieldGet(this, _Portfolio_softSkillsSection, "f").appendChild(sokfSkillsTitle);
    __classPrivateFieldGet(this, _Portfolio_softSkillsSection, "f").appendChild(softSkillList);
}, _Portfolio_createHobbiesSection = function _Portfolio_createHobbiesSection() {
    const hobbiesTitle = document.createElement("h2");
    hobbiesTitle.innerText = "Loisirs";
    hobbiesTitle.classList.add("text-4xl", "font-lato", "font-bold", "text-center");
    const hobbiesGridWrapper = document.createElement("div");
    hobbiesGridWrapper.classList.add("font-lato", "grid", "grid-cols-3", "text-3xl", "mt-5");
    hobbies_1.hobbiesData.forEach((h) => {
        const div = document.createElement("div");
        div.classList.add("my-10", "flex", "items-center", "gap-1");
        const img = document.createElement("img");
        img.classList.add("h-5", "w-5");
        img.src = h.logoImgPath;
        const span = document.createElement("span");
        span.classList.add("text-sm", "md:text-xl");
        span.innerText = h.name;
        div.appendChild(img);
        div.appendChild(span);
        hobbiesGridWrapper.appendChild(div);
    });
    __classPrivateFieldGet(this, _Portfolio_hobbiesSection, "f").appendChild(hobbiesTitle);
    __classPrivateFieldGet(this, _Portfolio_hobbiesSection, "f").appendChild(hobbiesGridWrapper);
}, _Portfolio_createInformationsSection = function _Portfolio_createInformationsSection() {
    const infoTitle = document.createElement("h2");
    infoTitle.innerText = "Informations";
    infoTitle.classList.add("text-4xl", "font-lato", "font-bold", "text-center");
    const infoList = document.createElement("ul");
    infoList.classList.add("font-lato", "text-3xl", "mt-5", "info");
    informations_1.InformationsData.forEach((i) => {
        const li = document.createElement("li");
        li.classList.add("my-10", "text-sm", "md:text-xl");
        const img = document.createElement("img");
        img.src = i.logoImgPath;
        img.alt = i.text;
        img.classList.add("w-10", "inline");
        li.append(img);
        if (i.isAncor) {
            li.classList.add("transition", "ease-in", "duration-300", "hover:-translate-y-1", "hover:translate-x-1");
            const a = document.createElement("a");
            if (i.url)
                a.href = i.url;
            a.target = "_blank";
            a.innerText = ` ${i.text} `;
            li.appendChild(a);
        }
        else {
            const span = document.createElement("span");
            span.classList.add("text-sm", "md:text-xl");
            span.innerText = ` ${i.text} `;
            li.appendChild(span);
        }
        infoList.appendChild(li);
    });
    __classPrivateFieldGet(this, _Portfolio_informationsSection, "f").appendChild(infoTitle);
    __classPrivateFieldGet(this, _Portfolio_informationsSection, "f").appendChild(infoList);
}, _Portfolio_createSkillsSection = function _Portfolio_createSkillsSection() {
    languages_skills_1.LanguagesSkillsData.forEach((s) => {
        const wrapperDiv = document.createElement("div");
        wrapperDiv.classList.add("w-72", "h-96", "flex-grow", s.bgColor, "flex", "flex-col");
        const titleDiv = document.createElement("div");
        titleDiv.classList.add("flex", "justify-center", "my-3");
        const logo = document.createElement("img");
        logo.classList.add("w-6", "h-6", "mt-2", "mr-2");
        logo.src = s.imageLogoPath;
        logo.alt = s.title;
        const title = document.createElement("h2");
        title.classList.add("font-lato", "font-bold");
        title.innerText = s.title;
        titleDiv.appendChild(logo);
        titleDiv.appendChild(title);
        const listDiv = document.createElement("div");
        listDiv.classList.add("flex", "flex-col", "ml-5", "min-h-60", "flex-wrap");
        const exp = document.createElement("p");
        exp.classList.add("text-2xl", "font-bold", "mb-2");
        exp.innerText = `Exp: ${s.exp} ans`;
        listDiv.appendChild(exp);
        const skillsList = document.createElement("ul");
        skillsList.classList.add("ml-5", "list-disc", "text-start", "skills");
        listDiv.appendChild(skillsList);
        s.skillsList.slice(0, 4).forEach((skill, index) => {
            const li = document.createElement("li");
            index + 1 === s.skillsList.slice(0, 4).length
                ? (li.innerText = "...")
                : (li.innerText = skill);
            skillsList.appendChild(li);
        });
        __classPrivateFieldGet(this, _Portfolio_skillsSection, "f").appendChild(wrapperDiv);
        wrapperDiv.appendChild(titleDiv);
        wrapperDiv.appendChild(listDiv);
        const btn = (0, helpers_1.createAnimatedButton)("Voir en détail");
        btn.classList.add("mb-2");
        wrapperDiv.appendChild(btn);
        btn.addEventListener("click", () => {
            (0, helpers_1.createModal)(s.skillsList, s.title, s.imageLogoPath, s.details, __classPrivateFieldGet(this, _Portfolio_skillsSection, "f"));
        });
    });
    const jsSkills = document.querySelectorAll(".skills > li");
    jsSkills.forEach((li) => li.classList.add("text-xl"));
}, _Portfolio_createExperiencesSection = function _Portfolio_createExperiencesSection() {
    experience_1.experienceData.forEach((exp) => {
        const div = document.createElement("div");
        div.classList.add("flex-1", "font-lato");
        const div2 = document.createElement("div");
        div2.classList.add("xl:ml-10", "mx-5", "xl:mx-0");
        const title = document.createElement("h3");
        title.classList.add("text-3xl", "tracking-wider", "font-extrabold", "my-3");
        title.setAttribute("data-aos", (0, helpers_1.getRandomAnimation)());
        title.setAttribute("data-aos-once", "true");
        title.innerText = exp.title;
        const subtitle = document.createElement("h3");
        subtitle.classList.add("text-2xl", "my-3");
        subtitle.innerText = exp.subtitle;
        div2.appendChild(title);
        div2.appendChild(subtitle);
        exp.paragraphsDescription.forEach((p) => {
            const paragraph = document.createElement("p");
            paragraph.classList.add("text-lg", "my-3");
            paragraph.innerText = p;
            div2.appendChild(paragraph);
        });
        if (exp.link) {
            const link = document.createElement("a");
            link.classList.add("text-blue-700", "underline", "font-bold");
            link.href = exp.link;
            link.target = "_blank";
            link.innerText = "Visiter";
            div2.appendChild(link);
        }
        if (exp.githhubLink) {
            const link = document.createElement("a");
            link.classList.add("text-blue-700", "underline", "font-bold");
            if (exp.link)
                link.classList.add("ml-4");
            link.href = exp.githhubLink;
            link.target = "_blank";
            link.innerText = "Voir le repo Github";
            div2.appendChild(link);
        }
        const placeholderDiv = document.createElement("div");
        placeholderDiv.classList.add("w-full", "h-full", "hidden", "xl:block");
        const placeholderDiv2 = document.createElement("div");
        placeholderDiv2.classList.add("w-full", "h-full", "hidden", "xl:block");
        const imgDiv = document.createElement("div");
        div.classList.add("flex-1", "my-10");
        const img = document.createElement("img");
        img.classList.add("w-[500px]", "m-auto");
        img.setAttribute("data-aos", "zoom-in");
        img.setAttribute("data-aos-once", "true");
        img.src = exp.image;
        img.alt = exp.alt;
        __classPrivateFieldGet(this, _Portfolio_experiencesSection, "f").appendChild(div);
        div.appendChild(div2);
        __classPrivateFieldGet(this, _Portfolio_experiencesSection, "f").appendChild(placeholderDiv);
        __classPrivateFieldGet(this, _Portfolio_experiencesSection, "f").appendChild(placeholderDiv2);
        __classPrivateFieldGet(this, _Portfolio_experiencesSection, "f").appendChild(imgDiv);
        imgDiv.appendChild(img);
    });
}, _Portfolio_createStudiesSection = function _Portfolio_createStudiesSection() {
    studies_1.studiesData.forEach((study) => {
        const wrapperDiv = document.createElement("div");
        wrapperDiv.classList.add("w-full", "h-[600px]", "relative", "flex", "flex-row");
        const titleDiv = document.createElement("div");
        titleDiv.classList.add("flex", "items-center", "border-r-2", "h-full", "border-r-white", "w-60", "md:w-96", "relative", "bs");
        const location = document.createElement("h2");
        location.classList.add("text-base", "md:text-2xl", "mx-2", "text-center");
        location.innerText = study.location;
        const mainDiv = document.createElement("div");
        mainDiv.classList.add("flex", "flex-col", "items-center", "justify-center", "m-auto", "w-full");
        const duration = document.createElement("h2");
        duration.classList.add("ml-14", "text-2xl", "mx-5");
        duration.innerText = study.durationDate;
        const studyTitle = document.createElement("h2");
        studyTitle.classList.add("ml-14", "text-1xl", "mx-5", "mb-5");
        studyTitle.innerText = study.title;
        const innerWrapperDiv = document.createElement("div");
        innerWrapperDiv.classList.add("flex", "flex-col", "md:flex-row");
        const img = document.createElement("img");
        img.classList.add("w-[200px]", "flex-1", "m-auto");
        img.src = study.img;
        img.alt = study.alt;
        const listDiv = document.createElement("div");
        listDiv.classList.add("flex", "flex-col", "flex-1", "md:w-72", "items-center");
        const list = document.createElement("ul");
        list.classList.add("font-bold", "text-sm");
        study.acquiredSkills.forEach((s) => {
            const li = document.createElement("li");
            li.classList.add("flex", "mt-2");
            const img = document.createElement("img");
            img.src = "./images/check.png";
            img.alt = "Check logo";
            img.classList.add("h-5", "mt-1");
            li.appendChild(img);
            li.innerHTML += s;
            list.appendChild(li);
        });
        __classPrivateFieldGet(this, _Portfolio_studiesSection, "f").appendChild(wrapperDiv);
        wrapperDiv.appendChild(titleDiv);
        titleDiv.appendChild(location);
        wrapperDiv.appendChild(mainDiv);
        mainDiv.appendChild(duration);
        mainDiv.appendChild(studyTitle);
        mainDiv.appendChild(innerWrapperDiv);
        innerWrapperDiv.appendChild(img);
        innerWrapperDiv.appendChild(listDiv);
        listDiv.appendChild(list);
    });
};
