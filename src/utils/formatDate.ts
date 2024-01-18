const formatInputDate = (inputDate: string): string => {
  const cleanedDate = inputDate.replace(/[^\d]/g, '');

  if (cleanedDate.length >= 8) {
    const month = cleanedDate.slice(0, 2);
    const day = cleanedDate.slice(2, 4);
    const year = cleanedDate.slice(4, 8);

    return `${month}/${day}/${year}`;
  } else {
    return cleanedDate;
  }
};

export default formatInputDate;
