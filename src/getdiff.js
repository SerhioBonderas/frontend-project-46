import _ from 'lodash';

const getDiff = (data1, data2) => {
  const file1Keys = Object.keys(data1);
  const file2Keys = Object.keys(data2);
  const allUniqKeys = _.sortBy(_.union(file1Keys, file2Keys));

  const diff = allUniqKeys.map((key) => {
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return { status: 'nested', key, children: getDiff(data1[key], data2[key]) };
    }
    if (!(_.has(data1, key)) && _.has(data2, key)) {
      return { status: 'added', key, value: data2[key] };
    }
    if (_.has(data1, key) && !(_.has(data2, key))) {
      return { status: 'deleted', key, value: data1[key] };
    }
    if (data1[key] === data2[key]) {
      return { status: 'unchanged', key, value: data1[key] };
    }
    return {
      status: 'changed', key, value1: data1[key], value2: data2[key],
    };
  });
  return diff;
};

export default getDiff;
