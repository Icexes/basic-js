class VigenereCipheringMachine {
    constructor(type = true) {
        this.modification = type;
    }
    vignereSquare = [
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        "BCDEFGHIJKLMNOPQRSTUVWXYZA",
        "CDEFGHIJKLMNOPQRSTUVWXYZAB",
        "DEFGHIJKLMNOPQRSTUVWXYZABC",
        "EFGHIJKLMNOPQRSTUVWXYZABCD",
        "FGHIJKLMNOPQRSTUVWXYZABCDE",
        "GHIJKLMNOPQRSTUVWXYZABCDEF",
        "HIJKLMNOPQRSTUVWXYZABCDEFG",
        "IJKLMNOPQRSTUVWXYZABCDEFGH",
        "JKLMNOPQRSTUVWXYZABCDEFGHI",
        "KLMNOPQRSTUVWXYZABCDEFGHIJ",
        "LMNOPQRSTUVWXYZABCDEFGHIJK",
        "MNOPQRSTUVWXYZABCDEFGHIJKL",
        "NOPQRSTUVWXYZABCDEFGHIJKLM",
        "OPQRSTUVWXYZABCDEFGHIJKLMN",
        "PQRSTUVWXYZABCDEFGHIJKLMNO",
        "QRSTUVWXYZABCDEFGHIJKLMNOP",
        "RSTUVWXYZABCDEFGHIJKLMNOPQ",
        "STUVWXYZABCDEFGHIJKLMNOPQR",
        "TUVWXYZABCDEFGHIJKLMNOPQRS",
        "UVWXYZABCDEFGHIJKLMNOPQRST",
        "VWXYZABCDEFGHIJKLMNOPQRSTU",
        "WXYZABCDEFGHIJKLMNOPQRSTUV",
        "XYZABCDEFGHIJKLMNOPQRSTUVW",
        "YZABCDEFGHIJKLMNOPQRSTUVWX",
        "ZABCDEFGHIJKLMNOPQRSTUVWXY",
    ]
    encrypt(message, key) {
        if (!message || !key) throw Error;
        let result = [];
        let key1 = key.repeat(Math.ceil(message.length / key.length)).toUpperCase()
        for (let i = 0, j = 0; i < message.length; i++ , j++) {
            if (/[a-z]/i.test(message.charAt(i))) {
                result.push(this.vignereSquare[key1.charAt(j).charCodeAt() - 65][message.toUpperCase().charAt(i).charCodeAt() - 65])
            }
            else {
                result.push(message.charAt(i))
                j--;
            }
        }
        return this.modification ? result.join("") : result.reverse().join("");
    }

    decrypt(message, key) {
        if (!message || !key) throw Error;
        let result = [];
        let key1 = key.repeat(Math.ceil(message.length / key.length)).toUpperCase()
        for (let i = 0, j = 0; i < message.length; i++ , j++) {
            if (/[a-z]/i.test(message.charAt(i))) {
                result.push(this.vignereSquare[0][this.vignereSquare[key1.charAt(j).charCodeAt() - 65].indexOf(message.charAt(i))])
            }
            else {
                result.push(message.charAt(i))
                j--;
            }
        }
        return this.modification ? result.join("") : result.reverse().join("");
    }
}
module.exports = VigenereCipheringMachine;
