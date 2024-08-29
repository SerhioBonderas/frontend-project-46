#!/usr/bin/env node

import { program } from 'commander';

const gendiff = () => {
    program
        .version('0.0.1', '-v, --version', 'output the version number')
        .description('Compares two configuration files and shows a difference.');
    program.parse(process.argv);
};

export default gendiff;

gendiff();