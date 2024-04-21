// Applies Secret gwa Theme
function gwaifyNumber(num){
    if(!data.gword.enabled) return num
    return num
        .replaceAll('9', "<img src='res/gwaify/gwaold.webp'>")
        .replaceAll('8', "<img src='res/gwaify/gwatrollfront.webp'>")
        .replaceAll('7', "<img src='res/gwaify/gwatroll.webp'>")
        .replaceAll('6', "<img src='res/gwaify/gwatoot.webp'>")
        .replaceAll('5', "<img src='res/gwaify/gwablob.webp'>")
        .replaceAll('4', "<img src='res/gwaify/gwastarfull.webp'>")
        .replaceAll('3', "<img src='res/gwaify/gwastar.webp'>")
        .replaceAll('2', "<img src='res/gwaify/gwahatfront.webp'>")
        .replaceAll('1', "<img src='res/gwaify/gwafront.webp'>")
        .replaceAll('0', "<img src='res/gwaify/gwegg.webp'>")
}

// Explains Secret gwa Theme
function gwaifyExplain(){
    createAlert("Here's what those gwas mean!",
        "9 = <img src='res/gwaify/gwaold.webp'><br>8 = <img src='res/gwaify/gwatrollfront.webp'><br>7 = <img src='res/gwaify/gwatroll.webp'><br>6 = <img src='res/gwaify/gwatoot.webp'><br>5 = <img src='res/gwaify/gwablob.webp'><br>4 = <img src='res/gwaify/gwastarfull.webp'><br>3 = <img src='res/gwaify/gwastar.webp'><br>2 = <img src='https://cdn.discordapp.com/emojis/970019428391591976.webp?size=24'><br>1 = <img src='https://cdn.discordapp.com/emojis/926324253270360154.webp?size=24'><br>0 = <img src='res/gwaify/gwegg.webp'>",
        "Thanks for the help!"
    )
}
