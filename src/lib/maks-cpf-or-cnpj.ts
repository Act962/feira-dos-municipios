export function applyCpfCnpjMask(input: string) {
  const onlyNumbers = input.replace(/\D/g, "").slice(0, 14); // Limita a 14 dígitos (CNPJ)

  let masked = onlyNumbers;

  if (onlyNumbers.length <= 11) {
    // Formatação para CPF: XXX.XXX.XXX-XX
    if (onlyNumbers.length <= 3) {
      masked = onlyNumbers;
    } else if (onlyNumbers.length <= 6) {
      masked = `${onlyNumbers.slice(0, 3)}.${onlyNumbers.slice(3)}`;
    } else if (onlyNumbers.length <= 9) {
      masked = `${onlyNumbers.slice(0, 3)}.${onlyNumbers.slice(
        3,
        6
      )}.${onlyNumbers.slice(6)}`;
    } else {
      masked = `${onlyNumbers.slice(0, 3)}.${onlyNumbers.slice(
        3,
        6
      )}.${onlyNumbers.slice(6, 9)}-${onlyNumbers.slice(9)}`;
    }
  } else {
    // Formatação para CNPJ: XX.XXX.XXX/XXXX-XX
    if (onlyNumbers.length <= 2) {
      masked = onlyNumbers;
    } else if (onlyNumbers.length <= 5) {
      masked = `${onlyNumbers.slice(0, 2)}.${onlyNumbers.slice(2)}`;
    } else if (onlyNumbers.length <= 8) {
      masked = `${onlyNumbers.slice(0, 2)}.${onlyNumbers.slice(
        2,
        5
      )}.${onlyNumbers.slice(5)}`;
    } else if (onlyNumbers.length <= 12) {
      masked = `${onlyNumbers.slice(0, 2)}.${onlyNumbers.slice(
        2,
        5
      )}.${onlyNumbers.slice(5, 8)}/${onlyNumbers.slice(8)}`;
    } else {
      masked = `${onlyNumbers.slice(0, 2)}.${onlyNumbers.slice(
        2,
        5
      )}.${onlyNumbers.slice(5, 8)}/${onlyNumbers.slice(
        8,
        12
      )}-${onlyNumbers.slice(12)}`;
    }
  }

  return masked;
}
