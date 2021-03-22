// a > 0 y a debe ser coprimo de m, es decir, el mcd de a y m debe ser 1
// b <= m
// m es el tamaño del alfabeto


// const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// let plainText = 'holamundo';
// let key = 'secreto';


//returns the positions of each letter of the text in the alphabet
function positionText(text) {
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


function validateKeys(a,b,m) {
    if(a>0 && gcd(a,m) && b<=m) {
        return true;
    }
    return false;
}
//calculate gcd
function gcd(a,b) {
    let x = a;
    let y = b;
    let r = 0;
    while (y>0) {
        r = x%y
        x = y
        y = r
    }
    if (x === 1) {
        return true;
    }
    return false;
}
//calculate extended gcd 
function egcd(a,b) {
    let a1 = a;
    let b1 = b;
    if (a1 < b1) {
        [a1,b1] = [b1, a1];
    } 
    let s = 0, old_s = 1;
    let t = 1, old_t = 0;
    let r = b1, old_r = a1;
    while (r != 0) {
        let q = Math.floor(old_r/r);
        [r, old_r] = [old_r - q*r, r];
        [s, old_s] = [old_s - q*s, s];
        [t, old_t] = [old_t - q*t, t];
    }
    console.log("Bezout coef: ", old_s, old_t);
    console.log("GCD: ", old_r);
    console.log("Quot by GCD: ", s, t);

    if( Math.min(a,b)*old_t%Math.max(a,b) != 1) {
        return `Hi`;
    }else {
        return old_t;
    }
}
//usign brute force
function multiInverse(a) {
    let inverse=0;
    for(let i=0;i<alphabet.length;i++){
        if(a*i%alphabet.length == 1) {
            inverse = i;
        }
    }
    return inverse;
}
function encryptAffine(plainText,a,b) {
    if(!validateKeys(a,b,alphabet.length)) return `Error`;
    let plainTextPos = positionText(plainText);
    let encryptedTextPos = [];
    for(let i=0;i<plainTextPos.length;i++){
        if(plainTextPos[i] === ' '){
            encryptedTextPos.push(' ');
        }else {
            encryptedTextPos.push((a*plainTextPos[i]+b)%alphabet.length);
        }
    }
    let encryptedText = '';
    for (let i=0; i<encryptedTextPos.length; i++) {
        if(encryptedTextPos[i] === ' '){
            encryptedText += ' ';
        }else {
            encryptedText += `${alphabet[encryptedTextPos[i]]}`;
        }
    }
    return encryptedText;
}

function decryptAffine(cryptedText,a,b) {
    let encryptedTextPos = positionText(cryptedText);
    let plainTextPos = [];
    // let invMul = egcd(a,b);
    let invMul = multiInverse(a);
    let invAd = Math.abs(alphabet.length-b);
    if(invMul === `Hi`) return `Error`;
    for( let i=0;i<encryptedTextPos.length;i++) {
        if(encryptedTextPos[i] === ' '){
            plainTextPos.push(' ');
        }else {
            plainTextPos.push((invMul*(encryptedTextPos[i]+(invAd)))%alphabet.length);
        }
    }
    let plainText = '';
    for (let i=0; i<plainTextPos.length; i++) {
        if(plainTextPos[i] === ' '){
            plainText += ' ';
        }else {
            plainText += `${alphabet[plainTextPos[i]]}`;
        }
    }
    return plainText;
}

// egcd(12345,11111)

// let encryptedText = encryptAffine('cryptography class',3,2);
// console.log(`Encrypted Text = ${encryptedText}`);
// let plainText = decryptAffine('lfichlfijtbijlh',7,5);
// let plainText = decryptAffine(encryptedText,3,2);
// console.log(`Plain Text = ${plainText}`);


export {encryptAffine, decryptAffine};