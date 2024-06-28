import { IsStrongProps } from 'src/types';

function getStrongOrMediumPassword({
  length,
  hasLetters,
  hasNumbers,
  hasSymbols,
}: IsStrongProps) {
  const isMedium =
    (hasLetters && hasNumbers) ||
    (hasLetters && hasSymbols) ||
    (hasNumbers && hasSymbols);

  const isStrong = length >= 8 && hasLetters && hasNumbers && hasSymbols;

  if (isStrong) {
    return 'strong';
  } else if (isMedium) {
    return 'medium';
  }

  return null;
}

export { getStrongOrMediumPassword };
