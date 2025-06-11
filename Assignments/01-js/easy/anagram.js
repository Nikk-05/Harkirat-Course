/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2){
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    let freq1 = {}
    let freq2 = {}
    for(let char of str1){
        freq1[char] = (freq1[char] || 0) + 1
    }
    for(let char of str2){
        freq2[char] = (freq2[char] || 0) + 1
    }
    for(let char of str1){
        if(freq1[char] != freq2[char])
            return false;
    }
    for(let char of str2){
        if(freq1[char] != freq2[char])
            return false;
    }
    return true;
}

module.exports = isAnagram;
