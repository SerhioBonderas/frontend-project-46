import path from 'path';
import yaml from 'js-yaml';
import fs from 'fs';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);

const getFormat = (filepath) => path.extname(filepath).slice(1);

const getData = (filepath) => fs.readFileSync(getFullPath(filepath), 'utf-8');

const getParse = (filepath) => {
    const data = getData(filepath);
    const format = getFormat(filepath);
    switch (format) {
        case 'json':
            return JSON.parse(data);
        case 'yaml':
            return yaml.load(data);
        case 'yml':
            return yaml.load(data);
        default:
            throw new Error(`Format ${format} is not correct`);
    }
};

export default getParse;

