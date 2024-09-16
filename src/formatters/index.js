import getStylishFormat from './stylish.js';
import getPlainFormat from './plain.js';
import getJsonFormat from './json.js';

const getFormat = (tree, format) => {
  switch (format) {
    case 'stylish':
      return getStylishFormat(tree);
    case 'plain':
      return getPlainFormat(tree);
    case 'json':
      return getJsonFormat(tree);
    default:
      throw new Error(`Format ${format} - is incorrect`);
  }
};

export default getFormat;
