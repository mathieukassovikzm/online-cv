import { IAboutModel, IExperienceModel, IHobbyModel } from 'src/app/models/about';
import { TypeExperienceEnum, TypeHobbyEnum } from 'src/app/models/enum';

// Educations
const insa = <IExperienceModel>{
  title: 'BAC +5, Ingénieur SRC',
  company: 'INSA',
  dateEnd: new Date('2013-06-01'),
  date: '2010 - 2013',
  address: 'Rennes, France',
  typeExpe: TypeExperienceEnum.Education,
  display: true,
};
const iut = <IExperienceModel>{
  title: 'DUT GEII',
  company: 'IUT',
  dateEnd: new Date('2010-06-01'),
  date: '2008 - 2010',
  address: 'Brest, France',
  typeExpe: TypeExperienceEnum.Education,
  display: true,
};

// Archievements
const go2sport = <IExperienceModel>{
  company: 'Go2sport.fr',
  dateEnd: new Date('2020-03-01'),
  date: '01/2020 - 03/2020',
  address: 'Rennes, France',
  description: {
    technicalEnv: ['Html5', 'Css3', 'Scss', 'VueJs'],
  },
  typeExpe: TypeExperienceEnum.Archievement,
  display: true,
};
const ahah = <IExperienceModel>{
  company: 'All Hands and Hearts',
  dateEnd: new Date('2019-07-01'),
  date: '03/2019 - 07/2019',
  address: 'Oaxaca, Mexico',
  typeExpe: TypeExperienceEnum.Archievement,
  display: true,
};
const teacher = <IExperienceModel>{
  title: "Professeur de français et d'anglais",
  company: 'Indépendant',
  dateEnd: new Date('2019-02-01'),
  date: '06/2017 - 02/2019',
  address: 'Rennes, France / Antofagasta & Santiago, Chile',
  description: {
    dsc: "Classes particulières d'anglais et de français principalement centrées sur la conversation orale, apprentissage du vocabulaire, des règles de grammaires, le tout de manière ludique et pédagogique.",
  },
  typeExpe: TypeExperienceEnum.Archievement,
  display: true,
};

// Experiences Pro
const freelanceBouygues = <IExperienceModel>{
  company: 'Freelance - Bouygues Telecom',
  dateEnd: new Date('2025-12-30'),
  date: '04/2023 - 12/2025',
  address: 'Rennes, France',
  description: {
    technicalEnv: [
      'Angular',
      'HTML5',
      'SCSS',
      'DevExtreme',
      'C#',
      'Git',
      'Azure DevOps',
      'Bruno',
    ],
  },
  typeExpe: TypeExperienceEnum.ExperiencePro,
  display: true,
};
const freelanceSolina = <IExperienceModel>{
  company: 'Freelance - Solina',
  dateEnd: new Date('2024-11-01'),
  date: '10/2024 - 11/2024',
  address: 'Rennes, France',
  description: {
    technicalEnv: [
      'Angular',
      'HTML5',
      'SCSS',
      'Git',
      'Kendo',
    ],
  },
  typeExpe: TypeExperienceEnum.ExperiencePro,
  display: true,
};
const veonum = <IExperienceModel>{
  company: 'Veonum',
  dateEnd: new Date('2023-04-01'),
  date: '10/2019 - 03/2023',
  address: 'Rennes, France',
  description: {
    technicalEnv: [
      'Angular',
      'HTML5',
      'SCSS',
      'C#',
      'SQL Oracle',
      'PL-SQL',
      'Tortoise SVN',
      'Git',
      'Azure DevOps',
      'Postman',
    ],
  },
  typeExpe: TypeExperienceEnum.ExperiencePro,
  display: true,
};
const sopra = <IExperienceModel>{
  company: 'Sopra Stéria',
  dateEnd: new Date('2018-01-01'),
  date: '06/2016 - 01/2018',
  address: 'Rennes, France',
  description: {
    technicalEnv: [
      'Java',
      'Eclipse Kepler',
      'Tortoise SVN',
      'SQL Oracle',
      'PL-SQL',
      'Spring',
      'Hibernate',
      'Apache Maven',
    ],
  },
  typeExpe: TypeExperienceEnum.ExperiencePro,
  display: true,
};
const actemium = <IExperienceModel>{
  company: 'Actemium',
  dateEnd: new Date('2013-07-01'),
  date: '02/2013 - 07/2013',
  address: 'Rennes, France',
  description: {
    technicalEnv: [
      'Angular',
      'HTML5',
      'SCSS',
      'C#',
      'SQL Oracle',
      'PL-SQL',
      'Tortoise SVN',
      'Git',
      'Azure DevOps',
      'Postman',
    ],
  },
  typeExpe: TypeExperienceEnum.ExperiencePro,
  display: true,
};
const cesta = <IExperienceModel>{
  company: 'Cesta',
  dateEnd: new Date('2012-07-01'),
  date: '06/2012 - 07/2012',
  address: 'Rennes, France',
  description: {
    technicalEnv: ['C++', 'Qt'],
  },
  typeExpe: TypeExperienceEnum.ExperiencePro,
  display: true,
};

