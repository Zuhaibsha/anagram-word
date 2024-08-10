
 function detectAnagramWords(wordList) {
    let anagramDict = {};
    for (let word of wordList) {
        let sortedWord = word.split('').sort().join('');
        if (sortedWord in anagramDict) {
            anagramDict[sortedWord].push(word);
        } else {
            anagramDict[sortedWord] = [word];
        }
    }
    return Object.values(anagramDict);
}

let wordList = ["bat", "tap", "cat","tab", "pat"];
console.log(detectAnagramWords(wordList));
 