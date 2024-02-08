import inquirer from 'inquirer';
import { questions } from './questions';
import { IAnswers } from './interface/answers.interface';

class Init {
  constructor() {
    inquirer.prompt(questions).then((answers: IAnswers) => {
      console.log(answers);
    });
  }
}

new Init();
