import { Experience } from "../models/experience";

export const experienceData: Experience[] = [
  {
    title: "Projet perso - API de gestion de tâches/équipes - Partie back-end",
    subtitle: "Création d'une API de gestion de tâches et d'équipes",
    paragraphsDescription: [
      "À la suite de mon stage je me suis intéréssé à la 'Clean Architecture' et au 'CQRS'",
      "Après avoir lu pas mal d'articles sur la Clean Architecture et le CQRS et après avoir suivi une formation de plusieurs heures ayant pour but d'apprendre comment découper une application avec cette architecture et le pattern CQRS. J'ai décidé de démarré mon propre projet et de mettre en pratique ce que j'avais appris.",
      "J'ai crée cette API en .NET avec Entity Framework et Identity (que j'ai découvert durant mon stage et que j'ai énormément apprécié). J'y ai de plus ajouté une partie dédiée au Websocket et surtout pour la première fois, des tests.",
    ],
    image: "./images/cleanarchtodoapi.png",
    githhubLink: "https://github.com/Nico7522/Todo-Front",
  },
  {
    title: "Projet perso - API de gestion de tâches/équipes - Partie front-end",
    subtitle:
      "Création d'une l'application Web de gestion de tâches et d'équipes",
    paragraphsDescription: [
      "Pour consommer cette API, j'ai commencé à créer la partie front-end avec Angular v17 et Angular matérial",
      "Bien que ce projet ne sois pas fini, la partie 'utilisateur' est très bien avancé, avec notament un chat fonctionnel. La partie admin, elle, est encore à commencer",
    ],
    image: "./images/todofront.png",
    githhubLink: "https://github.com/Nico7522/Todo-Front",
  },
  {
    title: "Stage chez Multi OS",
    subtitle: "Refonte d'une application Web en Angular 17",
    paragraphsDescription: [
      "Durant mon stage de 4 semaines, j'ai pu mettre en pratique mes compétances et remettre une partie de l'application Web de Multi OS au goût du jour.",
      "our cela, j'ai démarré un nouveau projet en Angular 17 en standalone component, et me suis servi de la bibliothèque Prime NG ",
    ],
    image: "./images/multios.png",
  },
  {
    title: "Projet de fin de l'abo Architecte Logiciel - Partie back-end",
    subtitle: "Création d'une API pour mon projet de fin de formation",
    paragraphsDescription: [
      "Pour la fin de ma formation d'Architècte logiciel, je me suis lancé dans la création d'un e-commerce de vente de chaussure.",
      "Pourquoi un e-commerce ? Car je me suis dit que ce genre de projet allait me permettre de me servir d'un maximum de compétences que j'ai pu acquérir. Et aussi me pousser à résoudre des problématiques encore jamais rencontrées jusque là.",
      "Pour cette API, j'ai utilisé l'environnement .NET avec Entity Framework",
    ],
    image: "./images/pffarch.png",
    githhubLink: "https://github.com/Nico7522/API_EF_Hash_Token",
  },
  {
    title: "Projet de fin de l'abo Architecte Logiciel - Partie front-end",
    subtitle: "Création d'un site web mon projet de fin de formation",
    paragraphsDescription: [
      "Voici la partie front-end de mon projet de fin de formation d'Architecte Logiciel",
      "J'ai réalisé ce projet avec Angular v16 et Angular Material pour le style",
    ],
    image: "./images/labo-project-arch.png",
    githhubLink: "https://github.com/Nico7522/angular-labo",
  },
  {
    title: "Projet perso - Encyclopédie One Piece",
    subtitle: "Création d'un site d'informations sur le lore de One Piece",
    paragraphsDescription: [
      "Suite à la fin de ma formation de Développeur Full Stack et voulant travailler avec React et Typescript, j'ai créé une mini encyclopédie sur les objets et lieux du manga One Piece",
      "Je me suis aidé de d'une API public faite par des fans : https://api-onepiece.com/fr",
    ],
    image: "./images/encyclopediop.png",
    link: "https://mini-encyclopedie-op.vercel.app/",
    githhubLink: "https://github.com/Nico7522/fdd-project",
  },
  {
    title: "Projet perso - Site de lecture de manga",
    subtitle: "Création d'un site de lecture",
    paragraphsDescription: [
      "Afin d'aider un ami traducteur à partager son travail, j'ai crée un petit site web en React et Typescript",
    ],
    image: "./images/sitedr.png",
    link: "https://deadrock-lecture.vercel.app/",
    githhubLink: "https://github.com/Nico7522/deadrock-project",
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
    image: "./images/cuisine.jpg",
    link: "https://ncls.nicorecipe.com/",
    githhubLink: "https://github.com/Nico7522/recipe-project",
  },
];
