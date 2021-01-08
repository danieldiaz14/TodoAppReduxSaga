export const sortData = (data, sortBy) => {
  if (data.length <= 1) return data;

  const sortMethod = (a, b) => {
    const firstTerm = a[sortBy].toUpperCase();
    const secondTerm = b[sortBy].toUpperCase();
    if (firstTerm < secondTerm) return -1;
    if (firstTerm > secondTerm) return 1;
    return 0;
  };

  return data.sort(sortMethod);
};
