class Rectangle{
    private width: number;
    private length: number;

constructor(width :number = 1.0 , length:number=1.0  ){
    this.width=width;
    this.length=length;
}

getLength(): number {
return this.length;
}
setLength(length : number) : void{
    this.length=length;
} 


getWidth(): number {
return this.width;
}
setWidth(width:number):void{
    this.width=width;
}

getArea():number{
    return this.length * this.width;
}

getPerimeter():number{
    return 2*(this.length + this.width);
}
 tostring():string{
return `Rectangle [ length= ${this.length}, width= ${this.width} ]`;
 }

}



//Example

const rec1 =new Rectangle (1.5,2);
console.log(rec1.tostring());

const rec2 = new Rectangle();
console.log(rec2.tostring());

console.log(`Width => ${rec1.getWidth()}`);
console.log(`Length => ${rec1.getLength()}`);
console.log(`Area => ${rec1.getArea()}`);
console.log(`Perimeter => ${rec1.getPerimeter()}`);