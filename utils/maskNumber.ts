function maskPhoneNumber(phoneNumber: string) {
  let maskedPhoneNumber = '010-****-0000';
  if (/-[0-9]{4}-/.test(phoneNumber)) {
    maskedPhoneNumber = phoneNumber
      .toString()
      .replace(
        phoneNumber,
        phoneNumber.toString().replace(/-[0-9]{4}-/g, '-****-')
      );
  }
  return maskedPhoneNumber;
}

function maskAccountNumber(accountNumber: string) {
  let result = accountNumber.replace(/\S/gi, '*');
  const { length } = result;
  result = result.substring(2, length - 2);
  result = accountNumber.slice(0, 2) + result + accountNumber.slice(-2);
  return result;
}

export { maskPhoneNumber, maskAccountNumber };
