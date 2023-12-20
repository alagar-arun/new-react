import React from 'react'

const jumbingSearch = (arr, target) => {
    let len = arr.length;
    let step = Math.floor(Math.sqrt(len));
    let blockStart = 0;
    let currentStep = step;
    while (arr[Math.min(len, currentStep) - 1] < target) {
        blockStart = currentStep;
        currentStep += step;
        if (blockStart >= len) {
            return -1
        }
    }

    while (arr[blockStart] < target) {
        blockStart++
        if (blockStart == Math.min(len, currentStep)) {
            return -1
        }
    }
    if (arr[blockStart] == target) {
        return blockStart
    } else {
        return -1
    }
}


const arr = [1, 2, 3, 6, 4, 78];
const target = 3
console.log(jumbingSearch(arr, target))
const JumpSearch = () => {
    return (
        <div>
            <p>jump search</p>
        </div>
    )
}

export default JumpSearch