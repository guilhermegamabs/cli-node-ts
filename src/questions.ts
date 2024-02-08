import path from 'path';
import fs from 'fs';
import { EChoicesBoilerPlate } from './enum/choices-boilerplate.enum';
import { EErros } from './enum/errors.enum';
import { EGitName } from './enum/git-name.enum';

export const questions = [
  {
    type: 'list',
    name: 'tech',
    message: 'Qual Boilerplate devo criar?',
    choices: [EChoicesBoilerPlate.NODEJS_TS, EChoicesBoilerPlate.SCSS],
  },
  {
    type: 'input',
    name: 'folderName',
    message: 'Qual nome devo dar para a pasta do projeto?',
    validate(folderName: string) {
      if (!folderName) return EErros.ERROR_NULL;

      if (/[^\w\s-]/.test(folderName)) return EErros.ERROR_ESPECIAL_CHAR;

      if (folderName === EGitName.NODEJS_TS || folderName === EGitName.SCSS)
        return EErros.ERROR_GIT_NAME;

      try {
        const dir = path.resolve(folderName);
        fs.accessSync(dir, fs.constants.R_OK);
        return EErros.ERROR_INVALID_FOLDER;
        // eslint-disable-next-line no-empty
      } catch (err) {}

      return true;
    },
  },
];
