class Rectangle{
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
    
}

Rectangle.prototype.getArea = function(){
    return this.height*this.width;
}
var r = new Rectangle(4,5);
r.height = 50;
document.getElementById("given").innerHTML = "Properties of rectangle are: "
document.getElementById("rect1").innerHTML = "Rect1-" + "Height: " + r.height + " " + "Width: " +r.width + " Area: " + r.getArea();
