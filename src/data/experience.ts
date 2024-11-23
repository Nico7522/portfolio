import { Experience } from "../models/experience";

export const experienceData: Experience[] = [
  {
    title: "Projet perso - API de gestion de tâches/équipes - Partie back-end",
    subtitle: "Création d'une API de gestion de tâches et d'équipes",
    paragraphsDescription: [
      "À la suite de mon stage, je me suis intéressé à la 'Clean Architecture' et au design pattern 'CQRS'.",
      "Ils sont souvent utilisés ensemble pour la création d'APIs. J'ai donc suivi la formation de Jakub Kozera, 'ASP.NET Core 8 Web API: Clean architecture + Azure services', afin d'apprendre les bonnes pratiques. J'ai ensuite commencé à développer mon propre projet, une todo list, mais pas une simple todo list.",
      "Mon objectif était de créer une application capable de gérer les tâches et missions au sein d'une équipe ou d'une entreprise. J'ai aussi mis l'accent sur les rôles utilisateur et y ai inclus de nombreuses vérifications. Le tout est testé avec xUnit.",
      "Cette API a été réalisée avec .NET, Entity Framework et Identity. J'ai également utilisé des packages comme MediatR, AutoMapper et Fluent Validation.",
    ],
    image: "./images/cleanarchtodoapi.png",
    githhubLink: "https://github.com/Nico7522/Todo-Front",
  },
  {
    title: "Projet perso - API de gestion de tâches/équipes - Partie front-end",
    subtitle:
      "Création d'une application Web de gestion de tâches et d'équipes",
    paragraphsDescription: [
      "Pour consommer cette API, j'ai utilisé Angular 17 et Angular Material pour le style. J'en ai profité pour combiner RxJS et les signals, qui sont très plaisants à utiliser ensemble, à mon avis. J'ai également implémenté un système de chat grâce aux WebSockets.",
      "La partie utilisateur est presque terminée, mais la partie administrateur reste à développer.",
    ],
    image: "./images/todofront.png",
    githhubLink: "https://github.com/Nico7522/Todo-Front",
  },
  {
    title: "Stage chez Multi OS",
    subtitle: "Refonte d'une application Web en Angular 17",
    paragraphsDescription: [
      "J'ai réalisé un stage chez Multi OS où j'ai pu mettre en pratique mes compétences et moderniser une partie de l'application Web de Multi OS.",
      "Pour cela, j'ai démarré un nouveau projet en Angular 17 en standalone component, et j'ai utilisé la bibliothèque PrimeNG pour le style.",
    ],
    image: "./images/multios.png",
  },
  {
    title:
      "Projet de fin de l'abonnement Architecte Logiciel - Partie back-end",
    subtitle: "Création d'une API pour mon projet de fin de formation",
    paragraphsDescription: [
      "Pour mon projet final de ma formation d'Architecte Logiciel, j'ai réalisé un e-commerce de vente de chaussures.",
      "Pourquoi un e-commerce ? Car je me suis dit que ce type de projet allait me permettre d'utiliser un maximum de compétences, tout en me confrontant à des problématiques nouvelles.",
      "Pour cette API, j'ai utilisé l'environnement .NET avec Entity Framework.",
    ],
    image: "./images/pffarch.png",
    githhubLink: "https://github.com/Nico7522/API_EF_Hash_Token",
  },
  {
    title:
      "Projet de fin de l'abonnement Architecte Logiciel - Partie front-end",
    subtitle: "Création d'un site Web pour mon projet de fin de formation",
    paragraphsDescription: [
      "Pour la partie front-end de ce projet, j'ai utilisé Angular 16 et Angular Material pour le style.",
      "Bien que ce projet ne soit pas totalement terminé, je suis assez satisfait de ce que j'ai pu faire et mettre en pratique.",
    ],
    image: "./images/labo-project-arch.png",
    githhubLink: "https://github.com/Nico7522/angular-labo",
  },
  {
    title: "Projet perso - Encyclopédie One Piece",
    subtitle: "Création d'un site d'informations sur le lore de One Piece",
    paragraphsDescription: [
      "Après la fin de ma formation de Développeur Full Stack et voulant travailler avec React et TypeScript, j'ai créé une mini-encyclopédie sur les objets et lieux du manga One Piece.",
      "Je me suis aidé d'une API publique créée par des fans : https://api-onepiece.com/fr",
    ],
    image: "./images/encyclopediop.png",
    link: "https://mini-encyclopedie-op.vercel.app/",
    githhubLink: "https://github.com/Nico7522/fdd-project",
  },
  {
    title: "Projet perso - Site de lecture de manga",
    subtitle: "Création d'un site de lecture",
    paragraphsDescription: [
      "Afin d'aider un ami traducteur à partager son travail, j'ai créé un petit site Web en React et TypeScript.",
      "Chaque mois, les nouveaux chapitres étaient postés sur le site et lus par la communauté.",
    ],
    image: "./images/sitedr.png",
    link: "https://deadrock-lecture.vercel.app/",
    githhubLink: "https://github.com/Nico7522/deadrock-project",
  },
  {
    title: "Projet de fin de formation - Site de cuisine",
    subtitle: "Création d'un site de recettes de cuisine",
    paragraphsDescription: [
      "Pour le projet de fin de ma formation de Développeur Web Full Stack, j'ai réalisé un site de recettes de cuisine.",
      "Mon objectif était de créer un projet complet et de le réaliser seul, de A à Z, du schéma de la base de données jusqu'au déploiement.",
      "Pour ce projet, j'ai utilisé Node/Express.js/MySQL pour le back-end et React.js pour le front-end.",
      "Pour l'hébergement, j'ai opté pour un VPS afin d'héberger l'API. C'était une belle occasion d'en apprendre davantage sur le déploiement.",
    ],
    image: "./images/cuisine.jpg",
    link: "https://ncls.nicorecipe.com/",
    githhubLink: "https://github.com/Nico7522/recipe-project",
  },
];
