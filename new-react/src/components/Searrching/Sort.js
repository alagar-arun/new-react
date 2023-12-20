import React from 'react'
import MergeSort from './MergeSort'


const Sort = () => {

    // ---------Bubble sort------------------

    // const BubbleSort = (arr) => {
    //     for (var i = 0; i < arr.length; i++) {
    //         for (var j = 0; j < arr.length - i - 1; j++) {
    //             if (arr[j + 1] < arr[j]) {
    //                 [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
    //             }
    //         }
    //     }
    //     return arr
    //  } 
    // const arr = [4, 6, 1, 56, 7, -1, -9];

    // console.log(BubbleSort(arr));



    // const InsertionSort = (arr) => {
    //     for (let i = 1; i < arr.length; i++) {
    //         for (let j = i-1; j > -1; j--) {
    //             if (arr[j + 1] < arr[j]) {
    //                 [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
    //             }
    //         }
    //     }
    //     return arr
    // }


    // const InsertionSort = () => {
    //     for (var i = 0; i < arr.length; i++) {
    //         for (var j = i - 1; j > -1; j--) {
    //             if (arr[j + 1] < arr[j]) {
    //                 [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
    //             }
    //         }
    //     }
    //     return arr
    // }

    // const arr = [4, 6, 1, 56, 7, -1, -9];
    // console.log(InsertionSort(arr), "sjsj");




    const SelectionSort = (arr) => {
        var min
        for (var i = 0; i < arr.length; i++) {
            min = i
            for (var j = i + 1; j < arr.length; j++) {
                if (arr[j]<arr[min]) {
                    min=j
                }
            }
            if(min!==i){
                [arr[i], arr[min]] = [arr[min], arr[i]]
            }   
        }
     
        return arr
    }


    const arr = [4, 6, 1, 56, 7, -1, -9];
    console.log(SelectionSort(arr));

    return (
        <>
            <h2>sorting</h2>
            <MergeSort />
        </>
    )
}

export default Sort