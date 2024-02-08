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
    console.log(gitName, folderName);
  }
}

export const GenFile = new GenerateController();
