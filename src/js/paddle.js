const paddle = {
    speed: 4,
    pos: {
        x: 0,
        y: 0,
    },
    size: {
        h: 10,
        w: 100,
    },
    init(main) {
        this.ctx = main.ctx;
        this.canvas = main.canvas;
        //
        this.pos.x = (this.canvas.width / 2) - (this.size.w / 2);
        this.pos.y = this.canvas.height - this.size.h - (this.size.h * 4 );
    },
    update() {
        this.draw();
    },
    draw() {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.fillStyle = '#000';
        this.ctx.rect(this.pos.x, this.pos.y, this.size.w, this.size.h);
        this.ctx.fill();
        this.ctx.restore();
    }
}
export default paddle;