export function createAnimatedButton(
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

export function createModal(
  skills: string[],
  title: string,
  logoImgPath: string,
  details: string,
  skillSection: HTMLElement
) {
  const isDivExist = document.querySelector(
    ".moveTransition"
  ) as HTMLDivElement | null;
  isDivExist?.remove();
  const body = document.querySelector("body");
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

export function getRandomAnimation(): string {
  const animations = [
    "zoom-in-right",
    "zoom-in-left",
    "zoom-in-down",
    "zoom-in-up",
    "zoom-in",
  ];

  let randomNumber = Math.floor(Math.random() * animations.length);
  return animations[randomNumber];
}

export function openPdf() {
  const pdf = window.open("CV.pdf", "_blank");
}
