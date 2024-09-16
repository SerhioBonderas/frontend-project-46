import getParse from './parsers.js';
import getDiff from './getdiff.js';
import getFormat from './formatters/index.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = getParse(filepath1);
  const data2 = getParse(filepath2);

  const tree = getDiff(data1, data2);
  return getFormat(tree, format);
};

export default genDiff;
