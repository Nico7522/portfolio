import { experienceData } from "../data/experience";
import { hobbiesData } from "../data/hobbies";
import { InformationsData } from "../data/informations";
import { LanguagesSkillsData } from "../data/languages_skills";
import { softSkillsList as softSkilssData } from "../data/soft_skill_list";
import { studiesData } from "../data/studies";
import {
  createAnimatedButton,
  createModal,
  getRandomAnimation,
} from "../helpers";

export class Portfolio {
  #softSkillsSection: HTMLElement;
  #hobbiesSection: HTMLElement;
  #informationsSection: HTMLElement;
  #skillsSection: HTMLElement;
  #experiencesSection: HTMLElement;
  #studiesSection: HTMLElement;
  constructor(
    softSkillsSection: HTMLElement,
    hobbiesSection: HTMLElement,
    informationsSection: HTMLElement,
    skillsSection: HTMLElement,
    experiencesSection: HTMLElement,
    studiesSection: HTMLElement
  ) {
    this.#softSkillsSection = softSkillsSection;
    this.#hobbiesSection = hobbiesSection;
    this.#informationsSection = informationsSection;
    this.#skillsSection = skillsSection;
    this.#experiencesSection = experiencesSection;
    this.#studiesSection = studiesSection;
  }

  init() {
    this.#createSoftSkillsSection();
    this.#createHobbiesSection();
    this.#createInformationsSection();
    this.#createSkillsSection();
    this.#createExperiencesSection();
    this.#createStudiesSection();
  }

  #createSoftSkillsSection() {
    const sokfSkillsTitle = document.createElement("h2");
    const softSkillList = document.createElement("ul");
    softSkillList.classList.add(
      "font-lato",
      "text-3xl",
      "mt-5",
      "list-image-[url(../public/images/check.png)]"
    );
    softSkilssData.forEach((s) => {
      const li = document.createElement("li");
      li.classList.add("my-10");
      li.innerText = s.name;
      li.classList.add("text-sm", "md:text-xl");
      softSkillList.appendChild(li);
    });

