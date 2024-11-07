const countWordOccurrences = (sentence: string, word: string): number => {
    let count = 1;
    const setLowerCaseSentence = sentence.toLocaleLowerCase();
    const setLowerCaseWord = word.toLocaleLowerCase();
    const singleWord = setLowerCaseSentence.split(" ");

    for (let word of singleWord) {
        if (word === setLowerCaseWord) {
            count++;
        }
    }

    return count;
}

console.log(countWordOccurrences("I love TypeScript!", "typescript"));