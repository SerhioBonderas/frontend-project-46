import fs from 'fs';
import { expect, test } from '@jest/globals';
import getFixturePath from '../__fixtures__/getFixturePathFile.js';
import genDiff from '../src/index.js';

test('genDiff', () => {
  const path1 = getFixturePath('file1.json');
  const path2 = getFixturePath('file2.json');
  const path3 = getFixturePath('file1.yml');
  const path4 = getFixturePath('file2.yml');

  const dataStylish = fs.readFileSync(getFixturePath('test-stylish.txt'), 'utf-8');
  const dataPlain = fs.readFileSync(getFixturePath('test-plain.txt'), 'utf-8');

  expect(genDiff(path1, path2, 'stylish')).toBe(dataStylish);
  expect(genDiff(path3, path4, 'stylish')).toBe(dataStylish);
  expect(genDiff(path1, path2, 'plain')).toBe(dataPlain);
  expect(genDiff(path3, path4, 'plain')).toBe(dataPlain);
  expect(genDiff(path1, path2)).toBe(dataStylish);
  expect(genDiff(path3, path4)).toBe(dataStylish);
});
