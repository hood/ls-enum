const lsEnum = (value: object): (string | number)[] => {
  return Object.entries(value)
    .filter(entry => !parseInt(entry[0]) && parseInt(entry[0]) !== 0)
    .map(entry => entry[1]) as (string | number)[];
};

export default lsEnum;
