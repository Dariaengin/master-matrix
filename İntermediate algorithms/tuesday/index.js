function LongestWord(sentence) {
    return Math.max(...sentence.split(" ").map(word => word.length));
}

console.log(LongestWord("The quick brown fox jumped over the lazy dog"));
console.log(LongestWord("May the force be with you"));

function findLongestWord(str){
    let arr=st.toLowerCase().split(' ')
    let Max=0
    for(let i=0; i<arr.lenth; i++)
    {
        if (Max<arr[i].length){
            Max=arr[i].length
            word=arr
        }
    }
}