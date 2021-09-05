export default class Brick {
    constructor(main, x, y) {
        //import datas from main
        this.canvas = main.canvas;
        this.ctx = main.ctx;
        this.bricks = main.bricks;
        this.gap = main.gap;
        this.row = main.row;
        this.col = main.col;
        this.x= x;
        this.y = y;
        this.w = main.brickSize.w;
        this.h = main.brickSize.h;
        //
        this.speed = 5;
        //
        this.r = Math.floor(Math.random() * 255);
        this.g = Math.floor(Math.random() * 255);
        this.b = Math.floor(Math.random() * 255);
        this.color = 'rgb('+this.r+','+this.g+','+this.b+')';
    }

    draw() {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        //
       /* for (let r = 0; r < this.row; r++) {
            for (let c = 0; c < this.col; c++) {
                this.x = c * (this.gap + this.size.w) + this.gap;
                this.y = r * (this.gap + this.size.h) + this.gap + this.gap;
                this.ctx.rect(this.x, this.y, this.size.w, this.size.h);
                this.ctx.fill();
            }
        }*/
        //
        //this.ctx.fillRect(20, 15, this.size.w, this.size.h);
        this.ctx.rect(this.x, this.y, this.w, this.h);
        this.ctx.fill();
        this.ctx.restore();
    }

    update() {
        this.draw();
    }
    static get colors() {
        return ['#a77f8b', '#8b7bcf', '#7bbe72', '#d4a65d', '#D6384F'];
    }
}
