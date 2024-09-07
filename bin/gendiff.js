#!/usr/bin/env node

import { program } from 'commander';
import getDiff from '../src/getdiff.js'


const genDiff = () => {
    program
        .version('0.0.1', '-V, --version', 'output the version number')
        .description('Compares two configuration files and shows a difference.')
        .option('-f, --format [type]', 'output format')
        .arguments('<filepath1> <filepath2>')
        .action((filepath1, filepath2) => {
            console.log(getDiff(filepath1, filepath2))
        });
    program.parse(process.argv);
};

export default genDiff;

genDiff();