function LongestWord(sentence) {
    return Math.max(...sentence.split(" ").map(word => word.length));
}

console.log(LongestWord("The quick brown fox jumped over the lazy dog"));
console.log(LongestWord("May the force be with you"));