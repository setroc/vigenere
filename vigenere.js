
// const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
// const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// let plainText = 'hola mundo';
// let key = 'secreto';
//las llaves deben de ser del tamaño igual o menor al del texto plano

//returns the positions of each letter of the text in the alphabet
function positionText(text, alphabet) {
    let textPos = [];
    for (let i=0;i<text.length;i++) {
        if(text[i] != ' '){
            textPos.push(alphabet.indexOf(text[i]));
        }else {
            textPos.push(' ');
        }
    }
    return textPos;
}

//function to encrypt plain text using Vigenere cipher
function encryptVigenere(plainText, key, alphabet) {
    let plainTextPos = positionText(plainText, alphabet);
    let keyPos = positionText(key, alphabet);
    let encryptedTextPos = [];
    let currentKey = 0;
    let i=0;
    while (i<plainTextPos.length) {
        if (currentKey<keyPos.length) {
            if(plainTextPos[i] === ' '){
                encryptedTextPos.push(' ');
            }else {
                encryptedTextPos.push((plainTextPos[i]+keyPos[currentKey])%alphabet.length);
                currentKey++;
            }
        }else {
            currentKey = 0
            i--;
        }
        i++;
    }
    let encryptedText = '';
    for (let i=0; i<encryptedTextPos.length; i++) {
        if(encryptedTextPos[i] === ' ') {
            encryptedText += ' ';
        }else {
            encryptedText += `${alphabet[encryptedTextPos[i]]}`;
        }
    }
    return encryptedText;
}
//function to decrypt text usign Vigenere
function decryptVigenere(encryptedText, key, alphabet) {
    let encryptedTextPos = positionText(encryptedText, alphabet);
    let keyPos = positionText(key, alphabet);
    let plainTextPos = [];
    let currentKey = 0;
    let i=0;
    while(i<encryptedTextPos.length) {
        if(currentKey<keyPos.length) {
            if(encryptedTextPos[i] === ' '){
                plainTextPos.push(' ');
            }else {
                plainTextPos.push((encryptedTextPos[i]+(alphabet.length-keyPos[currentKey]))%alphabet.length);
                currentKey++;
            }
        }else {
            currentKey=0;
            i--;
        }
        i++;
    }
    let plainText = '';
    for (let i=0;i<plainTextPos.length;i++) {
        if(plainTextPos[i] === ' ') {
            plainText += ' ';
        }else {
            plainText += `${alphabet[plainTextPos[i]]}`;
        }
    }
    return plainText;
}
// let encryptedText = encryptVigenere(plainText,key, alphabet);
// console.log(`Encrypted Text: ${encryptedText}`);
// console.log(`Plain Text: ${decryptVigenere(encryptedText,key, alphabet)}`);
// let encryptedText = 'zradsmgbvbcof';
// let key2 = 'privacy';
// console.log(`Plain Text: ${decryptVigenere(encryptedText,key2)}`);

// console.log(generateKey(alphabet));

export {encryptVigenere, decryptVigenere};