import { Component } from '@angular/core';
import { Rectangle, Square } from './shapes'

@Component ({
    selector: 'ng-calculator',
    templateUrl: './calculator.component.html'
})

export class Calculate{
    rectangleShape = new Rectangle("Rektangel")
    squareShape = new Square("Firkant");
}