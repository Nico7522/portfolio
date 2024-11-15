import { Experience } from "../models/experience";

export const experienceData: Experience[] = [
  {
    title: "Stage chez Multi OS",
    subtitle: "Refonte d'une application Web en Angular 17",
    paragraphsDescription: [
      "Durant mon stage de 4 semaines, j'ai pu mettre en pratique mes compétances et remettre une partie de l'application Web de Multi OS au goût du jour.",
      "our cela, j'ai démarré un nouveau projet en Angular 17 en standalone component, et me suis servi de la bibliothèque Prime NG ",
    ],
    image: "/public/images/multios.png",
  },
  {
    title: "Projet de fin de l'abo Architecte Logiciel",
    subtitle: "Création d'un e-commerce",
    paragraphsDescription: [
      "Pour la fin de ma formation d'Architècte logiciel, je me suis lancé dans la création d'un e-commerce de vente de chaussure.",
      "Pourquoi un e-commerce ? Car je me suis dit que ce genre de projet allait me permettre de me servir d'un maximum de compétences que j'ai pu acquérir. Et aussi me pousser à résoudre des problématiques encore jamais rencontrées jusque là.",
      "Pour ce projet, j'ai utilisé l'environnement .NET avec Entity Framework ainsi que Angular 16",
    ],
    image: "/public/images/labo-project-arch.png",
  },
  {
    title: "Projet perso - Encyclopédie One Piece",
    subtitle: "Création d'un site d'informations sur le lore de One Piece",
    paragraphsDescription: [
      "Suite à la fin de ma formation de Développeur Full Stack et voulant travailler avec React et Typescript j'ai créé une mini encyclopédie sur les objets et lieux du manga One Piece",
    ],
    image: "/public/images/encyclopediop.png",
    link: "https://mini-encyclopedie-op.vercel.app/",
  },
  {
    title: "Projet perso - Site de lecture de manga",
    subtitle: "Création d'un site de lecture",
    paragraphsDescription: [
      "Afin d'aider un ami traducteur à partager son travail, j'ai crée un petit site web en React et Typescript",
    ],
    image: "/public/images/sitedr.png",
    link: "https://deadrock-lecture.vercel.app/",
  },
  {
    title: "Projet de fin de formation - Site de cuisine",
    subtitle: "Création d'un site de recette de cuisine",
    paragraphsDescription: [
      "Pour la fin de ma formation de Développeur Web Full Stack, j'ai voulu créer un site de recette où l'on pourrait trouver toutes sortes de recettes, créer son compte, poster ses recettes, des commentaires ...",
      "En bref, je voulais créer quelque chose de complet et le faire de A à Z, du schéma de la base de donnée, au déploiement.",
      "Afin de réaliser ce projet, j'ai utilisé Node/ExpressJS/MySQL pour le côté back-end et React JS pour le côté front end.",
      "Pour l'hébergement, j'ai voulu utiliser un VPS afin d'héberger l'API. C'était une belle occasion d'en apprendre plus sur le côté déploiement",
    ],
    image: "/public/images/cuisine.jpg",
    link: "https://ncls.nicorecipe.com/",
  },
];
