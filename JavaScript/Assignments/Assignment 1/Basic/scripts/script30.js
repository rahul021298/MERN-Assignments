function translate(str){
    var arr = str.split(" ");
    for(i=0;i<arr.length;i++){
        part1 = arr[i].substr(0,1) + "ay";
        part2 = arr[i].substr(1,arr[i].length);
        arr[i] = part2 + part1; 
    }
    str = arr.toString();
    str = str.replace(/\,/g," ");
    str = str.toLowerCase();
    document.getElementById("translation").innerHTML= str.charAt(0).toUpperCase() + str.substr(1,str.length);
    console.log(str.charAt(0).toUpperCase() + str.substr(1,str.length));

}
translate("The quick brown fox");