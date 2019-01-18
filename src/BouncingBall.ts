class Ball {
    constructor(
        public x = 100,
        public y = 100,
        private vx = 5,
        private vy = 2,
        private readonly radius = 25,
        private readonly color = 'blue'
    ) { }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(
            this.x,
            this.y,
            this.radius,
            0,
            Math.PI * 2,
            true
        );
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    bounce(canvasWidth: number, canvasHeight: number) {
        this.x += this.vx;
        this.y += this.vy;
        this.vy *= 0.99;
        this.vy += 0.45;

        if (this.y + this.vy + this.radius > canvasHeight || this.y + this.vy - this.radius < 0) {
            this.vy = -1.05 * this.vy;
        }
        if (this.x + this.vx + this.radius > canvasWidth || this.x + this.vx - this.radius < 0) {
            this.vx = -this.vx;
        }
    }
}

export class BouncingBall {
    private readonly ctx: CanvasRenderingContext2D;
    private readonly canvasWidth: number;
    private readonly canvasHeight: number;
    private readonly ballRadius = 25;
    private readonly ball = new Ball(
        Math.random() * 350 + this.ballRadius + 5,
        Math.random() * 350 + this.ballRadius + 5,
        5, 2,
        this.ballRadius,
    );

    constructor(canvas: HTMLCanvasElement) {
        const ctx = canvas.getContext('2d');
        if (ctx == null) {
            throw `Failed to get 2d canvas context from canva with id: ${canvas.id}`;
        }
        this.ctx = ctx;
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
        window.requestAnimationFrame(() => this.draw());
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.ball.draw(this.ctx);
        this.ball.bounce(this.canvasWidth, this.canvasHeight);
        window.requestAnimationFrame(() => this.draw());
    }
}

