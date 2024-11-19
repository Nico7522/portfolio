import { experienceData } from "./data/experience";
import { getRandomAnimation } from "./helpers";

export function createExperiencesSection(section: HTMLElement) {
  experienceData.forEach((exp) => {
    const div = document.createElement("div");
    div.classList.add("flex-1", "font-lato");
    const div2 = document.createElement("div");
    div2.classList.add("xl:ml-10", "mx-5", "xl:mx-0");
    const title = document.createElement("h3");
    title.classList.add("text-3xl", "tracking-wider", "font-extrabold", "my-3");
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

    section.appendChild(div);
    div.appendChild(div2);

    section.appendChild(placeholderDiv);
    section.appendChild(placeholderDiv2);
    section.appendChild(imgDiv);
    imgDiv.appendChild(img);
  });
}