// Travels

// Hobbies
const drum = <IHobbyModel>{
  type: TypeHobbyEnum.Creativity,
  photo: './assets/hobbies/drum.jpg',
};
const guitar = <IHobbyModel>{
  type: TypeHobbyEnum.Creativity,
  photo: './assets/hobbies/guitar.jpg',
};
const running = <IHobbyModel>{
  type: TypeHobbyEnum.Sport,
  photo: './assets/hobbies/trail.jpg',
};
const handball = <IHobbyModel>{
  type: TypeHobbyEnum.Sport,
  photo: './assets/hobbies/hand.jpg',
};
const photo = <IHobbyModel>{
  type: TypeHobbyEnum.Creativity,
  photo: './assets/hobbies/photo.jpg',
};

export const aboutFr: IAboutModel = {
  extract:
    "Je suis très alaise socialement. J'ai l'habitude de cohabiter avec énormément de personnes, de différentes cultures, background. J'aime apprendre des gens et enseigner aux gens. Je suis d'un naturel à aider les gens. Principalement en donnant de mon temps. C'est pour cela que j'ai décidé de dédier 5 mois de ma vie à la reconstruction d'une école au Mexique. Je suis flexible, j'adore apprendre et je suis capable de m'adapter très vite à différents environnements de travail. Capable de travailler en équipe, je suis très enthousiaste avec un sens des responsabilités aigu.",
  educations: <IExperienceModel[]>[
    <IExperienceModel>{
      ...insa,
      description: {
        dsc: 'Institut National des Sciences Appliquées - Département Systèmes et Réseaux de Communication',
      },
    },
    <IExperienceModel>{
      ...iut,
      description: {
        dsc: 'Institut Universitaire de Technologie - Département Génie Electrique et Informatique Industrielle',
      },
    },
  ],
  archievements: <IExperienceModel[]>[
    <IExperienceModel>{
      ...go2sport,
      title: 'Développeur Web',
      description: {
        ...go2sport.description,
        dsc: "Développement d'un site internet professionnel pour un membre de ma famille",
        tasks: [
          'Chartre Graphique',
          'Design du site',
          'Développement du site internet',
        ],
      },
    },
    <IExperienceModel>{
      ...ahah,
      title: 'Volontaire dans une ONG',
      description: {
        ...ahah.description,
        dsc: 'Volontaire pour All Hand and Hearts à Oaxaca au Mexique afin de reconstruire une école.',
        tasks: [
          "Travail sur le site en tant que volontaire mais aussi en tant que chef d'équipe",
          'Remplacement de la personne en charge du marketing ainsi que de la personne en charge des relations avec la communauté pendant leurs vacances.',
          "En charge des classes d'anglais pour la communauté.",
        ],
      },
    },
    <IExperienceModel>{
      ...teacher,
      title: "Professeur de français et d'anglais",
      company: 'Indépendant',
      description: {
        dsc: "Classes particulières d'anglais et de français principalement centrées sur la conversation orale, apprentissage du vocabulaire, des règles de grammaires, le tout de manière ludique et pédagogique.",
      },
    },
  ],
  experiencesPro: <IExperienceModel[]>[
    <IExperienceModel>{
      ...freelanceBouygues,
      title: 'Développeur full stack',
      description: {
        ...freelanceBouygues.description,
        dsc: "",
        tasks: [
          "",
        ],
      },
    },
    <IExperienceModel>{
      ...freelanceSolina,
      title: 'Développeur Frontend',
      description: {
        ...freelanceSolina.description,
        dsc: "",
        tasks: [
          "",
        ],
      },
    },
    <IExperienceModel>{
      ...veonum,
      title: 'Développeur full stack',
      description: {
        ...veonum.description,
        dsc: "Amélioration et maintenance du système d'information de Bouygues Telecom au sein d'une équipe de 7 personnes dans les locaux d'Atos Rennes. Leader technique d'une équipe de 4 personnes dans la refonte “from scratch” de 3 applications client lourd en client web.",
        tasks: [
          "Mise en place d'architectures d'une application Angular et d'apis C#",
          'Développement de nouveaux projets frontend et backend (API Rest et SOAP).',
          "Maintenance et amélioration du code C# et SQL d'environ 10 applications.",
        ],
      },
    },
    <IExperienceModel>{
      ...sopra,
      title: 'Java developer',
      description: {
        ...sopra.description,
        dsc: "Amélioration et maintenance du système d'information (BIOS) de l'entreprise SFR en Java et SQL. Personnellement dans l'équipe PDC (Prise De Commande) d'environ 20 développeurs.",
        tasks: [
          "Détection et correction des erreurs du système d'application. Le travail consistait à identifier les problèmes à partir des plaintes clients, identifier ensuite la source du problème dans le code afin de proposer correction, l'implémenter en incluant une batterie de tests sur environnement de test afin de valider le nouveau fonctionnement.",
          "Développement de nouvelles fonctionnalités. Suivi d'un cahier des charges afin de réaliser une nouvelle fonctionnalité en incluant tous les tests pour valider le fonctionnement en assurant une intégration continue.",
          'Analyses et corrections de client en batch ou de manière indépendante en BDD.',
        ],
      },
    },
    <IExperienceModel>{
      ...actemium,
      title: 'Stagiaire Développeur C#',
      description: {
        ...actemium.description,
        dsc: "Développement d'un logiciel de suivi de production. A l'occasion d'un contrat avec l'entreprise Yves Rocher, Actemium a développé un logiciel de suivi de production nommé Prodpack. Cependant de fait de la spécificité de l'installation et des besoins d'Yves Rocher, ce logiciel n'est utilisable que par cette entreprise. Mon principal sujet a consisté à créer un logiciel de suivi de production centralisé dans une nouvelle application C# non pérenne et standardisée reprenant les fonctionnalités de Prodpack mais de façon modulable afin que son utilisation ne soit pas restreinte à l'entreprise Yves Rocher.",
        tasks: [
          'Codage de la partie fonctionnalités en C#.',
          'Codage de la partie graphique en Windows Forms.',
          'Réalisation de la base de données SQL Server.',
          "Récupération de vraies données d'une base Access de l'entreprise Yves Rocher pour les tests.",
          "Création d'une passerelle pour migrer les données Access dans la base SQL.",
          'Comparaison entre les résultats du logiciel avec les résultats de Prodpack.',
          'Rédaction du cahier des charges et du manuel utilisateur.',
        ],
      },
    },
    <IExperienceModel>{
      ...cesta,
      title: 'Stagiaire Développeur C++',
      description: {
        ...cesta.description,
        dsc: "Développement d'un logiciel de couverture radar. Ce logiciel était en lien étroit avec un logiciel déjà développé par la Cesta de rayonnement d'un radar en fonction de ses caractéristiques. L'utilisateur pouvait déployer les radars à sa disposition sur les différents sites où le déploiement était possible, suivant cette configuration il pouvait observer, sa couverture radar sous différentes vues à différentes altitudes.",
        tasks: [
          'Codage de la partie fonctionnalités en C++.',
          'Codage de la partie graphique en Qt.',
          "Récupération de matrices correspondant au rayonnement d'un radar sous format plat.",
          'Visualisation des résultats sous différentes vue 2D et 3D de la couverture radar.',
        ],
      },
    },
  ],
  travels: <IExperienceModel[]>[
    {
      title: '1 an backpacking en Amérique Latine',
      dateEnd: new Date('2019-07-01'),
      date: '02/2018 - 07/2019',
      description: {
        dsc: '',
      },
      typeExpe: TypeExperienceEnum.Travel,
      display: true,
    },
    {
      title: '7 mois backpacking en Asie',
      dateEnd: new Date('2016-04-01'),
      date: '10/2015 - 04/2016',
      description: {
        dsc: '',
      },
      typeExpe: TypeExperienceEnum.Travel,
      display: true,
    },
    {
      title: '2 ans backpacking en Australie',
      dateEnd: new Date('2015-10-01'),
      date: '10/2013 - 10/2015',
      description: {
        dsc: '',
      },
      typeExpe: TypeExperienceEnum.Travel,
      display: true,
    },
    {
      title: "1 semestre d'études en Suède",
      dateEnd: new Date('2013-01-01'),
      date: '09/2012 - 01/2013',
      description: {
        dsc: '',
      },
      typeExpe: TypeExperienceEnum.Travel,
      display: true,
    },
    {
      title: '2 mois au pair aux USA',
      dateEnd: new Date('2011-08-01'),
      date: '07/2011 - 08/2011',
      description: {
        dsc: '',
      },
      typeExpe: TypeExperienceEnum.Travel,
      display: true,
    },
    {
      title: "3 mois d'études en Angleterre",
      dateEnd: new Date('2010-06-01'),
      date: '03/2010 - 06/2010',
      description: {
        dsc: '',
      },
      typeExpe: TypeExperienceEnum.Travel,
      display: true,
    },
  ],
  hobbies: <IHobbyModel[]>[
    {
      ...guitar,
      title: 'Guitariste',
      description: [
        "À 15 ans, je suis entré en seconde où j'ai rencontré de nouveaux amis qui commençaient tout juste un groupe de musique.",
        "À force de fréquenter régulièrement le club musique avec mes amis, j'ai fini par sauter le pas et prendre une guitare en main.",
        "Depuis, je ne l'ai jamais vraiment lâchée !",
        "J'ai fini par intégrer le groupe moi aussi pendant 1 an, et je continue encore aujourd'hui en tant que guitariste amateur."
      ],
    },
    {
      ...drum,
      title: 'Batteur',
      description: [
        "Après la fin d'une première expérience dans un groupe à la guitare, mon meilleur ami a décidé de monter un nouveau groupe où il cherchait un batteur.",
        "C'est sur cette opportunité que j'ai décidé de me lancer dans la batterie...",
        "J'ai finalement passé 5 ans derrière les fûts !",
        "Aujourd'hui, étant donné l'encombrement et le niveau de décibels, il est plus difficile de s'entraîner, mais la batterie reste malgré tout une passion durable."
      ],
    },
    {
      ...running,
      title: 'Traileur',
      description: [
        "En 2020, nous avons tous fait face à un confinement dû au Covid...",
        "Étant quelque peu bigorexique, il me fallait trouver un sport réalisable tout en respectant les règles de cette période très particulière...",
        "Comme beaucoup de monde, je me suis donc mis à courir, et je me suis pris au jeu !",
        "Aujourd'hui, je suis très impliqué dans la pratique du trail, avec plusieurs courses de 50 km à mon actif, dont 3 participations au trail de la Pointe du Raz."
      ],
    },
    {
      ...handball,
      title: 'Ex-handballeur',
      description: [
        "Fils d'un handballeur, toute ma famille a toujours été fan de ce sport.",
        "J'ai donc, comme mes deux frères, joué 12 ans en club avant d'être coach de l'équipe 2 de l'INSA pendant 1 an."
      ],
    },
    {
      ...photo,
      title: 'Photographie / Vidéo',
      description: [
        "Lors de mes premiers voyages, seul mon meilleur ami possédait une caméra digne de ce nom.",
        "C'est après mon voyage au Japon, où j'étais sans lui et d'où je suis revenu sans aucun cliché convenable, que je me suis dit : 'plus jamais !'.",
        "J'ai donc investi dans un petit appareil hybride pour faire de la photo de voyage.",
        "Petit à petit, je me suis pris au jeu et je suis maintenant le photographe attitré de ma famille ainsi que de mon groupe d'amis !",
        "J'effectue de temps à autre des prestations semi-professionnelles afin de toujours perfectionner mon œil de photographe."
      ],
    }
  ],
};

