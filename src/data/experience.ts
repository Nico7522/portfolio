import { Experience } from "../models/experience";

export const experienceData: Experience[] = [
  {
    title: "Création d'un site vitrine pour un salon de coiffure",
    subtitle: "Projet perso",
    paragraphsDescription: {
      technologies: "Next JS + Tailwind + Sanity",
      deployment: "Vercel",
      functionalities:
        "Présentation du salon, partage des informations utiles et partage de certains travaux réalisés",
    },
    image: "./images/sahdcoiff.png",
    alt: "sahdcoiff",
    link: "https://sahdcoiff.vercel.app/",
    githhubLink: "https://github.com/Nico7522/sahdcoiff",

    // [
    //   "Voici un projet réalisé avec Angular 20 et NodeJS + Supabase.",
    //   "C'est une simple application dédiée à la gestion de factures pour un garage automobile.",
    //   "Une connexion est nécéssaire dans un premier temps, on peut ensuite créer/modifier/supprimer de nouveaux clients et de nouvelles factures, ainsi qu'avoir une vue d'ensemble sur différentes données via la page d'acceuil.",
    //   "Le tout est hébergé sur mon VPS, le back end est exposé via Caddy et le front end servi par un container Nginx.",
    // ],
  },
  {
    title: "Création d'une application Web de gestion de factures pour garage",
    subtitle: "Projet perso",
    paragraphsDescription: {
      technologies: "NodeJS + Express + Supabase / Angular 20",
      deployment: "VPS, Docker et Caddy",
      functionalities: "Authentification et CRUD clients et factures",
    },
    image: "./images/invoice-g.png",
    alt: "invoice-g",
    link: "https://invoice-g.be/auth/login",
    githhubLink: "https://github.com/Nico7522/invoices-g",

    // [
    //   "Voici un projet réalisé avec Angular 20 et NodeJS + Supabase.",
    //   "C'est une simple application dédiée à la gestion de factures pour un garage automobile.",
    //   "Une connexion est nécéssaire dans un premier temps, on peut ensuite créer/modifier/supprimer de nouveaux clients et de nouvelles factures, ainsi qu'avoir une vue d'ensemble sur différentes données via la page d'acceuil.",
    //   "Le tout est hébergé sur mon VPS, le back end est exposé via Caddy et le front end servi par un container Nginx.",
    // ],
  },
  {
    title: "Création d'une application dédiée à la création de carte Dokkan",
    subtitle: "Projet perso",
    paragraphsDescription: {
      technologies: "Angular 20+, Firebase, Node",
      deployment: "Vercel + Nginx (VPS)",
      functionalities:
        "Création de cartes Dokkan Battle. Ajout des attaques spéciales, stats, passif, artwork etc. Authentification et CRUD des cartes.",
    },
    image: "./images/dokkancardmaker.png",
    alt: "Dokkan Card Maker app",
    link: "https://dokkan-card-maker.com",
    githhubLink: "https://github.com/Nico7522/card-concept-maker",
    // [
    //   "Ce projet est une petite application en Angular 19+, utilisant principalement FormsModule qui est le module servant à la création et la gestion des formulaires.",
    //   "J'ai principalement créé ce projet pour deux raisons.",
    //   "La première est d'utiliser un maximum FormsModule afin de faire un formulaire le plus complexe possible.",
    //   "La seconde est d'aider les personnes aimant créer des concepts de personnage en leur fournissant un outil simple d'utilisation, et avec un résultat final très proche de ce que le jeu propose.",
    // ],
  },
  {
    title:
      "Création d'une application dédiée aux OST/animations de Dokkan Battle",
    subtitle: "Projet perso",
    paragraphsDescription: {
      technologies:
        "Angular 19.2 en SSR / Node.js / Express / TypeScript / PostgreSQL",
      deployment: "VPS et Caddy",
      functionalities:
        "Écoute des OST de Dokkan Battle. Lecture des animations associées.",
    },
    image: "./images/dokkanost.png",
    alt: "Dokkan OST app",
    link: "https://play.dokkan-ost-api.fr/home",
    githhubLink: "https://github.com/Nico7522/dokkan_ost_fs/tree/develop",
    // [
    //   "play.dokkan-ost-api.fr est un petit site dédié aux OST et aux animations des cartes/events de Dokkan Battle.",
    //   "Il permet d'écouter les OST des personnages et des events/niveaux, ainsi que de lire les animations associées.",
    //   "Le site fonctionne avec Angular 19.2 en SSR pour la partie front, et Node.js / Express / TypeScript / PostgreSQL pour le back.",
    //   "Afin de m'aider dans sa conception, je me suis créé quelques petits scripts en Python pour récupérer les informations dont j'ai besoin depuis la base de données de Dokkan, et les envoyer via mon API dans ma DB.",
    //   "En plus, je me sers aussi d'outils et de scripts permettant de convertir les fichiers extraits du jeu, qui sont à la base non lisibles, en fichiers lisibles et utilisables.",
    //   "Le tout est hébergé sur un VPS que j'administre personnellement.",
    //   "Attention ! Le site est loin d'être terminé et il y a des bugs, mais il est déjà possible d'écouter la plupart des OST et de lire les animations",
    // ],
  },
  {
    title: "Création d'une todo list avec Angular 19 - SSR",
    subtitle: "Projet perso",
    paragraphsDescription: {
      technologies: "Angular 19 / SSR",
      deployment: "Vercel",
      functionalities:
        "Gestion de tâches. Authentification. Rôles utilisateurs.",
    },
    image: "./images/angular19ssrtodo.png",
    alt: "Todo app Angular 19",
    link: "https://your-task-sigma.vercel.app",
    githhubLink: "https://github.com/Nico7522/todo-list-angular-19",
    // [
    //   "Suite à la sortie de la version 19 d'Angular, j'ai voulu pour la première fois tester le Server Side Rendering en utilisant quelques nouveautés d'Angular 19.",
    //   "Je souhaitais en même temps montrer mes capacités avec ce framework, pour ce faire, j'ai donc créer une application permettant de gérer des tâches, et la rendre disponible pour tout le monde.",
    //   "La page d'acceuil permet de se 'connecter' soit en tant qu'utilisateur, soit en tant qu'admin. Ensuite, il est possible de s'y balader, ajouter des tâches, les éditer ...",
    //   "J'ai essayé au maximum de me servir de ce que Angular propose de mieux (signals, rxjs, ssr, nouvelle syntaxe ...) tout en me concentrant sur les bonnes pratiques.",
    // ],
  },
  {
    title: "API de gestion de tâches/équipes - Partie back-end",
    subtitle: "Projet perso",
    paragraphsDescription: {
      technologies: "ASP.NET Core 9 / Entity Framework / Identity",
      deployment: "/",
      functionalities:
        "Gestion de tâches et d'équipes. Authentification. Rôles utilisateurs. WebSocket. Testé avec xUnit.",
    },
    image: "./images/cleanarchtodoapi.png",
    alt: "Clean arch todo API",
    githhubLink: "https://github.com/Nico7522/Todo-Front",
    // [
    //   "À la suite de mon stage, je me suis intéressé à la 'Clean Architecture' et au design pattern 'CQRS'.",
    //   "Ils sont souvent utilisés ensemble pour la création d'APIs. J'ai donc suivi la formation de Jakub Kozera, 'ASP.NET Core 8 Web API: Clean architecture + Azure services', afin d'apprendre les bonnes pratiques. J'ai ensuite commencé à développer mon propre projet, une todo list, mais pas une simple todo list.",
    //   "Mon objectif était de créer une application capable de gérer les tâches et missions au sein d'une équipe ou d'une entreprise. J'ai aussi mis l'accent sur les rôles utilisateur et y ai inclus de nombreuses vérifications. Le tout est testé avec xUnit.",
    //   "Cette API a été réalisée avec .NET, Entity Framework et Identity. J'ai également utilisé des packages comme MediatR, AutoMapper et Fluent Validation.",
    // ],
  },
  {
    title: "API de gestion de tâches/équipes - Partie front-end",
    subtitle: "Projet perso",
    paragraphsDescription: {
      technologies: "Angular 17 / Angular Material / RxJS / WebSocket",
      deployment: "/",
      functionalities:
        "Gestion de tâches et d'équipes. Authentification. Rôles utilisateurs. Chat avec WebSockets.",
    },
    image: "./images/todofront.jpg",
    alt: "Front todo API",
    githhubLink: "https://github.com/Nico7522/Todo-Front",
    // [
    //   "Pour consommer cette API, j'ai utilisé Angular 17 et Angular Material pour le style. J'en ai profité pour combiner RxJS et les signals, qui sont très plaisants à utiliser ensemble, à mon avis. J'ai également implémenté un système de chat grâce aux WebSockets.",
    //   "La partie utilisateur est presque terminée, mais la partie administrateur reste à développer.",
    // ],
  },
  {
    title: "Stage chez Multi OS / Refonte de l'application Web avec Angular 17",
    subtitle: "Stage",
    paragraphsDescription: {
      technologies: "Angular 17 / PrimeNG",
      deployment: "/",
      functionalities:
        "Authentification. Rôles utilisateurs. Chat avec WebSockets. Sécurité, Gestion, etc.",
    },
    image: "./images/multios.png",
    alt: "Multi OS logo",
    // [
    //   "J'ai réalisé un stage chez Multi OS où j'ai pu mettre en pratique mes compétences et moderniser une partie de l'application Web de Multi OS.",
    //   "Pour cela, j'ai démarré un nouveau projet en Angular 17 en standalone component, et j'ai utilisé la bibliothèque PrimeNG pour le style.",
    // ],
  },
  {
    title: "E-commerce de vente de chaussures - Partie back-end",
    subtitle: "Projet de fin de formation Architecte Logiciel",
    paragraphsDescription: {
      technologies: "ASP.NET Core 8 / Entity Framework",
      deployment: "/",
      functionalities:
        "Authentification. Gestion des stocks. Gestion des clients. Gestion des commandes.",
    },
    image: "./images/pffarch.png",
    alt: "Back projet arch logiciel photo",

    githhubLink: "https://github.com/Nico7522/API_EF_Hash_Token",
    // [
    //   "Pour mon projet final de ma formation d'Architecte Logiciel, j'ai réalisé un e-commerce de vente de chaussures.",
    //   "Pourquoi un e-commerce ? Car je me suis dit que ce type de projet allait me permettre d'utiliser un maximum de compétences, tout en me confrontant à des problématiques nouvelles.",
    //   "Pour cette API, j'ai utilisé l'environnement .NET avec Entity Framework.",
    // ],
  },
  {
    title: "E-commerce de vente de chaussures - Partie front-end",
    subtitle: "Projet de fin de formation Architecte Logiciel",
    paragraphsDescription: {
      technologies: "Angular 16 / Angular Material",
      deployment: "/",
      functionalities:
        "Authentification. Gestion des stocks. Gestion des clients. Gestion des commandes.",
    },
    image: "./images/labo-project-arch.png",
    alt: "Front projet arch logiciel photo",
    githhubLink: "https://github.com/Nico7522/angular-labo",
    // [
    //   "Pour la partie front-end de ce projet, j'ai utilisé Angular 16 et Angular Material pour le style.",
    //   "Bien que ce projet ne soit pas totalement terminé, je suis assez satisfait de ce que j'ai pu faire et mettre en pratique.",
    // ],
  },
  {
    title: "Encyclopédie One Piece",
    subtitle: "Projet perso",
    paragraphsDescription: {
      technologies: "React / TypeScript",
      deployment: "Vercel",
      functionalities: "Recherche d'objets et lieux du manga One Piece.",
    },
    image: "./images/encyclopediop.png",
    alt: "Encyclopédie One Piece photo",
    link: "https://mini-encyclopedie-op.vercel.app/",
    githhubLink: "https://github.com/Nico7522/fdd-project",
    // [
    //   "Après la fin de ma formation de Développeur Full Stack et voulant travailler avec React et TypeScript, j'ai créé une mini-encyclopédie sur les objets et lieux du manga One Piece.",
    //   "Je me suis aidé d'une API publique créée par des fans : https://api-onepiece.com/fr",
    // ],
  },
  {
    title: "Site de lecture de manga / Aide à un traducteur indépendant",
    subtitle: "Projet perso",
    paragraphsDescription: {
      technologies: "React / TypeScript",
      deployment: "Vercel",
      functionalities: "Lecture de chapitres de manga.",
    },
    image: "./images/sitedr.png",
    alt: "Site lecture photo",
    link: "https://deadrock-lecture.vercel.app/",
    githhubLink: "https://github.com/Nico7522/deadrock-project",
    // [
    //   "Afin d'aider un ami traducteur à partager son travail, j'ai créé un petit site Web en React et TypeScript.",
    //   "Chaque mois, les nouveaux chapitres étaient postés sur le site et lus par la communauté.",
    // ],
  },
  {
    title: "Site de cuisine",
    subtitle: "Projet de fin de formation Développeur Web Full Stack",
    paragraphsDescription: {
      technologies: "Node/Express.js/MySQL / React.js",
      deployment: "VPS et Nginx",
      functionalities:
        "Authentification. Gestion des recettes. Gestion des utilisateurs.",
    },
    image: "./images/cuisine.jpg",
    alt: "Projet Full Stack Dev photo",
    link: "https://ncls.nicorecipe.com/",
    githhubLink: "https://github.com/Nico7522/recipe-project",
    // [
    //   "Pour le projet de fin de ma formation de Développeur Web Full Stack, j'ai réalisé un site de recettes de cuisine.",
    //   "Mon objectif était de créer un projet complet et de le réaliser seul, de A à Z, du schéma de la base de données jusqu'au déploiement.",
    //   "Pour ce projet, j'ai utilisé Node/Express.js/MySQL pour le back-end et React.js pour le front-end.",
    //   "Pour l'hébergement, j'ai opté pour un VPS afin d'héberger l'API. C'était une belle occasion d'en apprendre davantage sur le déploiement.",
    // ],
  },
];
