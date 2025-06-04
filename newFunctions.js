function camelize (str) {
    strArr = str.split("-")
    let camelStr = ""
    for (i=0; i<strArr.length; i++) {

        if(i == 0) {
            camelStr = strArr[i].toLowerCase();
            console.log(camelStr);
        } else {
            camelStr = camelStr + strArr[i].substring(0,1).toUpperCase() + strArr[i].substring(1);
            console.log(camelStr);
        }

    }
    return camelStr;
}

console.log(camelize("Super-Duper-Texting-Goober"));