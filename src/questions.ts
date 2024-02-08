import { EChoicesBoilerPlate } from './enum/choices-boilerplate.enum';

export const questions = [
  {
    type: 'list',
    name: 'tech',
    message: 'Qual Boilerplate devo criar?',
    choices: [EChoicesBoilerPlate.NODEJS_TS, EChoicesBoilerPlate.SCSS],
  },
  {
    type: 'input',
    name: 'techName',
    message: 'Qual nome devo dar para a pasta do projeto?',
    validate(folderName: string) {
      console.log(folderName);
      return 'Deu ruim';
    },
  },
];
