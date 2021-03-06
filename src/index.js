import path from 'path';
import fs from 'fs';
import format from './formatters/index.js';
import parseToObj from './parsers.js';
import buildTree from './treeBuilder.js';

const readFile = (filePath) => fs.readFileSync(
  path.resolve(process.cwd(), filePath), 'utf-8',
);

export default (filepath1, filepath2, formatName) => {
  const data1 = parseToObj(readFile(filepath1), path.extname(filepath1).slice(1));
  const data2 = parseToObj(readFile(filepath2), path.extname(filepath2).slice(1));

  return format(buildTree(data1, data2), formatName);
};
