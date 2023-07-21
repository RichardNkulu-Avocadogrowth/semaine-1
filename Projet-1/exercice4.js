const countWordOccurrences = (input) => {
    const words = input.toLowerCase().split(/\s+/);
    const wordCount = {};
  
    for (const word of words) {
      wordCount[word] = (wordCount[word] || 0) + 1;
    }
  
    const newWords = words.map((word) => {
      if (wordCount[word] > 3) {
        return "NouveauMot";
      }
      return word;
    });
  
    const result = newWords.join(" ");
    return result;
  }

  const inputString = "Bonjour bonjour bonjour le monde monde monde monde";
  const result = countWordOccurrences(inputString);
  console.log(result);