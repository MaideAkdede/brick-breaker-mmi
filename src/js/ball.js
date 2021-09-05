import controller from "./controller";
import paddle from "./paddle";

const ball = {
    dx: Math.floor(2 + Math.random() * 4),
    dy: Math.floor(2 + Math.random() * 4),
    pos: {
        x: 0,
        y: 0,
    },
    radius: 10,
    state: false,
    init(main) {
        this.ctx = main.ctx;
        this.canvas = main.canvas;
        //
        this.pos.x = (this.canvas.width / 2) - this.radius;
        this.pos.y = (this.canvas.height / 2) - this.radius;
        //
    },
    update() {
        this.stateCheck();
        if (this.state) {
            this.pos.x += this.dx;
            this.pos.y += this.dy;
            //
            this.edgeCollision();
            this.paddleCollision();
        }
        this.draw();
    },
    draw() {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.fillStyle = 'purple';
        this.ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI)
        this.ctx.fill();
        this.ctx.restore();
    },
    stateCheck() {
        controller.activeKeys.forEach(key => {
            if (key === 'ArrowLeft' || key === 'ArrowRight') {
                this.state = true;
            }
        })
    },
    edgeCollision() {
        if (this.pos.y > this.canvas.height - this.radius ||
            this.pos.y < this.radius
        ) {
            this.dy = -this.dy;
        }
        if (this.pos.x < this.radius ||
            this.pos.x > this.canvas.width - this.radius
        ) {
            this.dx = -this.dx;
        }
    },
    paddleCollision() {
        if (this.pos.y + this.radius > paddle.pos.y &&
            this.pos.y - this.radius < paddle.pos.y + paddle.size.h &&
            this.pos.x - this.radius > paddle.pos.x &&
            this.pos.x + this.radius < paddle.pos.x + paddle.size.w) {
            this.dy = -this.dy;
        }
    }
}
export default ball;