export function applyMask(input: string) {
  const onlyNumbers = input.replace(/\D/g, "").slice(0, 10); // Limita a 10 dígitos

  let masked = onlyNumbers;

  if (onlyNumbers.length <= 2) {
    masked = onlyNumbers;
  } else if (onlyNumbers.length <= 6) {
    masked = `(${onlyNumbers.slice(0, 2)}) ${onlyNumbers.slice(2)}`;
  } else {
    masked = `(${onlyNumbers.slice(0, 2)}) ${onlyNumbers.slice(
      2,
      6
    )}-${onlyNumbers.slice(6)}`;
  }

  return masked;
}