    sokfSkillsTitle.innerText = "Soft Skills";
    sokfSkillsTitle.classList.add(
      "text-4xl",
      "font-lato",
      "font-bold",
      "text-center"
    );
    this.#softSkillsSection.appendChild(sokfSkillsTitle);
    this.#softSkillsSection.appendChild(softSkillList);
  }
  #createHobbiesSection() {
    const hobbiesTitle = document.createElement("h2");
    hobbiesTitle.innerText = "Loisirs";
    hobbiesTitle.classList.add(
      "text-4xl",
      "font-lato",
      "font-bold",
      "text-center"
    );
    const hobbiesGridWrapper = document.createElement("div");
    hobbiesGridWrapper.classList.add(
      "font-lato",
      "grid",
      "grid-cols-3",
      "text-3xl",
      "mt-5"
    );

    hobbiesData.forEach((h) => {
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

    this.#hobbiesSection.appendChild(hobbiesTitle);
    this.#hobbiesSection.appendChild(hobbiesGridWrapper);
  }
  #createInformationsSection() {
    const infoTitle = document.createElement("h2");
    infoTitle.innerText = "Informations";
    infoTitle.classList.add(
      "text-4xl",
      "font-lato",
      "font-bold",
      "text-center"
    );

    const infoList = document.createElement("ul");
    infoList.classList.add("font-lato", "text-3xl", "mt-5", "info");

    InformationsData.forEach((i) => {
      const li = document.createElement("li");
      li.classList.add(
        "my-10",
        "transition",
        "ease-in",
        "duration-300",
        "hover:-translate-y-1",
        "hover:translate-x-1",
        "text-sm",
        "md:text-xl"
      );
      const img = document.createElement("img");
      img.src = i.logoImgPath;
      img.alt = i.text;
      img.classList.add("w-10", "inline");
      li.append(img);

      if (i.isAncor) {
        const a = document.createElement("a");
        if (i.url) a.href = i.url;
        a.innerText = ` ${i.text} `;
        li.appendChild(a);
      } else {
        const span = document.createElement("span");
        span.classList.add("text-sm", "md:text-xl");
        span.innerText = ` ${i.text} `;
        li.appendChild(span);
      }

      infoList.appendChild(li);
    });

    this.#informationsSection.appendChild(infoTitle);
    this.#informationsSection.appendChild(infoList);
  }
  #createSkillsSection() {
    LanguagesSkillsData.forEach((s) => {
      const wrapperDiv = document.createElement("div");
      wrapperDiv.classList.add(
        "w-72",
        "h-96",
        "flex-grow",
        s.bgColor,
        "flex",
        "flex-col"
      );

      const titleDiv = document.createElement("div");
      titleDiv.classList.add("flex", "justify-center", "my-3");

      const logo = document.createElement("img");
      logo.classList.add("w-6", "h-6", "mt-2", "mr-2");
      logo.src = s.imageLogoPath;

      const title = document.createElement("h2");
      title.classList.add("font-lato", "font-bold");
      title.innerText = s.title;

      titleDiv.appendChild(logo);
      titleDiv.appendChild(title);

      const listDiv = document.createElement("div");
      listDiv.classList.add(
        "flex",
        "flex-col",
        "ml-5",
        "min-h-60",
        "flex-wrap"
      );
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
      this.#skillsSection.appendChild(wrapperDiv);
      wrapperDiv.appendChild(titleDiv);
      wrapperDiv.appendChild(listDiv);

      const btn = createAnimatedButton("Voir en détail");
      btn.classList.add("mb-2");
      wrapperDiv.appendChild(btn);

      btn.addEventListener("click", () => {
        createModal(
          s.skillsList,
          s.title,
          s.imageLogoPath,
          s.details,
          this.#skillsSection
        );
      });
    });

    const jsSkills = document.querySelectorAll(".skills > li");
    jsSkills.forEach((li) => li.classList.add("text-xl"));
  }
  #createExperiencesSection() {
    experienceData.forEach((exp) => {
      const div = document.createElement("div");
      div.classList.add("flex-1", "font-lato");
      const div2 = document.createElement("div");
      div2.classList.add("xl:ml-10", "mx-5", "xl:mx-0");
      const title = document.createElement("h3");
      title.classList.add(
        "text-3xl",
        "tracking-wider",
        "font-extrabold",
        "my-3"
      );
      title.setAttribute("data-aos", getRandomAnimation());
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

      const placeholderDiv = document.createElement("div");
      placeholderDiv.classList.add("w-full", "h-full", "hidden", "xl:block");
      const placeholderDiv2 = document.createElement("div");
      placeholderDiv2.classList.add("w-full", "h-full", "hidden", "xl:block");

      const imgDiv = document.createElement("div");
      div.classList.add("flex-1", "my-10");
      const img = document.createElement("img");
      img.classList.add("w-[500px]", "m-auto");
      img.src = exp.image;

      this.#experiencesSection.appendChild(div);
      div.appendChild(div2);

      this.#experiencesSection.appendChild(placeholderDiv);
      this.#experiencesSection.appendChild(placeholderDiv2);
      this.#experiencesSection.appendChild(imgDiv);
      imgDiv.appendChild(img);
    });
  }
  #createStudiesSection() {
    studiesData.forEach((study) => {
      const wrapperDiv = document.createElement("div");
      wrapperDiv.classList.add(
        "w-full",
        "h-[600px]",
        "relative",
        "flex",
        "flex-row"
      );

      const titleDiv = document.createElement("div");
      titleDiv.classList.add(
        "flex",
        "items-center",
        "border-r-2",
        "h-full",
        "border-r-white",
        "w-60",
        "md:w-96",
        "relative",
        "bs"
      );

      const location = document.createElement("h2");
      location.classList.add("text-base", "md:text-2xl", "mx-2", "text-center");
      location.innerText = study.title;

      const mainDiv = document.createElement("div");
      mainDiv.classList.add(
        "flex",
        "flex-col",
        "items-center",
        "justify-center",
        "m-auto",
        "w-full"
      );

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

      const listDiv = document.createElement("div");
      listDiv.classList.add(
        "flex",
        "flex-col",
        "flex-1",
        "md:w-72",
        "items-center"
      );

      const list = document.createElement("ul");
      list.classList.add("font-bold", "text-sm");

      study.acquiredSkills.forEach((s) => {
        const li = document.createElement("li");
        li.classList.add("flex");
        const img = document.createElement("img");
        img.src = "/public/images/check.png";
        img.classList.add("h-6");

        li.appendChild(img);
        li.innerHTML += s;
        list.appendChild(li);
      });

      this.#studiesSection.appendChild(wrapperDiv);
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
  }
}
