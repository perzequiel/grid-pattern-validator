import { FindPosibleMatches } from "./FindPosibleMatches";
import { Grid  } from "./Grid";
import { GridPattern } from "./GridPattern";

const gridGenerator = (limitRow: number, limitColumns: number) => {
    const GEMS: string[] = ["🍇" , "🍌" , "🍍" , "🍎" , "🍏" , "🍐" ,"🍑" ] 
    const grid: string[][] = []
    for (let row = 0; row < limitRow; row++) {
        const gems: string[] = []
        for (let column = 0; column< limitColumns; column++) {
            const id = Math.floor(Math.random() * GEMS.length)
            gems.push(GEMS[id])
        }
        grid.push(gems)
        console.log(JSON.stringify(grid[grid.length-1]).replace('["',"").replace('"]',"").split('","').join("  ")+'\n')
    }
    return grid
}


const patterns = [
    [
        [1,0,1,1],
    ],[
        [1,1,0,1],
    ],[
        [1,1,0],
        [0,0,1],
    ],[
        [1,0,1],
        [0,1,0],
    ],[
        [1,0,0],
        [0,1,1],
    ],[
        [0,1,1],
        [1,0,0],
    ],[
        [0,1,0],
        [1,0,1],
    ],[ 
        [0,0,1],
        [1,1,0],
]]

let posibleMatches: any = []
const grid = new Grid(gridGenerator(8,10));
for (const matrix of patterns) {
    const pattern = new GridPattern(matrix);
    posibleMatches = posibleMatches.concat(FindPosibleMatches.run(grid, pattern))
    
}
console.log('posibleMatches')
console.log(posibleMatches)

console.log('check MATCH 3')
console.log(FindPosibleMatches.run(grid, new GridPattern([[1,1,1]])))
console.log('check MATCH 4')
console.log(FindPosibleMatches.run(grid, new GridPattern([[1,1,1,1]])))