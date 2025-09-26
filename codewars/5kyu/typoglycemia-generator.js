const scrambleWords = function (str) {
  if (str.length <= 3) return str

  const array = str.split(' ')
  const isSpecialChar = (char) => "-',.".includes(char)
  let result = ''

  for (const word of array) {
    let first = word[0],
      last = word[word.length - 1],
      middle = word.substring(1, word.length - 1)

    const indOfSpecial = word.split('').findIndex((c) => isSpecialChar(c))

    const hasSpecialChar =
      indOfSpecial !== 0 &&
      indOfSpecial !== word.length - 1 &&
      indOfSpecial !== -1

    if (isSpecialChar(first)) {
      first = word.substring(0, 2)
      middle = word.substring(2, word.length - 1)
    } else if (isSpecialChar(last)) {
      last = word.substring(word.length - 2)
      middle = word.substring(1, word.length - 2)
    }

    if (hasSpecialChar) {
      middle =
        middle.substring(0, indOfSpecial - 1) + middle.substring(indOfSpecial)
    }

    let sorted = middle.split('').sort().join('')

    if (hasSpecialChar) {
      sorted =
        sorted.substring(0, indOfSpecial - 1) +
        word[indOfSpecial] +
        sorted.substring(indOfSpecial - 1)
    }

    if (word.length <= 3) {
      result += word + ' '
    } else {
      result += first + sorted + last + ' '
    }
  }

  return result.trim()
}
