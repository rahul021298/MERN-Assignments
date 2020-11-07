class Rectangle{
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
}

var rect1 = new Rectangle(3,4);
var rect2 = new Rectangle(4,5);
var rect3 = new Rectangle(5,6);
document.getElementById("given").innerHTML = "Properties of rectangle are: "
document.getElementById("rect1").innerHTML = "Height: " + rect1.height + " " + "Width: " +rect1.width;
document.getElementById("rect2").innerHTML = "Height: " + rect2.height + " " + "Width: " +rect2.width;
document.getElementById("rect3").innerHTML = "Height: " + rect3.height + " " + "Width: " + rect3.width;