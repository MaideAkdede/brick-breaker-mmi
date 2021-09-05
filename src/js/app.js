import Brick from "./Brick";

const main = {
    ctx: null,
    canvas: null,
    //
    bricks: [],
    gap: 11,
    col: 8,
    row: 4,
    init() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.insertAdjacentElement('afterbegin', this.canvas);
        //
        this.canvas.width = 600;
        this.canvas.height = 400;
        //
        this.ctx.strokeStyle = '#000';
        this.ctx.fillStyle = '#000';
        //
        this.bricks.push(new Brick(main));
        //
        this.animate();
    },
    animate
        () {
        window.requestAnimationFrame(() => {
            this.animate()
        });
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        //
        this.bricks.forEach((brick) => {
            brick.update();
        })
    }
}
main.init();