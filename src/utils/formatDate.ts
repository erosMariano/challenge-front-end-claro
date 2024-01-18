export const formatInputDate = (inputDate: string): string => {
  const cleanedDate = inputDate.replace(/[^\d]/g, '');

  if (cleanedDate.length >= 8) {
    const month = cleanedDate.slice(0, 2);
    const day = cleanedDate.slice(2, 4);
    const year = cleanedDate.slice(4, 8);

    const enteredDate = new Date(`${month}/${day}/${year}`);
    const currentDate = new Date();

    enteredDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);

    if (!isNaN(enteredDate.getTime()) && enteredDate >= currentDate) {
      return `${month}/${day}/${year}`;
    } else {
      return '';
    }
  }

  return insertSlashes(cleanedDate);
};

const insertSlashes = (value: string): string => {
  const parts = [];
  for (let i = 0; i < value.length; i += 2) {
    parts.push(value.slice(i, i + 2));
  }

  if (parts.length === 0) {
    return '';
  } else if (parts.length === 1) {
    return parts[0];
  } else if (parts.length === 2) {
    return `${parts[0]}/${parts[1]}`;
  } else {
    return `${parts[0]}/${parts[1]}/${parts.slice(2).join('')}`;
  }
};
