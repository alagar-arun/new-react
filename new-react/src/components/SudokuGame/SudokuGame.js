import { warning } from '@remix-run/router';
import React, { useRef, useState } from 'react';
import './Sudokugame.css'

const SudokuGame = () => {

    const [winner, settWinner] = useState(false)
    const [loser, settLoser] = useState(false)
    const [checker, setChecker] = useState(false);

    const [keyboarda, setKeyboarda] = useState();
    const [keyboardb, setKeyboardb] = useState();

    console.log(keyboarda, keyboardb, "keyboardb");

    const inputRef = useRef();

    const initial = [
        [-1, 5, -1, 9, -1, -1, -1, -1, -1],
        [8, -1, -1, -1, 4, -1, 3, -1, 7],
        [-1, -1, -1, 2, 8, -1, 1, 9, -1],
        [5, 3, 8, 6, -1, 7, 9, 4, -1],
        [-1, 2, -1, 3, -1, 1, -1, -1, -1],
        [1, -1, 9, 8, -1, 4, 6, 2, 3],
        [9, -1, 7, 4, -1, -1, -1, -1, -1],
        [-1, 4, 5, -1, -1, -1, 2, -1, 9],
        [-1, -1, -1, -1, 3, -1, -1, 7, -1]
    ]

    const [sudoku, setSudoku] = useState(initial)
    const [rowval, setRowaval] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    const [colval, setColval] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);

    const getDeepCopy = (arr) => {
        return JSON.parse(JSON.stringify(arr));

    }

    const changeinput = (e, row, col) => {
        var val = parseInt(e.target.value) || -1, grid = getDeepCopy(sudoku);
        console.log(row, "row")
        console.log(col, "col")

        if (val === -1 || val >= 1 && val <= 9) {
            grid[row][col] = val;


        }

        let checkingrow = sudoku[row].includes(val);
        console.log(checkingrow, "checkingrow")


        let checkingcol = () => {
            return sudoku.map(data => data[col]).includes(val)
        }


        let checkingBox = () => {

            let checkArr = [];
            let rowStart = row - (row % 3);
            let colStart = col - (col % 3);

            console.log(rowStart, "rowStartrowStart")
            console.log(colStart, "colStart")
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    checkArr.push(sudoku[rowStart + i][colStart + j])
                }
            }
            return checkArr.includes(val)

        }


        if (checkingrow || checkingcol() || checkingBox()) {
            console.log("kkkkkkkkkkkkk", "redd");
            // alert("Wrong Move");
            setChecker(!checker)
            // return  inputRef.current.focus ? inputRef.current.style.backgroundColor = "red" : ""
        }

        setSudoku(grid)

    }


    const checkRow = (grid, row, num) => {
        return grid[row].indexOf(num) === -1
    }

    const checkCol = (grid, col, num) => {
        return grid.map(row => row[col]).indexOf(num) === -1

    }

    const checkBox = (grid, row, col, num) => {
        let boxarr = [];
        let rowStart = row - (row % 3)
        let colStart = col - (col % 3);
        console.log(row,"row");
        console.log(col,"col");
        console.log(rowStart,"rowStart");
        console.log(colStart,"colStart");
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                console.log(rowStart,"rowStart");
                console.log(colStart,"colStart");
                boxarr.push(grid[rowStart + i][colStart + j])
            }
        }
        return boxarr.indexOf(num) === -1
    }


    const checkvalid = (grid, row, col, num) => {
        if (checkRow(grid, row, num) && checkCol(grid, col, num) && checkBox(grid, row, col, num)) {
            return true
        }
        return false
    }

    const getnext = (row, col) => {
        return col !== 8 ? [row, col + 1] : row != 8 ? [row + 1, 0] : [0, 0]
    }

    const solver = (grid, row = 0, col = 0) => {
        if (grid[row][col] !== -1) {
            let islast = row >= 8 && col >= 8
            if (!islast) {
                let [newRow, newCol] = getnext(row, col);
                return solver(grid, newRow, newCol)
            }
        }

        for (let num = 1; num <= 9; num++) {
            if (checkvalid(grid, row, col, num)) {

                grid[row][col] = num;
                let [newRow, newCol] = getnext(row, col);

                if (!newRow && !newCol) {
                    return true
                }

                if (solver(grid, newRow, newCol)) {
                    return true
                }
            }
        }
        grid[row][col] = -1;
        return false


    }

    const SolveSoduku = () => {
        let sudo = getDeepCopy(initial);
        solver(sudo);
        setSudoku(sudo)
    }

    const compareSoduku = (currentSoduku, solveSoduku) => {
        let res = {
            isCompete: true,
            isSolvabel: true
        }
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                if (currentSoduku[i][j] != solveSoduku[i][j]) {
                    if (currentSoduku[i][j] != -1) {
                        res.isSolvabel = false;
                    }
                    res.isCompete = false
                }
            }
        }
        return res
    }

    const checkSoduku = () => {
        let sudokuarr = getDeepCopy(initial);
        solver(sudokuarr);
        let compare = compareSoduku(sudoku, sudokuarr)
        if (compare.isCompete) {
            settWinner(!winner)
        } else {
            settLoser(!loser)
        }
    }

    const resetSoduku = () => {
        setSudoku(initial);
        settWinner(false);
        settLoser(false);
        setChecker(false)
    }

    const ClickedInput = (a, b) => {
        setKeyboarda(a)
        setKeyboardb(b)
        var first = a
        var second = b
        console.log(first, second, "hshsh");
        // const ans = inputRef.current.focus ? inputRef.current.style.backgroundColor = "red" : ""
    }

    const warning = () => {
        setChecker(false)
    }
    return (
        <>
            <center>
                <h1 className='soduku-tittle'>SUDOKU</h1>
                <div className='soduku-top '>
                    <table>
                        <tbody>
                            {
                                rowval.map((row, rindex) => {

                                    return <tr key={rindex} className={(row + 1) % 3 === 0 ? "inputBorderrow" : ""}>
                                        {
                                            colval.map((col, cindex) => {
                                                return <td key={rindex + cindex} className={(col + 1) % 3 === 0 ? "inputBordercol" : ""}>
                                                    <input className='inputBox'
                                                        value={sudoku[row][col] === -1 ? "" : sudoku[row][col]}
                                                        onChange={(e) => changeinput(e, row, col)}
                                                        disabled={initial[row][col] !== -1}
                                                        onClick={() => ClickedInput(row, col)}
                                                        ref={inputRef}
                                                    />
                                                </td>
                                            })
                                        }
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>

                    <div className='soduku-bottom'>
                        <button onClick={SolveSoduku} className="soduku-buttons">Solve</button>
                        <button onClick={checkSoduku} className="soduku-buttons">check</button>
                        <button onClick={resetSoduku} className="soduku-buttons"> reset</button>
                    </div>

                </div>
                <div className='soduku-result'>
                    <p className={winner ? "soduku-result-winner" : "block"}>your a winner</p>
                    <p className={loser ? "soduku-result-again" : "block"}>Try again with your best moves</p>
                    <p className={checker ? "wrong-move" : "block"} onClick={warning}>Wrong move</p>
                </div>
            </center>
        </>

    )
}

export default SudokuGame