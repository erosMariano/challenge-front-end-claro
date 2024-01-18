const formatTime = (inputTime: string): string => {
  const cleanedTime = inputTime.replace(/[^\d]/g, '');

  if (cleanedTime.length >= 4) {
    const hour = cleanedTime.slice(0, 2);
    const minute = cleanedTime.slice(2, 4);
    return `${hour}:${minute}`;
  } else {
    return cleanedTime;
  }
};

export default formatTime;
