import { studiesData } from "./data/studies";

export function createStudiesSection(section: HTMLElement) {
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

    section.appendChild(wrapperDiv);
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
