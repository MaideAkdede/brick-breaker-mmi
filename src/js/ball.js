import controller from "./controller";

const ball = {
    dx: 2,
    dy: 2,
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
            this.checkEdgeCollision();
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
    checkEdgeCollision() {
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
    }
}
export default ball;