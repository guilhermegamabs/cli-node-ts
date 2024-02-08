#!/usr/bin/env node

import inquirer from 'inquirer';
import { IAnswers } from './interface/answers.interface';
import { GenFile } from './controller/generate.controller';
import { questions } from './questions';

class Init {
  constructor() {
    inquirer.prompt(questions).then((answers: IAnswers) => {
      GenFile.gen(answers);
    });
  }
}

new Init();
