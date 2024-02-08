import path from 'path';
import fs from 'fs';
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
    name: 'folderName',
    message: 'Qual nome devo dar para a pasta do projeto?',
    validate(folderName: string) {
      if (!folderName) return 'Insirá um valor para o nome do projeto!';

      if (/[^\w\s-]/.test(folderName))
        return 'Não pode ter caracteres especiais!';

      if (folderName === 'cli-node-ts')
        return 'Não pode existir pasta com o mesmo nome do repositório do github';

      try {
        const dir = path.resolve(folderName);
        fs.accessSync(dir, fs.constants.R_OK);
        return 'Já existe uma paste com esse nome!';
      } catch (err) {}

      return true;
    },
  },
];
