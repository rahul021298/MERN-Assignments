function calculate(){
    var temp= parseInt(document.getElementById("temp").value);
    if(temp!==-1 && !isNaN(temp)){
        document.getElementById("error").innerHTML="";
        var celsius = (temp-32)*5/9;
        document.getElementById("result").innerHTML="Temperatue in celsius(&deg;C): "+celsius;
    }else{
        document.getElementById("error").innerHTML="Please enter appropriate value of temperature";
    }
}