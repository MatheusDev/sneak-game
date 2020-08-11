class Snake {

  constructor(x, y, width, height, canvas) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.canvas = canvas
  }
  drawSneak = () => {
    this.canvas.fillRect(50,50,50,50)
  }
  
}

export default Snake