export const aboutEn: IAboutModel = {
  extract:
    "IT engineer of the National Institute of Applied Sciences (INSA) in Rennes France in the Systems and Communication Network (SRC) department, which is the equivalent of a Master's degree in electronics and computer science. I speak fluently French and English and Spanish. I have started to volunteer for All Hands And Hearts in March 21th and it has been a revelation for me. I would like to continue this adventure as a staff member and get even more implicated in this incredible organisation. With a high capability of working in a team, very enthusiasm with my sense of responsibility. I also have an excellent interpersonal relations management with people from different origins and cultures.",
  educations: <IExperienceModel[]>[
    <IExperienceModel>{
      ...insa,
      description: {
        dsc: 'National Institute of Applied Sciences - Department of Communication Systems and Networks',
      },
    },
    <IExperienceModel>{
      ...iut,
      description: {
        dsc: 'University Institute of Technology - Department of Electrical Engineering and Industrial Computing',
      },
    },
  ],
  archievements: [
    <IExperienceModel>{
      ...go2sport,
      title: 'Web developer',
      description: {
        ...go2sport.description,
        dsc: 'Development of a professional website for a family member.',
        tasks: [
          'Graphic charter',
          'Design of the site',
          'Development of the website',
        ],
      },
    },
    <IExperienceModel>{
      ...ahah,
      title: 'Volunteer for an GNO',
      description: {
        ...ahah.description,
        dsc: 'Worked as a volunteer for All Hands And Hearts in Oaxaca Mexico reconstruing a school.',
        tasks: [
          'Work on the work site as volunteer but also as Team Leader',
          'Covered the position of Marketing Content Creator (MCC) and Community Coordinator (CC) during their breaks.',
          'In charged of the English Classes for the community.',
        ],
      },
    },
    <IExperienceModel>{
      ...teacher,
      title: 'French and English teacher',
      company: 'Independant',
      description: {
        dsc: 'Providing individual specific English and French language tuition. Primarily focusing on the development of core conversational skills and fluidity, vocabulary improvement and expansion, and the introduction and application of fundamental principles of grammar.',
      },
    },
  ],
  experiencesPro: [
    <IExperienceModel>{
      ...freelanceBouygues,
      title: 'Full stack developer',
      description: {
        ...freelanceBouygues.description,
        dsc: "",
        tasks: [
          "",
        ],
      },
    },
    <IExperienceModel>{
      ...freelanceSolina,
      title: 'Frontend Developer',
      description: {
        ...freelanceSolina.description,
        dsc: "",
        tasks: [
          "",
        ],
      },
    },
    <IExperienceModel>{
      ...veonum,
      title: 'Full stack developer',
      description: {
        ...veonum.description,
        dsc: 'Project1: Improvement and maintenance of the information system of the company called Bouygues in a team of 7 persons. Project2: Technical leader of a team of 4 in the rebuild of 3 applications “from scratch” of 3 applications into webapp.',
        tasks: [
          'Architecture Setup  of Angular and C# API applications.',
          'Developpement of news frontend and backend projects.',
          'Development of Rest and SOAP API.',
          'Corrections in a group of 10 software.',
        ],
      },
    },
    <IExperienceModel>{
      ...sopra,
      title: 'Java Developer',
      description: {
        ...sopra.description,
        dsc: 'Improvement and maintenance of the information system of the company SFR using Java and SQL. Personally involved, within a team of 20 people.',
        tasks: [
          'Detection and correction of application system errors. The work consisted of identifying issues based on customer complaints, then locating the source of the problem in the code in order to propose and implement a fix, including a full set of tests in a test environment to validate the new functionality.',
          'Development of new features. Following specifications to implement new functionalities while including all tests to ensure correct operation with continuous integration.',
          'Analysis and correction of client data in batch mode or independently in the database.',
        ],
      },
    },
    <IExperienceModel>{
      ...actemium,
      title: 'C# Developer Intern',
      description: {
        ...actemium.description,
        dsc: "Development of a production monitoring software. As part of a contract with Yves Rocher, Actemium developed a software called Prodpack for production monitoring. However, due to the specific installation and Yves Rocher's requirements, this software could only be used by them. My main task was to create a centralized production monitoring software as a new non-permanent and standardized C# application, reproducing Prodpack's functionalities in a modular way so that its use would not be limited to Yves Rocher.",
        tasks: [
          'Implementation of functionalities in C#.',
          'Development of the graphical interface using Windows Forms.',
          'Design and implementation of the SQL Server database.',
          "Retrieval of real data from Yves Rocher's Access database for testing purposes.",
          'Creation of a gateway to migrate Access data into the SQL database.',
          "Comparison of software results with Prodpack's results.",
          'Writing of the specifications and user manual.',
        ],
      },
    },
    <IExperienceModel>{
      ...cesta,
      title: 'C++ Developer Intern',
      description: {
        ...cesta.description,
        dsc: 'Development of a radar coverage software. This software was closely linked to another program already developed by Cesta for radar radiation simulation based on its characteristics. The user could deploy available radars on different sites where deployment was possible, and depending on this configuration, visualize radar coverage under different views at different altitudes.',
        tasks: [
          'Implementation of functionalities in C++.',
          'Development of the graphical interface using Qt.',
          'Retrieval of matrices corresponding to radar radiation in flat file format.',
          'Visualization of results through different 2D and 3D views of radar coverage.',
        ],
      },
    },
  ],
  hobbies: <IHobbyModel[]>[
    {
      ...guitar,
      title: 'Guitarist',
      description: [
        "At 15, I entered high school where I met new friends who were just starting a band.",
        "By frequently going to the music club with my friends, I eventually took the plunge and picked up a guitar.",
        "Since then, I've never really put it down!",
        "I ended up joining the band myself for 1 year, and I still play today as an amateur guitarist."
      ],
    },
    {
      ...drum,
      title: 'Drummer',
      description: [
        "After my first experience in a band as a guitarist, my best friend decided to start a new band where he was looking for a drummer.",
        "It was through this opportunity that I decided to take up the drums...",
        "I ended up spending 5 years behind the kit!",
        "Today, given the space and noise level, it's harder to practice, but drumming remains a lasting passion."
      ],
    },
    {
      ...running,
      title: 'Trail Runner',
      description: [
        "In 2020, we all faced a lockdown due to Covid...",
        "Being somewhat addicted to exercise, I had to find a sport I could practice while respecting the rules of that very particular period...",
        "Like many others, I started running, and I got hooked!",
        "Today, I'm deeply involved in trail running, with several 50 km races completed, including 3 participations in the Pointe du Raz trail."
      ],
    },
    {
      ...handball,
      title: 'Former Handball Player',
      description: [
        "Son of a handball player, my whole family has always been passionate about this sport.",
        "So, like my two brothers, I played for 12 years in a club before coaching INSA's second team for 1 year."
      ],
    },
    {
      ...photo,
      title: 'Photography / Video',
      description: [
        "During my first trips, only my best friend had a decent camera.",
        "After my trip to Japan, where I was without him and came back without any proper photos, I told myself: 'never again!'.",
        "So I invested in a small hybrid camera for travel photography.",
        "Little by little, I got into it, and I am now the designated photographer of my family and my group of friends!",
        "From time to time, I also take on semi-professional assignments to keep improving my photographer's eye."
      ],
    }
  ],
};

