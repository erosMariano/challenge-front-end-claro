export const formatPhoneNumber = (inputPhoneNumber: string): string => {
  const cleanedPhoneNumber = inputPhoneNumber.replace(/[^\d]/g, '');

  if (cleanedPhoneNumber.length <= 3) {
    return cleanedPhoneNumber;
  } else {
    const areaCode = cleanedPhoneNumber.slice(0, 3);
    const remainingDigits = cleanedPhoneNumber.slice(3);

    const formattedNumber = `${areaCode} ${remainingDigits.slice(0, 3)} ${remainingDigits.slice(3, 7) || ''}`;
    return formattedNumber.trim();
  }
};
