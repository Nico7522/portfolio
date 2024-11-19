import { hobbiesData } from "./data/hobbies";

export function createHobbiesSection(section: HTMLElement) {
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

  section.appendChild(hobbiesTitle);
  section.appendChild(hobbiesGridWrapper);
}
