import inquirer from 'inquirer';
import { IAnswers } from './interface/answers.interface';

const questions = [
  {
    type: 'list',
    name: 'tech',
    message: 'Qual Boilerplate devo criar?',
    choices: ['NodeJs + TypeScript', 'SCSS'],
  },
  {
    type: 'input',
    name: 'techName',
    message: 'Qual nome devo dar para a pasta do projeto?',
  },
];

class Init {
  constructor() {
    inquirer.prompt(questions).then((answers: IAnswers) => {
      console.log(answers);
    });
  }
}

new Init();
