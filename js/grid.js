class Grid {

    static copyGrid(grid) {
        const copy = []
        for(let i = 0; i < grid.length; i++) {
            copy[i] = []
            for(let j = 0; j < grid.length; j++) {
                copy[i][j] = grid[i][j]
            }
        }

        return copy
    }

    static transposeGrid(grid) {
        const transposed = this.copyGrid(grid)

        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid.length; j++) {
                transposed[j][i] = Cell.copyCell(j, i, grid[i][j].value)
            }
        }

        return transposed
    }

    static slideGrid(grid) {
        for(let i = 0; i < grid.length; i++)
            grid[i] = this.slideRow(grid[i], i)

        return grid
    }

    static slideRow(row, rowIndex) {
        let numbersOnly = row.filter(cell => cell.value !== 0)
        
        let numZeros = row.length - numbersOnly.length
        const zeros = []
        for(let j = 0; j < numZeros; j++) {
            zeros[j] = new Cell(rowIndex, j)
        }
        
        const newRow = [...zeros, ...numbersOnly]
        
        return newRow.map((cell, j) => new Cell(cell.i, j, cell.value))

    }

    static combineGrid(grid) {
        for(let i = 0; i < grid.length; i++)
            grid[i] = this.combineRow(grid[i])

        return this.slideGrid(grid)
    }

    static combineRow(row) {
        for(let j = row.length - 1; j >= 1; j--) {
            if(row[j].value === 0) continue

            if(row[j].value === row[j - 1].value) {
                row[j].value *= 2
                row[j - 1].value = 0
            }
        }

        return row
    }

    static reverseGridRows(grid) {
        for(let i = 0; i < grid.length; i++) {
            grid[i].reverse()
            grid[i] = grid[i].map((cell, index) => new Cell(i, index, cell.value))
        }

        return grid
    }

    static compareGrids(gridA, gridB) {
        for(let i = 0; i < gridA.length; i++) {
            for(let j = 0; j < gridA.length; j++) {
                const cellA = gridA[i][j]
                const cellB = gridB[i][j]
                if(cellA.value !== cellB.value ||
                    cellA.i !== cellB.i ||
                    cellA.j !== cellB.j ) return false
            }
        }

        return true
    }

}