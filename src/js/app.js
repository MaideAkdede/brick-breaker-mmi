import paddle from "./paddle";
import controller from "./controller";

import Brick from "./Brick";

const main = {
    ctx: null,
    canvas: null,
    // Brick Values
    bricks: [],
    gap: 11,
    col: 8,
    row: 3,
    brickSize: {
        w: 62,
        h: 20
    },
    init() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.insertAdjacentElement('beforeend', this.canvas);
        //
        this.canvas.width = 600;
        this.canvas.height = 400;
        //
        this.ctx.strokeStyle = '#000';
        this.ctx.fillStyle = '#000';
        //
        for (let r = 0; r < this.row; r++) {
            for (let c = 0; c < this.col; c++) {
                this.x = c * (this.gap + this.brickSize.w) + this.gap;
                this.y = r * (this.gap + this.brickSize.h) + this.gap + this.gap;
                this.bricks.push(new Brick(main, this.x, this.y));
            }
        }
        //
        paddle.init(main)
        controller.init();
        this.animate();
    },
    animate() {
        window.requestAnimationFrame(() => {
            this.animate()
        });
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        //
        paddle.update();
        this.bricks.forEach((brick) => {
            brick.update();
        })
        //
    }
}
main.init();