import fs from 'fs';
import { runInContext } from 'vm';

export default async function(bd) {
  let filesInOrder = ['Drops', 'Tables', 'Inserts', 'Triggers'];
  for (let file of filesInOrder) {
    let sqlFile = fs.readFileSync('./sql/' + file + '.sql', 'utf-8');
    await bd.query(sqlFile);
  }
}