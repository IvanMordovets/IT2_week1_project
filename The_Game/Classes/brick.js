class Brick{
    
    #position;
    #width;
    #height;
    #color;

    constructor(position, width, height, color){
        this.#position = position;
        this.#width = width;
        this.#height = height;
        this.#color = color;
    }

    get position() {
        return this.#position;
    }

    get width() {
        return this.#width;
    }

    get height() {
        return this.#height;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.#color;
        ctx.fillRect(this.#position.x, this.#position.y, this.#width, this.#height);
    }

}