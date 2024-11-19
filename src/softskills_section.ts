import { softSkillsList as softSkilssData } from "./data/soft_skill_list";
export function createSoftSkillsSection(section: HTMLElement) {
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
  section.appendChild(sokfSkillsTitle);
  section.appendChild(softSkillList);
}
