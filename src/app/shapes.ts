abstract class Shape {
    name: string;
    sideA: number;
    circumferenceResult: number;
    areaResult: number;

    constructor(theName: string){
        this.name = theName;
    }

    onChangeSideA(event: any){
        this.sideA = event.target.value;
        console.log(event.target.value)
    }

    circumference(){
        
    }

    area(){

    }
}

export class Rectangle extends Shape {
    sideB: number;
    
    constructor(name: string){
        super(name);
    }

    onChangeSideB(event: any){
        this.sideB = event.target.value;
        console.log(event.target.value)
    }

    circumference()
    {
        this.circumferenceResult = (this.sideA * 2 + this.sideB * 2);
    }

    area()
    {
        this.areaResult = (this.sideA * this.sideB);
    }
}

export class Square extends Shape {
    constructor(name: string){
        super(name);
    }
    circumference()
    {
        this.circumferenceResult = this.sideA * 4;
    }
    area()
    {
        this.areaResult = this.sideA * this.sideA;
    }
}