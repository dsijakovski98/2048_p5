class Cell {
    constructor(i, j, value = 0) {
        this.i = i
        this.j = j
        this.value = value
    }

    static copyCell(i, j, value) {
        const cell = new Cell(i, j, value)
        return cell
    }

    show(isNew = false) {
        const x = this.j * cellWidth
        const y = this.i * cellWidth
        const { bgColor, textColor } = this.getCellColor()
        fill(isNew ? '#00ffaa' : bgColor)
        strokeWeight(2)
        rect(x, y, cellWidth, cellWidth)
        textAlign(CENTER, CENTER)
        textSize(60)    
        fill(isNew ? 0 : textColor)
        this.value !== 0 && text(this.value, x + cellWidth / 2, y + cellWidth / 2)
    }

    setValue(value) {
        this.value = value
    }

    getCellColor() {
        switch(this.value) {
            case 2:
            case 4:
                return {
                    bgColor: color(239, 227, 206), // rgb(239,227,206)
                    textColor: color(120, 110, 101) // rgb(120,110,101)
                }

            case 8:
                return {
                    bgColor: color(244, 179, 126), // rgb(244,179,126)
                    textColor: color(250, 247, 243) // rgb(250,247,243)
                }

            case 16:
                return {
                    bgColor: color(246, 150, 100), // rgb(246,150,100)
                    textColor: color(250, 247, 243) // rgb(250,247,243)
                }

            case 32:
                return {
                    bgColor: color(247, 124, 95), // rgb(247,124,95)
                    textColor: color(250, 247, 243) // rgb(250,247,243)
                }
            
            case 64:
                return {
                    bgColor: color(247, 95, 59), // rgb(247,95,59)
                    textColor: color(250, 247, 243) // rgb(250,247,243)
                }

            case 128:
                return {
                    bgColor: color(237, 208, 115), // rgb(237,208,115)
                    textColor: color(250, 247, 243) // rgb(250,247,243)
                }

            case 256:
                return {
                    bgColor: color(235, 202, 97), // rgb(235,202,97)
                    textColor: color(250, 247, 243) // rgb(250,247,243)
                }
            
            case 512:
                return {
                    bgColor: color(223, 169, 44), // rgb(223,169,44)
                    textColor: color(250, 247, 243) // rgb(250,247,243)
                }

            case 1024:
                return {
                    bgColor: color(224, 166, 30), // rgb(224,166,30)
                    textColor: color(250, 247, 243) // rgb(250,247,243)
                }

            case 2048:
                return {
                    bgColor: color(237, 193, 45), // rgb(237,193,45)
                    textColor: color(250, 247, 243) // rgb(250,247,243)
                }
            
            default:
                return {
                    bgColor: color(255, 255, 255),
                    textColor: color(0, 0, 0)
                }
        }
    }

}