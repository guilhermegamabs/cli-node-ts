import path from 'path';
import fs from 'fs';
import shelljs from 'shelljs';
import { EGitName } from '../enum/git-name.enum';
import { EChoicesBoilerPlate } from '../enum/choices-boilerplate.enum';
import { IAnswers } from '../interface/answers.interface';

class GenerateController {
  public gen(answers: IAnswers) {
    try {
      switch (answers.tech) {
        case EChoicesBoilerPlate.NODEJS_TS:
          this._execPath(EGitName.NODEJS_TS, answers.folderName);
          break;

        case EChoicesBoilerPlate.SCSS:
          this._execPath(EGitName.SCSS, answers.folderName);
          break;
      }
    } catch (err) {
      console.log(err);
    }
  }

  private _execPath(gitName: string, folderName: string) {
    try {
      shelljs.cd(path.resolve());
      shelljs.exec(`git clone git@github.com:troquatte/${gitName}.git`);

      fs.renameSync(
        `${path.join(path.resolve(), gitName)}`,
        `${path.join(path.resolve(), folderName)}`,
      );

      console.log('Arquivo criado com Sucesso!');
      return shelljs.exit();
    } catch (error) {
      console.log(error);
    }
  }
}

export const GenFile = new GenerateController();
