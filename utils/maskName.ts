const maskName = (name: string) => {
  const nameArray = name.split(' ');
  let result;
  switch (nameArray.length) {
    case 2:
      const firstName = nameArray[0];
      result = `${firstName.replace(/\S/gi, '*')} ${nameArray[1]}`;
      break;
    case 3:
      const middleName = nameArray[1];
      result = `${nameArray[0]} ${middleName.replace(/./gi, '*')} ${
        nameArray[2]
      }`;
      break;
    default:
      result = name.replace(/\S/gi, '*');
      result = result.substring(1, result.length - 1);
      result = name[0] + result + name[name.length - 1];
      break;
  }
  return result;
};

export { maskName };
