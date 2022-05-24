const getBgColor=()=>{
    const bgColor = [{'color1':'#9cbbde','color2':'rgba(237,243,252,255)'},
    {'color1':'#f4e2b3','color2':'rgba(254,250,243,255)'},
    {'color1':'#9ddf95','color2':'rgba(243,252,242,255)'},
    {'color1':'#e6aab7','color2':'rgba(251,240,241,255)'},
    {'color1':'#d48b4f','color2':'rgba(225,222,214,255)'},
    {'color1':'#aa5bdd','color2':'rgba(214,210,221,1)'},
    {'color1':'#d97e8d','color2':'rgba(222,210,212,255)'},
    {'color1':'#e2c589','color2':'rgba(224,221,214,255)'}];

    return bgColor[parseInt(Math.random()*bgColor.length-1)];
}

export default getBgColor;