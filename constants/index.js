export const navLinks = [
  {
    label: "About",
    href: "/pages/about",
  },
  {
    label: "Projects",
    href: "/pages/project",
  },
  {
    label: "Contact",
    href: "/pages/contact",
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const projects = [
  {
    title: "Kortext",
    description:
      "Kortex est une application web moderne construite avec Next.js et l'utilisation avancée de TypeScript assure la stabilité du code et améliore la maintenance à long terme. La fonctionnalité phare de Kortex est l'intégration transparente de modèles de génération de langage naturel d'OpenAI pour proposer des contenus originaux à la demande. Le moteur de Kortex récupère intelligemment le contexte de la page pour alimenter le modèle textuel d'OpenAI. Qu'il s'agisse de compléter une biographie, générer un paragraphe ou proposer des intitulés accrocheurs.",
    lien: "https://kortex-ai-6kny.vercel.app/",
    img: "/kortext.png",
  },
  {
    title: "Meethub",
    description:
      "MeetHub est une plateforme de vidéoconférence intuitive conçue pour réunir les gens du monde entier en ligne. Avec MeetHub, vous pouvez organiser des réunions professionnelles, des séminaires en ligne, des cours virtuels et des retrouvailles avec vos proches, le tout en quelques clics.",
    lien: "https://meet-hub-4eyg.vercel.app/",
    img: "/meethub.png",
  },
  {
    title: "Syntek",
    description:
      "syntek est un outil de création et de retouche d'images conçu pour faciliter les tâches de traitement visuel complexes, le tout dans une interface simple et intuitive. Inspirée de Canva, elle permet aux utilisateurs de transformer leurs images avec plusieurs fonctionnalités puissante. Syntek s'adresse à tous, des créateurs de contenu aux professionnels du design, cherchant un outil polyvalent pour perfectionner leurs visuels en quelques clics.",
    lien: "https://syntek.vercel.app/",
    img: "/syntek.png",
  },
  {
    title: "Conteo",
    description:
      "Conteo est une plateforme immersive dédiée aux passionnés d'histoires. Inspirée de Wattpad, elle offre un espace unique où les lecteurs peuvent découvrir et suivre des récits captivants. Que vous soyez amateur de romance, de science-fiction, de fantasy ou d'aventure, Conteo regorge d'histoires pour tous les goûts. Conteo est conçu pour vous plonger dans des mondes imaginaires riches et variés, tout en rendant la lecture accessible à tous.",
    lien: "https://syntek.vercel.app/",
    img: "/conteo.png",
  },
];


export const SocialMedia = [
  {
    img: "/images/github.png",
    href: "https://github.com/m3dev4"
  },
  {
    img: "/images/linkedin.png",
    href: "https://www.linkedin.com/in/mouhamed-lo-287a06202/"
  }
]


export const iconTech = [
  {
    name: "html",
    img: "/medias/html.png"
  },
  {
    name: "css",
    img: "/medias/css.png"
  },
  {
    name: "js",
    img: "/icons/js.png"
  },
  {
    name: "typescript",
    img: "/icons/typescript.png"
  },
  {
    name: "reactjs",
    img: "/medias/react.png"
  },
  {
    name: "nextjs",
    img: "/medias/nextjs.png"
  },
  {
    name: "python",
    img: "/medias/python.png"
  },
  {
    name: "nodejs",
    img: "/medias/nodejs.png"
  },
  {
    name: "tailwind",
    img: "/medias/tailwind.png"
  },
  {
    name: "docker",
    img: "/medias/docker.png"
  },
  {
    name: "postgres",
    img: "/medias/postgresql.png"
  },
  {
    name: "mongoDb",
    img: "/medias/mongodb.png"
  },
  {
    name: "graphql",
    img: "/medias/graphql.png"
  },
  {
    name: "adobe-illustrator",
    img: "/medias/adobe-illustrator.png"
  },
  {
    name: "adobe-photoshop",
    img: "/medias/adobe-photoshop.png"
  },
 
  {
    name: "figma",
    img: "/medias/figma.png"
  },
 
  {
    name: "redux",
    img: "/medias/redux.png"
  },
 
  
]