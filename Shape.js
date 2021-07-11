export class Shape {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    get Height() {
        return this.height;
    }
    get Width() {
        return this.width;
    }
    Draw() {
        this.DrawShape();
    }
};