import getParse from './parsers.js';
import getDiff from './getdiff.js';
import getStylishFormat from './formatters/stylish.js';

const genDiff = (filepath1, filepath2) => {
  const data1 = getParse(filepath1);
  const data2 = getParse(filepath2);

  const result = getDiff(data1, data2);
  return getStylishFormat(result);
};

export default genDiff;
