const formatPhoneNumber = (inputPhoneNumber: string): string => {
  const cleanedPhoneNumber = inputPhoneNumber.replace(/[^\d]/g, '');

  if (cleanedPhoneNumber.length === 10) {
    const areaCode = cleanedPhoneNumber.slice(0, 3);
    const firstPart = cleanedPhoneNumber.slice(3, 6);
    const secondPart = cleanedPhoneNumber.slice(6, 10);
    return `${areaCode} ${firstPart} ${secondPart}`;
  } else {
    return cleanedPhoneNumber;
  }
};

export default formatPhoneNumber;
