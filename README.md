### Hexlet tests and linter status:
[![Actions Status](https://github.com/SerhioBonderas/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/SerhioBonderas/frontend-project-46/actions)

### GenDiff tests and linter status:
[![gendiff-check](https://github.com/SerhioBonderas/frontend-project-46/actions/workflows/gendiff-check.yml/badge.svg)](https://github.com/SerhioBonderas/frontend-project-46/actions/workflows/gendiff-check.yml)

[![Maintainability](https://api.codeclimate.com/v1/badges/bde003dfc63f5ea9d37a/maintainability)](https://codeclimate.com/github/SerhioBonderas/frontend-project-46/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/bde003dfc63f5ea9d37a/test_coverage)](https://codeclimate.com/github/SerhioBonderas/frontend-project-46/test_coverage)

## Description
gendiff - This is a console application for comparing data between two files.

You can work with files in the following formats:
    json
    yml/yaml

At the output you can get data in the following formats:
    stylish
    plain
    json
By default, differences are output in stylish format.

## Install

1. Clone repository local.

2. Install all dependencies npm ci.

3. Install apps global npm link.

4. gendiff -h shows help.

5. gendiff -V shows version.

## Work

To compare files, enter the gendiff command with the path to the first and second files. 
By default, the output will be in stylish format.

#### Example: 
    gendiff filePath1/namefile1.json filePath2/namefile2.json 

If you want to change the output format, specify the --format flag with the format name. It can be 'plain' or 'json'.

#### Example with plain: 

    gendiff --format plain filePath1/namefile1.json filePath2/namefile2.json 

#### Example with json: 

    gendiff --format json filePath1/namefile1.json filePath2/namefile2.json 

### Demonstration of work with .json files:
https://asciinema.org/a/oVkyphc1jtntGq9QIXDhAKyce

### Demonstration of work with .yml files:
 https://asciinema.org/a/D5xLsgu34OaoBbebFwQYVNF4I

### Demonstration of working with output of differences in stylish format (set by default)
https://asciinema.org/a/T7pc25NGWA6K111xWlXZYen0k

### Demonstration of working with output of differences in plain format
https://asciinema.org/a/EUJe6i1oQfN3KWM9Lv7KgP3SN

### Demonstration of working with output of differences in json format
https://asciinema.org/a/PcE2GmqJ8QltNFelAvIvKzqXv