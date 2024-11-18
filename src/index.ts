import AOS from "aos";
import "aos/dist/aos.css";
import { softSkillsList as softSkilssData } from "./data/soft_skill_list";
import { hobbiesData } from "./data/hobbies";
import { InformationsData } from "./data/informations";
import { LanguagesSkillsData } from "./data/languages_skills";
import { experienceData } from "./data/experience";
import { studiesData } from "./data/studies";

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
  span.classList.add("text-sm", "md:text-xl");
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

informations.appendChild(infoTitle);
informations.appendChild(infoList);

// Ajout des skills

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
  skillsList.classList.add("ml-5", "list-disc", "text-start", "skills");
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

const jsSkills = document.querySelectorAll(".skills > li");
jsSkills.forEach((li) => li.classList.add("text-xl"));

// Ajout des expériences

const experiencesSection = document.querySelector(
  ".experiences > .experiences-wrapper"
) as HTMLDivElement;

experienceData.forEach((exp) => {
  const div = document.createElement("div");
  div.classList.add("flex-1", "font-lato");
  const div2 = document.createElement("div");
  div2.classList.add("xl:ml-10", "mx-5", "xl:mx-0");
  const title = document.createElement("h3");
  title.classList.add("text-3xl", "tracking-wider", "font-extrabold", "my-3");
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

  experiencesSection.appendChild(div);
  div.appendChild(div2);

  experiencesSection.appendChild(placeholderDiv);
  experiencesSection.appendChild(placeholderDiv2);
  experiencesSection.appendChild(imgDiv);
  imgDiv.appendChild(img);
});

// Ajout des études

const studiesSection = document.querySelector(".studies") as HTMLElement;
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

  studiesSection.appendChild(wrapperDiv);
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
    "md:w-[600px]",
    "md:h-[620px]",
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
    "text-sm",
    "md:text-xl",
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
