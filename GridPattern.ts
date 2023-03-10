import { Coordinate } from "./Coordinate"
import Grid, { Matrix, Cell } from "./Grid"

// override with type number
type CellPattern = 0|1

enum PatternCellStates {
    Match = 1,
    Any = 0,
}

export default class GridPattern extends Grid {

    match(grid: Matrix): Coordinate[]|false {
        let mainValue: Cell = 0
        let coordinates: Coordinate[] = []

        for (let row = 0; row < this.rowLimit; row++) {
            for (let column = 0; column < this.columnLimit; column++) {
                const currentElement = grid[row][column] as Cell
                const cellState = this.getCell(new Coordinate(row, column)) as CellPattern
                // store the first active element from the pattern
                if (cellState==PatternCellStates.Match && mainValue==0) {
                    mainValue = currentElement
                }
                if (cellState==PatternCellStates.Match && mainValue!=currentElement) {
                    return false
                } else if (cellState==PatternCellStates.Match && mainValue==currentElement) {
                    coordinates.push(new Coordinate(row, column))
                }
            }
        }
        return coordinates
    }
}