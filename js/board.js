class Board {
    constructor(rows, cols) {
        this.rows = rows
        this.cols = cols
        this.grid = []

        
        for(let i = 0; i < rows; i++) {
            this.grid[i] = []
            for(let j = 0; j < cols; j++) {
                this.grid[i][j] = new Cell(i, j)
            }
        }

    }

    show() {
        this.grid.forEach(row => row.forEach(cell => cell.show()))
    }

    addNumber(calls) {
        if(calls === 0) return

        const emptygrid = []
        for(let i = 0; i < this.rows; i++) {
            for(let j = 0; j < this.cols; j++) {
                if(this.grid[i][j].value === 0) emptygrid.push({i, j})
            }
        }
        if(emptygrid.length === 0) return

        const {i, j} = random(emptygrid)
        
        const value = random(1) < 0.9 ? 2 : 4
        
        this.grid[i][j].setValue(value)
        newCells.push(new Cell(i, j, value))


        this.addNumber(calls - 1)
    }

    move(direction) {
        switch(direction) {
            case MOVE_UP:
                return this.moveUp()
            case MOVE_DOWN:
                return this.moveDown()
            case MOVE_LEFT:
                return this.moveLeft()
            case MOVE_RIGHT:
                return this.moveRight()
            default:
                return null
        }
    }

    updateGrid(newGrid) {
        if(Grid.compareGrids(this.grid, newGrid)) return
        
        this.grid = newGrid
        if(this.checkWin()) {
            console.log('You win!!!')
            return
        }
        newCells = []
        this.addNumber(1)
    }

    checkWin() {
        for(let i = 0; i < this.rows; i++) {
            for(let j = 0; j < this.cols; j++) {
                const value = this.grid[i][j].value
                if(value === 2048) return true
            }
        }

        return false
    }
    
    moveUp() {
        // Rotate + Slide + Combine + ReverseRows + Rotate
        let newGrid = Grid.copyGrid(this.grid)

        // Rotate
        newGrid = Grid.transposeGrid(newGrid)

        // Slide
        newGrid = Grid.slideGrid(newGrid)

        // Combine
        newGrid = Grid.combineGrid(newGrid)

        // ReverseRows
        newGrid = Grid.reverseGridRows(newGrid)

        // Rotate
        newGrid = Grid.transposeGrid(newGrid)

        this.updateGrid(newGrid)
    }

    moveDown() {
        // Rotate + Slide + Combine + Rotate
        let newGrid = Grid.copyGrid(this.grid)

        // Rotate
        newGrid = Grid.transposeGrid(newGrid)

        // Slide
        newGrid = Grid.slideGrid(newGrid)

        // Combine
        newGrid = Grid.combineGrid(newGrid)

        // Rotate
        newGrid = Grid.transposeGrid(newGrid)
        
        this.updateGrid(newGrid)
    }

    moveRight() {
        // Slide + Combine
        let newGrid = Grid.copyGrid(this.grid)
        // Slide
        newGrid = Grid.slideGrid(newGrid)

        // Combine
        newGrid = Grid.combineGrid(newGrid)

        this.updateGrid(newGrid)
    }

    moveLeft() {
        // Slide + ReverseRows + Combine + ReverseRows
        let newGrid = Grid.copyGrid(this.grid)

        // Slide
        newGrid = Grid.slideGrid(newGrid)
        
        // ReverseRows
        newGrid = Grid.reverseGridRows(newGrid)

        // Combine
        newGrid = Grid.combineGrid(newGrid)

        // ReverseRows
        newGrid = Grid.reverseGridRows(newGrid)

        this.updateGrid(newGrid)

    }


}