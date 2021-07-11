import { Shape } from './Shape.js';

export class Diamond extends Shape {
    constructor(n) {
        super(n, n);
    }
    DrawShape() {
        for (let h = this.Height; h >= 1; h--) {
            let line = '';
            for (let s = 1; s < h; s++) {
                line += '  ';
            }
            for (let w = 0; w <= ((this.height) - h); w++) {
                line += ' *  ';
            }
            console.log(`${line}`);
        }
        for (let h = this.Height; h >= 1; h--) {
            let line = '';
            for (let w = 0; w <= (this.height - h); w++) {
                line += '  ';
            }
            for (let s = 1; s < h; s++) {
                line += ' *  ';
            }
            console.log(`${line}`);
        }
    }
}

