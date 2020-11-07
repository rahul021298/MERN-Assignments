function printAsterisk(){
    var i1= parseInt(prompt("Input 1: "));
    if(i1>=1 && i1<=30){
        var i2= parseInt(prompt("Input 2: "));
        if(i2>=1 && i2<=30){
            var i3 = parseInt(prompt("Input 3: "));
            if(i3>=1 && i3<=30){
                for(i=0;i<i1;i++){
                    document.getElementById("o1").innerHTML+="*" ;
                }
                for(i=0;i<i2;i++){
                    document.getElementById("o2").innerHTML+="*";
                }
                for(i=0;i<i3;i++){
                    document.getElementById("o3").innerHTML+="*";
                }
            }
            else{
                alert("Number out of range please enter between 1-30");
            }
        }
        else{
                alert("Number out of range please enter between 1-30");
            }
    }
    else{
         alert("Number out of range please enter between 1-30");
    }
    
}