const formatBoolean = (bool: boolean) => {
  if (bool) {
    return 'O';
  }
  return 'X';
};

export { formatBoolean };
