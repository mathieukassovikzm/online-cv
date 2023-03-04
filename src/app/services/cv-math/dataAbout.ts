import { IAboutModel } from 'src/app/models/about';
import { TypeExperienceEnum } from 'src/app/models/enum';

export const aboutFr: IAboutModel = {
  extract:
    "Je suis très alaise socialement. J'ai l'habitude de cohabiter avec énormément de personnes, de différentes cultures, background. J'aime apprendre des gens et enseigner aux gens. Je suis d'un naturel à aider les gens. Principalement en donnant de mon temps. C'est pour cela que j'ai décidé de dédier 5 mois de ma vie à la reconstruction d'une école au Mexique. Je suis flexible, j'adore apprendre et je suis capable de m'adapter très vite à différents environnements de travail. Capable de travailler en équipe, je suis très enthousiaste avec un sens des responsabilités aigu.",
  educations: [
    {
      title: 'BAC +5, Ingénieur SRC',
      company: 'INSA',
      date: '2010 - 2013',
      address: 'Rennes, France',
      typeExpe: TypeExperienceEnum.Education,
      display: true,
    },
    {
      title: 'DUT GEII',
      company: 'IUT',
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
      date: '01/2019 - 03/2019',
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
      date: '06/2017 - 02/2019',
      address: 'Rennes, France / Antofagasta & Santiago, Chile',
      description: {
        dsc: "Classes particulières d'anglais et de français principalement centrées sur la conversation orale, apprentissage du vocabulaire, des règles de grammaires, le tout de manière ludique et pédagogique.",
      },
      typeExpe: TypeExperienceEnum.Archievement,
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
      date: '2010 - 2013',
      address: 'Rennes, France',
      typeExpe: TypeExperienceEnum.Education,
      display: true,
    },
    {
      title: 'DUT GEII',
      company: 'IUT',
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
      date: '01/2019 - 03/2019',
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
      date: '2010 - 2013',
      address: 'Rennes, France',
      typeExpe: TypeExperienceEnum.Education,
      display: true,
    },
    {
      title: 'DUT GEII',
      company: 'IUT',
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
      date: '01/2019 - 03/2019',
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
