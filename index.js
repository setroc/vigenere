import {encryptVigenere, decryptVigenere} from './vigenere.js';


const encryptAlphabet = document.querySelector("#encrypt_alphabet");
const encryptKey = document.querySelector("#encrypt_key");
const bntEncrypt = document.querySelector("#encrypt_button");

const decryptAlphabet = document.querySelector("#decrypt_alphabet");
const decryptKey = document.querySelector("#decrypt_key");
const bntDecrypt = document.querySelector("#decrypt_button");


eventListeners();
function eventListeners() {
    bntEncrypt.addEventListener('click',encrypt);
}

function encrypt() {
    // if(encryptAlphabet.value===''){

    // }
    console.log(encryptAlphabet.value);
    const alphabet = encryptAlphabet.value.split(',');
    console.log(alphabet);
    console.log(encryptKey.value)
}

//generate a random key with length 0<key<=plainText.length
function generateKey(alphabet,plainText) {
    const keyLength = Math.floor(Math.random()*(plainText.length-1)+1);
    let key = '';
    for(let i=0; i<keyLength; i++) {
        let random = Math.floor(Math.random()*(alphabet.length-1)+1);
        key += ''+alphabet[random];
    }
    return key;

}


// a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z

// let encryptedText = 'zradsmgbvbcof';
// let key2 = 'privacy';
// const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// console.log(`Plain Text: ${decryptVigenere(encryptedText,key2, alphabet)}`)
