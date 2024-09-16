import getStylishFormat from './stylish.js';
import getPlainFormat from './plain.js';

const getFormat = (tree, format) => {
  switch (format) {
    case 'stylish':
      return getStylishFormat(tree);
    case 'plain':
      return getPlainFormat(tree);
    default:
      throw new Error(`Format ${format} - is incorrect`);
  }
};

export default getFormat;
