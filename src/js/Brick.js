export default class Brick {
    constructor(main) {
        this.canvas = main.canvas;
        this.ctx = main.ctx;
        this.bricks = main.bricks;
        this.gap = main.gap;
        this.row = main.row;
        this.col = main.col;
        //
        this.size = {
            w: 62,
            h: 20
        }
        this.speed = 5;
    }

    draw() {
        this.ctx.save();
        this.ctx.beginPath();
        //
        for (let r = 0; r < this.row; r++) {
            for (let c = 0; c < this.col; c++) {
                this.x = c * (this.gap + this.size.w) + this.gap;
                this.y = r * (this.gap + this.size.h) + this.gap + this.gap;
                this.ctx.fillRect(this.x, this.y, this.size.w, this.size.h);
            }
        }
        //
        //this.ctx.fillRect(20, 15, this.size.w, this.size.h);
        this.ctx.restore();
    }

    update() {
        this.draw();
    }
}