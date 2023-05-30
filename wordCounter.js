let textBox = document.getElementById("textBox");
let wordsLabel = document.getElementById("wordsLabel");
let letterLabel = document.getElementById("letterLabel");
let sentenceLabel = document.getElementById("sentenceLabel");

let text, result;

function startCount() {
    text = textBox.value;
    countWordsLettersSentences(text)
}

function countWordsLettersSentences(text) {
    
    const words = text.split(/\s+/).filter(word => word.length > 0);
    
    const wordCount = words.length;
  
    const letterCount = text.replace(/[^a-zA-Zא-ת]/g, '').length;
  
    const sentenceCount = text.split(/[.!?:]+/).filter(sentence => sentence.length > 0).length;
    
    wordsLabel.textContent = "Words : " + wordCount;
    letterLabel.textContent = "Letters : " + letterCount;
    sentenceLabel.textContent = "Sentences : " + sentenceCount;

    return {
      words: wordCount,
      letters: letterCount,
      sentences: sentenceCount
    };
    
}