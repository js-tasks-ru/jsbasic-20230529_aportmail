function checkSpam(str) {
  strLowerCase = str.toLowerCase();

  if (strLowerCase.includes('1xBet'.toLowerCase()) || strLowerCase.includes('XXX'.toLowerCase())) {
    return true;
  };
  return false;
}
