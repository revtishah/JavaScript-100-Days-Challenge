const word = document.querySelector('.input-text');
const btn = document.querySelector('.btn');
const result  =document.querySelector('.result');

btn.addEventListener("click", countVowel);

function countVowel(){
    let vowelCount = 0;
    let wordVal = word.value.toLowerCase();

    for(let i = 0; i < wordVal.length; i++){
        let letters = wordVal[i];
        if(letters.match(/([a,e,i,o,u])/)){
            vowelCount++;
        }
    }

    result.innerHTML = `${wordVal.toUpperCase()} has ${vowelCount} vowels.`
}