import { Shape } from './Shape.js';

export class Square extends Shape {
    constructor(n) {
        super(n, n);
    }
    DrawShape() {
        let line = '';
        for (let w = 0; w < this.Width; w++) {
            line += '* ';
        }
        for (let h = 1; h <= this.Height; h++) {
            console.log(`${line}`);
        }
    }
};
