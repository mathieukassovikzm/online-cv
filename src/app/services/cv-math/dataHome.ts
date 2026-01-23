import {
  IEnterpriseModel,
  IHomeModel,
  IRecommendationModel,
  IServiceModel,
} from 'src/app/models/home';

export const lstLogosEntreprises = <IEnterpriseModel[]>[
  { name: 'Atos', logo: './assets/logos/Atos.png', alt: 'Logo Atos' },
  {
    name: 'Bouygues Telecom',
    logo: './assets/logos/Bouygues.png',
    alt: 'Logo Bouygues Telecom',
  },
  { name: 'RRF', logo: './assets/logos/RRF.png', alt: 'Logo RRF' },
  { name: 'Solina', logo: './assets/logos/Solina.png', alt: 'Logo Solina' },
  {
    name: 'Sopra Steria',
    logo: './assets/logos/Sopra.png',
    alt: 'Logo Sopra Steria',
  },
  { name: 'Veonum', logo: './assets/logos/Veonum.png', alt: 'Logo Veonum' },
];

// ------------ Services ------------ 
export const devBackend = <IServiceModel>{
  title: "",
  descriptions: []
};

export const devFrontend = <IServiceModel>{
  title: "",
  descriptions: []
};

export const devFullStack = <IServiceModel>{
  title: "",
  descriptions: []
};

export const weddingPhotography = <IServiceModel>{
  title: "",
  descriptions: []
};

export const famillyPhotograph = <IServiceModel>{
  title: "",
  descriptions: []
};

export const eventAnnouncement = <IServiceModel>{
  title: "",
  descriptions: []
};

// ------------ Recommendations ------------ 
export const sebastienPinet = <IRecommendationModel>{
  nom: 'Sebastien Pinet',
  enterprise: 'Véonum',
  email: 'seb.pinet35@gmail.com',
  phone: '+33 6 16 10 73 42',
  photo: './assets/recommendations/Sebastien.jpeg',
};

export const patrickLeprince = <IRecommendationModel>{
  nom: 'Patrick Lepince',
  enterprise: 'Véonum',
  email: 'patrick.leprince@veonum.com',
  phone: '+33 7 67 70 66 53',
  photo: './assets/recommendations/Patrick.jpeg',
};

export const michelPelgrin = <IRecommendationModel>{
  nom: 'Michel Pelgrin',
  enterprise: 'Freelance',
  email: 'copernicus_13@hotmail.com',
};

export const homeFr: IHomeModel = {
  lstRecap: [
    { libelle: "Année d'expérience", value: 10 },
    { libelle: 'Happy Customers', value: 10 },
    { libelle: 'Completed Projects', value: 10 },
    { libelle: 'Honors and Awards', value: 10 },
  ],
  lstServices: [
    <IServiceModel>{
      ...devBackend,
      title: "Développement backend",
      descriptions: [
        "Développeur backend, je conçois et maintiens des API robustes, performantes et sécurisées. J'interviens sur la conception d'architectures, la gestion de bases de données et l'optimisation des performances."
      ]
    },
    <IServiceModel>{
      ...devFrontend,
      title: "Développement front",
      descriptions: [
        "Développeur front-end, je suis capable d'intervenir sur un projet vierge ou existant, pour des évolutions ou des corrections de bugs en Angular et Vue.js."
      ]
    },
    <IServiceModel>{
      ...devFullStack,
      title: "Développement fullstack",
      descriptions: [
        "Développeur fullstack, je prends en charge un projet de bout en bout, du backend au frontend, en assurant la cohérence technique, la performance et la qualité de l'FFOexpérience utilisateur."
      ]
    },
    <IServiceModel>{
      ...weddingPhotography,
      title: "Photographe de mariage",
      descriptions: [
        "De la cérémonie religieuse à l'église jusqu'à la fête de noces et la soirée, je capture chaque moment marquant de votre mariage."
      ]
    },
    <IServiceModel>{
      ...famillyPhotograph,
      title: "Photographe de famille",
      descriptions: [
        "Je propose des services de photographie, notamment pour des photos de famille, de grossesse et de naissance."
      ]
    },
    <IServiceModel>{
      ...eventAnnouncement,
      title: "Faire-part",
      descriptions: [
        "Passionné de création graphique, je réalise des faire-part de mariage et de naissance sur mesure."
      ]
    },
  ],
  lstRecommendations: [
    <IRecommendationModel>{
      ...sebastienPinet,
      text: "J'ai eu la chance de travailler avec Mathieu quelques années et suivre ses autres aventures professionnelles par la suite. En complément d'une solide formation au sein d'une très bonne école d'ingénieur Rennaise, j'ai apprécié tant ses qualités humaines que ses compétences techniques. Enthousiaste, flexible, disponible pour accompagner les autres, impliqué dans son travail, le sens des responsabilités, brillant techniquement, ouvert d'esprit, ... en résumé le collaborateur que l'on souhaite tous embarquer dans son équipe.",
    },
    <IRecommendationModel>{
      ...michelPelgrin,
      text: "J'ai eu le plaisir de recruter et d'encadrer Mathieu pendant deux ans lors d'une mission chez Bouygues Telecom, où il a rejoint mon équipe en tant que développeur .NET. Son intégration et sa prise de poste furent remarquablement rapides. Dès les premières semaines, il avait assimilé nos standards de code et nos conventions spécifiques, qu'il appliquait avec une rigueur exemplaire. Ce qui m'a particulièrement marqué, c'est sa capacité à monter en compétence sur de nouvelles technologies (Blazor et PL/SQL notamment) en un temps record, sans jamais sacrifier la qualité de son travail. Mais au-delà de ses compétences techniques, c'est son état d'esprit qui le distingue. Sans qu'on le lui demande, il a par la suite pris l'initiative de documenter ses travaux et de créer des guides pour faciliter la vie de ses collègues. Cette générosité dans le partage de connaissances est une qualité rare que j'ai profondément appréciée. Lorsque j'ai quitté la mission, il m'a succédé en tant que lead développeur. Il a repris ce rôle avec brio, en faisant preuve d'un leadership naturel tout en conservant cette attitude bienveillante et ouverte qui le caractérise. Je recommande Mathieu sans la moindre réserve. Toute équipe qui l'accueillera aura la chance d'avoir non seulement un excellent lead développeur, mais aussi quelqu'un qui élève ceux qui l'entourent.",
    },
    <IRecommendationModel>{
      ...patrickLeprince,
      text: 'Au top',
    }
  ],
  lstLogos: lstLogosEntreprises,
};

