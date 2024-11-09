import AOS from "aos";
import "aos/dist/aos.css";
import { softSkillsList as softSkilssData } from "./data/soft_skill_list";
import { hobbiesData } from "./data/hobbies";
import { InformationsData } from "./data/informations";
import { LanguagesSkillsData } from "./data/languages_skills";

AOS.init();
const body = document.querySelector("body");
// Ajout du titre et de la liste des soft skills

const softSkill = document.querySelector(".soft-skills") as HTMLDivElement;
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
  softSkillList.appendChild(li);
});

sokfSkillsTitle.innerText = "Soft Skills";
sokfSkillsTitle.classList.add(
  "text-4xl",
  "font-lato",
  "font-bold",
  "text-center"
);
softSkill.appendChild(sokfSkillsTitle);
softSkill.appendChild(softSkillList);

// Ajout du titre et de la liste des loisirs.
const hobbies = document.querySelector(".hobbies") as HTMLDivElement;
const hobbiesTitle = document.createElement("h2");
hobbiesTitle.innerText = "Loisirs";
hobbiesTitle.classList.add("text-4xl", "font-lato", "font-bold", "text-center");
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
  span.innerText = h.name;

  div.appendChild(img);
  div.appendChild(span);
  hobbiesGridWrapper.appendChild(div);
});

hobbies.appendChild(hobbiesTitle);
hobbies.appendChild(hobbiesGridWrapper);

// Ajout du titre et de la liste des informations

const informations = document.querySelector(".informations") as HTMLDivElement;
const infoTitle = document.createElement("h2");
infoTitle.innerText = "Informations";
infoTitle.classList.add("text-4xl", "font-lato", "font-bold", "text-center");

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
    "hover:translate-x-1"
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
    span.innerText = ` ${i.text} `;
    li.appendChild(span);
  }

  infoList.appendChild(li);
});

informations.appendChild(infoTitle);
informations.appendChild(infoList);

const skillSection = document.querySelector(".skills-section") as HTMLElement;

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
  skillsList.classList.add("ml-5", "list-disc", "text-start", "js-skills");
  listDiv.appendChild(skillsList);

  s.skillsList.slice(0, 4).forEach((skill, index) => {
    const li = document.createElement("li");
    index + 1 === s.skillsList.slice(0, 4).length
      ? (li.innerText = "...")
      : (li.innerText = skill);

    skillsList.appendChild(li);
  });
  skillSection.appendChild(wrapperDiv);
  wrapperDiv.appendChild(titleDiv);
  wrapperDiv.appendChild(listDiv);

  const btn = createAnimatedButton("Voir en détail");
  btn.classList.add("mb-2");
  wrapperDiv.appendChild(btn);

  btn.addEventListener("click", () => {
    createModal(s.skillsList, s.title, s.imageLogoPath, s.details);
  });
});

const jsSkills = document.querySelectorAll(".js-skills > li");
jsSkills.forEach((li) => li.classList.add("text-xl", "italic"));

// Fonctions

function createAnimatedButton(
  text: string,
  bgColor?: string
): HTMLButtonElement {
  const btn = document.createElement("button");
  const span = document.createElement("span");
  const textSpan = document.createElement("span");
  btn.classList.add(
    "text-white",
    "m-auto",
    "w-32",
    "py-2",
    "text-sm",
    "group",
    "relative",
    bgColor || "bg-black",
    "overflow-hidden",
    "flex",
    "justify-center",
    "items-center",
    "rounded-lg"
  );
  span.classList.add(
    "block",
    "absolute",
    "-right-3",
    "w-12",
    "h-32",
    "-mt-12",
    "transition-all",
    "duration-700",
    "transform",
    "translate-x-12",
    "bg-white",
    "opacity-55",
    "rotate-12",
    "group-hover:-translate-x-48",
    "ease"
  );
  textSpan.innerText = text;

  btn.appendChild(span);
  btn.appendChild(textSpan);

  return btn;
}

function createModal(
  skills: string[],
  title: string,
  logoImgPath: string,
  details: string
) {
  const isDivExist = document.querySelector(
    ".moveTransition"
  ) as HTMLDivElement | null;
  isDivExist?.remove();
  body?.classList.add("overflow-hidden");
  const bgDiv = document.createElement("div");
  bgDiv.classList.add(
    "fixed",
    "inset-0",
    "left-0",
    "w-full",
    "h-full",
    "bg-black",
    "top-0",
    "opacity-70"
  );
  skillSection.appendChild(bgDiv);
  const div = document.createElement("div");
  div.classList.add(
    "bg-slate-200",
    "fixed",
    "inset-0",
    "left-0",
    "top-0",
    "w-[600px]",
    "h-[600px]",
    "m-auto",
    "rounded-lg",
    "shadow-xl",
    "modalAppear",
    "flex",
    "flex-col",
    "z-10"
  );
  skillSection.appendChild(div);
  const logo = document.createElement("img");
  logo.src = logoImgPath;
  logo.classList.add("w-6", "h-6");
  const h2 = document.createElement("h2");
  h2.classList.add(
    "font-lato",
    "text-3xl",
    "text-center",
    "font-bold",
    "text-black"
  );
  const titleDiv = document.createElement("div");
  titleDiv.classList.add(
    "flex",
    "items-center",
    "justify-center",
    "gap-1",
    "mt-5"
  );
  h2.innerHTML = title;
  titleDiv.appendChild(logo);
  titleDiv.appendChild(h2);
  div.appendChild(titleDiv);
  const ul = document.createElement("ul");
  ul.classList.add(
    "text-black",
    "text-xl",
    "list-disc",
    "mt-10",
    "mb-5",
    "mx-12"
  );
  div.appendChild(ul);
  skills.forEach((s) => {
    const li = document.createElement("li");
    li.innerText = s;

    ul.appendChild(li);
  });

  const detailsDiv = document.createElement("div");

  detailsDiv.classList.add(
    "mx-20",
    "mb-5",
    "text-lg",
    "break-words",
    "font-gotham",
    "text-sm",
    "italic"
  );
  detailsDiv.innerText = details;

  div.appendChild(detailsDiv);
  const btnClose = createAnimatedButton("Fermer", "bg-red-500");
  div.appendChild(btnClose);

  btnClose.addEventListener("click", () => {
    div.remove(), bgDiv.remove(), body?.classList.remove("overflow-hidden");
  });
}
