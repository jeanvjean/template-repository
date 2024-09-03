export const parsePhoneNumberToStandard = (phoneNumbers) => {
  try {
    if (phoneNumbers.length === 11) {
      phoneNumbers = `234${phoneNumbers.substring(1)}`;
    }
    if (phoneNumbers.length === 13 && phoneNumbers.substring(0, 1) !== '+') {
      phoneNumbers = `${phoneNumbers}`;
    }
    if (phoneNumbers.length === 14 && phoneNumbers.substring(0, 1) === '+') {
      phoneNumbers = `${phoneNumbers.substring(1, 14)}`;
    }
    return phoneNumbers;
  } catch (error) {
    console.log(error);
  }
};
