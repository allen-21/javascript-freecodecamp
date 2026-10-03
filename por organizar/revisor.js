function isPalindrome(word) {
  const original = word.toLowerCase();

  const invertida = original.split("").reverse().join("");

  return original === invertida;
}

function findPalindromeBreaks(words) {
  const breacks = [];
  for (let i = 0; i < words.length; i++) {
    if(!isPalindrome(words[i])){
        breacks.push(i);

}
  }
  return breacks;
}

function findRepeatedPhrases(words, phraseLength) {

  if (phraseLength >= words.length) {
    return [];
  }

  const phrases = {};
  const result = [];

  for (let i = 0; i <= words.length - phraseLength; i++) {

    const phrase = words.slice(i, i + phraseLength).join(" ");

    if (!phrases[phrase]) {
      phrases[phrase] = [];
    }

  
    phrases[phrase].push(i);
  }

  for (const phrase in phrases) {
    if (phrases[phrase].length > 1) {
      result.push(...phrases[phrase]);
    }
  }

  return result;
}