import { LanguagesSkillsData } from "./data/languages_skills";
import { createAnimatedButton, createModal } from "./helpers";

export function createSkillsSection(section: HTMLElement) {
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
    logo.classList.add("w-6", "h-6", "mt-2");
    logo.src = s.imageLogoPath;

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
    section.appendChild(wrapperDiv);
    wrapperDiv.appendChild(titleDiv);
    wrapperDiv.appendChild(listDiv);

    const btn = createAnimatedButton("Voir en détail");
    btn.classList.add("mb-2");
    wrapperDiv.appendChild(btn);

    btn.addEventListener("click", () => {
      createModal(s.skillsList, s.title, s.imageLogoPath, s.details, section);
    });
  });

  const jsSkills = document.querySelectorAll(".skills > li");
  jsSkills.forEach((li) => li.classList.add("text-xl"));
}
