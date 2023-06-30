function ucFirst(str) {
  if (str.length > 0) {
    let firstLetter = str[0].toUpperCase()
    let partStr = str.substr(1, str.length)
    let newStr = firstLetter + partStr
    return newStr
  } else {
    return str
  }
}
