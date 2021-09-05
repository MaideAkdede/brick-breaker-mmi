import controller from "./controller";

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
        //
    },
    update() {
        this.checkEdgeCollision();
        this.checkKeys();
        this.draw();
    },
    draw() {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.fillStyle = '#000';
        this.ctx.rect(this.pos.x, this.pos.y, this.size.w, this.size.h);
        this.ctx.fill();
        this.ctx.restore();
    },
    checkKeys() {
        controller.activeKeys.forEach(key => {
            if (key === 'ArrowLeft') {
                this.pos.x -= this.speed;
            } else if (key === 'ArrowRight') {
                this.pos.x += this.speed;
            }
        })
    },
    checkEdgeCollision(){
        if(this.pos.x > this.canvas.width - this.size.w){
           this.pos.x = this.canvas.width - this.size.w;
        }
        if(this.pos.x < 0){
            this.pos.x = 0;
        }
    }
}
export default paddle;