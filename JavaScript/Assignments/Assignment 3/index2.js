class Rectangle{
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
    
}

Rectangle.prototype.getArea = function(){
    return this.height*this.width;
}
var rect1 = new Rectangle(4,5);
var rect2 = new Rectangle(4,5);
var rect3 = new Rectangle(4,5);

// rect1.prototype.getArea() = width * height;
document.getElementById("given").innerHTML = "Properties of rectangle are: "
document.getElementById("rect1").innerHTML = "Rect1-" + "Height: " + rect1.height + " " + "Width: " +rect1.width + "Area: " + rect1.getArea();
document.getElementById("rect2").innerHTML = "Rect2-" + "Height: " + rect2.height + " " + "Width: " +rect2.width + "Area: " + rect2.getArea();
document.getElementById("rect3").innerHTML = "Rect3-" + "Height: " + rect3.height + " " + "Width: " +rect3.width + "Area: " + rect3.getArea();

rect2.height = 6;
rect2.width = 7;
document.getElementById("rect2").innerHTML = "Rect2-" + "Height: " + rect2.height + " " + "Width: " +rect2.width + "Area: " + rect2.getArea();

rect3.height = 8;
rect3.width = 9;
document.getElementById("rect3").innerHTML = "Rect3-" + "Height: " + rect3.height + " " + "Width: " +rect3.width + "Area: " + rect3.getArea();