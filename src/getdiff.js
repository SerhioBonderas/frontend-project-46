import _ from 'lodash';
import getParse from './parsers.js';

const getDiff = (filepath1, filepath2) => {
  const file1Data = getParse(filepath1);
  const file2Data = getParse(filepath2);

  const file1Keys = Object.keys(file1Data);
  const file2Keys = Object.keys(file2Data);
  const allUniqKeys = _.sortBy(_.union(file1Keys, file2Keys));

  const diff = allUniqKeys.map((key) => {
    if (_.has(file1Data, key) && _.has(file2Data, key)) {
      if (file1Data[key] === file2Data[key]) {
        return `  ${key}: ${file1Data[key]}`;
      } return [`- ${key}: ${file1Data[key]}`, `+ ${key}: ${file2Data[key]}`];
    } if (_.has(file1Data, key) && !(_.has(file2Data, key))) {
      return `- ${key}: ${file1Data[key]}`;
    } return `+ ${key}: ${file2Data[key]}`;
  });
  const result = diff.flat();
  return `{\n  ${result.join('\n  ')} \n}`;
};

export default getDiff;
