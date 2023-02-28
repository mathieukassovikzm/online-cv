import { IInfosModel } from "src/app/models/infos";

export const infosFr: IInfosModel = {
  name: "Mathieu",
  famillyName: "Le Bellec",
  title: "Web Developper",
  available: false,
  infosPersonnal: {
    birth: { question: "Date de naissance:", answer: "10 Dec 1989" },
    nationality: { question: "Nationalité:", answer: "Française" },
    status: { question: "Statut:", answer: "Pacsé" },
    drivingLiscence: { question: "Permis de conduire:", answer: "Oui" },
    car: { question: "Voiture", answer: "Oui" }
  }
}

export const infosEn: IInfosModel = {
  name: "Mathieu",
  famillyName: "Le Bellec",
  title: "Web Developper",
  available: false,
  infosPersonnal: {
    birth: { question: "Date of birth:", answer: "10 Dec 1989" },
    nationality: { question: "Nationality:", answer: "French" },
    status: { question: "Marital Status:", answer: "In a civil partnership" },
    drivingLiscence: { question: "International Driving Licence:", answer: "Yes" },
    car: { question: "Car", answer: "Yes" }
  }
}

export const infosEs: IInfosModel = {
  name: "Mathieu",
  famillyName: "Le Bellec",
  title: "Web Developper",
  available: false,
  infosPersonnal: {
    birth: { question: "Fecha de nacimiento:", answer: "10 Dic 1989" },
    nationality: { question: "Nacionalidad:", answer: "Francés" },
    status: { question: "Estado Civil:", answer: "En unión de hecho sin hijos" },
    drivingLiscence: { question: "Licencia de conducir:", answer: "Si" },
    car: { question: "Auto", answer: "Si" }
  }
}
