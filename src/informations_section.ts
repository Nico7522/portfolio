import { InformationsData } from "./data/informations";

export function createInformationsSection(section: HTMLElement) {
  const infoTitle = document.createElement("h2");
  infoTitle.innerText = "Informations";
  infoTitle.classList.add("text-4xl", "font-lato", "font-bold", "text-center");

  const infoList = document.createElement("ul");
  infoList.classList.add("font-lato", "text-3xl", "mt-5", "info");

  InformationsData.forEach((i) => {
    const li = document.createElement("li");
    li.classList.add(
      "my-10",

      "text-sm",
      "md:text-xl"
    );
    const img = document.createElement("img");
    img.src = i.logoImgPath;
    img.alt = i.text;
    img.classList.add("w-7", "inline");
    li.append(img);

    if (i.isAncor) {
      li.classList.add(
        "transition",
        "ease-in",
        "duration-300",
        "hover:-translate-y-1",
        "hover:translate-x-1",
        "cursor-pointer"
      );
      const a = document.createElement("a");
      if (i.url) a.href = i.url;
      a.innerText = ` ${i.text} `;
      a.target = "_blank";
      li.appendChild(a);
    } else {
      const span = document.createElement("span");
      span.classList.add("text-sm", "md:text-xl");
      span.innerText = ` ${i.text} `;
      li.appendChild(span);
    }

    infoList.appendChild(li);
  });

  section.appendChild(infoTitle);
  section.appendChild(infoList);
}
