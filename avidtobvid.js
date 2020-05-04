function avtobv(av) {
    //console.log(av);
    var code=["f","Z","o","d","R","9","X","Q",
    "D","S","U","m","2","1","y","C","k","r",
    "6","z","B","q","i","v","e","Y","a","h","8","b",
    "t","4","x","s","W","p","H","n","J","E","7",
    "j","L","5","V","G","3","g","u","M","T","K","N","P","A","w","c","F"];
    var s=[11,10,3,8,4,6];
    var xorr=177451812,addd=8728348608;
    av=parseInt(av,10);
    av=(av^xorr)+addd;
    var bv=["B","V","1"," "," ","4"," ","1"," ","7"," "," "," "];
    for(var i=0;i<6;i++)
    {
        bv[s[i]]=code[Math.floor(av/Math.pow(58,i)%58)];
    }
    //console.log(bv);
    var BV="";
    for(var i=0;i<13;i++)BV+=bv[i];
    //console.log(BV);
    return "<a href=\""+"https://www.bilibili.com/video/"+BV+"\" target=\"_blank\">"+BV+"</a>";
}