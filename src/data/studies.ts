import { Study } from "../models/studies";

export const studiesData: Study[] = [
  {
    title: "Formation Architecte logiciel",
    img: "https://technofuturtic.be/wp-content/uploads/2023/03/logo-technofutur-2024.svg",
    location: "Technofutur TIC Gosselies",
    acquiredSkills: [
      "Technologies et outils .NET",
      "Bases de données (SQL server, Azure DB)",
      "Typologies d'architectures",
      "Design patterns",
      "MVC (Blazor, ASP MVC) & API (ADO, Entity Framework)",
    ],
    durationDate: "Mars 2024 - Avril 2024",
  },
  {
    title: "Formation Développeur Web Full Stack",
    img: "https://technofuturtic.be/wp-content/uploads/2023/03/logo-technofutur-2024.svg",
    location: "Technofutur TIC Gosselies",
    acquiredSkills: ["Javascript & Typescript", "Angular", "React", "Node"],
    durationDate: "Décembre 2022 - Juin 2023",
  },
  {
    title: "Formation Les fondements de l'IT'",
    img: "https://technofuturtic.be/wp-content/uploads/2023/03/logo-technofutur-2024.svg",
    location: "Technofutur TIC Gosselies",
    acquiredSkills: [
      "Algorithmie de base",
      "Algorithmie et initiation de Python",
      "Algorithmie et base du C#",
      "Algorithmie et base du Javascript",
    ],
    durationDate: "Juin 2022 - Septembre 2022",
  },
  {
    title: "Formation Technicien informatique ",
    img: "./images/format21.png",
    location: "Format 21 La Louvière",
    acquiredSkills: [
      "Montage et mise en service d'un système informatique",
      "Maintenance, diagnostic de pannes et intervention technique",
      "Support aux utilisateurs (helpdesk), formation et assistance technique (écoute, évaluation, conseil)",
      "Approche et suivi des évolutions technologiques (ordinateurs, logiciels, réseaux, smartphone, domotique,…)",
    ],
    durationDate: "Septembre 2019 - Juin 2021",
  },
  {
    title: "Étude secondaire technique Électromécanique",
    img: "./images/artsetmetiers.png",
    location: "Arts & Métiers La Louvières",
    acquiredSkills: [
      "Automation",
      "Pneumatique",
      "Dessin industriel",
      "Câblage d'armoire électrique",
    ],
    durationDate: "Septembre 2014 - Juin 2019",
  },
];
