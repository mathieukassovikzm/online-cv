import { IAboutModel } from 'src/app/models/about';
import { TypeExperienceEnum } from 'src/app/models/enum';

export const aboutFr: IAboutModel = {
  extract:
    "Je suis très alaise socialement. J'ai l'habitude de cohabiter avec énormément de personnes, de différentes cultures, background. J'aime apprendre des gens et enseigner aux gens. Je suis d'un naturel à aider les gens. Principalement en donnant de mon temps. C'est pour cela que j'ai décidé de dédier 5 mois de ma vie à la reconstruction d'une école au Mexique. Je suis flexible, j'adore apprendre et je suis capable de m'adapter très vite à différents environnements de travail. Capable de travailler en équipe, je suis très enthousiaste avec un sens des responsabilités aigu.",
  educations: [
    {
      title: 'BAC +5, Ingénieur SRC',
      company: 'INSA',
      dateEnd: new Date('2013-06-01'),
      date: '2010 - 2013',
      address: 'Rennes, France',
      typeExpe: TypeExperienceEnum.Education,
      display: true,
    },
    {
      title: 'DUT GEII',
      company: 'IUT',
      dateEnd: new Date('2010-06-01'),
      date: '2008 - 2010',
      address: 'Brest, France',
      typeExpe: TypeExperienceEnum.Education,
      display: true,
    },
  ],
  archievements: [
    {
      title: 'Développeur Web',
      company: 'Go2sport.fr',
      dateEnd: new Date('2020-03-01'),
      date: '01/2020 - 03/2020',
      address: 'Rennes, France',
      description: {
        dsc: "Développement d'un site internet professionnel pour un membre de ma famille",
        tasks: [
          'Chartre Graphique',
          'Design du site',
          'Développement du site internet',
        ],
        technicalEnv: ['Html5', 'Css3', 'Scss', 'VueJs'],
      },
      typeExpe: TypeExperienceEnum.Archievement,
      display: true,
    },
    {
      title: 'Volontaire dans une ONG',
      company: 'All Hands and Hearts',
      dateEnd: new Date('2019-07-01'),
      date: '03/2019 - 07/2019',
      address: 'Oaxaca, Mexique',
      description: {
        dsc: 'Volontaire pour All Hand and Hearts à Oaxaca au Mexique afin de reconstruire une école.',
        tasks: [
          "Travail sur le site en tant que volontaire mais aussi en tant que chef d'équipe",
          'Remplacement de la personne en charge du marketing ainsi que de la personne en charge des relations avec la communauté pendant leurs vacances.',
          "En charge des classes d'anglais pour la communauté.",
        ],
      },
      typeExpe: TypeExperienceEnum.Archievement,
      display: true,
    },
    {
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
    },
  ],
  experiencesPro: [
    {
      title: 'Développeur Web',
      company: 'Veonum',
      dateEnd: new Date('2023-04-01'),
      date: '10/2019 - 03/2023',
      address: 'Rennes, France',
      description: {
        dsc: '',
        tasks: [
          'Chartre Graphique',
          'Design du site',
          'Développement du site internet',
        ],
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
    },
    {
      title: 'Développeur Java',
      company: 'Sopra Stéria',
      dateEnd: new Date('2018-01-01'),
      date: '06/2016 - 01/2018',
      address: 'Rennes, France',
      description: {
        dsc: "Amélioration et maintenance du système d'information (BIOS) de l'entreprise SFR en Java et SQL. Personnellement dans l'équipe PDC (Prise De Commande) d'environ 20 développeurs.",
        tasks: [
          "Détection et correction des erreurs du système d'application. Le travail consistait à identifier les problèmes à partir des plaintes clients, identifier ensuite la source du problème dans le code afin de proposer correction, l'implémenter en incluant une batterie de tests sur environnement de test afin de valider le nouveau fonctionnement.",
          "Développement de nouvelles fonctionnalités. Suivi d'un cahier des charges afin de réaliser une nouvelle fonctionnalité en incluant tous les tests pour valider le fonctionnement en assurant une intégration continue.",
          'Analyses et corrections de client en batch ou de manière indépendante en BDD.',
        ],
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
    },
    {
      title: 'Stagiaire Développeur C#',
      company: 'Actemium',
      dateEnd: new Date('2013-07-01'),
      date: '02/2013 - 07/2013',
      address: 'Rennes, France',
      description: {
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
        technicalEnv: [
          'C#',
          'Windows Forms',
          'Microsoft Visual Studio',
          'Infragistics',
          'Sql',
          'Sql server',
        ],
      },
      typeExpe: TypeExperienceEnum.ExperiencePro,
      display: true,
    },
    {
      title: 'Stagiaire Développeur C++',
      company: 'Cesta',
      dateEnd: new Date('2012-07-01'),
      date: '06/2012 - 07/2012',
      address: 'Rennes, France',
      description: {
        dsc: "Développement d'un logiciel de couverture radar. Ce logiciel était en lien étroit avec un logiciel déjà développé par la Cesta de rayonnement d'un radar en fonction de ses caractéristiques. L'utilisateur pouvait déployer les radars à sa disposition sur les différents sites où le déploiement était possible, suivant cette configuration il pouvait observer, sa couverture radar sous différentes vues à différentes altitudes.",
        tasks: [
          'Codage de la partie fonctionnalités en C++.',
          'Codage de la partie graphique en Qt.',
          "Récupération de matrices correspondant au rayonnement d'un radar sous format plat.",
          'Visualisation des résultats sous différentes vue 2D et 3D de la couverture radar.',
        ],
        technicalEnv: ['C++', 'Qt'],
      },
      typeExpe: TypeExperienceEnum.ExperiencePro,
      display: true,
    },
  ],
  travels: [
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
};

export const aboutEn: IAboutModel = {
  extract:
    "IT engineer of the National Institute of Applied Sciences (INSA) in Rennes France in the Systems and Communication Network (SRC) department, which is the equivalent of a Master's degree in electronics and computer science. I speak fluently French and English and Spanish. I have started to volunteer for All Hands And Hearts in March 21th and it has been a revelation for me. I would like to continue this adventure as a staff member and get even more implicated in this incredible organisation. With a high capability of working in a team, very enthusiasm with my sense of responsibility. I also have an excellent interpersonal relations management with people from different origins and cultures.",
  educations: [
    {
      title: 'Systems & Communication Network Engineer',
      company: 'INSA',
      dateEnd: new Date('2013-06-01'),
      date: '2010 - 2013',
      address: 'Rennes, France',
      typeExpe: TypeExperienceEnum.Education,
      display: true,
    },
    {
      title: 'DUT GEII',
      company: 'IUT',
      dateEnd: new Date('2010-06-01'),
      date: '2008 - 2010',
      address: 'Brest, France',
      typeExpe: TypeExperienceEnum.Education,
      display: true,
    },
  ],
  archievements: [
    {
      title: 'Développeur Web',
      company: 'Go2sport.fr',
      dateEnd: new Date('2020-03-01'),
      date: '01/2020 - 03/2020',
      address: 'Rennes, France',
      description: {
        dsc: 'Development of a professional website for a family member.',
        tasks: [
          'Graphic charter',
          'Design of the site',
          'Development of the website',
        ],
        technicalEnv: ['Html5', 'Css3', 'Scss', 'VueJs'],
      },
      typeExpe: TypeExperienceEnum.Archievement,
      display: true,
    },
    {
      title: 'Volunteer for an GNO',
      company: 'All Hands and Hearts',
      dateEnd: new Date('2019-07-01'),
      date: '03/2019 - 07/2019',
      address: 'Oaxaca, Mexique',
      description: {
        dsc: 'Worked as a volunteer for All Hands And Hearts in Oaxaca Mexico reconstruing a school.',
        tasks: [
          'Work on the work site as volunteer but also as Team Leader',
          'Covered the position of Marketing Content Creator (MCC) and Community Coordinator (CC) during their breaks.',
          'In charged of the English Classes for the community.',
        ],
      },
      typeExpe: TypeExperienceEnum.Archievement,
      display: true,
    },
    {
      title: "Professeur de français et d'anglais",
      company: 'Independant',
      dateEnd: new Date('2019-02-01'),
      date: '06/2017 - 02/2019',
      address: 'Rennes, France / Antofagasta & Santiago, Chile',
      description: {
        dsc: 'Providing individual specific English and French language tuition. Primarily focusing on the development of core conversational skills and fluidity, vocabulary improvement and expansion, and the introduction and application of fundamental principles of grammar.',
      },
      typeExpe: TypeExperienceEnum.Archievement,
      display: true,
    },
  ],
};

export const aboutEs: IAboutModel = {
  extract:
    'Ingeniero de Sistemas, hablo francés e inglés como nativo y mi español es nivel intermedio. Soy una persona flexible, aprendo rápido y puedo desenvolverme en diferentes tipos o equipos de trabajos. Alto nivel de trabajo en equipo, entusiasta con un gran sentido de responsabilidad. Excelente manejo de relaciones interpersonales con personas de diferentes orígenes y culturas.',
  educations: [
    {
      title: 'Systems & Communication Network Engineer',
      company: 'INSA',
      dateEnd: new Date('2013-06-01'),
      date: '2010 - 2013',
      address: 'Rennes, France',
      typeExpe: TypeExperienceEnum.Education,
      display: true,
    },
    {
      title: 'DUT GEII',
      company: 'IUT',
      dateEnd: new Date('2010-06-01'),
      date: '2008 - 2010',
      address: 'Brest, France',
      typeExpe: TypeExperienceEnum.Education,
      display: true,
    },
  ],
  archievements: [
    {
      title: 'Desarrollador Web',
      company: 'Go2sport.fr',
      dateEnd: new Date('2020-03-01'),
      date: '01/2020 - 03/2020',
      address: 'Rennes, France',
      description: {
        dsc: 'Desarrollo de un sitio web profesional para un miembro familiar.',
        tasks: [
          'Identidad Corporativa',
          'Diseño del sitio web',
          'Desarrollo del sitio web',
        ],
        technicalEnv: ['Html5', 'Css3', 'Scss', 'VueJs'],
      },
      typeExpe: TypeExperienceEnum.Archievement,
      display: true,
    },
    {
      title: 'Voluntario en ONG',
      company: 'All Hands and Hearts',
      dateEnd: new Date('2019-07-01'),
      date: '03/2019 - 07/2019',
      address: 'Oaxaca, Mexique',
      description: {
        dsc: 'Voluntario para All Hand and Hearts en Oaxaca México para reconstruir una escuela que fue destruida por un terremoto.',
        tasks: [
          'Trabajé en la obra como voluntario, pero también como jefe de equipo.',
          'En cargo de reemplazar a las personas en cargo del marketing y la de la relación con la comunidad mientras están en periodo de vacaciones.',
          'En cargo de las clases de inglés por la comunidad.',
        ],
      },
      typeExpe: TypeExperienceEnum.Archievement,
      display: true,
    },
    {
      title: 'Profesor de inglés / Frances',
      company: 'Independiante',
      dateEnd: new Date('2019-02-01'),
      date: '06/2017 - 02/2019',
      address: 'Rennes, France / Antofagasta & Santiago, Chile',
      description: {
        dsc: 'Enseñanza del idioma inglés en forma individual y acorde a las características de cada alumno. Principalmente enfocado en el desarrollo de capacidades de conversación y en su fluidez. Al mismo tiempo trabajo en la mejora y ampliación del vocabulario y en la introducción y aplicación de los principios fundamentales de la gramática.',
      },
      typeExpe: TypeExperienceEnum.Archievement,
      display: true,
    },
  ],
};
