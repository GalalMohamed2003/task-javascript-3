var Rectangle = /** @class */ (function () {
    function Rectangle(width, length) {
        if (width === void 0) { width = 1.0; }
        if (length === void 0) { length = 1.0; }
        this.width = width;
        this.length = length;
    }
    Rectangle.prototype.getLength = function () {
        return this.length;
    };
    Rectangle.prototype.setLength = function (length) {
        this.length = length;
    };
    Rectangle.prototype.getWidth = function () {
        return this.width;
    };
    Rectangle.prototype.setWidth = function (width) {
        this.width = width;
    };
    Rectangle.prototype.getArea = function () {
        return this.length * this.width;
    };
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.length + this.width);
    };
    Rectangle.prototype.tostring = function () {
        return "Rectangle [ length= ".concat(this.length, ", width= ").concat(this.width, " ]");
    };
    return Rectangle;
}());
//Example
var rec1 = new Rectangle(1.5, 2);
console.log(rec1.tostring());
var rec2 = new Rectangle();
console.log(rec2.tostring());
console.log("Width => ".concat(rec1.getWidth()));
console.log("Length => ".concat(rec1.getLength()));
console.log("Area => ".concat(rec1.getArea()));
console.log("Perimeter => ".concat(rec1.getPerimeter()));