export const aboutEs: IAboutModel = {
  extract:
    'Ingeniero de Sistemas, hablo francés e inglés como nativo y mi español es nivel intermedio. Soy una persona flexible, aprendo rápido y puedo desenvolverme en diferentes tipos o equipos de trabajos. Alto nivel de trabajo en equipo, entusiasta con un gran sentido de responsabilidad. Excelente manejo de relaciones interpersonales con personas de diferentes orígenes y culturas.',
  educations: <IExperienceModel[]>[
    <IExperienceModel>{
      ...insa,
      description: {
        dsc: 'Instituto Nacional de Ciencias Aplicadas - Departamento de Sistemas y Redes de Comunicación',
      },
    },
    <IExperienceModel>{
      ...iut,
      description: {
        dsc: 'Instituto Universitario de Tecnología - Departamento de Ingeniería Eléctrica e Informática Industrial',
      },
    },
  ],
  archievements: [
    <IExperienceModel>{
      ...go2sport,
      title: 'Desarrollador Web',
      description: {
        ...go2sport.description,
        dsc: 'Desarrollo de un sitio web profesional para un miembro familiar.',
        tasks: [
          'Identidad Corporativa',
          'Diseño del sitio web',
          'Desarrollo del sitio web',
        ],
      },
    },
    <IExperienceModel>{
      ...ahah,
      title: 'Voluntario en ONG',
      description: {
        ...ahah.description,
        dsc: 'Voluntario para All Hand and Hearts en Oaxaca México para reconstruir una escuela que fue destruida por un terremoto.',
        tasks: [
          'Trabajé en la obra como voluntario, pero también como jefe de equipo.',
          'En cargo de reemplazar a las personas en cargo del marketing y la de la relación con la comunidad mientras están en periodo de vacaciones.',
          'En cargo de las clases de inglés por la comunidad.',
        ],
      },
    },
    <IExperienceModel>{
      ...teacher,
      title: 'Profesor de inglés / Frances',
      company: 'Independiante',
      description: {
        dsc: 'Enseñanza del idioma inglés en forma individual y acorde a las características de cada alumno. Principalmente enfocado en el desarrollo de capacidades de conversación y en su fluidez. Al mismo tiempo trabajo en la mejora y ampliación del vocabulario y en la introducción y aplicación de los principios fundamentales de la gramática.',
      },
    },
  ],
  experiencesPro: [
    <IExperienceModel>{
      ...freelanceBouygues,
      title: 'Desarrollador Full Stack',
      description: {
        ...freelanceBouygues.description,
        dsc: "",
        tasks: [
          "",
        ],
      },
    },
    <IExperienceModel>{
      ...freelanceSolina,
      title: 'Desarrollador Frontend',
      description: {
        ...freelanceSolina.description,
        dsc: "",
        tasks: [
          "",
        ],
      },
    },
    <IExperienceModel>{
      ...veonum,
      title: 'Desarrollador Full Stack',
      description: {
        ...veonum.description,
        dsc: 'Mejora y mantenimiento del sistema de información de Bouygues Telecom dentro de un equipo de 7 personas en las instalaciones de Atos Rennes. Líder técnico de un equipo de 4 personas en la reconstrucción “from scratch” de 3 aplicaciones cliente pesado hacia cliente web.',
        tasks: [
          'Implementación de arquitecturas de una aplicación Angular y de APIs en C#.',
          'Desarrollo de nuevos proyectos frontend y backend (API Rest y SOAP).',
          'Mantenimiento y mejora del código C# y SQL de unas 10 aplicaciones.',
        ],
      },
    },
    <IExperienceModel>{
      ...sopra,
      title: 'Desarrollador Java',
      description: {
        ...sopra.description,
        dsc: 'Mejora y mantenimiento del sistema de información (BIOS) de la empresa SFR en Java y SQL. Integrado personalmente en el equipo PDC (Prise De Commande) de aproximadamente 20 desarrolladores.',
        tasks: [
          'Detección y corrección de errores del sistema de aplicaciones. El trabajo consistía en identificar problemas a partir de las quejas de los clientes, localizar la fuente del problema en el código, proponer una corrección, implementarla e incluir una batería de pruebas en un entorno de test para validar el nuevo funcionamiento.',
          'Desarrollo de nuevas funcionalidades. Seguimiento de un pliego de condiciones para implementar una nueva funcionalidad incluyendo todas las pruebas necesarias para validar el funcionamiento y asegurar la integración continua.',
          'Análisis y corrección de datos de clientes en modo batch o de forma independiente en la base de datos.',
        ],
      },
    },
    <IExperienceModel>{
      ...actemium,
      title: 'Practicante Desarrollador C#',
      description: {
        ...actemium.description,
        dsc: 'Desarrollo de un software de seguimiento de producción. Con motivo de un contrato con la empresa Yves Rocher, Actemium desarrolló un software de seguimiento de producción llamado Prodpack. Sin embargo, debido a la especificidad de la instalación y a las necesidades de Yves Rocher, este software solo podía ser utilizado por esta empresa. Mi principal tarea consistió en crear un software de seguimiento de producción centralizado en una nueva aplicación C# no permanente y estandarizada que retomara las funcionalidades de Prodpack, pero de manera modular, de modo que su uso no quedara restringido únicamente a Yves Rocher.',
        tasks: [
          'Programación de la parte funcional en C#.',
          'Programación de la interfaz gráfica en Windows Forms.',
          'Diseño y realización de la base de datos SQL Server.',
          'Recuperación de datos reales de una base Access de la empresa Yves Rocher para las pruebas.',
          'Creación de un puente para migrar los datos de Access a la base SQL.',
          'Comparación entre los resultados del software y los resultados de Prodpack.',
          'Redacción del pliego de condiciones y del manual de usuario.',
        ],
      },
    },
    <IExperienceModel>{
      ...cesta,
      title: 'Practicante Desarrollador C++',
      description: {
        ...cesta.description,
        dsc: 'Desarrollo de un software de cobertura de radar. Este software estaba estrechamente vinculado a otro programa ya desarrollado por Cesta para la simulación de la radiación de un radar en función de sus características. El usuario podía desplegar los radares disponibles en los distintos sitios donde el despliegue era posible y, según esta configuración, observar su cobertura de radar bajo diferentes vistas a distintas altitudes.',
        tasks: [
          'Programación de la parte funcional en C++.',
          'Programación de la interfaz gráfica en Qt.',
          'Recuperación de matrices correspondientes a la radiación de un radar en formato plano.',
          'Visualización de los resultados en diferentes vistas 2D y 3D de la cobertura del radar.',
        ],
      },
    },
  ],
  hobbies: <IHobbyModel[]>[
    {
      ...guitar,
      title: 'Guitarrista',
      description: [
        "A los 15 años entré en secundaria, donde conocí a nuevos amigos que acababan de formar una banda.",
        "Al frecuentar regularmente el club de música con mis amigos, terminé dando el paso y cogiendo una guitarra.",
        "¡Desde entonces, nunca la he soltado de verdad!",
        "Finalmente me uní a la banda durante 1 año, y todavía hoy sigo tocando como guitarrista aficionado."
      ],
    },
    {
      ...drum,
      title: 'Baterista',
      description: [
        "Después de mi primera experiencia en una banda como guitarrista, mi mejor amigo decidió formar un nuevo grupo en el que buscaba un baterista.",
        "Fue con esta oportunidad que decidí lanzarme a la batería...",
        "¡Terminé pasando 5 años detrás de los tambores!",
        "Hoy en día, debido al espacio y al nivel de decibelios, es más difícil practicar, pero la batería sigue siendo una pasión duradera."
      ],
    },
    {
      ...running,
      title: 'Corredor de Trail',
      description: [
        "En 2020 todos nos enfrentamos a un confinamiento debido al Covid...",
        "Siendo un poco adicto al deporte, necesitaba encontrar una actividad que pudiera practicar respetando las reglas de aquel periodo tan particular...",
        "Como mucha gente, empecé a correr ¡y me enganché!",
        "Hoy estoy muy implicado en la práctica del trail, con varias carreras de 50 km completadas, incluyendo 3 participaciones en el trail de la Pointe du Raz."
      ],
    },
    {
      ...handball,
      title: 'Exjugador de Balonmano',
      description: [
        "Hijo de un jugador de balonmano, toda mi familia siempre ha sido fanática de este deporte.",
        "Así que, como mis dos hermanos, jugué 12 años en un club antes de entrenar al segundo equipo del INSA durante 1 año."
      ],
    },
    {
      ...photo,
      title: 'Fotografía / Vídeo',
      description: [
        "En mis primeros viajes, solo mi mejor amigo tenía una cámara en condiciones.",
        "Tras mi viaje a Japón, en el que estuve sin él y del que volví sin ninguna foto decente, me dije: '¡nunca más!'.",
        "Así que invertí en una pequeña cámara híbrida para la fotografía de viajes.",
        "Poco a poco me fui enganchando, y ahora soy el fotógrafo oficial de mi familia y de mi grupo de amigos.",
        "De vez en cuando también realizo trabajos semiprofesionales para seguir perfeccionando mi ojo de fotógrafo."
      ],
    }
  ],
};