export const homeEn: IHomeModel = {
  lstRecap: [
    { libelle: 'Years Experience', value: 10 },
    { libelle: 'Happy Customers', value: 10 },
    { libelle: 'Completed Projects', value: 10 },
    { libelle: 'Honors and Awards', value: 10 },
  ],
  lstServices: [
    <IServiceModel>{
      ...devBackend,
      title: "Backend development",
      descriptions: [
        "As a backend developer, I design and maintain robust, high-performance, and secure APIs. I work on architecture design, database management, and performance optimization."
      ]
    },
    <IServiceModel>{
      ...devFrontend,
      title: "Frontend development",
      descriptions: [
        "As a frontend developer, I can work on new or existing projects, handling feature development or bug fixes using Angular and Vue.js."
      ]
    },
    <IServiceModel>{
      ...devFullStack,
      title: "Fullstack development",
      descriptions: [
        "As a fullstack developer, I manage projects end to end, from backend to frontend, ensuring technical consistency, performance, and a high-quality user experience."
      ]
    },
    <IServiceModel>{
      ...weddingPhotography,
      title: "Wedding photographer",
      descriptions: [
        "From the religious ceremony at the church to the wedding reception and evening celebration, I capture every meaningful moment of your wedding day."
      ]
    },
    <IServiceModel>{
      ...famillyPhotograph,
      title: "Family photographer",
      descriptions: [
        "I offer photography services for family portraits, maternity sessions, and newborn photography."
      ]
    },
    <IServiceModel>{
      ...eventAnnouncement,
      title: "Invitations",
      descriptions: [
        "Passionate about graphic design, I create custom-made wedding and birth announcements."
      ]
    },
  ],
  lstRecommendations: [
    <IRecommendationModel>{
      ...sebastienPinet,
      text: "I had the opportunity to work with Mathieu for several years and to follow his professional journey thereafter. In addition to a strong academic background from an excellent engineering school in Rennes, I truly appreciated both his human qualities and his technical skills. Enthusiastic, flexible, always willing to support others, deeply committed to his work, with a strong sense of responsibility, technically outstanding and open-minded — in short, the kind of colleague everyone would want on their team.",
    },
    <IRecommendationModel>{
      ...michelPelgrin,
      text: "I had the pleasure of recruiting and managing Mathieu for two years during a mission at Bouygues Telecom, where he joined my team as a .NET developer. His onboarding and ramp-up were remarkably fast. Within the first few weeks, he had fully mastered our coding standards and specific conventions, applying them with exemplary rigor. What impressed me most was his ability to quickly upskill on new technologies (notably Blazor and PL/SQL) without ever compromising on quality. Beyond his technical expertise, his mindset truly sets him apart. On his own initiative, he documented his work and created guides to make his colleagues’ lives easier. This generosity in knowledge sharing is a rare quality that I greatly appreciated. When I left the mission, he succeeded me as lead developer and took on the role brilliantly, demonstrating natural leadership while maintaining a kind and open attitude. I recommend Mathieu without hesitation: any team would be fortunate to have not only an excellent lead developer, but also someone who elevates those around him.",
    },
    <IRecommendationModel>{
      ...patrickLeprince,
      text: "Outstanding.",
    }
  ],
  lstLogos: lstLogosEntreprises,
};

