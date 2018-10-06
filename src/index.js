function solved(array) {
    let res = [0, 0];

    if (locationDontFound(array, res)) return true;
    let row = res[0];
    let column = res[1];

    for (let num = 1; num < 10; num++) {
        if (locationFound(array, row, column, num)) {
            array[row][column] = num;
            if (solved(array)) return true;
            array[row][column] = 0;
        }
    }
    return false;
}

function isRowOk(array, row, num) {
    for (let column = 0; column < 9; column++) {
        if (array[row][column] === num) {
            return false;
        }
    }
    return true;
}

function locationFound(array, row, column, num) {
    return isColOk(array, column, num) && isCubicOk(array, row - row % 3, column - column % 3, num)
        && isRowOk(array, row, num);
}

function locationDontFound(array, res) {
    for (let row = 0; row < 9; row++) {
        for (let column = 0; column < 9; column++) {
            if (array[row][column] === 0) {
                res[0] = row;
                res[1] = column;
                return false;
            }
        }
    }
    return true;
}


function isColOk(array, column, num) {
    for (let row = 0; row < 9; row++) {
        if (array[row][column] === num) {
            return false;
        }
    }
    return true;
}

function isCubicOk(array, row, column, num) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (array[i + row][j + column] === num) {
                return false;
            }
        }
    }
    return true;
}

module.exports = function solveSudoku(matrix) {
    let result = matrix;

    if (solved(matrix)) {
        result = matrix;
    }

    return result;
};
