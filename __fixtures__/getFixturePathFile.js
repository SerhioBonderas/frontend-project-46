import { fileURLToPath } from 'url';
import * as path from 'path';
import { dirname } from 'path';

const getFixturePath = (filename) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  return path.join(__dirname, '..', '__fixtures__', filename);
};

export default getFixturePath;
