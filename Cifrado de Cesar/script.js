function cifradoCesar(str, desplazamiento) {
    let finalStr = "";
    for (let i = 0; i < str.length; i++) {
        let ascci = str[i].charCodeAt();
        if (ascci < 91 && ascci > 64 || ascci < 123 && ascci > 96) {
            if (ascci !== 90 && ascci !== 122) {
                ascci = ascci + desplazamiento;
                finalStr += String.fromCharCode(ascci);
            } else {
                ascci = ascci - 26 + desplazamiento;
                finalStr += String.fromCharCode(ascci);
            }
        } else {
            finalStr += str[i];
        }
    }
    console.log(finalStr)
}

cifradoCesar("Zb.R", 3);