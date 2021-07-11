import promptSync from 'prompt-sync'
import { Square } from './Square.js';
import { Triangle } from './Triangle.js';
import { Diamond } from './Diamond.js';

const GetInput = promptSync();

const _shapes = { square: 1, triangle: 2, diamond: 3 };
console.log('Please select the shape you would like to draw');
for (let shp in _shapes) {
    console.log(`${_shapes[shp]} - ${shp}`);
}
let userInput;
switch (GetInput("Enter Value : ")) {
    case '1':
        userInput = GetInput("Enter value N : ");
        let sqr = new Square(userInput);
        sqr.Draw();
        break;
    case '2':
        userInput = GetInput("Enter value N : ");
        let triangle = new Triangle(userInput);
        triangle.Draw();
        break;
    case '3':
        userInput = GetInput("Enter value N : ");
        let diamond = new Diamond(userInput);
        diamond.Draw();
        break;
    default:
        console.log('Invalid Input');
        break;
}