export const homeEs: IHomeModel = {
  lstRecap: [
    { libelle: 'Anos de experiencias', value: 10 },
    { libelle: 'Happy Customers', value: 10 },
    { libelle: 'Completed Projects', value: 10 },
    { libelle: 'Honors and Awards', value: 10 },
  ],
  lstServices: [
    <IServiceModel>{
      ...devBackend,
      title: "Desarrollo backend",
      descriptions: [
        "Como desarrollador backend, diseño y mantengo APIs sólidas, seguras y de alto rendimiento. Trabajo en el diseño de arquitecturas, la gestión de bases de datos y la optimización del rendimiento."
      ]
    },
    <IServiceModel>{
      ...devFrontend,
      title: "Desarrollo frontend",
      descriptions: [
        "Como desarrollador frontend, puedo intervenir en proyectos nuevos o existentes, realizando evoluciones o correcciones de errores con Angular y Vue.js."
      ]
    },
    <IServiceModel>{
      ...devFullStack,
      title: "Desarrollo fullstack",
      descriptions: [
        "Como desarrollador fullstack, me encargo de proyectos de principio a fin, desde el backend hasta el frontend, garantizando coherencia técnica, rendimiento y una excelente experiencia de usuario."
      ]
    },
    <IServiceModel>{
      ...weddingPhotography,
      title: "Fotógrafo de bodas",
      descriptions: [
        "Desde la ceremonia religiosa en la iglesia hasta la celebración y la fiesta, capturo cada momento especial de su boda."
      ]
    },
    <IServiceModel>{
      ...famillyPhotograph,
      title: "Fotógrafo familiar",
      descriptions: [
        "Ofrezco servicios de fotografía, incluyendo sesiones familiares, de embarazo y de recién nacidos."
      ]
    },
    <IServiceModel>{
      ...eventAnnouncement,
      title: "Invitaciones",
      descriptions: [
        "Apasionado por el diseño gráfico, realizo invitaciones personalizadas para bodas y nacimientos."
      ]
    },
  ],
  lstRecommendations: [
    <IRecommendationModel>{
      ...sebastienPinet,
      text: "Tuve la oportunidad de trabajar con Mathieu durante varios años y de seguir posteriormente su trayectoria profesional. Además de contar con una sólida formación en una excelente escuela de ingeniería de Rennes, pude apreciar tanto sus cualidades humanas como sus competencias técnicas. Entusiasta, flexible, siempre dispuesto a apoyar a los demás, muy comprometido con su trabajo, con un fuerte sentido de la responsabilidad, técnicamente brillante y de mente abierta; en resumen, el tipo de colaborador que todos querríamos tener en nuestro equipo.",
    },
    <IRecommendationModel>{
      ...michelPelgrin,
      text: "Tuve el placer de contratar y supervisar a Mathieu durante dos años en una misión en Bouygues Telecom, donde se incorporó a mi equipo como desarrollador .NET. Su integración y adaptación al puesto fueron extraordinariamente rápidas. En pocas semanas, ya dominaba nuestros estándares de código y convenciones específicas, aplicándolos con un rigor ejemplar. Lo que más me impresionó fue su capacidad para adquirir rápidamente nuevas competencias tecnológicas (especialmente Blazor y PL/SQL) sin comprometer nunca la calidad de su trabajo. Más allá de sus habilidades técnicas, destaca especialmente por su actitud. Por iniciativa propia, documentó su trabajo y creó guías para facilitar el día a día de sus compañeros. Esta generosidad en el intercambio de conocimientos es una cualidad poco común que valoré enormemente. Cuando dejé la misión, me sucedió como lead developer y asumió el rol con gran éxito, demostrando un liderazgo natural sin perder su carácter cercano y abierto. Recomiendo a Mathieu sin ninguna reserva: cualquier equipo tendrá la suerte de contar no solo con un excelente lead developer, sino también con una persona que impulsa a quienes lo rodean.",
    },
    <IRecommendationModel>{
      ...patrickLeprince,
      text: "Excelente.",
    }
  ],
  lstLogos: lstLogosEntreprises,
};
