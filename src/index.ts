import inquirer from 'inquirer';
import { GenFile } from './controller/generate.controller';
import { questions } from './questions';
import { IAnswers } from './interface/answers.interface';

class Init {
  constructor() {
    inquirer.prompt(questions).then((answers: IAnswers) => {
      GenFile.gen(answers);
    });
  }
}

new Init();
