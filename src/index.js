const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arrExpr = expr.split('');
    let result = [];
    
    for (var i = 0; i < arrExpr.length; i += 10) {
        let fletter = (arrExpr.slice(i, i + 10)).join('');
        let symb = [];
        let arrLet = fletter;
        
            if (arrLet === "**********") {
                symb.push(" ");
            } else {
                let letter = deleteZeroes(fletter);
                arrLet = letter.split('');
                
                for (var j = 0; j < arrLet.length; j += 2) {
            
                    if (arrLet.slice(j, j + 2).join('') === '10' ) {

                        symb.push('.')} 
                    if (arrLet.slice(j, j + 2).join('') === '11' ) {
                        symb.push('-')}        
                }
            } 

            r=MORSE_TABLE[symb.join('')];
            
            if (r === undefined) {
                result.push(" ");
            } else {
                result.push(r);
            }
            

        }
    
    let strResult = result.join('');
    return strResult;
        
}


function deleteZeroes(str1) {
    return str1.substr(str1.indexOf("1") , str1.length);
}

module.exports = {
    decode
}